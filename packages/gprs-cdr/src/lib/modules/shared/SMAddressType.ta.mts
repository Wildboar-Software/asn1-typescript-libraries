/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMAddressType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMAddressType  ::=  ENUMERATED {
 *    emailAddress             ( 0 ),
 *    mSISDN                   ( 1 ),
 *    iPv4Address              ( 2 ),
 *    iPv6Address              ( 3 ),
 *    numericShortCode         ( 4 ),
 *    alphanumericShortCode    ( 5 ),
 *    other                    ( 6 ),
 *    iMSI                     ( 7 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SMAddressType {
    emailAddress = 0,
    mSISDN = 1,
    iPv4Address = 2,
    iPv6Address = 3,
    numericShortCode = 4,
    alphanumericShortCode = 5,
    other = 6,
    iMSI = 7,
}

/**
 * @summary SMAddressType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMAddressType  ::=  ENUMERATED {
 *    emailAddress             ( 0 ),
 *    mSISDN                   ( 1 ),
 *    iPv4Address              ( 2 ),
 *    iPv6Address              ( 3 ),
 *    numericShortCode         ( 4 ),
 *    alphanumericShortCode    ( 5 ),
 *    other                    ( 6 ),
 *    iMSI                     ( 7 ) }
 * ```
 * 
 * @enum {number}
 */
export
type SMAddressType = _enum_for_SMAddressType;

/**
 * @summary SMAddressType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMAddressType  ::=  ENUMERATED {
 *    emailAddress             ( 0 ),
 *    mSISDN                   ( 1 ),
 *    iPv4Address              ( 2 ),
 *    iPv6Address              ( 3 ),
 *    numericShortCode         ( 4 ),
 *    alphanumericShortCode    ( 5 ),
 *    other                    ( 6 ),
 *    iMSI                     ( 7 ) }
 * ```
 * 
 * @enum {number}
 */
export
const SMAddressType = _enum_for_SMAddressType;

/**
 * @summary SMAddressType_emailAddress
 * @constant
 * @type {number}
 */
export
const SMAddressType_emailAddress = SMAddressType.emailAddress satisfies SMAddressType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary emailAddress
 * @constant
 * @type {number}
 */
export
const emailAddress = SMAddressType.emailAddress satisfies SMAddressType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMAddressType_mSISDN
 * @constant
 * @type {number}
 */
export
const SMAddressType_mSISDN = SMAddressType.mSISDN satisfies SMAddressType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mSISDN
 * @constant
 * @type {number}
 */
export
const mSISDN = SMAddressType.mSISDN satisfies SMAddressType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMAddressType_iPv4Address
 * @constant
 * @type {number}
 */
export
const SMAddressType_iPv4Address = SMAddressType.iPv4Address satisfies SMAddressType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iPv4Address
 * @constant
 * @type {number}
 */
export
const iPv4Address = SMAddressType.iPv4Address satisfies SMAddressType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMAddressType_iPv6Address
 * @constant
 * @type {number}
 */
export
const SMAddressType_iPv6Address = SMAddressType.iPv6Address satisfies SMAddressType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iPv6Address
 * @constant
 * @type {number}
 */
export
const iPv6Address = SMAddressType.iPv6Address satisfies SMAddressType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMAddressType_numericShortCode
 * @constant
 * @type {number}
 */
export
const SMAddressType_numericShortCode = SMAddressType.numericShortCode satisfies SMAddressType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary numericShortCode
 * @constant
 * @type {number}
 */
export
const numericShortCode = SMAddressType.numericShortCode satisfies SMAddressType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMAddressType_alphanumericShortCode
 * @constant
 * @type {number}
 */
export
const SMAddressType_alphanumericShortCode = SMAddressType.alphanumericShortCode satisfies SMAddressType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alphanumericShortCode
 * @constant
 * @type {number}
 */
export
const alphanumericShortCode = SMAddressType.alphanumericShortCode satisfies SMAddressType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMAddressType_other
 * @constant
 * @type {number}
 */
export
const SMAddressType_other = SMAddressType.other satisfies SMAddressType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary other
 * @constant
 * @type {number}
 */
export
const other = SMAddressType.other satisfies SMAddressType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMAddressType_iMSI
 * @constant
 * @type {number}
 */
export
const SMAddressType_iMSI = SMAddressType.iMSI satisfies SMAddressType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iMSI
 * @constant
 * @type {number}
 */
export
const iMSI = SMAddressType.iMSI satisfies SMAddressType; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_SMAddressType: $.ASN1Decoder<SMAddressType> = $._decodeEnumerated;

export
const _encode_SMAddressType: $.ASN1Encoder<SMAddressType> = $._encodeEnumerated;

/* eslint-enable */
