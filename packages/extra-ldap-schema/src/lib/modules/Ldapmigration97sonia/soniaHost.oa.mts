/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ipHost } from "../NIS/ipHost.oa.mjs";
// export { id_oc_soniaHost } from "../Ldapmigration97sonia/id-oc-soniaHost.va.mjs";


/**
 * @summary soniaHost
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * soniaHost OBJECT-CLASS ::= {
 *   SUBCLASS OF               { ipHost }
 *   MAY CONTAIN               { soniaHostMacAddress
 *                               | soniaHostSubdomainName
 *                               | soniaHostDefaultRouter
 *                               | soniaHostDirectoryServiceType
 *                               | soniaHostDnsEntryType
 *                               | soniaHostDnsDomain
 *                               | soniaHostNetgroupEntry
 *                               | soniaHostHardwareType
 *                               | soniaHostOsType
 *                               | soniaHostNetbootType
 *                               | soniaHostIsInstallServer
 *                               | soniaHostIsUpdateServer
 *                               | soniaHostAquisitionDate
 *                               | soniaHostWarrentyUntil }
 *   LDAP-NAME                 {"soniaHost"}
 *   ID                        id-oc-soniaHost }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const soniaHost: OBJECT_CLASS = undefined;

/* eslint-enable */
