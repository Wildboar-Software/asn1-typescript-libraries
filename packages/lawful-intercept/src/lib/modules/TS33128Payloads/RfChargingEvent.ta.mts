/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RfChargingEvent
 * @description
 * 
 * Derived from the Service Information field contained in the Charging Data
 * Request (e.g. IMS-Information, SMS-Information, PS-Information, etc.) TS
 * 32.299 [111] clause 7.2.192.
 *
 * 3GPP TS 33.128, clause 7.19.3.9.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RfChargingEvent  ::=  ENUMERATED
 * {
 *     aoC-Information(1),
 *     pS-Information(2),
 *     iMS-Information(3),
 *     mMS-Information(4),
 *     lCS-Information(5),
 *     poC-Information(6),
 *     mBMS-Inform(7),
 *     sMS-Information(8),
 *     vCS-Information(9),
 *     mMTel-Information(10),
 *     proSe-Information(11),
 *     service-Generic-Information(12),
 *     iM-Information(13),
 *     dCD-Information(14),
 *     m2M-Information(15),
 *     cPDT-Information(16)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RfChargingEvent {
    aoC_Information = 1,
    pS_Information = 2,
    iMS_Information = 3,
    mMS_Information = 4,
    lCS_Information = 5,
    poC_Information = 6,
    mBMS_Inform = 7,
    sMS_Information = 8,
    vCS_Information = 9,
    mMTel_Information = 10,
    proSe_Information = 11,
    service_Generic_Information = 12,
    iM_Information = 13,
    dCD_Information = 14,
    m2M_Information = 15,
    cPDT_Information = 16,
}

/**
 * @summary RfChargingEvent
 * @description
 * 
 * Derived from the Service Information field contained in the Charging Data
 * Request (e.g. IMS-Information, SMS-Information, PS-Information, etc.) TS
 * 32.299 [111] clause 7.2.192.
 *
 * 3GPP TS 33.128, clause 7.19.3.9.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RfChargingEvent  ::=  ENUMERATED
 * {
 *     aoC-Information(1),
 *     pS-Information(2),
 *     iMS-Information(3),
 *     mMS-Information(4),
 *     lCS-Information(5),
 *     poC-Information(6),
 *     mBMS-Inform(7),
 *     sMS-Information(8),
 *     vCS-Information(9),
 *     mMTel-Information(10),
 *     proSe-Information(11),
 *     service-Generic-Information(12),
 *     iM-Information(13),
 *     dCD-Information(14),
 *     m2M-Information(15),
 *     cPDT-Information(16)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type RfChargingEvent = _enum_for_RfChargingEvent;

/**
 * @summary RfChargingEvent
 * @description
 * 
 * Derived from the Service Information field contained in the Charging Data
 * Request (e.g. IMS-Information, SMS-Information, PS-Information, etc.) TS
 * 32.299 [111] clause 7.2.192.
 *
 * 3GPP TS 33.128, clause 7.19.3.9.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RfChargingEvent  ::=  ENUMERATED
 * {
 *     aoC-Information(1),
 *     pS-Information(2),
 *     iMS-Information(3),
 *     mMS-Information(4),
 *     lCS-Information(5),
 *     poC-Information(6),
 *     mBMS-Inform(7),
 *     sMS-Information(8),
 *     vCS-Information(9),
 *     mMTel-Information(10),
 *     proSe-Information(11),
 *     service-Generic-Information(12),
 *     iM-Information(13),
 *     dCD-Information(14),
 *     m2M-Information(15),
 *     cPDT-Information(16)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const RfChargingEvent = _enum_for_RfChargingEvent;

/**
 * @summary RfChargingEvent_aoC_Information
 * @constant
 * @type {number}
 */
export
const RfChargingEvent_aoC_Information = RfChargingEvent.aoC_Information satisfies RfChargingEvent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aoC_Information
 * @constant
 * @type {number}
 */
export
const aoC_Information = RfChargingEvent.aoC_Information satisfies RfChargingEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RfChargingEvent_pS_Information
 * @constant
 * @type {number}
 */
export
const RfChargingEvent_pS_Information = RfChargingEvent.pS_Information satisfies RfChargingEvent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pS_Information
 * @constant
 * @type {number}
 */
export
const pS_Information = RfChargingEvent.pS_Information satisfies RfChargingEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RfChargingEvent_iMS_Information
 * @constant
 * @type {number}
 */
export
const RfChargingEvent_iMS_Information = RfChargingEvent.iMS_Information satisfies RfChargingEvent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iMS_Information
 * @constant
 * @type {number}
 */
export
const iMS_Information = RfChargingEvent.iMS_Information satisfies RfChargingEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RfChargingEvent_mMS_Information
 * @constant
 * @type {number}
 */
export
const RfChargingEvent_mMS_Information = RfChargingEvent.mMS_Information satisfies RfChargingEvent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mMS_Information
 * @constant
 * @type {number}
 */
export
const mMS_Information = RfChargingEvent.mMS_Information satisfies RfChargingEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RfChargingEvent_lCS_Information
 * @constant
 * @type {number}
 */
export
const RfChargingEvent_lCS_Information = RfChargingEvent.lCS_Information satisfies RfChargingEvent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lCS_Information
 * @constant
 * @type {number}
 */
export
const lCS_Information = RfChargingEvent.lCS_Information satisfies RfChargingEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RfChargingEvent_poC_Information
 * @constant
 * @type {number}
 */
export
const RfChargingEvent_poC_Information = RfChargingEvent.poC_Information satisfies RfChargingEvent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary poC_Information
 * @constant
 * @type {number}
 */
export
const poC_Information = RfChargingEvent.poC_Information satisfies RfChargingEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RfChargingEvent_mBMS_Inform
 * @constant
 * @type {number}
 */
export
const RfChargingEvent_mBMS_Inform = RfChargingEvent.mBMS_Inform satisfies RfChargingEvent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mBMS_Inform
 * @constant
 * @type {number}
 */
export
const mBMS_Inform = RfChargingEvent.mBMS_Inform satisfies RfChargingEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RfChargingEvent_sMS_Information
 * @constant
 * @type {number}
 */
export
const RfChargingEvent_sMS_Information = RfChargingEvent.sMS_Information satisfies RfChargingEvent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMS_Information
 * @constant
 * @type {number}
 */
export
const sMS_Information = RfChargingEvent.sMS_Information satisfies RfChargingEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RfChargingEvent_vCS_Information
 * @constant
 * @type {number}
 */
export
const RfChargingEvent_vCS_Information = RfChargingEvent.vCS_Information satisfies RfChargingEvent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary vCS_Information
 * @constant
 * @type {number}
 */
export
const vCS_Information = RfChargingEvent.vCS_Information satisfies RfChargingEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RfChargingEvent_mMTel_Information
 * @constant
 * @type {number}
 */
export
const RfChargingEvent_mMTel_Information = RfChargingEvent.mMTel_Information satisfies RfChargingEvent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mMTel_Information
 * @constant
 * @type {number}
 */
export
const mMTel_Information = RfChargingEvent.mMTel_Information satisfies RfChargingEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RfChargingEvent_proSe_Information
 * @constant
 * @type {number}
 */
export
const RfChargingEvent_proSe_Information = RfChargingEvent.proSe_Information satisfies RfChargingEvent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary proSe_Information
 * @constant
 * @type {number}
 */
export
const proSe_Information = RfChargingEvent.proSe_Information satisfies RfChargingEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RfChargingEvent_service_Generic_Information
 * @constant
 * @type {number}
 */
export
const RfChargingEvent_service_Generic_Information = RfChargingEvent.service_Generic_Information satisfies RfChargingEvent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary service_Generic_Information
 * @constant
 * @type {number}
 */
export
const service_Generic_Information = RfChargingEvent.service_Generic_Information satisfies RfChargingEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RfChargingEvent_iM_Information
 * @constant
 * @type {number}
 */
export
const RfChargingEvent_iM_Information = RfChargingEvent.iM_Information satisfies RfChargingEvent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iM_Information
 * @constant
 * @type {number}
 */
export
const iM_Information = RfChargingEvent.iM_Information satisfies RfChargingEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RfChargingEvent_dCD_Information
 * @constant
 * @type {number}
 */
export
const RfChargingEvent_dCD_Information = RfChargingEvent.dCD_Information satisfies RfChargingEvent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dCD_Information
 * @constant
 * @type {number}
 */
export
const dCD_Information = RfChargingEvent.dCD_Information satisfies RfChargingEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RfChargingEvent_m2M_Information
 * @constant
 * @type {number}
 */
export
const RfChargingEvent_m2M_Information = RfChargingEvent.m2M_Information satisfies RfChargingEvent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary m2M_Information
 * @constant
 * @type {number}
 */
export
const m2M_Information = RfChargingEvent.m2M_Information satisfies RfChargingEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RfChargingEvent_cPDT_Information
 * @constant
 * @type {number}
 */
export
const RfChargingEvent_cPDT_Information = RfChargingEvent.cPDT_Information satisfies RfChargingEvent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cPDT_Information
 * @constant
 * @type {number}
 */
export
const cPDT_Information = RfChargingEvent.cPDT_Information satisfies RfChargingEvent; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_RfChargingEvent: $.ASN1Decoder<RfChargingEvent> = $._decodeEnumerated;
export const _encode_RfChargingEvent: $.ASN1Encoder<RfChargingEvent> = $._encodeEnumerated;


/* eslint-enable */
