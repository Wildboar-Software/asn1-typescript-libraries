/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { applicationEntity } from "../SelectedObjectClasses/applicationEntity.oa.mjs";
// export { supportedApplicationContext } from "../SelectedAttributeTypes/supportedApplicationContext.oa.mjs";
// export { id_oc_nadfApplicationEntity } from "../LdapSchema2ldifNadf/id-oc-nadfApplicationEntity.va.mjs";


/**
 * @summary nadfApplicationEntity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nadfApplicationEntity OBJECT-CLASS ::= {
 *   SUBCLASS OF               { applicationEntity }
 *   MUST CONTAIN              { supportedApplicationContext }
 *   LDAP-NAME                 {"nadfApplicationEntity"}
 *   ID                        id-oc-nadfApplicationEntity }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nadfApplicationEntity: OBJECT_CLASS = undefined;

/* eslint-enable */
