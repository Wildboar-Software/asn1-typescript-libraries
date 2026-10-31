/* eslint-disable */
import { type CONTENT_RULE } from "../InformationFramework/CONTENT-RULE.oca.mjs";
import { builtinDomain } from "../LdapSchema2ldifMicrosoft/builtinDomain.oa.mjs";
import { samDomainBase } from "../LdapSchema2ldifMicrosoft/samDomainBase.oa.mjs";

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
const builtinDomain_rule: CONTENT_RULE = {
    class: "CONTENT-RULE",
    decoderFor: {},
    encoderFor: {},
    "&structuralClass": builtinDomain["&id"] /* OBJECT_FIELD_SETTING */,
    "&Auxiliaries": [samDomainBase] /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
