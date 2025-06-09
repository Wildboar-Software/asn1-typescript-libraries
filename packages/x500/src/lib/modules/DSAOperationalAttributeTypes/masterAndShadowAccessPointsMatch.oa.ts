/* eslint-disable */
import * as $ from "asn1-ts/dist/functional.mjs";
import { id_kmr_masterShadowMatch } from "../DSAOperationalAttributeTypes/id-kmr-masterShadowMatch.va.js";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta.js";
export { id_kmr_masterShadowMatch } from "../DSAOperationalAttributeTypes/id-kmr-masterShadowMatch.va.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
export {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta.js";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.js";

/* START_OF_SYMBOL_DEFINITION masterAndShadowAccessPointsMatch */
/**
 * @summary masterAndShadowAccessPointsMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * masterAndShadowAccessPointsMatch MATCHING-RULE ::= {
 *   SYNTAX  SET OF Name
 *   ID      id-kmr-masterShadowMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<Name[]>}
 * @implements {MATCHING_RULE<Name[]>}
 */
export const masterAndShadowAccessPointsMatch: MATCHING_RULE<Name[]> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeSetOf<Name>(() => _decode_Name),
    },
    encoderFor: {
        "&AssertionType": $._encodeSetOf<Name>(() => _encode_Name, $.DER),
    },
    "&id": id_kmr_masterShadowMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION masterAndShadowAccessPointsMatch */

/* eslint-enable */
