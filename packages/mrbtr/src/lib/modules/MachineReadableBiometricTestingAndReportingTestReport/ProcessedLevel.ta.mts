/* eslint-disable */
import {
    ENUMERATED,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_ProcessedLevel {
    raw_data = 1,
    intermediate_data = 2,
    processed_data = 3,
    comparison_score = 4,
    comparison_result = 5,
}

/**
 * @summary ProcessedLevel
 * @description
 *
 * Processing level of product output (Clause 6.4.2.3). Extensible:
 * `raw-data`(1), `intermediate-data`(2), `processed-data`(3),
 * `comparison-score`(4), `comparison-result`(5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProcessedLevel  ::=  ENUMERATED {
 *     raw-data            (1),
 *     intermediate-data   (2),
 *     processed-data      (3),
 *     comparison-score    (4),
 *     comparison-result   (5),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ProcessedLevel = _enum_for_ProcessedLevel | ENUMERATED;

/**
 * @summary ProcessedLevel_raw_data
 * @constant
 * @type {number}
 */
export
const ProcessedLevel_raw_data: ProcessedLevel = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary raw_data
 * @constant
 * @type {number}
 */
export
const raw_data: ProcessedLevel = ProcessedLevel_raw_data; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProcessedLevel_intermediate_data
 * @constant
 * @type {number}
 */
export
const ProcessedLevel_intermediate_data: ProcessedLevel = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary intermediate_data
 * @constant
 * @type {number}
 */
export
const intermediate_data: ProcessedLevel = ProcessedLevel_intermediate_data; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProcessedLevel_processed_data
 * @constant
 * @type {number}
 */
export
const ProcessedLevel_processed_data: ProcessedLevel = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary processed_data
 * @constant
 * @type {number}
 */
export
const processed_data: ProcessedLevel = ProcessedLevel_processed_data; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProcessedLevel_comparison_score
 * @constant
 * @type {number}
 */
export
const ProcessedLevel_comparison_score: ProcessedLevel = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary comparison_score
 * @constant
 * @type {number}
 */
export
const comparison_score: ProcessedLevel = ProcessedLevel_comparison_score; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProcessedLevel_comparison_result
 * @constant
 * @type {number}
 */
export
const ProcessedLevel_comparison_result: ProcessedLevel = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary comparison_result
 * @constant
 * @type {number}
 */
export
const comparison_result: ProcessedLevel = ProcessedLevel_comparison_result; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Decodes an ASN.1 element into a(n) ProcessedLevel
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ProcessedLevel = $._decodeEnumerated;


/**
 * @summary Encodes a(n) ProcessedLevel into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProcessedLevel, encoded as an ASN.1 Element.
 */
export const _encode_ProcessedLevel = $._encodeEnumerated;


/* eslint-enable */
