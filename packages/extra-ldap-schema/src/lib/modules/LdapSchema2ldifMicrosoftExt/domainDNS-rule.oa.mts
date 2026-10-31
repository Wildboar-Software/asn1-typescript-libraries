/* eslint-disable */
// export { domainDNS } from "../LdapSchema2ldifMicrosoft/domainDNS.oa.mjs";
// export { samDomain } from "../LdapSchema2ldifMicrosoft/samDomain.oa.mjs";
import { type CONTENT_RULE } from "../InformationFramework/CONTENT-RULE.oca.mjs";


/**
 * @summary domainDNS_rule
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * domainDNS-rule CONTENT-RULE ::= {
 *   STRUCTURAL OBJECT-CLASS   domainDNS.&id
 *   AUXILIARY OBJECT-CLASSES  { samDomain } }
 * ```
 * 
 * @constant
 * @type {CONTENT_RULE}
 * @implements {CONTENT_RULE}
 */
export
const domainDNS_rule: CONTENT_RULE = undefined;

/* eslint-enable */
