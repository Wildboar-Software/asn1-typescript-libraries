/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MOCallRecord_jIPQuryStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MOCallRecord-jIPQuryStatus ::= INTEGER {
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
type MOCallRecord_jIPQuryStatus = INTEGER;

/**
 * @summary MOCallRecord_jIPQuryStatus_successfulQuery
 * @constant
 * @type {number}
 */
export
const MOCallRecord_jIPQuryStatus_successfulQuery: MOCallRecord_jIPQuryStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_jIPQuryStatus_successfulQuery
 * @constant
 * @type {number}
 */
export
const successfulQuery: MOCallRecord_jIPQuryStatus = MOCallRecord_jIPQuryStatus_successfulQuery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_jIPQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const MOCallRecord_jIPQuryStatus_noQueryResponseMsg: MOCallRecord_jIPQuryStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_jIPQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const noQueryResponseMsg: MOCallRecord_jIPQuryStatus = MOCallRecord_jIPQuryStatus_noQueryResponseMsg; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_jIPQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const MOCallRecord_jIPQuryStatus_queryProtocolErr: MOCallRecord_jIPQuryStatus = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_jIPQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const queryProtocolErr: MOCallRecord_jIPQuryStatus = MOCallRecord_jIPQuryStatus_queryProtocolErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_jIPQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const MOCallRecord_jIPQuryStatus_queryResponseDataErr: MOCallRecord_jIPQuryStatus = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_jIPQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const queryResponseDataErr: MOCallRecord_jIPQuryStatus = MOCallRecord_jIPQuryStatus_queryResponseDataErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_jIPQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const MOCallRecord_jIPQuryStatus_queryRejected: MOCallRecord_jIPQuryStatus = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_jIPQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const queryRejected: MOCallRecord_jIPQuryStatus = MOCallRecord_jIPQuryStatus_queryRejected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_jIPQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const MOCallRecord_jIPQuryStatus_queryNotPerformed: MOCallRecord_jIPQuryStatus = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_jIPQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const queryNotPerformed: MOCallRecord_jIPQuryStatus = MOCallRecord_jIPQuryStatus_queryNotPerformed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_jIPQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const MOCallRecord_jIPQuryStatus_queryUnsuccessful: MOCallRecord_jIPQuryStatus = 99; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_jIPQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const queryUnsuccessful: MOCallRecord_jIPQuryStatus = MOCallRecord_jIPQuryStatus_queryUnsuccessful; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_MOCallRecord_jIPQuryStatus: $.ASN1Decoder<MOCallRecord_jIPQuryStatus> = $._decodeInteger;

export
const _encode_MOCallRecord_jIPQuryStatus: $.ASN1Encoder<MOCallRecord_jIPQuryStatus> = $._encodeInteger;

/* eslint-enable */
