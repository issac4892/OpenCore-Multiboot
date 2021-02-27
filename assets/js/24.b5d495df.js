(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{411:function(e,t,o){"use strict";o.r(t);var r=o(22),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"using-bootstrap-efi"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-bootstrap-efi"}},[e._v("#")]),e._v(" Using Bootstrap.efi")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#preperation"}},[e._v("Preparation")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#troubleshooting"}},[e._v("Troubleshooting")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#quick-uefi-shell-reference-guide"}},[e._v("Quick UEFI Shell Reference Guide")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#adding-opencore-to-your-bios"}},[e._v("Adding OpenCore to your BIOS")])])]),e._v(" "),o("p",[e._v("So with OpenCore 0.5.8 and newer, we get a neat little file inside our EFI/OC/Bootstrap folder called Bootstrap.efi. What this allows us to do is add OpenCore to our motherboard's boot menu and prevent issues where either Windows or Linux try to overwrite the BOOTx64.efi file which can happen during updates and completely delete any way of booting OpenCore.")]),e._v(" "),o("h2",{attrs:{id:"preparation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#preparation"}},[e._v("#")]),e._v(" Preparation")]),e._v(" "),o("p",[e._v("So to start we're gonna need the following:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenCore 0.5.8 or newer"),o("OutboundLink")],1),e._v(" "),o("ul",[o("li",[e._v("Verify you have EFI/OC/Bootstrap/Bootstrap.efi")])])]),e._v(" "),o("li",[e._v("config.plist settings:\n"),o("ul",[o("li",[e._v("Misc -> Security -> BootProtect -> Bootstrap")]),e._v(" "),o("li",[e._v("UEFI -> Quirks -> RequestBootVarRouting -> True")])])]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenShell"),o("OutboundLink")],1),e._v(" "),o("ul",[o("li",[e._v("Bundled with OpenCore")]),e._v(" "),o("li",[e._v("Remember to add this to both EFI/OC/Tools and config.plist -> Misc -> Tools")]),e._v(" "),o("li",[e._v("This is mainly for troubleshooting")])])])]),e._v(" "),o("h2",{attrs:{id:"booting"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#booting"}},[e._v("#")]),e._v(" Booting")]),e._v(" "),o("p",[e._v("So once you've got the prerequisites out of the way, we're ready to boot! So what the first boot with these settings enabled is to create a new boot option in our BIOS(Boot9696) and every boot after this will update the entry making sure it's correct. This now allows us to either remove BOOTx64.efi or not worry about it when other OSes overwrite this file.")]),e._v(" "),o("p",[e._v("If no new boot option is created, you can go down and follow the troubleshooting steps on manually adding it. But triple check the above settings are correct on your system.")]),e._v(" "),o("h2",{attrs:{id:"troubleshooting"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),o("p",[e._v("This is mainly as a mini-guide in case BootProtect doesn't work or you'd like to do it manually.")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#verify-bootstrap-entry-was-applied"}},[e._v("Verify Bootstrap entry was applied")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#removing-bootstrap-entry-from-bios"}},[e._v("Removing Bootstrap entry from BIOS")])])]),e._v(" "),o("h3",{attrs:{id:"verify-bootstrap-entry-was-applied"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#verify-bootstrap-entry-was-applied"}},[e._v("#")]),e._v(" Verify Bootstrap entry was applied")]),e._v(" "),o("p",[e._v("For those wanting to verify that the entry was applied in OpenCore, enabling logging(see "),o("RouterLink",{attrs:{to:"/troubleshooting/debug.html"}},[e._v("OpenCore Debugging")]),e._v(") and check for entries similar to these:")],1),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("OCB: Have existing option 1, valid 1\nOCB: Boot order has first option as the default option\n")])])]),o("h3",{attrs:{id:"removing-bootstrap-entry-from-bios"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#removing-bootstrap-entry-from-bios"}},[e._v("#")]),e._v(" Removing Bootstrap entry from BIOS")]),e._v(" "),o("p",[e._v("Because the Bootstrap entry is a protected entry when resetting NVRAM, you'll need to set certain settings:")]),e._v(" "),o("ul",[o("li",[e._v("Misc -> Security -> AllowNvramReset -> true")]),e._v(" "),o("li",[e._v("Misc -> Security -> BootProtect -> None")])]),e._v(" "),o("p",[e._v("Once these 2 are set in your config.plist, you can next reboot into the OpenCore picker and select the "),o("code",[e._v("Reset NVRAM")]),e._v(" entry")])])}),[],!1,null,null,null);t.default=a.exports}}]);