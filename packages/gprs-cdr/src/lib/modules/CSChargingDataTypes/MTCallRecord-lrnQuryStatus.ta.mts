/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MTCallRecord_lrnQuryStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MTCallRecord-lrnQuryStatus ::= INTEGER {
 *    successfulQuery         ( 1 ),
 *    noQueryResponseMsg      ( 2 ),
 *    queryProtocolErr        ( 4 ),
 *    queryResponseDataErr    ( 5 ),
 *    queryRejected           ( 6 ),
 *    queryNotPerformed       ( 9 ),
 *    queryUnsuccessful       ( 99 )
 * }
 * ```
 */
export
type MTCallRecord_lrnQuryStatus = INTEGER;

/**
 * @summary MTCallRecord_lrnQuryStatus_successfulQuery
 * @constant
 * @type {number}
 */
export
const MTCallRecord_lrnQuryStatus_successfulQuery = 1 satisfies MTCallRecord_lrnQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_lrnQuryStatus_successfulQuery
 * @constant
 * @type {number}
 */
export
const successfulQuery = MTCallRecord_lrnQuryStatus_successfulQuery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_lrnQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const MTCallRecord_lrnQuryStatus_noQueryResponseMsg = 2 satisfies MTCallRecord_lrnQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_lrnQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const noQueryResponseMsg = MTCallRecord_lrnQuryStatus_noQueryResponseMsg; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_lrnQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const MTCallRecord_lrnQuryStatus_queryProtocolErr = 4 satisfies MTCallRecord_lrnQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_lrnQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const queryProtocolErr = MTCallRecord_lrnQuryStatus_queryProtocolErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_lrnQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const MTCallRecord_lrnQuryStatus_queryResponseDataErr = 5 satisfies MTCallRecord_lrnQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_lrnQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const queryResponseDataErr = MTCallRecord_lrnQuryStatus_queryResponseDataErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_lrnQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const MTCallRecord_lrnQuryStatus_queryRejected = 6 satisfies MTCallRecord_lrnQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_lrnQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const queryRejected = MTCallRecord_lrnQuryStatus_queryRejected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_lrnQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const MTCallRecord_lrnQuryStatus_queryNotPerformed = 9 satisfies MTCallRecord_lrnQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_lrnQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const queryNotPerformed = MTCallRecord_lrnQuryStatus_queryNotPerformed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_lrnQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const MTCallRecord_lrnQuryStatus_queryUnsuccessful = 99 satisfies MTCallRecord_lrnQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_lrnQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const queryUnsuccessful = MTCallRecord_lrnQuryStatus_queryUnsuccessful; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_MTCallRecord_lrnQuryStatus: $.ASN1Decoder<MTCallRecord_lrnQuryStatus> = $._decodeInteger;

export
const _encode_MTCallRecord_lrnQuryStatus: $.ASN1Encoder<MTCallRecord_lrnQuryStatus> = $._encodeInteger;

/* eslint-enable */
