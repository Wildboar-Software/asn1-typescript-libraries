/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IMEI, _decode_IMEI, _encode_IMEI } from "../TS33128Payloads/IMEI.ta.mjs";
// export { IMEI, _decode_IMEI, _encode_IMEI } from "../TS33128Payloads/IMEI.ta.mjs";
import { IMEISV, _decode_IMEISV, _encode_IMEISV } from "../TS33128Payloads/IMEISV.ta.mjs";
// export { IMEISV, _decode_IMEISV, _encode_IMEISV } from "../TS33128Payloads/IMEISV.ta.mjs";
import { MACAddress, _decode_MACAddress, _encode_MACAddress } from "../TS33128Payloads/MACAddress.ta.mjs";
// export { MACAddress, _decode_MACAddress, _encode_MACAddress } from "../TS33128Payloads/MACAddress.ta.mjs";
import { EUI64, _decode_EUI64, _encode_EUI64 } from "../TS33128Payloads/EUI64.ta.mjs";
// export { EUI64, _decode_EUI64, _encode_EUI64 } from "../TS33128Payloads/EUI64.ta.mjs";


/**
 * @summary PEI
 * @description
 * 
 * The PEI type is derived from the data present in the Permanent Equipment
 * Identifier type defined in TS 23.003 [19] clause 6.4.
 *
 * 3GPP TS 33.128, clause 8.3.6.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PEI  ::=  CHOICE
 * {
 *     iMEI        [1] IMEI,
 *     iMEISV      [2] IMEISV,
 *     mACAddress  [3] MACAddress,
 *     eUI64       [4] EUI64
 * }
 * ```
 */
export
type PEI =
    /**
     * @description
     *
     * Chosen when the PEI contains an IMEI.
     *
     * 3GPP TS 33.128, clause 8.3.6.
     */
    { iMEI: IMEI } /* CHOICE_ALT_ROOT */
    /**
     * @description
     *
     * Chosen when the PEI contains an IMEISV.
     *
     * 3GPP TS 33.128, clause 8.3.6.
     */
    | { iMEISV: IMEISV } /* CHOICE_ALT_ROOT */
    /**
     * @description
     *
     * Chosen when the PEI contains a MAC Address.
     *
     * 3GPP TS 33.128, clause 8.3.6.
     */
    | { mACAddress: MACAddress } /* CHOICE_ALT_ROOT */
    /**
     * @description
     *
     * Chosen when the PEI contains an EUI64.
     *
     * 3GPP TS 33.128, clause 8.3.6.
     */
    | { eUI64: EUI64 } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_PEI: $.ASN1Decoder<PEI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PEI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PEI (el: _Element): PEI {
    if (!_cached_decoder_for_PEI) { _cached_decoder_for_PEI = $._decode_extensible_choice<PEI>({
    "CONTEXT 1": [ "iMEI", $._decode_implicit<IMEI>(() => _decode_IMEI) ],
    "CONTEXT 2": [ "iMEISV", $._decode_implicit<IMEISV>(() => _decode_IMEISV) ],
    "CONTEXT 3": [ "mACAddress", $._decode_implicit<MACAddress>(() => _decode_MACAddress) ],
    "CONTEXT 4": [ "eUI64", $._decode_implicit<EUI64>(() => _decode_EUI64) ]
}); }
    return _cached_decoder_for_PEI(el);
}

let _cached_encoder_for_PEI: $.ASN1Encoder<PEI> | null = null;

/**
 * @summary Encodes a(n) PEI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PEI, encoded as an ASN.1 Element.
 */
export
function _encode_PEI (value: PEI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PEI) { _cached_encoder_for_PEI = $._encode_choice<PEI>({
    "iMEI": $._encode_implicit(_TagClass.context, 1, () => _encode_IMEI, $.BER),
    "iMEISV": $._encode_implicit(_TagClass.context, 2, () => _encode_IMEISV, $.BER),
    "mACAddress": $._encode_implicit(_TagClass.context, 3, () => _encode_MACAddress, $.BER),
    "eUI64": $._encode_implicit(_TagClass.context, 4, () => _encode_EUI64, $.BER),
}, $.BER); }
    return _cached_encoder_for_PEI(value, elGetter);
}


/* eslint-enable */
