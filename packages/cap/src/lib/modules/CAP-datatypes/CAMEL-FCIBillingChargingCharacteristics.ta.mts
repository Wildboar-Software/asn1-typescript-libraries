import {
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { leg1 } from "../Core-INAP-CS1-DataTypes/leg1.va.mjs";
import { CAMEL_FCIBillingChargingCharacteristics_fCIBCCCAMELsequence1, _decode_CAMEL_FCIBillingChargingCharacteristics_fCIBCCCAMELsequence1, _encode_CAMEL_FCIBillingChargingCharacteristics_fCIBCCCAMELsequence1 } from "./CAMEL-FCIBillingChargingCharacteristics-fCIBCCCAMELsequence1.ta.mjs";

/**
 * @summary CAMEL_FCIBillingChargingCharacteristics
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CAMEL-FCIBillingChargingCharacteristics {PARAMETERS-BOUND : bound} ::= CHOICE {
 fCIBCCCAMELsequence1		[0] SEQUENCE {
 freeFormatData			[0] OCTET STRING (SIZE(
 bound.&minFCIBillingChargingDataLength .. bound.&maxFCIBillingChargingDataLength)),
 partyToCharge			[1] SendingSideID DEFAULT sendingSideID: leg1,
 appendFreeFormatData		[2] AppendFreeFormatData DEFAULT overwrite,
 ...
 }
 }
 * ```
 *
 */
export type CAMEL_FCIBillingChargingCharacteristics =
{ fCIBCCCAMELsequence1: CAMEL_FCIBillingChargingCharacteristics_fCIBCCCAMELsequence1 };

let _cached_decoder_for_CAMEL_FCIBillingChargingCharacteristics: $.ASN1Decoder<CAMEL_FCIBillingChargingCharacteristics> | null = null;
export function _decode_CAMEL_FCIBillingChargingCharacteristics (el: _Element): CAMEL_FCIBillingChargingCharacteristics {
    if (!_cached_decoder_for_CAMEL_FCIBillingChargingCharacteristics) {
        _cached_decoder_for_CAMEL_FCIBillingChargingCharacteristics = $._decode_inextensible_choice<CAMEL_FCIBillingChargingCharacteristics>({
    "CONTEXT 0": [ "fCIBCCCAMELsequence1", $._decode_implicit<CAMEL_FCIBillingChargingCharacteristics_fCIBCCCAMELsequence1>(() => _decode_CAMEL_FCIBillingChargingCharacteristics_fCIBCCCAMELsequence1) ]
        });
    }
    return _cached_decoder_for_CAMEL_FCIBillingChargingCharacteristics(el);
}

let _cached_encoder_for_CAMEL_FCIBillingChargingCharacteristics: $.ASN1Encoder<CAMEL_FCIBillingChargingCharacteristics> | null = null;
export function _encode_CAMEL_FCIBillingChargingCharacteristics (value: CAMEL_FCIBillingChargingCharacteristics, elGetter: $.ASN1Encoder<CAMEL_FCIBillingChargingCharacteristics>): _Element {
    if (!_cached_encoder_for_CAMEL_FCIBillingChargingCharacteristics) {
        _cached_encoder_for_CAMEL_FCIBillingChargingCharacteristics = $._encode_choice<CAMEL_FCIBillingChargingCharacteristics>({
    "fCIBCCCAMELsequence1": $._encode_implicit(_TagClass.context, 0, () => _encode_CAMEL_FCIBillingChargingCharacteristics_fCIBCCCAMELsequence1, $.BER)
        }, $.BER);
    }
    return _cached_encoder_for_CAMEL_FCIBillingChargingCharacteristics(value, elGetter);
}
