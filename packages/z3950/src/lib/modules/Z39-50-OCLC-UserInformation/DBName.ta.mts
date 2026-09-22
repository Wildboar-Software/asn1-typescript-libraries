/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    VisibleString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DBName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DBName  ::=  [2] IMPLICIT VisibleString
 * ```
 */
export
type DBName = VisibleString; // VisibleString

let _cached_decoder_for_DBName: $.ASN1Decoder<DBName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DBName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DBName (el: _Element): DBName {
    if (!_cached_decoder_for_DBName) { _cached_decoder_for_DBName = $._decode_implicit<DBName>(() => $._decodeVisibleString); }
    return _cached_decoder_for_DBName(el);
}

let _cached_encoder_for_DBName: $.ASN1Encoder<DBName> | null = null;

/**
 * @summary Encodes a(n) DBName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DBName, encoded as an ASN.1 Element.
 */
export
function _encode_DBName (value: DBName, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DBName) { _cached_encoder_for_DBName = $._encode_implicit(_TagClass.context, 2, () => $._encodeVisibleString, $.BER); }
    return _cached_encoder_for_DBName(value, elGetter);
}


/* eslint-enable */
