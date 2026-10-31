/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { evolutionCalendarURI } from "../LdapEvoldap/evolutionCalendarURI.oa.mjs";
// export { id_oc_evolutionCalendarSource } from "../LdapEvoldap/id-oc-evolutionCalendarSource.va.mjs";


/**
 * @summary evolutionCalendarSource
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * evolutionCalendarSource OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { evolutionCalendarURI }
 *   LDAP-NAME                 {"evolutionCalendarSource"}
 *   LDAP-DESC                 "Evolution calendar source"
 *   ID                        id-oc-evolutionCalendarSource }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const evolutionCalendarSource: OBJECT_CLASS = undefined;

/* eslint-enable */
