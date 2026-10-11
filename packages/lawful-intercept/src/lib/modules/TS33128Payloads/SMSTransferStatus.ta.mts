/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMSTransferStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSTransferStatus  ::=  ENUMERATED
 * {
 *     transferSucceeded(1),
 *     transferFailed(2),
 *     undefined(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SMSTransferStatus {
    transferSucceeded = 1,
    transferFailed = 2,
    undefined = 3,
}

/**
 * @summary SMSTransferStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSTransferStatus  ::=  ENUMERATED
 * {
 *     transferSucceeded(1),
 *     transferFailed(2),
 *     undefined(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type SMSTransferStatus = _enum_for_SMSTransferStatus;

/**
 * @summary SMSTransferStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSTransferStatus  ::=  ENUMERATED
 * {
 *     transferSucceeded(1),
 *     transferFailed(2),
 *     undefined(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const SMSTransferStatus = _enum_for_SMSTransferStatus;

/**
 * @summary SMSTransferStatus_transferSucceeded
 * @constant
 * @type {number}
 */
export
const SMSTransferStatus_transferSucceeded: SMSTransferStatus = SMSTransferStatus.transferSucceeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary transferSucceeded
 * @constant
 * @type {number}
 */
export
const transferSucceeded: SMSTransferStatus = SMSTransferStatus.transferSucceeded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMSTransferStatus_transferFailed
 * @constant
 * @type {number}
 */
export
const SMSTransferStatus_transferFailed: SMSTransferStatus = SMSTransferStatus.transferFailed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary transferFailed
 * @constant
 * @type {number}
 */
export
const transferFailed: SMSTransferStatus = SMSTransferStatus.transferFailed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMSTransferStatus_undefined
 * @constant
 * @type {number}
 */
export
const SMSTransferStatus_undefined: SMSTransferStatus = SMSTransferStatus.undefined; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary undefined
 * @constant
 * @type {number}
 */
export
const undefined: SMSTransferStatus = SMSTransferStatus.undefined; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_SMSTransferStatus: $.ASN1Decoder<SMSTransferStatus> = $._decodeEnumerated;

export const _encode_SMSTransferStatus: $.ASN1Encoder<SMSTransferStatus> = $._encodeEnumerated;


/* eslint-enable */
