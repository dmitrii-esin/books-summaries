$ErrorActionPreference = "SilentlyContinue"
Remove-Item "c:\Projects\cognitive-architecture-dashboard.zip" -Force

# Create a temp staging directory
$staging = "c:\Projects\_staging_books"
Remove-Item $staging -Recurse -Force
New-Item $staging -ItemType Directory | Out-Null

# Copy project excluding node_modules, .next, .git
$exclude = @("node_modules", ".next", ".git")
Get-ChildItem "c:\Projects\books" -Directory | Where-Object { $exclude -notcontains $_.Name } | ForEach-Object {
    Copy-Item $_.FullName "$staging\$($_.Name)" -Recurse
}
# Copy root files
Get-ChildItem "c:\Projects\books" -File | Copy-Item -Destination $staging

# Create zip
Compress-Archive -Path "$staging\*" -DestinationPath "c:\Projects\cognitive-architecture-dashboard.zip" -Force

# Cleanup
Remove-Item $staging -Recurse -Force

$size = [math]::Round((Get-Item "c:\Projects\cognitive-architecture-dashboard.zip").Length / 1KB)
Write-Host "Archive created: c:\Projects\cognitive-architecture-dashboard.zip ($size KB)"
