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
const RfChargingEvent: typeof _enum_for_RfChargingEvent = _enum_for_RfChargingEvent;

/**
 * @summary RfChargingEvent_aoC_Information
 * @constant
 * @type {number}
 */
export
const RfChargingEvent_aoC_Information: _enum_for_RfChargingEvent.aoC_Information = RfChargingEvent.aoC_Information; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aoC_Information
 * @constant
 * @type {number}
 */
export
const aoC_Information: _enum_for_RfChargingEvent.aoC_Information = RfChargingEvent.aoC_Information; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RfChargingEvent_pS_Information
 * @constant
 * @type {number}
 */
export
const RfChargingEvent_pS_Information: _enum_for_RfChargingEvent.pS_Information = RfChargingEvent.pS_Information; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pS_Information
 * @constant
 * @type {number}
 */
export
const pS_Information: _enum_for_RfChargingEvent.pS_Information = RfChargingEvent.pS_Information; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RfChargingEvent_iMS_Information
 * @constant
 * @type {number}
 */
export
const RfChargingEvent_iMS_Information: _enum_for_RfChargingEvent.iMS_Information = RfChargingEvent.iMS_Information; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iMS_Information
 * @constant
 * @type {number}
 */
export
const iMS_Information: _enum_for_RfChargingEvent.iMS_Information = RfChargingEvent.iMS_Information; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RfChargingEvent_mMS_Information
 * @constant
 * @type {number}
 */
export
const RfChargingEvent_mMS_Information: _enum_for_RfChargingEvent.mMS_Information = RfChargingEvent.mMS_Information; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mMS_Information
 * @constant
 * @type {number}
 */
export
const mMS_Information: _enum_for_RfChargingEvent.mMS_Information = RfChargingEvent.mMS_Information; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RfChargingEvent_lCS_Information
 * @constant
 * @type {number}
 */
export
const RfChargingEvent_lCS_Information: _enum_for_RfChargingEvent.lCS_Information = RfChargingEvent.lCS_Information; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lCS_Information
 * @constant
 * @type {number}
 */
export
const lCS_Information: _enum_for_RfChargingEvent.lCS_Information = RfChargingEvent.lCS_Information; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RfChargingEvent_poC_Information
 * @constant
 * @type {number}
 */
export
const RfChargingEvent_poC_Information: _enum_for_RfChargingEvent.poC_Information = RfChargingEvent.poC_Information; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary poC_Information
 * @constant
 * @type {number}
 */
export
const poC_Information: _enum_for_RfChargingEvent.poC_Information = RfChargingEvent.poC_Information; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RfChargingEvent_mBMS_Inform
 * @constant
 * @type {number}
 */
export
const RfChargingEvent_mBMS_Inform: _enum_for_RfChargingEvent.mBMS_Inform = RfChargingEvent.mBMS_Inform; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mBMS_Inform
 * @constant
 * @type {number}
 */
export
const mBMS_Inform: _enum_for_RfChargingEvent.mBMS_Inform = RfChargingEvent.mBMS_Inform; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RfChargingEvent_sMS_Information
 * @constant
 * @type {number}
 */
export
const RfChargingEvent_sMS_Information: _enum_for_RfChargingEvent.sMS_Information = RfChargingEvent.sMS_Information; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMS_Information
 * @constant
 * @type {number}
 */
export
const sMS_Information: _enum_for_RfChargingEvent.sMS_Information = RfChargingEvent.sMS_Information; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RfChargingEvent_vCS_Information
 * @constant
 * @type {number}
 */
export
const RfChargingEvent_vCS_Information: _enum_for_RfChargingEvent.vCS_Information = RfChargingEvent.vCS_Information; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary vCS_Information
 * @constant
 * @type {number}
 */
export
const vCS_Information: _enum_for_RfChargingEvent.vCS_Information = RfChargingEvent.vCS_Information; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RfChargingEvent_mMTel_Information
 * @constant
 * @type {number}
 */
export
const RfChargingEvent_mMTel_Information: _enum_for_RfChargingEvent.mMTel_Information = RfChargingEvent.mMTel_Information; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mMTel_Information
 * @constant
 * @type {number}
 */
export
const mMTel_Information: _enum_for_RfChargingEvent.mMTel_Information = RfChargingEvent.mMTel_Information; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RfChargingEvent_proSe_Information
 * @constant
 * @type {number}
 */
export
const RfChargingEvent_proSe_Information: _enum_for_RfChargingEvent.proSe_Information = RfChargingEvent.proSe_Information; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary proSe_Information
 * @constant
 * @type {number}
 */
export
const proSe_Information: _enum_for_RfChargingEvent.proSe_Information = RfChargingEvent.proSe_Information; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RfChargingEvent_service_Generic_Information
 * @constant
 * @type {number}
 */
export
const RfChargingEvent_service_Generic_Information: _enum_for_RfChargingEvent.service_Generic_Information = RfChargingEvent.service_Generic_Information; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary service_Generic_Information
 * @constant
 * @type {number}
 */
export
const service_Generic_Information: _enum_for_RfChargingEvent.service_Generic_Information = RfChargingEvent.service_Generic_Information; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RfChargingEvent_iM_Information
 * @constant
 * @type {number}
 */
export
const RfChargingEvent_iM_Information: _enum_for_RfChargingEvent.iM_Information = RfChargingEvent.iM_Information; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iM_Information
 * @constant
 * @type {number}
 */
export
const iM_Information: _enum_for_RfChargingEvent.iM_Information = RfChargingEvent.iM_Information; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RfChargingEvent_dCD_Information
 * @constant
 * @type {number}
 */
export
const RfChargingEvent_dCD_Information: _enum_for_RfChargingEvent.dCD_Information = RfChargingEvent.dCD_Information; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dCD_Information
 * @constant
 * @type {number}
 */
export
const dCD_Information: _enum_for_RfChargingEvent.dCD_Information = RfChargingEvent.dCD_Information; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RfChargingEvent_m2M_Information
 * @constant
 * @type {number}
 */
export
const RfChargingEvent_m2M_Information: _enum_for_RfChargingEvent.m2M_Information = RfChargingEvent.m2M_Information; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary m2M_Information
 * @constant
 * @type {number}
 */
export
const m2M_Information: _enum_for_RfChargingEvent.m2M_Information = RfChargingEvent.m2M_Information; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RfChargingEvent_cPDT_Information
 * @constant
 * @type {number}
 */
export
const RfChargingEvent_cPDT_Information: _enum_for_RfChargingEvent.cPDT_Information = RfChargingEvent.cPDT_Information; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cPDT_Information
 * @constant
 * @type {number}
 */
export
const cPDT_Information: _enum_for_RfChargingEvent.cPDT_Information = RfChargingEvent.cPDT_Information; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_RfChargingEvent: $.ASN1Decoder<RfChargingEvent> = $._decodeEnumerated;
export const _encode_RfChargingEvent: $.ASN1Encoder<RfChargingEvent> = $._encodeEnumerated;


/* eslint-enable */
