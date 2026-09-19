/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LegID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LegID  ::=  [132] IMPLICIT INTEGER(0..2)
 * ```
 */
export
type LegID = INTEGER;

let _cached_decoder_for_LegID: $.ASN1Decoder<LegID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LegID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LegID (el: _Element): LegID {
    if (!_cached_decoder_for_LegID) { _cached_decoder_for_LegID = $._decode_implicit<LegID>(() => $._decodeInteger); }
    return _cached_decoder_for_LegID(el);
}

let _cached_encoder_for_LegID: $.ASN1Encoder<LegID> | null = null;

/**
 * @summary Encodes a(n) LegID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LegID, encoded as an ASN.1 Element.
 */
export
function _encode_LegID (value: LegID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LegID) { _cached_encoder_for_LegID = $._encode_implicit(_TagClass.context, 132, () => $._encodeInteger, $.BER); }
    return _cached_encoder_for_LegID(value, elGetter);
}


/* eslint-enable */
