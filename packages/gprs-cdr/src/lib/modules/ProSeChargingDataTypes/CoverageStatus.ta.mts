/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CoverageStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CoverageStatus  ::=  ENUMERATED {
 *    outOfCoverage    ( 0 ),
 *    inCoverage       ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CoverageStatus {
    outOfCoverage = 0,
    inCoverage = 1,
}

/**
 * @summary CoverageStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CoverageStatus  ::=  ENUMERATED {
 *    outOfCoverage    ( 0 ),
 *    inCoverage       ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
type CoverageStatus = _enum_for_CoverageStatus;

/**
 * @summary CoverageStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CoverageStatus  ::=  ENUMERATED {
 *    outOfCoverage    ( 0 ),
 *    inCoverage       ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
const CoverageStatus = _enum_for_CoverageStatus;

/**
 * @summary CoverageStatus_outOfCoverage
 * @constant
 * @type {number}
 */
export
const CoverageStatus_outOfCoverage: CoverageStatus = CoverageStatus.outOfCoverage; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary outOfCoverage
 * @constant
 * @type {number}
 */
export
const outOfCoverage: CoverageStatus = CoverageStatus.outOfCoverage; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CoverageStatus_inCoverage
 * @constant
 * @type {number}
 */
export
const CoverageStatus_inCoverage: CoverageStatus = CoverageStatus.inCoverage; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inCoverage
 * @constant
 * @type {number}
 */
export
const inCoverage: CoverageStatus = CoverageStatus.inCoverage; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_CoverageStatus: $.ASN1Decoder<CoverageStatus> = $._decodeEnumerated;

export
const _encode_CoverageStatus: $.ASN1Encoder<CoverageStatus> = $._encodeEnumerated;

/* eslint-enable */
