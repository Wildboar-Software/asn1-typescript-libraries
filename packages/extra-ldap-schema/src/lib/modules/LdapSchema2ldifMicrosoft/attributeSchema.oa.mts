/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_attributeSchema } from "../LdapSchema2ldifMicrosoft/id-oc-attributeSchema.va.mjs";


/**
 * @summary attributeSchema
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * attributeSchema OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | attributeID
 *                               | attributeSyntax
 *                               | isSingleValued
 *                               | oMSyntax
 *                               | lDAPDisplayName
 *                               | schemaIDGUID }
 *   MAY CONTAIN               { rangeLower
 *                               | rangeUpper
 *                               | mAPIID
 *                               | linkID
 *                               | oMObjectClass
 *                               | searchFlags
 *                               | extendedCharsAllowed
 *                               | schemaFlagsEx
 *                               | attributeSecurityGUID
 *                               | systemOnly
 *                               | classDisplayName
 *                               | isMemberOfPartialAttributeSet
 *                               | isDefunct
 *                               | isEphemeral }
 *   LDAP-NAME                 {"attributeSchema"}
 *   ID                        id-oc-attributeSchema }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const attributeSchema: OBJECT_CLASS = undefined;

/* eslint-enable */
