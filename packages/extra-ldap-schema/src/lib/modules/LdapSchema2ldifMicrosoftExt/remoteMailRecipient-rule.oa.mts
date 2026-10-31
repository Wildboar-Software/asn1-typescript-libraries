/* eslint-disable */
// export { remoteMailRecipient } from "../LdapSchema2ldifMicrosoft/remoteMailRecipient.oa.mjs";
// export { mailRecipient } from "../LdapSchema2ldifMicrosoft/mailRecipient.oa.mjs";
import { type CONTENT_RULE } from "../InformationFramework/CONTENT-RULE.oca.mjs";


/**
 * @summary remoteMailRecipient_rule
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * remoteMailRecipient-rule CONTENT-RULE ::= {
 *   STRUCTURAL OBJECT-CLASS   remoteMailRecipient.&id
 *   AUXILIARY OBJECT-CLASSES  { mailRecipient } }
 * ```
 * 
 * @constant
 * @type {CONTENT_RULE}
 * @implements {CONTENT_RULE}
 */
export
const remoteMailRecipient_rule: CONTENT_RULE = undefined;

/* eslint-enable */
