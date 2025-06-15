/* eslint-disable */
import { OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { id_mr_extensionPresenceMatch } from "../AttributeCertificateDefinitions/id-mr-extensionPresenceMatch.va.mjs";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
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

/* eslint-enable */
