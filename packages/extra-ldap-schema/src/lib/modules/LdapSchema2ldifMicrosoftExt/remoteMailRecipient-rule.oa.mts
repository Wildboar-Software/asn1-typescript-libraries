/* eslint-disable */
import { remoteMailRecipient } from "../LdapSchema2ldifMicrosoft/remoteMailRecipient.oa.mjs";
// export { remoteMailRecipient } from "../LdapSchema2ldifMicrosoft/remoteMailRecipient.oa.mjs";
import { mailRecipient } from "../LdapSchema2ldifMicrosoft/mailRecipient.oa.mjs";
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
const remoteMailRecipient_rule: CONTENT_RULE = {
    class: "CONTENT-RULE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&structuralClass": remoteMailRecipient["&id"] /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Auxiliaries": [ mailRecipient, ] /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
