/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RequestStatusCodeType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestStatusCodeType  ::=  INTEGER {
 *    normalRelease               ( 0 ),
 *    abnormalRelease             ( 4 ),
 *    serviceDenied               ( 30 ),
 *    messageFormatCorrupt        ( 31 ),
 *    sendingAddressUnresolved    ( 32 ),
 *    messageNotFound             ( 33 ),
 *    networkProblem              ( 34 ),
 *    contentNotAccepted          ( 35 ),
 *    unsupportedMessage          ( 36 )}
 * ```
 */
export
type RequestStatusCodeType = INTEGER;

/**
 * @summary RequestStatusCodeType_normalRelease
 * @constant
 * @type {number}
 */
export
const RequestStatusCodeType_normalRelease: RequestStatusCodeType = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestStatusCodeType_normalRelease
 * @constant
 * @type {number}
 */
export
const normalRelease: RequestStatusCodeType = RequestStatusCodeType_normalRelease; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RequestStatusCodeType_abnormalRelease
 * @constant
 * @type {number}
 */
export
const RequestStatusCodeType_abnormalRelease: RequestStatusCodeType = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestStatusCodeType_abnormalRelease
 * @constant
 * @type {number}
 */
export
const abnormalRelease: RequestStatusCodeType = RequestStatusCodeType_abnormalRelease; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RequestStatusCodeType_serviceDenied
 * @constant
 * @type {number}
 */
export
const RequestStatusCodeType_serviceDenied: RequestStatusCodeType = 30; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestStatusCodeType_serviceDenied
 * @constant
 * @type {number}
 */
export
const serviceDenied: RequestStatusCodeType = RequestStatusCodeType_serviceDenied; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RequestStatusCodeType_messageFormatCorrupt
 * @constant
 * @type {number}
 */
export
const RequestStatusCodeType_messageFormatCorrupt: RequestStatusCodeType = 31; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestStatusCodeType_messageFormatCorrupt
 * @constant
 * @type {number}
 */
export
const messageFormatCorrupt: RequestStatusCodeType = RequestStatusCodeType_messageFormatCorrupt; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RequestStatusCodeType_sendingAddressUnresolved
 * @constant
 * @type {number}
 */
export
const RequestStatusCodeType_sendingAddressUnresolved: RequestStatusCodeType = 32; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestStatusCodeType_sendingAddressUnresolved
 * @constant
 * @type {number}
 */
export
const sendingAddressUnresolved: RequestStatusCodeType = RequestStatusCodeType_sendingAddressUnresolved; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RequestStatusCodeType_messageNotFound
 * @constant
 * @type {number}
 */
export
const RequestStatusCodeType_messageNotFound: RequestStatusCodeType = 33; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestStatusCodeType_messageNotFound
 * @constant
 * @type {number}
 */
export
const messageNotFound: RequestStatusCodeType = RequestStatusCodeType_messageNotFound; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RequestStatusCodeType_networkProblem
 * @constant
 * @type {number}
 */
export
const RequestStatusCodeType_networkProblem: RequestStatusCodeType = 34; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestStatusCodeType_networkProblem
 * @constant
 * @type {number}
 */
export
const networkProblem: RequestStatusCodeType = RequestStatusCodeType_networkProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RequestStatusCodeType_contentNotAccepted
 * @constant
 * @type {number}
 */
export
const RequestStatusCodeType_contentNotAccepted: RequestStatusCodeType = 35; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestStatusCodeType_contentNotAccepted
 * @constant
 * @type {number}
 */
export
const contentNotAccepted: RequestStatusCodeType = RequestStatusCodeType_contentNotAccepted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RequestStatusCodeType_unsupportedMessage
 * @constant
 * @type {number}
 */
export
const RequestStatusCodeType_unsupportedMessage: RequestStatusCodeType = 36; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestStatusCodeType_unsupportedMessage
 * @constant
 * @type {number}
 */
export
const unsupportedMessage: RequestStatusCodeType = RequestStatusCodeType_unsupportedMessage; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_RequestStatusCodeType: $.ASN1Decoder<RequestStatusCodeType> = $._decodeInteger;

export
const _encode_RequestStatusCodeType: $.ASN1Encoder<RequestStatusCodeType> = $._encodeInteger;

/* eslint-enable */
