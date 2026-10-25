/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Status
 * @description
 *
 * Holds the abnormal status information of specific ASs (if any) when AS(s)
 * respond 4xx/5xx or time out to S-CSCF during an IMS session.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.66A.
 *
 * 3GPP TS 32.260 V20.1.0 clause 6.1.3.3.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Status      ::=  ENUMERATED {
 *    fourxx      ( 0 ),
 *    fivexx      ( 1 ),
 *    time-out    ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Status {
    fourxx = 0,
    fivexx = 1,
    time_out = 2,
}

/**
 * @summary Status
 * @description
 *
 * Holds the abnormal status information of specific ASs (if any) when AS(s)
 * respond 4xx/5xx or time out to S-CSCF during an IMS session.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.66A.
 *
 * 3GPP TS 32.260 V20.1.0 clause 6.1.3.3.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Status      ::=  ENUMERATED {
 *    fourxx      ( 0 ),
 *    fivexx      ( 1 ),
 *    time-out    ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
type Status = _enum_for_Status;

/**
 * @summary Status
 * @description
 *
 * Holds the abnormal status information of specific ASs (if any) when AS(s)
 * respond 4xx/5xx or time out to S-CSCF during an IMS session.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.66A.
 *
 * 3GPP TS 32.260 V20.1.0 clause 6.1.3.3.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Status      ::=  ENUMERATED {
 *    fourxx      ( 0 ),
 *    fivexx      ( 1 ),
 *    time-out    ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
const Status = _enum_for_Status;

/**
 * @summary Status_fourxx
 * @description
 *
 * The application server answered the S-CSCF with a SIP 4xx (clause
 * 6.1.3.3).
 *
 * @constant
 * @type {number}
 */
export
const Status_fourxx = Status.fourxx satisfies Status; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fourxx
 * @description
 *
 * The application server answered the S-CSCF with a SIP 4xx (clause
 * 6.1.3.3).
 *
 * @constant
 * @type {number}
 */
export
const fourxx = Status.fourxx satisfies Status; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Status_fivexx
 * @description
 *
 * The application server answered the S-CSCF with a SIP 5xx (clause
 * 6.1.3.3).
 *
 * @constant
 * @type {number}
 */
export
const Status_fivexx = Status.fivexx satisfies Status; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fivexx
 * @description
 *
 * The application server answered the S-CSCF with a SIP 5xx (clause
 * 6.1.3.3).
 *
 * @constant
 * @type {number}
 */
export
const fivexx = Status.fivexx satisfies Status; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Status_time_out
 * @description
 *
 * The application server timed out toward the S-CSCF (clause 6.1.3.3).
 *
 * 3GPP TS 32.260 V20.1.0.
 *
 * @constant
 * @type {number}
 */
export
const Status_time_out = Status.time_out satisfies Status; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary time_out
 * @description
 *
 * The application server timed out toward the S-CSCF (clause 6.1.3.3).
 *
 * 3GPP TS 32.260 V20.1.0.
 *
 * @constant
 * @type {number}
 */
export
const time_out = Status.time_out satisfies Status; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_Status: $.ASN1Decoder<Status> = $._decodeEnumerated;

export
const _encode_Status: $.ASN1Encoder<Status> = $._encodeEnumerated;

/* eslint-enable */
