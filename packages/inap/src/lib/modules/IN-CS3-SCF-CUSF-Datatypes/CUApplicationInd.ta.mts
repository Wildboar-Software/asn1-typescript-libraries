/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type INTEGER,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CUApplicationInd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CUApplicationInd  ::=  CHOICE {
 *   localValue   [0]  INTEGER,
 *   globalValue  [1]  OBJECT IDENTIFIER
 * }
 * ```
 */
export
type CUApplicationInd =
    { localValue: INTEGER } /* CHOICE_ALT_ROOT */
    | { globalValue: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CUApplicationInd: $.ASN1Decoder<CUApplicationInd> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CUApplicationInd
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CUApplicationInd (el: _Element): CUApplicationInd {
    if (!_cached_decoder_for_CUApplicationInd) { _cached_decoder_for_CUApplicationInd = $._decode_inextensible_choice<CUApplicationInd>({
    "CONTEXT 0": [ "localValue", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 1": [ "globalValue", $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier) ]
}); }
    return _cached_decoder_for_CUApplicationInd(el);
}

let _cached_encoder_for_CUApplicationInd: $.ASN1Encoder<CUApplicationInd> | null = null;

/**
 * @summary Encodes a(n) CUApplicationInd into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CUApplicationInd, encoded as an ASN.1 Element.
 */
export
function _encode_CUApplicationInd (value: CUApplicationInd, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CUApplicationInd) { _cached_encoder_for_CUApplicationInd = $._encode_choice<CUApplicationInd>({
    "localValue": $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER),
    "globalValue": $._encode_implicit(_TagClass.context, 1, () => $._encodeObjectIdentifier, $.BER),
}, $.BER); }
    return _cached_encoder_for_CUApplicationInd(value, elGetter);
}


/* eslint-enable */
