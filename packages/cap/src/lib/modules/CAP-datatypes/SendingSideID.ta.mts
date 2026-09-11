import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type LegType, _decode_LegType, _encode_LegType } from "../Core-INAP-CS1-DataTypes/LegType.ta.mjs";

/**
 * @summary SendingSideID
 * @description
 *
 * LegID in operations sent from gsmSCF to gsmSSF (Sending Side LegID). Never
 * used gsmSSF → gsmSCF. (3GPP TS 29.078 V19.0.0 clause 4.1.5)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SendingSideID ::= CHOICE {sendingSideID [0] LegType}
 * ```
 *
 */
export type SendingSideID =
{ sendingSideID: LegType };

let _cached_decoder_for_SendingSideID: $.ASN1Decoder<SendingSideID> | null = null;
export function _decode_SendingSideID (el: _Element): SendingSideID {
    if (!_cached_decoder_for_SendingSideID) {
        _cached_decoder_for_SendingSideID = $._decode_inextensible_choice<SendingSideID>({
    "CONTEXT 0": [ "sendingSideID", $._decode_implicit<LegType>(() => _decode_LegType) ]
        });
    }
    return _cached_decoder_for_SendingSideID(el);
}

let _cached_encoder_for_SendingSideID: $.ASN1Encoder<SendingSideID> | null = null;
export function _encode_SendingSideID (value: SendingSideID, elGetter: $.ASN1Encoder<SendingSideID>): _Element {
    if (!_cached_encoder_for_SendingSideID) {
        _cached_encoder_for_SendingSideID = $._encode_choice<SendingSideID>({
    "sendingSideID": $._encode_implicit(_TagClass.context, 0, () => _encode_LegType, $.BER)
        }, $.BER);
    }
    return _cached_encoder_for_SendingSideID(value, elGetter);
}
