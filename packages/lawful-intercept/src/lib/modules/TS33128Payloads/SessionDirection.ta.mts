/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SessionDirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SessionDirection  ::=  ENUMERATED
 * {
 *     fromTarget(1),
 *     toTarget(2),
 *     combined(3),
 *     indeterminate(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SessionDirection {
    fromTarget = 1,
    toTarget = 2,
    combined = 3,
    indeterminate = 4,
}

/**
 * @summary SessionDirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SessionDirection  ::=  ENUMERATED
 * {
 *     fromTarget(1),
 *     toTarget(2),
 *     combined(3),
 *     indeterminate(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type SessionDirection = _enum_for_SessionDirection;

/**
 * @summary SessionDirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SessionDirection  ::=  ENUMERATED
 * {
 *     fromTarget(1),
 *     toTarget(2),
 *     combined(3),
 *     indeterminate(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const SessionDirection = _enum_for_SessionDirection;

/**
 * @summary SessionDirection_fromTarget
 * @constant
 * @type {number}
 */
export
const SessionDirection_fromTarget: SessionDirection = SessionDirection.fromTarget; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fromTarget
 * @constant
 * @type {number}
 */
export
const fromTarget: SessionDirection = SessionDirection.fromTarget; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SessionDirection_toTarget
 * @constant
 * @type {number}
 */
export
const SessionDirection_toTarget: SessionDirection = SessionDirection.toTarget; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary toTarget
 * @constant
 * @type {number}
 */
export
const toTarget: SessionDirection = SessionDirection.toTarget; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SessionDirection_combined
 * @constant
 * @type {number}
 */
export
const SessionDirection_combined: SessionDirection = SessionDirection.combined; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary combined
 * @constant
 * @type {number}
 */
export
const combined: SessionDirection = SessionDirection.combined; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SessionDirection_indeterminate
 * @constant
 * @type {number}
 */
export
const SessionDirection_indeterminate: SessionDirection = SessionDirection.indeterminate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary indeterminate
 * @constant
 * @type {number}
 */
export
const indeterminate: SessionDirection = SessionDirection.indeterminate; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_SessionDirection: $.ASN1Decoder<SessionDirection> = $._decodeEnumerated;
export const _encode_SessionDirection: $.ASN1Encoder<SessionDirection> = $._encodeEnumerated;


/* eslint-enable */
