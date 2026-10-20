/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MessageType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MessageType  ::=  ENUMERATED {
 *     -- Note: for the following message type see also Annex D.4
 *     allServices(0),
 *     -- Note: for the following message types see also Annex D.1
 *     -- For compatibility among vendors, speech is recommended for
 *     -- voice mail indications
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
 *     -- Note: for the following message types see also annex D.2
 *     email(51),
 *     video(52),
 *     fileTransfer(53),
 *     shortMessageService(54),
 *     -- Note: for the following message types see also annex D.3
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
 *     -- Note: for the following message types see also annex D.4
 *     multimediaUnknown(66),
 *     serviceUnknown(67),
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
enum _enum_for_MessageType {
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
 * @summary MessageType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MessageType  ::=  ENUMERATED {
 *     -- Note: for the following message type see also Annex D.4
 *     allServices(0),
 *     -- Note: for the following message types see also Annex D.1
 *     -- For compatibility among vendors, speech is recommended for
 *     -- voice mail indications
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
 *     -- Note: for the following message types see also annex D.2
 *     email(51),
 *     video(52),
 *     fileTransfer(53),
 *     shortMessageService(54),
 *     -- Note: for the following message types see also annex D.3
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
 *     -- Note: for the following message types see also annex D.4
 *     multimediaUnknown(66),
 *     serviceUnknown(67),
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
type MessageType = _enum_for_MessageType;

/**
 * @summary MessageType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MessageType  ::=  ENUMERATED {
 *     -- Note: for the following message type see also Annex D.4
 *     allServices(0),
 *     -- Note: for the following message types see also Annex D.1
 *     -- For compatibility among vendors, speech is recommended for
 *     -- voice mail indications
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
 *     -- Note: for the following message types see also annex D.2
 *     email(51),
 *     video(52),
 *     fileTransfer(53),
 *     shortMessageService(54),
 *     -- Note: for the following message types see also annex D.3
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
 *     -- Note: for the following message types see also annex D.4
 *     multimediaUnknown(66),
 *     serviceUnknown(67),
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
const MessageType = _enum_for_MessageType;

/**
 * @summary MessageType_allServices
 * @constant
 * @type {number}
 */
export
const MessageType_allServices: MessageType = MessageType.allServices; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allServices
 * @constant
 * @type {number}
 */
export
const allServices: MessageType = MessageType.allServices; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_speech
 * @constant
 * @type {number}
 */
export
const MessageType_speech: MessageType = MessageType.speech; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary speech
 * @constant
 * @type {number}
 */
export
const speech: MessageType = MessageType.speech; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_unrestrictedDigitalInformation
 * @constant
 * @type {number}
 */
export
const MessageType_unrestrictedDigitalInformation: MessageType = MessageType.unrestrictedDigitalInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unrestrictedDigitalInformation
 * @constant
 * @type {number}
 */
export
const unrestrictedDigitalInformation: MessageType = MessageType.unrestrictedDigitalInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_audio3100Hz
 * @constant
 * @type {number}
 */
export
const MessageType_audio3100Hz: MessageType = MessageType.audio3100Hz; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary audio3100Hz
 * @constant
 * @type {number}
 */
export
const audio3100Hz: MessageType = MessageType.audio3100Hz; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_telephony
 * @constant
 * @type {number}
 */
export
const MessageType_telephony: MessageType = MessageType.telephony; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary telephony
 * @constant
 * @type {number}
 */
export
const telephony: MessageType = MessageType.telephony; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_teletex
 * @constant
 * @type {number}
 */
export
const MessageType_teletex: MessageType = MessageType.teletex; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary teletex
 * @constant
 * @type {number}
 */
export
const teletex: MessageType = MessageType.teletex; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_telefaxGroup4Class1
 * @constant
 * @type {number}
 */
export
const MessageType_telefaxGroup4Class1: MessageType = MessageType.telefaxGroup4Class1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary telefaxGroup4Class1
 * @constant
 * @type {number}
 */
export
const telefaxGroup4Class1: MessageType = MessageType.telefaxGroup4Class1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_videotextSyntaxBased
 * @constant
 * @type {number}
 */
export
const MessageType_videotextSyntaxBased: MessageType = MessageType.videotextSyntaxBased; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary videotextSyntaxBased
 * @constant
 * @type {number}
 */
export
const videotextSyntaxBased: MessageType = MessageType.videotextSyntaxBased; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_videotelephony
 * @constant
 * @type {number}
 */
export
const MessageType_videotelephony: MessageType = MessageType.videotelephony; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary videotelephony
 * @constant
 * @type {number}
 */
export
const videotelephony: MessageType = MessageType.videotelephony; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_telefaxGroup2_3
 * @constant
 * @type {number}
 */
export
const MessageType_telefaxGroup2_3: MessageType = MessageType.telefaxGroup2_3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary telefaxGroup2_3
 * @constant
 * @type {number}
 */
export
const telefaxGroup2_3: MessageType = MessageType.telefaxGroup2_3; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_reservedNotUsed1
 * @constant
 * @type {number}
 */
export
const MessageType_reservedNotUsed1: MessageType = MessageType.reservedNotUsed1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reservedNotUsed1
 * @constant
 * @type {number}
 */
export
const reservedNotUsed1: MessageType = MessageType.reservedNotUsed1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_reservedNotUsed2
 * @constant
 * @type {number}
 */
export
const MessageType_reservedNotUsed2: MessageType = MessageType.reservedNotUsed2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reservedNotUsed2
 * @constant
 * @type {number}
 */
export
const reservedNotUsed2: MessageType = MessageType.reservedNotUsed2; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_reservedNotUsed3
 * @constant
 * @type {number}
 */
export
const MessageType_reservedNotUsed3: MessageType = MessageType.reservedNotUsed3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reservedNotUsed3
 * @constant
 * @type {number}
 */
export
const reservedNotUsed3: MessageType = MessageType.reservedNotUsed3; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_reservedNotUsed4
 * @constant
 * @type {number}
 */
export
const MessageType_reservedNotUsed4: MessageType = MessageType.reservedNotUsed4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reservedNotUsed4
 * @constant
 * @type {number}
 */
export
const reservedNotUsed4: MessageType = MessageType.reservedNotUsed4; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_reservedNotUsed5
 * @constant
 * @type {number}
 */
export
const MessageType_reservedNotUsed5: MessageType = MessageType.reservedNotUsed5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reservedNotUsed5
 * @constant
 * @type {number}
 */
export
const reservedNotUsed5: MessageType = MessageType.reservedNotUsed5; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_email
 * @constant
 * @type {number}
 */
export
const MessageType_email: MessageType = MessageType.email; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary email
 * @constant
 * @type {number}
 */
export
const email: MessageType = MessageType.email; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_video
 * @constant
 * @type {number}
 */
export
const MessageType_video: MessageType = MessageType.video; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary video
 * @constant
 * @type {number}
 */
export
const video: MessageType = MessageType.video; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_fileTransfer
 * @constant
 * @type {number}
 */
export
const MessageType_fileTransfer: MessageType = MessageType.fileTransfer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fileTransfer
 * @constant
 * @type {number}
 */
export
const fileTransfer: MessageType = MessageType.fileTransfer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_shortMessageService
 * @constant
 * @type {number}
 */
export
const MessageType_shortMessageService: MessageType = MessageType.shortMessageService; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary shortMessageService
 * @constant
 * @type {number}
 */
export
const shortMessageService: MessageType = MessageType.shortMessageService; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_speechAndVideo
 * @constant
 * @type {number}
 */
export
const MessageType_speechAndVideo: MessageType = MessageType.speechAndVideo; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary speechAndVideo
 * @constant
 * @type {number}
 */
export
const speechAndVideo: MessageType = MessageType.speechAndVideo; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_speechAndFax
 * @constant
 * @type {number}
 */
export
const MessageType_speechAndFax: MessageType = MessageType.speechAndFax; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary speechAndFax
 * @constant
 * @type {number}
 */
export
const speechAndFax: MessageType = MessageType.speechAndFax; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_speechAndEmail
 * @constant
 * @type {number}
 */
export
const MessageType_speechAndEmail: MessageType = MessageType.speechAndEmail; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary speechAndEmail
 * @constant
 * @type {number}
 */
export
const speechAndEmail: MessageType = MessageType.speechAndEmail; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_videoAndFax
 * @constant
 * @type {number}
 */
export
const MessageType_videoAndFax: MessageType = MessageType.videoAndFax; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary videoAndFax
 * @constant
 * @type {number}
 */
export
const videoAndFax: MessageType = MessageType.videoAndFax; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_videoAndEmail
 * @constant
 * @type {number}
 */
export
const MessageType_videoAndEmail: MessageType = MessageType.videoAndEmail; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary videoAndEmail
 * @constant
 * @type {number}
 */
export
const videoAndEmail: MessageType = MessageType.videoAndEmail; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_faxAndEmail
 * @constant
 * @type {number}
 */
export
const MessageType_faxAndEmail: MessageType = MessageType.faxAndEmail; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary faxAndEmail
 * @constant
 * @type {number}
 */
export
const faxAndEmail: MessageType = MessageType.faxAndEmail; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_speechVideoAndFax
 * @constant
 * @type {number}
 */
export
const MessageType_speechVideoAndFax: MessageType = MessageType.speechVideoAndFax; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary speechVideoAndFax
 * @constant
 * @type {number}
 */
export
const speechVideoAndFax: MessageType = MessageType.speechVideoAndFax; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_speechVideoAndEmail
 * @constant
 * @type {number}
 */
export
const MessageType_speechVideoAndEmail: MessageType = MessageType.speechVideoAndEmail; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary speechVideoAndEmail
 * @constant
 * @type {number}
 */
export
const speechVideoAndEmail: MessageType = MessageType.speechVideoAndEmail; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_speechFaxAndEmail
 * @constant
 * @type {number}
 */
export
const MessageType_speechFaxAndEmail: MessageType = MessageType.speechFaxAndEmail; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary speechFaxAndEmail
 * @constant
 * @type {number}
 */
export
const speechFaxAndEmail: MessageType = MessageType.speechFaxAndEmail; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_videoFaxAndEmail
 * @constant
 * @type {number}
 */
export
const MessageType_videoFaxAndEmail: MessageType = MessageType.videoFaxAndEmail; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary videoFaxAndEmail
 * @constant
 * @type {number}
 */
export
const videoFaxAndEmail: MessageType = MessageType.videoFaxAndEmail; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_speechVideoFaxAndEmail
 * @constant
 * @type {number}
 */
export
const MessageType_speechVideoFaxAndEmail: MessageType = MessageType.speechVideoFaxAndEmail; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary speechVideoFaxAndEmail
 * @constant
 * @type {number}
 */
export
const speechVideoFaxAndEmail: MessageType = MessageType.speechVideoFaxAndEmail; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_multimediaUnknown
 * @constant
 * @type {number}
 */
export
const MessageType_multimediaUnknown: MessageType = MessageType.multimediaUnknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multimediaUnknown
 * @constant
 * @type {number}
 */
export
const multimediaUnknown: MessageType = MessageType.multimediaUnknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_serviceUnknown
 * @constant
 * @type {number}
 */
export
const MessageType_serviceUnknown: MessageType = MessageType.serviceUnknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary serviceUnknown
 * @constant
 * @type {number}
 */
export
const serviceUnknown: MessageType = MessageType.serviceUnknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_futureReserve1
 * @constant
 * @type {number}
 */
export
const MessageType_futureReserve1: MessageType = MessageType.futureReserve1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary futureReserve1
 * @constant
 * @type {number}
 */
export
const futureReserve1: MessageType = MessageType.futureReserve1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_futureReserve2
 * @constant
 * @type {number}
 */
export
const MessageType_futureReserve2: MessageType = MessageType.futureReserve2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary futureReserve2
 * @constant
 * @type {number}
 */
export
const futureReserve2: MessageType = MessageType.futureReserve2; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_futureReserve3
 * @constant
 * @type {number}
 */
export
const MessageType_futureReserve3: MessageType = MessageType.futureReserve3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary futureReserve3
 * @constant
 * @type {number}
 */
export
const futureReserve3: MessageType = MessageType.futureReserve3; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_futureReserve4
 * @constant
 * @type {number}
 */
export
const MessageType_futureReserve4: MessageType = MessageType.futureReserve4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary futureReserve4
 * @constant
 * @type {number}
 */
export
const futureReserve4: MessageType = MessageType.futureReserve4; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_futureReserve5
 * @constant
 * @type {number}
 */
export
const MessageType_futureReserve5: MessageType = MessageType.futureReserve5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary futureReserve5
 * @constant
 * @type {number}
 */
export
const futureReserve5: MessageType = MessageType.futureReserve5; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_futureReserve6
 * @constant
 * @type {number}
 */
export
const MessageType_futureReserve6: MessageType = MessageType.futureReserve6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary futureReserve6
 * @constant
 * @type {number}
 */
export
const futureReserve6: MessageType = MessageType.futureReserve6; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_futureReserve7
 * @constant
 * @type {number}
 */
export
const MessageType_futureReserve7: MessageType = MessageType.futureReserve7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary futureReserve7
 * @constant
 * @type {number}
 */
export
const futureReserve7: MessageType = MessageType.futureReserve7; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_futureReserve8
 * @constant
 * @type {number}
 */
export
const MessageType_futureReserve8: MessageType = MessageType.futureReserve8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary futureReserve8
 * @constant
 * @type {number}
 */
export
const futureReserve8: MessageType = MessageType.futureReserve8; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_MessageType: $.ASN1Decoder<MessageType> = $._decodeEnumerated;

export
const _encode_MessageType: $.ASN1Encoder<MessageType> = $._encodeEnumerated;

/* eslint-enable */
