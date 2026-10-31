/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { applicationEntity } from "../SelectedObjectClasses/applicationEntity.oa.mjs";
// export { knowledgeInformation } from "../SelectedAttributeTypes/knowledgeInformation.oa.mjs";
// export { id_oc_dSA } from "../SelectedObjectClasses/id-oc-dSA.va.mjs";


/**
 * @summary dSA
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dSA OBJECT-CLASS ::= {
 *   SUBCLASS OF   {applicationEntity}
 *   MAY CONTAIN   {knowledgeInformation}
 *   LDAP-NAME     {"dSA"} -- RFC 2256
 *   ID            id-oc-dSA }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const dSA: OBJECT_CLASS = undefined;

/* eslint-enable */
