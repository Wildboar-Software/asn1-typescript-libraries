/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { user } from "../LdapSchema2ldifMicrosoft/user.oa.mjs";
// export { id_oc_computer } from "../LdapSchema2ldifMicrosoft/id-oc-computer.va.mjs";


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
 *                               | netbootMirrorDataFile }
 *   LDAP-NAME                 {"computer"}
 *   ID                        id-oc-computer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const computer: OBJECT_CLASS = undefined;

/* eslint-enable */
