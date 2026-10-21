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
 *     -- All basic service values which were previously imported from Call Diversion
 *     -- Operations have been retained to allow for backward compatibility with edition 2.
 *     -- A new service value was added for group 2,3 fax and numerous MWI service
 *     -- classes were added for multimedia.
 * 
 *     -- MWI Services:
 *     --                        For compatibility among vendors, speech is recommended for voice mail
 *     --                        indications.
 *     allServices(0),
 *     speech(1),
 *     unrestrictedDigitalInformation(2),
 *     audio3100Hz(3),
 *     telephony(32),
 *     teletex(33),
 *     telefaxGroup4Class1(34),
 *     videotextSyntaxBased(35),
 *     videotelephony(36),
 *     telefaxGroup2-3(37),
 *     reservedNotUsed1(38),
 *     reservedNotUsed2(39),
 *     reservedNotUsed3(40),
 *     reservedNotUsed4(41),
 *     reservedNotUsed5(42),
 *     -- MWI Service Classes:
 *     email(51),
 *     video(52),
 *     fileTransfer(53),
 *     shortMessageService(54),
 *     speechAndVideo(55),
 *     speechAndFax(56),
 *     speechAndEmail(57),
 *     videoAndFax(58),
 *     videoAndEmail(59),
 *     faxAndEmail(60),
 *     speechVideoAndFax(61),
 *     speechVideoAndEmail(62),
 *     speechFaxAndEmail(63),
 *     videoFaxAndEmail(64),
 *     speechVideoFaxAndEmail(65),
 *     multimediaUnknown(66),
 *     serviceUnknown(67),
 *     --
 *     -- Reserved for future additions:
 *     futureReserve1(68),
 *     futureReserve2(69),
 *     futureReserve3(70),
 *     futureReserve4(71),
 *     futureReserve5(72),
 *     futureReserve6(73),
 *     futureReserve7(74),
 *     futureReserve8(75)
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
    videotextSyntaxBased = 35,
    videotelephony = 36,
    telefaxGroup2_3 = 37,
    reservedNotUsed1 = 38,
    reservedNotUsed2 = 39,
    reservedNotUsed3 = 40,
    reservedNotUsed4 = 41,
    reservedNotUsed5 = 42,
    email = 51,
    video = 52,
    fileTransfer = 53,
    shortMessageService = 54,
    speechAndVideo = 55,
    speechAndFax = 56,
    speechAndEmail = 57,
    videoAndFax = 58,
    videoAndEmail = 59,
    faxAndEmail = 60,
    speechVideoAndFax = 61,
    speechVideoAndEmail = 62,
    speechFaxAndEmail = 63,
    videoFaxAndEmail = 64,
    speechVideoFaxAndEmail = 65,
    multimediaUnknown = 66,
    serviceUnknown = 67,
    futureReserve1 = 68,
    futureReserve2 = 69,
    futureReserve3 = 70,
    futureReserve4 = 71,
    futureReserve5 = 72,
    futureReserve6 = 73,
    futureReserve7 = 74,
    futureReserve8 = 75,
}

