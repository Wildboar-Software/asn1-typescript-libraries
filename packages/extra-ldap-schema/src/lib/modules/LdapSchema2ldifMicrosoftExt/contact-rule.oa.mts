/* eslint-disable */
import { contact } from "../LdapSchema2ldifMicrosoft/contact.oa.mjs";
// export { contact } from "../LdapSchema2ldifMicrosoft/contact.oa.mjs";
import { mailRecipient } from "../LdapSchema2ldifMicrosoft/mailRecipient.oa.mjs";
// export { mailRecipient } from "../LdapSchema2ldifMicrosoft/mailRecipient.oa.mjs";
import { type CONTENT_RULE } from "../InformationFramework/CONTENT-RULE.oca.mjs";


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
    decoderFor: {
    },
    encoderFor: {
    },
    "&structuralClass": contact["&id"] /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Auxiliaries": [ mailRecipient, ] /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
