/* eslint-disable */
// export { user } from "../LdapSchema2ldifMicrosoft/user.oa.mjs";
// export { mailRecipient } from "../LdapSchema2ldifMicrosoft/mailRecipient.oa.mjs";
// export { securityPrincipal } from "../LdapSchema2ldifMicrosoft/securityPrincipal.oa.mjs";
import { type CONTENT_RULE } from "../InformationFramework/CONTENT-RULE.oca.mjs";


/**
 * @summary user_rule
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * user-rule CONTENT-RULE ::= {
 *   STRUCTURAL OBJECT-CLASS   user.&id
 *   AUXILIARY OBJECT-CLASSES  { mailRecipient
 *                               | securityPrincipal } }
 * ```
 * 
 * @constant
 * @type {CONTENT_RULE}
 * @implements {CONTENT_RULE}
 */
export
const user_rule: CONTENT_RULE = undefined;

/* eslint-enable */
