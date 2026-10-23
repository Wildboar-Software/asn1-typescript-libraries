/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CoverageStatus
 * @description
 *
 * Whether the UE is served by E-UTRAN. Direct Communication usage is collected
 * separately for in-coverage and out-of-coverage periods. Out of coverage, the
 * UE stores usage reports in a secure environment and sends them when it
 * returns to E-UTRAN coverage.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.1.1, 5.1.2.3, and 6.1.3.4. Table 6.1.3.4.2.
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
 * Whether the UE is served by E-UTRAN. Direct Communication usage is collected
 * separately for in-coverage and out-of-coverage periods. Out of coverage, the
 * UE stores usage reports in a secure environment and sends them when it
 * returns to E-UTRAN coverage.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.1.1, 5.1.2.3, and 6.1.3.4. Table 6.1.3.4.2.
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
 * Whether the UE is served by E-UTRAN. Direct Communication usage is collected
 * separately for in-coverage and out-of-coverage periods. Out of coverage, the
 * UE stores usage reports in a secure environment and sends them when it
 * returns to E-UTRAN coverage.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.1.1, 5.1.2.3, and 6.1.3.4. Table 6.1.3.4.2.
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
 * @description
 *
 * The UE is not served by E-UTRAN. It uses pre-configured resources in the USIM
 * or ME for Public Safety Direct Communication, stores usage reports, and
 * uploads them after returning to coverage.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.1.1 and 5.2.2.3.3.
 *
 * @constant
 * @type {number}
 */
export
const CoverageStatus_outOfCoverage: CoverageStatus = CoverageStatus.outOfCoverage; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary outOfCoverage
 * @description
 *
 * Not served by E-UTRAN. See `CoverageStatus_outOfCoverage`.
 *
 * @constant
 * @type {number}
 */
export
const outOfCoverage: CoverageStatus = CoverageStatus.outOfCoverage; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CoverageStatus_inCoverage
 * @description
 *
 * The UE is served by E-UTRAN. Location changes recorded for this period are
 * ECGI changes.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.1.2.3 and 6.1.3.4.
 *
 * @constant
 * @type {number}
 */
export
const CoverageStatus_inCoverage: CoverageStatus = CoverageStatus.inCoverage; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inCoverage
 * @description
 *
 * Served by E-UTRAN. See `CoverageStatus_inCoverage`.
 *
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
