import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CAMEL_FCISMSBillingChargingCharacteristics_fCIBCCCAMELsequence1, _decode_CAMEL_FCISMSBillingChargingCharacteristics_fCIBCCCAMELsequence1, _encode_CAMEL_FCISMSBillingChargingCharacteristics_fCIBCCCAMELsequence1 } from "./CAMEL-FCISMSBillingChargingCharacteristics-fCIBCCCAMELsequence1.ta.mjs";

/**
 * @summary CAMEL_FCISMSBillingChargingCharacteristics
 * @description
 *
 * BER payload of `FCISMSBillingChargingCharacteristics`. Single alternative
 * `fCIBCCCAMELsequence1`. (3GPP TS 29.078 V19.0.0 clause 5.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CAMEL-FCISMSBillingChargingCharacteristics {PARAMETERS-BOUND : bound} ::= CHOICE {
 *  fCIBCCCAMELsequence1		[0] SEQUENCE {
 *  freeFormatData			[0] OCTET STRING (SIZE(
 *  bound.&minFCIBillingChargingDataLength .. bound.&maxFCIBillingChargingDataLength)),
 *  appendFreeFormatData		[1] AppendFreeFormatData DEFAULT overwrite
 *  }
 *  }
 * ```
 *
 */
export type CAMEL_FCISMSBillingChargingCharacteristics =
{ fCIBCCCAMELsequence1: CAMEL_FCISMSBillingChargingCharacteristics_fCIBCCCAMELsequence1 };

let _cached_decoder_for_CAMEL_FCISMSBillingChargingCharacteristics: $.ASN1Decoder<CAMEL_FCISMSBillingChargingCharacteristics> | null = null;
export function _decode_CAMEL_FCISMSBillingChargingCharacteristics (el: _Element): CAMEL_FCISMSBillingChargingCharacteristics {
    if (!_cached_decoder_for_CAMEL_FCISMSBillingChargingCharacteristics) {
        _cached_decoder_for_CAMEL_FCISMSBillingChargingCharacteristics = $._decode_inextensible_choice<CAMEL_FCISMSBillingChargingCharacteristics>({
    "CONTEXT 0": [ "fCIBCCCAMELsequence1", $._decode_implicit<CAMEL_FCISMSBillingChargingCharacteristics_fCIBCCCAMELsequence1>(() => _decode_CAMEL_FCISMSBillingChargingCharacteristics_fCIBCCCAMELsequence1) ]
        });
    }
    return _cached_decoder_for_CAMEL_FCISMSBillingChargingCharacteristics(el);
}

let _cached_encoder_for_CAMEL_FCISMSBillingChargingCharacteristics: $.ASN1Encoder<CAMEL_FCISMSBillingChargingCharacteristics> | null = null;
export function _encode_CAMEL_FCISMSBillingChargingCharacteristics (value: CAMEL_FCISMSBillingChargingCharacteristics, elGetter: $.ASN1Encoder<CAMEL_FCISMSBillingChargingCharacteristics>): _Element {
    if (!_cached_encoder_for_CAMEL_FCISMSBillingChargingCharacteristics) {
        _cached_encoder_for_CAMEL_FCISMSBillingChargingCharacteristics = $._encode_choice<CAMEL_FCISMSBillingChargingCharacteristics>({
    "fCIBCCCAMELsequence1": $._encode_implicit(_TagClass.context, 0, () => _encode_CAMEL_FCISMSBillingChargingCharacteristics_fCIBCCCAMELsequence1, $.BER)
        }, $.BER);
    }
    return _cached_encoder_for_CAMEL_FCISMSBillingChargingCharacteristics(value, elGetter);
}
