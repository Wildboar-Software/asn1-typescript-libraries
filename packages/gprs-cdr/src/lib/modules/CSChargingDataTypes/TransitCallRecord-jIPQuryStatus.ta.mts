/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TransitCallRecord_jIPQuryStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransitCallRecord-jIPQuryStatus ::= INTEGER {
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
type TransitCallRecord_jIPQuryStatus = INTEGER;

/**
 * @summary TransitCallRecord_jIPQuryStatus_successfulQuery
 * @constant
 * @type {number}
 */
export
const TransitCallRecord_jIPQuryStatus_successfulQuery: TransitCallRecord_jIPQuryStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TransitCallRecord_jIPQuryStatus_successfulQuery
 * @constant
 * @type {number}
 */
export
const successfulQuery: TransitCallRecord_jIPQuryStatus = TransitCallRecord_jIPQuryStatus_successfulQuery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TransitCallRecord_jIPQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const TransitCallRecord_jIPQuryStatus_noQueryResponseMsg: TransitCallRecord_jIPQuryStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TransitCallRecord_jIPQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const noQueryResponseMsg: TransitCallRecord_jIPQuryStatus = TransitCallRecord_jIPQuryStatus_noQueryResponseMsg; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TransitCallRecord_jIPQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const TransitCallRecord_jIPQuryStatus_queryProtocolErr: TransitCallRecord_jIPQuryStatus = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TransitCallRecord_jIPQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const queryProtocolErr: TransitCallRecord_jIPQuryStatus = TransitCallRecord_jIPQuryStatus_queryProtocolErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TransitCallRecord_jIPQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const TransitCallRecord_jIPQuryStatus_queryResponseDataErr: TransitCallRecord_jIPQuryStatus = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TransitCallRecord_jIPQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const queryResponseDataErr: TransitCallRecord_jIPQuryStatus = TransitCallRecord_jIPQuryStatus_queryResponseDataErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TransitCallRecord_jIPQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const TransitCallRecord_jIPQuryStatus_queryRejected: TransitCallRecord_jIPQuryStatus = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TransitCallRecord_jIPQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const queryRejected: TransitCallRecord_jIPQuryStatus = TransitCallRecord_jIPQuryStatus_queryRejected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TransitCallRecord_jIPQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const TransitCallRecord_jIPQuryStatus_queryNotPerformed: TransitCallRecord_jIPQuryStatus = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TransitCallRecord_jIPQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const queryNotPerformed: TransitCallRecord_jIPQuryStatus = TransitCallRecord_jIPQuryStatus_queryNotPerformed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TransitCallRecord_jIPQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const TransitCallRecord_jIPQuryStatus_queryUnsuccessful: TransitCallRecord_jIPQuryStatus = 99; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TransitCallRecord_jIPQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const queryUnsuccessful: TransitCallRecord_jIPQuryStatus = TransitCallRecord_jIPQuryStatus_queryUnsuccessful; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_TransitCallRecord_jIPQuryStatus: $.ASN1Decoder<TransitCallRecord_jIPQuryStatus> = $._decodeInteger;

export
const _encode_TransitCallRecord_jIPQuryStatus: $.ASN1Encoder<TransitCallRecord_jIPQuryStatus> = $._encodeInteger;

/* eslint-enable */
