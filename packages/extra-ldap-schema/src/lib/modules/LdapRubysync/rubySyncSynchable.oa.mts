/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { rubySyncAssociation } from "../LdapRubysync/rubySyncAssociation.oa.mjs";
// export { id_oc_rubySyncSynchable } from "../LdapRubysync/id-oc-rubySyncSynchable.va.mjs";


/**
 * @summary rubySyncSynchable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * rubySyncSynchable OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { rubySyncAssociation }
 *   LDAP-NAME                 {"rubySyncSynchable"}
 *   LDAP-DESC                 "Object can preserve links to other objects via rubySync"
 *   ID                        id-oc-rubySyncSynchable }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const rubySyncSynchable: OBJECT_CLASS = undefined;

/* eslint-enable */
