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
const OutGatewayRecord_lrnQuryStatus_successfulQuery: 1 = 1 satisfies OutGatewayRecord_lrnQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_lrnQuryStatus_successfulQuery
 * @constant
 * @type {number}
 */
export
const successfulQuery: 1 = OutGatewayRecord_lrnQuryStatus_successfulQuery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_lrnQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const OutGatewayRecord_lrnQuryStatus_noQueryResponseMsg: 2 = 2 satisfies OutGatewayRecord_lrnQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_lrnQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const noQueryResponseMsg: 2 = OutGatewayRecord_lrnQuryStatus_noQueryResponseMsg; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_lrnQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const OutGatewayRecord_lrnQuryStatus_queryProtocolErr: 4 = 4 satisfies OutGatewayRecord_lrnQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_lrnQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const queryProtocolErr: 4 = OutGatewayRecord_lrnQuryStatus_queryProtocolErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_lrnQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const OutGatewayRecord_lrnQuryStatus_queryResponseDataErr: 5 = 5 satisfies OutGatewayRecord_lrnQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_lrnQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const queryResponseDataErr: 5 = OutGatewayRecord_lrnQuryStatus_queryResponseDataErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_lrnQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const OutGatewayRecord_lrnQuryStatus_queryRejected: 6 = 6 satisfies OutGatewayRecord_lrnQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_lrnQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const queryRejected: 6 = OutGatewayRecord_lrnQuryStatus_queryRejected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_lrnQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const OutGatewayRecord_lrnQuryStatus_queryNotPerformed: 9 = 9 satisfies OutGatewayRecord_lrnQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_lrnQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const queryNotPerformed: 9 = OutGatewayRecord_lrnQuryStatus_queryNotPerformed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_lrnQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const OutGatewayRecord_lrnQuryStatus_queryUnsuccessful: 99 = 99 satisfies OutGatewayRecord_lrnQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_lrnQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const queryUnsuccessful: 99 = OutGatewayRecord_lrnQuryStatus_queryUnsuccessful; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_OutGatewayRecord_lrnQuryStatus: $.ASN1Decoder<OutGatewayRecord_lrnQuryStatus> = $._decodeInteger;

export
const _encode_OutGatewayRecord_lrnQuryStatus: $.ASN1Encoder<OutGatewayRecord_lrnQuryStatus> = $._encodeInteger;

/* eslint-enable */
