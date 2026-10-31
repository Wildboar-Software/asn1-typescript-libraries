/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ipaAssociation } from "../Ldap60basev2/ipaAssociation.oa.mjs";
// export { accessRuleType } from "../Ldap60basev2/accessRuleType.oa.mjs";
// export { id_oc_ipaHBACRule } from "../Ldap60basev2/id-oc-ipaHBACRule.va.mjs";


/**
 * @summary ipaHBACRule
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ipaHBACRule OBJECT-CLASS ::= {
 *   SUBCLASS OF               { ipaAssociation }
 *   MUST CONTAIN              { accessRuleType }
 *   MAY CONTAIN               { sourceHost
 *                               | sourceHostCategory
 *                               | serviceCategory
 *                               | memberService
 *                               | externalHost
 *                               | accessTime }
 *   LDAP-NAME                 {"ipaHBACRule"}
 *   ID                        id-oc-ipaHBACRule }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ipaHBACRule: OBJECT_CLASS = undefined;

/* eslint-enable */
