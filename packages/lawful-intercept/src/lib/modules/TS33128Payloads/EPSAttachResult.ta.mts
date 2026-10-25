/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSAttachResult
 * @description
 * 
 * The EPSAttachResult provides information on the attach type used by the UE.
 * Derived from the enumerations in TS 24.301 [51] clause 9.9.3.10.
 *
 * 3GPP TS 33.128, clause 8.5.6.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSAttachResult  ::=  ENUMERATED
 * {
 *     ePSOnly(1),
 *     combinedEPSIMSI(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_EPSAttachResult {
    /**
     * @description
     *
     * The attach type is an EPS attach.
     *
     * 3GPP TS 33.128, clause 8.5.6.
     */
    ePSOnly = 1,
    /**
     * @description
     *
     * The attach type is a combined EPS/IMSI attach.
     *
     * 3GPP TS 33.128, clause 8.5.6.
     */
    combinedEPSIMSI = 2,
}

/**
 * @summary EPSAttachResult
 * @description
 * 
 * The EPSAttachResult provides information on the attach type used by the UE.
 * Derived from the enumerations in TS 24.301 [51] clause 9.9.3.10.
 *
 * 3GPP TS 33.128, clause 8.5.6.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSAttachResult  ::=  ENUMERATED
 * {
 *     ePSOnly(1),
 *     combinedEPSIMSI(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type EPSAttachResult = _enum_for_EPSAttachResult;

/**
 * @summary EPSAttachResult
 * @description
 * 
 * The EPSAttachResult provides information on the attach type used by the UE.
 * Derived from the enumerations in TS 24.301 [51] clause 9.9.3.10.
 *
 * 3GPP TS 33.128, clause 8.5.6.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSAttachResult  ::=  ENUMERATED
 * {
 *     ePSOnly(1),
 *     combinedEPSIMSI(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const EPSAttachResult = _enum_for_EPSAttachResult;

/**
 * @summary EPSAttachResult_ePSOnly
 * @description
 *
 * The attach type is an EPS attach.
 *
 * 3GPP TS 33.128, clause 8.5.6.
 *
 * @constant
 * @type {number}
 */
export
const EPSAttachResult_ePSOnly = EPSAttachResult.ePSOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ePSOnly
 * @description
 *
 * The attach type is an EPS attach.
 *
 * 3GPP TS 33.128, clause 8.5.6.
 *
 * @constant
 * @type {number}
 */
export
const ePSOnly = EPSAttachResult.ePSOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSAttachResult_combinedEPSIMSI
 * @description
 *
 * The attach type is a combined EPS/IMSI attach.
 *
 * 3GPP TS 33.128, clause 8.5.6.
 *
 * @constant
 * @type {number}
 */
export
const EPSAttachResult_combinedEPSIMSI = EPSAttachResult.combinedEPSIMSI; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary combinedEPSIMSI
 * @description
 *
 * The attach type is a combined EPS/IMSI attach.
 *
 * 3GPP TS 33.128, clause 8.5.6.
 *
 * @constant
 * @type {number}
 */
export
const combinedEPSIMSI = EPSAttachResult.combinedEPSIMSI; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_EPSAttachResult: $.ASN1Decoder<EPSAttachResult> = $._decodeEnumerated;
export const _encode_EPSAttachResult: $.ASN1Encoder<EPSAttachResult> = $._encodeEnumerated;


/* eslint-enable */
