/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary OutGatewayRecord_jIPQuryStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OutGatewayRecord-jIPQuryStatus ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
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
const OutGatewayRecord_jIPQuryStatus_successfulQuery: OutGatewayRecord_jIPQuryStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_jIPQuryStatus_successfulQuery
 * @constant
 * @type {number}
 */
export
const successfulQuery: OutGatewayRecord_jIPQuryStatus = OutGatewayRecord_jIPQuryStatus_successfulQuery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_jIPQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const OutGatewayRecord_jIPQuryStatus_noQueryResponseMsg: OutGatewayRecord_jIPQuryStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_jIPQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const noQueryResponseMsg: OutGatewayRecord_jIPQuryStatus = OutGatewayRecord_jIPQuryStatus_noQueryResponseMsg; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_jIPQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const OutGatewayRecord_jIPQuryStatus_queryProtocolErr: OutGatewayRecord_jIPQuryStatus = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_jIPQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const queryProtocolErr: OutGatewayRecord_jIPQuryStatus = OutGatewayRecord_jIPQuryStatus_queryProtocolErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_jIPQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const OutGatewayRecord_jIPQuryStatus_queryResponseDataErr: OutGatewayRecord_jIPQuryStatus = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_jIPQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const queryResponseDataErr: OutGatewayRecord_jIPQuryStatus = OutGatewayRecord_jIPQuryStatus_queryResponseDataErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_jIPQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const OutGatewayRecord_jIPQuryStatus_queryRejected: OutGatewayRecord_jIPQuryStatus = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_jIPQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const queryRejected: OutGatewayRecord_jIPQuryStatus = OutGatewayRecord_jIPQuryStatus_queryRejected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_jIPQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const OutGatewayRecord_jIPQuryStatus_queryNotPerformed: OutGatewayRecord_jIPQuryStatus = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_jIPQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const queryNotPerformed: OutGatewayRecord_jIPQuryStatus = OutGatewayRecord_jIPQuryStatus_queryNotPerformed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_jIPQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const OutGatewayRecord_jIPQuryStatus_queryUnsuccessful: OutGatewayRecord_jIPQuryStatus = 99; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_jIPQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const queryUnsuccessful: OutGatewayRecord_jIPQuryStatus = OutGatewayRecord_jIPQuryStatus_queryUnsuccessful; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_OutGatewayRecord_jIPQuryStatus: $.ASN1Decoder<OutGatewayRecord_jIPQuryStatus> = $._decodeInteger;

export
const _encode_OutGatewayRecord_jIPQuryStatus: $.ASN1Encoder<OutGatewayRecord_jIPQuryStatus> = $._encodeInteger;

/* eslint-enable */
