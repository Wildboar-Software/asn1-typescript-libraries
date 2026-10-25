/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MOCallRecord_lrnQuryStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MOCallRecord-lrnQuryStatus ::= INTEGER {
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
type MOCallRecord_lrnQuryStatus = INTEGER;

/**
 * @summary MOCallRecord_lrnQuryStatus_successfulQuery
 * @constant
 * @type {number}
 */
export
const MOCallRecord_lrnQuryStatus_successfulQuery = 1 satisfies MOCallRecord_lrnQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_lrnQuryStatus_successfulQuery
 * @constant
 * @type {number}
 */
export
const successfulQuery = MOCallRecord_lrnQuryStatus_successfulQuery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_lrnQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const MOCallRecord_lrnQuryStatus_noQueryResponseMsg = 2 satisfies MOCallRecord_lrnQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_lrnQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const noQueryResponseMsg = MOCallRecord_lrnQuryStatus_noQueryResponseMsg; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_lrnQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const MOCallRecord_lrnQuryStatus_queryProtocolErr = 4 satisfies MOCallRecord_lrnQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_lrnQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const queryProtocolErr = MOCallRecord_lrnQuryStatus_queryProtocolErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_lrnQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const MOCallRecord_lrnQuryStatus_queryResponseDataErr = 5 satisfies MOCallRecord_lrnQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_lrnQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const queryResponseDataErr = MOCallRecord_lrnQuryStatus_queryResponseDataErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_lrnQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const MOCallRecord_lrnQuryStatus_queryRejected = 6 satisfies MOCallRecord_lrnQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_lrnQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const queryRejected = MOCallRecord_lrnQuryStatus_queryRejected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_lrnQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const MOCallRecord_lrnQuryStatus_queryNotPerformed = 9 satisfies MOCallRecord_lrnQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_lrnQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const queryNotPerformed = MOCallRecord_lrnQuryStatus_queryNotPerformed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_lrnQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const MOCallRecord_lrnQuryStatus_queryUnsuccessful = 99 satisfies MOCallRecord_lrnQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_lrnQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const queryUnsuccessful = MOCallRecord_lrnQuryStatus_queryUnsuccessful; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_MOCallRecord_lrnQuryStatus: $.ASN1Decoder<MOCallRecord_lrnQuryStatus> = $._decodeInteger;

export
const _encode_MOCallRecord_lrnQuryStatus: $.ASN1Encoder<MOCallRecord_lrnQuryStatus> = $._encodeInteger;

/* eslint-enable */
