/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { id_oc_apple_neighborhood } from "../LdapSchema2ldifApple/id-oc-apple-neighborhood.va.mjs";


/**
 * @summary apple_neighborhood
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * apple-neighborhood OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { description
 *                               | apple-generateduid
 *                               | apple-category
 *                               | apple-nodepathxml
 *                               | apple-neighborhoodalias
 *                               | apple-computeralias
 *                               | apple-keyword
 *                               | apple-realname
 *                               | apple-xmlplist
 *                               | ttl }
 *   LDAP-NAME                 {"apple-neighborhood"}
 *   ID                        id-oc-apple-neighborhood }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const apple_neighborhood: OBJECT_CLASS = undefined;

/* eslint-enable */
