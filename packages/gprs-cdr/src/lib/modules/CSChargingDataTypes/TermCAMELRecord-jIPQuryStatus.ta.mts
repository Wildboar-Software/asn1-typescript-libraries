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
const TermCAMELRecord_jIPQuryStatus_successfulQuery: TermCAMELRecord_jIPQuryStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_jIPQuryStatus_successfulQuery
 * @constant
 * @type {number}
 */
export
const successfulQuery: TermCAMELRecord_jIPQuryStatus = TermCAMELRecord_jIPQuryStatus_successfulQuery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_jIPQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const TermCAMELRecord_jIPQuryStatus_noQueryResponseMsg: TermCAMELRecord_jIPQuryStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_jIPQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const noQueryResponseMsg: TermCAMELRecord_jIPQuryStatus = TermCAMELRecord_jIPQuryStatus_noQueryResponseMsg; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_jIPQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const TermCAMELRecord_jIPQuryStatus_queryProtocolErr: TermCAMELRecord_jIPQuryStatus = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_jIPQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const queryProtocolErr: TermCAMELRecord_jIPQuryStatus = TermCAMELRecord_jIPQuryStatus_queryProtocolErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_jIPQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const TermCAMELRecord_jIPQuryStatus_queryResponseDataErr: TermCAMELRecord_jIPQuryStatus = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_jIPQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const queryResponseDataErr: TermCAMELRecord_jIPQuryStatus = TermCAMELRecord_jIPQuryStatus_queryResponseDataErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_jIPQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const TermCAMELRecord_jIPQuryStatus_queryRejected: TermCAMELRecord_jIPQuryStatus = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_jIPQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const queryRejected: TermCAMELRecord_jIPQuryStatus = TermCAMELRecord_jIPQuryStatus_queryRejected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_jIPQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const TermCAMELRecord_jIPQuryStatus_queryNotPerformed: TermCAMELRecord_jIPQuryStatus = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_jIPQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const queryNotPerformed: TermCAMELRecord_jIPQuryStatus = TermCAMELRecord_jIPQuryStatus_queryNotPerformed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_jIPQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const TermCAMELRecord_jIPQuryStatus_queryUnsuccessful: TermCAMELRecord_jIPQuryStatus = 99; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_jIPQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const queryUnsuccessful: TermCAMELRecord_jIPQuryStatus = TermCAMELRecord_jIPQuryStatus_queryUnsuccessful; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_TermCAMELRecord_jIPQuryStatus: $.ASN1Decoder<TermCAMELRecord_jIPQuryStatus> = $._decodeInteger;

export
const _encode_TermCAMELRecord_jIPQuryStatus: $.ASN1Encoder<TermCAMELRecord_jIPQuryStatus> = $._encodeInteger;

/* eslint-enable */
