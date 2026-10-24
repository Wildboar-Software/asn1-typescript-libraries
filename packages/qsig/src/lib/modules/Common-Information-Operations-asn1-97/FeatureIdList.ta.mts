/* eslint-disable */
import {
    type BIT_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary FeatureIdList
 * @description
 *
 * Features available for this call (ECMA-251 §6.3.1). A bit set to ONE means
 * that feature is available. The bit string length is 1..64. Bits other than
 * those named here are not defined by ECMA-251. This module contains only
 * the identifiers defined in ECMA-251 §6.3.1.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-251/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FeatureIdList  ::=  BIT STRING {
 *     -- bit set to ONE means the corresponding feature
 *     -- is available for this call
 *     reserved(0), -- this Bit shall be reserved
 *     ssCFreRoutingSupported(1), -- Call Forwarding rerouting supported
 *     -- meaningful only in forward direction
 *     -- during call establishment
 *     ssCTreRoutingSupported(2), -- Call Transfer rerouting supported
 *     -- meaningful both in forward & backward
 *     -- direction during call establishment
 *     ssCCBSpossible(3), -- CCBS possible
 *     -- meaningful only in backward direction
 *     -- before receipt of ALERTING/CONNECT
 *     ssCCNRpossible(4), -- CCNR possible
 *     -- meaningful only in backward direction
 *     -- before receipt of CONNECT
 *     ssCOsupported(5), -- Call Offer supported
 *     -- meaningful only in backward direction
 *     -- during call establishment
 * 
 *     -- Call Intrusion
 *     ssCIforcedRelease(6), -- meaningful only in backward direction
 *     ssCIisolation(7), -- meaningful only in backward direction
 *     ssCIwaitOnBusy(8), -- meaningful only in backward direction
 *     -- Advice of Charge
 *     ssAOCsupportChargeRateProvAtGatewPinx(9), -- meaningful only in
 *     -- backward direction
 *     ssAOCsupportInterimChargeProvAtGatewPinx(10), -- meaningful only in
 *     -- backward direction
 *     ssAOCsupportFinalChargeProvAtGatewPinx(11), -- meaningful only in
 *     -- backward direction
 *     anfPRsupportedAtCooperatingPinx(12), -- Path replacement
 *     -- meaningful both in forward &
 *     -- backward direction
 * 
 *     -- Call Interception
 *     anfCINTcanInterceptImmediate(13), -- meaningful only in
 *     -- forward direction
 *     anfCINTcanInterceptDelayed(14), -- meaningful only in
 *     -- forward direction
 *     anfWTMIreRoutingSupported(15), -- Incoming WTM call
 *     -- meaningful only in
 *     -- forward direction
 *     anfPUMIreRoutingSupported(16), -- Incoming PUM call
 *     -- meaningful only in
 *     -- forward direction
 *     ssSSCTreRoutingSupported(17) -- Single Step Call Transfer rerouting
 *     -- supported
 *     -- meaningful both in forward and
 *     -- backward direction during call
 *     -- establishment
 * } (SIZE(1..64))
 * ```
 */
export
type FeatureIdList = BIT_STRING;

/**
 * @summary FeatureIdList_reserved
 * @description
 *
 * Bit 0. Reserved. ECMA-251 §6.3.1 says this bit shall be reserved. It is
 * not a feature identifier.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-251/
 */
export
const FeatureIdList_reserved: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary reserved
 * @description Alias of {@link FeatureIdList_reserved}.
 * @constant
 */
export
const reserved: number = FeatureIdList_reserved; /* SHORT_NAMED_BIT */

/**
 * @summary FeatureIdList_ssCFreRoutingSupported
 * @description
 *
 * Bit 1. Call Forwarding rerouting is supported. Meaningful only in the
 * forward direction during call establishment (ECMA-251 §6.3.1).
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-251/
 */
export
const FeatureIdList_ssCFreRoutingSupported: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary ssCFreRoutingSupported
 * @description Alias of {@link FeatureIdList_ssCFreRoutingSupported}.
 * @constant
 */
export
const ssCFreRoutingSupported: number = FeatureIdList_ssCFreRoutingSupported; /* SHORT_NAMED_BIT */

/**
 * @summary FeatureIdList_ssCTreRoutingSupported
 * @description
 *
 * Bit 2. Call Transfer rerouting is supported. Meaningful in both directions
 * during call establishment (ECMA-251 §6.3.1).
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-251/
 */
export
const FeatureIdList_ssCTreRoutingSupported: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary ssCTreRoutingSupported
 * @description Alias of {@link FeatureIdList_ssCTreRoutingSupported}.
 * @constant
 */
export
const ssCTreRoutingSupported: number = FeatureIdList_ssCTreRoutingSupported; /* SHORT_NAMED_BIT */

/**
 * @summary FeatureIdList_ssCCBSpossible
 * @description
 *
 * Bit 3. Call Completion to a Busy Subscriber is possible. Meaningful only
 * in the backward direction, before receipt of ALERTING or CONNECT (ECMA-251
 * §6.3.1).
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-251/
 */
export
const FeatureIdList_ssCCBSpossible: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary ssCCBSpossible
 * @description Alias of {@link FeatureIdList_ssCCBSpossible}.
 * @constant
 */
export
const ssCCBSpossible: number = FeatureIdList_ssCCBSpossible; /* SHORT_NAMED_BIT */

/**
 * @summary FeatureIdList_ssCCNRpossible
 * @description
 *
 * Bit 4. Call Completion on No Reply is possible. Meaningful only in the
 * backward direction, before receipt of CONNECT (ECMA-251 §6.3.1).
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-251/
 */
export
const FeatureIdList_ssCCNRpossible: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary ssCCNRpossible
 * @description Alias of {@link FeatureIdList_ssCCNRpossible}.
 * @constant
 */
export
const ssCCNRpossible: number = FeatureIdList_ssCCNRpossible; /* SHORT_NAMED_BIT */

/**
 * @summary FeatureIdList_ssCOsupported
 * @description
 *
 * Bit 5. Call Offer is supported. Meaningful only in the backward direction
 * during call establishment (ECMA-251 §6.3.1).
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-251/
 */
export
const FeatureIdList_ssCOsupported: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary ssCOsupported
 * @description Alias of {@link FeatureIdList_ssCOsupported}.
 * @constant
 */
export
const ssCOsupported: number = FeatureIdList_ssCOsupported; /* SHORT_NAMED_BIT */

/**
 * @summary FeatureIdList_ssCIforcedRelease
 * @description
 *
 * Bit 6. Call Intrusion with forced release. Meaningful only in the backward
 * direction (ECMA-251 §6.3.1).
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-251/
 */
export
const FeatureIdList_ssCIforcedRelease: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary ssCIforcedRelease
 * @description Alias of {@link FeatureIdList_ssCIforcedRelease}.
 * @constant
 */
export
const ssCIforcedRelease: number = FeatureIdList_ssCIforcedRelease; /* SHORT_NAMED_BIT */

/**
 * @summary FeatureIdList_ssCIisolation
 * @description
 *
 * Bit 7. Call Intrusion with isolation. Meaningful only in the backward
 * direction (ECMA-251 §6.3.1).
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-251/
 */
export
const FeatureIdList_ssCIisolation: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary ssCIisolation
 * @description Alias of {@link FeatureIdList_ssCIisolation}.
 * @constant
 */
export
const ssCIisolation: number = FeatureIdList_ssCIisolation; /* SHORT_NAMED_BIT */

/**
 * @summary FeatureIdList_ssCIwaitOnBusy
 * @description
 *
 * Bit 8. Call Intrusion with wait-on-busy. Meaningful only in the backward
 * direction (ECMA-251 §6.3.1).
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-251/
 */
export
const FeatureIdList_ssCIwaitOnBusy: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary ssCIwaitOnBusy
 * @description Alias of {@link FeatureIdList_ssCIwaitOnBusy}.
 * @constant
 */
export
const ssCIwaitOnBusy: number = FeatureIdList_ssCIwaitOnBusy; /* SHORT_NAMED_BIT */

/**
 * @summary FeatureIdList_ssAOCsupportChargeRateProvAtGatewPinx
 * @description
 *
 * Bit 9. Advice of Charge can provide the charge rate at the gateway PINX.
 * Meaningful only in the backward direction (ECMA-251 §6.3.1).
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-251/
 */
export
const FeatureIdList_ssAOCsupportChargeRateProvAtGatewPinx: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary ssAOCsupportChargeRateProvAtGatewPinx
 * @description
 * Alias of {@link FeatureIdList_ssAOCsupportChargeRateProvAtGatewPinx}.
 * @constant
 */
export
const ssAOCsupportChargeRateProvAtGatewPinx: number = FeatureIdList_ssAOCsupportChargeRateProvAtGatewPinx; /* SHORT_NAMED_BIT */

/**
 * @summary FeatureIdList_ssAOCsupportInterimChargeProvAtGatewPinx
 * @description
 *
 * Bit 10. Advice of Charge can provide an interim charge at the gateway
 * PINX. Meaningful only in the backward direction (ECMA-251 §6.3.1).
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-251/
 */
export
const FeatureIdList_ssAOCsupportInterimChargeProvAtGatewPinx: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary ssAOCsupportInterimChargeProvAtGatewPinx
 * @description
 * Alias of {@link FeatureIdList_ssAOCsupportInterimChargeProvAtGatewPinx}.
 * @constant
 */
export
const ssAOCsupportInterimChargeProvAtGatewPinx: number = FeatureIdList_ssAOCsupportInterimChargeProvAtGatewPinx; /* SHORT_NAMED_BIT */

/**
 * @summary FeatureIdList_ssAOCsupportFinalChargeProvAtGatewPinx
 * @description
 *
 * Bit 11. Advice of Charge can provide the final charge at the gateway PINX.
 * Meaningful only in the backward direction (ECMA-251 §6.3.1).
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-251/
 */
export
const FeatureIdList_ssAOCsupportFinalChargeProvAtGatewPinx: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary ssAOCsupportFinalChargeProvAtGatewPinx
 * @description
 * Alias of {@link FeatureIdList_ssAOCsupportFinalChargeProvAtGatewPinx}.
 * @constant
 */
export
const ssAOCsupportFinalChargeProvAtGatewPinx: number = FeatureIdList_ssAOCsupportFinalChargeProvAtGatewPinx; /* SHORT_NAMED_BIT */

/**
 * @summary FeatureIdList_anfPRsupportedAtCooperatingPinx
 * @description
 *
 * Bit 12. Path replacement is supported at the cooperating PINX. Meaningful
 * in both directions (ECMA-251 §6.3.1).
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-251/
 */
export
const FeatureIdList_anfPRsupportedAtCooperatingPinx: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary anfPRsupportedAtCooperatingPinx
 * @description Alias of {@link FeatureIdList_anfPRsupportedAtCooperatingPinx}.
 * @constant
 */
export
const anfPRsupportedAtCooperatingPinx: number = FeatureIdList_anfPRsupportedAtCooperatingPinx; /* SHORT_NAMED_BIT */

/**
 * @summary FeatureIdList_anfCINTcanInterceptImmediate
 * @description
 *
 * Bit 13. ANF-CINT can perform interception immediate. Meaningful only in
 * the forward direction (ECMA-251 §6.3.1).
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-251/
 */
export
const FeatureIdList_anfCINTcanInterceptImmediate: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary anfCINTcanInterceptImmediate
 * @description Alias of {@link FeatureIdList_anfCINTcanInterceptImmediate}.
 * @constant
 */
export
const anfCINTcanInterceptImmediate: number = FeatureIdList_anfCINTcanInterceptImmediate; /* SHORT_NAMED_BIT */

/**
 * @summary FeatureIdList_anfCINTcanInterceptDelayed
 * @description
 *
 * Bit 14. ANF-CINT can perform interception delayed. Meaningful only in the
 * forward direction (ECMA-251 §6.3.1).
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-251/
 */
export
const FeatureIdList_anfCINTcanInterceptDelayed: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary anfCINTcanInterceptDelayed
 * @description Alias of {@link FeatureIdList_anfCINTcanInterceptDelayed}.
 * @constant
 */
export
const anfCINTcanInterceptDelayed: number = FeatureIdList_anfCINTcanInterceptDelayed; /* SHORT_NAMED_BIT */

/**
 * @summary FeatureIdList_anfWTMIreRoutingSupported
 * @description
 *
 * Bit 15. Incoming Wireless Terminal Mobility call rerouting is supported.
 * Meaningful only in the forward direction (ECMA-251 §6.3.1).
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-251/
 */
export
const FeatureIdList_anfWTMIreRoutingSupported: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary anfWTMIreRoutingSupported
 * @description Alias of {@link FeatureIdList_anfWTMIreRoutingSupported}.
 * @constant
 */
export
const anfWTMIreRoutingSupported: number = FeatureIdList_anfWTMIreRoutingSupported; /* SHORT_NAMED_BIT */

/**
 * @summary FeatureIdList_anfPUMIreRoutingSupported
 * @description
 *
 * Bit 16. Incoming Private User Mobility call rerouting is supported.
 * Meaningful only in the forward direction (ECMA-251 §6.3.1).
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-251/
 */
export
const FeatureIdList_anfPUMIreRoutingSupported: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary anfPUMIreRoutingSupported
 * @description Alias of {@link FeatureIdList_anfPUMIreRoutingSupported}.
 * @constant
 */
export
const anfPUMIreRoutingSupported: number = FeatureIdList_anfPUMIreRoutingSupported; /* SHORT_NAMED_BIT */

/**
 * @summary FeatureIdList_ssSSCTreRoutingSupported
 * @description
 *
 * Bit 17. Single Step Call Transfer rerouting is supported. Meaningful in
 * both directions during call establishment (ECMA-251 §6.3.1).
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-251/
 */
export
const FeatureIdList_ssSSCTreRoutingSupported: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary ssSSCTreRoutingSupported
 * @description Alias of {@link FeatureIdList_ssSSCTreRoutingSupported}.
 * @constant
 */
export
const ssSSCTreRoutingSupported: number = FeatureIdList_ssSSCTreRoutingSupported; /* SHORT_NAMED_BIT */

export
const _decode_FeatureIdList = (el: _Element): FeatureIdList => {
    const value = $._decodeBitString(el);
    if (value.length < 1 || value.length > 64) {
        throw new ASN1SizeError("FeatureIdList violates SIZE constraint");
    }
    return value;
};

export
const _encode_FeatureIdList: $.ASN1Encoder<FeatureIdList> = $._encodeBitString;

/* eslint-enable */
