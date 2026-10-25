/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PositioningMethod
 * @description
 * 
 * The PositioningMethod represents the method used to determine the location of
 * the UE, the PositioningMethod is derived from the data present in the
 * PositioningMethod type defined in TS 29.572 [24] clause 6.1.6.3.6.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.52.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PositioningMethod  ::=  ENUMERATED
 * {
 *     cellID(1),
 *     eCID(2),
 *     oTDOA(3),
 *     barometricPressure(4),
 *     wLAN(5),
 *     bluetooth(6),
 *     mBS(7),
 *     motionSensor(8),
 *     dLTDOA(9),
 *     dLAOD(10),
 *     multiRTT(11),
 *     nRECID(12),
 *     uLTDOA(13),
 *     uLAOA(14),
 *     networkSpecific(15),
 *     sLTDOA(16),
 *     sLTOA(17),
 *     sLAOA(18),
 *     sLRT(19)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PositioningMethod {
    /**
     * @description
     *
     * Cell ID positioning method.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.52.
     */
    cellID = 1,
    /**
     * @description
     *
     * Enhanced cell ID methods based on LTE signals.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.52.
     */
    eCID = 2,
    /**
     * @description
     *
     * Observed time difference of arrival positioning based on LTE signals.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.52.
     */
    oTDOA = 3,
    /**
     * @description
     *
     * Positioning method based on barometric Pressure Sensor.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.52.
     */
    barometricPressure = 4,
    /**
     * @description
     *
     * WLAN positioning.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.52.
     */
    wLAN = 5,
    /**
     * @description
     *
     * Bluetooth positioning.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.52.
     */
    bluetooth = 6,
    /**
     * @description
     *
     * Terrestrial Beacon System (TBS) positioning based on MBS signals.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.52.
     */
    mBS = 7,
    /**
     * @description
     *
     * Positioning method based on motion Sensor.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.52.
     */
    motionSensor = 8,
    /**
     * @description
     *
     * Downlink Time Difference of Arrival (DL-TDOA) based on NR signals.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.52.
     */
    dLTDOA = 9,
    /**
     * @description
     *
     * Downlink Angle-of-Departure (DL-AoD) based on NR signals.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.52.
     */
    dLAOD = 10,
    /**
     * @description
     *
     * Multi-Round Trip Time Positioning (Multi-RTT based on NR signals).
     *
     * 3GPP TS 33.128, clause 7.3.3.2.52.
     */
    multiRTT = 11,
    /**
     * @description
     *
     * NR enhanced cell ID methods (NR E-CID) based on NR signals.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.52.
     */
    nRECID = 12,
    /**
     * @description
     *
     * Uplink Time Difference of Arrival (UL-TDOA) based on NR signals.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.52.
     */
    uLTDOA = 13,
    /**
     * @description
     *
     * Uplink Angle of Arrival (UL-AoA), including the Azimuth of Arrival
     * (A-AoA) and the Zenith of Arrival (Z-AoA) based on NR signals.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.52.
     */
    uLAOA = 14,
    /**
     * @description
     *
     * Network specific position methods.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.52.
     */
    networkSpecific = 15,
    /**
     * @description
     *
     * Sidelink Time Difference of Arrival (TDOA) based on Sidelink NR PC5 radio
     * signals.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.52.
     */
    sLTDOA = 16,
    /**
     * @description
     *
     * Sidelink Time Of Arrival based on NR PC5 radio signals.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.52.
     */
    sLTOA = 17,
    /**
     * @description
     *
     * Sidelink Angle-of-Arrival based on NR PC5 radio signals.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.52.
     */
    sLAOA = 18,
    /**
     * @description
     *
     * Sidelink Round Trip based on NR PC5 radio signals.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.52.
     */
    sLRT = 19,
}

/**
 * @summary PositioningMethod
 * @description
 * 
 * The PositioningMethod represents the method used to determine the location of
 * the UE, the PositioningMethod is derived from the data present in the
 * PositioningMethod type defined in TS 29.572 [24] clause 6.1.6.3.6.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.52.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PositioningMethod  ::=  ENUMERATED
 * {
 *     cellID(1),
 *     eCID(2),
 *     oTDOA(3),
 *     barometricPressure(4),
 *     wLAN(5),
 *     bluetooth(6),
 *     mBS(7),
 *     motionSensor(8),
 *     dLTDOA(9),
 *     dLAOD(10),
 *     multiRTT(11),
 *     nRECID(12),
 *     uLTDOA(13),
 *     uLAOA(14),
 *     networkSpecific(15),
 *     sLTDOA(16),
 *     sLTOA(17),
 *     sLAOA(18),
 *     sLRT(19)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PositioningMethod = _enum_for_PositioningMethod;

/**
 * @summary PositioningMethod
 * @description
 * 
 * The PositioningMethod represents the method used to determine the location of
 * the UE, the PositioningMethod is derived from the data present in the
 * PositioningMethod type defined in TS 29.572 [24] clause 6.1.6.3.6.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.52.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PositioningMethod  ::=  ENUMERATED
 * {
 *     cellID(1),
 *     eCID(2),
 *     oTDOA(3),
 *     barometricPressure(4),
 *     wLAN(5),
 *     bluetooth(6),
 *     mBS(7),
 *     motionSensor(8),
 *     dLTDOA(9),
 *     dLAOD(10),
 *     multiRTT(11),
 *     nRECID(12),
 *     uLTDOA(13),
 *     uLAOA(14),
 *     networkSpecific(15),
 *     sLTDOA(16),
 *     sLTOA(17),
 *     sLAOA(18),
 *     sLRT(19)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PositioningMethod = _enum_for_PositioningMethod;

/**
 * @summary PositioningMethod_cellID
 * @description
 *
 * Cell ID positioning method.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.52.
 *
 * @constant
 * @type {number}
 */
export
const PositioningMethod_cellID = PositioningMethod.cellID satisfies PositioningMethod; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cellID
 * @description
 *
 * Cell ID positioning method.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.52.
 *
 * @constant
 * @type {number}
 */
export
const cellID = PositioningMethod.cellID satisfies PositioningMethod; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositioningMethod_eCID
 * @description
 *
 * Enhanced cell ID methods based on LTE signals.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.52.
 *
 * @constant
 * @type {number}
 */
export
const PositioningMethod_eCID = PositioningMethod.eCID satisfies PositioningMethod; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eCID
 * @description
 *
 * Enhanced cell ID methods based on LTE signals.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.52.
 *
 * @constant
 * @type {number}
 */
export
const eCID = PositioningMethod.eCID satisfies PositioningMethod; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositioningMethod_oTDOA
 * @description
 *
 * Observed time difference of arrival positioning based on LTE signals.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.52.
 *
 * @constant
 * @type {number}
 */
export
const PositioningMethod_oTDOA = PositioningMethod.oTDOA satisfies PositioningMethod; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oTDOA
 * @description
 *
 * Observed time difference of arrival positioning based on LTE signals.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.52.
 *
 * @constant
 * @type {number}
 */
export
const oTDOA = PositioningMethod.oTDOA satisfies PositioningMethod; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositioningMethod_barometricPressure
 * @description
 *
 * Positioning method based on barometric Pressure Sensor.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.52.
 *
 * @constant
 * @type {number}
 */
export
const PositioningMethod_barometricPressure = PositioningMethod.barometricPressure satisfies PositioningMethod; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary barometricPressure
 * @description
 *
 * Positioning method based on barometric Pressure Sensor.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.52.
 *
 * @constant
 * @type {number}
 */
export
const barometricPressure = PositioningMethod.barometricPressure satisfies PositioningMethod; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositioningMethod_wLAN
 * @description
 *
 * WLAN positioning.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.52.
 *
 * @constant
 * @type {number}
 */
export
const PositioningMethod_wLAN = PositioningMethod.wLAN satisfies PositioningMethod; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wLAN
 * @description
 *
 * WLAN positioning.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.52.
 *
 * @constant
 * @type {number}
 */
export
const wLAN = PositioningMethod.wLAN satisfies PositioningMethod; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositioningMethod_bluetooth
 * @description
 *
 * Bluetooth positioning.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.52.
 *
 * @constant
 * @type {number}
 */
export
const PositioningMethod_bluetooth = PositioningMethod.bluetooth satisfies PositioningMethod; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bluetooth
 * @description
 *
 * Bluetooth positioning.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.52.
 *
 * @constant
 * @type {number}
 */
export
const bluetooth = PositioningMethod.bluetooth satisfies PositioningMethod; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositioningMethod_mBS
 * @description
 *
 * Terrestrial Beacon System (TBS) positioning based on MBS signals.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.52.
 *
 * @constant
 * @type {number}
 */
export
const PositioningMethod_mBS = PositioningMethod.mBS satisfies PositioningMethod; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mBS
 * @description
 *
 * Terrestrial Beacon System (TBS) positioning based on MBS signals.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.52.
 *
 * @constant
 * @type {number}
 */
export
const mBS = PositioningMethod.mBS satisfies PositioningMethod; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositioningMethod_motionSensor
 * @description
 *
 * Positioning method based on motion Sensor.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.52.
 *
 * @constant
 * @type {number}
 */
export
const PositioningMethod_motionSensor = PositioningMethod.motionSensor satisfies PositioningMethod; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary motionSensor
 * @description
 *
 * Positioning method based on motion Sensor.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.52.
 *
 * @constant
 * @type {number}
 */
export
const motionSensor = PositioningMethod.motionSensor satisfies PositioningMethod; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositioningMethod_dLTDOA
 * @description
 *
 * Downlink Time Difference of Arrival (DL-TDOA) based on NR signals.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.52.
 *
 * @constant
 * @type {number}
 */
export
const PositioningMethod_dLTDOA = PositioningMethod.dLTDOA satisfies PositioningMethod; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dLTDOA
 * @description
 *
 * Downlink Time Difference of Arrival (DL-TDOA) based on NR signals.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.52.
 *
 * @constant
 * @type {number}
 */
export
const dLTDOA = PositioningMethod.dLTDOA satisfies PositioningMethod; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositioningMethod_dLAOD
 * @description
 *
 * Downlink Angle-of-Departure (DL-AoD) based on NR signals.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.52.
 *
 * @constant
 * @type {number}
 */
export
const PositioningMethod_dLAOD = PositioningMethod.dLAOD satisfies PositioningMethod; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dLAOD
 * @description
 *
 * Downlink Angle-of-Departure (DL-AoD) based on NR signals.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.52.
 *
 * @constant
 * @type {number}
 */
export
const dLAOD = PositioningMethod.dLAOD satisfies PositioningMethod; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositioningMethod_multiRTT
 * @description
 *
 * Multi-Round Trip Time Positioning (Multi-RTT based on NR signals).
 *
 * 3GPP TS 33.128, clause 7.3.3.2.52.
 *
 * @constant
 * @type {number}
 */
export
const PositioningMethod_multiRTT = PositioningMethod.multiRTT satisfies PositioningMethod; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multiRTT
 * @description
 *
 * Multi-Round Trip Time Positioning (Multi-RTT based on NR signals).
 *
 * 3GPP TS 33.128, clause 7.3.3.2.52.
 *
 * @constant
 * @type {number}
 */
export
const multiRTT = PositioningMethod.multiRTT satisfies PositioningMethod; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositioningMethod_nRECID
 * @description
 *
 * NR enhanced cell ID methods (NR E-CID) based on NR signals.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.52.
 *
 * @constant
 * @type {number}
 */
export
const PositioningMethod_nRECID = PositioningMethod.nRECID satisfies PositioningMethod; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nRECID
 * @description
 *
 * NR enhanced cell ID methods (NR E-CID) based on NR signals.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.52.
 *
 * @constant
 * @type {number}
 */
export
const nRECID = PositioningMethod.nRECID satisfies PositioningMethod; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositioningMethod_uLTDOA
 * @description
 *
 * Uplink Time Difference of Arrival (UL-TDOA) based on NR signals.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.52.
 *
 * @constant
 * @type {number}
 */
export
const PositioningMethod_uLTDOA = PositioningMethod.uLTDOA satisfies PositioningMethod; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uLTDOA
 * @description
 *
 * Uplink Time Difference of Arrival (UL-TDOA) based on NR signals.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.52.
 *
 * @constant
 * @type {number}
 */
export
const uLTDOA = PositioningMethod.uLTDOA satisfies PositioningMethod; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositioningMethod_uLAOA
 * @description
 *
 * Uplink Angle of Arrival (UL-AoA), including the Azimuth of Arrival (A-AoA)
 * and the Zenith of Arrival (Z-AoA) based on NR signals.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.52.
 *
 * @constant
 * @type {number}
 */
export
const PositioningMethod_uLAOA = PositioningMethod.uLAOA satisfies PositioningMethod; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uLAOA
 * @description
 *
 * Uplink Angle of Arrival (UL-AoA), including the Azimuth of Arrival (A-AoA)
 * and the Zenith of Arrival (Z-AoA) based on NR signals.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.52.
 *
 * @constant
 * @type {number}
 */
export
const uLAOA = PositioningMethod.uLAOA satisfies PositioningMethod; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositioningMethod_networkSpecific
 * @description
 *
 * Network specific position methods.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.52.
 *
 * @constant
 * @type {number}
 */
export
const PositioningMethod_networkSpecific = PositioningMethod.networkSpecific satisfies PositioningMethod; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkSpecific
 * @description
 *
 * Network specific position methods.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.52.
 *
 * @constant
 * @type {number}
 */
export
const networkSpecific = PositioningMethod.networkSpecific satisfies PositioningMethod; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositioningMethod_sLTDOA
 * @description
 *
 * Sidelink Time Difference of Arrival (TDOA) based on Sidelink NR PC5 radio
 * signals.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.52.
 *
 * @constant
 * @type {number}
 */
export
const PositioningMethod_sLTDOA = PositioningMethod.sLTDOA satisfies PositioningMethod; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sLTDOA
 * @description
 *
 * Sidelink Time Difference of Arrival (TDOA) based on Sidelink NR PC5 radio
 * signals.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.52.
 *
 * @constant
 * @type {number}
 */
export
const sLTDOA = PositioningMethod.sLTDOA satisfies PositioningMethod; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositioningMethod_sLTOA
 * @description
 *
 * Sidelink Time Of Arrival based on NR PC5 radio signals.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.52.
 *
 * @constant
 * @type {number}
 */
export
const PositioningMethod_sLTOA = PositioningMethod.sLTOA satisfies PositioningMethod; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sLTOA
 * @description
 *
 * Sidelink Time Of Arrival based on NR PC5 radio signals.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.52.
 *
 * @constant
 * @type {number}
 */
export
const sLTOA = PositioningMethod.sLTOA satisfies PositioningMethod; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositioningMethod_sLAOA
 * @description
 *
 * Sidelink Angle-of-Arrival based on NR PC5 radio signals.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.52.
 *
 * @constant
 * @type {number}
 */
export
const PositioningMethod_sLAOA = PositioningMethod.sLAOA satisfies PositioningMethod; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sLAOA
 * @description
 *
 * Sidelink Angle-of-Arrival based on NR PC5 radio signals.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.52.
 *
 * @constant
 * @type {number}
 */
export
const sLAOA = PositioningMethod.sLAOA satisfies PositioningMethod; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositioningMethod_sLRT
 * @description
 *
 * Sidelink Round Trip based on NR PC5 radio signals.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.52.
 *
 * @constant
 * @type {number}
 */
export
const PositioningMethod_sLRT = PositioningMethod.sLRT satisfies PositioningMethod; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sLRT
 * @description
 *
 * Sidelink Round Trip based on NR PC5 radio signals.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.52.
 *
 * @constant
 * @type {number}
 */
export
const sLRT = PositioningMethod.sLRT satisfies PositioningMethod; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PositioningMethod: $.ASN1Decoder<PositioningMethod> = $._decodeEnumerated;
export const _encode_PositioningMethod: $.ASN1Encoder<PositioningMethod> = $._encodeEnumerated;


/* eslint-enable */
