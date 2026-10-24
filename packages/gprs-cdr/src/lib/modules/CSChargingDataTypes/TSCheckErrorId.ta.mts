/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type INTEGER,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TSCheckErrorId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TSCheckErrorId  ::=  CHOICE {
 *    globalForm     [0] IMPLICIT OBJECT IDENTIFIER,
 *    localForm      [1] IMPLICIT INTEGER}
 * ```
 */
export
type TSCheckErrorId =
    { globalForm: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { localForm: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_TSCheckErrorId: $.ASN1Decoder<TSCheckErrorId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TSCheckErrorId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TSCheckErrorId (el: _Element): TSCheckErrorId {
    if (!_cached_decoder_for_TSCheckErrorId) { _cached_decoder_for_TSCheckErrorId = $._decode_inextensible_choice<TSCheckErrorId>({
    "CONTEXT 0": [ "globalForm", $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier) ],
    "CONTEXT 1": [ "localForm", $._decode_implicit<INTEGER>(() => $._decodeInteger) ]
}); }
    return _cached_decoder_for_TSCheckErrorId(el);
}

let _cached_encoder_for_TSCheckErrorId: $.ASN1Encoder<TSCheckErrorId> | null = null;

/**
 * @summary Encodes a(n) TSCheckErrorId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TSCheckErrorId, encoded as an ASN.1 Element.
 */
export
function _encode_TSCheckErrorId (value: TSCheckErrorId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TSCheckErrorId) { _cached_encoder_for_TSCheckErrorId = $._encode_choice<TSCheckErrorId>({
    "globalForm": $._encode_implicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER),
    "localForm": $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER),
}, $.BER); }
    return _cached_encoder_for_TSCheckErrorId(value, elGetter);
}


/* eslint-enable */
