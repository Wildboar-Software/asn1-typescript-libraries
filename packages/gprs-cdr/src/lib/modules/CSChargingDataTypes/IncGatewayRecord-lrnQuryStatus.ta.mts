/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IncGatewayRecord_lrnQuryStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IncGatewayRecord-lrnQuryStatus ::= INTEGER {
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
type IncGatewayRecord_lrnQuryStatus = INTEGER;

/**
 * @summary IncGatewayRecord_lrnQuryStatus_successfulQuery
 * @constant
 * @type {number}
 */
export
const IncGatewayRecord_lrnQuryStatus_successfulQuery = 1 satisfies IncGatewayRecord_lrnQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_lrnQuryStatus_successfulQuery
 * @constant
 * @type {number}
 */
export
const successfulQuery = IncGatewayRecord_lrnQuryStatus_successfulQuery satisfies IncGatewayRecord_lrnQuryStatus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_lrnQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const IncGatewayRecord_lrnQuryStatus_noQueryResponseMsg = 2 satisfies IncGatewayRecord_lrnQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_lrnQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const noQueryResponseMsg = IncGatewayRecord_lrnQuryStatus_noQueryResponseMsg satisfies IncGatewayRecord_lrnQuryStatus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_lrnQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const IncGatewayRecord_lrnQuryStatus_queryProtocolErr = 4 satisfies IncGatewayRecord_lrnQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_lrnQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const queryProtocolErr = IncGatewayRecord_lrnQuryStatus_queryProtocolErr satisfies IncGatewayRecord_lrnQuryStatus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_lrnQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const IncGatewayRecord_lrnQuryStatus_queryResponseDataErr = 5 satisfies IncGatewayRecord_lrnQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_lrnQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const queryResponseDataErr = IncGatewayRecord_lrnQuryStatus_queryResponseDataErr satisfies IncGatewayRecord_lrnQuryStatus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_lrnQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const IncGatewayRecord_lrnQuryStatus_queryRejected = 6 satisfies IncGatewayRecord_lrnQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_lrnQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const queryRejected = IncGatewayRecord_lrnQuryStatus_queryRejected satisfies IncGatewayRecord_lrnQuryStatus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_lrnQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const IncGatewayRecord_lrnQuryStatus_queryNotPerformed = 9 satisfies IncGatewayRecord_lrnQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_lrnQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const queryNotPerformed = IncGatewayRecord_lrnQuryStatus_queryNotPerformed satisfies IncGatewayRecord_lrnQuryStatus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_lrnQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const IncGatewayRecord_lrnQuryStatus_queryUnsuccessful = 99 satisfies IncGatewayRecord_lrnQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_lrnQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const queryUnsuccessful = IncGatewayRecord_lrnQuryStatus_queryUnsuccessful satisfies IncGatewayRecord_lrnQuryStatus; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_IncGatewayRecord_lrnQuryStatus: $.ASN1Decoder<IncGatewayRecord_lrnQuryStatus> = $._decodeInteger;

export
const _encode_IncGatewayRecord_lrnQuryStatus: $.ASN1Encoder<IncGatewayRecord_lrnQuryStatus> = $._encodeInteger;

/* eslint-enable */
