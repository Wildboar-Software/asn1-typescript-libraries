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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Counter32
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Counter32  ::=  [APPLICATION 1] IMPLICIT INTEGER (0..4294967295)
 * ```
 */
export
type Counter32 = INTEGER;

let _cached_decoder_for_Counter32: $.ASN1Decoder<Counter32> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Counter32
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Counter32} The decoded data structure.
 */
export
function _decode_Counter32 (el: _Element): Counter32 {
    if (!_cached_decoder_for_Counter32) { _cached_decoder_for_Counter32 = $._decode_implicit<Counter32>(() => $._decodeInteger); }
    return _cached_decoder_for_Counter32(el);
}

let _cached_encoder_for_Counter32: $.ASN1Encoder<Counter32> | null = null;

/**
 * @summary Encodes a(n) Counter32 into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Counter32, encoded as an ASN.1 Element.
 */
export
function _encode_Counter32 (value: Counter32, elGetter: $.ASN1Encoder<Counter32>): _Element {
    if (!_cached_encoder_for_Counter32) { _cached_encoder_for_Counter32 = $._encode_implicit(_TagClass.application, 1, () => $._encodeInteger, $.BER); }
    return _cached_encoder_for_Counter32(value, elGetter);
}


/* eslint-enable */
