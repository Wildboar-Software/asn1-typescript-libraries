/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CTRConnection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CTRConnection  ::=  [141] IMPLICIT BOOLEAN
 * ```
 */
export
type CTRConnection = BOOLEAN; // BooleanType

let _cached_decoder_for_CTRConnection: $.ASN1Decoder<CTRConnection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CTRConnection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CTRConnection (el: _Element): CTRConnection {
    if (!_cached_decoder_for_CTRConnection) { _cached_decoder_for_CTRConnection = $._decode_implicit<CTRConnection>(() => $._decodeBoolean); }
    return _cached_decoder_for_CTRConnection(el);
}

let _cached_encoder_for_CTRConnection: $.ASN1Encoder<CTRConnection> | null = null;

/**
 * @summary Encodes a(n) CTRConnection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CTRConnection, encoded as an ASN.1 Element.
 */
export
function _encode_CTRConnection (value: CTRConnection, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CTRConnection) { _cached_encoder_for_CTRConnection = $._encode_implicit(_TagClass.context, 141, () => $._encodeBoolean, $.BER); }
    return _cached_encoder_for_CTRConnection(value, elGetter);
}


/* eslint-enable */
