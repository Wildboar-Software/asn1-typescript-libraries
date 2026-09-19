/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary STRConnection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * STRConnection  ::=  [96] IMPLICIT BOOLEAN
 * ```
 */
export
type STRConnection = BOOLEAN; // BooleanType

let _cached_decoder_for_STRConnection: $.ASN1Decoder<STRConnection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) STRConnection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_STRConnection (el: _Element): STRConnection {
    if (!_cached_decoder_for_STRConnection) { _cached_decoder_for_STRConnection = $._decode_implicit<STRConnection>(() => $._decodeBoolean); }
    return _cached_decoder_for_STRConnection(el);
}

let _cached_encoder_for_STRConnection: $.ASN1Encoder<STRConnection> | null = null;

/**
 * @summary Encodes a(n) STRConnection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The STRConnection, encoded as an ASN.1 Element.
 */
export
function _encode_STRConnection (value: STRConnection, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_STRConnection) { _cached_encoder_for_STRConnection = $._encode_implicit(_TagClass.context, 96, () => $._encodeBoolean, $.BER); }
    return _cached_encoder_for_STRConnection(value, elGetter);
}


/* eslint-enable */
