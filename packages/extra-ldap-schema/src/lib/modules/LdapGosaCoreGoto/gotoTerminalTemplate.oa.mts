/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_gotoTerminalTemplate } from "../LdapGosaCoreGoto/id-oc-gotoTerminalTemplate.va.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { gotoShare } from "../LdapGosaCoreGoto/gotoShare.oa.mjs";
import { goFonHardware } from "../LdapGosaCoreGofon/goFonHardware.oa.mjs";
import { ghGfxAdapter } from "../LdapGosaCoreGosystem/ghGfxAdapter.oa.mjs";
import { ghNetNic } from "../LdapGosaCoreGosystem/ghNetNic.oa.mjs";
import { ghSoundAdapter } from "../LdapGosaCoreGosystem/ghSoundAdapter.oa.mjs";
import { ghIdeDev } from "../LdapGosaCoreGosystem/ghIdeDev.oa.mjs";
import { ghScsiDev } from "../LdapGosaCoreGosystem/ghScsiDev.oa.mjs";
import { ghUsbSupport } from "../LdapGosaCoreGosystem/ghUsbSupport.oa.mjs";
import { ghMemSize } from "../LdapGosaCoreGosystem/ghMemSize.oa.mjs";
import { ghCpuType } from "../LdapGosaCoreGosystem/ghCpuType.oa.mjs";
import { ghInventoryNumber } from "../LdapGosaCoreGosystem/ghInventoryNumber.oa.mjs";
import { gotoSyslogServer } from "../LdapGosaCoreGosystem/gotoSyslogServer.oa.mjs";
import { gotoNtpServer } from "../LdapGosaCoreGosystem/gotoNtpServer.oa.mjs";
import { gotoSwapServer } from "../LdapGosaCoreGosystem/gotoSwapServer.oa.mjs";
import { gotoLpdServer } from "../LdapGosaCoreGosystem/gotoLpdServer.oa.mjs";
import { gotoFontPath } from "../LdapGosaCoreGosystem/gotoFontPath.oa.mjs";
import { gotoFilesystem } from "../LdapGosaCoreGosystem/gotoFilesystem.oa.mjs";
import { gotoFloppyEnable } from "../LdapGosaCoreGosystem/gotoFloppyEnable.oa.mjs";
import { gotoCdromEnable } from "../LdapGosaCoreGosystem/gotoCdromEnable.oa.mjs";
import { gotoLpdEnable } from "../LdapGosaCoreGosystem/gotoLpdEnable.oa.mjs";
import { gotoScannerEnable } from "../LdapGosaCoreGosystem/gotoScannerEnable.oa.mjs";
import { gotoScannerClients } from "../LdapGosaCoreGosystem/gotoScannerClients.oa.mjs";
import { gotoRootPasswd } from "../LdapGosaCoreGosystem/gotoRootPasswd.oa.mjs";
import { gotoXdmcpServer } from "../LdapGosaCoreGosystem/gotoXdmcpServer.oa.mjs";
import { gotoXMethod } from "../LdapGosaCoreGosystem/gotoXMethod.oa.mjs";
import { gotoSndModule } from "../LdapGosaCoreGosystem/gotoSndModule.oa.mjs";
import { gotoLastUser } from "../LdapGosaCoreGosystem/gotoLastUser.oa.mjs";
import { gotoXMonitor } from "../LdapGosaCoreGosystem/gotoXMonitor.oa.mjs";
import { gotoXHsync } from "../LdapGosaCoreGosystem/gotoXHsync.oa.mjs";
import { gotoXVsync } from "../LdapGosaCoreGosystem/gotoXVsync.oa.mjs";
import { gotoXResolution } from "../LdapGosaCoreGosystem/gotoXResolution.oa.mjs";
import { gotoXColordepth } from "../LdapGosaCoreGosystem/gotoXColordepth.oa.mjs";
import { gotoXMouseport } from "../LdapGosaCoreGosystem/gotoXMouseport.oa.mjs";
import { gotoXMouseButtons } from "../LdapGosaCoreGosystem/gotoXMouseButtons.oa.mjs";
import { gotoMode } from "../LdapGosaCoreGosystem/gotoMode.oa.mjs";
import { gotoXKbModel } from "../LdapGosaCoreGosystem/gotoXKbModel.oa.mjs";
import { gotoXKbLayout } from "../LdapGosaCoreGosystem/gotoXKbLayout.oa.mjs";
import { gotoXKbVariant } from "../LdapGosaCoreGosystem/gotoXKbVariant.oa.mjs";
import { gotoXDriver } from "../LdapGosaCoreGosystem/gotoXDriver.oa.mjs";
import { gotoXMouseType } from "../LdapGosaCoreGosystem/gotoXMouseType.oa.mjs";
import { macAddress } from "../NIS/macAddress.oa.mjs";
import { gotoAutoFs } from "../LdapGosaCoreGosystem/gotoAutoFs.oa.mjs";
import { gotoModules } from "../LdapGosaCoreGosystem/gotoModules.oa.mjs";
import { gotoAdaptPath } from "../LdapGosaCoreGosystem/gotoAdaptPath.oa.mjs";
import { gotoKernelParameters } from "../LdapGosaCoreGosystem/gotoKernelParameters.oa.mjs";
import { gotoBootKernel } from "../LdapGosaCoreGosystem/gotoBootKernel.oa.mjs";
import { gotoTerminalPath } from "../LdapGosaCoreGosystem/gotoTerminalPath.oa.mjs";
import { gotoLdapServer } from "../LdapGosaCoreGosystem/gotoLdapServer.oa.mjs";
import { gotoScannerModel } from "../LdapGosaCoreGosystem/gotoScannerModel.oa.mjs";


