Write-Host "setEnv"
$myText = Get-Content .\ClientApp\src\environments\environment.ts -Raw
$myText = $myText -replace 'export const environment =','' -replace '};','}'
$myJson = $myText | ConvertFrom-Json
Write-Host '***********************************'
foreach ($v in $myJson.psobject.properties | select name,value)
{
	if (@("production","environment") -contains $v.name) {
		Write-Verbose "skipped:$($v.name)"
	} else {
		[System.Environment]::SetEnvironmentVariable($v.name,$v.value)
		Write-Host "$($v.name)=$($v.value)"
	}
}
Write-Host '***********************************'
Write-Host 'System.Environment variables saved.'
Write-Host '***********************************'
