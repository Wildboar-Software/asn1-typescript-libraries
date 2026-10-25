/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MCDataRequestType
 * @description
 * 
 * Request-type element of application/vnd.3gpp.mcdata-info+xml MIME body:
 * "one-to-one-fd" or "group-fd".
 *
 * 3GPP TS 33.128, clause 7.20.2.6.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCDataRequestType  ::=  ENUMERATED
 * {
 *     oneToOneFD(1),
 *     groupFD(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MCDataRequestType {
    oneToOneFD = 1,
    groupFD = 2,
}

/**
 * @summary MCDataRequestType
 * @description
 * 
 * Request-type element of application/vnd.3gpp.mcdata-info+xml MIME body:
 * "one-to-one-fd" or "group-fd".
 *
 * 3GPP TS 33.128, clause 7.20.2.6.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCDataRequestType  ::=  ENUMERATED
 * {
 *     oneToOneFD(1),
 *     groupFD(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MCDataRequestType = _enum_for_MCDataRequestType;

/**
 * @summary MCDataRequestType
 * @description
 * 
 * Request-type element of application/vnd.3gpp.mcdata-info+xml MIME body:
 * "one-to-one-fd" or "group-fd".
 *
 * 3GPP TS 33.128, clause 7.20.2.6.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCDataRequestType  ::=  ENUMERATED
 * {
 *     oneToOneFD(1),
 *     groupFD(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MCDataRequestType: typeof _enum_for_MCDataRequestType = _enum_for_MCDataRequestType;

/**
 * @summary MCDataRequestType_oneToOneFD
 * @constant
 * @type {number}
 */
export
const MCDataRequestType_oneToOneFD: _enum_for_MCDataRequestType.oneToOneFD = MCDataRequestType.oneToOneFD; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oneToOneFD
 * @constant
 * @type {number}
 */
export
const oneToOneFD: _enum_for_MCDataRequestType.oneToOneFD = MCDataRequestType.oneToOneFD; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MCDataRequestType_groupFD
 * @constant
 * @type {number}
 */
export
const MCDataRequestType_groupFD: _enum_for_MCDataRequestType.groupFD = MCDataRequestType.groupFD; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary groupFD
 * @constant
 * @type {number}
 */
export
const groupFD: _enum_for_MCDataRequestType.groupFD = MCDataRequestType.groupFD; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MCDataRequestType: $.ASN1Decoder<MCDataRequestType> = $._decodeEnumerated;
export const _encode_MCDataRequestType: $.ASN1Encoder<MCDataRequestType> = $._encodeEnumerated;


/* eslint-enable */
