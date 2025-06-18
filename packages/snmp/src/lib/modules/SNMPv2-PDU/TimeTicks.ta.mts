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
import * as $ from "asn1-ts/dist/functional.mjs";



/**
 * @summary TimeTicks
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeTicks  ::=  [APPLICATION 3] IMPLICIT INTEGER (0..4294967295)
 * ```
 */
export
type TimeTicks = INTEGER;

let _cached_decoder_for_TimeTicks: $.ASN1Decoder<TimeTicks> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TimeTicks
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TimeTicks} The decoded data structure.
 */
export
function _decode_TimeTicks (el: _Element) {
    if (!_cached_decoder_for_TimeTicks) { _cached_decoder_for_TimeTicks = $._decode_implicit<TimeTicks>(() => $._decodeInteger); }
    return _cached_decoder_for_TimeTicks(el);
}

let _cached_encoder_for_TimeTicks: $.ASN1Encoder<TimeTicks> | null = null;

/**
 * @summary Encodes a(n) TimeTicks into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeTicks, encoded as an ASN.1 Element.
 */
export
function _encode_TimeTicks (value: TimeTicks, elGetter: $.ASN1Encoder<TimeTicks>) {
    if (!_cached_encoder_for_TimeTicks) { _cached_encoder_for_TimeTicks = $._encode_implicit(_TagClass.application, 3, () => $._encodeInteger, $.BER); }
    return _cached_encoder_for_TimeTicks(value, elGetter);
}


/* eslint-enable */
