/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

export enum _enum_for_CoordinateShadowUpdateArgumentData_updateStrategy_standard {
    noChanges = 0,
    incremental = 1,
    total = 2,
}

/**
 * @summary CoordinateShadowUpdateArgumentData_updateStrategy_standard
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CoordinateShadowUpdateArgumentData-updateStrategy-standard ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export type CoordinateShadowUpdateArgumentData_updateStrategy_standard =
    | _enum_for_CoordinateShadowUpdateArgumentData_updateStrategy_standard
    | ENUMERATED;

/**
 * @summary CoordinateShadowUpdateArgumentData_updateStrategy_standard_noChanges
 * @constant
 * @type {number}
 */
export const CoordinateShadowUpdateArgumentData_updateStrategy_standard_noChanges: CoordinateShadowUpdateArgumentData_updateStrategy_standard = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noChanges
 * @constant
 * @type {number}
 */
export const noChanges: CoordinateShadowUpdateArgumentData_updateStrategy_standard = CoordinateShadowUpdateArgumentData_updateStrategy_standard_noChanges; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CoordinateShadowUpdateArgumentData_updateStrategy_standard_incremental
 * @constant
 * @type {number}
 */
export const CoordinateShadowUpdateArgumentData_updateStrategy_standard_incremental: CoordinateShadowUpdateArgumentData_updateStrategy_standard = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary incremental
 * @constant
 * @type {number}
 */
export const incremental: CoordinateShadowUpdateArgumentData_updateStrategy_standard = CoordinateShadowUpdateArgumentData_updateStrategy_standard_incremental; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CoordinateShadowUpdateArgumentData_updateStrategy_standard_total
 * @constant
 * @type {number}
 */
export const CoordinateShadowUpdateArgumentData_updateStrategy_standard_total: CoordinateShadowUpdateArgumentData_updateStrategy_standard = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary total
 * @constant
 * @type {number}
 */
export const total: CoordinateShadowUpdateArgumentData_updateStrategy_standard = CoordinateShadowUpdateArgumentData_updateStrategy_standard_total; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_CoordinateShadowUpdateArgumentData_updateStrategy_standard: $.ASN1Decoder<CoordinateShadowUpdateArgumentData_updateStrategy_standard> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CoordinateShadowUpdateArgumentData_updateStrategy_standard
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CoordinateShadowUpdateArgumentData_updateStrategy_standard} The decoded data structure.
 */
export function _decode_CoordinateShadowUpdateArgumentData_updateStrategy_standard(
    el: _Element
) {
    if (
        !_cached_decoder_for_CoordinateShadowUpdateArgumentData_updateStrategy_standard
    ) {
        _cached_decoder_for_CoordinateShadowUpdateArgumentData_updateStrategy_standard =
            $._decodeEnumerated;
    }
    return _cached_decoder_for_CoordinateShadowUpdateArgumentData_updateStrategy_standard(
        el
    );
}

let _cached_encoder_for_CoordinateShadowUpdateArgumentData_updateStrategy_standard: $.ASN1Encoder<CoordinateShadowUpdateArgumentData_updateStrategy_standard> | null = null;

/**
 * @summary Encodes a(n) CoordinateShadowUpdateArgumentData_updateStrategy_standard into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CoordinateShadowUpdateArgumentData_updateStrategy_standard, encoded as an ASN.1 Element.
 */
export function _encode_CoordinateShadowUpdateArgumentData_updateStrategy_standard(
    value: CoordinateShadowUpdateArgumentData_updateStrategy_standard,
    elGetter: $.ASN1Encoder<CoordinateShadowUpdateArgumentData_updateStrategy_standard>
) {
    if (
        !_cached_encoder_for_CoordinateShadowUpdateArgumentData_updateStrategy_standard
    ) {
        _cached_encoder_for_CoordinateShadowUpdateArgumentData_updateStrategy_standard =
            $._encodeEnumerated;
    }
    return _cached_encoder_for_CoordinateShadowUpdateArgumentData_updateStrategy_standard(
        value,
        elGetter
    );
}


/* eslint-enable */
