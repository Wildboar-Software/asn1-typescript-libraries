/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
// export { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
import { SUCI, _decode_SUCI, _encode_SUCI } from "../TS33128Payloads/SUCI.ta.mjs";
// export { SUCI, _decode_SUCI, _encode_SUCI } from "../TS33128Payloads/SUCI.ta.mjs";
import { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
// export { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";


/**
 * @summary FiveGSSubscriberID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGSSubscriberID  ::=  CHOICE
 * {
 *     sUPI [1] SUPI,
 *     sUCI [2] SUCI,
 *     pEI  [3] PEI,
 *     gPSI [4] GPSI
 * }
 * ```
 */
export
type FiveGSSubscriberID =
    { sUPI: SUPI } /* CHOICE_ALT_ROOT */
    | { sUCI: SUCI } /* CHOICE_ALT_ROOT */
    | { pEI: PEI } /* CHOICE_ALT_ROOT */
    | { gPSI: GPSI } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_FiveGSSubscriberID: $.ASN1Decoder<FiveGSSubscriberID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGSSubscriberID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FiveGSSubscriberID (el: _Element): FiveGSSubscriberID {
    if (!_cached_decoder_for_FiveGSSubscriberID) { _cached_decoder_for_FiveGSSubscriberID = $._decode_inextensible_choice<FiveGSSubscriberID>({
    "CONTEXT 1": [ "sUPI", $._decode_explicit<SUPI>(() => _decode_SUPI) ],
    "CONTEXT 2": [ "sUCI", $._decode_implicit<SUCI>(() => _decode_SUCI) ],
    "CONTEXT 3": [ "pEI", $._decode_explicit<PEI>(() => _decode_PEI) ],
    "CONTEXT 4": [ "gPSI", $._decode_explicit<GPSI>(() => _decode_GPSI) ]
}); }
    return _cached_decoder_for_FiveGSSubscriberID(el);
}

let _cached_encoder_for_FiveGSSubscriberID: $.ASN1Encoder<FiveGSSubscriberID> | null = null;

/**
 * @summary Encodes a(n) FiveGSSubscriberID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGSSubscriberID, encoded as an ASN.1 Element.
 */
export
function _encode_FiveGSSubscriberID (value: FiveGSSubscriberID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FiveGSSubscriberID) { _cached_encoder_for_FiveGSSubscriberID = $._encode_choice<FiveGSSubscriberID>({
    "sUPI": $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER),
    "sUCI": $._encode_implicit(_TagClass.context, 2, () => _encode_SUCI, $.BER),
    "pEI": $._encode_explicit(_TagClass.context, 3, () => _encode_PEI, $.BER),
    "gPSI": $._encode_explicit(_TagClass.context, 4, () => _encode_GPSI, $.BER),
}, $.BER); }
    return _cached_encoder_for_FiveGSSubscriberID(value, elGetter);
}


/* eslint-enable */
