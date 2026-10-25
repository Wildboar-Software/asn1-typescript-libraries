/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TermCAMELRecord_jIPQuryStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TermCAMELRecord-jIPQuryStatus ::= INTEGER {
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
type TermCAMELRecord_jIPQuryStatus = INTEGER;

/**
 * @summary TermCAMELRecord_jIPQuryStatus_successfulQuery
 * @constant
 * @type {number}
 */
export
const TermCAMELRecord_jIPQuryStatus_successfulQuery = 1 satisfies TermCAMELRecord_jIPQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_jIPQuryStatus_successfulQuery
 * @constant
 * @type {number}
 */
export
const successfulQuery = TermCAMELRecord_jIPQuryStatus_successfulQuery satisfies TermCAMELRecord_jIPQuryStatus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_jIPQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const TermCAMELRecord_jIPQuryStatus_noQueryResponseMsg = 2 satisfies TermCAMELRecord_jIPQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_jIPQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const noQueryResponseMsg = TermCAMELRecord_jIPQuryStatus_noQueryResponseMsg satisfies TermCAMELRecord_jIPQuryStatus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_jIPQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const TermCAMELRecord_jIPQuryStatus_queryProtocolErr = 4 satisfies TermCAMELRecord_jIPQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_jIPQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const queryProtocolErr = TermCAMELRecord_jIPQuryStatus_queryProtocolErr satisfies TermCAMELRecord_jIPQuryStatus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_jIPQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const TermCAMELRecord_jIPQuryStatus_queryResponseDataErr = 5 satisfies TermCAMELRecord_jIPQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_jIPQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const queryResponseDataErr = TermCAMELRecord_jIPQuryStatus_queryResponseDataErr satisfies TermCAMELRecord_jIPQuryStatus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_jIPQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const TermCAMELRecord_jIPQuryStatus_queryRejected = 6 satisfies TermCAMELRecord_jIPQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_jIPQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const queryRejected = TermCAMELRecord_jIPQuryStatus_queryRejected satisfies TermCAMELRecord_jIPQuryStatus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_jIPQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const TermCAMELRecord_jIPQuryStatus_queryNotPerformed = 9 satisfies TermCAMELRecord_jIPQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_jIPQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const queryNotPerformed = TermCAMELRecord_jIPQuryStatus_queryNotPerformed satisfies TermCAMELRecord_jIPQuryStatus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_jIPQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const TermCAMELRecord_jIPQuryStatus_queryUnsuccessful = 99 satisfies TermCAMELRecord_jIPQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_jIPQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const queryUnsuccessful = TermCAMELRecord_jIPQuryStatus_queryUnsuccessful satisfies TermCAMELRecord_jIPQuryStatus; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_TermCAMELRecord_jIPQuryStatus: $.ASN1Decoder<TermCAMELRecord_jIPQuryStatus> = $._decodeInteger;

export
const _encode_TermCAMELRecord_jIPQuryStatus: $.ASN1Encoder<TermCAMELRecord_jIPQuryStatus> = $._encodeInteger;

/* eslint-enable */
