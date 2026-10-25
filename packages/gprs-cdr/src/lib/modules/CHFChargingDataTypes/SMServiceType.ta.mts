/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMServiceType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMServiceType  ::=  INTEGER {
 *    contentProcessing                  ( 0 ),
 *    forwarding                         ( 1 ),
 *    forwardingMultipleSubscriptions    ( 2 ),
 *    filtering                          ( 3 ),
 *    receipt                            ( 4 ),
 *    networkStorage                     ( 5 ),
 *    toMultipleDestinations             ( 6 ),
 *    virtualPrivateNetwork              ( 7 ),
 *    autoreply                          ( 8 ),
 *    personalSignature                  ( 9 ),
 *    deferredDelivery                   ( 10 )}
 * ```
 */
export
type SMServiceType = INTEGER;

/**
 * @summary SMServiceType_contentProcessing
 * @constant
 * @type {number}
 */
export
const SMServiceType_contentProcessing: 0 = 0 satisfies SMServiceType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMServiceType_contentProcessing
 * @constant
 * @type {number}
 */
export
const contentProcessing: 0 = SMServiceType_contentProcessing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMServiceType_forwarding
 * @constant
 * @type {number}
 */
export
const SMServiceType_forwarding: 1 = 1 satisfies SMServiceType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMServiceType_forwarding
 * @constant
 * @type {number}
 */
export
const forwarding: 1 = SMServiceType_forwarding; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMServiceType_forwardingMultipleSubscriptions
 * @constant
 * @type {number}
 */
export
const SMServiceType_forwardingMultipleSubscriptions: 2 = 2 satisfies SMServiceType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMServiceType_forwardingMultipleSubscriptions
 * @constant
 * @type {number}
 */
export
const forwardingMultipleSubscriptions: 2 = SMServiceType_forwardingMultipleSubscriptions; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMServiceType_filtering
 * @constant
 * @type {number}
 */
export
const SMServiceType_filtering: 3 = 3 satisfies SMServiceType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMServiceType_filtering
 * @constant
 * @type {number}
 */
export
const filtering: 3 = SMServiceType_filtering; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMServiceType_receipt
 * @constant
 * @type {number}
 */
export
const SMServiceType_receipt: 4 = 4 satisfies SMServiceType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMServiceType_receipt
 * @constant
 * @type {number}
 */
export
const receipt: 4 = SMServiceType_receipt; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMServiceType_networkStorage
 * @constant
 * @type {number}
 */
export
const SMServiceType_networkStorage: 5 = 5 satisfies SMServiceType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMServiceType_networkStorage
 * @constant
 * @type {number}
 */
export
const networkStorage: 5 = SMServiceType_networkStorage; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMServiceType_toMultipleDestinations
 * @constant
 * @type {number}
 */
export
const SMServiceType_toMultipleDestinations: 6 = 6 satisfies SMServiceType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMServiceType_toMultipleDestinations
 * @constant
 * @type {number}
 */
export
const toMultipleDestinations: 6 = SMServiceType_toMultipleDestinations; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMServiceType_virtualPrivateNetwork
 * @constant
 * @type {number}
 */
export
const SMServiceType_virtualPrivateNetwork: 7 = 7 satisfies SMServiceType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMServiceType_virtualPrivateNetwork
 * @constant
 * @type {number}
 */
export
const virtualPrivateNetwork: 7 = SMServiceType_virtualPrivateNetwork; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMServiceType_autoreply
 * @constant
 * @type {number}
 */
export
const SMServiceType_autoreply: 8 = 8 satisfies SMServiceType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMServiceType_autoreply
 * @constant
 * @type {number}
 */
export
const autoreply: 8 = SMServiceType_autoreply; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMServiceType_personalSignature
 * @constant
 * @type {number}
 */
export
const SMServiceType_personalSignature: 9 = 9 satisfies SMServiceType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMServiceType_personalSignature
 * @constant
 * @type {number}
 */
export
const personalSignature: 9 = SMServiceType_personalSignature; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMServiceType_deferredDelivery
 * @constant
 * @type {number}
 */
export
const SMServiceType_deferredDelivery: 10 = 10 satisfies SMServiceType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMServiceType_deferredDelivery
 * @constant
 * @type {number}
 */
export
const deferredDelivery: 10 = SMServiceType_deferredDelivery; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_SMServiceType: $.ASN1Decoder<SMServiceType> = $._decodeInteger;

export
const _encode_SMServiceType: $.ASN1Encoder<SMServiceType> = $._encodeInteger;

/* eslint-enable */
