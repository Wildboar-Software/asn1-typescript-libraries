/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SCreasonValueOctetStr, _decode_SCreasonValueOctetStr, _encode_SCreasonValueOctetStr } from "../MEDIA-GATEWAY-CONTROL/SCreasonValueOctetStr.ta.mjs";


/**
 * @summary SCreasonValue
 * @description
 * 
 * ServiceChange reason, in the double-wrapped form required by Annex A.
 *
 * The value is an IA5String of a decimal reason code, optionally one space,
 * then a text description. That string is BER-encoded, and the BER encoding is
 * placed in an octet string, the same double wrapping used for package
 * elements. This type is the Wireshark splitting of that `Value` into a
 * sequence of octet strings (`doc/h248v3.asn1`).
 *
 * Table F.1 maps codes to methods. An "MG only" or "Root only" restriction is
 * noted with the code:
 *
 * - 900 Service Restored. Restart, or Disconnected on Root from the MG.
 * - 901 Cold Boot. Restart on Root.
 * - 902 Warm Boot. Restart on Root.
 * - 903 MGC Directed Change. Handoff on Root.
 * - 904 Termination malfunctioning. Forced or Graceful.
 * - 905 Termination taken out of service. Forced or Graceful.
 * - 906 Loss of lower layer connectivity. Forced or Graceful.
 * - 907 Transmission failure. Forced or Graceful.
 * - 908 MG impending failure. Forced, Graceful, or Failover, on Root, from the
 *   MG.
 * - 909 MGC impending failure. Failover on Root, from the MG.
 * - 910 Media capability failure. Restart from the MG, or Forced or Graceful.
 * - 911 Modem capability failure. Same methods as 910.
 * - 912 Mux capability failure. Same methods as 910.
 * - 913 Signal capability failure. Same methods as 910.
 * - 914 Event capability failure. Same methods as 910.
 * - 915 State loss. Forced or Graceful.
 * - 916 Packages change. Restart, Disconnected on Root from the MG, or Failover
 *   on Root from the MG.
 * - 917 Capability change. Same methods as 916.
 * - 918 Cancel graceful. Restart.
 * - 919 Warm failover. Failover on Root, from the MG.
 * - 920 Cold failover. Failover on Root, from the MG.
 *
 * The authoritative descriptions are also registered through ITU-T H.248.8 and
 * clause 14.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCreasonValue  ::=  SEQUENCE OF SCreasonValueOctetStr
 * ```
 */
export
type SCreasonValue = SCreasonValueOctetStr[]; // SequenceOfType

let _cached_decoder_for_SCreasonValue: $.ASN1Decoder<SCreasonValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SCreasonValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SCreasonValue (el: _Element): SCreasonValue {
    if (!_cached_decoder_for_SCreasonValue) { _cached_decoder_for_SCreasonValue = $._decodeSequenceOf<SCreasonValueOctetStr>(() => _decode_SCreasonValueOctetStr); }
    return _cached_decoder_for_SCreasonValue(el);
}

let _cached_encoder_for_SCreasonValue: $.ASN1Encoder<SCreasonValue> | null = null;

/**
 * @summary Encodes a(n) SCreasonValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SCreasonValue, encoded as an ASN.1 Element.
 */
export
function _encode_SCreasonValue (value: SCreasonValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SCreasonValue) { _cached_encoder_for_SCreasonValue = $._encodeSequenceOf<SCreasonValueOctetStr>(() => _encode_SCreasonValueOctetStr, $.BER); }
    return _cached_encoder_for_SCreasonValue(value, elGetter);
}


/* eslint-enable */
