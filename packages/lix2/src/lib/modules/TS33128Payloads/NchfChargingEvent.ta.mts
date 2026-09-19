/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NchfChargingEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NchfChargingEvent  ::=  ENUMERATED
 * {
 *     pDUSessionChargingInformation(1),
 *     sMSChargingInformation(2),
 *     nEFChargingInformation(3),
 *     registrationChargingInformation(4),
 *     n2ConnectionChargingInformation(5),
 *     locationReportingChargingInformation(6),
 *     nSPAChargingInformation(7),
 *     nSMChargingInformation(8),
 *     mMTelChargingInformation(9),
 *     iMSChargingInformation(10),
 *     edgeInfrastructureUsageChargingInformation(11),
 *     eASDeploymentChargingInformation(12),
 *     directEdgeEnablingServiceChargingInformation(13),
 *     exposedEdgeEnablingServiceChargingInformation(14),
 *     proSeChargingInformation(15),
 *     mMSChargingInformation(16),
 *     mBSSessionChargingInformation(17),
 *     tSNChargingInformation(18),
 *     nSACFChargingInformation(19),
 *     nSSAAChargingInformation(20),
 *     rangingSLChargingInformation(21)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_NchfChargingEvent {
    pDUSessionChargingInformation = 1,
    sMSChargingInformation = 2,
    nEFChargingInformation = 3,
    registrationChargingInformation = 4,
    n2ConnectionChargingInformation = 5,
    locationReportingChargingInformation = 6,
    nSPAChargingInformation = 7,
    nSMChargingInformation = 8,
    mMTelChargingInformation = 9,
    iMSChargingInformation = 10,
    edgeInfrastructureUsageChargingInformation = 11,
    eASDeploymentChargingInformation = 12,
    directEdgeEnablingServiceChargingInformation = 13,
    exposedEdgeEnablingServiceChargingInformation = 14,
    proSeChargingInformation = 15,
    mMSChargingInformation = 16,
    mBSSessionChargingInformation = 17,
    tSNChargingInformation = 18,
    nSACFChargingInformation = 19,
    nSSAAChargingInformation = 20,
    rangingSLChargingInformation = 21,
}

/**
 * @summary NchfChargingEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NchfChargingEvent  ::=  ENUMERATED
 * {
 *     pDUSessionChargingInformation(1),
 *     sMSChargingInformation(2),
 *     nEFChargingInformation(3),
 *     registrationChargingInformation(4),
 *     n2ConnectionChargingInformation(5),
 *     locationReportingChargingInformation(6),
 *     nSPAChargingInformation(7),
 *     nSMChargingInformation(8),
 *     mMTelChargingInformation(9),
 *     iMSChargingInformation(10),
 *     edgeInfrastructureUsageChargingInformation(11),
 *     eASDeploymentChargingInformation(12),
 *     directEdgeEnablingServiceChargingInformation(13),
 *     exposedEdgeEnablingServiceChargingInformation(14),
 *     proSeChargingInformation(15),
 *     mMSChargingInformation(16),
 *     mBSSessionChargingInformation(17),
 *     tSNChargingInformation(18),
 *     nSACFChargingInformation(19),
 *     nSSAAChargingInformation(20),
 *     rangingSLChargingInformation(21)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type NchfChargingEvent = _enum_for_NchfChargingEvent;

/**
 * @summary NchfChargingEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NchfChargingEvent  ::=  ENUMERATED
 * {
 *     pDUSessionChargingInformation(1),
 *     sMSChargingInformation(2),
 *     nEFChargingInformation(3),
 *     registrationChargingInformation(4),
 *     n2ConnectionChargingInformation(5),
 *     locationReportingChargingInformation(6),
 *     nSPAChargingInformation(7),
 *     nSMChargingInformation(8),
 *     mMTelChargingInformation(9),
 *     iMSChargingInformation(10),
 *     edgeInfrastructureUsageChargingInformation(11),
 *     eASDeploymentChargingInformation(12),
 *     directEdgeEnablingServiceChargingInformation(13),
 *     exposedEdgeEnablingServiceChargingInformation(14),
 *     proSeChargingInformation(15),
 *     mMSChargingInformation(16),
 *     mBSSessionChargingInformation(17),
 *     tSNChargingInformation(18),
 *     nSACFChargingInformation(19),
 *     nSSAAChargingInformation(20),
 *     rangingSLChargingInformation(21)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const NchfChargingEvent = _enum_for_NchfChargingEvent;

/**
 * @summary NchfChargingEvent_pDUSessionChargingInformation
 * @constant
 * @type {number}
 */
export
const NchfChargingEvent_pDUSessionChargingInformation: NchfChargingEvent = NchfChargingEvent.pDUSessionChargingInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDUSessionChargingInformation
 * @constant
 * @type {number}
 */
export
const pDUSessionChargingInformation: NchfChargingEvent = NchfChargingEvent.pDUSessionChargingInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NchfChargingEvent_sMSChargingInformation
 * @constant
 * @type {number}
 */
export
const NchfChargingEvent_sMSChargingInformation: NchfChargingEvent = NchfChargingEvent.sMSChargingInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMSChargingInformation
 * @constant
 * @type {number}
 */
export
const sMSChargingInformation: NchfChargingEvent = NchfChargingEvent.sMSChargingInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NchfChargingEvent_nEFChargingInformation
 * @constant
 * @type {number}
 */
export
const NchfChargingEvent_nEFChargingInformation: NchfChargingEvent = NchfChargingEvent.nEFChargingInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nEFChargingInformation
 * @constant
 * @type {number}
 */
export
const nEFChargingInformation: NchfChargingEvent = NchfChargingEvent.nEFChargingInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NchfChargingEvent_registrationChargingInformation
 * @constant
 * @type {number}
 */
export
const NchfChargingEvent_registrationChargingInformation: NchfChargingEvent = NchfChargingEvent.registrationChargingInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary registrationChargingInformation
 * @constant
 * @type {number}
 */
export
const registrationChargingInformation: NchfChargingEvent = NchfChargingEvent.registrationChargingInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NchfChargingEvent_n2ConnectionChargingInformation
 * @constant
 * @type {number}
 */
export
const NchfChargingEvent_n2ConnectionChargingInformation: NchfChargingEvent = NchfChargingEvent.n2ConnectionChargingInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary n2ConnectionChargingInformation
 * @constant
 * @type {number}
 */
export
const n2ConnectionChargingInformation: NchfChargingEvent = NchfChargingEvent.n2ConnectionChargingInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NchfChargingEvent_locationReportingChargingInformation
 * @constant
 * @type {number}
 */
export
const NchfChargingEvent_locationReportingChargingInformation: NchfChargingEvent = NchfChargingEvent.locationReportingChargingInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary locationReportingChargingInformation
 * @constant
 * @type {number}
 */
export
const locationReportingChargingInformation: NchfChargingEvent = NchfChargingEvent.locationReportingChargingInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NchfChargingEvent_nSPAChargingInformation
 * @constant
 * @type {number}
 */
export
const NchfChargingEvent_nSPAChargingInformation: NchfChargingEvent = NchfChargingEvent.nSPAChargingInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nSPAChargingInformation
 * @constant
 * @type {number}
 */
export
const nSPAChargingInformation: NchfChargingEvent = NchfChargingEvent.nSPAChargingInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NchfChargingEvent_nSMChargingInformation
 * @constant
 * @type {number}
 */
export
const NchfChargingEvent_nSMChargingInformation: NchfChargingEvent = NchfChargingEvent.nSMChargingInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nSMChargingInformation
 * @constant
 * @type {number}
 */
export
const nSMChargingInformation: NchfChargingEvent = NchfChargingEvent.nSMChargingInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NchfChargingEvent_mMTelChargingInformation
 * @constant
 * @type {number}
 */
export
const NchfChargingEvent_mMTelChargingInformation: NchfChargingEvent = NchfChargingEvent.mMTelChargingInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mMTelChargingInformation
 * @constant
 * @type {number}
 */
export
const mMTelChargingInformation: NchfChargingEvent = NchfChargingEvent.mMTelChargingInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NchfChargingEvent_iMSChargingInformation
 * @constant
 * @type {number}
 */
export
const NchfChargingEvent_iMSChargingInformation: NchfChargingEvent = NchfChargingEvent.iMSChargingInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iMSChargingInformation
 * @constant
 * @type {number}
 */
export
const iMSChargingInformation: NchfChargingEvent = NchfChargingEvent.iMSChargingInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NchfChargingEvent_edgeInfrastructureUsageChargingInformation
 * @constant
 * @type {number}
 */
export
const NchfChargingEvent_edgeInfrastructureUsageChargingInformation: NchfChargingEvent = NchfChargingEvent.edgeInfrastructureUsageChargingInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary edgeInfrastructureUsageChargingInformation
 * @constant
 * @type {number}
 */
export
const edgeInfrastructureUsageChargingInformation: NchfChargingEvent = NchfChargingEvent.edgeInfrastructureUsageChargingInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NchfChargingEvent_eASDeploymentChargingInformation
 * @constant
 * @type {number}
 */
export
const NchfChargingEvent_eASDeploymentChargingInformation: NchfChargingEvent = NchfChargingEvent.eASDeploymentChargingInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eASDeploymentChargingInformation
 * @constant
 * @type {number}
 */
export
const eASDeploymentChargingInformation: NchfChargingEvent = NchfChargingEvent.eASDeploymentChargingInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NchfChargingEvent_directEdgeEnablingServiceChargingInformation
 * @constant
 * @type {number}
 */
export
const NchfChargingEvent_directEdgeEnablingServiceChargingInformation: NchfChargingEvent = NchfChargingEvent.directEdgeEnablingServiceChargingInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary directEdgeEnablingServiceChargingInformation
 * @constant
 * @type {number}
 */
export
const directEdgeEnablingServiceChargingInformation: NchfChargingEvent = NchfChargingEvent.directEdgeEnablingServiceChargingInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NchfChargingEvent_exposedEdgeEnablingServiceChargingInformation
 * @constant
 * @type {number}
 */
export
const NchfChargingEvent_exposedEdgeEnablingServiceChargingInformation: NchfChargingEvent = NchfChargingEvent.exposedEdgeEnablingServiceChargingInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary exposedEdgeEnablingServiceChargingInformation
 * @constant
 * @type {number}
 */
export
const exposedEdgeEnablingServiceChargingInformation: NchfChargingEvent = NchfChargingEvent.exposedEdgeEnablingServiceChargingInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NchfChargingEvent_proSeChargingInformation
 * @constant
 * @type {number}
 */
export
const NchfChargingEvent_proSeChargingInformation: NchfChargingEvent = NchfChargingEvent.proSeChargingInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary proSeChargingInformation
 * @constant
 * @type {number}
 */
export
const proSeChargingInformation: NchfChargingEvent = NchfChargingEvent.proSeChargingInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NchfChargingEvent_mMSChargingInformation
 * @constant
 * @type {number}
 */
export
const NchfChargingEvent_mMSChargingInformation: NchfChargingEvent = NchfChargingEvent.mMSChargingInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mMSChargingInformation
 * @constant
 * @type {number}
 */
export
const mMSChargingInformation: NchfChargingEvent = NchfChargingEvent.mMSChargingInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NchfChargingEvent_mBSSessionChargingInformation
 * @constant
 * @type {number}
 */
export
const NchfChargingEvent_mBSSessionChargingInformation: NchfChargingEvent = NchfChargingEvent.mBSSessionChargingInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mBSSessionChargingInformation
 * @constant
 * @type {number}
 */
export
const mBSSessionChargingInformation: NchfChargingEvent = NchfChargingEvent.mBSSessionChargingInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NchfChargingEvent_tSNChargingInformation
 * @constant
 * @type {number}
 */
export
const NchfChargingEvent_tSNChargingInformation: NchfChargingEvent = NchfChargingEvent.tSNChargingInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tSNChargingInformation
 * @constant
 * @type {number}
 */
export
const tSNChargingInformation: NchfChargingEvent = NchfChargingEvent.tSNChargingInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NchfChargingEvent_nSACFChargingInformation
 * @constant
 * @type {number}
 */
export
const NchfChargingEvent_nSACFChargingInformation: NchfChargingEvent = NchfChargingEvent.nSACFChargingInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nSACFChargingInformation
 * @constant
 * @type {number}
 */
export
const nSACFChargingInformation: NchfChargingEvent = NchfChargingEvent.nSACFChargingInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NchfChargingEvent_nSSAAChargingInformation
 * @constant
 * @type {number}
 */
export
const NchfChargingEvent_nSSAAChargingInformation: NchfChargingEvent = NchfChargingEvent.nSSAAChargingInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nSSAAChargingInformation
 * @constant
 * @type {number}
 */
export
const nSSAAChargingInformation: NchfChargingEvent = NchfChargingEvent.nSSAAChargingInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NchfChargingEvent_rangingSLChargingInformation
 * @constant
 * @type {number}
 */
export
const NchfChargingEvent_rangingSLChargingInformation: NchfChargingEvent = NchfChargingEvent.rangingSLChargingInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rangingSLChargingInformation
 * @constant
 * @type {number}
 */
export
const rangingSLChargingInformation: NchfChargingEvent = NchfChargingEvent.rangingSLChargingInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_NchfChargingEvent: $.ASN1Decoder<NchfChargingEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NchfChargingEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NchfChargingEvent (el: _Element): NchfChargingEvent {
    if (!_cached_decoder_for_NchfChargingEvent) { _cached_decoder_for_NchfChargingEvent = $._decodeEnumerated; }
    return _cached_decoder_for_NchfChargingEvent(el);
}

let _cached_encoder_for_NchfChargingEvent: $.ASN1Encoder<NchfChargingEvent> | null = null;

/**
 * @summary Encodes a(n) NchfChargingEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NchfChargingEvent, encoded as an ASN.1 Element.
 */
export
function _encode_NchfChargingEvent (value: NchfChargingEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NchfChargingEvent) { _cached_encoder_for_NchfChargingEvent = $._encodeEnumerated; }
    return _cached_encoder_for_NchfChargingEvent(value, elGetter);
}


/* eslint-enable */
