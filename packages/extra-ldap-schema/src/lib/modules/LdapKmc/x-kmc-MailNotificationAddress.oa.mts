/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
// export { caseIgnoreIA5Match } from "../SelectedAttributeTypes/caseIgnoreIA5Match.oa.mjs";
// export { caseIgnoreIA5SubstringsMatch } from "../SelectedAttributeTypes/caseIgnoreIA5SubstringsMatch.oa.mjs";
// export { ia5String } from "../SelectedAttributeTypes/ia5String.oa.mjs";
// export { id_at_x_kmc_MailNotificationAddress } from "../LdapKmc/id-at-x-kmc-MailNotificationAddress.va.mjs";


/**
 * @summary x_kmc_MailNotificationAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * x-kmc-MailNotificationAddress ATTRIBUTE ::= {
 *   SUBTYPE OF                mail
 *   WITH SYNTAX               IA5String
 *   EQUALITY MATCHING RULE    caseIgnoreIA5Match
 *   SUBSTRINGS MATCHING RULE  caseIgnoreIA5SubstringsMatch
 *   LDAP-SYNTAX               ia5String.&id
 *   LDAP-NAME                 {"x-kmc-MailNotificationAddress"}
 *   LDAP-DESC                 "Email address to send notification messages"
 *   ID                        id-at-x-kmc-MailNotificationAddress }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const x_kmc_MailNotificationAddress: ATTRIBUTE = undefined;

/* eslint-enable */
