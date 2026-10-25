/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GNSSID
 * @description
 * 
 * The GNSSID represents the different global navigation satellite systems, the
 * GNSSID is derived from the data present in the GNSSID type defined in TS
 * 29.572 [24] clause 6.1.6.3.8.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.54.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GNSSID  ::=  ENUMERATED
 * {
 *     gPS(1),
 *     galileo(2),
 *     sBAS(3),
 *     modernizedGPS(4),
 *     qZSS(5),
 *     gLONASS(6),
 *     bDS(7),
 *     nAVIC(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_GNSSID {
    /**
     * @description
     *
     * GPS.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.54.
     */
    gPS = 1,
    /**
     * @description
     *
     * Galileo.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.54.
     */
    galileo = 2,
    /**
     * @description
     *
     * Space Based Augmentation Systems.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.54.
     */
    sBAS = 3,
    /**
     * @description
     *
     * Modernized GPS.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.54.
     */
    modernizedGPS = 4,
    /**
     * @description
     *
     * Quasi Zenith Satellite System.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.54.
     */
    qZSS = 5,
    /**
     * @description
     *
     * Global Navigation Satellite System.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.54.
     */
    gLONASS = 6,
    /**
     * @description
     *
     * BeiDou Navigation Satellite System.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.54.
     */
    bDS = 7,
    /**
     * @description
     *
     * Navigation with Indian Constellation.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.54.
     */
    nAVIC = 8,
}

/**
 * @summary GNSSID
 * @description
 * 
 * The GNSSID represents the different global navigation satellite systems, the
 * GNSSID is derived from the data present in the GNSSID type defined in TS
 * 29.572 [24] clause 6.1.6.3.8.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.54.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GNSSID  ::=  ENUMERATED
 * {
 *     gPS(1),
 *     galileo(2),
 *     sBAS(3),
 *     modernizedGPS(4),
 *     qZSS(5),
 *     gLONASS(6),
 *     bDS(7),
 *     nAVIC(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type GNSSID = _enum_for_GNSSID;

/**
 * @summary GNSSID
 * @description
 * 
 * The GNSSID represents the different global navigation satellite systems, the
 * GNSSID is derived from the data present in the GNSSID type defined in TS
 * 29.572 [24] clause 6.1.6.3.8.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.54.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GNSSID  ::=  ENUMERATED
 * {
 *     gPS(1),
 *     galileo(2),
 *     sBAS(3),
 *     modernizedGPS(4),
 *     qZSS(5),
 *     gLONASS(6),
 *     bDS(7),
 *     nAVIC(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const GNSSID: typeof _enum_for_GNSSID = _enum_for_GNSSID;

/**
 * @summary GNSSID_gPS
 * @description
 *
 * GPS.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.54.
 *
 * @constant
 * @type {number}
 */
export
const GNSSID_gPS: _enum_for_GNSSID.gPS = GNSSID.gPS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gPS
 * @description
 *
 * GPS.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.54.
 *
 * @constant
 * @type {number}
 */
export
const gPS: _enum_for_GNSSID.gPS = GNSSID.gPS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GNSSID_galileo
 * @description
 *
 * Galileo.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.54.
 *
 * @constant
 * @type {number}
 */
export
const GNSSID_galileo: _enum_for_GNSSID.galileo = GNSSID.galileo; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary galileo
 * @description
 *
 * Galileo.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.54.
 *
 * @constant
 * @type {number}
 */
export
const galileo: _enum_for_GNSSID.galileo = GNSSID.galileo; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GNSSID_sBAS
 * @description
 *
 * Space Based Augmentation Systems.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.54.
 *
 * @constant
 * @type {number}
 */
export
const GNSSID_sBAS: _enum_for_GNSSID.sBAS = GNSSID.sBAS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sBAS
 * @description
 *
 * Space Based Augmentation Systems.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.54.
 *
 * @constant
 * @type {number}
 */
export
const sBAS: _enum_for_GNSSID.sBAS = GNSSID.sBAS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GNSSID_modernizedGPS
 * @description
 *
 * Modernized GPS.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.54.
 *
 * @constant
 * @type {number}
 */
export
const GNSSID_modernizedGPS: _enum_for_GNSSID.modernizedGPS = GNSSID.modernizedGPS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary modernizedGPS
 * @description
 *
 * Modernized GPS.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.54.
 *
 * @constant
 * @type {number}
 */
export
const modernizedGPS: _enum_for_GNSSID.modernizedGPS = GNSSID.modernizedGPS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GNSSID_qZSS
 * @description
 *
 * Quasi Zenith Satellite System.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.54.
 *
 * @constant
 * @type {number}
 */
export
const GNSSID_qZSS: _enum_for_GNSSID.qZSS = GNSSID.qZSS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary qZSS
 * @description
 *
 * Quasi Zenith Satellite System.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.54.
 *
 * @constant
 * @type {number}
 */
export
const qZSS: _enum_for_GNSSID.qZSS = GNSSID.qZSS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GNSSID_gLONASS
 * @description
 *
 * Global Navigation Satellite System.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.54.
 *
 * @constant
 * @type {number}
 */
export
const GNSSID_gLONASS: _enum_for_GNSSID.gLONASS = GNSSID.gLONASS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gLONASS
 * @description
 *
 * Global Navigation Satellite System.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.54.
 *
 * @constant
 * @type {number}
 */
export
const gLONASS: _enum_for_GNSSID.gLONASS = GNSSID.gLONASS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GNSSID_bDS
 * @description
 *
 * BeiDou Navigation Satellite System.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.54.
 *
 * @constant
 * @type {number}
 */
export
const GNSSID_bDS: _enum_for_GNSSID.bDS = GNSSID.bDS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bDS
 * @description
 *
 * BeiDou Navigation Satellite System.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.54.
 *
 * @constant
 * @type {number}
 */
export
const bDS: _enum_for_GNSSID.bDS = GNSSID.bDS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GNSSID_nAVIC
 * @description
 *
 * Navigation with Indian Constellation.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.54.
 *
 * @constant
 * @type {number}
 */
export
const GNSSID_nAVIC: _enum_for_GNSSID.nAVIC = GNSSID.nAVIC; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nAVIC
 * @description
 *
 * Navigation with Indian Constellation.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.54.
 *
 * @constant
 * @type {number}
 */
export
const nAVIC: _enum_for_GNSSID.nAVIC = GNSSID.nAVIC; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_GNSSID: $.ASN1Decoder<GNSSID> = $._decodeEnumerated;
export const _encode_GNSSID: $.ASN1Encoder<GNSSID> = $._encodeEnumerated;


/* eslint-enable */
