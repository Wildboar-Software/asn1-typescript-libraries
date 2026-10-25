/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PeriodUMTS
 * @description
 *
 * UMTS MDT/RRM period enumerations d250ms..d64000ms (3GPP TS 29.002 V19.1.0
 * clause 17.7.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PeriodUMTS  ::=  ENUMERATED {
 *     d250ms (0),
 *     d500ms (1),
 *     d1000ms (2),
 *     d2000ms (3),
 *     d3000ms (4),
 *     d4000ms (5),
 *     d6000ms (6),
 *     d8000ms (7),
 *     d12000ms (8),
 *     d16000ms (9),
 *     d20000ms (10),
 *     d24000ms (11),
 *     d28000ms (12),
 *     d32000ms (13),
 *     d64000ms (14)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PeriodUMTS {
    d250ms = 0,
    d500ms = 1,
    d1000ms = 2,
    d2000ms = 3,
    d3000ms = 4,
    d4000ms = 5,
    d6000ms = 6,
    d8000ms = 7,
    d12000ms = 8,
    d16000ms = 9,
    d20000ms = 10,
    d24000ms = 11,
    d28000ms = 12,
    d32000ms = 13,
    d64000ms = 14,
}

/**
 * @summary PeriodUMTS
 * @description
 *
 * UMTS MDT/RRM period enumerations d250ms..d64000ms (3GPP TS 29.002 V19.1.0
 * clause 17.7.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PeriodUMTS  ::=  ENUMERATED {
 *     d250ms (0),
 *     d500ms (1),
 *     d1000ms (2),
 *     d2000ms (3),
 *     d3000ms (4),
 *     d4000ms (5),
 *     d6000ms (6),
 *     d8000ms (7),
 *     d12000ms (8),
 *     d16000ms (9),
 *     d20000ms (10),
 *     d24000ms (11),
 *     d28000ms (12),
 *     d32000ms (13),
 *     d64000ms (14)}
 * ```
 * 
 * @enum {number}
 */
export
type PeriodUMTS = _enum_for_PeriodUMTS;

/**
 * @summary PeriodUMTS
 * @description
 *
 * UMTS MDT/RRM period enumerations d250ms..d64000ms (3GPP TS 29.002 V19.1.0
 * clause 17.7.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PeriodUMTS  ::=  ENUMERATED {
 *     d250ms (0),
 *     d500ms (1),
 *     d1000ms (2),
 *     d2000ms (3),
 *     d3000ms (4),
 *     d4000ms (5),
 *     d6000ms (6),
 *     d8000ms (7),
 *     d12000ms (8),
 *     d16000ms (9),
 *     d20000ms (10),
 *     d24000ms (11),
 *     d28000ms (12),
 *     d32000ms (13),
 *     d64000ms (14)}
 * ```
 * 
 * @enum {number}
 */
export
const PeriodUMTS = _enum_for_PeriodUMTS;

/**
 * @summary PeriodUMTS_d250ms
 * @constant
 * @type {number}
 */
export
const PeriodUMTS_d250ms = PeriodUMTS.d250ms satisfies PeriodUMTS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d250ms
 * @constant
 * @type {number}
 */
export
const d250ms = PeriodUMTS.d250ms satisfies PeriodUMTS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PeriodUMTS_d500ms
 * @constant
 * @type {number}
 */
export
const PeriodUMTS_d500ms = PeriodUMTS.d500ms satisfies PeriodUMTS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d500ms
 * @constant
 * @type {number}
 */
export
const d500ms = PeriodUMTS.d500ms satisfies PeriodUMTS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PeriodUMTS_d1000ms
 * @constant
 * @type {number}
 */
export
const PeriodUMTS_d1000ms = PeriodUMTS.d1000ms satisfies PeriodUMTS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d1000ms
 * @constant
 * @type {number}
 */
export
const d1000ms = PeriodUMTS.d1000ms satisfies PeriodUMTS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PeriodUMTS_d2000ms
 * @constant
 * @type {number}
 */
export
const PeriodUMTS_d2000ms = PeriodUMTS.d2000ms satisfies PeriodUMTS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d2000ms
 * @constant
 * @type {number}
 */
export
const d2000ms = PeriodUMTS.d2000ms satisfies PeriodUMTS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PeriodUMTS_d3000ms
 * @constant
 * @type {number}
 */
export
const PeriodUMTS_d3000ms = PeriodUMTS.d3000ms satisfies PeriodUMTS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d3000ms
 * @constant
 * @type {number}
 */
export
const d3000ms = PeriodUMTS.d3000ms satisfies PeriodUMTS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PeriodUMTS_d4000ms
 * @constant
 * @type {number}
 */
export
const PeriodUMTS_d4000ms = PeriodUMTS.d4000ms satisfies PeriodUMTS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d4000ms
 * @constant
 * @type {number}
 */
export
const d4000ms = PeriodUMTS.d4000ms satisfies PeriodUMTS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PeriodUMTS_d6000ms
 * @constant
 * @type {number}
 */
export
const PeriodUMTS_d6000ms = PeriodUMTS.d6000ms satisfies PeriodUMTS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d6000ms
 * @constant
 * @type {number}
 */
export
const d6000ms = PeriodUMTS.d6000ms satisfies PeriodUMTS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PeriodUMTS_d8000ms
 * @constant
 * @type {number}
 */
export
const PeriodUMTS_d8000ms = PeriodUMTS.d8000ms satisfies PeriodUMTS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d8000ms
 * @constant
 * @type {number}
 */
export
const d8000ms = PeriodUMTS.d8000ms satisfies PeriodUMTS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PeriodUMTS_d12000ms
 * @constant
 * @type {number}
 */
export
const PeriodUMTS_d12000ms = PeriodUMTS.d12000ms satisfies PeriodUMTS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d12000ms
 * @constant
 * @type {number}
 */
export
const d12000ms = PeriodUMTS.d12000ms satisfies PeriodUMTS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PeriodUMTS_d16000ms
 * @constant
 * @type {number}
 */
export
const PeriodUMTS_d16000ms = PeriodUMTS.d16000ms satisfies PeriodUMTS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d16000ms
 * @constant
 * @type {number}
 */
export
const d16000ms = PeriodUMTS.d16000ms satisfies PeriodUMTS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PeriodUMTS_d20000ms
 * @constant
 * @type {number}
 */
export
const PeriodUMTS_d20000ms = PeriodUMTS.d20000ms satisfies PeriodUMTS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d20000ms
 * @constant
 * @type {number}
 */
export
const d20000ms = PeriodUMTS.d20000ms satisfies PeriodUMTS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PeriodUMTS_d24000ms
 * @constant
 * @type {number}
 */
export
const PeriodUMTS_d24000ms = PeriodUMTS.d24000ms satisfies PeriodUMTS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d24000ms
 * @constant
 * @type {number}
 */
export
const d24000ms = PeriodUMTS.d24000ms satisfies PeriodUMTS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PeriodUMTS_d28000ms
 * @constant
 * @type {number}
 */
export
const PeriodUMTS_d28000ms = PeriodUMTS.d28000ms satisfies PeriodUMTS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d28000ms
 * @constant
 * @type {number}
 */
export
const d28000ms = PeriodUMTS.d28000ms satisfies PeriodUMTS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PeriodUMTS_d32000ms
 * @constant
 * @type {number}
 */
export
const PeriodUMTS_d32000ms = PeriodUMTS.d32000ms satisfies PeriodUMTS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d32000ms
 * @constant
 * @type {number}
 */
export
const d32000ms = PeriodUMTS.d32000ms satisfies PeriodUMTS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PeriodUMTS_d64000ms
 * @constant
 * @type {number}
 */
export
const PeriodUMTS_d64000ms = PeriodUMTS.d64000ms satisfies PeriodUMTS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d64000ms
 * @constant
 * @type {number}
 */
export
const d64000ms = PeriodUMTS.d64000ms satisfies PeriodUMTS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) PeriodUMTS
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_PeriodUMTS = $._decodeEnumerated;

/**
 * @summary Encodes a(n) PeriodUMTS into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PeriodUMTS, encoded as an ASN.1 Element.
 */
export const _encode_PeriodUMTS = $._encodeEnumerated;


/* eslint-enable */
