/* eslint-disable */
import { type CONTENT_RULE } from "../InformationFramework/CONTENT-RULE.oca.mjs";
import { contact } from "../LdapSchema2ldifMicrosoft/contact.oa.mjs";
import { mailRecipient } from "../LdapSchema2ldifMicrosoft/mailRecipient.oa.mjs";

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
const contact_rule: CONTENT_RULE = {
    class: "CONTENT-RULE",
    decoderFor: {},
    encoderFor: {},
    "&structuralClass": contact["&id"] /* OBJECT_FIELD_SETTING */,
    "&Auxiliaries": [mailRecipient] /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
