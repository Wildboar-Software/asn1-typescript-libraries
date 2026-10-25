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
const ServingNodeType: typeof _enum_for_ServingNodeType = _enum_for_ServingNodeType;

/**
 * @summary ServingNodeType_sGSN
 * @constant
 * @type {number}
 */
export
const ServingNodeType_sGSN: _enum_for_ServingNodeType.sGSN = ServingNodeType.sGSN; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sGSN
 * @constant
 * @type {number}
 */
export
const sGSN: _enum_for_ServingNodeType.sGSN = ServingNodeType.sGSN; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ServingNodeType_pMIPSGW
 * @constant
 * @type {number}
 */
export
const ServingNodeType_pMIPSGW: _enum_for_ServingNodeType.pMIPSGW = ServingNodeType.pMIPSGW; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pMIPSGW
 * @constant
 * @type {number}
 */
export
const pMIPSGW: _enum_for_ServingNodeType.pMIPSGW = ServingNodeType.pMIPSGW; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ServingNodeType_gTPSGW
 * @constant
 * @type {number}
 */
export
const ServingNodeType_gTPSGW: _enum_for_ServingNodeType.gTPSGW = ServingNodeType.gTPSGW; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gTPSGW
 * @constant
 * @type {number}
 */
export
const gTPSGW: _enum_for_ServingNodeType.gTPSGW = ServingNodeType.gTPSGW; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ServingNodeType_ePDG
 * @constant
 * @type {number}
 */
export
const ServingNodeType_ePDG: _enum_for_ServingNodeType.ePDG = ServingNodeType.ePDG; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ePDG
 * @constant
 * @type {number}
 */
export
const ePDG: _enum_for_ServingNodeType.ePDG = ServingNodeType.ePDG; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ServingNodeType_hSGW
 * @constant
 * @type {number}
 */
export
const ServingNodeType_hSGW: _enum_for_ServingNodeType.hSGW = ServingNodeType.hSGW; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hSGW
 * @constant
 * @type {number}
 */
export
const hSGW: _enum_for_ServingNodeType.hSGW = ServingNodeType.hSGW; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ServingNodeType_mME
 * @constant
 * @type {number}
 */
export
const ServingNodeType_mME: _enum_for_ServingNodeType.mME = ServingNodeType.mME; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mME
 * @constant
 * @type {number}
 */
export
const mME: _enum_for_ServingNodeType.mME = ServingNodeType.mME; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ServingNodeType_tWAN
 * @constant
 * @type {number}
 */
export
const ServingNodeType_tWAN: _enum_for_ServingNodeType.tWAN = ServingNodeType.tWAN; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tWAN
 * @constant
 * @type {number}
 */
export
const tWAN: _enum_for_ServingNodeType.tWAN = ServingNodeType.tWAN; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ServingNodeType: $.ASN1Decoder<ServingNodeType> = $._decodeEnumerated;

export
const _encode_ServingNodeType: $.ASN1Encoder<ServingNodeType> = $._encodeEnumerated;

/* eslint-enable */
