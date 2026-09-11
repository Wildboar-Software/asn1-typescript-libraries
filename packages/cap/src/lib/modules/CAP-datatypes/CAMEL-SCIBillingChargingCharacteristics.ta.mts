import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AOCBeforeAnswer, _decode_AOCBeforeAnswer, _encode_AOCBeforeAnswer } from "./AOCBeforeAnswer.ta.mjs";
import { AOCSubsequent, _decode_AOCSubsequent, _encode_AOCSubsequent } from "./AOCSubsequent.ta.mjs";
import { CAMEL_SCIBillingChargingCharacteristicsAlt, _decode_CAMEL_SCIBillingChargingCharacteristicsAlt, _encode_CAMEL_SCIBillingChargingCharacteristicsAlt } from "./CAMEL-SCIBillingChargingCharacteristicsAlt.ta.mjs";

/**
 * @summary CAMEL_SCIBillingChargingCharacteristics
 * @description
 *
 * `aOCBeforeAnswer`: send only if there is neither an active call leg, nor a
 * Temporary Connection, nor a gsmSRF connection. `aOCAfterAnswer`: send only if
 * one of those is already active. `aOC-extension` is reserved for future
 * releases. (3GPP TS 29.078 V19.0.0 clauses 5.1 and 11.29).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CAMEL-SCIBillingChargingCharacteristics ::= CHOICE {
 *  aOCBeforeAnswer			[0] AOCBeforeAnswer,
 *  aOCAfterAnswer			[1] AOCSubsequent,
 *  aOC-extension			[2]	CAMEL-SCIBillingChargingCharacteristicsAlt
 *  }
 * ```
 *
 */
export type CAMEL_SCIBillingChargingCharacteristics =
{ aOCBeforeAnswer: AOCBeforeAnswer }
    | { aOCAfterAnswer: AOCSubsequent }
    | { aOC_extension: CAMEL_SCIBillingChargingCharacteristicsAlt };

let _cached_decoder_for_CAMEL_SCIBillingChargingCharacteristics: $.ASN1Decoder<CAMEL_SCIBillingChargingCharacteristics> | null = null;
export function _decode_CAMEL_SCIBillingChargingCharacteristics (el: _Element): CAMEL_SCIBillingChargingCharacteristics {
    if (!_cached_decoder_for_CAMEL_SCIBillingChargingCharacteristics) {
        _cached_decoder_for_CAMEL_SCIBillingChargingCharacteristics = $._decode_inextensible_choice<CAMEL_SCIBillingChargingCharacteristics>({
    "CONTEXT 0": [ "aOCBeforeAnswer", $._decode_implicit<AOCBeforeAnswer>(() => _decode_AOCBeforeAnswer) ],
    "CONTEXT 1": [ "aOCAfterAnswer", $._decode_implicit<AOCSubsequent>(() => _decode_AOCSubsequent) ],
    "CONTEXT 2": [ "aOC_extension", $._decode_implicit<CAMEL_SCIBillingChargingCharacteristicsAlt>(() => _decode_CAMEL_SCIBillingChargingCharacteristicsAlt) ]
        });
    }
    return _cached_decoder_for_CAMEL_SCIBillingChargingCharacteristics(el);
}

let _cached_encoder_for_CAMEL_SCIBillingChargingCharacteristics: $.ASN1Encoder<CAMEL_SCIBillingChargingCharacteristics> | null = null;
export function _encode_CAMEL_SCIBillingChargingCharacteristics (value: CAMEL_SCIBillingChargingCharacteristics, elGetter: $.ASN1Encoder<CAMEL_SCIBillingChargingCharacteristics>): _Element {
    if (!_cached_encoder_for_CAMEL_SCIBillingChargingCharacteristics) {
        _cached_encoder_for_CAMEL_SCIBillingChargingCharacteristics = $._encode_choice<CAMEL_SCIBillingChargingCharacteristics>({
    "aOCBeforeAnswer": $._encode_implicit(_TagClass.context, 0, () => _encode_AOCBeforeAnswer, $.BER),
    "aOCAfterAnswer": $._encode_implicit(_TagClass.context, 1, () => _encode_AOCSubsequent, $.BER),
    "aOC_extension": $._encode_implicit(_TagClass.context, 2, () => _encode_CAMEL_SCIBillingChargingCharacteristicsAlt, $.BER)
        }, $.BER);
    }
    return _cached_encoder_for_CAMEL_SCIBillingChargingCharacteristics(value, elGetter);
}