/**
 * @summary gotoTerminalTemplate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gotoTerminalTemplate OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { description
 *                               | gotoShare
 *                               | goFonHardware
 *                               | ghGfxAdapter
 *                               | ghNetNic
 *                               | ghSoundAdapter
 *                               | ghIdeDev
 *                               | ghScsiDev
 *                               | ghUsbSupport
 *                               | ghMemSize
 *                               | ghCpuType
 *                               | ghInventoryNumber
 *                               | gotoSyslogServer
 *                               | gotoNtpServer
 *                               | gotoSwapServer
 *                               | gotoLpdServer
 *                               | gotoFontPath
 *                               | gotoFilesystem
 *                               | gotoFloppyEnable
 *                               | gotoCdromEnable
 *                               | gotoLpdEnable
 *                               | gotoScannerEnable
 *                               | gotoScannerClients
 *                               | gotoRootPasswd
 *                               | gotoXdmcpServer
 *                               | gotoXMethod
 *                               | gotoSndModule
 *                               | gotoLastUser
 *                               | gotoXMonitor
 *                               | gotoXHsync
 *                               | gotoXVsync
 *                               | gotoXResolution
 *                               | gotoXColordepth
 *                               | gotoXMouseport
 *                               | gotoXMouseButtons
 *                               | gotoMode
 *                               | gotoXKbModel
 *                               | gotoXKbLayout
 *                               | gotoXKbVariant
 *                               | gotoXDriver
 *                               | gotoXMouseType
 *                               | macAddress
 *                               | gotoAutoFs
 *                               | gotoModules
 *                               | gotoAdaptPath
 *                               | gotoKernelParameters
 *                               | gotoBootKernel
 *                               | gotoTerminalPath
 *                               | gotoLdapServer
 *                               | gotoScannerModel }
 *   LDAP-NAME                 {"gotoTerminalTemplate"}
 *   LDAP-DESC                 "GOto - Gonicus Terminal Concept, objectclass (v2.7)"
 *   ID                        id-oc-gotoTerminalTemplate }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gotoTerminalTemplate: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ description, gotoShare, goFonHardware, ghGfxAdapter, ghNetNic, ghSoundAdapter, ghIdeDev, ghScsiDev, ghUsbSupport, ghMemSize, ghCpuType, ghInventoryNumber, gotoSyslogServer, gotoNtpServer, gotoSwapServer, gotoLpdServer, gotoFontPath, gotoFilesystem, gotoFloppyEnable, gotoCdromEnable, gotoLpdEnable, gotoScannerEnable, gotoScannerClients, gotoRootPasswd, gotoXdmcpServer, gotoXMethod, gotoSndModule, gotoLastUser, gotoXMonitor, gotoXHsync, gotoXVsync, gotoXResolution, gotoXColordepth, gotoXMouseport, gotoXMouseButtons, gotoMode, gotoXKbModel, gotoXKbLayout, gotoXKbVariant, gotoXDriver, gotoXMouseType, macAddress, gotoAutoFs, gotoModules, gotoAdaptPath, gotoKernelParameters, gotoBootKernel, gotoTerminalPath, gotoLdapServer, gotoScannerModel, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "gotoTerminalTemplate" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "GOto - Gonicus Terminal Concept, objectclass (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gotoTerminalTemplate /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

