/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { applicationSettings } from "../LdapSchema2ldifMicrosoft/applicationSettings.oa.mjs";
// export { id_oc_nTDSDSA } from "../LdapSchema2ldifMicrosoft/id-oc-nTDSDSA.va.mjs";


/**
 * @summary nTDSDSA
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nTDSDSA OBJECT-CLASS ::= {
 *   SUBCLASS OF               { applicationSettings }
 *   MAY CONTAIN               { hasMasterNCs
 *                               | hasPartialReplicaNCs
 *                               | dMDLocation
 *                               | invocationId
 *                               | networkAddress
 *                               | options
 *                               | fRSRootPath
 *                               | serverReference
 *                               | lastBackupRestorationTime
 *                               | queryPolicyObject
 *                               | managedBy
 *                               | retiredReplDSASignatures }
 *   LDAP-NAME                 {"nTDSDSA"}
 *   ID                        id-oc-nTDSDSA }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nTDSDSA: OBJECT_CLASS = undefined;

/* eslint-enable */
