/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GenericAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GenericAddress  ::=  [80] IMPLICIT OCTET STRING(SIZE(4..11))
 * ```
 */
export
type GenericAddress = OCTET_STRING; // OctetStringType

let _cached_decoder_for_GenericAddress: $.ASN1Decoder<GenericAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GenericAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GenericAddress (el: _Element): GenericAddress {
    if (!_cached_decoder_for_GenericAddress) { _cached_decoder_for_GenericAddress = $._decode_implicit<GenericAddress>(() => $._decodeOctetString); }
    return _cached_decoder_for_GenericAddress(el);
}

let _cached_encoder_for_GenericAddress: $.ASN1Encoder<GenericAddress> | null = null;

/**
 * @summary Encodes a(n) GenericAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GenericAddress, encoded as an ASN.1 Element.
 */
export
function _encode_GenericAddress (value: GenericAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GenericAddress) { _cached_encoder_for_GenericAddress = $._encode_implicit(_TagClass.context, 80, () => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_GenericAddress(value, elGetter);
}


/* eslint-enable */
