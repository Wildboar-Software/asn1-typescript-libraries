/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Counter64
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Counter64  ::=  [APPLICATION 6]
 *                 IMPLICIT INTEGER (0..18446744073709551615)
 * ```
 */
export
type Counter64 = INTEGER;

let _cached_decoder_for_Counter64: $.ASN1Decoder<Counter64> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Counter64
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Counter64} The decoded data structure.
 */
export
function _decode_Counter64 (el: _Element) {
    if (!_cached_decoder_for_Counter64) { _cached_decoder_for_Counter64 = $._decode_implicit<Counter64>(() => $._decodeInteger); }
    return _cached_decoder_for_Counter64(el);
}

let _cached_encoder_for_Counter64: $.ASN1Encoder<Counter64> | null = null;

/**
 * @summary Encodes a(n) Counter64 into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Counter64, encoded as an ASN.1 Element.
 */
export
function _encode_Counter64 (value: Counter64, elGetter: $.ASN1Encoder<Counter64>) {
    if (!_cached_encoder_for_Counter64) { _cached_encoder_for_Counter64 = $._encode_implicit(_TagClass.application, 6, () => $._encodeInteger, $.BER); }
    return _cached_encoder_for_Counter64(value, elGetter);
}


/* eslint-enable */
