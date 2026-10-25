/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary StoreStatus
 * @description
 * 
 * Status of a request to store an MM, as received in MM1_store.RES.
 * Category OC on the Bx1S-CDR. TS 32.270 does not define the individual
 * error values. The MMBox storage description gives "stored" and a
 * transient mailbox-full error as examples.
 *
 * 3GPP TS 32.270 V19.0.0 clause 6.1.4.1.
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
const StoreStatus_stored: 0 = 0 satisfies StoreStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StoreStatus_stored
 * @constant
 * @type {number}
 */
export
const stored: 0 = StoreStatus_stored; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StoreStatus_errorTransientFailure
 * @constant
 * @type {number}
 */
export
const StoreStatus_errorTransientFailure: 1 = 1 satisfies StoreStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StoreStatus_errorTransientFailure
 * @constant
 * @type {number}
 */
export
const errorTransientFailure: 1 = StoreStatus_errorTransientFailure; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StoreStatus_errorTransientMailboxFull
 * @constant
 * @type {number}
 */
export
const StoreStatus_errorTransientMailboxFull: 2 = 2 satisfies StoreStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StoreStatus_errorTransientMailboxFull
 * @constant
 * @type {number}
 */
export
const errorTransientMailboxFull: 2 = StoreStatus_errorTransientMailboxFull; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StoreStatus_errorTransientNetworkProblems
 * @constant
 * @type {number}
 */
export
const StoreStatus_errorTransientNetworkProblems: 3 = 3 satisfies StoreStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StoreStatus_errorTransientNetworkProblems
 * @constant
 * @type {number}
 */
export
const errorTransientNetworkProblems: 3 = StoreStatus_errorTransientNetworkProblems; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StoreStatus_errorPermanentFailure
 * @constant
 * @type {number}
 */
export
const StoreStatus_errorPermanentFailure: 4 = 4 satisfies StoreStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StoreStatus_errorPermanentFailure
 * @constant
 * @type {number}
 */
export
const errorPermanentFailure: 4 = StoreStatus_errorPermanentFailure; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StoreStatus_errorPermanentPermissionDenied
 * @constant
 * @type {number}
 */
export
const StoreStatus_errorPermanentPermissionDenied: 5 = 5 satisfies StoreStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StoreStatus_errorPermanentPermissionDenied
 * @constant
 * @type {number}
 */
export
const errorPermanentPermissionDenied: 5 = StoreStatus_errorPermanentPermissionDenied; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StoreStatus_errorPermanentMessageFormat
 * @constant
 * @type {number}
 */
export
const StoreStatus_errorPermanentMessageFormat: 6 = 6 satisfies StoreStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StoreStatus_errorPermanentMessageFormat
 * @constant
 * @type {number}
 */
export
const errorPermanentMessageFormat: 6 = StoreStatus_errorPermanentMessageFormat; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StoreStatus_errorPermanentMessageNotFound
 * @constant
 * @type {number}
 */
export
const StoreStatus_errorPermanentMessageNotFound: 7 = 7 satisfies StoreStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StoreStatus_errorPermanentMessageNotFound
 * @constant
 * @type {number}
 */
export
const errorPermanentMessageNotFound: 7 = StoreStatus_errorPermanentMessageNotFound; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_StoreStatus: $.ASN1Decoder<StoreStatus> = $._decodeInteger;

export
const _encode_StoreStatus: $.ASN1Encoder<StoreStatus> = $._encodeInteger;

/* eslint-enable */
