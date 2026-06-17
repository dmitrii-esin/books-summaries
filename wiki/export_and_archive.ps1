$ids = @(
    'b4b986e2-8eb8-4724-a594-0f58641b9cbd',
    '53801d9a-0a9a-4ee3-b809-591688336393',
    'edffbbd3-72c9-4f3b-a787-93393c277683',
    '1ad84747-3076-46af-9b3b-9b3b866c0685',
    '5300b721-8b00-43fe-b6a4-bf301afc1021'
)
$names = @(
    'sapolsky_researcher',
    'taleb_researcher',
    'kahneman_researcher',
    'newport_researcher',
    'flow_oakley_researcher'
)
$base = 'C:\Users\dmitr\.gemini\antigravity\brain'
$dest = 'c:\Projects\books\wiki\subagent_logs'

New-Item $dest -ItemType Directory -Force | Out-Null

for ($i = 0; $i -lt $ids.Count; $i++) {
    $src = Join-Path $base $ids[$i] | Join-Path -ChildPath '.system_generated\logs\transcript_full.jsonl'
    $target = Join-Path $dest ($names[$i] + '.jsonl')
    if (Test-Path $src) {
        Copy-Item $src $target -Force
        Write-Host "Copied: $($names[$i])"
    } else {
        Write-Host "Not found: $($names[$i]) at $src"
    }
}

# Re-create the zip archive with all wiki content
Remove-Item 'c:\Projects\cognitive-architecture-dashboard.zip' -Force -ErrorAction SilentlyContinue

$staging = 'c:\Projects\_staging_books'
Remove-Item $staging -Recurse -Force -ErrorAction SilentlyContinue
New-Item $staging -ItemType Directory | Out-Null

$exclude = @('node_modules', '.next', '.git')
Get-ChildItem 'c:\Projects\books' -Directory | Where-Object { $exclude -notcontains $_.Name } | ForEach-Object {
    Copy-Item $_.FullName (Join-Path $staging $_.Name) -Recurse
}
Get-ChildItem 'c:\Projects\books' -File | Copy-Item -Destination $staging

Compress-Archive -Path "$staging\*" -DestinationPath 'c:\Projects\cognitive-architecture-dashboard.zip' -Force

Remove-Item $staging -Recurse -Force

$size = [math]::Round((Get-Item 'c:\Projects\cognitive-architecture-dashboard.zip').Length / 1KB)
Write-Host "`nArchive created: c:\Projects\cognitive-architecture-dashboard.zip ($size KB)"
