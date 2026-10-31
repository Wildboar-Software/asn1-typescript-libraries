/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { id_oc_documentSeries } from "../LdapSchema2ldifCosine/id-oc-documentSeries.va.mjs";


/**
 * @summary documentSeries
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * documentSeries OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { description
 *                               | seeAlso
 *                               | telephoneNumber
 *                               | localityName
 *                               | organizationName
 *                               | organizationalUnitName }
 *   LDAP-NAME                 {"documentSeries"}
 *   ID                        id-oc-documentSeries }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const documentSeries: OBJECT_CLASS = undefined;

/* eslint-enable */
