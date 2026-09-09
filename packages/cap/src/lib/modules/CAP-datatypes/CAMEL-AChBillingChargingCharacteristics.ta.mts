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
import { CAMEL_AChBillingChargingCharacteristics_timeDurationCharging, _decode_CAMEL_AChBillingChargingCharacteristics_timeDurationCharging, _encode_CAMEL_AChBillingChargingCharacteristics_timeDurationCharging } from "./CAMEL-AChBillingChargingCharacteristics-timeDurationCharging.ta.mjs";

/**
 * @summary CAMEL_AChBillingChargingCharacteristics
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CAMEL-AChBillingChargingCharacteristics {PARAMETERS-BOUND : bound} ::= CHOICE {
 timeDurationCharging		[0] SEQUENCE {
 maxCallPeriodDuration		[0] INTEGER (1..864000),
 releaseIfdurationExceeded		[1] BOOLEAN DEFAULT FALSE,
 tariffSwitchInterval		[2] INTEGER (1..86400)			OPTIONAL,
 audibleIndicator			[3] AudibleIndicator DEFAULT tone: FALSE,	
 extensions				[4] Extensions {bound}			OPTIONAL,
 ...
 }
 }
 * ```
 *
 */
export type CAMEL_AChBillingChargingCharacteristics =
{ timeDurationCharging: CAMEL_AChBillingChargingCharacteristics_timeDurationCharging };

let _cached_decoder_for_CAMEL_AChBillingChargingCharacteristics: $.ASN1Decoder<CAMEL_AChBillingChargingCharacteristics> | null = null;
export function _decode_CAMEL_AChBillingChargingCharacteristics (el: _Element): CAMEL_AChBillingChargingCharacteristics {
    if (!_cached_decoder_for_CAMEL_AChBillingChargingCharacteristics) {
        _cached_decoder_for_CAMEL_AChBillingChargingCharacteristics = $._decode_inextensible_choice<CAMEL_AChBillingChargingCharacteristics>({
    "CONTEXT 0": [ "timeDurationCharging", $._decode_implicit<CAMEL_AChBillingChargingCharacteristics_timeDurationCharging>(() => _decode_CAMEL_AChBillingChargingCharacteristics_timeDurationCharging) ]
        });
    }
    return _cached_decoder_for_CAMEL_AChBillingChargingCharacteristics(el);
}

let _cached_encoder_for_CAMEL_AChBillingChargingCharacteristics: $.ASN1Encoder<CAMEL_AChBillingChargingCharacteristics> | null = null;
export function _encode_CAMEL_AChBillingChargingCharacteristics (value: CAMEL_AChBillingChargingCharacteristics, elGetter: $.ASN1Encoder<CAMEL_AChBillingChargingCharacteristics>): _Element {
    if (!_cached_encoder_for_CAMEL_AChBillingChargingCharacteristics) {
        _cached_encoder_for_CAMEL_AChBillingChargingCharacteristics = $._encode_choice<CAMEL_AChBillingChargingCharacteristics>({
    "timeDurationCharging": $._encode_implicit(_TagClass.context, 0, () => _encode_CAMEL_AChBillingChargingCharacteristics_timeDurationCharging, $.BER)
        }, $.BER);
    }
    return _cached_encoder_for_CAMEL_AChBillingChargingCharacteristics(value, elGetter);
}
