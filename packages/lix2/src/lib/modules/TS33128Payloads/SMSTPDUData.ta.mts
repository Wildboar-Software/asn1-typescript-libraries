/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SMSTPDU, _decode_SMSTPDU, _encode_SMSTPDU } from "../TS33128Payloads/SMSTPDU.ta.mjs";
// export { SMSTPDU, _decode_SMSTPDU, _encode_SMSTPDU } from "../TS33128Payloads/SMSTPDU.ta.mjs";
import { TruncatedSMSTPDU, _decode_TruncatedSMSTPDU, _encode_TruncatedSMSTPDU } from "../TS33128Payloads/TruncatedSMSTPDU.ta.mjs";
// export { TruncatedSMSTPDU, _decode_TruncatedSMSTPDU, _encode_TruncatedSMSTPDU } from "../TS33128Payloads/TruncatedSMSTPDU.ta.mjs";
import { ThreeGPP2SMSTPDU, _decode_ThreeGPP2SMSTPDU, _encode_ThreeGPP2SMSTPDU } from "../TS33128Payloads/ThreeGPP2SMSTPDU.ta.mjs";
// export { ThreeGPP2SMSTPDU, _decode_ThreeGPP2SMSTPDU, _encode_ThreeGPP2SMSTPDU } from "../TS33128Payloads/ThreeGPP2SMSTPDU.ta.mjs";


/**
 * @summary SMSTPDUData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSTPDUData  ::=  CHOICE
 * {
 *     sMSTPDU              [1] SMSTPDU,
 *     truncatedSMSTPDU     [2] TruncatedSMSTPDU,
 *     redactedSMSTPDU      [3] SMSTPDU,
 *     threeGPP2SMSTPDU     [4] ThreeGPP2SMSTPDU,
 *     redacted3GPP2SMSTPDU [5] ThreeGPP2SMSTPDU
 * }
 * ```
 */
export
type SMSTPDUData =
    { sMSTPDU: SMSTPDU } /* CHOICE_ALT_ROOT */
    | { truncatedSMSTPDU: TruncatedSMSTPDU } /* CHOICE_ALT_ROOT */
    | { redactedSMSTPDU: SMSTPDU } /* CHOICE_ALT_ROOT */
    | { threeGPP2SMSTPDU: ThreeGPP2SMSTPDU } /* CHOICE_ALT_ROOT */
    | { redacted3GPP2SMSTPDU: ThreeGPP2SMSTPDU } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SMSTPDUData: $.ASN1Decoder<SMSTPDUData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMSTPDUData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMSTPDUData (el: _Element): SMSTPDUData {
    if (!_cached_decoder_for_SMSTPDUData) { _cached_decoder_for_SMSTPDUData = $._decode_inextensible_choice<SMSTPDUData>({
    "CONTEXT 1": [ "sMSTPDU", $._decode_implicit<SMSTPDU>(() => _decode_SMSTPDU) ],
    "CONTEXT 2": [ "truncatedSMSTPDU", $._decode_implicit<TruncatedSMSTPDU>(() => _decode_TruncatedSMSTPDU) ],
    "CONTEXT 3": [ "redactedSMSTPDU", $._decode_implicit<SMSTPDU>(() => _decode_SMSTPDU) ],
    "CONTEXT 4": [ "threeGPP2SMSTPDU", $._decode_implicit<ThreeGPP2SMSTPDU>(() => _decode_ThreeGPP2SMSTPDU) ],
    "CONTEXT 5": [ "redacted3GPP2SMSTPDU", $._decode_implicit<ThreeGPP2SMSTPDU>(() => _decode_ThreeGPP2SMSTPDU) ]
}); }
    return _cached_decoder_for_SMSTPDUData(el);
}

let _cached_encoder_for_SMSTPDUData: $.ASN1Encoder<SMSTPDUData> | null = null;

/**
 * @summary Encodes a(n) SMSTPDUData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMSTPDUData, encoded as an ASN.1 Element.
 */
export
function _encode_SMSTPDUData (value: SMSTPDUData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMSTPDUData) { _cached_encoder_for_SMSTPDUData = $._encode_choice<SMSTPDUData>({
    "sMSTPDU": $._encode_implicit(_TagClass.context, 1, () => _encode_SMSTPDU, $.BER),
    "truncatedSMSTPDU": $._encode_implicit(_TagClass.context, 2, () => _encode_TruncatedSMSTPDU, $.BER),
    "redactedSMSTPDU": $._encode_implicit(_TagClass.context, 3, () => _encode_SMSTPDU, $.BER),
    "threeGPP2SMSTPDU": $._encode_implicit(_TagClass.context, 4, () => _encode_ThreeGPP2SMSTPDU, $.BER),
    "redacted3GPP2SMSTPDU": $._encode_implicit(_TagClass.context, 5, () => _encode_ThreeGPP2SMSTPDU, $.BER),
}, $.BER); }
    return _cached_encoder_for_SMSTPDUData(value, elGetter);
}


/* eslint-enable */
