/* eslint-disable */
import {
    INTEGER
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
const IncGatewayRecord_jIPQuryStatus_successfulQuery: IncGatewayRecord_jIPQuryStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_jIPQuryStatus_successfulQuery
 * @constant
 * @type {number}
 */
export
const successfulQuery: IncGatewayRecord_jIPQuryStatus = IncGatewayRecord_jIPQuryStatus_successfulQuery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_jIPQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const IncGatewayRecord_jIPQuryStatus_noQueryResponseMsg: IncGatewayRecord_jIPQuryStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_jIPQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const noQueryResponseMsg: IncGatewayRecord_jIPQuryStatus = IncGatewayRecord_jIPQuryStatus_noQueryResponseMsg; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_jIPQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const IncGatewayRecord_jIPQuryStatus_queryProtocolErr: IncGatewayRecord_jIPQuryStatus = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_jIPQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const queryProtocolErr: IncGatewayRecord_jIPQuryStatus = IncGatewayRecord_jIPQuryStatus_queryProtocolErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_jIPQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const IncGatewayRecord_jIPQuryStatus_queryResponseDataErr: IncGatewayRecord_jIPQuryStatus = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_jIPQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const queryResponseDataErr: IncGatewayRecord_jIPQuryStatus = IncGatewayRecord_jIPQuryStatus_queryResponseDataErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_jIPQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const IncGatewayRecord_jIPQuryStatus_queryRejected: IncGatewayRecord_jIPQuryStatus = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_jIPQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const queryRejected: IncGatewayRecord_jIPQuryStatus = IncGatewayRecord_jIPQuryStatus_queryRejected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_jIPQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const IncGatewayRecord_jIPQuryStatus_queryNotPerformed: IncGatewayRecord_jIPQuryStatus = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_jIPQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const queryNotPerformed: IncGatewayRecord_jIPQuryStatus = IncGatewayRecord_jIPQuryStatus_queryNotPerformed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_jIPQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const IncGatewayRecord_jIPQuryStatus_queryUnsuccessful: IncGatewayRecord_jIPQuryStatus = 99; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_jIPQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const queryUnsuccessful: IncGatewayRecord_jIPQuryStatus = IncGatewayRecord_jIPQuryStatus_queryUnsuccessful; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_IncGatewayRecord_jIPQuryStatus: $.ASN1Decoder<IncGatewayRecord_jIPQuryStatus> = $._decodeInteger;

export
const _encode_IncGatewayRecord_jIPQuryStatus: $.ASN1Encoder<IncGatewayRecord_jIPQuryStatus> = $._encodeInteger;

/* eslint-enable */
