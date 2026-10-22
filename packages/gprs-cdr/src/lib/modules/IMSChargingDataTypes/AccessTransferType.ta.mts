/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AccessTransferType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessTransferType  ::=  ENUMERATED {
 *    pSToCS      ( 0 ),
 *    cSToPS      ( 1 ),
 *    pSToPS      ( 2 ),
 *    cSToCS      ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AccessTransferType {
    pSToCS = 0,
    cSToPS = 1,
    pSToPS = 2,
    cSToCS = 3,
}

/**
 * @summary AccessTransferType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessTransferType  ::=  ENUMERATED {
 *    pSToCS      ( 0 ),
 *    cSToPS      ( 1 ),
 *    pSToPS      ( 2 ),
 *    cSToCS      ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
type AccessTransferType = _enum_for_AccessTransferType;

/**
 * @summary AccessTransferType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessTransferType  ::=  ENUMERATED {
 *    pSToCS      ( 0 ),
 *    cSToPS      ( 1 ),
 *    pSToPS      ( 2 ),
 *    cSToCS      ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
const AccessTransferType = _enum_for_AccessTransferType;

/**
 * @summary AccessTransferType_pSToCS
 * @constant
 * @type {number}
 */
export
const AccessTransferType_pSToCS: AccessTransferType = AccessTransferType.pSToCS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pSToCS
 * @constant
 * @type {number}
 */
export
const pSToCS: AccessTransferType = AccessTransferType.pSToCS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessTransferType_cSToPS
 * @constant
 * @type {number}
 */
export
const AccessTransferType_cSToPS: AccessTransferType = AccessTransferType.cSToPS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cSToPS
 * @constant
 * @type {number}
 */
export
const cSToPS: AccessTransferType = AccessTransferType.cSToPS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessTransferType_pSToPS
 * @constant
 * @type {number}
 */
export
const AccessTransferType_pSToPS: AccessTransferType = AccessTransferType.pSToPS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pSToPS
 * @constant
 * @type {number}
 */
export
const pSToPS: AccessTransferType = AccessTransferType.pSToPS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessTransferType_cSToCS
 * @constant
 * @type {number}
 */
export
const AccessTransferType_cSToCS: AccessTransferType = AccessTransferType.cSToCS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cSToCS
 * @constant
 * @type {number}
 */
export
const cSToCS: AccessTransferType = AccessTransferType.cSToCS; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_AccessTransferType: $.ASN1Decoder<AccessTransferType> = $._decodeEnumerated;

export
const _encode_AccessTransferType: $.ASN1Encoder<AccessTransferType> = $._encodeEnumerated;

/* eslint-enable */
