/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary JurisdictionInformationParameterQueryStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * JurisdictionInformationParameterQueryStatus  ::=  INTEGER {
 *    successfulQuery         ( 1 ),
 *    noQueryResponseMsg      ( 2 ),
 *    queryProtocolErr        ( 4 ),
 *    queryResponseDataErr    ( 5 ),
 *    queryRejected           ( 6 ),
 *    queryNotPerformed       ( 9 ),
 *    queryUnsuccessful       ( 99 )}
 * ```
 */
export
type JurisdictionInformationParameterQueryStatus = INTEGER;

/**
 * @summary JurisdictionInformationParameterQueryStatus_successfulQuery
 * @constant
 * @type {number}
 */
export
const JurisdictionInformationParameterQueryStatus_successfulQuery: 1 = 1 satisfies JurisdictionInformationParameterQueryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary JurisdictionInformationParameterQueryStatus_successfulQuery
 * @constant
 * @type {number}
 */
export
const successfulQuery: 1 = JurisdictionInformationParameterQueryStatus_successfulQuery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary JurisdictionInformationParameterQueryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const JurisdictionInformationParameterQueryStatus_noQueryResponseMsg: 2 = 2 satisfies JurisdictionInformationParameterQueryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary JurisdictionInformationParameterQueryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const noQueryResponseMsg: 2 = JurisdictionInformationParameterQueryStatus_noQueryResponseMsg; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary JurisdictionInformationParameterQueryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const JurisdictionInformationParameterQueryStatus_queryProtocolErr: 4 = 4 satisfies JurisdictionInformationParameterQueryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary JurisdictionInformationParameterQueryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const queryProtocolErr: 4 = JurisdictionInformationParameterQueryStatus_queryProtocolErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary JurisdictionInformationParameterQueryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const JurisdictionInformationParameterQueryStatus_queryResponseDataErr: 5 = 5 satisfies JurisdictionInformationParameterQueryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary JurisdictionInformationParameterQueryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const queryResponseDataErr: 5 = JurisdictionInformationParameterQueryStatus_queryResponseDataErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary JurisdictionInformationParameterQueryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const JurisdictionInformationParameterQueryStatus_queryRejected: 6 = 6 satisfies JurisdictionInformationParameterQueryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary JurisdictionInformationParameterQueryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const queryRejected: 6 = JurisdictionInformationParameterQueryStatus_queryRejected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary JurisdictionInformationParameterQueryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const JurisdictionInformationParameterQueryStatus_queryNotPerformed: 9 = 9 satisfies JurisdictionInformationParameterQueryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary JurisdictionInformationParameterQueryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const queryNotPerformed: 9 = JurisdictionInformationParameterQueryStatus_queryNotPerformed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary JurisdictionInformationParameterQueryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const JurisdictionInformationParameterQueryStatus_queryUnsuccessful: 99 = 99 satisfies JurisdictionInformationParameterQueryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary JurisdictionInformationParameterQueryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const queryUnsuccessful: 99 = JurisdictionInformationParameterQueryStatus_queryUnsuccessful; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_JurisdictionInformationParameterQueryStatus: $.ASN1Decoder<JurisdictionInformationParameterQueryStatus> = $._decodeInteger;

export
const _encode_JurisdictionInformationParameterQueryStatus: $.ASN1Encoder<JurisdictionInformationParameterQueryStatus> = $._encodeInteger;

/* eslint-enable */
