/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SessionPriority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SessionPriority  ::=  ENUMERATED {
 *    pRIORITY-0    ( 0 ),
 *    pRIORITY-1    ( 1 ),
 *    pRIORITY-2    ( 2 ),
 *    pRIORITY-3    ( 3 ),
 *    pRIORITY-4    ( 4 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SessionPriority {
    pRIORITY_0 = 0,
    pRIORITY_1 = 1,
    pRIORITY_2 = 2,
    pRIORITY_3 = 3,
    pRIORITY_4 = 4,
}

/**
 * @summary SessionPriority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SessionPriority  ::=  ENUMERATED {
 *    pRIORITY-0    ( 0 ),
 *    pRIORITY-1    ( 1 ),
 *    pRIORITY-2    ( 2 ),
 *    pRIORITY-3    ( 3 ),
 *    pRIORITY-4    ( 4 ) }
 * ```
 * 
 * @enum {number}
 */
export
type SessionPriority = _enum_for_SessionPriority;

/**
 * @summary SessionPriority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SessionPriority  ::=  ENUMERATED {
 *    pRIORITY-0    ( 0 ),
 *    pRIORITY-1    ( 1 ),
 *    pRIORITY-2    ( 2 ),
 *    pRIORITY-3    ( 3 ),
 *    pRIORITY-4    ( 4 ) }
 * ```
 * 
 * @enum {number}
 */
export
const SessionPriority = _enum_for_SessionPriority;

/**
 * @summary SessionPriority_pRIORITY_0
 * @constant
 * @type {number}
 */
export
const SessionPriority_pRIORITY_0: SessionPriority = SessionPriority.pRIORITY_0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pRIORITY_0
 * @constant
 * @type {number}
 */
export
const pRIORITY_0: SessionPriority = SessionPriority.pRIORITY_0; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SessionPriority_pRIORITY_1
 * @constant
 * @type {number}
 */
export
const SessionPriority_pRIORITY_1: SessionPriority = SessionPriority.pRIORITY_1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pRIORITY_1
 * @constant
 * @type {number}
 */
export
const pRIORITY_1: SessionPriority = SessionPriority.pRIORITY_1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SessionPriority_pRIORITY_2
 * @constant
 * @type {number}
 */
export
const SessionPriority_pRIORITY_2: SessionPriority = SessionPriority.pRIORITY_2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pRIORITY_2
 * @constant
 * @type {number}
 */
export
const pRIORITY_2: SessionPriority = SessionPriority.pRIORITY_2; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SessionPriority_pRIORITY_3
 * @constant
 * @type {number}
 */
export
const SessionPriority_pRIORITY_3: SessionPriority = SessionPriority.pRIORITY_3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pRIORITY_3
 * @constant
 * @type {number}
 */
export
const pRIORITY_3: SessionPriority = SessionPriority.pRIORITY_3; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SessionPriority_pRIORITY_4
 * @constant
 * @type {number}
 */
export
const SessionPriority_pRIORITY_4: SessionPriority = SessionPriority.pRIORITY_4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pRIORITY_4
 * @constant
 * @type {number}
 */
export
const pRIORITY_4: SessionPriority = SessionPriority.pRIORITY_4; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_SessionPriority: $.ASN1Decoder<SessionPriority> = $._decodeEnumerated;

export
const _encode_SessionPriority: $.ASN1Encoder<SessionPriority> = $._encodeEnumerated;

/* eslint-enable */
