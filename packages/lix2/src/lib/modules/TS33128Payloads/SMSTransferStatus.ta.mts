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

let _cached_decoder_for_SMSTransferStatus: $.ASN1Decoder<SMSTransferStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMSTransferStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMSTransferStatus (el: _Element): SMSTransferStatus {
    if (!_cached_decoder_for_SMSTransferStatus) { _cached_decoder_for_SMSTransferStatus = $._decodeEnumerated; }
    return _cached_decoder_for_SMSTransferStatus(el);
}

let _cached_encoder_for_SMSTransferStatus: $.ASN1Encoder<SMSTransferStatus> | null = null;

/**
 * @summary Encodes a(n) SMSTransferStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMSTransferStatus, encoded as an ASN.1 Element.
 */
export
function _encode_SMSTransferStatus (value: SMSTransferStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMSTransferStatus) { _cached_encoder_for_SMSTransferStatus = $._encodeEnumerated; }
    return _cached_encoder_for_SMSTransferStatus(value, elGetter);
}


/* eslint-enable */
