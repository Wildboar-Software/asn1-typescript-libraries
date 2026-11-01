/* eslint-disable */
import { samDomain } from "../LdapSchema2ldifMicrosoft/samDomain.oa.mjs";
import { samDomainBase } from "../LdapSchema2ldifMicrosoft/samDomainBase.oa.mjs";
import { type CONTENT_RULE } from "../InformationFramework/CONTENT-RULE.oca.mjs";

/**
 * @summary samDomain_rule
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * samDomain-rule CONTENT-RULE ::= {
 *   STRUCTURAL OBJECT-CLASS   samDomain.&id
 *   AUXILIARY OBJECT-CLASSES  { samDomainBase } }
 * ```
 * 
 * @constant
 * @type {CONTENT_RULE}
 * @implements {CONTENT_RULE}
 */
export
const samDomain_rule: CONTENT_RULE = {
    class: "CONTENT-RULE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&structuralClass": samDomain["&id"] /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Auxiliaries": [ samDomainBase, ] /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
