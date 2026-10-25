/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMSTransferStatus
 * @description
 * 
 * Indicates whether the SMSF sent the TPDU to the next network element. See
 * NOTE 5.
 *
 * 3GPP TS 33.128, clause 6.2.5.3.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * Indicates whether the SMSF sent the TPDU to the next network element. See
 * NOTE 5.
 *
 * 3GPP TS 33.128, clause 6.2.5.3.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * Indicates whether the SMSF sent the TPDU to the next network element. See
 * NOTE 5.
 *
 * 3GPP TS 33.128, clause 6.2.5.3.
 * https://www.3gpp.org/DynaReport/33128.htm
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
const SMSTransferStatus: typeof _enum_for_SMSTransferStatus = _enum_for_SMSTransferStatus;

/**
 * @summary SMSTransferStatus_transferSucceeded
 * @constant
 * @type {number}
 */
export
const SMSTransferStatus_transferSucceeded: _enum_for_SMSTransferStatus.transferSucceeded = SMSTransferStatus.transferSucceeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary transferSucceeded
 * @constant
 * @type {number}
 */
export
const transferSucceeded: _enum_for_SMSTransferStatus.transferSucceeded = SMSTransferStatus.transferSucceeded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMSTransferStatus_transferFailed
 * @constant
 * @type {number}
 */
export
const SMSTransferStatus_transferFailed: _enum_for_SMSTransferStatus.transferFailed = SMSTransferStatus.transferFailed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary transferFailed
 * @constant
 * @type {number}
 */
export
const transferFailed: _enum_for_SMSTransferStatus.transferFailed = SMSTransferStatus.transferFailed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMSTransferStatus_undefined
 * @constant
 * @type {number}
 */
export
const SMSTransferStatus_undefined: _enum_for_SMSTransferStatus.undefined = SMSTransferStatus.undefined; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary undefined
 * @constant
 * @type {number}
 */
export
const undefined: _enum_for_SMSTransferStatus.undefined = SMSTransferStatus.undefined; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_SMSTransferStatus: $.ASN1Decoder<SMSTransferStatus> = $._decodeEnumerated;
export const _encode_SMSTransferStatus: $.ASN1Encoder<SMSTransferStatus> = $._encodeEnumerated;


/* eslint-enable */
