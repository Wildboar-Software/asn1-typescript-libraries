/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { fipsPlaceNumericCode } from "../LdapSchema2ldifNadf/fipsPlaceNumericCode.oa.mjs";
// export { stateOrProvinceName } from "../SelectedAttributeTypes/stateOrProvinceName.oa.mjs";
// export { id_oc_fips55Object } from "../LdapSchema2ldifNadf/id-oc-fips55Object.va.mjs";


/**
 * @summary fips55Object
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * fips55Object OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { fipsPlaceNumericCode }
 *   MAY CONTAIN               { stateOrProvinceName }
 *   LDAP-NAME                 {"fips55Object"}
 *   ID                        id-oc-fips55Object }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const fips55Object: OBJECT_CLASS = undefined;

/* eslint-enable */
