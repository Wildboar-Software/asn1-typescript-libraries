/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Mlhg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Mlhg  ::=  [29] IMPLICIT INTEGER(1..2047)
 * ```
 */
export
type Mlhg = INTEGER;

let _cached_decoder_for_Mlhg: $.ASN1Decoder<Mlhg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Mlhg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Mlhg (el: _Element): Mlhg {
    if (!_cached_decoder_for_Mlhg) { _cached_decoder_for_Mlhg = $._decode_implicit<Mlhg>(() => $._decodeInteger); }
    return _cached_decoder_for_Mlhg(el);
}

let _cached_encoder_for_Mlhg: $.ASN1Encoder<Mlhg> | null = null;

/**
 * @summary Encodes a(n) Mlhg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Mlhg, encoded as an ASN.1 Element.
 */
export
function _encode_Mlhg (value: Mlhg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Mlhg) { _cached_encoder_for_Mlhg = $._encode_implicit(_TagClass.context, 29, () => $._encodeInteger, $.BER); }
    return _cached_encoder_for_Mlhg(value, elGetter);
}


/* eslint-enable */
