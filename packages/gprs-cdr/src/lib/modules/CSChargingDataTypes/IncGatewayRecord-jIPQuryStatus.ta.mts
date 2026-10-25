/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IncGatewayRecord_jIPQuryStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IncGatewayRecord-jIPQuryStatus ::= INTEGER {
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
type IncGatewayRecord_jIPQuryStatus = INTEGER;

/**
 * @summary IncGatewayRecord_jIPQuryStatus_successfulQuery
 * @constant
 * @type {number}
 */
export
const IncGatewayRecord_jIPQuryStatus_successfulQuery = 1 satisfies IncGatewayRecord_jIPQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_jIPQuryStatus_successfulQuery
 * @constant
 * @type {number}
 */
export
const successfulQuery = IncGatewayRecord_jIPQuryStatus_successfulQuery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_jIPQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const IncGatewayRecord_jIPQuryStatus_noQueryResponseMsg = 2 satisfies IncGatewayRecord_jIPQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_jIPQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const noQueryResponseMsg = IncGatewayRecord_jIPQuryStatus_noQueryResponseMsg; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_jIPQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const IncGatewayRecord_jIPQuryStatus_queryProtocolErr = 4 satisfies IncGatewayRecord_jIPQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_jIPQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const queryProtocolErr = IncGatewayRecord_jIPQuryStatus_queryProtocolErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_jIPQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const IncGatewayRecord_jIPQuryStatus_queryResponseDataErr = 5 satisfies IncGatewayRecord_jIPQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_jIPQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const queryResponseDataErr = IncGatewayRecord_jIPQuryStatus_queryResponseDataErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_jIPQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const IncGatewayRecord_jIPQuryStatus_queryRejected = 6 satisfies IncGatewayRecord_jIPQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_jIPQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const queryRejected = IncGatewayRecord_jIPQuryStatus_queryRejected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_jIPQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const IncGatewayRecord_jIPQuryStatus_queryNotPerformed = 9 satisfies IncGatewayRecord_jIPQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_jIPQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const queryNotPerformed = IncGatewayRecord_jIPQuryStatus_queryNotPerformed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_jIPQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const IncGatewayRecord_jIPQuryStatus_queryUnsuccessful = 99 satisfies IncGatewayRecord_jIPQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_jIPQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const queryUnsuccessful = IncGatewayRecord_jIPQuryStatus_queryUnsuccessful; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_IncGatewayRecord_jIPQuryStatus: $.ASN1Decoder<IncGatewayRecord_jIPQuryStatus> = $._decodeInteger;

export
const _encode_IncGatewayRecord_jIPQuryStatus: $.ASN1Encoder<IncGatewayRecord_jIPQuryStatus> = $._encodeInteger;

/* eslint-enable */
