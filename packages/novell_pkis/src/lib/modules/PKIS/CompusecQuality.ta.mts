/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CompusecQualityPair, _decode_CompusecQualityPair, _encode_CompusecQualityPair } from "../PKIS/CompusecQualityPair.ta.mjs";
// export { CompusecQualityPair, _decode_CompusecQualityPair, _encode_CompusecQualityPair } from "../PKIS/CompusecQualityPair.ta.mjs";


/**
 * @summary CompusecQuality
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CompusecQuality  ::=  SEQUENCE SIZE (1..1)
 *                     OF CompusecQualityPair
 * ```
 */
export
type CompusecQuality = CompusecQualityPair[]; // SequenceOfType

let _cached_decoder_for_CompusecQuality: $.ASN1Decoder<CompusecQuality> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CompusecQuality
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CompusecQuality (el: _Element): CompusecQuality {
    if (!_cached_decoder_for_CompusecQuality) { _cached_decoder_for_CompusecQuality = $._decodeSequenceOf<CompusecQualityPair>(() => _decode_CompusecQualityPair); }
    return _cached_decoder_for_CompusecQuality(el);
}

let _cached_encoder_for_CompusecQuality: $.ASN1Encoder<CompusecQuality> | null = null;

/**
 * @summary Encodes a(n) CompusecQuality into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompusecQuality, encoded as an ASN.1 Element.
 */
export
function _encode_CompusecQuality (value: CompusecQuality, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CompusecQuality) { _cached_encoder_for_CompusecQuality = $._encodeSequenceOf<CompusecQualityPair>(() => _encode_CompusecQualityPair, $.BER); }
    return _cached_encoder_for_CompusecQuality(value, elGetter);
}


/* eslint-enable */
