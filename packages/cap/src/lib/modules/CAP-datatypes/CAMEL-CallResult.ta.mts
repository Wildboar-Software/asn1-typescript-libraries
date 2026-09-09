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
import { CAMEL_CallResult_timeDurationChargingResult, _decode_CAMEL_CallResult_timeDurationChargingResult, _encode_CAMEL_CallResult_timeDurationChargingResult } from "./CAMEL-CallResult-timeDurationChargingResult.ta.mjs";

/**
 * @summary CAMEL_CallResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CAMEL-CallResult {PARAMETERS-BOUND : bound} ::= CHOICE {
 timeDurationChargingResult		[0] SEQUENCE {
 partyToCharge			[0] ReceivingSideID,
 timeInformation			[1] TimeInformation,
 legActive				[2] BOOLEAN DEFAULT TRUE,
 callLegReleasedAtTcpExpiry		[3] NULL				OPTIONAL,
 extensions				[4] Extensions {bound}			OPTIONAL,
 aChChargingAddress			[5] AChChargingAddress {bound}
 DEFAULT legID:receivingSideID:leg1,
 ...
 }
 }
 * ```
 *
 */
export type CAMEL_CallResult =
{ timeDurationChargingResult: CAMEL_CallResult_timeDurationChargingResult };

let _cached_decoder_for_CAMEL_CallResult: $.ASN1Decoder<CAMEL_CallResult> | null = null;
export function _decode_CAMEL_CallResult (el: _Element): CAMEL_CallResult {
    if (!_cached_decoder_for_CAMEL_CallResult) {
        _cached_decoder_for_CAMEL_CallResult = $._decode_inextensible_choice<CAMEL_CallResult>({
    "CONTEXT 0": [ "timeDurationChargingResult", $._decode_implicit<CAMEL_CallResult_timeDurationChargingResult>(() => _decode_CAMEL_CallResult_timeDurationChargingResult) ]
        });
    }
    return _cached_decoder_for_CAMEL_CallResult(el);
}

let _cached_encoder_for_CAMEL_CallResult: $.ASN1Encoder<CAMEL_CallResult> | null = null;
export function _encode_CAMEL_CallResult (value: CAMEL_CallResult, elGetter: $.ASN1Encoder<CAMEL_CallResult>): _Element {
    if (!_cached_encoder_for_CAMEL_CallResult) {
        _cached_encoder_for_CAMEL_CallResult = $._encode_choice<CAMEL_CallResult>({
    "timeDurationChargingResult": $._encode_implicit(_TagClass.context, 0, () => _encode_CAMEL_CallResult_timeDurationChargingResult, $.BER)
        }, $.BER);
    }
    return _cached_encoder_for_CAMEL_CallResult(value, elGetter);
}
