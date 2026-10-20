/* eslint-disable */
import {
    INTEGER
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
const IncGatewayRecord_lrnQuryStatus_successfulQuery: IncGatewayRecord_lrnQuryStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_lrnQuryStatus_successfulQuery
 * @constant
 * @type {number}
 */
export
const successfulQuery: IncGatewayRecord_lrnQuryStatus = IncGatewayRecord_lrnQuryStatus_successfulQuery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_lrnQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const IncGatewayRecord_lrnQuryStatus_noQueryResponseMsg: IncGatewayRecord_lrnQuryStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_lrnQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const noQueryResponseMsg: IncGatewayRecord_lrnQuryStatus = IncGatewayRecord_lrnQuryStatus_noQueryResponseMsg; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_lrnQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const IncGatewayRecord_lrnQuryStatus_queryProtocolErr: IncGatewayRecord_lrnQuryStatus = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_lrnQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const queryProtocolErr: IncGatewayRecord_lrnQuryStatus = IncGatewayRecord_lrnQuryStatus_queryProtocolErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_lrnQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const IncGatewayRecord_lrnQuryStatus_queryResponseDataErr: IncGatewayRecord_lrnQuryStatus = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_lrnQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const queryResponseDataErr: IncGatewayRecord_lrnQuryStatus = IncGatewayRecord_lrnQuryStatus_queryResponseDataErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_lrnQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const IncGatewayRecord_lrnQuryStatus_queryRejected: IncGatewayRecord_lrnQuryStatus = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_lrnQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const queryRejected: IncGatewayRecord_lrnQuryStatus = IncGatewayRecord_lrnQuryStatus_queryRejected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_lrnQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const IncGatewayRecord_lrnQuryStatus_queryNotPerformed: IncGatewayRecord_lrnQuryStatus = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_lrnQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const queryNotPerformed: IncGatewayRecord_lrnQuryStatus = IncGatewayRecord_lrnQuryStatus_queryNotPerformed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_lrnQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const IncGatewayRecord_lrnQuryStatus_queryUnsuccessful: IncGatewayRecord_lrnQuryStatus = 99; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_lrnQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const queryUnsuccessful: IncGatewayRecord_lrnQuryStatus = IncGatewayRecord_lrnQuryStatus_queryUnsuccessful; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_IncGatewayRecord_lrnQuryStatus: $.ASN1Decoder<IncGatewayRecord_lrnQuryStatus> = $._decodeInteger;

export
const _encode_IncGatewayRecord_lrnQuryStatus: $.ASN1Encoder<IncGatewayRecord_lrnQuryStatus> = $._encodeInteger;

/* eslint-enable */
