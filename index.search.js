var relearn_search_index = [
  {
    "breadcrumb": "Overview",
    "content": "Installation Installation from Unreal Marketplace Up to date installation guide for Unreal Marketplace users: Official Documentation\nPlugin location If by any reason, you are installing the plugin manually, unpack it to\n{PROJECT_DIRECTORY/Plugins}You can also unpack it to you main Unreal installation which is located under\nC:\\Program Files\\Epic Games\\UE_[version]\\Engine\\Plugins on Windows /Users/Shared/Epic Games/UE_[version]/Engine/Plugins on macOS Enabling the plugin Navigate to editor top bar and open Edit -\u003e Plugins. Search for Metadata Editor and toggle the plugin. Remember to restart Unreal. ",
    "description": "Installation Installation from Unreal Marketplace Up to date installation guide for Unreal Marketplace users: Official Documentation\nPlugin location If by any reason, you are installing the plugin manually, unpack it to\n{PROJECT_DIRECTORY/Plugins}You can also unpack it to you main Unreal installation which is located under\nC:\\Program Files\\Epic Games\\UE_[version]\\Engine\\Plugins on Windows /Users/Shared/Epic Games/UE_[version]/Engine/Plugins on macOS Enabling the plugin Navigate to editor top bar and open Edit -\u003e Plugins. Search for Metadata Editor and toggle the plugin.",
    "tags": [],
    "title": "Installation",
    "uri": "/UnrealMetadataEditor/installation/index.html"
  },
  {
    "breadcrumb": "Overview",
    "content": "Metadata Editor User Guide It’s main purpose is to make metadata editing simple and thus this guide also will be simple. Key information Editor can edit only one asset at a time. If multiple assets were selected, editor will open for the first one. Name of selected asset is always visible in top left side of the editor.\nEdit metadata of an asset Pick an asset of choice in Content Browser and Right Mouse Button on it. Navigate to Asset Actions -\u003e Metadata Editor Metadata Editor can be used in a separate window or docked. Adjust it to your liking. Use Add/Remove buttons to add or remove more metadata tags. Each name and value is editable. View As Json will reveal a json text of whole metadata. This view is not editable but may be useful for those who need a text representation of all metadata tags. JSON value may not be a correct JSON if you use escape characters or double quotation marks in tag names or values. Press Save Metadata to write metadata to asset. ",
    "description": "Metadata Editor User Guide It’s main purpose is to make metadata editing simple and thus this guide also will be simple. Key information Editor can edit only one asset at a time. If multiple assets were selected, editor will open for the first one. Name of selected asset is always visible in top left side of the editor.\nEdit metadata of an asset Pick an asset of choice in Content Browser and Right Mouse Button on it.",
    "tags": [],
    "title": "User Guide",
    "uri": "/UnrealMetadataEditor/userguide/index.html"
  },
  {
    "breadcrumb": "Overview",
    "content": "Why use asset Metadata at all? Metadata describes an asset Basic metadata like asset type, mesh poly count or program of origin can be extremely useful.\nSuch information, if easily accessible can be a helpful guide for anyone looking for asset that matches (or doesn’t) certain criteria.\nIt can help you in daily situations like looking for an author of an asset.\nOf course, this case should be already taken cared by a Version Control System but in that case, it’s the VCS that stores the metadate because metadata can be stored in multiple places - assets itself, VCS systems, external files or databases.\nIt helps you find assets Imagine a situation where all assets exported with Animation Exporter 1.3 are broken.\nWhat if it has been in use for a whole month? What if artists were using different versions of exporter at the same time?\nWe should be able to find all those broken assets and either re-export them or apply some kind, of a fix.\nSupposing that all assets store software of origin, exporter and their versions in metadata, finding broken assets can be automated and done in few minutes even if thera are hundreds of assets to filter.\nThat may sound like an extreme case, but using metadata to find assets to be processed in such or other way is common and the bigger the project, the more often it will be needed.\nSaving metadata is not that hard to implement and can really save your day in such situations.\nIt may drive automation behaviour Some metadata is not primarily meant for describing or finding assets.\nSometimes some helper variable is meant for a tool.\nMaybe this variable will decide what kind of settings will be applied after importing.\nOr maybe, it will help you distinguish mesh that is being re-imported from a mesh that is being imported for a first time because import system that you are extending does not do it for you\nBetter to have it, than not to Metadata may not come handy on your first day of work. You may start storing it and forget about it for some time without having a need to use it.\nIt’s alright.\nBut it may get really bad when you finally need it but don’t have.\nIt’s one of those things that are easy to start gathering and don’t require sophisticated solutions at the beginning.\nThat little extra effort at the beginning can save you a lot of time and money when something goes sideways.\\",
    "description": "Why use asset Metadata at all? Metadata describes an asset Basic metadata like asset type, mesh poly count or program of origin can be extremely useful.\nSuch information, if easily accessible can be a helpful guide for anyone looking for asset that matches (or doesn’t) certain criteria.\nIt can help you in daily situations like looking for an author of an asset.\nOf course, this case should be already taken cared by a Version Control System but in that case, it’s the VCS that stores the metadate because metadata can be stored in multiple places - assets itself, VCS systems, external files or databases.",
    "tags": [],
    "title": "Why Metadata",
    "uri": "/UnrealMetadataEditor/whymetadata/index.html"
  },
  {
    "breadcrumb": "Overview",
    "content": "\rThis plugin has been brought to you by Tech Art Corner. I hope it will serve you well, And you will no longer be irritated by lack of some simple metadata editor that does not require scripting or creating a node graph to just add a simple tag to an asset.\nI’m open to feedback and if by any chance, this plugin gets popular, I’m looking forward to making it better.\nUnreal Python Course If you, by any chance are a current or aspiring Technical Artist who is interested in automating even more and making great Unreal tools, I would love to advertise my Unreal Engine 5 Python Automation Course.\nYouTube Channel For those who prefer free content, I also have a YouTube Channel which I’m trying to fill with Unreal tutorials.",
    "description": "This plugin has been brought to you by Tech Art Corner. I hope it will serve you well, And you will no longer be irritated by lack of some simple metadata editor that does not require scripting or creating a node graph to just add a simple tag to an asset.\nI’m open to feedback and if by any chance, this plugin gets popular, I’m looking forward to making it better.",
    "tags": [],
    "title": "Tech Art Corner",
    "uri": "/UnrealMetadataEditor/techartcorner/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Unreal Metadata Editor A friendly user interface for editing Unreal asset metadata. Currently, plugin supports editing a single asset at once.",
    "description": "Unreal Metadata Editor A friendly user interface for editing Unreal asset metadata. Currently, plugin supports editing a single asset at once.",
    "tags": [],
    "title": "Overview",
    "uri": "/UnrealMetadataEditor/index.html"
  },
  {
    "breadcrumb": "Overview",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categories",
    "uri": "/UnrealMetadataEditor/categories/index.html"
  },
  {
    "breadcrumb": "Overview",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "/UnrealMetadataEditor/tags/index.html"
  }
]