/**
 * @summary BasicService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BasicService  ::=  ENUMERATED {
 *     -- All basic service values which were previously imported from Call Diversion
 *     -- Operations have been retained to allow for backward compatibility with edition 2.
 *     -- A new service value was added for group 2,3 fax and numerous MWI service
 *     -- classes were added for multimedia.
 * 
 *     -- MWI Services:
 *     --                        For compatibility among vendors, speech is recommended for voice mail
 *     --                        indications.
 *     allServices(0),
 *     speech(1),
 *     unrestrictedDigitalInformation(2),
 *     audio3100Hz(3),
 *     telephony(32),
 *     teletex(33),
 *     telefaxGroup4Class1(34),
 *     videotextSyntaxBased(35),
 *     videotelephony(36),
 *     telefaxGroup2-3(37),
 *     reservedNotUsed1(38),
 *     reservedNotUsed2(39),
 *     reservedNotUsed3(40),
 *     reservedNotUsed4(41),
 *     reservedNotUsed5(42),
 *     -- MWI Service Classes:
 *     email(51),
 *     video(52),
 *     fileTransfer(53),
 *     shortMessageService(54),
 *     speechAndVideo(55),
 *     speechAndFax(56),
 *     speechAndEmail(57),
 *     videoAndFax(58),
 *     videoAndEmail(59),
 *     faxAndEmail(60),
 *     speechVideoAndFax(61),
 *     speechVideoAndEmail(62),
 *     speechFaxAndEmail(63),
 *     videoFaxAndEmail(64),
 *     speechVideoFaxAndEmail(65),
 *     multimediaUnknown(66),
 *     serviceUnknown(67),
 *     --
 *     -- Reserved for future additions:
 *     futureReserve1(68),
 *     futureReserve2(69),
 *     futureReserve3(70),
 *     futureReserve4(71),
 *     futureReserve5(72),
 *     futureReserve6(73),
 *     futureReserve7(74),
 *     futureReserve8(75)
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
 *     -- All basic service values which were previously imported from Call Diversion
 *     -- Operations have been retained to allow for backward compatibility with edition 2.
 *     -- A new service value was added for group 2,3 fax and numerous MWI service
 *     -- classes were added for multimedia.
 * 
 *     -- MWI Services:
 *     --                        For compatibility among vendors, speech is recommended for voice mail
 *     --                        indications.
 *     allServices(0),
 *     speech(1),
 *     unrestrictedDigitalInformation(2),
 *     audio3100Hz(3),
 *     telephony(32),
 *     teletex(33),
 *     telefaxGroup4Class1(34),
 *     videotextSyntaxBased(35),
 *     videotelephony(36),
 *     telefaxGroup2-3(37),
 *     reservedNotUsed1(38),
 *     reservedNotUsed2(39),
 *     reservedNotUsed3(40),
 *     reservedNotUsed4(41),
 *     reservedNotUsed5(42),
 *     -- MWI Service Classes:
 *     email(51),
 *     video(52),
 *     fileTransfer(53),
 *     shortMessageService(54),
 *     speechAndVideo(55),
 *     speechAndFax(56),
 *     speechAndEmail(57),
 *     videoAndFax(58),
 *     videoAndEmail(59),
 *     faxAndEmail(60),
 *     speechVideoAndFax(61),
 *     speechVideoAndEmail(62),
 *     speechFaxAndEmail(63),
 *     videoFaxAndEmail(64),
 *     speechVideoFaxAndEmail(65),
 *     multimediaUnknown(66),
 *     serviceUnknown(67),
 *     --
 *     -- Reserved for future additions:
 *     futureReserve1(68),
 *     futureReserve2(69),
 *     futureReserve3(70),
 *     futureReserve4(71),
 *     futureReserve5(72),
 *     futureReserve6(73),
 *     futureReserve7(74),
 *     futureReserve8(75)
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
 * @summary BasicService_videotextSyntaxBased
 * @constant
 * @type {number}
 */
export
const BasicService_videotextSyntaxBased: BasicService = BasicService.videotextSyntaxBased; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary videotextSyntaxBased
 * @constant
 * @type {number}
 */
export
const videotextSyntaxBased: BasicService = BasicService.videotextSyntaxBased; /* SHORT_NAMED_ENUMERATED_VALUE */

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

/**
 * @summary BasicService_telefaxGroup2_3
 * @constant
 * @type {number}
 */
export
const BasicService_telefaxGroup2_3: BasicService = BasicService.telefaxGroup2_3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary telefaxGroup2_3
 * @constant
 * @type {number}
 */
export
const telefaxGroup2_3: BasicService = BasicService.telefaxGroup2_3; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_reservedNotUsed1
 * @constant
 * @type {number}
 */
export
const BasicService_reservedNotUsed1: BasicService = BasicService.reservedNotUsed1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reservedNotUsed1
 * @constant
 * @type {number}
 */
export
const reservedNotUsed1: BasicService = BasicService.reservedNotUsed1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_reservedNotUsed2
 * @constant
 * @type {number}
 */
export
const BasicService_reservedNotUsed2: BasicService = BasicService.reservedNotUsed2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reservedNotUsed2
 * @constant
 * @type {number}
 */
export
const reservedNotUsed2: BasicService = BasicService.reservedNotUsed2; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_reservedNotUsed3
 * @constant
 * @type {number}
 */
