/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { id_oc_computer } from "../MSUser/id-oc-computer.va.mjs";
import { user } from "../MSUser/user.oa.mjs";
import { nisMapName } from "../NIS/nisMapName.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { catalogs } from "./catalogs.oa.mjs";
import { dNSHostName } from "./dNSHostName.oa.mjs";
import { defaultLocalPolicyObject } from "./defaultLocalPolicyObject.oa.mjs";
import { localPolicyFlags } from "./localPolicyFlags.oa.mjs";
import { location } from "./location.oa.mjs";
import { machineRole } from "./machineRole.oa.mjs";
import { managedBy } from "./managedBy.oa.mjs";
import { msDS_AdditionalDnsHostName } from "./msDS-AdditionalDnsHostName.oa.mjs";
import { msDS_AdditionalSamAccountName } from "./msDS-AdditionalSamAccountName.oa.mjs";
import { msDS_AuthenticatedAtDC } from "./msDS-AuthenticatedAtDC.oa.mjs";
import { msDS_ExecuteScriptPassword } from "./msDS-ExecuteScriptPassword.oa.mjs";
import { msDS_GenerationId } from "./msDS-GenerationId.oa.mjs";
import { msDS_HostServiceAccount } from "./msDS-HostServiceAccount.oa.mjs";
import { msDS_IsUserCachableAtRodc } from "./msDS-IsUserCachableAtRodc.oa.mjs";
import { msDS_KrbTgtLink } from "./msDS-KrbTgtLink.oa.mjs";
import { msDS_NeverRevealGroup } from "./msDS-NeverRevealGroup.oa.mjs";
import { msDS_PromotionSettings } from "./msDS-PromotionSettings.oa.mjs";
import { msDS_RevealOnDemandGroup } from "./msDS-RevealOnDemandGroup.oa.mjs";
import { msDS_RevealedList } from "./msDS-RevealedList.oa.mjs";
import { msDS_RevealedUsers } from "./msDS-RevealedUsers.oa.mjs";
import { msDS_SiteName } from "./msDS-SiteName.oa.mjs";
import { msDS_isGC } from "./msDS-isGC.oa.mjs";
import { msDS_isRODC } from "./msDS-isRODC.oa.mjs";
import { msImaging_HashAlgorithm } from "./msImaging-HashAlgorithm.oa.mjs";
import { msImaging_ThumbprintHash } from "./msImaging-ThumbprintHash.oa.mjs";
import { msSFU30Aliases } from "./msSFU30Aliases.oa.mjs";
import { msSFU30Name } from "./msSFU30Name.oa.mjs";
import { msSFU30NisDomain } from "./msSFU30NisDomain.oa.mjs";
import { msTPM_OwnerInformation } from "./msTPM-OwnerInformation.oa.mjs";
import { msTPM_TpmInformationForComputer } from "./msTPM-TpmInformationForComputer.oa.mjs";
import { msTSEndpointData } from "./msTSEndpointData.oa.mjs";
import { msTSEndpointPlugin } from "./msTSEndpointPlugin.oa.mjs";
import { msTSEndpointType } from "./msTSEndpointType.oa.mjs";
import { msTSPrimaryDesktopBL } from "./msTSPrimaryDesktopBL.oa.mjs";
import { msTSProperty01 } from "./msTSProperty01.oa.mjs";
import { msTSProperty02 } from "./msTSProperty02.oa.mjs";
import { msTSSecondaryDesktopBL } from "./msTSSecondaryDesktopBL.oa.mjs";
import { netbootDUID } from "./netbootDUID.oa.mjs";
import { netbootGUID } from "./netbootGUID.oa.mjs";
import { netbootInitialization } from "./netbootInitialization.oa.mjs";
import { netbootMachineFilePath } from "./netbootMachineFilePath.oa.mjs";
import { netbootMirrorDataFile } from "./netbootMirrorDataFile.oa.mjs";
import { netbootSIFFile } from "./netbootSIFFile.oa.mjs";
import { networkAddress } from "./networkAddress.oa.mjs";
import { operatingSystem } from "./operatingSystem.oa.mjs";
import { operatingSystemHotfix } from "./operatingSystemHotfix.oa.mjs";
import { operatingSystemServicePack } from "./operatingSystemServicePack.oa.mjs";
import { operatingSystemVersion } from "./operatingSystemVersion.oa.mjs";
import { physicalLocationObject } from "./physicalLocationObject.oa.mjs";
import { policyReplicationFlags } from "./policyReplicationFlags.oa.mjs";
import { rIDSetReferences } from "./rIDSetReferences.oa.mjs";
import { siteGUID } from "./siteGUID.oa.mjs";
import { volumeCount } from "./volumeCount.oa.mjs";

