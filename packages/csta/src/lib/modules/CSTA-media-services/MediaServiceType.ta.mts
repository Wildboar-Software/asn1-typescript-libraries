/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary MediaServiceType
 * @description
 *
 * Which media service is (or was) attached to or detached from a call or
 * connection. See ECMA-269 Table 6-10 for how `MediaStreamID` is interpreted
 * per type. ECMA-269 §12.2.21.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MediaServiceType  ::=  ENUMERATED
 * {     cstaVoiceUnit                 ( 0),
 *     dataModem                 ( 1),
 *     digitalDataIsochronousIeee1394         ( 2),
 *     digitalDataIsochronousGeoport         ( 3),
 *     digitalDataIsochronousIeeeAtm         ( 4),
 *     digitalDataIsochronousIeeeIsdn         ( 5),
 *     digitalDataApi                 ( 6),
 *     ectfS100MediaServicesDefault         ( 7),
 *     ectfS100MediaServicesAppServices     ( 8),
 *     cstaIVRScript1                 ( 9),
 *     cstaIVRScript2                 (10),
 *     cstaIVRScript3                 (11),
 *     cstaIVRScript4                 (12),
 *     cstaIVRScript5                 (13),
 *     cstaIVRScript6                 (14),
 *     cstaIVRScript7                 (15),
 *     cstaIVRScript8                 (16),
 *     cstaIVRScript9                 (17),
 *     cstaIVRScript10             (18),
 *     liveSoundCaptureAnalog             (19),
 *     liveSoundTransmitAnalog         (20),
 *     liveSoundCaptureIeee1394         (21),
 *     liveSoundTransmitIeee1394         (22),
 *     liveSoundCaptureTransmitGeoport     (23),
 *     liveSoundCaptureTransmitAtm         (24),
 *     liveSoundCaptureTransmitISDN         (25),
 *     soundCaptureTransmitADPCM         (26),
 *     soundCaptureTransmitApi         (27),
 *     usb                     (28),
 *     sfSpecific1                 (29),
 *     sfSpecific2                 (30),
 *     sfSpecific3                 (31),
 *     sfSpecific4                 (32),
 *     sfSpecific5                 (33),
 *     sfSpecific6                 (34),
 *     sfSpecific7                 (35),
 *     sfSpecific8                 (36),
 *     sfSpecific9                 (37),
 *     sfSpecific10                 (38) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MediaServiceType {
    cstaVoiceUnit = 0,
    dataModem = 1,
    digitalDataIsochronousIeee1394 = 2,
    digitalDataIsochronousGeoport = 3,
    digitalDataIsochronousIeeeAtm = 4,
    digitalDataIsochronousIeeeIsdn = 5,
    digitalDataApi = 6,
    ectfS100MediaServicesDefault = 7,
    ectfS100MediaServicesAppServices = 8,
    cstaIVRScript1 = 9,
    cstaIVRScript2 = 10,
    cstaIVRScript3 = 11,
    cstaIVRScript4 = 12,
    cstaIVRScript5 = 13,
    cstaIVRScript6 = 14,
    cstaIVRScript7 = 15,
    cstaIVRScript8 = 16,
    cstaIVRScript9 = 17,
    cstaIVRScript10 = 18,
    liveSoundCaptureAnalog = 19,
    liveSoundTransmitAnalog = 20,
    liveSoundCaptureIeee1394 = 21,
    liveSoundTransmitIeee1394 = 22,
    liveSoundCaptureTransmitGeoport = 23,
    liveSoundCaptureTransmitAtm = 24,
    liveSoundCaptureTransmitISDN = 25,
    soundCaptureTransmitADPCM = 26,
    soundCaptureTransmitApi = 27,
    usb = 28,
    sfSpecific1 = 29,
    sfSpecific2 = 30,
    sfSpecific3 = 31,
    sfSpecific4 = 32,
    sfSpecific5 = 33,
    sfSpecific6 = 34,
    sfSpecific7 = 35,
    sfSpecific8 = 36,
    sfSpecific9 = 37,
    sfSpecific10 = 38,
}

/**
 * @summary MediaServiceType
 * @description
 *
 * Which media service is (or was) attached to or detached from a call or
 * connection. See ECMA-269 Table 6-10 for how `MediaStreamID` is interpreted
 * per type. ECMA-269 §12.2.21.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MediaServiceType  ::=  ENUMERATED
 * {     cstaVoiceUnit                 ( 0),
 *     dataModem                 ( 1),
 *     digitalDataIsochronousIeee1394         ( 2),
 *     digitalDataIsochronousGeoport         ( 3),
 *     digitalDataIsochronousIeeeAtm         ( 4),
 *     digitalDataIsochronousIeeeIsdn         ( 5),
 *     digitalDataApi                 ( 6),
 *     ectfS100MediaServicesDefault         ( 7),
 *     ectfS100MediaServicesAppServices     ( 8),
 *     cstaIVRScript1                 ( 9),
 *     cstaIVRScript2                 (10),
 *     cstaIVRScript3                 (11),
 *     cstaIVRScript4                 (12),
 *     cstaIVRScript5                 (13),
 *     cstaIVRScript6                 (14),
 *     cstaIVRScript7                 (15),
 *     cstaIVRScript8                 (16),
 *     cstaIVRScript9                 (17),
 *     cstaIVRScript10             (18),
 *     liveSoundCaptureAnalog             (19),
 *     liveSoundTransmitAnalog         (20),
 *     liveSoundCaptureIeee1394         (21),
 *     liveSoundTransmitIeee1394         (22),
 *     liveSoundCaptureTransmitGeoport     (23),
 *     liveSoundCaptureTransmitAtm         (24),
 *     liveSoundCaptureTransmitISDN         (25),
 *     soundCaptureTransmitADPCM         (26),
 *     soundCaptureTransmitApi         (27),
 *     usb                     (28),
 *     sfSpecific1                 (29),
 *     sfSpecific2                 (30),
 *     sfSpecific3                 (31),
 *     sfSpecific4                 (32),
 *     sfSpecific5                 (33),
 *     sfSpecific6                 (34),
 *     sfSpecific7                 (35),
 *     sfSpecific8                 (36),
 *     sfSpecific9                 (37),
 *     sfSpecific10                 (38) }
 * ```
 * 
 * @enum {number}
 */
export
type MediaServiceType = _enum_for_MediaServiceType;

/**
 * @summary MediaServiceType
 * @description
 *
 * Which media service is (or was) attached to or detached from a call or
 * connection. See ECMA-269 Table 6-10 for how `MediaStreamID` is interpreted
 * per type. ECMA-269 §12.2.21.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MediaServiceType  ::=  ENUMERATED
 * {     cstaVoiceUnit                 ( 0),
 *     dataModem                 ( 1),
 *     digitalDataIsochronousIeee1394         ( 2),
 *     digitalDataIsochronousGeoport         ( 3),
 *     digitalDataIsochronousIeeeAtm         ( 4),
 *     digitalDataIsochronousIeeeIsdn         ( 5),
 *     digitalDataApi                 ( 6),
 *     ectfS100MediaServicesDefault         ( 7),
 *     ectfS100MediaServicesAppServices     ( 8),
 *     cstaIVRScript1                 ( 9),
 *     cstaIVRScript2                 (10),
 *     cstaIVRScript3                 (11),
 *     cstaIVRScript4                 (12),
 *     cstaIVRScript5                 (13),
 *     cstaIVRScript6                 (14),
 *     cstaIVRScript7                 (15),
 *     cstaIVRScript8                 (16),
 *     cstaIVRScript9                 (17),
 *     cstaIVRScript10             (18),
 *     liveSoundCaptureAnalog             (19),
 *     liveSoundTransmitAnalog         (20),
 *     liveSoundCaptureIeee1394         (21),
 *     liveSoundTransmitIeee1394         (22),
 *     liveSoundCaptureTransmitGeoport     (23),
 *     liveSoundCaptureTransmitAtm         (24),
 *     liveSoundCaptureTransmitISDN         (25),
 *     soundCaptureTransmitADPCM         (26),
 *     soundCaptureTransmitApi         (27),
 *     usb                     (28),
 *     sfSpecific1                 (29),
 *     sfSpecific2                 (30),
 *     sfSpecific3                 (31),
 *     sfSpecific4                 (32),
 *     sfSpecific5                 (33),
 *     sfSpecific6                 (34),
 *     sfSpecific7                 (35),
 *     sfSpecific8                 (36),
 *     sfSpecific9                 (37),
 *     sfSpecific10                 (38) }
 * ```
 * 
 * @enum {number}
 */
export
const MediaServiceType = _enum_for_MediaServiceType;

/**
 * @summary MediaServiceType_cstaVoiceUnit
 * @description
 *
 * CSTA Voice Unit; stream ID is the connection ID. ECMA-269 Table 6-10.
 *
 * @constant
 * @type {number}
 */
export
const MediaServiceType_cstaVoiceUnit: MediaServiceType = MediaServiceType.cstaVoiceUnit; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cstaVoiceUnit
 * @constant
 * @type {number}
 */
export
const cstaVoiceUnit: MediaServiceType = MediaServiceType.cstaVoiceUnit; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaServiceType_dataModem
 * @description
 *
 * Data modem; stream ID is the modem access address. ECMA-269 Table 6-10.
 *
 * @constant
 * @type {number}
 */
export
const MediaServiceType_dataModem: MediaServiceType = MediaServiceType.dataModem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dataModem
 * @constant
 * @type {number}
 */
export
const dataModem: MediaServiceType = MediaServiceType.dataModem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaServiceType_digitalDataIsochronousIeee1394
 * @description
 *
 * IEEE 1394 isochronous digital data. ECMA-269 Table 6-10.
 *
 * @constant
 * @type {number}
 */
export
const MediaServiceType_digitalDataIsochronousIeee1394: MediaServiceType = MediaServiceType.digitalDataIsochronousIeee1394; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary digitalDataIsochronousIeee1394
 * @constant
 * @type {number}
 */
export
const digitalDataIsochronousIeee1394: MediaServiceType = MediaServiceType.digitalDataIsochronousIeee1394; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaServiceType_digitalDataIsochronousGeoport
 * @description
 *
 * GeoPort isochronous digital data. ECMA-269 Table 6-10.
 *
 * @constant
 * @type {number}
 */
export
const MediaServiceType_digitalDataIsochronousGeoport: MediaServiceType = MediaServiceType.digitalDataIsochronousGeoport; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary digitalDataIsochronousGeoport
 * @constant
 * @type {number}
 */
export
const digitalDataIsochronousGeoport: MediaServiceType = MediaServiceType.digitalDataIsochronousGeoport; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaServiceType_digitalDataIsochronousIeeeAtm
 * @description
 *
 * ATM virtual channel/path. ECMA-269 Table 6-10.
 *
 * @constant
 * @type {number}
 */
export
const MediaServiceType_digitalDataIsochronousIeeeAtm: MediaServiceType = MediaServiceType.digitalDataIsochronousIeeeAtm; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary digitalDataIsochronousIeeeAtm
 * @constant
 * @type {number}
 */
export
const digitalDataIsochronousIeeeAtm: MediaServiceType = MediaServiceType.digitalDataIsochronousIeeeAtm; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaServiceType_digitalDataIsochronousIeeeIsdn
 * @description
 *
 * ISDN bearer channel. ECMA-269 Table 6-10.
 *
 * @constant
 * @type {number}
 */
export
const MediaServiceType_digitalDataIsochronousIeeeIsdn: MediaServiceType = MediaServiceType.digitalDataIsochronousIeeeIsdn; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary digitalDataIsochronousIeeeIsdn
 * @constant
 * @type {number}
 */
export
const digitalDataIsochronousIeeeIsdn: MediaServiceType = MediaServiceType.digitalDataIsochronousIeeeIsdn; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaServiceType_digitalDataApi
 * @description
 *
 * API digital-data stream (e.g. a socket). ECMA-269 Table 6-10.
 *
 * @constant
 * @type {number}
 */
export
const MediaServiceType_digitalDataApi: MediaServiceType = MediaServiceType.digitalDataApi; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary digitalDataApi
 * @constant
 * @type {number}
 */
export
const digitalDataApi: MediaServiceType = MediaServiceType.digitalDataApi; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaServiceType_ectfS100MediaServicesDefault
 * @description
 *
 * ECTF S.100 Media Services CCR Resource ID. ECMA-269 Table 6-10.
 *
 * @constant
 * @type {number}
 */
export
const MediaServiceType_ectfS100MediaServicesDefault: MediaServiceType = MediaServiceType.ectfS100MediaServicesDefault; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ectfS100MediaServicesDefault
 * @constant
 * @type {number}
 */
export
const ectfS100MediaServicesDefault: MediaServiceType = MediaServiceType.ectfS100MediaServicesDefault; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaServiceType_ectfS100MediaServicesAppServices
 * @description
 *
 * ECTF S.100 Application Service. ECMA-269 Table 6-10.
 *
 * @constant
 * @type {number}
 */
export
const MediaServiceType_ectfS100MediaServicesAppServices: MediaServiceType = MediaServiceType.ectfS100MediaServicesAppServices; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ectfS100MediaServicesAppServices
 * @constant
 * @type {number}
 */
export
const ectfS100MediaServicesAppServices: MediaServiceType = MediaServiceType.ectfS100MediaServicesAppServices; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaServiceType_cstaIVRScript1
 * @description
 *
 * IVR script slot; media-stream attachment is vendor-specific. ECMA-269 Table
 * 6-10.
 *
 * @constant
 * @type {number}
 */
export
const MediaServiceType_cstaIVRScript1: MediaServiceType = MediaServiceType.cstaIVRScript1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cstaIVRScript1
 * @constant
 * @type {number}
 */
export
const cstaIVRScript1: MediaServiceType = MediaServiceType.cstaIVRScript1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaServiceType_cstaIVRScript2
 * @description
 *
 * IVR script slot; media-stream attachment is vendor-specific. ECMA-269 Table
 * 6-10.
 *
 * @constant
 * @type {number}
 */
export
const MediaServiceType_cstaIVRScript2: MediaServiceType = MediaServiceType.cstaIVRScript2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cstaIVRScript2
 * @constant
 * @type {number}
 */
export
const cstaIVRScript2: MediaServiceType = MediaServiceType.cstaIVRScript2; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaServiceType_cstaIVRScript3
 * @description
 *
 * IVR script slot; media-stream attachment is vendor-specific. ECMA-269 Table
 * 6-10.
 *
 * @constant
 * @type {number}
 */
export
const MediaServiceType_cstaIVRScript3: MediaServiceType = MediaServiceType.cstaIVRScript3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cstaIVRScript3
 * @constant
 * @type {number}
 */
export
const cstaIVRScript3: MediaServiceType = MediaServiceType.cstaIVRScript3; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaServiceType_cstaIVRScript4
 * @description
 *
 * IVR script slot; media-stream attachment is vendor-specific. ECMA-269 Table
 * 6-10.
 *
 * @constant
 * @type {number}
 */
export
const MediaServiceType_cstaIVRScript4: MediaServiceType = MediaServiceType.cstaIVRScript4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cstaIVRScript4
 * @constant
 * @type {number}
 */
export
const cstaIVRScript4: MediaServiceType = MediaServiceType.cstaIVRScript4; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaServiceType_cstaIVRScript5
 * @description
 *
 * IVR script slot; media-stream attachment is vendor-specific. ECMA-269 Table
 * 6-10.
 *
 * @constant
 * @type {number}
 */
export
const MediaServiceType_cstaIVRScript5: MediaServiceType = MediaServiceType.cstaIVRScript5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cstaIVRScript5
 * @constant
 * @type {number}
 */
export
const cstaIVRScript5: MediaServiceType = MediaServiceType.cstaIVRScript5; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaServiceType_cstaIVRScript6
 * @description
 *
 * IVR script slot; media-stream attachment is vendor-specific. ECMA-269 Table
 * 6-10.
 *
 * @constant
 * @type {number}
 */
export
const MediaServiceType_cstaIVRScript6: MediaServiceType = MediaServiceType.cstaIVRScript6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cstaIVRScript6
 * @constant
 * @type {number}
 */
export
const cstaIVRScript6: MediaServiceType = MediaServiceType.cstaIVRScript6; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaServiceType_cstaIVRScript7
 * @description
 *
 * IVR script slot; media-stream attachment is vendor-specific. ECMA-269 Table
 * 6-10.
 *
 * @constant
 * @type {number}
 */
export
const MediaServiceType_cstaIVRScript7: MediaServiceType = MediaServiceType.cstaIVRScript7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cstaIVRScript7
 * @constant
 * @type {number}
 */
export
const cstaIVRScript7: MediaServiceType = MediaServiceType.cstaIVRScript7; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaServiceType_cstaIVRScript8
 * @description
 *
 * IVR script slot; media-stream attachment is vendor-specific. ECMA-269 Table
 * 6-10.
 *
 * @constant
 * @type {number}
 */
export
const MediaServiceType_cstaIVRScript8: MediaServiceType = MediaServiceType.cstaIVRScript8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cstaIVRScript8
 * @constant
 * @type {number}
 */
export
const cstaIVRScript8: MediaServiceType = MediaServiceType.cstaIVRScript8; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaServiceType_cstaIVRScript9
 * @description
 *
 * IVR script slot; media-stream attachment is vendor-specific. ECMA-269 Table
 * 6-10.
 *
 * @constant
 * @type {number}
 */
export
const MediaServiceType_cstaIVRScript9: MediaServiceType = MediaServiceType.cstaIVRScript9; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cstaIVRScript9
 * @constant
 * @type {number}
 */
export
const cstaIVRScript9: MediaServiceType = MediaServiceType.cstaIVRScript9; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaServiceType_cstaIVRScript10
 * @description
 *
 * IVR script slot; media-stream attachment is vendor-specific. ECMA-269 Table
 * 6-10.
 *
 * @constant
 * @type {number}
 */
export
const MediaServiceType_cstaIVRScript10: MediaServiceType = MediaServiceType.cstaIVRScript10; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cstaIVRScript10
 * @constant
 * @type {number}
 */
export
const cstaIVRScript10: MediaServiceType = MediaServiceType.cstaIVRScript10; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaServiceType_liveSoundCaptureAnalog
 * @description
 *
 * Analog jack for live sound capture. ECMA-269 Table 6-10.
 *
 * @constant
 * @type {number}
 */
export
const MediaServiceType_liveSoundCaptureAnalog: MediaServiceType = MediaServiceType.liveSoundCaptureAnalog; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary liveSoundCaptureAnalog
 * @constant
 * @type {number}
 */
export
const liveSoundCaptureAnalog: MediaServiceType = MediaServiceType.liveSoundCaptureAnalog; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaServiceType_liveSoundTransmitAnalog
 * @description
 *
 * Analog jack for live sound transmit. ECMA-269 Table 6-10.
 *
 * @constant
 * @type {number}
 */
export
const MediaServiceType_liveSoundTransmitAnalog: MediaServiceType = MediaServiceType.liveSoundTransmitAnalog; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary liveSoundTransmitAnalog
 * @constant
 * @type {number}
 */
export
const liveSoundTransmitAnalog: MediaServiceType = MediaServiceType.liveSoundTransmitAnalog; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaServiceType_liveSoundCaptureIeee1394
 * @description
 *
 * IEEE 1394 live sound capture. ECMA-269 Table 6-10.
 *
 * @constant
 * @type {number}
 */
export
const MediaServiceType_liveSoundCaptureIeee1394: MediaServiceType = MediaServiceType.liveSoundCaptureIeee1394; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary liveSoundCaptureIeee1394
 * @constant
 * @type {number}
 */
export
const liveSoundCaptureIeee1394: MediaServiceType = MediaServiceType.liveSoundCaptureIeee1394; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaServiceType_liveSoundTransmitIeee1394
 * @description
 *
 * IEEE 1394 live sound transmit. ECMA-269 Table 6-10.
 *
 * @constant
 * @type {number}
 */
export
const MediaServiceType_liveSoundTransmitIeee1394: MediaServiceType = MediaServiceType.liveSoundTransmitIeee1394; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary liveSoundTransmitIeee1394
 * @constant
 * @type {number}
 */
export
const liveSoundTransmitIeee1394: MediaServiceType = MediaServiceType.liveSoundTransmitIeee1394; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaServiceType_liveSoundCaptureTransmitGeoport
 * @description
 *
 * GeoPort live sound capture and transmit. ECMA-269 Table 6-10.
 *
 * @constant
 * @type {number}
 */
export
const MediaServiceType_liveSoundCaptureTransmitGeoport: MediaServiceType = MediaServiceType.liveSoundCaptureTransmitGeoport; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary liveSoundCaptureTransmitGeoport
 * @constant
 * @type {number}
 */
export
const liveSoundCaptureTransmitGeoport: MediaServiceType = MediaServiceType.liveSoundCaptureTransmitGeoport; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaServiceType_liveSoundCaptureTransmitAtm
 * @description
 *
 * ATM live sound capture and transmit. ECMA-269 Table 6-10.
 *
 * @constant
 * @type {number}
 */
export
const MediaServiceType_liveSoundCaptureTransmitAtm: MediaServiceType = MediaServiceType.liveSoundCaptureTransmitAtm; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary liveSoundCaptureTransmitAtm
 * @constant
 * @type {number}
 */
export
const liveSoundCaptureTransmitAtm: MediaServiceType = MediaServiceType.liveSoundCaptureTransmitAtm; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaServiceType_liveSoundCaptureTransmitISDN
 * @description
 *
 * ISDN live sound capture and transmit. ECMA-269 Table 6-10.
 *
 * @constant
 * @type {number}
 */
export
const MediaServiceType_liveSoundCaptureTransmitISDN: MediaServiceType = MediaServiceType.liveSoundCaptureTransmitISDN; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary liveSoundCaptureTransmitISDN
 * @constant
 * @type {number}
 */
export
const liveSoundCaptureTransmitISDN: MediaServiceType = MediaServiceType.liveSoundCaptureTransmitISDN; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaServiceType_soundCaptureTransmitADPCM
 * @description
 *
 * Rockwell ADPCM packet sound stream. ECMA-269 Table 6-10.
 *
 * @constant
 * @type {number}
 */
export
const MediaServiceType_soundCaptureTransmitADPCM: MediaServiceType = MediaServiceType.soundCaptureTransmitADPCM; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary soundCaptureTransmitADPCM
 * @constant
 * @type {number}
 */
export
const soundCaptureTransmitADPCM: MediaServiceType = MediaServiceType.soundCaptureTransmitADPCM; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaServiceType_soundCaptureTransmitApi
 * @description
 *
 * API sound stream (e.g. MCI handle). ECMA-269 Table 6-10.
 *
 * @constant
 * @type {number}
 */
export
const MediaServiceType_soundCaptureTransmitApi: MediaServiceType = MediaServiceType.soundCaptureTransmitApi; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary soundCaptureTransmitApi
 * @constant
 * @type {number}
 */
export
const soundCaptureTransmitApi: MediaServiceType = MediaServiceType.soundCaptureTransmitApi; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaServiceType_usb
 * @description
 *
 * USB endpoint. ECMA-269 Table 6-10.
 *
 * @constant
 * @type {number}
 */
export
const MediaServiceType_usb: MediaServiceType = MediaServiceType.usb; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary usb
 * @constant
 * @type {number}
 */
export
const usb: MediaServiceType = MediaServiceType.usb; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaServiceType_sfSpecific1
 * @description
 *
 * Switching-function-specific media service; attachment is vendor-specific.
 * ECMA-269 Table 6-10.
 *
 * @constant
 * @type {number}
 */
export
const MediaServiceType_sfSpecific1: MediaServiceType = MediaServiceType.sfSpecific1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sfSpecific1
 * @constant
 * @type {number}
 */
export
const sfSpecific1: MediaServiceType = MediaServiceType.sfSpecific1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaServiceType_sfSpecific2
 * @description
 *
 * Switching-function-specific media service; attachment is vendor-specific.
 * ECMA-269 Table 6-10.
 *
 * @constant
 * @type {number}
 */
export
const MediaServiceType_sfSpecific2: MediaServiceType = MediaServiceType.sfSpecific2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sfSpecific2
 * @constant
 * @type {number}
 */
export
const sfSpecific2: MediaServiceType = MediaServiceType.sfSpecific2; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaServiceType_sfSpecific3
 * @description
 *
 * Switching-function-specific media service; attachment is vendor-specific.
 * ECMA-269 Table 6-10.
 *
 * @constant
 * @type {number}
 */
export
const MediaServiceType_sfSpecific3: MediaServiceType = MediaServiceType.sfSpecific3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sfSpecific3
 * @constant
 * @type {number}
 */
export
const sfSpecific3: MediaServiceType = MediaServiceType.sfSpecific3; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaServiceType_sfSpecific4
 * @description
 *
 * Switching-function-specific media service; attachment is vendor-specific.
 * ECMA-269 Table 6-10.
 *
 * @constant
 * @type {number}
 */
export
const MediaServiceType_sfSpecific4: MediaServiceType = MediaServiceType.sfSpecific4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sfSpecific4
 * @constant
 * @type {number}
 */
export
const sfSpecific4: MediaServiceType = MediaServiceType.sfSpecific4; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaServiceType_sfSpecific5
 * @description
 *
 * Switching-function-specific media service; attachment is vendor-specific.
 * ECMA-269 Table 6-10.
 *
 * @constant
 * @type {number}
 */
export
const MediaServiceType_sfSpecific5: MediaServiceType = MediaServiceType.sfSpecific5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sfSpecific5
 * @constant
 * @type {number}
 */
export
const sfSpecific5: MediaServiceType = MediaServiceType.sfSpecific5; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaServiceType_sfSpecific6
 * @description
 *
 * Switching-function-specific media service; attachment is vendor-specific.
 * ECMA-269 Table 6-10.
 *
 * @constant
 * @type {number}
 */
export
const MediaServiceType_sfSpecific6: MediaServiceType = MediaServiceType.sfSpecific6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sfSpecific6
 * @constant
 * @type {number}
 */
export
const sfSpecific6: MediaServiceType = MediaServiceType.sfSpecific6; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaServiceType_sfSpecific7
 * @description
 *
 * Switching-function-specific media service; attachment is vendor-specific.
 * ECMA-269 Table 6-10.
 *
 * @constant
 * @type {number}
 */
export
const MediaServiceType_sfSpecific7: MediaServiceType = MediaServiceType.sfSpecific7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sfSpecific7
 * @constant
 * @type {number}
 */
export
const sfSpecific7: MediaServiceType = MediaServiceType.sfSpecific7; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaServiceType_sfSpecific8
 * @description
 *
 * Switching-function-specific media service; attachment is vendor-specific.
 * ECMA-269 Table 6-10.
 *
 * @constant
 * @type {number}
 */
export
const MediaServiceType_sfSpecific8: MediaServiceType = MediaServiceType.sfSpecific8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sfSpecific8
 * @constant
 * @type {number}
 */
export
const sfSpecific8: MediaServiceType = MediaServiceType.sfSpecific8; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaServiceType_sfSpecific9
 * @description
 *
 * Switching-function-specific media service; attachment is vendor-specific.
 * ECMA-269 Table 6-10.
 *
 * @constant
 * @type {number}
 */
export
const MediaServiceType_sfSpecific9: MediaServiceType = MediaServiceType.sfSpecific9; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sfSpecific9
 * @constant
 * @type {number}
 */
export
const sfSpecific9: MediaServiceType = MediaServiceType.sfSpecific9; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaServiceType_sfSpecific10
 * @description
 *
 * Switching-function-specific media service; attachment is vendor-specific.
 * ECMA-269 Table 6-10.
 *
 * @constant
 * @type {number}
 */
export
const MediaServiceType_sfSpecific10: MediaServiceType = MediaServiceType.sfSpecific10; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sfSpecific10
 * @constant
 * @type {number}
 */
export
const sfSpecific10: MediaServiceType = MediaServiceType.sfSpecific10; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MediaServiceType: $.ASN1Decoder<MediaServiceType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MediaServiceType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MediaServiceType (el: _Element): MediaServiceType {
    if (!_cached_decoder_for_MediaServiceType) { _cached_decoder_for_MediaServiceType = $._decodeEnumerated; }
    return _cached_decoder_for_MediaServiceType(el);
}

let _cached_encoder_for_MediaServiceType: $.ASN1Encoder<MediaServiceType> | null = null;

/**
 * @summary Encodes a(n) MediaServiceType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MediaServiceType, encoded as an ASN.1 Element.
 */
export
function _encode_MediaServiceType (value: MediaServiceType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MediaServiceType) { _cached_encoder_for_MediaServiceType = $._encodeEnumerated; }
    return _cached_encoder_for_MediaServiceType(value, elGetter);
}


/* eslint-enable */
