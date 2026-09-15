import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type LegType, _decode_LegType, _encode_LegType } from "../Core-INAP-CS1-DataTypes/LegType.ta.mjs";

/**
 * @summary ReceivingSideID
 * @description
 *
 * LegID in operations sent from gsmSSF to gsmSCF (Receiving Side LegID). Never
 * used gsmSCF → gsmSSF. (3GPP TS 29.078 V19.0.0 clause 4.1.5)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReceivingSideID ::= CHOICE {
 *  receivingSideID			[1] LegType
 *  }
 * ```
 *
 */
export type ReceivingSideID =
{ receivingSideID: LegType };

let _cached_decoder_for_ReceivingSideID: $.ASN1Decoder<ReceivingSideID> | null = null;
export function _decode_ReceivingSideID (el: _Element): ReceivingSideID {
    if (!_cached_decoder_for_ReceivingSideID) {
        _cached_decoder_for_ReceivingSideID = $._decode_inextensible_choice<ReceivingSideID>({
    "CONTEXT 1": [ "receivingSideID", $._decode_implicit<LegType>(() => _decode_LegType) ]
        });
    }
    return _cached_decoder_for_ReceivingSideID(el);
}

let _cached_encoder_for_ReceivingSideID: $.ASN1Encoder<ReceivingSideID> | null = null;
export function _encode_ReceivingSideID (value: ReceivingSideID, elGetter: $.ASN1Encoder<ReceivingSideID>): _Element {
    if (!_cached_encoder_for_ReceivingSideID) {
        _cached_encoder_for_ReceivingSideID = $._encode_choice<ReceivingSideID>({
    "receivingSideID": $._encode_implicit(_TagClass.context, 1, () => _encode_LegType, $.BER)
        }, $.BER);
    }
    return _cached_encoder_for_ReceivingSideID(value, elGetter);
}
