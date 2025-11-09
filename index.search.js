var relearn_search_index = [
  {
    "breadcrumb": "Overview",
    "content": "Installation Installation from Unreal Marketplace Up-to-date general guide for Working with plugins in Unreal Engine\nPlugin location If by any reason, you are installing the plugin manually, unpack it to\n{PROJECT_DIRECTORY/Plugins}You can also unpack it to you main Unreal installation which is located under\nC:\\Program Files\\Epic Games\\UE_[version]\\Engine\\Plugins on Windows /Users/Shared/Epic Games/UE_[version]/Engine/Plugins on macOS Enabling the plugin Navigate to editor top bar and open Edit -\u003e Plugins.\nSearch for Metadata Editor and toggle the plugin.\nRemember to restart Unreal.",
    "description": "Installation Installation from Unreal Marketplace Up-to-date general guide for Working with plugins in Unreal Engine\nPlugin location If by any reason, you are installing the plugin manually, unpack it to\n{PROJECT_DIRECTORY/Plugins}You can also unpack it to you main Unreal installation which is located under\nC:\\Program Files\\Epic Games\\UE_[version]\\Engine\\Plugins on Windows /Users/Shared/Epic Games/UE_[version]/Engine/Plugins on macOS Enabling the plugin Navigate to editor top bar and open Edit -\u003e Plugins.\nSearch for Metadata Editor and toggle the plugin.",
    "tags": [],
    "title": "Installation",
    "uri": "/installation/index.html"
  },
  {
    "breadcrumb": "Overview",
    "content": "Metadata Editor User Guide It’s main purpose is to make metadata editing simple and thus this guide also will be simple. Key information Editor works best with one asset at a time but you can use it to apply same metadata to multiple assets as well.\nEdit metadata of an asset 1. Opening the editor. Pick an asset of choice in Content Browser and Right Mouse Button on it. Navigate to Asset Actions -\u003e Metadata Editor 2. Editing. Add, remove and edit metadata rows as you wish. You changes will only take place if you save them with Apply button.\n3. Multiple assets. If you selected multiple assets before opening the editor, the editor will show only one main asset in the view.\nYou can still choose to apply your changes to all selected assets though. Choose one of two modes:\nAppend - It will not remove any tags. It may overwrite tags if selected asset had same tag names as the ones that you are applying. OOverwrite - Will remove all tags from assets before applying changes from editor. This way all assets will end up with same metadata. 4. Additional features. Undo Undo / Redo is fully supported in rows editor. However, setting metadata tags is not undoable. The good news is that all edited assets will be marked as Dirty in the editor and you can always revert the changes by reloading asset from drive or version control system.\nCopy as JSON You can copy all tags visible in editor to clipboard as JSON.\nBasic validation The editor has basic validation that makes sure you don’t:\nLeave any values without tag assigned Have any duplicate tag names Exceed tag length limit (1023 characters) ",
    "description": "Metadata Editor User Guide It’s main purpose is to make metadata editing simple and thus this guide also will be simple. Key information Editor works best with one asset at a time but you can use it to apply same metadata to multiple assets as well.\nEdit metadata of an asset 1. Opening the editor. Pick an asset of choice in Content Browser and Right Mouse Button on it. Navigate to Asset Actions -\u003e Metadata Editor 2.",
    "tags": [],
    "title": "User Guide",
    "uri": "/userguide/index.html"
  },
  {
    "breadcrumb": "Overview",
    "content": "Why use asset Metadata at all? Metadata describes an asset Basic metadata like asset type, mesh poly count or program of origin can be extremely useful.\nSuch information, if easily accessible can be a helpful guide for anyone looking for asset that matches (or doesn’t) certain criteria.\nIt can help you in daily situations like looking for an author of an asset.\nOf course, this case should be already taken cared by a Version Control System but in that case, it’s the VCS that stores the metadate because metadata can be stored in multiple places - assets itself, VCS systems, external files or databases.\nIt helps you find assets Imagine a situation where all assets exported with Animation Exporter 1.3 are broken.\nWhat if it has been in use for a whole month? What if artists were using different versions of exporter at the same time?\nWe should be able to find all those broken assets and either re-export them or apply some kind, of a fix.\nSupposing that all assets store software of origin, exporter and their versions in metadata, finding broken assets can be automated and done in few minutes even if thera are hundreds of assets to filter.\nThat may sound like an extreme case, but using metadata to find assets to be processed in such or other way is common and the bigger the project, the more often it will be needed.\nSaving metadata is not that hard to implement and can really save your day in such situations.\nIt may drive automation behaviour Some metadata is not primarily meant for describing or finding assets.\nSometimes some helper variable is meant for a tool.\nMaybe this variable will decide what kind of settings will be applied after importing.\nOr maybe, it will help you distinguish mesh that is being re-imported from a mesh that is being imported for a first time because import system that you are extending does not do it for you\nBetter to have it, than not to Metadata may not come handy on your first day of work. You may start storing it and forget about it for some time without having a need to use it.\nIt’s alright.\nBut it may get really bad when you finally need it but don’t have.\nIt’s one of those things that are easy to start gathering and don’t require sophisticated solutions at the beginning.\nThat little extra effort at the beginning can save you a lot of time and money when something goes sideways.\\",
    "description": "Why use asset Metadata at all? Metadata describes an asset Basic metadata like asset type, mesh poly count or program of origin can be extremely useful.\nSuch information, if easily accessible can be a helpful guide for anyone looking for asset that matches (or doesn’t) certain criteria.\nIt can help you in daily situations like looking for an author of an asset.\nOf course, this case should be already taken cared by a Version Control System but in that case, it’s the VCS that stores the metadate because metadata can be stored in multiple places - assets itself, VCS systems, external files or databases.",
    "tags": [],
    "title": "Why Metadata",
    "uri": "/whymetadata/index.html"
  },
  {
    "breadcrumb": "Overview",
    "content": "\rThis plugin has been brought to you by Tech Art Corner. I hope it will serve you well, And you will no longer be irritated by lack of some simple metadata editor that does not require scripting or creating a node graph to just add a simple tag to an asset.\nI’m open to feedback and if by any chance, this plugin gets popular, I’m looking forward to making it better.\nUnreal Engine Automation Courses If you, by any chance are a current or aspiring Technical Artist who is interested in automating even more and making great Unreal tools, I would love to advertise my courses on:\nUnreal Engine 5 Python Automation Course Unreal Engine 5 Blueprint Automation Course YouTube Channel For those who prefer free content, I also have a YouTube Channel which I’m trying to fill with Unreal tutorials.",
    "description": "This plugin has been brought to you by Tech Art Corner. I hope it will serve you well, And you will no longer be irritated by lack of some simple metadata editor that does not require scripting or creating a node graph to just add a simple tag to an asset.\nI’m open to feedback and if by any chance, this plugin gets popular, I’m looking forward to making it better.",
    "tags": [],
    "title": "Tech Art Corner",
    "uri": "/techartcorner/index.html"
  },
  {
    "breadcrumb": "Overview",
    "content": "Discord You can contact me on Discord. It may be easier to use than email and will let us have a more realtime conversation.\nEmail techartcorner@gmail.com",
    "description": "Discord You can contact me on Discord. It may be easier to use than email and will let us have a more realtime conversation.\nEmail techartcorner@gmail.com",
    "tags": [],
    "title": "Support",
    "uri": "/support/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Unreal Metadata Editor A friendly user interface for editing Unreal asset metadata tags. Apply changes to one or more assets at once.",
    "description": "Unreal Metadata Editor A friendly user interface for editing Unreal asset metadata tags. Apply changes to one or more assets at once.",
    "tags": [],
    "title": "Overview",
    "uri": "/index.html"
  },
  {
    "breadcrumb": "Overview",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "breadcrumb": "Overview",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "/tags/index.html"
  }
]
