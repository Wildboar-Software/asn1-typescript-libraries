/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary BasicService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BasicService  ::=  ENUMERATED {
 *     allServices(0),
 *     speech(1),
 *     unrestrictedDigitalInformation(2),
 *     audio3100Hz(3),
 *     telephony(32),
 *     teletex(33),
 *     telefaxGroup4Class1(34),
 *     videotexSyntaxBased(35),
 *     videotelephony(36)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_BasicService {
    allServices = 0,
    speech = 1,
    unrestrictedDigitalInformation = 2,
    audio3100Hz = 3,
    telephony = 32,
    teletex = 33,
    telefaxGroup4Class1 = 34,
    videotexSyntaxBased = 35,
    videotelephony = 36,
}

/**
 * @summary BasicService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BasicService  ::=  ENUMERATED {
 *     allServices(0),
 *     speech(1),
 *     unrestrictedDigitalInformation(2),
 *     audio3100Hz(3),
 *     telephony(32),
 *     teletex(33),
 *     telefaxGroup4Class1(34),
 *     videotexSyntaxBased(35),
 *     videotelephony(36)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type BasicService = _enum_for_BasicService;

/**
 * @summary BasicService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BasicService  ::=  ENUMERATED {
 *     allServices(0),
 *     speech(1),
 *     unrestrictedDigitalInformation(2),
 *     audio3100Hz(3),
 *     telephony(32),
 *     teletex(33),
 *     telefaxGroup4Class1(34),
 *     videotexSyntaxBased(35),
 *     videotelephony(36)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const BasicService = _enum_for_BasicService;

/**
 * @summary BasicService_allServices
 * @constant
 * @type {number}
 */
export
const BasicService_allServices: BasicService = BasicService.allServices; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allServices
 * @constant
 * @type {number}
 */
export
const allServices: BasicService = BasicService.allServices; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_speech
 * @constant
 * @type {number}
 */
export
const BasicService_speech: BasicService = BasicService.speech; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary speech
 * @constant
 * @type {number}
 */
export
const speech: BasicService = BasicService.speech; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_unrestrictedDigitalInformation
 * @constant
 * @type {number}
 */
export
const BasicService_unrestrictedDigitalInformation: BasicService = BasicService.unrestrictedDigitalInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unrestrictedDigitalInformation
 * @constant
 * @type {number}
 */
export
const unrestrictedDigitalInformation: BasicService = BasicService.unrestrictedDigitalInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_audio3100Hz
 * @constant
 * @type {number}
 */
export
const BasicService_audio3100Hz: BasicService = BasicService.audio3100Hz; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary audio3100Hz
 * @constant
 * @type {number}
 */
export
const audio3100Hz: BasicService = BasicService.audio3100Hz; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_telephony
 * @constant
 * @type {number}
 */
export
const BasicService_telephony: BasicService = BasicService.telephony; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary telephony
 * @constant
 * @type {number}
 */
export
const telephony: BasicService = BasicService.telephony; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_teletex
 * @constant
 * @type {number}
 */
export
const BasicService_teletex: BasicService = BasicService.teletex; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary teletex
 * @constant
 * @type {number}
 */
export
const teletex: BasicService = BasicService.teletex; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_telefaxGroup4Class1
 * @constant
 * @type {number}
 */
export
const BasicService_telefaxGroup4Class1: BasicService = BasicService.telefaxGroup4Class1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary telefaxGroup4Class1
 * @constant
 * @type {number}
 */
export
const telefaxGroup4Class1: BasicService = BasicService.telefaxGroup4Class1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_videotexSyntaxBased
 * @constant
 * @type {number}
 */
export
const BasicService_videotexSyntaxBased: BasicService = BasicService.videotexSyntaxBased; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary videotexSyntaxBased
 * @constant
 * @type {number}
 */
export
const videotexSyntaxBased: BasicService = BasicService.videotexSyntaxBased; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_videotelephony
 * @constant
 * @type {number}
 */
export
const BasicService_videotelephony: BasicService = BasicService.videotelephony; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary videotelephony
 * @constant
 * @type {number}
 */
export
const videotelephony: BasicService = BasicService.videotelephony; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_BasicService: $.ASN1Decoder<BasicService> = $._decodeEnumerated;

export
const _encode_BasicService: $.ASN1Encoder<BasicService> = $._encodeEnumerated;

/* eslint-enable */
