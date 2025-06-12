/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION _enum_for_SchemeNumber */
export enum _enum_for_SchemeNumber {
    dhStatic_sha1 = 0,
    dhEphem_sha1 = 1,
    dhOneFlow_sha1 = 2,
    dhHybrid1_sha1 = 3,
    dhHybrid2_sha1 = 4,
    dhHybridOneFlow_sha1 = 5,
    mqv2_sha1 = 6,
    mqv1_sha1 = 7,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_SchemeNumber */

/* START_OF_SYMBOL_DEFINITION SchemeNumber */
/**
 * @summary SchemeNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SchemeNumber  ::=  ENUMERATED {
 * dhStatic-sha1    (0),        -- { dhStatic, {id-sha1,NULL} }
 * dhEphem-sha1     (1),        -- { dhEphem, {id-sha1,NULL} }
 * dhOneFlow-sha1    (2),        -- { dhOneFlow, {id-sha1,NULL} }
 * dhHybrid1-sha1    (3),        -- { dhHybrid1, {id-sha1,NULL} }
 * dhHybrid2-sha1    (4),        -- { dhHybrid2, {id-sha1,NULL} }
 * dhHybridOneFlow-sha1 (5),     -- { dhHybridOneFlow, {id-sha1,NULL} }
 * mqv2-sha1        (6),        -- { mqv2,    {id-sha1,NULL} }
 * mqv1-sha1        (7),        -- { mqv1,    {id-sha1,NULL} }
 * ...
 * }
 * ```@enum {number}
 */
export type SchemeNumber = _enum_for_SchemeNumber | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION SchemeNumber */

/* START_OF_SYMBOL_DEFINITION SchemeNumber_dhStatic_sha1 */
/**
 * @summary SchemeNumber_dhStatic_sha1
 * @constant
 * @type {number}
 */
export const SchemeNumber_dhStatic_sha1: SchemeNumber = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SchemeNumber_dhStatic_sha1 */

/* START_OF_SYMBOL_DEFINITION dhStatic_sha1 */
/**
 * @summary dhStatic_sha1
 * @constant
 * @type {number}
 */
export const dhStatic_sha1: SchemeNumber = SchemeNumber_dhStatic_sha1; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION dhStatic_sha1 */

/* START_OF_SYMBOL_DEFINITION SchemeNumber_dhEphem_sha1 */
/**
 * @summary SchemeNumber_dhEphem_sha1
 * @constant
 * @type {number}
 */
export const SchemeNumber_dhEphem_sha1: SchemeNumber = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SchemeNumber_dhEphem_sha1 */

/* START_OF_SYMBOL_DEFINITION dhEphem_sha1 */
/**
 * @summary dhEphem_sha1
 * @constant
 * @type {number}
 */
export const dhEphem_sha1: SchemeNumber = SchemeNumber_dhEphem_sha1; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION dhEphem_sha1 */

/* START_OF_SYMBOL_DEFINITION SchemeNumber_dhOneFlow_sha1 */
/**
 * @summary SchemeNumber_dhOneFlow_sha1
 * @constant
 * @type {number}
 */
export const SchemeNumber_dhOneFlow_sha1: SchemeNumber = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SchemeNumber_dhOneFlow_sha1 */

/* START_OF_SYMBOL_DEFINITION dhOneFlow_sha1 */
/**
 * @summary dhOneFlow_sha1
 * @constant
 * @type {number}
 */
export const dhOneFlow_sha1: SchemeNumber = SchemeNumber_dhOneFlow_sha1; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION dhOneFlow_sha1 */

/* START_OF_SYMBOL_DEFINITION SchemeNumber_dhHybrid1_sha1 */
/**
 * @summary SchemeNumber_dhHybrid1_sha1
 * @constant
 * @type {number}
 */
export const SchemeNumber_dhHybrid1_sha1: SchemeNumber = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SchemeNumber_dhHybrid1_sha1 */

/* START_OF_SYMBOL_DEFINITION dhHybrid1_sha1 */
/**
 * @summary dhHybrid1_sha1
 * @constant
 * @type {number}
 */
export const dhHybrid1_sha1: SchemeNumber = SchemeNumber_dhHybrid1_sha1; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION dhHybrid1_sha1 */

/* START_OF_SYMBOL_DEFINITION SchemeNumber_dhHybrid2_sha1 */
/**
 * @summary SchemeNumber_dhHybrid2_sha1
 * @constant
 * @type {number}
 */
export const SchemeNumber_dhHybrid2_sha1: SchemeNumber = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SchemeNumber_dhHybrid2_sha1 */

/* START_OF_SYMBOL_DEFINITION dhHybrid2_sha1 */
/**
 * @summary dhHybrid2_sha1
 * @constant
 * @type {number}
 */
export const dhHybrid2_sha1: SchemeNumber = SchemeNumber_dhHybrid2_sha1; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION dhHybrid2_sha1 */

/* START_OF_SYMBOL_DEFINITION SchemeNumber_dhHybridOneFlow_sha1 */
/**
 * @summary SchemeNumber_dhHybridOneFlow_sha1
 * @constant
 * @type {number}
 */
export const SchemeNumber_dhHybridOneFlow_sha1: SchemeNumber = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SchemeNumber_dhHybridOneFlow_sha1 */

/* START_OF_SYMBOL_DEFINITION dhHybridOneFlow_sha1 */
/**
 * @summary dhHybridOneFlow_sha1
 * @constant
 * @type {number}
 */
export const dhHybridOneFlow_sha1: SchemeNumber = SchemeNumber_dhHybridOneFlow_sha1; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION dhHybridOneFlow_sha1 */

/* START_OF_SYMBOL_DEFINITION SchemeNumber_mqv2_sha1 */
/**
 * @summary SchemeNumber_mqv2_sha1
 * @constant
 * @type {number}
 */
export const SchemeNumber_mqv2_sha1: SchemeNumber = 6; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SchemeNumber_mqv2_sha1 */

/* START_OF_SYMBOL_DEFINITION mqv2_sha1 */
/**
 * @summary mqv2_sha1
 * @constant
 * @type {number}
 */
export const mqv2_sha1: SchemeNumber = SchemeNumber_mqv2_sha1; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION mqv2_sha1 */

/* START_OF_SYMBOL_DEFINITION SchemeNumber_mqv1_sha1 */
/**
 * @summary SchemeNumber_mqv1_sha1
 * @constant
 * @type {number}
 */
export const SchemeNumber_mqv1_sha1: SchemeNumber = 7; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SchemeNumber_mqv1_sha1 */

/* START_OF_SYMBOL_DEFINITION mqv1_sha1 */
/**
 * @summary mqv1_sha1
 * @constant
 * @type {number}
 */
export const mqv1_sha1: SchemeNumber = SchemeNumber_mqv1_sha1; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION mqv1_sha1 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SchemeNumber */
let _cached_decoder_for_SchemeNumber: $.ASN1Decoder<SchemeNumber> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SchemeNumber */

/* START_OF_SYMBOL_DEFINITION _decode_SchemeNumber */
/**
 * @summary Decodes an ASN.1 element into a(n) SchemeNumber
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SchemeNumber} The decoded data structure.
 */
export function _decode_SchemeNumber(el: _Element) {
    if (!_cached_decoder_for_SchemeNumber) {
        _cached_decoder_for_SchemeNumber = $._decodeEnumerated;
    }
    return _cached_decoder_for_SchemeNumber(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SchemeNumber */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SchemeNumber */
let _cached_encoder_for_SchemeNumber: $.ASN1Encoder<SchemeNumber> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SchemeNumber */

/* START_OF_SYMBOL_DEFINITION _encode_SchemeNumber */
/**
 * @summary Encodes a(n) SchemeNumber into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SchemeNumber, encoded as an ASN.1 Element.
 */
export function _encode_SchemeNumber(
    value: SchemeNumber,
    elGetter: $.ASN1Encoder<SchemeNumber>
) {
    if (!_cached_encoder_for_SchemeNumber) {
        _cached_encoder_for_SchemeNumber = $._encodeEnumerated;
    }
    return _cached_encoder_for_SchemeNumber(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SchemeNumber */

/* eslint-enable */
