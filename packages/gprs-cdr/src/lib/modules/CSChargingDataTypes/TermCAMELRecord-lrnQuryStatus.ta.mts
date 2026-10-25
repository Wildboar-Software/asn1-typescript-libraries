/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TermCAMELRecord_lrnQuryStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TermCAMELRecord-lrnQuryStatus ::= INTEGER {
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
type TermCAMELRecord_lrnQuryStatus = INTEGER;

/**
 * @summary TermCAMELRecord_lrnQuryStatus_successfulQuery
 * @constant
 * @type {number}
 */
export
const TermCAMELRecord_lrnQuryStatus_successfulQuery: 1 = 1 satisfies TermCAMELRecord_lrnQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_lrnQuryStatus_successfulQuery
 * @constant
 * @type {number}
 */
export
const successfulQuery: 1 = TermCAMELRecord_lrnQuryStatus_successfulQuery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_lrnQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const TermCAMELRecord_lrnQuryStatus_noQueryResponseMsg: 2 = 2 satisfies TermCAMELRecord_lrnQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_lrnQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const noQueryResponseMsg: 2 = TermCAMELRecord_lrnQuryStatus_noQueryResponseMsg; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_lrnQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const TermCAMELRecord_lrnQuryStatus_queryProtocolErr: 4 = 4 satisfies TermCAMELRecord_lrnQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_lrnQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const queryProtocolErr: 4 = TermCAMELRecord_lrnQuryStatus_queryProtocolErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_lrnQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const TermCAMELRecord_lrnQuryStatus_queryResponseDataErr: 5 = 5 satisfies TermCAMELRecord_lrnQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_lrnQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const queryResponseDataErr: 5 = TermCAMELRecord_lrnQuryStatus_queryResponseDataErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_lrnQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const TermCAMELRecord_lrnQuryStatus_queryRejected: 6 = 6 satisfies TermCAMELRecord_lrnQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_lrnQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const queryRejected: 6 = TermCAMELRecord_lrnQuryStatus_queryRejected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_lrnQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const TermCAMELRecord_lrnQuryStatus_queryNotPerformed: 9 = 9 satisfies TermCAMELRecord_lrnQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_lrnQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const queryNotPerformed: 9 = TermCAMELRecord_lrnQuryStatus_queryNotPerformed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_lrnQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const TermCAMELRecord_lrnQuryStatus_queryUnsuccessful: 99 = 99 satisfies TermCAMELRecord_lrnQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_lrnQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const queryUnsuccessful: 99 = TermCAMELRecord_lrnQuryStatus_queryUnsuccessful; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_TermCAMELRecord_lrnQuryStatus: $.ASN1Decoder<TermCAMELRecord_lrnQuryStatus> = $._decodeInteger;

export
const _encode_TermCAMELRecord_lrnQuryStatus: $.ASN1Encoder<TermCAMELRecord_lrnQuryStatus> = $._encodeInteger;

/* eslint-enable */
