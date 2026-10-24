/* eslint-disable */
import {
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



/**
 * @summary LimitEncountered
 * @description
 *
 * Which cap stopped List/Search. `length-exceeded` is the bind maximum-length.
 * ISO/IEC 10166-1:1991 §8.1.6.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LimitEncountered  ::=  ENUMERATED {
 *     time-limit      (0),
 *     count-limit     (1),
 *     length-exceeded (2) -- maximum length as specified during binding exceeded
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_LimitEncountered {
    time_limit = 0,
    count_limit = 1,
    length_exceeded = 2,
}

/**
 * @summary LimitEncountered
 * @description
 *
 * Which cap stopped List/Search. `length-exceeded` is the bind maximum-length.
 * ISO/IEC 10166-1:1991 §8.1.6.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LimitEncountered  ::=  ENUMERATED {
 *     time-limit      (0),
 *     count-limit     (1),
 *     length-exceeded (2) -- maximum length as specified during binding exceeded
 * }
 * ```
 * 
 * @enum {number}
 */
export
type LimitEncountered = _enum_for_LimitEncountered;

/**
 * @summary LimitEncountered
 * @description
 *
 * Which cap stopped List/Search. `length-exceeded` is the bind maximum-length.
 * ISO/IEC 10166-1:1991 §8.1.6.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LimitEncountered  ::=  ENUMERATED {
 *     time-limit      (0),
 *     count-limit     (1),
 *     length-exceeded (2) -- maximum length as specified during binding exceeded
 * }
 * ```
 * 
 * @enum {number}
 */
export
const LimitEncountered = _enum_for_LimitEncountered;

/**
 * @summary LimitEncountered_time_limit
 * @description
 *
 * Search time-limit reached.
 * @constant
 * @type {number}
 */
export
const LimitEncountered_time_limit: LimitEncountered = LimitEncountered.time_limit; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary time_limit
 * @description
 *
 * Search time-limit reached.
 * @constant
 * @type {number}
 */
export
const time_limit: LimitEncountered = LimitEncountered.time_limit; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LimitEncountered_count_limit
 * @description
 *
 * Count-limit reached.
 * @constant
 * @type {number}
 */
export
const LimitEncountered_count_limit: LimitEncountered = LimitEncountered.count_limit; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary count_limit
 * @description
 *
 * Count-limit reached.
 * @constant
 * @type {number}
 */
export
const count_limit: LimitEncountered = LimitEncountered.count_limit; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LimitEncountered_length_exceeded
 * @description
 *
 * Bind maximum-length would be exceeded.
 * @constant
 * @type {number}
 */
export
const LimitEncountered_length_exceeded: LimitEncountered = LimitEncountered.length_exceeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary length_exceeded
 * @description
 *
 * Bind maximum-length would be exceeded.
 * @constant
 * @type {number}
 */
export
const length_exceeded: LimitEncountered = LimitEncountered.length_exceeded; /* SHORT_NAMED_ENUMERATED_VALUE */
export function _decode_LimitEncountered(el: _Element): LimitEncountered {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case LimitEncountered.time_limit: return LimitEncountered.time_limit;
        case LimitEncountered.count_limit: return LimitEncountered.count_limit;
        case LimitEncountered.length_exceeded: return LimitEncountered.length_exceeded;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for LimitEncountered.",
                el,
            );
    }
}
export const _encode_LimitEncountered: $.ASN1Encoder<LimitEncountered> = $._encodeEnumerated as $.ASN1Encoder<LimitEncountered>;


/* eslint-enable */
