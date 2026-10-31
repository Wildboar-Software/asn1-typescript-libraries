/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { usPlace } from "../LdapSchema2ldifNadf/usPlace.oa.mjs";
// export { fipsCountyNumericCode } from "../LdapSchema2ldifNadf/fipsCountyNumericCode.oa.mjs";
// export { id_oc_usCountyOrEquivalent } from "../LdapSchema2ldifNadf/id-oc-usCountyOrEquivalent.va.mjs";


/**
 * @summary usCountyOrEquivalent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * usCountyOrEquivalent OBJECT-CLASS ::= {
 *   SUBCLASS OF               { usPlace }
 *   MUST CONTAIN              { fipsCountyNumericCode }
 *   LDAP-NAME                 {"usCountyOrEquivalent"}
 *   ID                        id-oc-usCountyOrEquivalent }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const usCountyOrEquivalent: OBJECT_CLASS = undefined;

/* eslint-enable */
