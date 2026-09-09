import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Digits, _decode_Digits, _encode_Digits } from "./Digits.ta.mjs";
import { GapOnService, _decode_GapOnService, _encode_GapOnService } from "./GapOnService.ta.mjs";
import { BasicGapCriteria_calledAddressAndService, _decode_BasicGapCriteria_calledAddressAndService, _encode_BasicGapCriteria_calledAddressAndService } from "./BasicGapCriteria-calledAddressAndService.ta.mjs";
import { BasicGapCriteria_callingAddressAndService, _decode_BasicGapCriteria_callingAddressAndService, _encode_BasicGapCriteria_callingAddressAndService } from "./BasicGapCriteria-callingAddressAndService.ta.mjs";

/**
 * @summary BasicGapCriteria
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BasicGapCriteria {PARAMETERS-BOUND : bound} ::= CHOICE {
 calledAddressValue			[0] Digits {bound},
 gapOnService			[2] GapOnService,
 calledAddressAndService		[29] SEQUENCE {
 calledAddressValue			[0] Digits {bound},
 serviceKey				[1] ServiceKey,
 ...
 },
 callingAddressAndService		[30] SEQUENCE {
 callingAddressValue			[0] Digits {bound},
 serviceKey				[1] ServiceKey,
 ...
 }
 }
 * ```
 *
 */
export type BasicGapCriteria =
{ calledAddressValue: Digits }
    | { gapOnService: GapOnService }
    | { calledAddressAndService: BasicGapCriteria_calledAddressAndService }
    | { callingAddressAndService: BasicGapCriteria_callingAddressAndService };

let _cached_decoder_for_BasicGapCriteria: $.ASN1Decoder<BasicGapCriteria> | null = null;
export function _decode_BasicGapCriteria (el: _Element): BasicGapCriteria {
    if (!_cached_decoder_for_BasicGapCriteria) {
        _cached_decoder_for_BasicGapCriteria = $._decode_inextensible_choice<BasicGapCriteria>({
    "CONTEXT 0": [ "calledAddressValue", $._decode_implicit<Digits>(() => _decode_Digits) ],
    "CONTEXT 2": [ "gapOnService", $._decode_implicit<GapOnService>(() => _decode_GapOnService) ],
    "CONTEXT 29": [ "calledAddressAndService", $._decode_implicit<BasicGapCriteria_calledAddressAndService>(() => _decode_BasicGapCriteria_calledAddressAndService) ],
    "CONTEXT 30": [ "callingAddressAndService", $._decode_implicit<BasicGapCriteria_callingAddressAndService>(() => _decode_BasicGapCriteria_callingAddressAndService) ]
        });
    }
    return _cached_decoder_for_BasicGapCriteria(el);
}

let _cached_encoder_for_BasicGapCriteria: $.ASN1Encoder<BasicGapCriteria> | null = null;
export function _encode_BasicGapCriteria (value: BasicGapCriteria, elGetter: $.ASN1Encoder<BasicGapCriteria>): _Element {
    if (!_cached_encoder_for_BasicGapCriteria) {
        _cached_encoder_for_BasicGapCriteria = $._encode_choice<BasicGapCriteria>({
    "calledAddressValue": $._encode_implicit(_TagClass.context, 0, () => _encode_Digits, $.BER),
    "gapOnService": $._encode_implicit(_TagClass.context, 2, () => _encode_GapOnService, $.BER),
    "calledAddressAndService": $._encode_implicit(_TagClass.context, 29, () => _encode_BasicGapCriteria_calledAddressAndService, $.BER),
    "callingAddressAndService": $._encode_implicit(_TagClass.context, 30, () => _encode_BasicGapCriteria_callingAddressAndService, $.BER)
        }, $.BER);
    }
    return _cached_encoder_for_BasicGapCriteria(value, elGetter);
}
