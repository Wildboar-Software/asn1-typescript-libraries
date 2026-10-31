/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { displayTemplate } from "../LdapSchema2ldifMicrosoft/displayTemplate.oa.mjs";
// export { displayName } from "../LdapSchema2ldifMicrosoft/displayName.oa.mjs";
// export { id_oc_addressTemplate } from "../LdapSchema2ldifMicrosoft/id-oc-addressTemplate.va.mjs";


/**
 * @summary addressTemplate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * addressTemplate OBJECT-CLASS ::= {
 *   SUBCLASS OF               { displayTemplate }
 *   MUST CONTAIN              { displayName }
 *   MAY CONTAIN               { addressSyntax
 *                               | perMsgDialogDisplayTable
 *                               | perRecipDialogDisplayTable
 *                               | addressType
 *                               | proxyGenerationEnabled }
 *   LDAP-NAME                 {"addressTemplate"}
 *   ID                        id-oc-addressTemplate }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const addressTemplate: OBJECT_CLASS = undefined;

/* eslint-enable */
