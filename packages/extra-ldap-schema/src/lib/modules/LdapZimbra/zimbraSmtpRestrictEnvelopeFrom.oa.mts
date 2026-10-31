/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { booleanMatch } from "../SelectedAttributeTypes/booleanMatch.oa.mjs";
// export { boolean_ } from "../SelectedAttributeTypes/boolean.oa.mjs";
// export { id_at_zimbraSmtpRestrictEnvelopeFrom } from "../LdapZimbra/id-at-zimbraSmtpRestrictEnvelopeFrom.va.mjs";


/**
 * @summary zimbraSmtpRestrictEnvelopeFrom
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraSmtpRestrictEnvelopeFrom ATTRIBUTE ::= {
 *   WITH SYNTAX               BOOLEAN
 *   EQUALITY MATCHING RULE    booleanMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               boolean.&id
 *   LDAP-NAME                 {"zimbraSmtpRestrictEnvelopeFrom"}
 *   LDAP-DESC                 "If TRUE, the address for MAIL FROM in the SMTP session will always be set to the email address of the account. If FALSE, the address will be the value of the Sender or From header in the outgoing message, in that order."
 *   ID                        id-at-zimbraSmtpRestrictEnvelopeFrom }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const zimbraSmtpRestrictEnvelopeFrom: ATTRIBUTE = undefined;

/* eslint-enable */
