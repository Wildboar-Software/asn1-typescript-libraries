/* eslint-disable */
import {
    type INTEGER
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
const MOCallRecord_jIPQuryStatus_successfulQuery: 1 = 1 satisfies MOCallRecord_jIPQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_jIPQuryStatus_successfulQuery
 * @constant
 * @type {number}
 */
export
const successfulQuery: 1 = MOCallRecord_jIPQuryStatus_successfulQuery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_jIPQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const MOCallRecord_jIPQuryStatus_noQueryResponseMsg: 2 = 2 satisfies MOCallRecord_jIPQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_jIPQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const noQueryResponseMsg: 2 = MOCallRecord_jIPQuryStatus_noQueryResponseMsg; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_jIPQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const MOCallRecord_jIPQuryStatus_queryProtocolErr: 4 = 4 satisfies MOCallRecord_jIPQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_jIPQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const queryProtocolErr: 4 = MOCallRecord_jIPQuryStatus_queryProtocolErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_jIPQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const MOCallRecord_jIPQuryStatus_queryResponseDataErr: 5 = 5 satisfies MOCallRecord_jIPQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_jIPQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const queryResponseDataErr: 5 = MOCallRecord_jIPQuryStatus_queryResponseDataErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_jIPQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const MOCallRecord_jIPQuryStatus_queryRejected: 6 = 6 satisfies MOCallRecord_jIPQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_jIPQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const queryRejected: 6 = MOCallRecord_jIPQuryStatus_queryRejected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_jIPQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const MOCallRecord_jIPQuryStatus_queryNotPerformed: 9 = 9 satisfies MOCallRecord_jIPQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_jIPQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const queryNotPerformed: 9 = MOCallRecord_jIPQuryStatus_queryNotPerformed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_jIPQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const MOCallRecord_jIPQuryStatus_queryUnsuccessful: 99 = 99 satisfies MOCallRecord_jIPQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_jIPQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const queryUnsuccessful: 99 = MOCallRecord_jIPQuryStatus_queryUnsuccessful; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_MOCallRecord_jIPQuryStatus: $.ASN1Decoder<MOCallRecord_jIPQuryStatus> = $._decodeInteger;

export
const _encode_MOCallRecord_jIPQuryStatus: $.ASN1Encoder<MOCallRecord_jIPQuryStatus> = $._encodeInteger;

/* eslint-enable */
