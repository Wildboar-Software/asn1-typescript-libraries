/* eslint-disable */
import {
    INTEGER
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
const OutGatewayRecord_lrnQuryStatus_successfulQuery: OutGatewayRecord_lrnQuryStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_lrnQuryStatus_successfulQuery
 * @constant
 * @type {number}
 */
export
const successfulQuery: OutGatewayRecord_lrnQuryStatus = OutGatewayRecord_lrnQuryStatus_successfulQuery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_lrnQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const OutGatewayRecord_lrnQuryStatus_noQueryResponseMsg: OutGatewayRecord_lrnQuryStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_lrnQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const noQueryResponseMsg: OutGatewayRecord_lrnQuryStatus = OutGatewayRecord_lrnQuryStatus_noQueryResponseMsg; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_lrnQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const OutGatewayRecord_lrnQuryStatus_queryProtocolErr: OutGatewayRecord_lrnQuryStatus = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_lrnQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const queryProtocolErr: OutGatewayRecord_lrnQuryStatus = OutGatewayRecord_lrnQuryStatus_queryProtocolErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_lrnQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const OutGatewayRecord_lrnQuryStatus_queryResponseDataErr: OutGatewayRecord_lrnQuryStatus = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_lrnQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const queryResponseDataErr: OutGatewayRecord_lrnQuryStatus = OutGatewayRecord_lrnQuryStatus_queryResponseDataErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_lrnQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const OutGatewayRecord_lrnQuryStatus_queryRejected: OutGatewayRecord_lrnQuryStatus = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_lrnQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const queryRejected: OutGatewayRecord_lrnQuryStatus = OutGatewayRecord_lrnQuryStatus_queryRejected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_lrnQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const OutGatewayRecord_lrnQuryStatus_queryNotPerformed: OutGatewayRecord_lrnQuryStatus = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_lrnQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const queryNotPerformed: OutGatewayRecord_lrnQuryStatus = OutGatewayRecord_lrnQuryStatus_queryNotPerformed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_lrnQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const OutGatewayRecord_lrnQuryStatus_queryUnsuccessful: OutGatewayRecord_lrnQuryStatus = 99; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_lrnQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const queryUnsuccessful: OutGatewayRecord_lrnQuryStatus = OutGatewayRecord_lrnQuryStatus_queryUnsuccessful; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_OutGatewayRecord_lrnQuryStatus: $.ASN1Decoder<OutGatewayRecord_lrnQuryStatus> = $._decodeInteger;

export
const _encode_OutGatewayRecord_lrnQuryStatus: $.ASN1Encoder<OutGatewayRecord_lrnQuryStatus> = $._encodeInteger;

/* eslint-enable */
