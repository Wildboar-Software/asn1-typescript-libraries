/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMSReadStatus
 * @description
 * 
 * Status of the MMS (e.g. read or deleted without reading).
 *
 * 3GPP TS 33.128, clause 7.4.3.15.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSReadStatus  ::=  ENUMERATED
 * {
 *     read(1),
 *     deletedWithoutBeingRead(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MMSReadStatus {
    read = 1,
    deletedWithoutBeingRead = 2,
}

/**
 * @summary MMSReadStatus
 * @description
 * 
 * Status of the MMS (e.g. read or deleted without reading).
 *
 * 3GPP TS 33.128, clause 7.4.3.15.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSReadStatus  ::=  ENUMERATED
 * {
 *     read(1),
 *     deletedWithoutBeingRead(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MMSReadStatus = _enum_for_MMSReadStatus;

/**
 * @summary MMSReadStatus
 * @description
 * 
 * Status of the MMS (e.g. read or deleted without reading).
 *
 * 3GPP TS 33.128, clause 7.4.3.15.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSReadStatus  ::=  ENUMERATED
 * {
 *     read(1),
 *     deletedWithoutBeingRead(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MMSReadStatus: typeof _enum_for_MMSReadStatus = _enum_for_MMSReadStatus;

/**
 * @summary MMSReadStatus_read
 * @constant
 * @type {number}
 */
export
const MMSReadStatus_read: _enum_for_MMSReadStatus.read = MMSReadStatus.read; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary read
 * @constant
 * @type {number}
 */
export
const read: _enum_for_MMSReadStatus.read = MMSReadStatus.read; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSReadStatus_deletedWithoutBeingRead
 * @constant
 * @type {number}
 */
export
const MMSReadStatus_deletedWithoutBeingRead: _enum_for_MMSReadStatus.deletedWithoutBeingRead = MMSReadStatus.deletedWithoutBeingRead; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deletedWithoutBeingRead
 * @constant
 * @type {number}
 */
export
const deletedWithoutBeingRead: _enum_for_MMSReadStatus.deletedWithoutBeingRead = MMSReadStatus.deletedWithoutBeingRead; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MMSReadStatus: $.ASN1Decoder<MMSReadStatus> = $._decodeEnumerated;
export const _encode_MMSReadStatus: $.ASN1Encoder<MMSReadStatus> = $._encodeEnumerated;


/* eslint-enable */
