/* eslint-disable */
import {
    BIT_STRING,
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CdcPdu, _decode_CdcPdu, _encode_CdcPdu } from "../PCESP/CdcPdu.ta.mjs";
// export { CdcPdu, _decode_CdcPdu, _encode_CdcPdu } from "../PCESP/CdcPdu.ta.mjs";


/**
 * @summary UserSignalType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UserSignalType  ::=  CHOICE {
 *     copySignal              BIT STRING,
 *     interpretedSignal       INTEGER,
 *     cdcPdu                  CdcPdu
 * }
 * ```
 */
export
type UserSignalType =
    { copySignal: BIT_STRING } /* CHOICE_ALT_ROOT */
    | { interpretedSignal: INTEGER } /* CHOICE_ALT_ROOT */
    | { cdcPdu: CdcPdu } /* CHOICE_ALT_ROOT */;

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
    "CONTEXT 1": [ "interpretedSignal", $._decodeInteger ],
    "CONTEXT 2": [ "cdcPdu", _decode_CdcPdu ]
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
    "interpretedSignal": $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER),
    "cdcPdu": $._encode_implicit(_TagClass.context, 2, () => _encode_CdcPdu, $.BER),
}, $.BER); }
    return _cached_encoder_for_UserSignalType(value, elGetter);
}


/* eslint-enable */
