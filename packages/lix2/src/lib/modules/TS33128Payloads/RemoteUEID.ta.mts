/* eslint-disable */
import {
    BIT_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
// export { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
import { IMEI, _decode_IMEI, _encode_IMEI } from "../TS33128Payloads/IMEI.ta.mjs";
// export { IMEI, _decode_IMEI, _encode_IMEI } from "../TS33128Payloads/IMEI.ta.mjs";
import { IMEISV, _decode_IMEISV, _encode_IMEISV } from "../TS33128Payloads/IMEISV.ta.mjs";
// export { IMEISV, _decode_IMEISV, _encode_IMEISV } from "../TS33128Payloads/IMEISV.ta.mjs";


/**
 * @summary RemoteUEID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RemoteUEID  ::=  CHOICE
 * {
 *     uPPRUKIDNAI         [1] NAI,
 *     uPPRUKID64BitString [2] BIT STRING (SIZE(64)),
 *     cPPRUKIDNAI         [3] NAI,
 *     cPPRUKID64BitString [4] BIT STRING (SIZE(64)),
 *     iMEI                [5] IMEI,
 *     iMEISV              [6] IMEISV
 * }
 * ```
 */
export
type RemoteUEID =
    { uPPRUKIDNAI: NAI } /* CHOICE_ALT_ROOT */
    | { uPPRUKID64BitString: BIT_STRING } /* CHOICE_ALT_ROOT */
    | { cPPRUKIDNAI: NAI } /* CHOICE_ALT_ROOT */
    | { cPPRUKID64BitString: BIT_STRING } /* CHOICE_ALT_ROOT */
    | { iMEI: IMEI } /* CHOICE_ALT_ROOT */
    | { iMEISV: IMEISV } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RemoteUEID: $.ASN1Decoder<RemoteUEID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RemoteUEID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RemoteUEID (el: _Element): RemoteUEID {
    if (!_cached_decoder_for_RemoteUEID) { _cached_decoder_for_RemoteUEID = $._decode_inextensible_choice<RemoteUEID>({
    "CONTEXT 1": [ "uPPRUKIDNAI", $._decode_implicit<NAI>(() => _decode_NAI) ],
    "CONTEXT 2": [ "uPPRUKID64BitString", $._decode_implicit<BIT_STRING>(() => $._decodeBitString) ],
    "CONTEXT 3": [ "cPPRUKIDNAI", $._decode_implicit<NAI>(() => _decode_NAI) ],
    "CONTEXT 4": [ "cPPRUKID64BitString", $._decode_implicit<BIT_STRING>(() => $._decodeBitString) ],
    "CONTEXT 5": [ "iMEI", $._decode_implicit<IMEI>(() => _decode_IMEI) ],
    "CONTEXT 6": [ "iMEISV", $._decode_implicit<IMEISV>(() => _decode_IMEISV) ]
}); }
    return _cached_decoder_for_RemoteUEID(el);
}

let _cached_encoder_for_RemoteUEID: $.ASN1Encoder<RemoteUEID> | null = null;

/**
 * @summary Encodes a(n) RemoteUEID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RemoteUEID, encoded as an ASN.1 Element.
 */
export
function _encode_RemoteUEID (value: RemoteUEID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RemoteUEID) { _cached_encoder_for_RemoteUEID = $._encode_choice<RemoteUEID>({
    "uPPRUKIDNAI": $._encode_implicit(_TagClass.context, 1, () => _encode_NAI, $.BER),
    "uPPRUKID64BitString": $._encode_implicit(_TagClass.context, 2, () => $._encodeBitString, $.BER),
    "cPPRUKIDNAI": $._encode_implicit(_TagClass.context, 3, () => _encode_NAI, $.BER),
    "cPPRUKID64BitString": $._encode_implicit(_TagClass.context, 4, () => $._encodeBitString, $.BER),
    "iMEI": $._encode_implicit(_TagClass.context, 5, () => _encode_IMEI, $.BER),
    "iMEISV": $._encode_implicit(_TagClass.context, 6, () => _encode_IMEISV, $.BER),
}, $.BER); }
    return _cached_encoder_for_RemoteUEID(value, elGetter);
}


/* eslint-enable */
