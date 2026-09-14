param(
    [string]$RootPath = (Split-Path -Parent $PSScriptRoot)
)

# Generates missing modular world pages and their data files. Existing files are preserved.
# New data files include optional heroVideo and heroPoster fields; heroImages remain the fallback.
$worldsPath = Join-Path $RootPath 'worlds\worlds-data.js'
$worldsDirectory = Join-Path $RootPath 'worlds'

if (-not (Test-Path -LiteralPath $worldsPath)) {
    throw "Could not find worlds-data.js at $worldsPath"
}

$source = Get-Content -LiteralPath $worldsPath -Raw
$source = [regex]::Replace($source, '/\*[\s\S]*?\*/', '')
$source = [regex]::Replace($source, '//.*', '')
$worldIds = [regex]::Matches($source, '\bid\s*:\s*"([^"]+)"') |
    ForEach-Object { $_.Groups[1].Value } |
    Select-Object -Unique

if ($worldIds.Count -eq 0) {
    throw "No world IDs were found in $worldsPath"
}

$htmlTemplate = @'
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>World | VTail</title>
    <meta name="description" content="A VTail VRChat world." />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="/style.css" />
    <link rel="icon" type="image/png" href="/static/VTail_Logo.png" />
  </head>
  <body data-world-id="__WORLD_ID__">
    <div class="page-glow left"></div>
    <div class="page-glow right"></div>
    <div id="site-header"></div>
    <main id="world-page"></main>
    <div id="site-footer"></div>
    <script src="/worlds/worlds-data.js"></script>
    <script src="/worlds/__WORLD_ID__-data.js"></script>
    <script src="/partials/world-page.js"></script>
    <script>
      async function loadPartial(id, file) {
        const element = document.getElementById(id);
        const response = await fetch(file);
        if (!response.ok) throw new Error('Failed to load ' + file + ': ' + response.status);
        element.innerHTML = await response.text();
      }
      function initializeMenu() {
        const toggle = document.querySelector('.menu-toggle');
        const navigation = document.getElementById('main-navigation');
        if (!toggle || !navigation) return;
        toggle.addEventListener('click', () => {
          const open = toggle.getAttribute('aria-expanded') === 'true';
          toggle.setAttribute('aria-expanded', String(!open));
          toggle.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
          navigation.classList.toggle('is-open', !open);
        });
      }
      window.addEventListener('DOMContentLoaded', async () => {
        await Promise.all([
          loadPartial('site-header', '/partials/header-cinematic.html'),
          loadPartial('site-footer', '/partials/footer-cinematic.html')
        ]);
        initializeMenu();
        renderWorldPage(document.body.dataset.worldId);
      });
    </script>
  </body>
</html>
'@

$dataTemplate = @'
window.worldPageData = {
  // Set heroVideo to an MP4 path to use a looping video instead of heroImages.
  // Leave heroVideo empty to use the image carousel fallback.
  heroVideo: '',
  // Optional poster image shown before the video is ready.
  heroPoster: '',
  heroImages: [],
  aboutHeading: 'About this world',
  aircraftHeading: 'Vehicle lineup',
  about: [
    {
      text: 'Add a description for this world.',
      image: '',
      imageAlt: '',
      align: 'image-right',
      list: []
    }
  ]
};
'@

foreach ($worldId in $worldIds) {
    $htmlPath = Join-Path $worldsDirectory "$worldId.html"
    $dataPath = Join-Path $worldsDirectory "$worldId-data.js"

    if (Test-Path -LiteralPath $htmlPath) {
        Write-Output "Skipped existing page: $htmlPath"
    } else {
        $html = $htmlTemplate.Replace('__WORLD_ID__', $worldId)
        Set-Content -LiteralPath $htmlPath -Value $html -Encoding utf8
        Write-Output "Created page: $htmlPath"
    }

    if (Test-Path -LiteralPath $dataPath) {
        Write-Output "Skipped existing data: $dataPath"
    } else {
        Set-Content -LiteralPath $dataPath -Value $dataTemplate -Encoding utf8
        Write-Output "Created data template: $dataPath"
    }
}


