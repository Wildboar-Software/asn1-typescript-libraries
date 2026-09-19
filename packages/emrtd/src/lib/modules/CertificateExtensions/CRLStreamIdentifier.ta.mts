/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CRLStreamIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CRLStreamIdentifier  ::=  INTEGER (0..MAX)
 * ```
 */
export
type CRLStreamIdentifier = INTEGER;

let _cached_decoder_for_CRLStreamIdentifier: $.ASN1Decoder<CRLStreamIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CRLStreamIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CRLStreamIdentifier (el: _Element): CRLStreamIdentifier {
    if (!_cached_decoder_for_CRLStreamIdentifier) { _cached_decoder_for_CRLStreamIdentifier = $._decodeInteger; }
    return _cached_decoder_for_CRLStreamIdentifier(el);
}

let _cached_encoder_for_CRLStreamIdentifier: $.ASN1Encoder<CRLStreamIdentifier> | null = null;

/**
 * @summary Encodes a(n) CRLStreamIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CRLStreamIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_CRLStreamIdentifier (value: CRLStreamIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CRLStreamIdentifier) { _cached_encoder_for_CRLStreamIdentifier = $._encodeInteger; }
    return _cached_encoder_for_CRLStreamIdentifier(value, elGetter);
}


/* eslint-enable */
