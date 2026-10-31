/* eslint-disable */
import { type CONTENT_RULE } from "../InformationFramework/CONTENT-RULE.oca.mjs";
import { mailRecipient } from "../LdapSchema2ldifMicrosoft/mailRecipient.oa.mjs";
import { securityPrincipal } from "../LdapSchema2ldifMicrosoft/securityPrincipal.oa.mjs";
import { group } from "../MSUser/group.oa.mjs";

/**
 * @summary group_rule
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * group-rule CONTENT-RULE ::= {
 *   STRUCTURAL OBJECT-CLASS   group.&id
 *   AUXILIARY OBJECT-CLASSES  { securityPrincipal
 *                               | mailRecipient } }
 * ```
 * 
 * @constant
 * @type {CONTENT_RULE}
 * @implements {CONTENT_RULE}
 */
export
const group_rule: CONTENT_RULE = {
    class: "CONTENT-RULE",
    decoderFor: {},
    encoderFor: {},
    "&structuralClass": group["&id"] /* OBJECT_FIELD_SETTING */,
    "&Auxiliaries": [securityPrincipal, mailRecipient] /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
