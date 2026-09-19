/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    NULL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DisconnectFlag
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DisconnectFlag  ::=  [25] IMPLICIT NULL
 * ```
 */
export
type DisconnectFlag = NULL; // NullType

let _cached_decoder_for_DisconnectFlag: $.ASN1Decoder<DisconnectFlag> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DisconnectFlag
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DisconnectFlag (el: _Element): DisconnectFlag {
    if (!_cached_decoder_for_DisconnectFlag) { _cached_decoder_for_DisconnectFlag = $._decode_implicit<DisconnectFlag>(() => $._decodeNull); }
    return _cached_decoder_for_DisconnectFlag(el);
}

let _cached_encoder_for_DisconnectFlag: $.ASN1Encoder<DisconnectFlag> | null = null;

/**
 * @summary Encodes a(n) DisconnectFlag into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DisconnectFlag, encoded as an ASN.1 Element.
 */
export
function _encode_DisconnectFlag (value: DisconnectFlag, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DisconnectFlag) { _cached_encoder_for_DisconnectFlag = $._encode_implicit(_TagClass.context, 25, () => $._encodeNull, $.BER); }
    return _cached_encoder_for_DisconnectFlag(value, elGetter);
}


/* eslint-enable */
