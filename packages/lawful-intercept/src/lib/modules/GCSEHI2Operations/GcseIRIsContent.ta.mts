/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type GcseIRIContent, _decode_GcseIRIContent, _encode_GcseIRIContent } from "../GCSEHI2Operations/GcseIRIContent.ta.mjs";
// export { GcseIRIContent, _decode_GcseIRIContent, _encode_GcseIRIContent } from "../GCSEHI2Operations/GcseIRIContent.ta.mjs";
import { type GcseIRISequence, _decode_GcseIRISequence, _encode_GcseIRISequence } from "../GCSEHI2Operations/GcseIRISequence.ta.mjs";
// export { GcseIRISequence, _decode_GcseIRISequence, _encode_GcseIRISequence } from "../GCSEHI2Operations/GcseIRISequence.ta.mjs";


/**
 * @summary GcseIRIsContent
 * @description
 * 
 * One GCSE IRI record, or a sequence of them for the same LEA destination.
 *
 * Aggregation is optional and only when several records are already available.
 * Records are sent immediately and are not held back in order to aggregate.
 * 3GPP TS 33.108, annex B.14.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GcseIRIsContent         ::=  CHOICE
 * {
 *     gcseiRIContent            GcseIRIContent,
 *     gcseIRISequence            GcseIRISequence
 * }
 * ```
 */
export
type GcseIRIsContent =
    { gcseiRIContent: GcseIRIContent } /* CHOICE_ALT_ROOT */
    | { gcseIRISequence: GcseIRISequence } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_GcseIRIsContent: $.ASN1Decoder<GcseIRIsContent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GcseIRIsContent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GcseIRIsContent (el: _Element): GcseIRIsContent {
    if (!_cached_decoder_for_GcseIRIsContent) { _cached_decoder_for_GcseIRIsContent = $._decode_inextensible_choice<GcseIRIsContent>({
    "CONTEXT 1": [ "gcseiRIContent", _decode_GcseIRIContent ],
    "CONTEXT 2": [ "gcseiRIContent", _decode_GcseIRIContent ],
    "CONTEXT 3": [ "gcseiRIContent", _decode_GcseIRIContent ],
    "CONTEXT 4": [ "gcseiRIContent", _decode_GcseIRIContent ],
    "UNIVERSAL 16": [ "gcseIRISequence", _decode_GcseIRISequence ]
}); }
    return _cached_decoder_for_GcseIRIsContent(el);
}

let _cached_encoder_for_GcseIRIsContent: $.ASN1Encoder<GcseIRIsContent> | null = null;

/**
 * @summary Encodes a(n) GcseIRIsContent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GcseIRIsContent, encoded as an ASN.1 Element.
 */
export
function _encode_GcseIRIsContent (value: GcseIRIsContent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GcseIRIsContent) { _cached_encoder_for_GcseIRIsContent = $._encode_choice<GcseIRIsContent>({
    "gcseiRIContent": _encode_GcseIRIContent,
    "gcseIRISequence": _encode_GcseIRISequence,
}, $.BER); }
    return _cached_encoder_for_GcseIRIsContent(value, elGetter);
}


/* eslint-enable */
