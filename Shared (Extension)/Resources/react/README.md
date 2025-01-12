# how to solve file not found:

step 1:
Xcode -> Project settings -> extension target -> build phases -> copy bundle resource

add the 'dist' folder of your frontend project.

check the copy item if needed
select the create folder reference

step 2:

in mainest.json, the file path should be changed to 'dist/path/to/htmlfile'

note: if the html file uses absolute path, change it to relative path, relative to your html file.

if you're using vite, set `base: './'` in your vite config will auto generate relative paths for css/js files.
