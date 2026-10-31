/* eslint-disable */
import { type CONTENT_RULE } from "../InformationFramework/CONTENT-RULE.oca.mjs";
import { domainDNS } from "../LdapSchema2ldifMicrosoft/domainDNS.oa.mjs";
import { samDomain } from "../LdapSchema2ldifMicrosoft/samDomain.oa.mjs";

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
const domainDNS_rule: CONTENT_RULE = {
    class: "CONTENT-RULE",
    decoderFor: {},
    encoderFor: {},
    "&structuralClass": domainDNS["&id"] /* OBJECT_FIELD_SETTING */,
    "&Auxiliaries": [samDomain] /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
