/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BIT_STRING,
    INTEGER,
    PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UserSignalType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UserSignalType  ::=  CHOICE {
 *     copySignal              BIT STRING,
 *     copyCharSignal          PrintableString,
 *     interpretedSignal       INTEGER -- Place holder
 * }
 * ```
 */
export
type UserSignalType =
    { copySignal: BIT_STRING } /* CHOICE_ALT_ROOT */
    | { copyCharSignal: PrintableString } /* CHOICE_ALT_ROOT */
    | { interpretedSignal: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_UserSignalType: $.ASN1Decoder<UserSignalType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UserSignalType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UserSignalType (el: _Element): UserSignalType {
    if (!_cached_decoder_for_UserSignalType) { _cached_decoder_for_UserSignalType = $._decode_inextensible_choice<UserSignalType>({
    "CONTEXT 0": [ "copySignal", $._decodeBitString ],
    "CONTEXT 1": [ "copyCharSignal", $._decodePrintableString ],
    "CONTEXT 2": [ "interpretedSignal", $._decodeInteger ]
}); }
    return _cached_decoder_for_UserSignalType(el);
}

let _cached_encoder_for_UserSignalType: $.ASN1Encoder<UserSignalType> | null = null;

/**
 * @summary Encodes a(n) UserSignalType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserSignalType, encoded as an ASN.1 Element.
 */
export
function _encode_UserSignalType (value: UserSignalType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UserSignalType) { _cached_encoder_for_UserSignalType = $._encode_choice<UserSignalType>({
    "copySignal": $._encode_implicit(_TagClass.context, 0, () => $._encodeBitString, $.BER),
    "copyCharSignal": $._encode_implicit(_TagClass.context, 1, () => $._encodePrintableString, $.BER),
    "interpretedSignal": $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER),
}, $.BER); }
    return _cached_encoder_for_UserSignalType(value, elGetter);
}


/* eslint-enable */
