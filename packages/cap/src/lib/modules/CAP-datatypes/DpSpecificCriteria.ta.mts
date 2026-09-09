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
import { type ApplicationTimer, _decode_ApplicationTimer, _encode_ApplicationTimer } from "./ApplicationTimer.ta.mjs";
import { MidCallControlInfo, _decode_MidCallControlInfo, _encode_MidCallControlInfo } from "./MidCallControlInfo.ta.mjs";
import { DpSpecificCriteriaAlt, _decode_DpSpecificCriteriaAlt, _encode_DpSpecificCriteriaAlt } from "./DpSpecificCriteriaAlt.ta.mjs";

/**
 * @summary DpSpecificCriteria
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DpSpecificCriteria {PARAMETERS-BOUND : bound}::= CHOICE {
 applicationTimer			[1] ApplicationTimer,
 midCallControlInfo			[2]	MidCallControlInfo, 
 dpSpecificCriteriaAlt		[3] DpSpecificCriteriaAlt {bound}
 }
 * ```
 *
 */
export type DpSpecificCriteria =
{ applicationTimer: ApplicationTimer }
    | { midCallControlInfo: MidCallControlInfo }
    | { dpSpecificCriteriaAlt: DpSpecificCriteriaAlt };

let _cached_decoder_for_DpSpecificCriteria: $.ASN1Decoder<DpSpecificCriteria> | null = null;
export function _decode_DpSpecificCriteria (el: _Element): DpSpecificCriteria {
    if (!_cached_decoder_for_DpSpecificCriteria) {
        _cached_decoder_for_DpSpecificCriteria = $._decode_inextensible_choice<DpSpecificCriteria>({
    "CONTEXT 1": [ "applicationTimer", $._decode_implicit<ApplicationTimer>(() => _decode_ApplicationTimer) ],
    "CONTEXT 2": [ "midCallControlInfo", $._decode_implicit<MidCallControlInfo>(() => _decode_MidCallControlInfo) ],
    "CONTEXT 3": [ "dpSpecificCriteriaAlt", $._decode_implicit<DpSpecificCriteriaAlt>(() => _decode_DpSpecificCriteriaAlt) ]
        });
    }
    return _cached_decoder_for_DpSpecificCriteria(el);
}

let _cached_encoder_for_DpSpecificCriteria: $.ASN1Encoder<DpSpecificCriteria> | null = null;
export function _encode_DpSpecificCriteria (value: DpSpecificCriteria, elGetter: $.ASN1Encoder<DpSpecificCriteria>): _Element {
    if (!_cached_encoder_for_DpSpecificCriteria) {
        _cached_encoder_for_DpSpecificCriteria = $._encode_choice<DpSpecificCriteria>({
    "applicationTimer": $._encode_implicit(_TagClass.context, 1, () => _encode_ApplicationTimer, $.BER),
    "midCallControlInfo": $._encode_implicit(_TagClass.context, 2, () => _encode_MidCallControlInfo, $.BER),
    "dpSpecificCriteriaAlt": $._encode_implicit(_TagClass.context, 3, () => _encode_DpSpecificCriteriaAlt, $.BER)
        }, $.BER);
    }
    return _cached_encoder_for_DpSpecificCriteria(value, elGetter);
}
