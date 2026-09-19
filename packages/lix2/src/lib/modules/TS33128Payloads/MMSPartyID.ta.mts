/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { E164Number, _decode_E164Number, _encode_E164Number } from "../TS33128Payloads/E164Number.ta.mjs";
// export { E164Number, _decode_E164Number, _encode_E164Number } from "../TS33128Payloads/E164Number.ta.mjs";
import { EmailAddress, _decode_EmailAddress, _encode_EmailAddress } from "../TS33128Payloads/EmailAddress.ta.mjs";
// export { EmailAddress, _decode_EmailAddress, _encode_EmailAddress } from "../TS33128Payloads/EmailAddress.ta.mjs";
import { IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
import { IMPU, _decode_IMPU, _encode_IMPU } from "../TS33128Payloads/IMPU.ta.mjs";
// export { IMPU, _decode_IMPU, _encode_IMPU } from "../TS33128Payloads/IMPU.ta.mjs";
import { IMPI, _decode_IMPI, _encode_IMPI } from "../TS33128Payloads/IMPI.ta.mjs";
// export { IMPI, _decode_IMPI, _encode_IMPI } from "../TS33128Payloads/IMPI.ta.mjs";
import { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
// export { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";


/**
 * @summary MMSPartyID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSPartyID  ::=  CHOICE
 * {
 *     e164Number   [1] E164Number,
 *     emailAddress [2] EmailAddress,
 *     iMSI         [3] IMSI,
 *     iMPU         [4] IMPU,
 *     iMPI         [5] IMPI,
 *     sUPI         [6] SUPI,
 *     gPSI         [7] GPSI
 * }
 * ```
 */
export
type MMSPartyID =
    { e164Number: E164Number } /* CHOICE_ALT_ROOT */
    | { emailAddress: EmailAddress } /* CHOICE_ALT_ROOT */
    | { iMSI: IMSI } /* CHOICE_ALT_ROOT */
    | { iMPU: IMPU } /* CHOICE_ALT_ROOT */
    | { iMPI: IMPI } /* CHOICE_ALT_ROOT */
    | { sUPI: SUPI } /* CHOICE_ALT_ROOT */
    | { gPSI: GPSI } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_MMSPartyID: $.ASN1Decoder<MMSPartyID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSPartyID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSPartyID (el: _Element): MMSPartyID {
    if (!_cached_decoder_for_MMSPartyID) { _cached_decoder_for_MMSPartyID = $._decode_inextensible_choice<MMSPartyID>({
    "CONTEXT 1": [ "e164Number", $._decode_implicit<E164Number>(() => _decode_E164Number) ],
    "CONTEXT 2": [ "emailAddress", $._decode_implicit<EmailAddress>(() => _decode_EmailAddress) ],
    "CONTEXT 3": [ "iMSI", $._decode_implicit<IMSI>(() => _decode_IMSI) ],
    "CONTEXT 4": [ "iMPU", $._decode_explicit<IMPU>(() => _decode_IMPU) ],
    "CONTEXT 5": [ "iMPI", $._decode_implicit<IMPI>(() => _decode_IMPI) ],
    "CONTEXT 6": [ "sUPI", $._decode_explicit<SUPI>(() => _decode_SUPI) ],
    "CONTEXT 7": [ "gPSI", $._decode_explicit<GPSI>(() => _decode_GPSI) ]
}); }
    return _cached_decoder_for_MMSPartyID(el);
}

let _cached_encoder_for_MMSPartyID: $.ASN1Encoder<MMSPartyID> | null = null;

/**
 * @summary Encodes a(n) MMSPartyID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSPartyID, encoded as an ASN.1 Element.
 */
export
function _encode_MMSPartyID (value: MMSPartyID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSPartyID) { _cached_encoder_for_MMSPartyID = $._encode_choice<MMSPartyID>({
    "e164Number": $._encode_implicit(_TagClass.context, 1, () => _encode_E164Number, $.BER),
    "emailAddress": $._encode_implicit(_TagClass.context, 2, () => _encode_EmailAddress, $.BER),
    "iMSI": $._encode_implicit(_TagClass.context, 3, () => _encode_IMSI, $.BER),
    "iMPU": $._encode_explicit(_TagClass.context, 4, () => _encode_IMPU, $.BER),
    "iMPI": $._encode_implicit(_TagClass.context, 5, () => _encode_IMPI, $.BER),
    "sUPI": $._encode_explicit(_TagClass.context, 6, () => _encode_SUPI, $.BER),
    "gPSI": $._encode_explicit(_TagClass.context, 7, () => _encode_GPSI, $.BER),
}, $.BER); }
    return _cached_encoder_for_MMSPartyID(value, elGetter);
}


/* eslint-enable */