/**
 * @summary computer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * computer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { user }
 *   MAY CONTAIN               { commonName
 *                               | networkAddress
 *                               | localPolicyFlags
 *                               | defaultLocalPolicyObject
 *                               | machineRole
 *                               | location
 *                               | netbootInitialization
 *                               | netbootGUID
 *                               | netbootMachineFilePath
 *                               | siteGUID
 *                               | operatingSystem
 *                               | operatingSystemVersion
 *                               | operatingSystemServicePack
 *                               | operatingSystemHotfix
 *                               | volumeCount
 *                               | physicalLocationObject
 *                               | dNSHostName
 *                               | policyReplicationFlags
 *                               | managedBy
 *                               | rIDSetReferences
 *                               | catalogs
 *                               | netbootSIFFile
 *                               | netbootMirrorDataFile
 *                               | msDS-AdditionalDnsHostName
 *                               | msDS-AdditionalSamAccountName
 *                               | msDS-ExecuteScriptPassword
 *                               | msDS-KrbTgtLink
 *                               | msDS-RevealedUsers
 *                               | msDS-NeverRevealGroup
 *                               | msDS-RevealOnDemandGroup
 *                               | msDS-RevealedList
 *                               | msDS-AuthenticatedAtDC
 *                               | msDS-isGC
 *                               | msDS-isRODC
 *                               | msDS-SiteName
 *                               | msDS-PromotionSettings
 *                               | msTPM-OwnerInformation
 *                               | msTSProperty01
 *                               | msTSProperty02
 *                               | msDS-IsUserCachableAtRodc
 *                               | msDS-HostServiceAccount
 *                               | msTSEndpointData
 *                               | msTSEndpointType
 *                               | msTSEndpointPlugin
 *                               | msTSPrimaryDesktopBL
 *                               | msTSSecondaryDesktopBL
 *                               | msTPM-TpmInformationForComputer
 *                               | msDS-GenerationId
 *                               | msImaging-ThumbprintHash
 *                               | msImaging-HashAlgorithm
 *                               | netbootDUID
 *                               | msSFU30Name
 *                               | msSFU30Aliases
 *                               | msSFU30NisDomain
 *                               | nisMapName }
 *   LDAP-NAME                 {"computer"}
 *   ID                        id-oc-computer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const computer: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [user] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [commonName, networkAddress, localPolicyFlags, defaultLocalPolicyObject, machineRole, location, netbootInitialization, netbootGUID, netbootMachineFilePath, siteGUID, operatingSystem, operatingSystemVersion, operatingSystemServicePack, operatingSystemHotfix, volumeCount, physicalLocationObject, dNSHostName, policyReplicationFlags, managedBy, rIDSetReferences, catalogs, netbootSIFFile, netbootMirrorDataFile, msDS_AdditionalDnsHostName, msDS_AdditionalSamAccountName, msDS_ExecuteScriptPassword, msDS_KrbTgtLink, msDS_RevealedUsers, msDS_NeverRevealGroup, msDS_RevealOnDemandGroup, msDS_RevealedList, msDS_AuthenticatedAtDC, msDS_isGC, msDS_isRODC, msDS_SiteName, msDS_PromotionSettings, msTPM_OwnerInformation, msTSProperty01, msTSProperty02, msDS_IsUserCachableAtRodc, msDS_HostServiceAccount, msTSEndpointData, msTSEndpointType, msTSEndpointPlugin, msTSPrimaryDesktopBL, msTSSecondaryDesktopBL, msTPM_TpmInformationForComputer, msDS_GenerationId, msImaging_ThumbprintHash, msImaging_HashAlgorithm, netbootDUID, msSFU30Name, msSFU30Aliases, msSFU30NisDomain, nisMapName] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["computer"],
    "&id": id_oc_computer /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