export
const BasicService_reservedNotUsed3: BasicService = BasicService.reservedNotUsed3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reservedNotUsed3
 * @constant
 * @type {number}
 */
export
const reservedNotUsed3: BasicService = BasicService.reservedNotUsed3; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_reservedNotUsed4
 * @constant
 * @type {number}
 */
export
const BasicService_reservedNotUsed4: BasicService = BasicService.reservedNotUsed4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reservedNotUsed4
 * @constant
 * @type {number}
 */
export
const reservedNotUsed4: BasicService = BasicService.reservedNotUsed4; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_reservedNotUsed5
 * @constant
 * @type {number}
 */
export
const BasicService_reservedNotUsed5: BasicService = BasicService.reservedNotUsed5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reservedNotUsed5
 * @constant
 * @type {number}
 */
export
const reservedNotUsed5: BasicService = BasicService.reservedNotUsed5; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_email
 * @constant
 * @type {number}
 */
export
const BasicService_email: BasicService = BasicService.email; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary email
 * @constant
 * @type {number}
 */
export
const email: BasicService = BasicService.email; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_video
 * @constant
 * @type {number}
 */
export
const BasicService_video: BasicService = BasicService.video; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary video
 * @constant
 * @type {number}
 */
export
const video: BasicService = BasicService.video; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_fileTransfer
 * @constant
 * @type {number}
 */
export
const BasicService_fileTransfer: BasicService = BasicService.fileTransfer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fileTransfer
 * @constant
 * @type {number}
 */
export
const fileTransfer: BasicService = BasicService.fileTransfer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_shortMessageService
 * @constant
 * @type {number}
 */
export
const BasicService_shortMessageService: BasicService = BasicService.shortMessageService; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary shortMessageService
 * @constant
 * @type {number}
 */
export
const shortMessageService: BasicService = BasicService.shortMessageService; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_speechAndVideo
 * @constant
 * @type {number}
 */
export
const BasicService_speechAndVideo: BasicService = BasicService.speechAndVideo; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary speechAndVideo
 * @constant
 * @type {number}
 */
export
const speechAndVideo: BasicService = BasicService.speechAndVideo; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_speechAndFax
 * @constant
 * @type {number}
 */
export
const BasicService_speechAndFax: BasicService = BasicService.speechAndFax; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary speechAndFax
 * @constant
 * @type {number}
 */
export
const speechAndFax: BasicService = BasicService.speechAndFax; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_speechAndEmail
 * @constant
 * @type {number}
 */
export
const BasicService_speechAndEmail: BasicService = BasicService.speechAndEmail; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary speechAndEmail
 * @constant
 * @type {number}
 */
export
const speechAndEmail: BasicService = BasicService.speechAndEmail; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_videoAndFax
 * @constant
 * @type {number}
 */
export
const BasicService_videoAndFax: BasicService = BasicService.videoAndFax; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary videoAndFax
 * @constant
 * @type {number}
 */
export
const videoAndFax: BasicService = BasicService.videoAndFax; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_videoAndEmail
 * @constant
 * @type {number}
 */
export
const BasicService_videoAndEmail: BasicService = BasicService.videoAndEmail; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary videoAndEmail
 * @constant
 * @type {number}
 */
export
const videoAndEmail: BasicService = BasicService.videoAndEmail; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_faxAndEmail
 * @constant
 * @type {number}
 */
export
const BasicService_faxAndEmail: BasicService = BasicService.faxAndEmail; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary faxAndEmail
 * @constant
 * @type {number}
 */
export
const faxAndEmail: BasicService = BasicService.faxAndEmail; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_speechVideoAndFax
 * @constant
 * @type {number}
 */
export
const BasicService_speechVideoAndFax: BasicService = BasicService.speechVideoAndFax; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary speechVideoAndFax
 * @constant
 * @type {number}
 */
export
const speechVideoAndFax: BasicService = BasicService.speechVideoAndFax; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_speechVideoAndEmail
 * @constant
 * @type {number}
 */
export
const BasicService_speechVideoAndEmail: BasicService = BasicService.speechVideoAndEmail; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary speechVideoAndEmail
 * @constant
 * @type {number}
 */
