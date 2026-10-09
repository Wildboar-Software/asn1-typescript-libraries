/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Challenge_Item, _decode_Challenge_Item, _encode_Challenge_Item } from "../AccessControlFormat-prompt-1/Challenge-Item.ta.mjs";
// export { Challenge_Item, _decode_Challenge_Item, _encode_Challenge_Item } from "../AccessControlFormat-prompt-1/Challenge-Item.ta.mjs";


/**
 * @summary Challenge
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Challenge  ::=  SEQUENCE OF SEQUENCE {
 *     promptId            [1] PromptId,
 *     -- See comment 1
 *     defaultResponse     [2] IMPLICIT InternationalString OPTIONAL,
 *     promptInfo          [3] CHOICE{
 *     character               [1] IMPLICIT InternationalString,
 *     encrypted               [2] IMPLICIT Encryption} OPTIONAL,
 *     -- See comment 2
 *     regExpr             [4] IMPLICIT InternationalString OPTIONAL,
 *     -- See comment 3
 *     responseRequired    [5] IMPLICIT NULL OPTIONAL,
 *     allowedValues       [6] IMPLICIT SEQUENCE OF InternationalString OPTIONAL,
 *     --e.g. promptId="Desired color"; allowed = 'red', 'blue','Green'
 *     shouldSave          [7] IMPLICIT NULL OPTIONAL,
 *     -- See comment 4
 *     dataType            [8] IMPLICIT INTEGER {
 *         integer           (1),
 *         date              (2),
 *         float             (3),
 *         alphaNumeric      (4),
 *         url-urn           (5),
 *         boolean           (6)
 *     } OPTIONAL,
 *     -- See comment 5
 *     diagnostic          [9] IMPLICIT EXTERNAL OPTIONAL
 *     -- Intended for repeat requests when there is an error
 *     -- the client should report to the user from previous attempt.
 * }
 * ```
 */
export
type Challenge = Challenge_Item[]; // SequenceOfType

let _cached_decoder_for_Challenge: $.ASN1Decoder<Challenge> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Challenge
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Challenge (el: _Element): Challenge {
    if (!_cached_decoder_for_Challenge) { _cached_decoder_for_Challenge = $._decodeSequenceOf<Challenge_Item>(() => _decode_Challenge_Item); }
    return _cached_decoder_for_Challenge(el);
}

let _cached_encoder_for_Challenge: $.ASN1Encoder<Challenge> | null = null;

/**
 * @summary Encodes a(n) Challenge into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Challenge, encoded as an ASN.1 Element.
 */
export
function _encode_Challenge (value: Challenge, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Challenge) { _cached_encoder_for_Challenge = $._encodeSequenceOf<Challenge_Item>(() => _encode_Challenge_Item, $.BER); }
    return _cached_encoder_for_Challenge(value, elGetter);
}


/* eslint-enable */
