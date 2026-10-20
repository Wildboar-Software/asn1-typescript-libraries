/* eslint-disable */
import {
    INTEGER
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
const SMServiceType_contentProcessing: SMServiceType = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMServiceType_contentProcessing
 * @constant
 * @type {number}
 */
export
const contentProcessing: SMServiceType = SMServiceType_contentProcessing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMServiceType_forwarding
 * @constant
 * @type {number}
 */
export
const SMServiceType_forwarding: SMServiceType = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMServiceType_forwarding
 * @constant
 * @type {number}
 */
export
const forwarding: SMServiceType = SMServiceType_forwarding; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMServiceType_forwardingMultipleSubscriptions
 * @constant
 * @type {number}
 */
export
const SMServiceType_forwardingMultipleSubscriptions: SMServiceType = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMServiceType_forwardingMultipleSubscriptions
 * @constant
 * @type {number}
 */
export
const forwardingMultipleSubscriptions: SMServiceType = SMServiceType_forwardingMultipleSubscriptions; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMServiceType_filtering
 * @constant
 * @type {number}
 */
export
const SMServiceType_filtering: SMServiceType = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMServiceType_filtering
 * @constant
 * @type {number}
 */
export
const filtering: SMServiceType = SMServiceType_filtering; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMServiceType_receipt
 * @constant
 * @type {number}
 */
export
const SMServiceType_receipt: SMServiceType = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMServiceType_receipt
 * @constant
 * @type {number}
 */
export
const receipt: SMServiceType = SMServiceType_receipt; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMServiceType_networkStorage
 * @constant
 * @type {number}
 */
export
const SMServiceType_networkStorage: SMServiceType = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMServiceType_networkStorage
 * @constant
 * @type {number}
 */
export
const networkStorage: SMServiceType = SMServiceType_networkStorage; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMServiceType_toMultipleDestinations
 * @constant
 * @type {number}
 */
export
const SMServiceType_toMultipleDestinations: SMServiceType = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMServiceType_toMultipleDestinations
 * @constant
 * @type {number}
 */
export
const toMultipleDestinations: SMServiceType = SMServiceType_toMultipleDestinations; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMServiceType_virtualPrivateNetwork
 * @constant
 * @type {number}
 */
export
const SMServiceType_virtualPrivateNetwork: SMServiceType = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMServiceType_virtualPrivateNetwork
 * @constant
 * @type {number}
 */
export
const virtualPrivateNetwork: SMServiceType = SMServiceType_virtualPrivateNetwork; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMServiceType_autoreply
 * @constant
 * @type {number}
 */
export
const SMServiceType_autoreply: SMServiceType = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMServiceType_autoreply
 * @constant
 * @type {number}
 */
export
const autoreply: SMServiceType = SMServiceType_autoreply; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMServiceType_personalSignature
 * @constant
 * @type {number}
 */
export
const SMServiceType_personalSignature: SMServiceType = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMServiceType_personalSignature
 * @constant
 * @type {number}
 */
export
const personalSignature: SMServiceType = SMServiceType_personalSignature; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMServiceType_deferredDelivery
 * @constant
 * @type {number}
 */
export
const SMServiceType_deferredDelivery: SMServiceType = 10; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMServiceType_deferredDelivery
 * @constant
 * @type {number}
 */
export
const deferredDelivery: SMServiceType = SMServiceType_deferredDelivery; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_SMServiceType: $.ASN1Decoder<SMServiceType> = $._decodeInteger;

export
const _encode_SMServiceType: $.ASN1Encoder<SMServiceType> = $._encodeInteger;

/* eslint-enable */
