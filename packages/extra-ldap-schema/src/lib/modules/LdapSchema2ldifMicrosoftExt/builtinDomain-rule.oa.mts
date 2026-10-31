/* eslint-disable */
// export { builtinDomain } from "../LdapSchema2ldifMicrosoft/builtinDomain.oa.mjs";
// export { samDomainBase } from "../LdapSchema2ldifMicrosoft/samDomainBase.oa.mjs";
import { type CONTENT_RULE } from "../InformationFramework/CONTENT-RULE.oca.mjs";


/**
 * @summary builtinDomain_rule
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * builtinDomain-rule CONTENT-RULE ::= {
 *   STRUCTURAL OBJECT-CLASS   builtinDomain.&id
 *   AUXILIARY OBJECT-CLASSES  { samDomainBase } }
 * ```
 * 
 * @constant
 * @type {CONTENT_RULE}
 * @implements {CONTENT_RULE}
 */
export
const builtinDomain_rule: CONTENT_RULE = undefined;

/* eslint-enable */
