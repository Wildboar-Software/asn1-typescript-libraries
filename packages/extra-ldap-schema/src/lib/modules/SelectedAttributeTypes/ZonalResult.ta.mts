/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
const _enum_for_ZonalResult: {
    readonly cannot_select_mapping: 0;
    readonly zero_mappings: 2;
    readonly multiple_mappings: 3;
} = {
    cannot_select_mapping: 0,
    zero_mappings: 2,
    multiple_mappings: 3,
};

export
type _enum_for_ZonalResult = ENUMERATED;

/**
 * @summary ZonalResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ZonalResult  ::=  ENUMERATED {
 *   cannot-select-mapping (0),
 *   zero-mappings         (2),
 *   multiple-mappings     (3),
 *    ... }
 * ```
 * 
 * @enum {number}
 */
export
type ZonalResult = _enum_for_ZonalResult | ENUMERATED;

/**
 * @summary ZonalResult_cannot_select_mapping
 * @constant
 * @type {number}
 */
export
const ZonalResult_cannot_select_mapping: number = 0 satisfies ZonalResult; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cannot_select_mapping
 * @constant
 * @type {number}
 */
export
const cannot_select_mapping: number = ZonalResult_cannot_select_mapping; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ZonalResult_zero_mappings
 * @constant
 * @type {number}
 */
export
const ZonalResult_zero_mappings: number = 2 satisfies ZonalResult; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary zero_mappings
 * @constant
 * @type {number}
 */
export
const zero_mappings: number = ZonalResult_zero_mappings; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ZonalResult_multiple_mappings
 * @constant
 * @type {number}
 */
export
const ZonalResult_multiple_mappings: number = 3 satisfies ZonalResult; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multiple_mappings
 * @constant
 * @type {number}
 */
export
const multiple_mappings: number = ZonalResult_multiple_mappings; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ZonalResult: $.ASN1Decoder<ZonalResult> = $._decodeEnumerated;

export
const _encode_ZonalResult: $.ASN1Encoder<ZonalResult> = $._encodeEnumerated;

/* eslint-enable */
