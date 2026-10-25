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
const JurisdictionInformationParameterQueryStatus_successfulQuery: JurisdictionInformationParameterQueryStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary JurisdictionInformationParameterQueryStatus_successfulQuery
 * @constant
 * @type {number}
 */
export
const successfulQuery: JurisdictionInformationParameterQueryStatus = JurisdictionInformationParameterQueryStatus_successfulQuery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary JurisdictionInformationParameterQueryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const JurisdictionInformationParameterQueryStatus_noQueryResponseMsg: JurisdictionInformationParameterQueryStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary JurisdictionInformationParameterQueryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const noQueryResponseMsg: JurisdictionInformationParameterQueryStatus = JurisdictionInformationParameterQueryStatus_noQueryResponseMsg; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary JurisdictionInformationParameterQueryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const JurisdictionInformationParameterQueryStatus_queryProtocolErr: JurisdictionInformationParameterQueryStatus = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary JurisdictionInformationParameterQueryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const queryProtocolErr: JurisdictionInformationParameterQueryStatus = JurisdictionInformationParameterQueryStatus_queryProtocolErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary JurisdictionInformationParameterQueryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const JurisdictionInformationParameterQueryStatus_queryResponseDataErr: JurisdictionInformationParameterQueryStatus = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary JurisdictionInformationParameterQueryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const queryResponseDataErr: JurisdictionInformationParameterQueryStatus = JurisdictionInformationParameterQueryStatus_queryResponseDataErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary JurisdictionInformationParameterQueryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const JurisdictionInformationParameterQueryStatus_queryRejected: JurisdictionInformationParameterQueryStatus = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary JurisdictionInformationParameterQueryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const queryRejected: JurisdictionInformationParameterQueryStatus = JurisdictionInformationParameterQueryStatus_queryRejected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary JurisdictionInformationParameterQueryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const JurisdictionInformationParameterQueryStatus_queryNotPerformed: JurisdictionInformationParameterQueryStatus = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary JurisdictionInformationParameterQueryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const queryNotPerformed: JurisdictionInformationParameterQueryStatus = JurisdictionInformationParameterQueryStatus_queryNotPerformed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary JurisdictionInformationParameterQueryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const JurisdictionInformationParameterQueryStatus_queryUnsuccessful: JurisdictionInformationParameterQueryStatus = 99; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary JurisdictionInformationParameterQueryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const queryUnsuccessful: JurisdictionInformationParameterQueryStatus = JurisdictionInformationParameterQueryStatus_queryUnsuccessful; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_JurisdictionInformationParameterQueryStatus: $.ASN1Decoder<JurisdictionInformationParameterQueryStatus> = $._decodeInteger;

export
const _encode_JurisdictionInformationParameterQueryStatus: $.ASN1Encoder<JurisdictionInformationParameterQueryStatus> = $._encodeInteger;

/* eslint-enable */
