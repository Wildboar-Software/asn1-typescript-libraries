/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa.mjs";
// export { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
// export { id_at_zimbraInvalidLoginFilterMaxFailedLogin } from "../LdapZimbra/id-at-zimbraInvalidLoginFilterMaxFailedLogin.va.mjs";


/**
 * @summary zimbraInvalidLoginFilterMaxFailedLogin
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraInvalidLoginFilterMaxFailedLogin ATTRIBUTE ::= {
 *   WITH SYNTAX               INTEGER
 *   EQUALITY MATCHING RULE    integerMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               integer.&id
 *   LDAP-NAME                 {"zimbraInvalidLoginFilterMaxFailedLogin"}
 *   LDAP-DESC                 "This attribute is used for failed authentication requests.This is a DOSFilter style check for repeated failed logins from IP, if set to 0 no check happens, else failed login is recorded."
 *   ID                        id-at-zimbraInvalidLoginFilterMaxFailedLogin }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const zimbraInvalidLoginFilterMaxFailedLogin: ATTRIBUTE = undefined;

/* eslint-enable */
