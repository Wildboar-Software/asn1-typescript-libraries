/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSCSFallbackIndicator
 * @description
 * 
 * The EPSCSFallbackIndicator indicates that a fallback to the CS domain is
 * required and the type of fallback requested. Derived from the enumerations in
 * TS 36.413 [38] clause 9.2.3.21.
 *
 * 3GPP TS 33.128, clause 6.3.2.2A.19.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSCSFallbackIndicator  ::=  ENUMERATED
 * {
 *     cSFallbackRequired(1),
 *     cSFallbackHighPriority(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_EPSCSFallbackIndicator {
    /**
     * @description
     *
     * Fallback to the CS domain is required.
     *
     * 3GPP TS 33.128, clause 6.3.2.2A.19.
     */
    cSFallbackRequired = 1,
    /**
     * @description
     *
     * A high priority fallback to the CS domain is required.
     *
     * 3GPP TS 33.128, clause 6.3.2.2A.19.
     */
    cSFallbackHighPriority = 2,
}

/**
 * @summary EPSCSFallbackIndicator
 * @description
 * 
 * The EPSCSFallbackIndicator indicates that a fallback to the CS domain is
 * required and the type of fallback requested. Derived from the enumerations in
 * TS 36.413 [38] clause 9.2.3.21.
 *
 * 3GPP TS 33.128, clause 6.3.2.2A.19.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSCSFallbackIndicator  ::=  ENUMERATED
 * {
 *     cSFallbackRequired(1),
 *     cSFallbackHighPriority(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type EPSCSFallbackIndicator = _enum_for_EPSCSFallbackIndicator;

/**
 * @summary EPSCSFallbackIndicator
 * @description
 * 
 * The EPSCSFallbackIndicator indicates that a fallback to the CS domain is
 * required and the type of fallback requested. Derived from the enumerations in
 * TS 36.413 [38] clause 9.2.3.21.
 *
 * 3GPP TS 33.128, clause 6.3.2.2A.19.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSCSFallbackIndicator  ::=  ENUMERATED
 * {
 *     cSFallbackRequired(1),
 *     cSFallbackHighPriority(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const EPSCSFallbackIndicator = _enum_for_EPSCSFallbackIndicator;

/**
 * @summary EPSCSFallbackIndicator_cSFallbackRequired
 * @description
 *
 * Fallback to the CS domain is required.
 *
 * 3GPP TS 33.128, clause 6.3.2.2A.19.
 *
 * @constant
 * @type {number}
 */
export
const EPSCSFallbackIndicator_cSFallbackRequired: EPSCSFallbackIndicator = EPSCSFallbackIndicator.cSFallbackRequired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cSFallbackRequired
 * @description
 *
 * Fallback to the CS domain is required.
 *
 * 3GPP TS 33.128, clause 6.3.2.2A.19.
 *
 * @constant
 * @type {number}
 */
export
const cSFallbackRequired: EPSCSFallbackIndicator = EPSCSFallbackIndicator.cSFallbackRequired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSCSFallbackIndicator_cSFallbackHighPriority
 * @description
 *
 * A high priority fallback to the CS domain is required.
 *
 * 3GPP TS 33.128, clause 6.3.2.2A.19.
 *
 * @constant
 * @type {number}
 */
export
const EPSCSFallbackIndicator_cSFallbackHighPriority: EPSCSFallbackIndicator = EPSCSFallbackIndicator.cSFallbackHighPriority; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cSFallbackHighPriority
 * @description
 *
 * A high priority fallback to the CS domain is required.
 *
 * 3GPP TS 33.128, clause 6.3.2.2A.19.
 *
 * @constant
 * @type {number}
 */
export
const cSFallbackHighPriority: EPSCSFallbackIndicator = EPSCSFallbackIndicator.cSFallbackHighPriority; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_EPSCSFallbackIndicator: $.ASN1Decoder<EPSCSFallbackIndicator> = $._decodeEnumerated;
export const _encode_EPSCSFallbackIndicator: $.ASN1Encoder<EPSCSFallbackIndicator> = $._encodeEnumerated;


/* eslint-enable */
