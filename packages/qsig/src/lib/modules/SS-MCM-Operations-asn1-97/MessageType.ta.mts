/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary MessageType
 * @description
 *
 * Kind of message in a Served User mailbox. Activation,
 * updates, and mailbox-full reports are per Message Type
 * (ECMA-347 §6.1, §6.3.1). Annex D (informative) supplies
 * the meanings. Telephony types follow the depositing call
 * (annex D.1). Data types need a specific retrieval
 * application (annex D.2). A combination value means
 * several of those types are waiting (annex D.3). Annex D.4
 * recommends not using the types defined there. For voice
 * mail, `speech` is recommended (§6.3.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
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
 * Kind of message in a Served User mailbox. Activation,
 * updates, and mailbox-full reports are per Message Type
 * (ECMA-347 §6.1, §6.3.1). Annex D (informative) supplies
 * the meanings. Telephony types follow the depositing call
 * (annex D.1). Data types need a specific retrieval
 * application (annex D.2). A combination value means
 * several of those types are waiting (annex D.3). Annex D.4
 * recommends not using the types defined there. For voice
 * mail, `speech` is recommended (§6.3.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
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
 * Kind of message in a Served User mailbox. Activation,
 * updates, and mailbox-full reports are per Message Type
 * (ECMA-347 §6.1, §6.3.1). Annex D (informative) supplies
 * the meanings. Telephony types follow the depositing call
 * (annex D.1). Data types need a specific retrieval
 * application (annex D.2). A combination value means
 * several of those types are waiting (annex D.3). Annex D.4
 * recommends not using the types defined there. For voice
 * mail, `speech` is recommended (§6.3.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
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
 * @description
 *
 * Messages of different types are waiting at the Message
 * Centre. Annex D recommends not using this value.
 * ECMA-347 §D.4, §D.4.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 */
export
const MessageType_allServices = MessageType.allServices satisfies MessageType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allServices
 * @description Alias of {@link MessageType_allServices}.
 * @constant
 * @type {number}
 */
export
const allServices = MessageType.allServices satisfies MessageType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_speech
 * @description
 *
 * Depositing call indicated information transfer capability
 * "Speech" (ECMA-142). Recommended for voice-mail
 * indications. ECMA-347 §6.3.1, §D.1.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 */
export
const MessageType_speech = MessageType.speech satisfies MessageType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary speech
 * @description Alias of {@link MessageType_speech}.
 * @constant
 * @type {number}
 */
export
const speech = MessageType.speech satisfies MessageType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_unrestrictedDigitalInformation
 * @description
 *
 * Depositing call indicated information transfer capability
 * "Unrestricted Digital Information" (ECMA-142).
 * ECMA-347 §D.1.2.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 */
export
const MessageType_unrestrictedDigitalInformation = MessageType.unrestrictedDigitalInformation satisfies MessageType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unrestrictedDigitalInformation
 * @description Alias of {@link MessageType_unrestrictedDigitalInformation}.
 * @constant
 * @type {number}
 */
export
const unrestrictedDigitalInformation = MessageType.unrestrictedDigitalInformation satisfies MessageType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_audio3100Hz
 * @description
 *
 * Depositing call indicated information transfer capability
 * "3,1 kHz audio (encoded)" (ECMA-142). No further type
 * was available. ECMA-347 §D.1.3.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 */
export
const MessageType_audio3100Hz = MessageType.audio3100Hz satisfies MessageType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary audio3100Hz
 * @description Alias of {@link MessageType_audio3100Hz}.
 * @constant
 * @type {number}
 */
export
const audio3100Hz = MessageType.audio3100Hz satisfies MessageType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_telephony
 * @description
 *
 * Depositing call did not indicate a specific telephony
 * bearer capability. ECMA-347 §D.1.4.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 */
export
const MessageType_telephony = MessageType.telephony satisfies MessageType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary telephony
 * @description Alias of {@link MessageType_telephony}.
 * @constant
 * @type {number}
 */
export
const telephony = MessageType.telephony satisfies MessageType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_teletex
 * @description
 *
 * Annex D.1.5 gives only this name. ECMA-347 §D.1.5.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 */
export
const MessageType_teletex = MessageType.teletex satisfies MessageType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary teletex
 * @description Alias of {@link MessageType_teletex}.
 * @constant
 * @type {number}
 */
export
const teletex = MessageType.teletex satisfies MessageType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_telefaxGroup4Class1
 * @description
 *
 * Depositing call indicated teleservice "Telefax Group 4"
 * (ECMA-142). Combination values use this as "Fax".
 * ECMA-347 §D.1.6, §D.3.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 */
export
const MessageType_telefaxGroup4Class1 = MessageType.telefaxGroup4Class1 satisfies MessageType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary telefaxGroup4Class1
 * @description Alias of {@link MessageType_telefaxGroup4Class1}.
 * @constant
 * @type {number}
 */
export
const telefaxGroup4Class1 = MessageType.telefaxGroup4Class1 satisfies MessageType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_videotextSyntaxBased
 * @description
 *
 * Depositing call indicated teleservice "Circuit-mode
 * syntax-based videotext" (ECMA-142). ECMA-347 §D.1.7.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 */
export
const MessageType_videotextSyntaxBased = MessageType.videotextSyntaxBased satisfies MessageType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary videotextSyntaxBased
 * @description Alias of {@link MessageType_videotextSyntaxBased}.
 * @constant
 * @type {number}
 */
export
const videotextSyntaxBased = MessageType.videotextSyntaxBased satisfies MessageType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_videotelephony
 * @description
 *
 * Annex D.1.8 gives only this name. Combination values use
 * it as "Video". ECMA-347 §D.1.8, §D.3.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 */
export
const MessageType_videotelephony = MessageType.videotelephony satisfies MessageType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary videotelephony
 * @description Alias of {@link MessageType_videotelephony}.
 * @constant
 * @type {number}
 */
export
const videotelephony = MessageType.videotelephony satisfies MessageType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_telefaxGroup2_3
 * @description
 *
 * Determined to be Telefax Group 2 or Telefax Group 3.
 * ECMA-347 §D.1.9.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 */
export
const MessageType_telefaxGroup2_3 = MessageType.telefaxGroup2_3 satisfies MessageType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary telefaxGroup2_3
 * @description Alias of {@link MessageType_telefaxGroup2_3}.
 * @constant
 * @type {number}
 */
export
const telefaxGroup2_3 = MessageType.telefaxGroup2_3 satisfies MessageType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_reservedNotUsed1
 * @description
 *
 * Reserved and not used. Annex D does not define this
 * value. ECMA-347 §6.3.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 */
export
const MessageType_reservedNotUsed1 = MessageType.reservedNotUsed1 satisfies MessageType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reservedNotUsed1
 * @description Alias of {@link MessageType_reservedNotUsed1}.
 * @constant
 * @type {number}
 */
export
const reservedNotUsed1 = MessageType.reservedNotUsed1 satisfies MessageType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_reservedNotUsed2
 * @description
 *
 * Reserved and not used. Annex D does not define this
 * value. ECMA-347 §6.3.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 */
export
const MessageType_reservedNotUsed2 = MessageType.reservedNotUsed2 satisfies MessageType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reservedNotUsed2
 * @description Alias of {@link MessageType_reservedNotUsed2}.
 * @constant
 * @type {number}
 */
export
const reservedNotUsed2 = MessageType.reservedNotUsed2 satisfies MessageType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_reservedNotUsed3
 * @description
 *
 * Reserved and not used. Annex D does not define this
 * value. ECMA-347 §6.3.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 */
export
const MessageType_reservedNotUsed3 = MessageType.reservedNotUsed3 satisfies MessageType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reservedNotUsed3
 * @description Alias of {@link MessageType_reservedNotUsed3}.
 * @constant
 * @type {number}
 */
export
const reservedNotUsed3 = MessageType.reservedNotUsed3 satisfies MessageType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_reservedNotUsed4
 * @description
 *
 * Reserved and not used. Annex D does not define this
 * value. ECMA-347 §6.3.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 */
export
const MessageType_reservedNotUsed4 = MessageType.reservedNotUsed4 satisfies MessageType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reservedNotUsed4
 * @description Alias of {@link MessageType_reservedNotUsed4}.
 * @constant
 * @type {number}
 */
export
const reservedNotUsed4 = MessageType.reservedNotUsed4 satisfies MessageType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_reservedNotUsed5
 * @description
 *
 * Reserved and not used. Annex D does not define this
 * value. ECMA-347 §6.3.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 */
export
const MessageType_reservedNotUsed5 = MessageType.reservedNotUsed5 satisfies MessageType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reservedNotUsed5
 * @description Alias of {@link MessageType_reservedNotUsed5}.
 * @constant
 * @type {number}
 */
export
const reservedNotUsed5 = MessageType.reservedNotUsed5 satisfies MessageType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_email
 * @description
 *
 * Data-type message. Annex D.2.1 gives only this name.
 * Retrieval needs a specific application or equipment
 * (§D.2). Combination values use this as "Email" (§D.3).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 */
export
const MessageType_email = MessageType.email satisfies MessageType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary email
 * @description Alias of {@link MessageType_email}.
 * @constant
 * @type {number}
 */
export
const email = MessageType.email satisfies MessageType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_video
 * @description
 *
 * Data-type message. Annex D.2.2 gives only this name.
 * Retrieval needs a specific application or equipment
 * (§D.2). Combination "Video" is `videotelephony`, not
 * this value (§D.3).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 */
export
const MessageType_video = MessageType.video satisfies MessageType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary video
 * @description Alias of {@link MessageType_video}.
 * @constant
 * @type {number}
 */
export
const video = MessageType.video satisfies MessageType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_fileTransfer
 * @description
 *
 * Data-type message. Annex D.2.3 gives only this name.
 * Retrieval needs a specific application or equipment.
 * ECMA-347 §D.2, §D.2.3.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 */
export
const MessageType_fileTransfer = MessageType.fileTransfer satisfies MessageType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fileTransfer
 * @description Alias of {@link MessageType_fileTransfer}.
 * @constant
 * @type {number}
 */
export
const fileTransfer = MessageType.fileTransfer satisfies MessageType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_shortMessageService
 * @description
 *
 * Data-type message. Annex D.2.4 gives only this name.
 * Retrieval needs a specific application or equipment.
 * ECMA-347 §D.2, §D.2.4.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 */
export
const MessageType_shortMessageService = MessageType.shortMessageService satisfies MessageType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary shortMessageService
 * @description Alias of {@link MessageType_shortMessageService}.
 * @constant
 * @type {number}
 */
export
const shortMessageService = MessageType.shortMessageService satisfies MessageType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_speechAndVideo
 * @description
 *
 * Speech and videotelephony messages are waiting.
 * ECMA-347 §D.3.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 */
export
const MessageType_speechAndVideo = MessageType.speechAndVideo satisfies MessageType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary speechAndVideo
 * @description Alias of {@link MessageType_speechAndVideo}.
 * @constant
 * @type {number}
 */
export
const speechAndVideo = MessageType.speechAndVideo satisfies MessageType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_speechAndFax
 * @description
 *
 * Speech and Telefax Group 4 messages are waiting.
 * ECMA-347 §D.3.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 */
export
const MessageType_speechAndFax = MessageType.speechAndFax satisfies MessageType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary speechAndFax
 * @description Alias of {@link MessageType_speechAndFax}.
 * @constant
 * @type {number}
 */
export
const speechAndFax = MessageType.speechAndFax satisfies MessageType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_speechAndEmail
 * @description
 *
 * Speech and email messages are waiting. ECMA-347 §D.3.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 */
export
const MessageType_speechAndEmail = MessageType.speechAndEmail satisfies MessageType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary speechAndEmail
 * @description Alias of {@link MessageType_speechAndEmail}.
 * @constant
 * @type {number}
 */
export
const speechAndEmail = MessageType.speechAndEmail satisfies MessageType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_videoAndFax
 * @description
 *
 * Videotelephony and Telefax Group 4 messages are waiting.
 * ECMA-347 §D.3.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 */
export
const MessageType_videoAndFax = MessageType.videoAndFax satisfies MessageType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary videoAndFax
 * @description Alias of {@link MessageType_videoAndFax}.
 * @constant
 * @type {number}
 */
export
const videoAndFax = MessageType.videoAndFax satisfies MessageType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_videoAndEmail
 * @description
 *
 * Videotelephony and email messages are waiting.
 * ECMA-347 §D.3.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 */
export
const MessageType_videoAndEmail = MessageType.videoAndEmail satisfies MessageType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary videoAndEmail
 * @description Alias of {@link MessageType_videoAndEmail}.
 * @constant
 * @type {number}
 */
export
const videoAndEmail = MessageType.videoAndEmail satisfies MessageType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_faxAndEmail
 * @description
 *
 * Telefax Group 4 and email messages are waiting.
 * ECMA-347 §D.3.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 */
export
const MessageType_faxAndEmail = MessageType.faxAndEmail satisfies MessageType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary faxAndEmail
 * @description Alias of {@link MessageType_faxAndEmail}.
 * @constant
 * @type {number}
 */
export
const faxAndEmail = MessageType.faxAndEmail satisfies MessageType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_speechVideoAndFax
 * @description
 *
 * Speech, videotelephony, and Telefax Group 4 messages
 * are waiting. ECMA-347 §D.3.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 */
export
const MessageType_speechVideoAndFax = MessageType.speechVideoAndFax satisfies MessageType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary speechVideoAndFax
 * @description Alias of {@link MessageType_speechVideoAndFax}.
 * @constant
 * @type {number}
 */
export
const speechVideoAndFax = MessageType.speechVideoAndFax satisfies MessageType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_speechVideoAndEmail
 * @description
 *
 * Speech, videotelephony, and email messages are waiting.
 * ECMA-347 §D.3.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 */
export
const MessageType_speechVideoAndEmail = MessageType.speechVideoAndEmail satisfies MessageType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary speechVideoAndEmail
 * @description Alias of {@link MessageType_speechVideoAndEmail}.
 * @constant
 * @type {number}
 */
export
const speechVideoAndEmail = MessageType.speechVideoAndEmail satisfies MessageType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_speechFaxAndEmail
 * @description
 *
 * Speech, Telefax Group 4, and email messages are waiting.
 * ECMA-347 §D.3.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 */
export
const MessageType_speechFaxAndEmail = MessageType.speechFaxAndEmail satisfies MessageType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary speechFaxAndEmail
 * @description Alias of {@link MessageType_speechFaxAndEmail}.
 * @constant
 * @type {number}
 */
export
const speechFaxAndEmail = MessageType.speechFaxAndEmail satisfies MessageType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_videoFaxAndEmail
 * @description
 *
 * Videotelephony, Telefax Group 4, and email messages are
 * waiting. ECMA-347 §D.3.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 */
export
const MessageType_videoFaxAndEmail = MessageType.videoFaxAndEmail satisfies MessageType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary videoFaxAndEmail
 * @description Alias of {@link MessageType_videoFaxAndEmail}.
 * @constant
 * @type {number}
 */
export
const videoFaxAndEmail = MessageType.videoFaxAndEmail satisfies MessageType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_speechVideoFaxAndEmail
 * @description
 *
 * Speech, videotelephony, Telefax Group 4, and email
 * messages are waiting. ECMA-347 §D.3.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 */
export
const MessageType_speechVideoFaxAndEmail = MessageType.speechVideoFaxAndEmail satisfies MessageType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary speechVideoFaxAndEmail
 * @description Alias of {@link MessageType_speechVideoFaxAndEmail}.
 * @constant
 * @type {number}
 */
export
const speechVideoFaxAndEmail = MessageType.speechVideoFaxAndEmail satisfies MessageType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_multimediaUnknown
 * @description
 *
 * A data-type message that matches none of the types in
 * annex D.2. Annex D recommends not using this value.
 * ECMA-347 §D.4, §D.4.2.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 */
export
const MessageType_multimediaUnknown = MessageType.multimediaUnknown satisfies MessageType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multimediaUnknown
 * @description Alias of {@link MessageType_multimediaUnknown}.
 * @constant
 * @type {number}
 */
export
const multimediaUnknown = MessageType.multimediaUnknown satisfies MessageType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_serviceUnknown
 * @description
 *
 * No information about the message type is available.
 * Annex D recommends not using this value. ECMA-347 §D.4,
 * §D.4.3.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 */
export
const MessageType_serviceUnknown = MessageType.serviceUnknown satisfies MessageType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary serviceUnknown
 * @description Alias of {@link MessageType_serviceUnknown}.
 * @constant
 * @type {number}
 */
export
const serviceUnknown = MessageType.serviceUnknown satisfies MessageType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_futureReserve1
 * @description
 *
 * Reserved for future use. Annex D does not define this
 * value. ECMA-347 §6.3.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 */
export
const MessageType_futureReserve1 = MessageType.futureReserve1 satisfies MessageType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary futureReserve1
 * @description Alias of {@link MessageType_futureReserve1}.
 * @constant
 * @type {number}
 */
export
const futureReserve1 = MessageType.futureReserve1 satisfies MessageType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_futureReserve2
 * @description
 *
 * Reserved for future use. Annex D does not define this
 * value. ECMA-347 §6.3.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 */
export
const MessageType_futureReserve2 = MessageType.futureReserve2 satisfies MessageType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary futureReserve2
 * @description Alias of {@link MessageType_futureReserve2}.
 * @constant
 * @type {number}
 */
export
const futureReserve2 = MessageType.futureReserve2 satisfies MessageType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_futureReserve3
 * @description
 *
 * Reserved for future use. Annex D does not define this
 * value. ECMA-347 §6.3.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 */
export
const MessageType_futureReserve3 = MessageType.futureReserve3 satisfies MessageType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary futureReserve3
 * @description Alias of {@link MessageType_futureReserve3}.
 * @constant
 * @type {number}
 */
export
const futureReserve3 = MessageType.futureReserve3 satisfies MessageType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_futureReserve4
 * @description
 *
 * Reserved for future use. Annex D does not define this
 * value. ECMA-347 §6.3.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 */
export
const MessageType_futureReserve4 = MessageType.futureReserve4 satisfies MessageType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary futureReserve4
 * @description Alias of {@link MessageType_futureReserve4}.
 * @constant
 * @type {number}
 */
export
const futureReserve4 = MessageType.futureReserve4 satisfies MessageType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_futureReserve5
 * @description
 *
 * Reserved for future use. Annex D does not define this
 * value. ECMA-347 §6.3.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 */
export
const MessageType_futureReserve5 = MessageType.futureReserve5 satisfies MessageType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary futureReserve5
 * @description Alias of {@link MessageType_futureReserve5}.
 * @constant
 * @type {number}
 */
export
const futureReserve5 = MessageType.futureReserve5 satisfies MessageType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_futureReserve6
 * @description
 *
 * Reserved for future use. Annex D does not define this
 * value. ECMA-347 §6.3.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 */
export
const MessageType_futureReserve6 = MessageType.futureReserve6 satisfies MessageType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary futureReserve6
 * @description Alias of {@link MessageType_futureReserve6}.
 * @constant
 * @type {number}
 */
export
const futureReserve6 = MessageType.futureReserve6 satisfies MessageType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_futureReserve7
 * @description
 *
 * Reserved for future use. Annex D does not define this
 * value. ECMA-347 §6.3.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 */
export
const MessageType_futureReserve7 = MessageType.futureReserve7 satisfies MessageType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary futureReserve7
 * @description Alias of {@link MessageType_futureReserve7}.
 * @constant
 * @type {number}
 */
export
const futureReserve7 = MessageType.futureReserve7 satisfies MessageType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageType_futureReserve8
 * @description
 *
 * Reserved for future use. Annex D does not define this
 * value. ECMA-347 §6.3.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 */
export
const MessageType_futureReserve8 = MessageType.futureReserve8 satisfies MessageType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary futureReserve8
 * @description Alias of {@link MessageType_futureReserve8}.
 * @constant
 * @type {number}
 */
export
const futureReserve8 = MessageType.futureReserve8 satisfies MessageType; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_MessageType: $.ASN1Decoder<MessageType> = $._decodeEnumerated;

export
const _encode_MessageType: $.ASN1Encoder<MessageType> = $._encodeEnumerated;

/* eslint-enable */
