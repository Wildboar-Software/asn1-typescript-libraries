/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ACGEncountered
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACGEncountered  ::=  [2] IMPLICIT OCTET STRING(SIZE(1))
 * ```
 */
export
type ACGEncountered = OCTET_STRING; // OctetStringType

let _cached_decoder_for_ACGEncountered: $.ASN1Decoder<ACGEncountered> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ACGEncountered
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ACGEncountered (el: _Element): ACGEncountered {
    if (!_cached_decoder_for_ACGEncountered) { _cached_decoder_for_ACGEncountered = $._decode_implicit<ACGEncountered>(() => $._decodeOctetString); }
    return _cached_decoder_for_ACGEncountered(el);
}

let _cached_encoder_for_ACGEncountered: $.ASN1Encoder<ACGEncountered> | null = null;

/**
 * @summary Encodes a(n) ACGEncountered into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ACGEncountered, encoded as an ASN.1 Element.
 */
export
function _encode_ACGEncountered (value: ACGEncountered, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ACGEncountered) { _cached_encoder_for_ACGEncountered = $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_ACGEncountered(value, elGetter);
}


/* eslint-enable */
