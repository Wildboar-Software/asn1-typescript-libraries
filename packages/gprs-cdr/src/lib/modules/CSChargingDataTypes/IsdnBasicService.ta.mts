/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IsdnBasicService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IsdnBasicService  ::=  ENUMERATED {
 *    allServices                                               ( 0 ),
 *    speech                                                    ( 1 ),
 *    unrestrictedDigitalInformation                            ( 2 ),
 *    audio3k1Hz                                                ( 3 ),
 *    unrestrictedDigitalInformationWithTonesAndAnouncements    ( 4 ),
 *    telephony3k1Hz                                            ( 32 ),
 *    teletex                                                   ( 33 ),
 *    telefaxGroup4Class1                                       ( 34 ),
 *    videotexSyntaxBased                                       ( 35 ),
 *    videotelephony                                            ( 36 ),
 *    telefaxGroup2-3                                           ( 37 ),
 *    telephony7kHz                                             ( 38 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_IsdnBasicService {
    allServices = 0,
    speech = 1,
    unrestrictedDigitalInformation = 2,
    audio3k1Hz = 3,
    unrestrictedDigitalInformationWithTonesAndAnouncements = 4,
    telephony3k1Hz = 32,
    teletex = 33,
    telefaxGroup4Class1 = 34,
    videotexSyntaxBased = 35,
    videotelephony = 36,
    telefaxGroup2_3 = 37,
    telephony7kHz = 38,
}

/**
 * @summary IsdnBasicService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IsdnBasicService  ::=  ENUMERATED {
 *    allServices                                               ( 0 ),
 *    speech                                                    ( 1 ),
 *    unrestrictedDigitalInformation                            ( 2 ),
 *    audio3k1Hz                                                ( 3 ),
 *    unrestrictedDigitalInformationWithTonesAndAnouncements    ( 4 ),
 *    telephony3k1Hz                                            ( 32 ),
 *    teletex                                                   ( 33 ),
 *    telefaxGroup4Class1                                       ( 34 ),
 *    videotexSyntaxBased                                       ( 35 ),
 *    videotelephony                                            ( 36 ),
 *    telefaxGroup2-3                                           ( 37 ),
 *    telephony7kHz                                             ( 38 ) }
 * ```
 * 
 * @enum {number}
 */
export
type IsdnBasicService = _enum_for_IsdnBasicService;

/**
 * @summary IsdnBasicService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IsdnBasicService  ::=  ENUMERATED {
 *    allServices                                               ( 0 ),
 *    speech                                                    ( 1 ),
 *    unrestrictedDigitalInformation                            ( 2 ),
 *    audio3k1Hz                                                ( 3 ),
 *    unrestrictedDigitalInformationWithTonesAndAnouncements    ( 4 ),
 *    telephony3k1Hz                                            ( 32 ),
 *    teletex                                                   ( 33 ),
 *    telefaxGroup4Class1                                       ( 34 ),
 *    videotexSyntaxBased                                       ( 35 ),
 *    videotelephony                                            ( 36 ),
 *    telefaxGroup2-3                                           ( 37 ),
 *    telephony7kHz                                             ( 38 ) }
 * ```
 * 
 * @enum {number}
 */
export
const IsdnBasicService = _enum_for_IsdnBasicService;

/**
 * @summary IsdnBasicService_allServices
 * @constant
 * @type {number}
 */
export
const IsdnBasicService_allServices: IsdnBasicService = IsdnBasicService.allServices; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allServices
 * @constant
 * @type {number}
 */
export
const allServices: IsdnBasicService = IsdnBasicService.allServices; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IsdnBasicService_speech
 * @constant
 * @type {number}
 */
export
const IsdnBasicService_speech: IsdnBasicService = IsdnBasicService.speech; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary speech
 * @constant
 * @type {number}
 */
export
const speech: IsdnBasicService = IsdnBasicService.speech; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IsdnBasicService_unrestrictedDigitalInformation
 * @constant
 * @type {number}
 */
export
const IsdnBasicService_unrestrictedDigitalInformation: IsdnBasicService = IsdnBasicService.unrestrictedDigitalInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unrestrictedDigitalInformation
 * @constant
 * @type {number}
 */
export
const unrestrictedDigitalInformation: IsdnBasicService = IsdnBasicService.unrestrictedDigitalInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IsdnBasicService_audio3k1Hz
 * @constant
 * @type {number}
 */
export
const IsdnBasicService_audio3k1Hz: IsdnBasicService = IsdnBasicService.audio3k1Hz; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary audio3k1Hz
 * @constant
 * @type {number}
 */
export
const audio3k1Hz: IsdnBasicService = IsdnBasicService.audio3k1Hz; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IsdnBasicService_unrestrictedDigitalInformationWithTonesAndAnouncements
 * @constant
 * @type {number}
 */
export
const IsdnBasicService_unrestrictedDigitalInformationWithTonesAndAnouncements: IsdnBasicService = IsdnBasicService.unrestrictedDigitalInformationWithTonesAndAnouncements; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unrestrictedDigitalInformationWithTonesAndAnouncements
 * @constant
 * @type {number}
 */
export
const unrestrictedDigitalInformationWithTonesAndAnouncements: IsdnBasicService = IsdnBasicService.unrestrictedDigitalInformationWithTonesAndAnouncements; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IsdnBasicService_telephony3k1Hz
 * @constant
 * @type {number}
 */
export
const IsdnBasicService_telephony3k1Hz: IsdnBasicService = IsdnBasicService.telephony3k1Hz; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary telephony3k1Hz
 * @constant
 * @type {number}
 */
export
const telephony3k1Hz: IsdnBasicService = IsdnBasicService.telephony3k1Hz; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IsdnBasicService_teletex
 * @constant
 * @type {number}
 */
export
const IsdnBasicService_teletex: IsdnBasicService = IsdnBasicService.teletex; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary teletex
 * @constant
 * @type {number}
 */
export
const teletex: IsdnBasicService = IsdnBasicService.teletex; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IsdnBasicService_telefaxGroup4Class1
 * @constant
 * @type {number}
 */
export
const IsdnBasicService_telefaxGroup4Class1: IsdnBasicService = IsdnBasicService.telefaxGroup4Class1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary telefaxGroup4Class1
 * @constant
 * @type {number}
 */
export
const telefaxGroup4Class1: IsdnBasicService = IsdnBasicService.telefaxGroup4Class1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IsdnBasicService_videotexSyntaxBased
 * @constant
 * @type {number}
 */
export
const IsdnBasicService_videotexSyntaxBased: IsdnBasicService = IsdnBasicService.videotexSyntaxBased; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary videotexSyntaxBased
 * @constant
 * @type {number}
 */
export
const videotexSyntaxBased: IsdnBasicService = IsdnBasicService.videotexSyntaxBased; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IsdnBasicService_videotelephony
 * @constant
 * @type {number}
 */
export
const IsdnBasicService_videotelephony: IsdnBasicService = IsdnBasicService.videotelephony; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary videotelephony
 * @constant
 * @type {number}
 */
export
const videotelephony: IsdnBasicService = IsdnBasicService.videotelephony; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IsdnBasicService_telefaxGroup2_3
 * @constant
 * @type {number}
 */
export
const IsdnBasicService_telefaxGroup2_3: IsdnBasicService = IsdnBasicService.telefaxGroup2_3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary telefaxGroup2_3
 * @constant
 * @type {number}
 */
export
const telefaxGroup2_3: IsdnBasicService = IsdnBasicService.telefaxGroup2_3; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IsdnBasicService_telephony7kHz
 * @constant
 * @type {number}
 */
export
const IsdnBasicService_telephony7kHz: IsdnBasicService = IsdnBasicService.telephony7kHz; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary telephony7kHz
 * @constant
 * @type {number}
 */
export
const telephony7kHz: IsdnBasicService = IsdnBasicService.telephony7kHz; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_IsdnBasicService: $.ASN1Decoder<IsdnBasicService> = $._decodeEnumerated;

export
const _encode_IsdnBasicService: $.ASN1Encoder<IsdnBasicService> = $._encodeEnumerated;

/* eslint-enable */
