/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CircuitSwitchedAccess, _decode_CircuitSwitchedAccess, _encode_CircuitSwitchedAccess } from "../MMSChargingDataTypes/CircuitSwitchedAccess.ta.mjs";
import { PacketSwitchedAccess, _decode_PacketSwitchedAccess, _encode_PacketSwitchedAccess } from "../MMSChargingDataTypes/PacketSwitchedAccess.ta.mjs";


/**
 * @summary AccessCorrelation
 * @description
 *
 * If the parameter is provided and is not an empty string, it is a unique
 * identifier delivered by the used access network domain of the originator
 * or recipient MMS User Agent. It may be used for correlation of the MMS
 * CDRs with the corresponding MSC server CDRs in CS domain or GSN CDRs in PS
 * domain. It is an empty string if the parameter is not delivered by the
 * access network.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.2.
 *
 * A unique identifier delivered by the access network domain of the
 * originator or recipient MMS User Agent. This choice is the
 * circuit-switched or packet-switched form of that identifier. It may be
 * an empty string when the access network does not deliver one.
 *
 * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessCorrelation  ::=  CHOICE {
 *    circuitSwitched     [0] IMPLICIT CircuitSwitchedAccess,
 *    packetSwitched      [1] IMPLICIT PacketSwitchedAccess}
 * ```
 */
export
type AccessCorrelation =
    { circuitSwitched: CircuitSwitchedAccess } /* CHOICE_ALT_ROOT */
    | { packetSwitched: PacketSwitchedAccess } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AccessCorrelation: $.ASN1Decoder<AccessCorrelation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AccessCorrelation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AccessCorrelation (el: _Element): AccessCorrelation {
    if (!_cached_decoder_for_AccessCorrelation) { _cached_decoder_for_AccessCorrelation = $._decode_inextensible_choice<AccessCorrelation>({
    "CONTEXT 0": [ "circuitSwitched", $._decode_implicit<CircuitSwitchedAccess>(() => _decode_CircuitSwitchedAccess) ],
    "CONTEXT 1": [ "packetSwitched", $._decode_implicit<PacketSwitchedAccess>(() => _decode_PacketSwitchedAccess) ]
}); }
    return _cached_decoder_for_AccessCorrelation(el);
}

let _cached_encoder_for_AccessCorrelation: $.ASN1Encoder<AccessCorrelation> | null = null;

/**
 * @summary Encodes a(n) AccessCorrelation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessCorrelation, encoded as an ASN.1 Element.
 */
export
function _encode_AccessCorrelation (value: AccessCorrelation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AccessCorrelation) { _cached_encoder_for_AccessCorrelation = $._encode_choice<AccessCorrelation>({
    "circuitSwitched": $._encode_implicit(_TagClass.context, 0, () => _encode_CircuitSwitchedAccess, $.BER),
    "packetSwitched": $._encode_implicit(_TagClass.context, 1, () => _encode_PacketSwitchedAccess, $.BER),
}, $.BER); }
    return _cached_encoder_for_AccessCorrelation(value, elGetter);
}


/* eslint-enable */
