import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type LegID, _decode_LegID, _encode_LegID } from "../Core-INAP-CS1-DataTypes/LegID.ta.mjs";
import { type CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "./CallSegmentID.ta.mjs";

/**
 * @summary AChChargingAddress
 * @description
 *
 * `legID`: CSE control of call duration is associated with that leg (Sending
 * Side LegID from gsmSCF). `srfConnection`: associated with the Temporary
 * Connection or a gsmSRF connection. LegID 1 = calling party present at
 * InitialDP; LegID 2 = called party from InitialDP +
 * Connect/Continue/ContinueWithArgument; LegID > 2 = called party from
 * InitiateCallAttempt + ContinueWithArgument.
 * (3GPP TS 29.078 V19.0.0 clauses 11.2 and 4.1.5).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AChChargingAddress {PARAMETERS-BOUND : bound} ::= CHOICE {
 * legID		[2] LegID,
 * srfConnection	[50] CallSegmentID {bound}
 * }
 * ```
 *
 */
export type AChChargingAddress =
{ legID: LegID }
    | { srfConnection: CallSegmentID };

let _cached_decoder_for_AChChargingAddress: $.ASN1Decoder<AChChargingAddress> | null = null;
export function _decode_AChChargingAddress (el: _Element): AChChargingAddress {
    if (!_cached_decoder_for_AChChargingAddress) {
        _cached_decoder_for_AChChargingAddress = $._decode_inextensible_choice<AChChargingAddress>({
    "CONTEXT 2": [ "legID", $._decode_explicit<LegID>(() => _decode_LegID) ],
    "CONTEXT 50": [ "srfConnection", $._decode_implicit<CallSegmentID>(() => _decode_CallSegmentID) ]
        });
    }
    return _cached_decoder_for_AChChargingAddress(el);
}

let _cached_encoder_for_AChChargingAddress: $.ASN1Encoder<AChChargingAddress> | null = null;
export function _encode_AChChargingAddress (value: AChChargingAddress, elGetter: $.ASN1Encoder<AChChargingAddress>): _Element {
    if (!_cached_encoder_for_AChChargingAddress) {
        _cached_encoder_for_AChChargingAddress = $._encode_choice<AChChargingAddress>({
    "legID": $._encode_explicit(_TagClass.context, 2, () => _encode_LegID, $.BER),
    "srfConnection": $._encode_implicit(_TagClass.context, 50, () => _encode_CallSegmentID, $.BER)
        }, $.BER);
    }
    return _cached_encoder_for_AChChargingAddress(value, elGetter);
}
