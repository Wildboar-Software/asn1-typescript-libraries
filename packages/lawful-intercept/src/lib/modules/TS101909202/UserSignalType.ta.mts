/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type BIT_STRING,
    type INTEGER,
    PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UserSignalType
 * @description
 *
 * The user's signalling transaction on an IRI record. By default this is a
 * bit-exact copy and no interpretation is attempted (clause 6.4.2).
 *
 * `copySignal` is that bit-exact copy. `copyCharSignal` is the character form;
 * `PrintableString` is recommended for text signalling such as SIP.
 * `interpretedSignal` is an integer placeholder. Annex A marks it as a place
 * holder, and this document does not assign integer values. Figures 23 and 24
 * show optional models in which the Policy Server or the CMTS offers only
 * interpreted signalling.
 *
 * ETSI TS 101 909-20-2 V1.1.2 (2005-10), clause 6.4.2.1.8, annex A.
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092002/01.01.02_60/ts_1019092002v010102p.pdf
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
