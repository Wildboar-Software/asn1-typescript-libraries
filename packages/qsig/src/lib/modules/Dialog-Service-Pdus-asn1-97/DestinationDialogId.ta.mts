/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary DestinationDialogId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DestinationDialogId  ::=  [1] IMPLICIT OCTET STRING (SIZE(0..8))
 * ```
 */
export
type DestinationDialogId = OCTET_STRING; // OctetStringType

let _cached_decoder_for_DestinationDialogId: $.ASN1Decoder<DestinationDialogId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DestinationDialogId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DestinationDialogId (el: _Element): DestinationDialogId {
    if (!_cached_decoder_for_DestinationDialogId) { _cached_decoder_for_DestinationDialogId = $._decode_implicit<DestinationDialogId>(() => $._decodeOctetString); }
    const _value = _cached_decoder_for_DestinationDialogId(el);
    if (_value.length < 0 || _value.length > 8) {
        throw new ASN1SizeError("DestinationDialogId violates SIZE constraint");
    }
    return _value;
}

let _cached_encoder_for_DestinationDialogId: $.ASN1Encoder<DestinationDialogId> | null = null;

/**
 * @summary Encodes a(n) DestinationDialogId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DestinationDialogId, encoded as an ASN.1 Element.
 */
export
function _encode_DestinationDialogId (value: DestinationDialogId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DestinationDialogId) { _cached_encoder_for_DestinationDialogId = $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_DestinationDialogId(value, elGetter);
}

/* eslint-enable */
