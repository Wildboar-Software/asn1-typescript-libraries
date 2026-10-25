/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServingNodeType
 * @description
 *
 * These fields contain one or several serving node types in control plane of
 * S-GW or P-GW, which have been connected during the record. The serving
 * node types listed here map to the serving node addresses listed in the
 * field "Serving node Address" in sequence. For Originated and Terminated
 * SMS CDRs, this field contains the Node Type which generates the CDRs, i.e.
 * SGSN or MME.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.68.
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
 * These fields contain one or several serving node types in control plane of
 * S-GW or P-GW, which have been connected during the record. The serving
 * node types listed here map to the serving node addresses listed in the
 * field "Serving node Address" in sequence. For Originated and Terminated
 * SMS CDRs, this field contains the Node Type which generates the CDRs, i.e.
 * SGSN or MME.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.68.
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
 * These fields contain one or several serving node types in control plane of
 * S-GW or P-GW, which have been connected during the record. The serving
 * node types listed here map to the serving node addresses listed in the
 * field "Serving node Address" in sequence. For Originated and Terminated
 * SMS CDRs, this field contains the Node Type which generates the CDRs, i.e.
 * SGSN or MME.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.68.
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
const ServingNodeType_sGSN = ServingNodeType.sGSN satisfies ServingNodeType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sGSN
 * @constant
 * @type {number}
 */
export
const sGSN = ServingNodeType.sGSN satisfies ServingNodeType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ServingNodeType_pMIPSGW
 * @constant
 * @type {number}
 */
export
const ServingNodeType_pMIPSGW = ServingNodeType.pMIPSGW satisfies ServingNodeType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pMIPSGW
 * @constant
 * @type {number}
 */
export
const pMIPSGW = ServingNodeType.pMIPSGW satisfies ServingNodeType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ServingNodeType_gTPSGW
 * @constant
 * @type {number}
 */
export
const ServingNodeType_gTPSGW = ServingNodeType.gTPSGW satisfies ServingNodeType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gTPSGW
 * @constant
 * @type {number}
 */
export
const gTPSGW = ServingNodeType.gTPSGW satisfies ServingNodeType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ServingNodeType_ePDG
 * @constant
 * @type {number}
 */
export
const ServingNodeType_ePDG = ServingNodeType.ePDG satisfies ServingNodeType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ePDG
 * @constant
 * @type {number}
 */
export
const ePDG = ServingNodeType.ePDG satisfies ServingNodeType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ServingNodeType_hSGW
 * @constant
 * @type {number}
 */
export
const ServingNodeType_hSGW = ServingNodeType.hSGW satisfies ServingNodeType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hSGW
 * @constant
 * @type {number}
 */
export
const hSGW = ServingNodeType.hSGW satisfies ServingNodeType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ServingNodeType_mME
 * @constant
 * @type {number}
 */
export
const ServingNodeType_mME = ServingNodeType.mME satisfies ServingNodeType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mME
 * @constant
 * @type {number}
 */
export
const mME = ServingNodeType.mME satisfies ServingNodeType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ServingNodeType_tWAN
 * @constant
 * @type {number}
 */
export
const ServingNodeType_tWAN = ServingNodeType.tWAN satisfies ServingNodeType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tWAN
 * @constant
 * @type {number}
 */
export
const tWAN = ServingNodeType.tWAN satisfies ServingNodeType; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ServingNodeType: $.ASN1Decoder<ServingNodeType> = $._decodeEnumerated;

export
const _encode_ServingNodeType: $.ASN1Encoder<ServingNodeType> = $._encodeEnumerated;

/* eslint-enable */
