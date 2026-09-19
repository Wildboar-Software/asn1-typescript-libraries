/* eslint-disable */
import {
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
// export { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
import { IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
import { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
// export { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
import { IMEI, _decode_IMEI, _encode_IMEI } from "../TS33128Payloads/IMEI.ta.mjs";
// export { IMEI, _decode_IMEI, _encode_IMEI } from "../TS33128Payloads/IMEI.ta.mjs";
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
// export { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
import { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
// export { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
import { IPv4Address, _decode_IPv4Address, _encode_IPv4Address } from "../TS33128Payloads/IPv4Address.ta.mjs";
// export { IPv4Address, _decode_IPv4Address, _encode_IPv4Address } from "../TS33128Payloads/IPv4Address.ta.mjs";
import { IPv6Address, _decode_IPv6Address, _encode_IPv6Address } from "../TS33128Payloads/IPv6Address.ta.mjs";
// export { IPv6Address, _decode_IPv6Address, _encode_IPv6Address } from "../TS33128Payloads/IPv6Address.ta.mjs";
import { MACAddress, _decode_MACAddress, _encode_MACAddress } from "../TS33128Payloads/MACAddress.ta.mjs";
// export { MACAddress, _decode_MACAddress, _encode_MACAddress } from "../TS33128Payloads/MACAddress.ta.mjs";
import { IMPU, _decode_IMPU, _encode_IMPU } from "../TS33128Payloads/IMPU.ta.mjs";
// export { IMPU, _decode_IMPU, _encode_IMPU } from "../TS33128Payloads/IMPU.ta.mjs";
import { IMPI, _decode_IMPI, _encode_IMPI } from "../TS33128Payloads/IMPI.ta.mjs";
// export { IMPI, _decode_IMPI, _encode_IMPI } from "../TS33128Payloads/IMPI.ta.mjs";
import { E164Number, _decode_E164Number, _encode_E164Number } from "../TS33128Payloads/E164Number.ta.mjs";
// export { E164Number, _decode_E164Number, _encode_E164Number } from "../TS33128Payloads/E164Number.ta.mjs";
import { EmailAddress, _decode_EmailAddress, _encode_EmailAddress } from "../TS33128Payloads/EmailAddress.ta.mjs";
// export { EmailAddress, _decode_EmailAddress, _encode_EmailAddress } from "../TS33128Payloads/EmailAddress.ta.mjs";
import { PTCChatGroupID, _decode_PTCChatGroupID, _encode_PTCChatGroupID } from "../TS33128Payloads/PTCChatGroupID.ta.mjs";
// export { PTCChatGroupID, _decode_PTCChatGroupID, _encode_PTCChatGroupID } from "../TS33128Payloads/PTCChatGroupID.ta.mjs";


/**
 * @summary TargetIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TargetIdentifier  ::=  CHOICE
 * {
 *     sUPI                   [1] SUPI,
 *     iMSI                   [2] IMSI,
 *     pEI                    [3] PEI,
 *     iMEI                   [4] IMEI,
 *     gPSI                   [5] GPSI,
 *     mSISDN                 [6] MSISDN,
 *     nAI                    [7] NAI,
 *     iPv4Address            [8] IPv4Address,
 *     iPv6Address            [9] IPv6Address,
 *     ethernetAddress        [10] MACAddress,
 *     iMPU                   [11] IMPU,
 *     iMPI                   [12] IMPI,
 *     e164Number             [13] E164Number,
 *     emailAddress           [14] EmailAddress,
 *     mCPTTID                [15] UTF8String,
 *     instanceIdentifierURN  [16] UTF8String,
 *     pTCChatGroupID         [17] PTCChatGroupID
 * }
 * ```
 */
export
type TargetIdentifier =
    { sUPI: SUPI } /* CHOICE_ALT_ROOT */
    | { iMSI: IMSI } /* CHOICE_ALT_ROOT */
    | { pEI: PEI } /* CHOICE_ALT_ROOT */
    | { iMEI: IMEI } /* CHOICE_ALT_ROOT */
    | { gPSI: GPSI } /* CHOICE_ALT_ROOT */
    | { mSISDN: MSISDN } /* CHOICE_ALT_ROOT */
    | { nAI: NAI } /* CHOICE_ALT_ROOT */
    | { iPv4Address: IPv4Address } /* CHOICE_ALT_ROOT */
    | { iPv6Address: IPv6Address } /* CHOICE_ALT_ROOT */
    | { ethernetAddress: MACAddress } /* CHOICE_ALT_ROOT */
    | { iMPU: IMPU } /* CHOICE_ALT_ROOT */
    | { iMPI: IMPI } /* CHOICE_ALT_ROOT */
    | { e164Number: E164Number } /* CHOICE_ALT_ROOT */
    | { emailAddress: EmailAddress } /* CHOICE_ALT_ROOT */
    | { mCPTTID: UTF8String } /* CHOICE_ALT_ROOT */
    | { instanceIdentifierURN: UTF8String } /* CHOICE_ALT_ROOT */
    | { pTCChatGroupID: PTCChatGroupID } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_TargetIdentifier: $.ASN1Decoder<TargetIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TargetIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TargetIdentifier (el: _Element): TargetIdentifier {
    if (!_cached_decoder_for_TargetIdentifier) { _cached_decoder_for_TargetIdentifier = $._decode_inextensible_choice<TargetIdentifier>({
    "CONTEXT 1": [ "sUPI", $._decode_explicit<SUPI>(() => _decode_SUPI) ],
    "CONTEXT 2": [ "iMSI", $._decode_implicit<IMSI>(() => _decode_IMSI) ],
    "CONTEXT 3": [ "pEI", $._decode_explicit<PEI>(() => _decode_PEI) ],
    "CONTEXT 4": [ "iMEI", $._decode_implicit<IMEI>(() => _decode_IMEI) ],
    "CONTEXT 5": [ "gPSI", $._decode_explicit<GPSI>(() => _decode_GPSI) ],
    "CONTEXT 6": [ "mSISDN", $._decode_implicit<MSISDN>(() => _decode_MSISDN) ],
    "CONTEXT 7": [ "nAI", $._decode_implicit<NAI>(() => _decode_NAI) ],
    "CONTEXT 8": [ "iPv4Address", $._decode_implicit<IPv4Address>(() => _decode_IPv4Address) ],
    "CONTEXT 9": [ "iPv6Address", $._decode_implicit<IPv6Address>(() => _decode_IPv6Address) ],
    "CONTEXT 10": [ "ethernetAddress", $._decode_implicit<MACAddress>(() => _decode_MACAddress) ],
    "CONTEXT 11": [ "iMPU", $._decode_explicit<IMPU>(() => _decode_IMPU) ],
    "CONTEXT 12": [ "iMPI", $._decode_implicit<IMPI>(() => _decode_IMPI) ],
    "CONTEXT 13": [ "e164Number", $._decode_implicit<E164Number>(() => _decode_E164Number) ],
    "CONTEXT 14": [ "emailAddress", $._decode_implicit<EmailAddress>(() => _decode_EmailAddress) ],
    "CONTEXT 15": [ "mCPTTID", $._decode_implicit<UTF8String>(() => $._decodeUTF8String) ],
    "CONTEXT 16": [ "instanceIdentifierURN", $._decode_implicit<UTF8String>(() => $._decodeUTF8String) ],
    "CONTEXT 17": [ "pTCChatGroupID", $._decode_implicit<PTCChatGroupID>(() => _decode_PTCChatGroupID) ]
}); }
    return _cached_decoder_for_TargetIdentifier(el);
}

let _cached_encoder_for_TargetIdentifier: $.ASN1Encoder<TargetIdentifier> | null = null;

/**
 * @summary Encodes a(n) TargetIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TargetIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_TargetIdentifier (value: TargetIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TargetIdentifier) { _cached_encoder_for_TargetIdentifier = $._encode_choice<TargetIdentifier>({
    "sUPI": $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER),
    "iMSI": $._encode_implicit(_TagClass.context, 2, () => _encode_IMSI, $.BER),
    "pEI": $._encode_explicit(_TagClass.context, 3, () => _encode_PEI, $.BER),
    "iMEI": $._encode_implicit(_TagClass.context, 4, () => _encode_IMEI, $.BER),
    "gPSI": $._encode_explicit(_TagClass.context, 5, () => _encode_GPSI, $.BER),
    "mSISDN": $._encode_implicit(_TagClass.context, 6, () => _encode_MSISDN, $.BER),
    "nAI": $._encode_implicit(_TagClass.context, 7, () => _encode_NAI, $.BER),
    "iPv4Address": $._encode_implicit(_TagClass.context, 8, () => _encode_IPv4Address, $.BER),
    "iPv6Address": $._encode_implicit(_TagClass.context, 9, () => _encode_IPv6Address, $.BER),
    "ethernetAddress": $._encode_implicit(_TagClass.context, 10, () => _encode_MACAddress, $.BER),
    "iMPU": $._encode_explicit(_TagClass.context, 11, () => _encode_IMPU, $.BER),
    "iMPI": $._encode_implicit(_TagClass.context, 12, () => _encode_IMPI, $.BER),
    "e164Number": $._encode_implicit(_TagClass.context, 13, () => _encode_E164Number, $.BER),
    "emailAddress": $._encode_implicit(_TagClass.context, 14, () => _encode_EmailAddress, $.BER),
    "mCPTTID": $._encode_implicit(_TagClass.context, 15, () => $._encodeUTF8String, $.BER),
    "instanceIdentifierURN": $._encode_implicit(_TagClass.context, 16, () => $._encodeUTF8String, $.BER),
    "pTCChatGroupID": $._encode_implicit(_TagClass.context, 17, () => _encode_PTCChatGroupID, $.BER),
}, $.BER); }
    return _cached_encoder_for_TargetIdentifier(value, elGetter);
}


/* eslint-enable */
