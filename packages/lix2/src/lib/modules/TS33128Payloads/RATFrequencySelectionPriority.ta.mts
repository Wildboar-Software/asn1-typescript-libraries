/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RATFrequencySelectionPriority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RATFrequencySelectionPriority  ::=  INTEGER (1..256)
 * ```
 */
export
type RATFrequencySelectionPriority = INTEGER;

let _cached_decoder_for_RATFrequencySelectionPriority: $.ASN1Decoder<RATFrequencySelectionPriority> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RATFrequencySelectionPriority
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RATFrequencySelectionPriority (el: _Element): RATFrequencySelectionPriority {
    if (!_cached_decoder_for_RATFrequencySelectionPriority) { _cached_decoder_for_RATFrequencySelectionPriority = $._decodeInteger; }
    return _cached_decoder_for_RATFrequencySelectionPriority(el);
}

let _cached_encoder_for_RATFrequencySelectionPriority: $.ASN1Encoder<RATFrequencySelectionPriority> | null = null;

/**
 * @summary Encodes a(n) RATFrequencySelectionPriority into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RATFrequencySelectionPriority, encoded as an ASN.1 Element.
 */
export
function _encode_RATFrequencySelectionPriority (value: RATFrequencySelectionPriority, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RATFrequencySelectionPriority) { _cached_encoder_for_RATFrequencySelectionPriority = $._encodeInteger; }
    return _cached_encoder_for_RATFrequencySelectionPriority(value, elGetter);
}


/* eslint-enable */
