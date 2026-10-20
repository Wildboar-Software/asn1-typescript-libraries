/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServingNodeType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServingNodeType  ::=  ENUMERATED {
 *    sGSN        ( 0 ),
 *    pMIPSGW     ( 1 ),
 *    gTPSGW      ( 2 ),
 *    ePDG        ( 3 ),
 *    hSGW        ( 4 ),
 *    mME         ( 5 ),
 *    tWAN        ( 6 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ServingNodeType {
    sGSN = 0,
    pMIPSGW = 1,
    gTPSGW = 2,
    ePDG = 3,
    hSGW = 4,
    mME = 5,
    tWAN = 6,
}

/**
 * @summary ServingNodeType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServingNodeType  ::=  ENUMERATED {
 *    sGSN        ( 0 ),
 *    pMIPSGW     ( 1 ),
 *    gTPSGW      ( 2 ),
 *    ePDG        ( 3 ),
 *    hSGW        ( 4 ),
 *    mME         ( 5 ),
 *    tWAN        ( 6 ) }
 * ```
 * 
 * @enum {number}
 */
export
type ServingNodeType = _enum_for_ServingNodeType;

/**
 * @summary ServingNodeType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServingNodeType  ::=  ENUMERATED {
 *    sGSN        ( 0 ),
 *    pMIPSGW     ( 1 ),
 *    gTPSGW      ( 2 ),
 *    ePDG        ( 3 ),
 *    hSGW        ( 4 ),
 *    mME         ( 5 ),
 *    tWAN        ( 6 ) }
 * ```
 * 
 * @enum {number}
 */
export
const ServingNodeType = _enum_for_ServingNodeType;

/**
 * @summary ServingNodeType_sGSN
 * @constant
 * @type {number}
 */
export
const ServingNodeType_sGSN: ServingNodeType = ServingNodeType.sGSN; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sGSN
 * @constant
 * @type {number}
 */
export
const sGSN: ServingNodeType = ServingNodeType.sGSN; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ServingNodeType_pMIPSGW
 * @constant
 * @type {number}
 */
export
const ServingNodeType_pMIPSGW: ServingNodeType = ServingNodeType.pMIPSGW; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pMIPSGW
 * @constant
 * @type {number}
 */
export
const pMIPSGW: ServingNodeType = ServingNodeType.pMIPSGW; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ServingNodeType_gTPSGW
 * @constant
 * @type {number}
 */
export
const ServingNodeType_gTPSGW: ServingNodeType = ServingNodeType.gTPSGW; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gTPSGW
 * @constant
 * @type {number}
 */
export
const gTPSGW: ServingNodeType = ServingNodeType.gTPSGW; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ServingNodeType_ePDG
 * @constant
 * @type {number}
 */
export
const ServingNodeType_ePDG: ServingNodeType = ServingNodeType.ePDG; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ePDG
 * @constant
 * @type {number}
 */
export
const ePDG: ServingNodeType = ServingNodeType.ePDG; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ServingNodeType_hSGW
 * @constant
 * @type {number}
 */
export
const ServingNodeType_hSGW: ServingNodeType = ServingNodeType.hSGW; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hSGW
 * @constant
 * @type {number}
 */
export
const hSGW: ServingNodeType = ServingNodeType.hSGW; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ServingNodeType_mME
 * @constant
 * @type {number}
 */
export
const ServingNodeType_mME: ServingNodeType = ServingNodeType.mME; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mME
 * @constant
 * @type {number}
 */
export
const mME: ServingNodeType = ServingNodeType.mME; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ServingNodeType_tWAN
 * @constant
 * @type {number}
 */
export
const ServingNodeType_tWAN: ServingNodeType = ServingNodeType.tWAN; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tWAN
 * @constant
 * @type {number}
 */
export
const tWAN: ServingNodeType = ServingNodeType.tWAN; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ServingNodeType: $.ASN1Decoder<ServingNodeType> = $._decodeEnumerated;

export
const _encode_ServingNodeType: $.ASN1Encoder<ServingNodeType> = $._encodeEnumerated;

/* eslint-enable */