export
const speechVideoAndEmail: BasicService = BasicService.speechVideoAndEmail; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_speechFaxAndEmail
 * @constant
 * @type {number}
 */
export
const BasicService_speechFaxAndEmail: BasicService = BasicService.speechFaxAndEmail; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary speechFaxAndEmail
 * @constant
 * @type {number}
 */
export
const speechFaxAndEmail: BasicService = BasicService.speechFaxAndEmail; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_videoFaxAndEmail
 * @constant
 * @type {number}
 */
export
const BasicService_videoFaxAndEmail: BasicService = BasicService.videoFaxAndEmail; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary videoFaxAndEmail
 * @constant
 * @type {number}
 */
export
const videoFaxAndEmail: BasicService = BasicService.videoFaxAndEmail; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_speechVideoFaxAndEmail
 * @constant
 * @type {number}
 */
export
const BasicService_speechVideoFaxAndEmail: BasicService = BasicService.speechVideoFaxAndEmail; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary speechVideoFaxAndEmail
 * @constant
 * @type {number}
 */
export
const speechVideoFaxAndEmail: BasicService = BasicService.speechVideoFaxAndEmail; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_multimediaUnknown
 * @constant
 * @type {number}
 */
export
const BasicService_multimediaUnknown: BasicService = BasicService.multimediaUnknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multimediaUnknown
 * @constant
 * @type {number}
 */
export
const multimediaUnknown: BasicService = BasicService.multimediaUnknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_serviceUnknown
 * @constant
 * @type {number}
 */
export
const BasicService_serviceUnknown: BasicService = BasicService.serviceUnknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary serviceUnknown
 * @constant
 * @type {number}
 */
export
const serviceUnknown: BasicService = BasicService.serviceUnknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_futureReserve1
 * @constant
 * @type {number}
 */
export
const BasicService_futureReserve1: BasicService = BasicService.futureReserve1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary futureReserve1
 * @constant
 * @type {number}
 */
export
const futureReserve1: BasicService = BasicService.futureReserve1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_futureReserve2
 * @constant
 * @type {number}
 */
export
const BasicService_futureReserve2: BasicService = BasicService.futureReserve2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary futureReserve2
 * @constant
 * @type {number}
 */
export
const futureReserve2: BasicService = BasicService.futureReserve2; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_futureReserve3
 * @constant
 * @type {number}
 */
export
const BasicService_futureReserve3: BasicService = BasicService.futureReserve3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary futureReserve3
 * @constant
 * @type {number}
 */
export
const futureReserve3: BasicService = BasicService.futureReserve3; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_futureReserve4
 * @constant
 * @type {number}
 */
export
const BasicService_futureReserve4: BasicService = BasicService.futureReserve4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary futureReserve4
 * @constant
 * @type {number}
 */
export
const futureReserve4: BasicService = BasicService.futureReserve4; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_futureReserve5
 * @constant
 * @type {number}
 */
export
const BasicService_futureReserve5: BasicService = BasicService.futureReserve5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary futureReserve5
 * @constant
 * @type {number}
 */
export
const futureReserve5: BasicService = BasicService.futureReserve5; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_futureReserve6
 * @constant
 * @type {number}
 */
export
const BasicService_futureReserve6: BasicService = BasicService.futureReserve6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary futureReserve6
 * @constant
 * @type {number}
 */
export
const futureReserve6: BasicService = BasicService.futureReserve6; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_futureReserve7
 * @constant
 * @type {number}
 */
export
const BasicService_futureReserve7: BasicService = BasicService.futureReserve7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary futureReserve7
 * @constant
 * @type {number}
 */
export
const futureReserve7: BasicService = BasicService.futureReserve7; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_futureReserve8
 * @constant
 * @type {number}
 */
export
const BasicService_futureReserve8: BasicService = BasicService.futureReserve8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary futureReserve8
 * @constant
 * @type {number}
 */
export
const futureReserve8: BasicService = BasicService.futureReserve8; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_BasicService: $.ASN1Decoder<BasicService> = $._decodeEnumerated;

export
const _encode_BasicService: $.ASN1Encoder<BasicService> = $._encodeEnumerated;

/* eslint-enable */
