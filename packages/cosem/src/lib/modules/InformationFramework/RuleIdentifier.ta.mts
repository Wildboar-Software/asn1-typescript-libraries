/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RuleIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RuleIdentifier  ::=  INTEGER
 * ```
 */
export
type RuleIdentifier = INTEGER;

let _cached_decoder_for_RuleIdentifier: $.ASN1Decoder<RuleIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RuleIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RuleIdentifier (el: _Element): RuleIdentifier {
    if (!_cached_decoder_for_RuleIdentifier) { _cached_decoder_for_RuleIdentifier = $._decodeInteger; }
    return _cached_decoder_for_RuleIdentifier(el);
}

let _cached_encoder_for_RuleIdentifier: $.ASN1Encoder<RuleIdentifier> | null = null;

/**
 * @summary Encodes a(n) RuleIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RuleIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_RuleIdentifier (value: RuleIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RuleIdentifier) { _cached_encoder_for_RuleIdentifier = $._encodeInteger; }
    return _cached_encoder_for_RuleIdentifier(value, elGetter);
}


/* eslint-enable */
