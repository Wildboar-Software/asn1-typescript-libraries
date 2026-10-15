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
 * The signalling transaction of the target (clause 8.4.2.1.8).
 * Clause 8.4.2 requires a bit-exact copy and forbids interpretation,
 * which is `copySignal`. `interpretedSignal` is an integer; this
 * document does not assign meanings to those integers.
 *
 * `cdcPdu` is a PacketCable CDC PDU imported from PCESP version 4.
 * Clause 8.4.2.1.8's CHOICE does not list `cdcPdu`; annex A does.
 * Annex A note 2 says the LIMF receives that PCESP module in BER and
 * places it in this choice before delivery to the LEMF. Clause 5.1
 * says that if INI2 arrives in DER the LIMF re-encodes BER for HI2.
 * PCESP field definitions are in PacketCable PKT-SP-ESP-I04-040723.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 8.4.2.1.8, annex A.
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
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
