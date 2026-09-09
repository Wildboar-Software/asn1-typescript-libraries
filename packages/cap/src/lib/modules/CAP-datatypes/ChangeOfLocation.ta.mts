import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type CellGlobalIdOrServiceAreaIdFixedLength, _decode_CellGlobalIdOrServiceAreaIdFixedLength, _encode_CellGlobalIdOrServiceAreaIdFixedLength } from "../MAP-CommonDataTypes/CellGlobalIdOrServiceAreaIdFixedLength.ta.mjs";
import { type LAIFixedLength, _decode_LAIFixedLength, _encode_LAIFixedLength } from "../MAP-CommonDataTypes/LAIFixedLength.ta.mjs";
import { ChangeOfLocationAlt, _decode_ChangeOfLocationAlt, _encode_ChangeOfLocationAlt } from "./ChangeOfLocationAlt.ta.mjs";

/**
 * @summary ChangeOfLocation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ChangeOfLocation {PARAMETERS-BOUND : bound} ::= CHOICE {
 cellGlobalId			[0] CellGlobalIdOrServiceAreaIdFixedLength,
 serviceAreaId			[1] CellGlobalIdOrServiceAreaIdFixedLength,
 locationAreaId			[2] LAIFixedLength,
 inter-SystemHandOver		[3] NULL,
 inter-PLMNHandOver			[4] NULL,
 inter-MSCHandOver			[5] NULL,
 changeOfLocationAlt			[6] ChangeOfLocationAlt {bound}
}
 * ```
 *
 */
export type ChangeOfLocation =
{ cellGlobalId: CellGlobalIdOrServiceAreaIdFixedLength }
    | { serviceAreaId: CellGlobalIdOrServiceAreaIdFixedLength }
    | { locationAreaId: LAIFixedLength }
    | { inter_SystemHandOver: NULL }
    | { inter_PLMNHandOver: NULL }
    | { inter_MSCHandOver: NULL }
    | { changeOfLocationAlt: ChangeOfLocationAlt };

let _cached_decoder_for_ChangeOfLocation: $.ASN1Decoder<ChangeOfLocation> | null = null;
export function _decode_ChangeOfLocation (el: _Element): ChangeOfLocation {
    if (!_cached_decoder_for_ChangeOfLocation) {
        _cached_decoder_for_ChangeOfLocation = $._decode_inextensible_choice<ChangeOfLocation>({
    "CONTEXT 0": [ "cellGlobalId", $._decode_implicit<CellGlobalIdOrServiceAreaIdFixedLength>(() => _decode_CellGlobalIdOrServiceAreaIdFixedLength) ],
    "CONTEXT 1": [ "serviceAreaId", $._decode_implicit<CellGlobalIdOrServiceAreaIdFixedLength>(() => _decode_CellGlobalIdOrServiceAreaIdFixedLength) ],
    "CONTEXT 2": [ "locationAreaId", $._decode_implicit<LAIFixedLength>(() => _decode_LAIFixedLength) ],
    "CONTEXT 3": [ "inter_SystemHandOver", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 4": [ "inter_PLMNHandOver", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 5": [ "inter_MSCHandOver", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 6": [ "changeOfLocationAlt", $._decode_implicit<ChangeOfLocationAlt>(() => _decode_ChangeOfLocationAlt) ]
        });
    }
    return _cached_decoder_for_ChangeOfLocation(el);
}

let _cached_encoder_for_ChangeOfLocation: $.ASN1Encoder<ChangeOfLocation> | null = null;
export function _encode_ChangeOfLocation (value: ChangeOfLocation, elGetter: $.ASN1Encoder<ChangeOfLocation>): _Element {
    if (!_cached_encoder_for_ChangeOfLocation) {
        _cached_encoder_for_ChangeOfLocation = $._encode_choice<ChangeOfLocation>({
    "cellGlobalId": $._encode_implicit(_TagClass.context, 0, () => _encode_CellGlobalIdOrServiceAreaIdFixedLength, $.BER),
    "serviceAreaId": $._encode_implicit(_TagClass.context, 1, () => _encode_CellGlobalIdOrServiceAreaIdFixedLength, $.BER),
    "locationAreaId": $._encode_implicit(_TagClass.context, 2, () => _encode_LAIFixedLength, $.BER),
    "inter_SystemHandOver": $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER),
    "inter_PLMNHandOver": $._encode_implicit(_TagClass.context, 4, () => $._encodeNull, $.BER),
    "inter_MSCHandOver": $._encode_implicit(_TagClass.context, 5, () => $._encodeNull, $.BER),
    "changeOfLocationAlt": $._encode_implicit(_TagClass.context, 6, () => _encode_ChangeOfLocationAlt, $.BER)
        }, $.BER);
    }
    return _cached_encoder_for_ChangeOfLocation(value, elGetter);
}
