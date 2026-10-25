/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OCTET_STRING,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary OriginationDialogId
 * @description
 *
 * Dialogue identifier chosen by the PINX that sends it, sufficient to
 * distinguish that PINX's dialogues (ECMA-165 §8.4.1, §8.4.2). Table 33 limits
 * it to at most 8 octets and does not forbid an empty value. The peer later
 * returns this value as `destinationDialogId`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OriginationDialogId  ::=  [0] IMPLICIT OCTET STRING (SIZE(0..8))
 * ```
 */
export
type OriginationDialogId = OCTET_STRING; // OctetStringType

let _cached_decoder_for_OriginationDialogId: $.ASN1Decoder<OriginationDialogId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OriginationDialogId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OriginationDialogId (el: _Element): OriginationDialogId {
    if (!_cached_decoder_for_OriginationDialogId) { _cached_decoder_for_OriginationDialogId = $._decode_implicit<OriginationDialogId>(() => $._decodeOctetString); }
    const _value = _cached_decoder_for_OriginationDialogId(el);
    if (_value.length < 0 || _value.length > 8) {
        throw new ASN1SizeError("OriginationDialogId violates SIZE constraint");
    }
    return _value;
}

let _cached_encoder_for_OriginationDialogId: $.ASN1Encoder<OriginationDialogId> | null = null;

/**
 * @summary Encodes a(n) OriginationDialogId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginationDialogId, encoded as an ASN.1 Element.
 */
export
function _encode_OriginationDialogId (value: OriginationDialogId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OriginationDialogId) { _cached_encoder_for_OriginationDialogId = $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_OriginationDialogId(value, elGetter);
}

/* eslint-enable */
