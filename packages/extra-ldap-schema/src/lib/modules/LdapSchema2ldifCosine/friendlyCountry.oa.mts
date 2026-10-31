/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { country } from "../SelectedObjectClasses/country.oa.mjs";
// export { co } from "../LdapSchema2ldifCosine/co.oa.mjs";
// export { id_oc_friendlyCountry } from "../LdapSchema2ldifCosine/id-oc-friendlyCountry.va.mjs";


/**
 * @summary friendlyCountry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * friendlyCountry OBJECT-CLASS ::= {
 *   SUBCLASS OF               { country }
 *   MUST CONTAIN              { co }
 *   LDAP-NAME                 {"friendlyCountry"}
 *   ID                        id-oc-friendlyCountry }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const friendlyCountry: OBJECT_CLASS = undefined;

/* eslint-enable */
