/* eslint-disable */
import {
    BIT_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FeatureIdList
 * @description
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
 * @constant
 */
export
const FeatureIdList_reserved: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary reserved
 * @constant
 */
export
const reserved: number = FeatureIdList_reserved; /* SHORT_NAMED_BIT */

/**
 * @summary FeatureIdList_ssCFreRoutingSupported
 * @constant
 */
export
const FeatureIdList_ssCFreRoutingSupported: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary ssCFreRoutingSupported
 * @constant
 */
export
const ssCFreRoutingSupported: number = FeatureIdList_ssCFreRoutingSupported; /* SHORT_NAMED_BIT */

/**
 * @summary FeatureIdList_ssCTreRoutingSupported
 * @constant
 */
export
const FeatureIdList_ssCTreRoutingSupported: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary ssCTreRoutingSupported
 * @constant
 */
export
const ssCTreRoutingSupported: number = FeatureIdList_ssCTreRoutingSupported; /* SHORT_NAMED_BIT */

/**
 * @summary FeatureIdList_ssCCBSpossible
 * @constant
 */
export
const FeatureIdList_ssCCBSpossible: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary ssCCBSpossible
 * @constant
 */
export
const ssCCBSpossible: number = FeatureIdList_ssCCBSpossible; /* SHORT_NAMED_BIT */

/**
 * @summary FeatureIdList_ssCCNRpossible
 * @constant
 */
export
const FeatureIdList_ssCCNRpossible: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary ssCCNRpossible
 * @constant
 */
export
const ssCCNRpossible: number = FeatureIdList_ssCCNRpossible; /* SHORT_NAMED_BIT */

/**
 * @summary FeatureIdList_ssCOsupported
 * @constant
 */
export
const FeatureIdList_ssCOsupported: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary ssCOsupported
 * @constant
 */
export
const ssCOsupported: number = FeatureIdList_ssCOsupported; /* SHORT_NAMED_BIT */

/**
 * @summary FeatureIdList_ssCIforcedRelease
 * @constant
 */
export
const FeatureIdList_ssCIforcedRelease: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary ssCIforcedRelease
 * @constant
 */
export
const ssCIforcedRelease: number = FeatureIdList_ssCIforcedRelease; /* SHORT_NAMED_BIT */

/**
 * @summary FeatureIdList_ssCIisolation
 * @constant
 */
export
const FeatureIdList_ssCIisolation: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary ssCIisolation
 * @constant
 */
export
const ssCIisolation: number = FeatureIdList_ssCIisolation; /* SHORT_NAMED_BIT */

/**
 * @summary FeatureIdList_ssCIwaitOnBusy
 * @constant
 */
export
const FeatureIdList_ssCIwaitOnBusy: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary ssCIwaitOnBusy
 * @constant
 */
export
const ssCIwaitOnBusy: number = FeatureIdList_ssCIwaitOnBusy; /* SHORT_NAMED_BIT */

/**
 * @summary FeatureIdList_ssAOCsupportChargeRateProvAtGatewPinx
 * @constant
 */
export
const FeatureIdList_ssAOCsupportChargeRateProvAtGatewPinx: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary ssAOCsupportChargeRateProvAtGatewPinx
 * @constant
 */
export
const ssAOCsupportChargeRateProvAtGatewPinx: number = FeatureIdList_ssAOCsupportChargeRateProvAtGatewPinx; /* SHORT_NAMED_BIT */

/**
 * @summary FeatureIdList_ssAOCsupportInterimChargeProvAtGatewPinx
 * @constant
 */
export
const FeatureIdList_ssAOCsupportInterimChargeProvAtGatewPinx: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary ssAOCsupportInterimChargeProvAtGatewPinx
 * @constant
 */
export
const ssAOCsupportInterimChargeProvAtGatewPinx: number = FeatureIdList_ssAOCsupportInterimChargeProvAtGatewPinx; /* SHORT_NAMED_BIT */

/**
 * @summary FeatureIdList_ssAOCsupportFinalChargeProvAtGatewPinx
 * @constant
 */
export
const FeatureIdList_ssAOCsupportFinalChargeProvAtGatewPinx: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary ssAOCsupportFinalChargeProvAtGatewPinx
 * @constant
 */
export
const ssAOCsupportFinalChargeProvAtGatewPinx: number = FeatureIdList_ssAOCsupportFinalChargeProvAtGatewPinx; /* SHORT_NAMED_BIT */

/**
 * @summary FeatureIdList_anfPRsupportedAtCooperatingPinx
 * @constant
 */
export
const FeatureIdList_anfPRsupportedAtCooperatingPinx: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary anfPRsupportedAtCooperatingPinx
 * @constant
 */
export
const anfPRsupportedAtCooperatingPinx: number = FeatureIdList_anfPRsupportedAtCooperatingPinx; /* SHORT_NAMED_BIT */

/**
 * @summary FeatureIdList_anfCINTcanInterceptImmediate
 * @constant
 */
export
const FeatureIdList_anfCINTcanInterceptImmediate: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary anfCINTcanInterceptImmediate
 * @constant
 */
export
const anfCINTcanInterceptImmediate: number = FeatureIdList_anfCINTcanInterceptImmediate; /* SHORT_NAMED_BIT */

/**
 * @summary FeatureIdList_anfCINTcanInterceptDelayed
 * @constant
 */
export
const FeatureIdList_anfCINTcanInterceptDelayed: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary anfCINTcanInterceptDelayed
 * @constant
 */
export
const anfCINTcanInterceptDelayed: number = FeatureIdList_anfCINTcanInterceptDelayed; /* SHORT_NAMED_BIT */

/**
 * @summary FeatureIdList_anfWTMIreRoutingSupported
 * @constant
 */
export
const FeatureIdList_anfWTMIreRoutingSupported: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary anfWTMIreRoutingSupported
 * @constant
 */
export
const anfWTMIreRoutingSupported: number = FeatureIdList_anfWTMIreRoutingSupported; /* SHORT_NAMED_BIT */

/**
 * @summary FeatureIdList_anfPUMIreRoutingSupported
 * @constant
 */
export
const FeatureIdList_anfPUMIreRoutingSupported: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary anfPUMIreRoutingSupported
 * @constant
 */
export
const anfPUMIreRoutingSupported: number = FeatureIdList_anfPUMIreRoutingSupported; /* SHORT_NAMED_BIT */

/**
 * @summary FeatureIdList_ssSSCTreRoutingSupported
 * @constant
 */
export
const FeatureIdList_ssSSCTreRoutingSupported: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary ssSSCTreRoutingSupported
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
