/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary StoreStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StoreStatus  ::=  INTEGER {
 *    stored                            ( 0 ),
 *    errorTransientFailure             ( 1 ),
 *    errorTransientMailboxFull         ( 2 ),
 *    errorTransientNetworkProblems     ( 3 ),
 *    errorPermanentFailure             ( 4 ),
 *    errorPermanentPermissionDenied    ( 5 ),
 *    errorPermanentMessageFormat       ( 6 ),
 *    errorPermanentMessageNotFound     ( 7 )}
 * ```
 */
export
type StoreStatus = INTEGER;

/**
 * @summary StoreStatus_stored
 * @constant
 * @type {number}
 */
export
const StoreStatus_stored: StoreStatus = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StoreStatus_stored
 * @constant
 * @type {number}
 */
export
const stored: StoreStatus = StoreStatus_stored; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StoreStatus_errorTransientFailure
 * @constant
 * @type {number}
 */
export
const StoreStatus_errorTransientFailure: StoreStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StoreStatus_errorTransientFailure
 * @constant
 * @type {number}
 */
export
const errorTransientFailure: StoreStatus = StoreStatus_errorTransientFailure; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StoreStatus_errorTransientMailboxFull
 * @constant
 * @type {number}
 */
export
const StoreStatus_errorTransientMailboxFull: StoreStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StoreStatus_errorTransientMailboxFull
 * @constant
 * @type {number}
 */
export
const errorTransientMailboxFull: StoreStatus = StoreStatus_errorTransientMailboxFull; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StoreStatus_errorTransientNetworkProblems
 * @constant
 * @type {number}
 */
export
const StoreStatus_errorTransientNetworkProblems: StoreStatus = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StoreStatus_errorTransientNetworkProblems
 * @constant
 * @type {number}
 */
export
const errorTransientNetworkProblems: StoreStatus = StoreStatus_errorTransientNetworkProblems; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StoreStatus_errorPermanentFailure
 * @constant
 * @type {number}
 */
export
const StoreStatus_errorPermanentFailure: StoreStatus = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StoreStatus_errorPermanentFailure
 * @constant
 * @type {number}
 */
export
const errorPermanentFailure: StoreStatus = StoreStatus_errorPermanentFailure; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StoreStatus_errorPermanentPermissionDenied
 * @constant
 * @type {number}
 */
export
const StoreStatus_errorPermanentPermissionDenied: StoreStatus = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StoreStatus_errorPermanentPermissionDenied
 * @constant
 * @type {number}
 */
export
const errorPermanentPermissionDenied: StoreStatus = StoreStatus_errorPermanentPermissionDenied; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StoreStatus_errorPermanentMessageFormat
 * @constant
 * @type {number}
 */
export
const StoreStatus_errorPermanentMessageFormat: StoreStatus = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StoreStatus_errorPermanentMessageFormat
 * @constant
 * @type {number}
 */
export
const errorPermanentMessageFormat: StoreStatus = StoreStatus_errorPermanentMessageFormat; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StoreStatus_errorPermanentMessageNotFound
 * @constant
 * @type {number}
 */
export
const StoreStatus_errorPermanentMessageNotFound: StoreStatus = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StoreStatus_errorPermanentMessageNotFound
 * @constant
 * @type {number}
 */
export
const errorPermanentMessageNotFound: StoreStatus = StoreStatus_errorPermanentMessageNotFound; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_StoreStatus: $.ASN1Decoder<StoreStatus> = $._decodeInteger;

export
const _encode_StoreStatus: $.ASN1Encoder<StoreStatus> = $._encodeInteger;

/* eslint-enable */
