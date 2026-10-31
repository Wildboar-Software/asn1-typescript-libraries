/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_gOhard } from "../LdapGosaCoreGosystem/id-oc-gOhard.va.mjs";
import { ipHostNumber } from "../NIS/ipHostNumber.oa.mjs";
import { macAddress } from "../NIS/macAddress.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { localityName } from "../SelectedAttributeTypes/localityName.oa.mjs";
import { ghCpuType } from "./ghCpuType.oa.mjs";
import { ghGfxAdapter } from "./ghGfxAdapter.oa.mjs";
import { ghIdeDev } from "./ghIdeDev.oa.mjs";
import { ghInventoryNumber } from "./ghInventoryNumber.oa.mjs";
import { ghMemSize } from "./ghMemSize.oa.mjs";
import { ghNetNic } from "./ghNetNic.oa.mjs";
import { ghScsiDev } from "./ghScsiDev.oa.mjs";
import { ghSoundAdapter } from "./ghSoundAdapter.oa.mjs";
import { ghUsbSupport } from "./ghUsbSupport.oa.mjs";
import { gotoAdaptPath } from "./gotoAdaptPath.oa.mjs";
import { gotoAutoFs } from "./gotoAutoFs.oa.mjs";
import { gotoBootKernel } from "./gotoBootKernel.oa.mjs";
import { gotoCdromEnable } from "./gotoCdromEnable.oa.mjs";
import { gotoFilesystem } from "./gotoFilesystem.oa.mjs";
import { gotoFloppyEnable } from "./gotoFloppyEnable.oa.mjs";
import { gotoFontPath } from "./gotoFontPath.oa.mjs";
import { gotoHardwareChecksum } from "./gotoHardwareChecksum.oa.mjs";
import { gotoKernelParameters } from "./gotoKernelParameters.oa.mjs";
import { gotoLastUser } from "./gotoLastUser.oa.mjs";
import { gotoLdapServer } from "./gotoLdapServer.oa.mjs";
import { gotoLpdEnable } from "./gotoLpdEnable.oa.mjs";
import { gotoLpdServer } from "./gotoLpdServer.oa.mjs";
import { gotoMode } from "./gotoMode.oa.mjs";
import { gotoModules } from "./gotoModules.oa.mjs";
import { gotoNtpServer } from "./gotoNtpServer.oa.mjs";
import { gotoRootPasswd } from "./gotoRootPasswd.oa.mjs";
import { gotoScannerClients } from "./gotoScannerClients.oa.mjs";
import { gotoScannerEnable } from "./gotoScannerEnable.oa.mjs";
import { gotoScannerModel } from "./gotoScannerModel.oa.mjs";
import { gotoSndModule } from "./gotoSndModule.oa.mjs";
import { gotoSwapServer } from "./gotoSwapServer.oa.mjs";
import { gotoSysStatus } from "./gotoSysStatus.oa.mjs";
import { gotoSyslogServer } from "./gotoSyslogServer.oa.mjs";
import { gotoTerminalPath } from "./gotoTerminalPath.oa.mjs";
import { gotoXColordepth } from "./gotoXColordepth.oa.mjs";
import { gotoXDriver } from "./gotoXDriver.oa.mjs";
import { gotoXHsync } from "./gotoXHsync.oa.mjs";
import { gotoXKbLayout } from "./gotoXKbLayout.oa.mjs";
import { gotoXKbModel } from "./gotoXKbModel.oa.mjs";
import { gotoXKbVariant } from "./gotoXKbVariant.oa.mjs";
import { gotoXMethod } from "./gotoXMethod.oa.mjs";
import { gotoXMonitor } from "./gotoXMonitor.oa.mjs";
import { gotoXMouseButtons } from "./gotoXMouseButtons.oa.mjs";
import { gotoXMouseType } from "./gotoXMouseType.oa.mjs";
import { gotoXMouseport } from "./gotoXMouseport.oa.mjs";
import { gotoXResolution } from "./gotoXResolution.oa.mjs";
import { gotoXVsync } from "./gotoXVsync.oa.mjs";
import { gotoXdmcpServer } from "./gotoXdmcpServer.oa.mjs";

/**
 * @summary gOhard
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gOhard OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { ghGfxAdapter
 *                               | ghNetNic
 *                               | ghSoundAdapter
 *                               | ghIdeDev
 *                               | ghScsiDev
 *                               | macAddress
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
 *                               | gotoScannerModel
 *                               | ipHostNumber
 *                               | localityName
 *                               | gotoSysStatus
 *                               | description
 *                               | gotoHardwareChecksum }
 *   LDAP-NAME                 {"GOhard"}
 *   LDAP-DESC                 "Gonicus Hardware definitions, objectclass (v2.7)"
 *   ID                        id-oc-gOhard }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gOhard: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ghGfxAdapter, ghNetNic, ghSoundAdapter, ghIdeDev, ghScsiDev, macAddress, ghUsbSupport, ghMemSize, ghCpuType, ghInventoryNumber, gotoSyslogServer, gotoNtpServer, gotoSwapServer, gotoLpdServer, gotoFontPath, gotoFilesystem, gotoFloppyEnable, gotoCdromEnable, gotoLpdEnable, gotoScannerEnable, gotoScannerClients, gotoRootPasswd, gotoXdmcpServer, gotoXMethod, gotoSndModule, gotoLastUser, gotoXMonitor, gotoXHsync, gotoXVsync, gotoXResolution, gotoXColordepth, gotoXMouseport, gotoXMouseButtons, gotoMode, gotoXKbModel, gotoXKbLayout, gotoXKbVariant, gotoXDriver, gotoXMouseType, macAddress, gotoAutoFs, gotoModules, gotoAdaptPath, gotoKernelParameters, gotoBootKernel, gotoTerminalPath, gotoLdapServer, gotoScannerModel, ipHostNumber, localityName, gotoSysStatus, description, gotoHardwareChecksum] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["GOhard"],
    "&ldapDesc": "Gonicus Hardware definitions, objectclass (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gOhard /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
