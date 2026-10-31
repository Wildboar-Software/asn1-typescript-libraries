/* eslint-disable */
// export { contact } from "../LdapSchema2ldifMicrosoft/contact.oa.mjs";
// export { mailRecipient } from "../LdapSchema2ldifMicrosoft/mailRecipient.oa.mjs";
import { type CONTENT_RULE } from "../InformationFramework/CONTENT-RULE.oca.mjs";


/**
 * @summary contact_rule
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * contact-rule CONTENT-RULE ::= {
 *   STRUCTURAL OBJECT-CLASS   contact.&id
 *   AUXILIARY OBJECT-CLASSES  { mailRecipient } }
 * ```
 * 
 * @constant
 * @type {CONTENT_RULE}
 * @implements {CONTENT_RULE}
 */
export
const contact_rule: CONTENT_RULE = undefined;

/* eslint-enable */
