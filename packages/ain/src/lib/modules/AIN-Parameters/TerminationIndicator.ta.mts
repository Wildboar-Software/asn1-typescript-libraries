/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TerminationIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TerminationIndicator  ::=  [67] IMPLICIT OCTET STRING(SIZE(1))
 * ```
 */
export
type TerminationIndicator = OCTET_STRING; // OctetStringType

let _cached_decoder_for_TerminationIndicator: $.ASN1Decoder<TerminationIndicator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TerminationIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TerminationIndicator (el: _Element): TerminationIndicator {
    if (!_cached_decoder_for_TerminationIndicator) { _cached_decoder_for_TerminationIndicator = $._decode_implicit<TerminationIndicator>(() => $._decodeOctetString); }
    return _cached_decoder_for_TerminationIndicator(el);
}

let _cached_encoder_for_TerminationIndicator: $.ASN1Encoder<TerminationIndicator> | null = null;

/**
 * @summary Encodes a(n) TerminationIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TerminationIndicator, encoded as an ASN.1 Element.
 */
export
function _encode_TerminationIndicator (value: TerminationIndicator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TerminationIndicator) { _cached_encoder_for_TerminationIndicator = $._encode_implicit(_TagClass.context, 67, () => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_TerminationIndicator(value, elGetter);
}


/* eslint-enable */
