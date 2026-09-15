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
 * @summary AbandonProblem
 * @description
 *
 * Why Abandon failed. ISO/IEC 10166-1:1991 §8.3.11.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AbandonProblem  ::=  ENUMERATED {
 *     no-such-operation   (1),
 *     too-late            (2),
 *     cannot-abandon      (3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AbandonProblem {
    no_such_operation = 1,
    too_late = 2,
    cannot_abandon = 3,
}

/**
 * @summary AbandonProblem
 * @description
 *
 * Why Abandon failed. ISO/IEC 10166-1:1991 §8.3.11.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AbandonProblem  ::=  ENUMERATED {
 *     no-such-operation   (1),
 *     too-late            (2),
 *     cannot-abandon      (3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AbandonProblem = _enum_for_AbandonProblem;

/**
 * @summary AbandonProblem
 * @description
 *
 * Why Abandon failed. ISO/IEC 10166-1:1991 §8.3.11.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AbandonProblem  ::=  ENUMERATED {
 *     no-such-operation   (1),
 *     too-late            (2),
 *     cannot-abandon      (3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const AbandonProblem = _enum_for_AbandonProblem;

/**
 * @summary AbandonProblem_no_such_operation
 * @description
 *
 * Operation is not known to the server.
 * @constant
 * @type {number}
 */
export
const AbandonProblem_no_such_operation: AbandonProblem = AbandonProblem.no_such_operation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary no_such_operation
 * @description
 *
 * Operation is not known to the server.
 * @constant
 * @type {number}
 */
export
const no_such_operation: AbandonProblem = AbandonProblem.no_such_operation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AbandonProblem_too_late
 * @description
 *
 * Already past the point where abandon is possible or useful.
 * @constant
 * @type {number}
 */
export
const AbandonProblem_too_late: AbandonProblem = AbandonProblem.too_late; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary too_late
 * @description
 *
 * Already past the point where abandon is possible or useful.
 * @constant
 * @type {number}
 */
export
const too_late: AbandonProblem = AbandonProblem.too_late; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AbandonProblem_cannot_abandon
 * @description
 *
 * Implementation-specific refusal.
 * @constant
 * @type {number}
 */
export
const AbandonProblem_cannot_abandon: AbandonProblem = AbandonProblem.cannot_abandon; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cannot_abandon
 * @description
 *
 * Implementation-specific refusal.
 * @constant
 * @type {number}
 */
export
const cannot_abandon: AbandonProblem = AbandonProblem.cannot_abandon; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_AbandonProblem = $._decodeEnumerated;
export const _encode_AbandonProblem = $._encodeEnumerated;


/* eslint-enable */
