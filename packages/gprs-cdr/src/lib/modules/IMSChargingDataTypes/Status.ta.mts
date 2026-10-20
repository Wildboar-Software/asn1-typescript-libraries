/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Status
 * @description
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
 * @constant
 * @type {number}
 */
export
const Status_fourxx: Status = Status.fourxx; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fourxx
 * @constant
 * @type {number}
 */
export
const fourxx: Status = Status.fourxx; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Status_fivexx
 * @constant
 * @type {number}
 */
export
const Status_fivexx: Status = Status.fivexx; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fivexx
 * @constant
 * @type {number}
 */
export
const fivexx: Status = Status.fivexx; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Status_time_out
 * @constant
 * @type {number}
 */
export
const Status_time_out: Status = Status.time_out; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary time_out
 * @constant
 * @type {number}
 */
export
const time_out: Status = Status.time_out; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_Status: $.ASN1Decoder<Status> = $._decodeEnumerated;

export
const _encode_Status: $.ASN1Encoder<Status> = $._encodeEnumerated;

/* eslint-enable */
