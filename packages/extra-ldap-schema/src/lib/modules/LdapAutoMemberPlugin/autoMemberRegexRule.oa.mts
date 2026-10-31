/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_autoMemberRegexRule } from "../LdapAutoMemberPlugin/id-oc-autoMemberRegexRule.va.mjs";


/**
 * @summary autoMemberRegexRule
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * autoMemberRegexRule OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | autoMemberTargetGroup }
 *   MAY CONTAIN               { autoMemberExclusiveRegex
 *                               | autoMemberInclusiveRegex
 *                               | description }
 *   LDAP-NAME                 {"autoMemberRegexRule"}
 *   LDAP-DESC                 "Auto Membership Regex Rule Entry"
 *   ID                        id-oc-autoMemberRegexRule }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const autoMemberRegexRule: OBJECT_CLASS = undefined;

/* eslint-enable */
