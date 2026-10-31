/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_iPlanetPreferences } from "../Ldapmigration20subscriber/id-oc-iPlanetPreferences.va.mjs";


/**
 * @summary iPlanetPreferences
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iPlanetPreferences OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { preferredLanguage
 *                               | preferredLocale
 *                               | preferredTimeZone }
 *   LDAP-NAME                 {"iPlanetPreferences"}
 *   ID                        id-oc-iPlanetPreferences }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const iPlanetPreferences: OBJECT_CLASS = undefined;

/* eslint-enable */
