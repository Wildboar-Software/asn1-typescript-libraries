/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RTPServiceIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RTPServiceIndicator  ::=  [144] IMPLICIT OCTET STRING(SIZE(1))
 * ```
 */
export
type RTPServiceIndicator = OCTET_STRING; // OctetStringType

let _cached_decoder_for_RTPServiceIndicator: $.ASN1Decoder<RTPServiceIndicator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RTPServiceIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RTPServiceIndicator (el: _Element): RTPServiceIndicator {
    if (!_cached_decoder_for_RTPServiceIndicator) { _cached_decoder_for_RTPServiceIndicator = $._decode_implicit<RTPServiceIndicator>(() => $._decodeOctetString); }
    return _cached_decoder_for_RTPServiceIndicator(el);
}

let _cached_encoder_for_RTPServiceIndicator: $.ASN1Encoder<RTPServiceIndicator> | null = null;

/**
 * @summary Encodes a(n) RTPServiceIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RTPServiceIndicator, encoded as an ASN.1 Element.
 */
export
function _encode_RTPServiceIndicator (value: RTPServiceIndicator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RTPServiceIndicator) { _cached_encoder_for_RTPServiceIndicator = $._encode_implicit(_TagClass.context, 144, () => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_RTPServiceIndicator(value, elGetter);
}


/* eslint-enable */
