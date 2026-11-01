/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { user } from "../MSUser/user.oa.mjs";
// export { user } from "../MSUser/user.oa.mjs";
import { id_oc_computer } from "../MSUser/id-oc-computer.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { networkAddress } from "../MSUser/networkAddress.oa.mjs";
import { localPolicyFlags } from "../MSUser/localPolicyFlags.oa.mjs";
import { defaultLocalPolicyObject } from "../MSUser/defaultLocalPolicyObject.oa.mjs";
import { machineRole } from "../MSUser/machineRole.oa.mjs";
import { location } from "../MSUser/location.oa.mjs";
import { netbootInitialization } from "../MSUser/netbootInitialization.oa.mjs";
import { netbootGUID } from "../MSUser/netbootGUID.oa.mjs";
import { netbootMachineFilePath } from "../MSUser/netbootMachineFilePath.oa.mjs";
import { siteGUID } from "../MSUser/siteGUID.oa.mjs";
import { operatingSystem } from "../MSUser/operatingSystem.oa.mjs";
import { operatingSystemVersion } from "../MSUser/operatingSystemVersion.oa.mjs";
import { operatingSystemServicePack } from "../MSUser/operatingSystemServicePack.oa.mjs";
import { operatingSystemHotfix } from "../MSUser/operatingSystemHotfix.oa.mjs";
import { volumeCount } from "../MSUser/volumeCount.oa.mjs";
import { physicalLocationObject } from "../MSUser/physicalLocationObject.oa.mjs";
import { dNSHostName } from "../MSUser/dNSHostName.oa.mjs";
import { policyReplicationFlags } from "../MSUser/policyReplicationFlags.oa.mjs";
import { managedBy } from "../MSUser/managedBy.oa.mjs";
import { rIDSetReferences } from "../MSUser/rIDSetReferences.oa.mjs";
import { catalogs } from "../MSUser/catalogs.oa.mjs";
import { netbootSIFFile } from "../MSUser/netbootSIFFile.oa.mjs";
import { netbootMirrorDataFile } from "../MSUser/netbootMirrorDataFile.oa.mjs";
import { msDS_AdditionalDnsHostName } from "../MSUser/msDS-AdditionalDnsHostName.oa.mjs";
import { msDS_AdditionalSamAccountName } from "../MSUser/msDS-AdditionalSamAccountName.oa.mjs";
import { msDS_ExecuteScriptPassword } from "../MSUser/msDS-ExecuteScriptPassword.oa.mjs";
import { msDS_KrbTgtLink } from "../MSUser/msDS-KrbTgtLink.oa.mjs";
import { msDS_RevealedUsers } from "../MSUser/msDS-RevealedUsers.oa.mjs";
import { msDS_NeverRevealGroup } from "../MSUser/msDS-NeverRevealGroup.oa.mjs";
import { msDS_RevealOnDemandGroup } from "../MSUser/msDS-RevealOnDemandGroup.oa.mjs";
import { msDS_RevealedList } from "../MSUser/msDS-RevealedList.oa.mjs";
import { msDS_AuthenticatedAtDC } from "../MSUser/msDS-AuthenticatedAtDC.oa.mjs";
import { msDS_isGC } from "../MSUser/msDS-isGC.oa.mjs";
import { msDS_isRODC } from "../MSUser/msDS-isRODC.oa.mjs";
import { msDS_SiteName } from "../MSUser/msDS-SiteName.oa.mjs";
import { msDS_PromotionSettings } from "../MSUser/msDS-PromotionSettings.oa.mjs";
import { msTPM_OwnerInformation } from "../MSUser/msTPM-OwnerInformation.oa.mjs";
import { msTSProperty01 } from "../MSUser/msTSProperty01.oa.mjs";
import { msTSProperty02 } from "../MSUser/msTSProperty02.oa.mjs";
import { msDS_IsUserCachableAtRodc } from "../MSUser/msDS-IsUserCachableAtRodc.oa.mjs";
import { msDS_HostServiceAccount } from "../MSUser/msDS-HostServiceAccount.oa.mjs";
import { msTSEndpointData } from "../MSUser/msTSEndpointData.oa.mjs";
import { msTSEndpointType } from "../MSUser/msTSEndpointType.oa.mjs";
import { msTSEndpointPlugin } from "../MSUser/msTSEndpointPlugin.oa.mjs";
import { msTSPrimaryDesktopBL } from "../MSUser/msTSPrimaryDesktopBL.oa.mjs";
import { msTSSecondaryDesktopBL } from "../MSUser/msTSSecondaryDesktopBL.oa.mjs";
import { msTPM_TpmInformationForComputer } from "../MSUser/msTPM-TpmInformationForComputer.oa.mjs";
import { msDS_GenerationId } from "../MSUser/msDS-GenerationId.oa.mjs";
import { msImaging_ThumbprintHash } from "../MSUser/msImaging-ThumbprintHash.oa.mjs";
import { msImaging_HashAlgorithm } from "../MSUser/msImaging-HashAlgorithm.oa.mjs";
import { netbootDUID } from "../MSUser/netbootDUID.oa.mjs";
import { msSFU30Name } from "../MSUser/msSFU30Name.oa.mjs";
import { msSFU30Aliases } from "../MSUser/msSFU30Aliases.oa.mjs";
import { msSFU30NisDomain } from "../MSUser/msSFU30NisDomain.oa.mjs";
import { nisMapName } from "../NIS/nisMapName.oa.mjs";
// export { id_oc_computer } from "../MSUser/id-oc-computer.va.mjs";


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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ user, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ commonName, networkAddress, localPolicyFlags, defaultLocalPolicyObject, machineRole, location, netbootInitialization, netbootGUID, netbootMachineFilePath, siteGUID, operatingSystem, operatingSystemVersion, operatingSystemServicePack, operatingSystemHotfix, volumeCount, physicalLocationObject, dNSHostName, policyReplicationFlags, managedBy, rIDSetReferences, catalogs, netbootSIFFile, netbootMirrorDataFile, msDS_AdditionalDnsHostName, msDS_AdditionalSamAccountName, msDS_ExecuteScriptPassword, msDS_KrbTgtLink, msDS_RevealedUsers, msDS_NeverRevealGroup, msDS_RevealOnDemandGroup, msDS_RevealedList, msDS_AuthenticatedAtDC, msDS_isGC, msDS_isRODC, msDS_SiteName, msDS_PromotionSettings, msTPM_OwnerInformation, msTSProperty01, msTSProperty02, msDS_IsUserCachableAtRodc, msDS_HostServiceAccount, msTSEndpointData, msTSEndpointType, msTSEndpointPlugin, msTSPrimaryDesktopBL, msTSSecondaryDesktopBL, msTPM_TpmInformationForComputer, msDS_GenerationId, msImaging_ThumbprintHash, msImaging_HashAlgorithm, netbootDUID, msSFU30Name, msSFU30Aliases, msSFU30NisDomain, nisMapName, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "computer" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_computer /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
