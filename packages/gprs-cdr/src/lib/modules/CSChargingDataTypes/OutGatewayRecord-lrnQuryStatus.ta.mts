/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary OutGatewayRecord_lrnQuryStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OutGatewayRecord-lrnQuryStatus ::= INTEGER {
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
type OutGatewayRecord_lrnQuryStatus = INTEGER;

/**
 * @summary OutGatewayRecord_lrnQuryStatus_successfulQuery
 * @constant
 * @type {number}
 */
export
const OutGatewayRecord_lrnQuryStatus_successfulQuery = 1 satisfies OutGatewayRecord_lrnQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_lrnQuryStatus_successfulQuery
 * @constant
 * @type {number}
 */
export
const successfulQuery = OutGatewayRecord_lrnQuryStatus_successfulQuery satisfies OutGatewayRecord_lrnQuryStatus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_lrnQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const OutGatewayRecord_lrnQuryStatus_noQueryResponseMsg = 2 satisfies OutGatewayRecord_lrnQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_lrnQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const noQueryResponseMsg = OutGatewayRecord_lrnQuryStatus_noQueryResponseMsg satisfies OutGatewayRecord_lrnQuryStatus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_lrnQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const OutGatewayRecord_lrnQuryStatus_queryProtocolErr = 4 satisfies OutGatewayRecord_lrnQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_lrnQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const queryProtocolErr = OutGatewayRecord_lrnQuryStatus_queryProtocolErr satisfies OutGatewayRecord_lrnQuryStatus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_lrnQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const OutGatewayRecord_lrnQuryStatus_queryResponseDataErr = 5 satisfies OutGatewayRecord_lrnQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_lrnQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const queryResponseDataErr = OutGatewayRecord_lrnQuryStatus_queryResponseDataErr satisfies OutGatewayRecord_lrnQuryStatus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_lrnQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const OutGatewayRecord_lrnQuryStatus_queryRejected = 6 satisfies OutGatewayRecord_lrnQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_lrnQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const queryRejected = OutGatewayRecord_lrnQuryStatus_queryRejected satisfies OutGatewayRecord_lrnQuryStatus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_lrnQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const OutGatewayRecord_lrnQuryStatus_queryNotPerformed = 9 satisfies OutGatewayRecord_lrnQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_lrnQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const queryNotPerformed = OutGatewayRecord_lrnQuryStatus_queryNotPerformed satisfies OutGatewayRecord_lrnQuryStatus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_lrnQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const OutGatewayRecord_lrnQuryStatus_queryUnsuccessful = 99 satisfies OutGatewayRecord_lrnQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_lrnQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const queryUnsuccessful = OutGatewayRecord_lrnQuryStatus_queryUnsuccessful satisfies OutGatewayRecord_lrnQuryStatus; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_OutGatewayRecord_lrnQuryStatus: $.ASN1Decoder<OutGatewayRecord_lrnQuryStatus> = $._decodeInteger;

export
const _encode_OutGatewayRecord_lrnQuryStatus: $.ASN1Encoder<OutGatewayRecord_lrnQuryStatus> = $._encodeInteger;

/* eslint-enable */
