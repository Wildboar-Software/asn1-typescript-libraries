/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary OutGatewayRecord_jIPQuryStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OutGatewayRecord-jIPQuryStatus ::= INTEGER {
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
type OutGatewayRecord_jIPQuryStatus = INTEGER;

/**
 * @summary OutGatewayRecord_jIPQuryStatus_successfulQuery
 * @constant
 * @type {number}
 */
export
const OutGatewayRecord_jIPQuryStatus_successfulQuery = 1 satisfies OutGatewayRecord_jIPQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_jIPQuryStatus_successfulQuery
 * @constant
 * @type {number}
 */
export
const successfulQuery = OutGatewayRecord_jIPQuryStatus_successfulQuery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_jIPQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const OutGatewayRecord_jIPQuryStatus_noQueryResponseMsg = 2 satisfies OutGatewayRecord_jIPQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_jIPQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const noQueryResponseMsg = OutGatewayRecord_jIPQuryStatus_noQueryResponseMsg; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_jIPQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const OutGatewayRecord_jIPQuryStatus_queryProtocolErr = 4 satisfies OutGatewayRecord_jIPQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_jIPQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const queryProtocolErr = OutGatewayRecord_jIPQuryStatus_queryProtocolErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_jIPQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const OutGatewayRecord_jIPQuryStatus_queryResponseDataErr = 5 satisfies OutGatewayRecord_jIPQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_jIPQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const queryResponseDataErr = OutGatewayRecord_jIPQuryStatus_queryResponseDataErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_jIPQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const OutGatewayRecord_jIPQuryStatus_queryRejected = 6 satisfies OutGatewayRecord_jIPQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_jIPQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const queryRejected = OutGatewayRecord_jIPQuryStatus_queryRejected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_jIPQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const OutGatewayRecord_jIPQuryStatus_queryNotPerformed = 9 satisfies OutGatewayRecord_jIPQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_jIPQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const queryNotPerformed = OutGatewayRecord_jIPQuryStatus_queryNotPerformed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_jIPQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const OutGatewayRecord_jIPQuryStatus_queryUnsuccessful = 99 satisfies OutGatewayRecord_jIPQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_jIPQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const queryUnsuccessful = OutGatewayRecord_jIPQuryStatus_queryUnsuccessful; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_OutGatewayRecord_jIPQuryStatus: $.ASN1Decoder<OutGatewayRecord_jIPQuryStatus> = $._decodeInteger;

export
const _encode_OutGatewayRecord_jIPQuryStatus: $.ASN1Encoder<OutGatewayRecord_jIPQuryStatus> = $._encodeInteger;

/* eslint-enable */
