/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ControlEncountered
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ControlEncountered  ::=  [127] IMPLICIT OCTET STRING(SIZE(1))
 * ```
 */
export
type ControlEncountered = OCTET_STRING; // OctetStringType

let _cached_decoder_for_ControlEncountered: $.ASN1Decoder<ControlEncountered> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ControlEncountered
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ControlEncountered (el: _Element): ControlEncountered {
    if (!_cached_decoder_for_ControlEncountered) { _cached_decoder_for_ControlEncountered = $._decode_implicit<ControlEncountered>(() => $._decodeOctetString); }
    return _cached_decoder_for_ControlEncountered(el);
}

let _cached_encoder_for_ControlEncountered: $.ASN1Encoder<ControlEncountered> | null = null;

/**
 * @summary Encodes a(n) ControlEncountered into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ControlEncountered, encoded as an ASN.1 Element.
 */
export
function _encode_ControlEncountered (value: ControlEncountered, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ControlEncountered) { _cached_encoder_for_ControlEncountered = $._encode_implicit(_TagClass.context, 127, () => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_ControlEncountered(value, elGetter);
}


/* eslint-enable */
