/* eslint-disable */
import { user } from "../MSUser/user.oa.mjs";
import { mailRecipient } from "../LdapSchema2ldifMicrosoft/mailRecipient.oa.mjs";
import { securityPrincipal } from "../LdapSchema2ldifMicrosoft/securityPrincipal.oa.mjs";
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
const user_rule: CONTENT_RULE = {
    class: "CONTENT-RULE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&structuralClass": user["&id"] /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Auxiliaries": [ mailRecipient, securityPrincipal, ] /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
