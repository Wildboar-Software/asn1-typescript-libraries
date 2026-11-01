/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary EpcFormat_fields_Item_result
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EpcFormat-fields-Item-result ::= ENUMERATED {
 *   numericPad     (0),
 *   numeric        (1),
 *   alpha7bits     (2) }
 * ```
 * 
 * @enum {number}
 */
export
const _enum_for_EpcFormat_fields_Item_result: {
    readonly numericPad: 0;
    readonly numeric: 1;
    readonly alpha7bits: 2;
} = {
    numericPad: 0,
    numeric: 1,
    alpha7bits: 2,
};

export
type _enum_for_EpcFormat_fields_Item_result = ENUMERATED;

/**
 * @summary EpcFormat_fields_Item_result
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EpcFormat-fields-Item-result ::= ENUMERATED {
 *   numericPad     (0),
 *   numeric        (1),
 *   alpha7bits     (2) }
 * ```
 * 
 * @enum {number}
 */
export
type EpcFormat_fields_Item_result = _enum_for_EpcFormat_fields_Item_result;

/**
 * @summary EpcFormat_fields_Item_result
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EpcFormat-fields-Item-result ::= ENUMERATED {
 *   numericPad     (0),
 *   numeric        (1),
 *   alpha7bits     (2) }
 * ```
 * 
 * @enum {number}
 */
export
const EpcFormat_fields_Item_result: typeof _enum_for_EpcFormat_fields_Item_result = _enum_for_EpcFormat_fields_Item_result;

/**
 * @summary EpcFormat_fields_Item_result_numericPad
 * @constant
 * @type {number}
 */
export
const EpcFormat_fields_Item_result_numericPad: number = EpcFormat_fields_Item_result.numericPad satisfies EpcFormat_fields_Item_result; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary numericPad
 * @constant
 * @type {number}
 */
export
const numericPad: number = EpcFormat_fields_Item_result_numericPad; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EpcFormat_fields_Item_result_numeric
 * @constant
 * @type {number}
 */
export
const EpcFormat_fields_Item_result_numeric: number = EpcFormat_fields_Item_result.numeric satisfies EpcFormat_fields_Item_result; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary numeric
 * @constant
 * @type {number}
 */
export
const numeric: number = EpcFormat_fields_Item_result_numeric; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EpcFormat_fields_Item_result_alpha7bits
 * @constant
 * @type {number}
 */
export
const EpcFormat_fields_Item_result_alpha7bits: number = EpcFormat_fields_Item_result.alpha7bits satisfies EpcFormat_fields_Item_result; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alpha7bits
 * @constant
 * @type {number}
 */
export
const alpha7bits: number = EpcFormat_fields_Item_result_alpha7bits; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_EpcFormat_fields_Item_result: $.ASN1Decoder<EpcFormat_fields_Item_result> = $._decodeEnumerated;

export
const _encode_EpcFormat_fields_Item_result: $.ASN1Encoder<EpcFormat_fields_Item_result> = $._encodeEnumerated;

/* eslint-enable */
