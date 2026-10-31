/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { schacYearOfBirth } from "../LdapSchac/schacYearOfBirth.oa.mjs";
// export { id_oc_schacExperimentalOC } from "../LdapSchac/id-oc-schacExperimentalOC.va.mjs";


/**
 * @summary schacExperimentalOC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * schacExperimentalOC OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { schacYearOfBirth }
 *   LDAP-NAME                 {"schacExperimentalOC"}
 *   LDAP-DESC                 "Experimental Object Class"
 *   ID                        id-oc-schacExperimentalOC }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const schacExperimentalOC: OBJECT_CLASS = undefined;

/* eslint-enable */
