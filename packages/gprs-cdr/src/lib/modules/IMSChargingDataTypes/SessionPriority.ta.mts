/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SessionPriority
 * @description
 *
 * Priority of the session (clause 6.3.1.2). The value is derived from the
 * Resource-Priority header. TS 32.260 does not define which header value
 * maps to priority 0 through 4; that mapping is operator policy in TS
 * 24.229.
 *
 * 3GPP TS 32.260 V20.1.0 clause 6.3.1.2.
 *
 * This field contains the priority level of the session. The value of the
 * parameter is derived from Resource-Priority header field and the rules for
 * the translation depend on operator policy described in TS 24.229[210].
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.60.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
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
 * Priority of the session (clause 6.3.1.2). The value is derived from the
 * Resource-Priority header. TS 32.260 does not define which header value
 * maps to priority 0 through 4; that mapping is operator policy in TS
 * 24.229.
 *
 * 3GPP TS 32.260 V20.1.0 clause 6.3.1.2.
 *
 * This field contains the priority level of the session. The value of the
 * parameter is derived from Resource-Priority header field and the rules for
 * the translation depend on operator policy described in TS 24.229[210].
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.60.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
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
 * Priority of the session (clause 6.3.1.2). The value is derived from the
 * Resource-Priority header. TS 32.260 does not define which header value
 * maps to priority 0 through 4; that mapping is operator policy in TS
 * 24.229.
 *
 * 3GPP TS 32.260 V20.1.0 clause 6.3.1.2.
 *
 * This field contains the priority level of the session. The value of the
 * parameter is derived from Resource-Priority header field and the rules for
 * the translation depend on operator policy described in TS 24.229[210].
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.60.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
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
const SessionPriority: typeof _enum_for_SessionPriority = _enum_for_SessionPriority;

/**
 * @summary SessionPriority_pRIORITY_0
 * @description
 *
 * Session priority 0, derived from Resource-Priority. The mapping is
 * operator policy in TS 24.229, not defined in TS 32.260 (clause 6.3.1.2).
 *
 * 3GPP TS 32.260 V20.1.0.
 *
 * @constant
 * @type {number}
 */
export
const SessionPriority_pRIORITY_0: _enum_for_SessionPriority.pRIORITY_0 = SessionPriority.pRIORITY_0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pRIORITY_0
 * @description
 *
 * Session priority 0, derived from Resource-Priority. The mapping is
 * operator policy in TS 24.229, not defined in TS 32.260 (clause 6.3.1.2).
 *
 * 3GPP TS 32.260 V20.1.0.
 *
 * @constant
 * @type {number}
 */
export
const pRIORITY_0: _enum_for_SessionPriority.pRIORITY_0 = SessionPriority.pRIORITY_0; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SessionPriority_pRIORITY_1
 * @description
 *
 * Session priority 1, derived from Resource-Priority. The mapping is
 * operator policy in TS 24.229 (clause 6.3.1.2).
 *
 * @constant
 * @type {number}
 */
export
const SessionPriority_pRIORITY_1: _enum_for_SessionPriority.pRIORITY_1 = SessionPriority.pRIORITY_1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pRIORITY_1
 * @description
 *
 * Session priority 1, derived from Resource-Priority. The mapping is
 * operator policy in TS 24.229 (clause 6.3.1.2).
 *
 * @constant
 * @type {number}
 */
export
const pRIORITY_1: _enum_for_SessionPriority.pRIORITY_1 = SessionPriority.pRIORITY_1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SessionPriority_pRIORITY_2
 * @description
 *
 * Session priority 2, derived from Resource-Priority. The mapping is
 * operator policy in TS 24.229 (clause 6.3.1.2).
 *
 * @constant
 * @type {number}
 */
export
const SessionPriority_pRIORITY_2: _enum_for_SessionPriority.pRIORITY_2 = SessionPriority.pRIORITY_2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pRIORITY_2
 * @description
 *
 * Session priority 2, derived from Resource-Priority. The mapping is
 * operator policy in TS 24.229 (clause 6.3.1.2).
 *
 * @constant
 * @type {number}
 */
export
const pRIORITY_2: _enum_for_SessionPriority.pRIORITY_2 = SessionPriority.pRIORITY_2; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SessionPriority_pRIORITY_3
 * @description
 *
 * Session priority 3, derived from Resource-Priority. The mapping is
 * operator policy in TS 24.229 (clause 6.3.1.2).
 *
 * @constant
 * @type {number}
 */
export
const SessionPriority_pRIORITY_3: _enum_for_SessionPriority.pRIORITY_3 = SessionPriority.pRIORITY_3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pRIORITY_3
 * @description
 *
 * Session priority 3, derived from Resource-Priority. The mapping is
 * operator policy in TS 24.229 (clause 6.3.1.2).
 *
 * @constant
 * @type {number}
 */
export
const pRIORITY_3: _enum_for_SessionPriority.pRIORITY_3 = SessionPriority.pRIORITY_3; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SessionPriority_pRIORITY_4
 * @description
 *
 * Session priority 4, derived from Resource-Priority. The mapping is
 * operator policy in TS 24.229 (clause 6.3.1.2).
 *
 * @constant
 * @type {number}
 */
export
const SessionPriority_pRIORITY_4: _enum_for_SessionPriority.pRIORITY_4 = SessionPriority.pRIORITY_4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pRIORITY_4
 * @description
 *
 * Session priority 4, derived from Resource-Priority. The mapping is
 * operator policy in TS 24.229 (clause 6.3.1.2).
 *
 * @constant
 * @type {number}
 */
export
const pRIORITY_4: _enum_for_SessionPriority.pRIORITY_4 = SessionPriority.pRIORITY_4; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_SessionPriority: $.ASN1Decoder<SessionPriority> = $._decodeEnumerated;

export
const _encode_SessionPriority: $.ASN1Encoder<SessionPriority> = $._encodeEnumerated;

/* eslint-enable */
