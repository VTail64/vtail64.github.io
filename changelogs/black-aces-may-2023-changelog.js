// black-aces-may-2024-changelog.js
const blackAcesMay2024Changelog = [];

const categoryColors = { "Added":{bg:'rgba(34,197,94,0.15)',text:'#86efac',border:'rgba(34,197,94,0.4)'},"Changed":{bg:'rgba(59,130,246,0.15)',text:'#93c5fd',border:'rgba(59,130,246,0.4)'},"Fixed":{bg:'rgba(234,179,8,0.15)',text:'#fde047',border:'rgba(234,179,8,0.4)'},"Removed":{bg:'rgba(239,68,68,0.15)',text:'#fca5a5',border:'rgba(239,68,68,0.4)'}};
function renderChangelog(c){const e=document.getElementById(c);if(!e)return;e.innerHTML='<p class="text-gray-500 text-sm italic">No changelog entries yet.</p>';} function toggleChangelog(b){if(!b)return;}
