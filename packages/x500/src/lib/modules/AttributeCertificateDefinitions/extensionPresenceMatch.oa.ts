/* eslint-disable */
import { OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { id_mr_extensionPresenceMatch } from "../AttributeCertificateDefinitions/id-mr-extensionPresenceMatch.va.js";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
export { id_mr_extensionPresenceMatch } from "../AttributeCertificateDefinitions/id-mr-extensionPresenceMatch.va.js";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.js";

/* START_OF_SYMBOL_DEFINITION extensionPresenceMatch */
/**
 * @summary extensionPresenceMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * extensionPresenceMatch MATCHING-RULE ::= {
 *   SYNTAX  EXTENSION.&id
 *   ID      id-mr-extensionPresenceMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<OBJECT_IDENTIFIER>}
 * @implements {MATCHING_RULE<OBJECT_IDENTIFIER>}
 */
export const extensionPresenceMatch: MATCHING_RULE<OBJECT_IDENTIFIER> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeObjectIdentifier,
    },
    encoderFor: {
        "&AssertionType": $._encodeObjectIdentifier,
    },
    "&id": id_mr_extensionPresenceMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION extensionPresenceMatch */

/* eslint-enable */
