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
const SMAddressType: typeof _enum_for_SMAddressType = _enum_for_SMAddressType;

/**
 * @summary SMAddressType_emailAddress
 * @constant
 * @type {number}
 */
export
const SMAddressType_emailAddress: _enum_for_SMAddressType.emailAddress = SMAddressType.emailAddress; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary emailAddress
 * @constant
 * @type {number}
 */
export
const emailAddress: _enum_for_SMAddressType.emailAddress = SMAddressType.emailAddress; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMAddressType_mSISDN
 * @constant
 * @type {number}
 */
export
const SMAddressType_mSISDN: _enum_for_SMAddressType.mSISDN = SMAddressType.mSISDN; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mSISDN
 * @constant
 * @type {number}
 */
export
const mSISDN: _enum_for_SMAddressType.mSISDN = SMAddressType.mSISDN; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMAddressType_iPv4Address
 * @constant
 * @type {number}
 */
export
const SMAddressType_iPv4Address: _enum_for_SMAddressType.iPv4Address = SMAddressType.iPv4Address; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iPv4Address
 * @constant
 * @type {number}
 */
export
const iPv4Address: _enum_for_SMAddressType.iPv4Address = SMAddressType.iPv4Address; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMAddressType_iPv6Address
 * @constant
 * @type {number}
 */
export
const SMAddressType_iPv6Address: _enum_for_SMAddressType.iPv6Address = SMAddressType.iPv6Address; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iPv6Address
 * @constant
 * @type {number}
 */
export
const iPv6Address: _enum_for_SMAddressType.iPv6Address = SMAddressType.iPv6Address; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMAddressType_numericShortCode
 * @constant
 * @type {number}
 */
export
const SMAddressType_numericShortCode: _enum_for_SMAddressType.numericShortCode = SMAddressType.numericShortCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary numericShortCode
 * @constant
 * @type {number}
 */
export
const numericShortCode: _enum_for_SMAddressType.numericShortCode = SMAddressType.numericShortCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMAddressType_alphanumericShortCode
 * @constant
 * @type {number}
 */
export
const SMAddressType_alphanumericShortCode: _enum_for_SMAddressType.alphanumericShortCode = SMAddressType.alphanumericShortCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alphanumericShortCode
 * @constant
 * @type {number}
 */
export
const alphanumericShortCode: _enum_for_SMAddressType.alphanumericShortCode = SMAddressType.alphanumericShortCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMAddressType_other
 * @constant
 * @type {number}
 */
export
const SMAddressType_other: _enum_for_SMAddressType.other = SMAddressType.other; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary other
 * @constant
 * @type {number}
 */
export
const other: _enum_for_SMAddressType.other = SMAddressType.other; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMAddressType_iMSI
 * @constant
 * @type {number}
 */
export
const SMAddressType_iMSI: _enum_for_SMAddressType.iMSI = SMAddressType.iMSI; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iMSI
 * @constant
 * @type {number}
 */
export
const iMSI: _enum_for_SMAddressType.iMSI = SMAddressType.iMSI; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_SMAddressType: $.ASN1Decoder<SMAddressType> = $._decodeEnumerated;

export
const _encode_SMAddressType: $.ASN1Encoder<SMAddressType> = $._encodeEnumerated;

/* eslint-enable */
