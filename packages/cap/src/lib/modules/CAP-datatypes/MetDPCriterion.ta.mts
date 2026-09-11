import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type CellGlobalIdOrServiceAreaIdFixedLength, _decode_CellGlobalIdOrServiceAreaIdFixedLength, _encode_CellGlobalIdOrServiceAreaIdFixedLength } from "../MAP-CommonDataTypes/CellGlobalIdOrServiceAreaIdFixedLength.ta.mjs";
import { type LAIFixedLength, _decode_LAIFixedLength, _encode_LAIFixedLength } from "../MAP-CommonDataTypes/LAIFixedLength.ta.mjs";
import { MetDPCriterionAlt, _decode_MetDPCriterionAlt, _encode_MetDPCriterionAlt } from "./MetDPCriterionAlt.ta.mjs";

/**
 * @summary MetDPCriterion
 * @description
 *
 * Change-of-position criterion that was met. `enteringCellGlobalId` /
 * `leavingCellGlobalId` contain a Cell Global Identification.
 * `enteringServiceAreaId` / `leavingServiceAreaId` contain a Service Area
 * Identification. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MetDPCriterion {PARAMETERS-BOUND : bound} ::= CHOICE {
 *  enteringCellGlobalId		[0] CellGlobalIdOrServiceAreaIdFixedLength,
 *  leavingCellGlobalId			[1] CellGlobalIdOrServiceAreaIdFixedLength,
 *  enteringServiceAreaId		[2] CellGlobalIdOrServiceAreaIdFixedLength,
 *  leavingServiceAreaId		[3] CellGlobalIdOrServiceAreaIdFixedLength,
 *  enteringLocationAreaId		[4] LAIFixedLength,
 *  leavingLocationAreaId		[5] LAIFixedLength,
 *  inter-SystemHandOverToUMTS		[6] NULL,
 *  inter-SystemHandOverToGSM		[7] NULL,
 *  inter-PLMNHandOver			[8] NULL,
 *  inter-MSCHandOver			[9] NULL,
 *  metDPCriterionAlt			[10] MetDPCriterionAlt {bound}
 * }
 * ```
 *
 */
export type MetDPCriterion =
{ enteringCellGlobalId: CellGlobalIdOrServiceAreaIdFixedLength }
    | { leavingCellGlobalId: CellGlobalIdOrServiceAreaIdFixedLength }
    | { enteringServiceAreaId: CellGlobalIdOrServiceAreaIdFixedLength }
    | { leavingServiceAreaId: CellGlobalIdOrServiceAreaIdFixedLength }
    | { enteringLocationAreaId: LAIFixedLength }
    | { leavingLocationAreaId: LAIFixedLength }
    | { inter_SystemHandOverToUMTS: NULL }
    | { inter_SystemHandOverToGSM: NULL }
    | { inter_PLMNHandOver: NULL }
    | { inter_MSCHandOver: NULL }
    | { metDPCriterionAlt: MetDPCriterionAlt };

let _cached_decoder_for_MetDPCriterion: $.ASN1Decoder<MetDPCriterion> | null = null;
export function _decode_MetDPCriterion (el: _Element): MetDPCriterion {
    if (!_cached_decoder_for_MetDPCriterion) {
        _cached_decoder_for_MetDPCriterion = $._decode_inextensible_choice<MetDPCriterion>({
    "CONTEXT 0": [ "enteringCellGlobalId", $._decode_implicit<CellGlobalIdOrServiceAreaIdFixedLength>(() => _decode_CellGlobalIdOrServiceAreaIdFixedLength) ],
    "CONTEXT 1": [ "leavingCellGlobalId", $._decode_implicit<CellGlobalIdOrServiceAreaIdFixedLength>(() => _decode_CellGlobalIdOrServiceAreaIdFixedLength) ],
    "CONTEXT 2": [ "enteringServiceAreaId", $._decode_implicit<CellGlobalIdOrServiceAreaIdFixedLength>(() => _decode_CellGlobalIdOrServiceAreaIdFixedLength) ],
    "CONTEXT 3": [ "leavingServiceAreaId", $._decode_implicit<CellGlobalIdOrServiceAreaIdFixedLength>(() => _decode_CellGlobalIdOrServiceAreaIdFixedLength) ],
    "CONTEXT 4": [ "enteringLocationAreaId", $._decode_implicit<LAIFixedLength>(() => _decode_LAIFixedLength) ],
    "CONTEXT 5": [ "leavingLocationAreaId", $._decode_implicit<LAIFixedLength>(() => _decode_LAIFixedLength) ],
    "CONTEXT 6": [ "inter_SystemHandOverToUMTS", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 7": [ "inter_SystemHandOverToGSM", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 8": [ "inter_PLMNHandOver", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 9": [ "inter_MSCHandOver", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 10": [ "metDPCriterionAlt", $._decode_implicit<MetDPCriterionAlt>(() => _decode_MetDPCriterionAlt) ]
        });
    }
    return _cached_decoder_for_MetDPCriterion(el);
}

let _cached_encoder_for_MetDPCriterion: $.ASN1Encoder<MetDPCriterion> | null = null;
export function _encode_MetDPCriterion (value: MetDPCriterion, elGetter: $.ASN1Encoder<MetDPCriterion>): _Element {
    if (!_cached_encoder_for_MetDPCriterion) {
        _cached_encoder_for_MetDPCriterion = $._encode_choice<MetDPCriterion>({
    "enteringCellGlobalId": $._encode_implicit(_TagClass.context, 0, () => _encode_CellGlobalIdOrServiceAreaIdFixedLength, $.BER),
    "leavingCellGlobalId": $._encode_implicit(_TagClass.context, 1, () => _encode_CellGlobalIdOrServiceAreaIdFixedLength, $.BER),
    "enteringServiceAreaId": $._encode_implicit(_TagClass.context, 2, () => _encode_CellGlobalIdOrServiceAreaIdFixedLength, $.BER),
    "leavingServiceAreaId": $._encode_implicit(_TagClass.context, 3, () => _encode_CellGlobalIdOrServiceAreaIdFixedLength, $.BER),
    "enteringLocationAreaId": $._encode_implicit(_TagClass.context, 4, () => _encode_LAIFixedLength, $.BER),
    "leavingLocationAreaId": $._encode_implicit(_TagClass.context, 5, () => _encode_LAIFixedLength, $.BER),
    "inter_SystemHandOverToUMTS": $._encode_implicit(_TagClass.context, 6, () => $._encodeNull, $.BER),
    "inter_SystemHandOverToGSM": $._encode_implicit(_TagClass.context, 7, () => $._encodeNull, $.BER),
    "inter_PLMNHandOver": $._encode_implicit(_TagClass.context, 8, () => $._encodeNull, $.BER),
    "inter_MSCHandOver": $._encode_implicit(_TagClass.context, 9, () => $._encodeNull, $.BER),
    "metDPCriterionAlt": $._encode_implicit(_TagClass.context, 10, () => _encode_MetDPCriterionAlt, $.BER)
        }, $.BER);
    }
    return _cached_encoder_for_MetDPCriterion(value, elGetter);
}
