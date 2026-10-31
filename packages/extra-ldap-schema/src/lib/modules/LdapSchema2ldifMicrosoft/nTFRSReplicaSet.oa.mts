/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_nTFRSReplicaSet } from "../LdapSchema2ldifMicrosoft/id-oc-nTFRSReplicaSet.va.mjs";


/**
 * @summary nTFRSReplicaSet
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nTFRSReplicaSet OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { fRSReplicaSetType
 *                               | fRSVersionGUID
 *                               | schedule
 *                               | fRSFileFilter
 *                               | fRSDirectoryFilter
 *                               | fRSDSPoll
 *                               | fRSServiceCommand
 *                               | fRSReplicaSetGUID
 *                               | fRSLevelLimit
 *                               | fRSRootSecurity
 *                               | fRSExtensions
 *                               | managedBy
 *                               | fRSFlags
 *                               | fRSPartnerAuthLevel
 *                               | fRSPrimaryMember }
 *   LDAP-NAME                 {"nTFRSReplicaSet"}
 *   ID                        id-oc-nTFRSReplicaSet }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nTFRSReplicaSet: OBJECT_CLASS = undefined;

/* eslint-enable */
