/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary BasicService
 * @description
 *
 * Service for which a message is waiting, or for which interrogation applies
 * (ECMA-242 §6.3.1, ECMA-241 §6.1.1). A Served User can have a separate
 * indication per service. Values 0-3 and 32-36 were kept from Call Diversion
 * operations so edition 2 encodings still interwork. `telefaxGroup2-3` (37)
 * is the group 2/3 fax value added to that set. Values 38-42 are reserved and
 * unused. Values 51-67 are multimedia message classes added in the 3rd
 * edition. Values 68-75 are reserved for future additions. Values 4-31 and
 * 43-50 are unassigned. For voice mail, `speech` is recommended.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
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
 * Service for which a message is waiting, or for which interrogation applies
 * (ECMA-242 §6.3.1, ECMA-241 §6.1.1). A Served User can have a separate
 * indication per service. Values 0-3 and 32-36 were kept from Call Diversion
 * operations so edition 2 encodings still interwork. `telefaxGroup2-3` (37)
 * is the group 2/3 fax value added to that set. Values 38-42 are reserved and
 * unused. Values 51-67 are multimedia message classes added in the 3rd
 * edition. Values 68-75 are reserved for future additions. Values 4-31 and
 * 43-50 are unassigned. For voice mail, `speech` is recommended.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
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
 * Service for which a message is waiting, or for which interrogation applies
 * (ECMA-242 §6.3.1, ECMA-241 §6.1.1). A Served User can have a separate
 * indication per service. Values 0-3 and 32-36 were kept from Call Diversion
 * operations so edition 2 encodings still interwork. `telefaxGroup2-3` (37)
 * is the group 2/3 fax value added to that set. Values 38-42 are reserved and
 * unused. Values 51-67 are multimedia message classes added in the 3rd
 * edition. Values 68-75 are reserved for future additions. Values 4-31 and
 * 43-50 are unassigned. For voice mail, `speech` is recommended.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
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
const BasicService: typeof _enum_for_BasicService = _enum_for_BasicService;

/**
 * @summary BasicService_allServices
 * @description
 *
 * Value 0, retained for edition-2 compatibility (ECMA-242 §6.3.1). ECMA-241
 * §7.2.1.3 note 2 requires an interrogation request to name one service or all
 * services. The protocol text does not state that this value is that
 * all-services request.
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 */
export
const BasicService_allServices: _enum_for_BasicService.allServices = BasicService.allServices; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allServices
 * @description Alias of {@link BasicService_allServices}.
 * @constant
 * @type {number}
 */
export
const allServices: _enum_for_BasicService.allServices = BasicService.allServices; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_speech
 * @description
 *
 * Speech, value 1. Recommended for voice-mail indications so that vendors
 * interwork (ECMA-242 §6.3.1). Retained for edition-2 compatibility.
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 */
export
const BasicService_speech: _enum_for_BasicService.speech = BasicService.speech; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary speech
 * @description Alias of {@link BasicService_speech}.
 * @constant
 * @type {number}
 */
export
const speech: _enum_for_BasicService.speech = BasicService.speech; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_unrestrictedDigitalInformation
 * @description
 *
 * Unrestricted digital information. Retained from Call Diversion operations for
 * compatibility with edition 2 (ECMA-242 §6.3.1). The protocol text does not
 * define this value beyond its name.
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 */
export
const BasicService_unrestrictedDigitalInformation: _enum_for_BasicService.unrestrictedDigitalInformation = BasicService.unrestrictedDigitalInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unrestrictedDigitalInformation
 * @description Alias of {@link BasicService_unrestrictedDigitalInformation}.
 * @constant
 * @type {number}
 */
export
const unrestrictedDigitalInformation: _enum_for_BasicService.unrestrictedDigitalInformation = BasicService.unrestrictedDigitalInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_audio3100Hz
 * @description
 *
 * 3.1 kHz audio, from the identifier. Retained from Call Diversion operations
 * for compatibility with edition 2 (ECMA-242 §6.3.1). The protocol text does
 * not define this value beyond its name.
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 */
export
const BasicService_audio3100Hz: _enum_for_BasicService.audio3100Hz = BasicService.audio3100Hz; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary audio3100Hz
 * @description Alias of {@link BasicService_audio3100Hz}.
 * @constant
 * @type {number}
 */
export
const audio3100Hz: _enum_for_BasicService.audio3100Hz = BasicService.audio3100Hz; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_telephony
 * @description
 *
 * Telephony. Retained from Call Diversion operations for compatibility with
 * edition 2 (ECMA-242 §6.3.1). The protocol text does not define this value
 * beyond its name.
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 */
export
const BasicService_telephony: _enum_for_BasicService.telephony = BasicService.telephony; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary telephony
 * @description Alias of {@link BasicService_telephony}.
 * @constant
 * @type {number}
 */
export
const telephony: _enum_for_BasicService.telephony = BasicService.telephony; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_teletex
 * @description
 *
 * Teletex. Retained from Call Diversion operations for compatibility with
 * edition 2 (ECMA-242 §6.3.1). The protocol text does not define this value
 * beyond its name.
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 */
export
const BasicService_teletex: _enum_for_BasicService.teletex = BasicService.teletex; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary teletex
 * @description Alias of {@link BasicService_teletex}.
 * @constant
 * @type {number}
 */
export
const teletex: _enum_for_BasicService.teletex = BasicService.teletex; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_telefaxGroup4Class1
 * @description
 *
 * Telefax group 4 class 1. Retained from Call Diversion operations for
 * compatibility with edition 2 (ECMA-242 §6.3.1). The protocol text does not
 * define this value beyond its name.
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 */
export
const BasicService_telefaxGroup4Class1: _enum_for_BasicService.telefaxGroup4Class1 = BasicService.telefaxGroup4Class1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary telefaxGroup4Class1
 * @description Alias of {@link BasicService_telefaxGroup4Class1}.
 * @constant
 * @type {number}
 */
export
const telefaxGroup4Class1: _enum_for_BasicService.telefaxGroup4Class1 = BasicService.telefaxGroup4Class1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_videotextSyntaxBased
 * @description
 *
 * Syntax-based videotext. Retained from Call Diversion operations for
 * compatibility with edition 2 (ECMA-242 §6.3.1). The protocol text does not
 * define this value beyond its name.
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 */
export
const BasicService_videotextSyntaxBased: _enum_for_BasicService.videotextSyntaxBased = BasicService.videotextSyntaxBased; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary videotextSyntaxBased
 * @description Alias of {@link BasicService_videotextSyntaxBased}.
 * @constant
 * @type {number}
 */
export
const videotextSyntaxBased: _enum_for_BasicService.videotextSyntaxBased = BasicService.videotextSyntaxBased; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_videotelephony
 * @description
 *
 * Videotelephony. Retained from Call Diversion operations for compatibility
 * with edition 2 (ECMA-242 §6.3.1). The protocol text does not define this
 * value beyond its name.
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 */
export
const BasicService_videotelephony: _enum_for_BasicService.videotelephony = BasicService.videotelephony; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary videotelephony
 * @description Alias of {@link BasicService_videotelephony}.
 * @constant
 * @type {number}
 */
export
const videotelephony: _enum_for_BasicService.videotelephony = BasicService.videotelephony; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_telefaxGroup2_3
 * @description
 *
 * Telefax group 2 and group 3. Added relative to the basic services imported
 * from Call Diversion (ECMA-242 §6.3.1).
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 */
export
const BasicService_telefaxGroup2_3: _enum_for_BasicService.telefaxGroup2_3 = BasicService.telefaxGroup2_3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary telefaxGroup2_3
 * @description Alias of {@link BasicService_telefaxGroup2_3}.
 * @constant
 * @type {number}
 */
export
const telefaxGroup2_3: _enum_for_BasicService.telefaxGroup2_3 = BasicService.telefaxGroup2_3; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_reservedNotUsed1
 * @description Reserved and not used (ECMA-242 §6.3.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 */
export
const BasicService_reservedNotUsed1: _enum_for_BasicService.reservedNotUsed1 = BasicService.reservedNotUsed1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reservedNotUsed1
 * @description Alias of {@link BasicService_reservedNotUsed1}.
 * @constant
 * @type {number}
 */
export
const reservedNotUsed1: _enum_for_BasicService.reservedNotUsed1 = BasicService.reservedNotUsed1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_reservedNotUsed2
 * @description Reserved and not used (ECMA-242 §6.3.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 */
export
const BasicService_reservedNotUsed2: _enum_for_BasicService.reservedNotUsed2 = BasicService.reservedNotUsed2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reservedNotUsed2
 * @description Alias of {@link BasicService_reservedNotUsed2}.
 * @constant
 * @type {number}
 */
export
const reservedNotUsed2: _enum_for_BasicService.reservedNotUsed2 = BasicService.reservedNotUsed2; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_reservedNotUsed3
 * @description Reserved and not used (ECMA-242 §6.3.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 */
export
const BasicService_reservedNotUsed3: _enum_for_BasicService.reservedNotUsed3 = BasicService.reservedNotUsed3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reservedNotUsed3
 * @description Alias of {@link BasicService_reservedNotUsed3}.
 * @constant
 * @type {number}
 */
export
const reservedNotUsed3: _enum_for_BasicService.reservedNotUsed3 = BasicService.reservedNotUsed3; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_reservedNotUsed4
 * @description Reserved and not used (ECMA-242 §6.3.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 */
export
const BasicService_reservedNotUsed4: _enum_for_BasicService.reservedNotUsed4 = BasicService.reservedNotUsed4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reservedNotUsed4
 * @description Alias of {@link BasicService_reservedNotUsed4}.
 * @constant
 * @type {number}
 */
export
const reservedNotUsed4: _enum_for_BasicService.reservedNotUsed4 = BasicService.reservedNotUsed4; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_reservedNotUsed5
 * @description Reserved and not used (ECMA-242 §6.3.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 */
export
const BasicService_reservedNotUsed5: _enum_for_BasicService.reservedNotUsed5 = BasicService.reservedNotUsed5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reservedNotUsed5
 * @description Alias of {@link BasicService_reservedNotUsed5}.
 * @constant
 * @type {number}
 */
export
const reservedNotUsed5: _enum_for_BasicService.reservedNotUsed5 = BasicService.reservedNotUsed5; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_email
 * @description
 *
 * Electronic mail. Multimedia message class added in the 3rd edition (ECMA-242
 * §6.3.1). No further definition is given.
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 */
export
const BasicService_email: _enum_for_BasicService.email = BasicService.email; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary email
 * @description Alias of {@link BasicService_email}.
 * @constant
 * @type {number}
 */
export
const email: _enum_for_BasicService.email = BasicService.email; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_video
 * @description
 *
 * Video. Multimedia message class added in the 3rd edition (ECMA-242 §6.3.1).
 * No further definition is given.
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 */
export
const BasicService_video: _enum_for_BasicService.video = BasicService.video; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary video
 * @description Alias of {@link BasicService_video}.
 * @constant
 * @type {number}
 */
export
const video: _enum_for_BasicService.video = BasicService.video; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_fileTransfer
 * @description
 *
 * File transfer. Multimedia message class added in the 3rd edition (ECMA-242
 * §6.3.1). No further definition is given.
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 */
export
const BasicService_fileTransfer: _enum_for_BasicService.fileTransfer = BasicService.fileTransfer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fileTransfer
 * @description Alias of {@link BasicService_fileTransfer}.
 * @constant
 * @type {number}
 */
export
const fileTransfer: _enum_for_BasicService.fileTransfer = BasicService.fileTransfer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_shortMessageService
 * @description
 *
 * Short message service. Multimedia message class added in the 3rd edition
 * (ECMA-242 §6.3.1). No further definition is given.
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 */
export
const BasicService_shortMessageService: _enum_for_BasicService.shortMessageService = BasicService.shortMessageService; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary shortMessageService
 * @description Alias of {@link BasicService_shortMessageService}.
 * @constant
 * @type {number}
 */
export
const shortMessageService: _enum_for_BasicService.shortMessageService = BasicService.shortMessageService; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_speechAndVideo
 * @description
 *
 * Speech and video. Multimedia message class added in the 3rd edition (ECMA-242
 * §6.3.1). No further definition is given.
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 */
export
const BasicService_speechAndVideo: _enum_for_BasicService.speechAndVideo = BasicService.speechAndVideo; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary speechAndVideo
 * @description Alias of {@link BasicService_speechAndVideo}.
 * @constant
 * @type {number}
 */
export
const speechAndVideo: _enum_for_BasicService.speechAndVideo = BasicService.speechAndVideo; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_speechAndFax
 * @description
 *
 * Speech and fax. Multimedia message class added in the 3rd edition (ECMA-242
 * §6.3.1). No further definition is given.
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 */
export
const BasicService_speechAndFax: _enum_for_BasicService.speechAndFax = BasicService.speechAndFax; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary speechAndFax
 * @description Alias of {@link BasicService_speechAndFax}.
 * @constant
 * @type {number}
 */
export
const speechAndFax: _enum_for_BasicService.speechAndFax = BasicService.speechAndFax; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_speechAndEmail
 * @description
 *
 * Speech and electronic mail. Multimedia message class added in the 3rd edition
 * (ECMA-242 §6.3.1). No further definition is given.
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 */
export
const BasicService_speechAndEmail: _enum_for_BasicService.speechAndEmail = BasicService.speechAndEmail; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary speechAndEmail
 * @description Alias of {@link BasicService_speechAndEmail}.
 * @constant
 * @type {number}
 */
export
const speechAndEmail: _enum_for_BasicService.speechAndEmail = BasicService.speechAndEmail; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_videoAndFax
 * @description
 *
 * Video and fax. Multimedia message class added in the 3rd edition (ECMA-242
 * §6.3.1). No further definition is given.
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 */
export
const BasicService_videoAndFax: _enum_for_BasicService.videoAndFax = BasicService.videoAndFax; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary videoAndFax
 * @description Alias of {@link BasicService_videoAndFax}.
 * @constant
 * @type {number}
 */
export
const videoAndFax: _enum_for_BasicService.videoAndFax = BasicService.videoAndFax; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_videoAndEmail
 * @description
 *
 * Video and electronic mail. Multimedia message class added in the 3rd edition
 * (ECMA-242 §6.3.1). No further definition is given.
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 */
export
const BasicService_videoAndEmail: _enum_for_BasicService.videoAndEmail = BasicService.videoAndEmail; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary videoAndEmail
 * @description Alias of {@link BasicService_videoAndEmail}.
 * @constant
 * @type {number}
 */
export
const videoAndEmail: _enum_for_BasicService.videoAndEmail = BasicService.videoAndEmail; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_faxAndEmail
 * @description
 *
 * Fax and electronic mail. Multimedia message class added in the 3rd edition
 * (ECMA-242 §6.3.1). No further definition is given.
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 */
export
const BasicService_faxAndEmail: _enum_for_BasicService.faxAndEmail = BasicService.faxAndEmail; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary faxAndEmail
 * @description Alias of {@link BasicService_faxAndEmail}.
 * @constant
 * @type {number}
 */
export
const faxAndEmail: _enum_for_BasicService.faxAndEmail = BasicService.faxAndEmail; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_speechVideoAndFax
 * @description
 *
 * Speech, video, and fax. Multimedia message class added in the 3rd edition
 * (ECMA-242 §6.3.1). No further definition is given.
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 */
export
const BasicService_speechVideoAndFax: _enum_for_BasicService.speechVideoAndFax = BasicService.speechVideoAndFax; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary speechVideoAndFax
 * @description Alias of {@link BasicService_speechVideoAndFax}.
 * @constant
 * @type {number}
 */
export
const speechVideoAndFax: _enum_for_BasicService.speechVideoAndFax = BasicService.speechVideoAndFax; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_speechVideoAndEmail
 * @description
 *
 * Speech, video, and electronic mail. Multimedia message class added in the 3rd
 * edition (ECMA-242 §6.3.1). No further definition is given.
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 */
export
const BasicService_speechVideoAndEmail: _enum_for_BasicService.speechVideoAndEmail = BasicService.speechVideoAndEmail; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary speechVideoAndEmail
 * @description Alias of {@link BasicService_speechVideoAndEmail}.
 * @constant
 * @type {number}
 */
export
const speechVideoAndEmail: _enum_for_BasicService.speechVideoAndEmail = BasicService.speechVideoAndEmail; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_speechFaxAndEmail
 * @description
 *
 * Speech, fax, and electronic mail. Multimedia message class added in the 3rd
 * edition (ECMA-242 §6.3.1). No further definition is given.
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 */
export
const BasicService_speechFaxAndEmail: _enum_for_BasicService.speechFaxAndEmail = BasicService.speechFaxAndEmail; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary speechFaxAndEmail
 * @description Alias of {@link BasicService_speechFaxAndEmail}.
 * @constant
 * @type {number}
 */
export
const speechFaxAndEmail: _enum_for_BasicService.speechFaxAndEmail = BasicService.speechFaxAndEmail; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_videoFaxAndEmail
 * @description
 *
 * Video, fax, and electronic mail. Multimedia message class added in the 3rd
 * edition (ECMA-242 §6.3.1). No further definition is given.
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 */
export
const BasicService_videoFaxAndEmail: _enum_for_BasicService.videoFaxAndEmail = BasicService.videoFaxAndEmail; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary videoFaxAndEmail
 * @description Alias of {@link BasicService_videoFaxAndEmail}.
 * @constant
 * @type {number}
 */
export
const videoFaxAndEmail: _enum_for_BasicService.videoFaxAndEmail = BasicService.videoFaxAndEmail; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_speechVideoFaxAndEmail
 * @description
 *
 * Speech, video, fax, and electronic mail. Multimedia message class added in
 * the 3rd edition (ECMA-242 §6.3.1). No further definition is given.
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 */
export
const BasicService_speechVideoFaxAndEmail: _enum_for_BasicService.speechVideoFaxAndEmail = BasicService.speechVideoFaxAndEmail; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary speechVideoFaxAndEmail
 * @description Alias of {@link BasicService_speechVideoFaxAndEmail}.
 * @constant
 * @type {number}
 */
export
const speechVideoFaxAndEmail: _enum_for_BasicService.speechVideoFaxAndEmail = BasicService.speechVideoFaxAndEmail; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_multimediaUnknown
 * @description Multimedia whose class is unknown (ECMA-242 §6.3.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 */
export
const BasicService_multimediaUnknown: _enum_for_BasicService.multimediaUnknown = BasicService.multimediaUnknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multimediaUnknown
 * @description Alias of {@link BasicService_multimediaUnknown}.
 * @constant
 * @type {number}
 */
export
const multimediaUnknown: _enum_for_BasicService.multimediaUnknown = BasicService.multimediaUnknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_serviceUnknown
 * @description The service is unknown (ECMA-242 §6.3.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 */
export
const BasicService_serviceUnknown: _enum_for_BasicService.serviceUnknown = BasicService.serviceUnknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary serviceUnknown
 * @description Alias of {@link BasicService_serviceUnknown}.
 * @constant
 * @type {number}
 */
export
const serviceUnknown: _enum_for_BasicService.serviceUnknown = BasicService.serviceUnknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_futureReserve1
 * @description
 *
 * Reserved for a future addition (ECMA-242 §6.3.1). No meaning is assigned.
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 */
export
const BasicService_futureReserve1: _enum_for_BasicService.futureReserve1 = BasicService.futureReserve1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary futureReserve1
 * @description Alias of {@link BasicService_futureReserve1}.
 * @constant
 * @type {number}
 */
export
const futureReserve1: _enum_for_BasicService.futureReserve1 = BasicService.futureReserve1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_futureReserve2
 * @description
 *
 * Reserved for a future addition (ECMA-242 §6.3.1). No meaning is assigned.
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 */
export
const BasicService_futureReserve2: _enum_for_BasicService.futureReserve2 = BasicService.futureReserve2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary futureReserve2
 * @description Alias of {@link BasicService_futureReserve2}.
 * @constant
 * @type {number}
 */
export
const futureReserve2: _enum_for_BasicService.futureReserve2 = BasicService.futureReserve2; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_futureReserve3
 * @description
 *
 * Reserved for a future addition (ECMA-242 §6.3.1). No meaning is assigned.
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 */
export
const BasicService_futureReserve3: _enum_for_BasicService.futureReserve3 = BasicService.futureReserve3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary futureReserve3
 * @description Alias of {@link BasicService_futureReserve3}.
 * @constant
 * @type {number}
 */
export
const futureReserve3: _enum_for_BasicService.futureReserve3 = BasicService.futureReserve3; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_futureReserve4
 * @description
 *
 * Reserved for a future addition (ECMA-242 §6.3.1). No meaning is assigned.
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 */
export
const BasicService_futureReserve4: _enum_for_BasicService.futureReserve4 = BasicService.futureReserve4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary futureReserve4
 * @description Alias of {@link BasicService_futureReserve4}.
 * @constant
 * @type {number}
 */
export
const futureReserve4: _enum_for_BasicService.futureReserve4 = BasicService.futureReserve4; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_futureReserve5
 * @description
 *
 * Reserved for a future addition (ECMA-242 §6.3.1). No meaning is assigned.
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 */
export
const BasicService_futureReserve5: _enum_for_BasicService.futureReserve5 = BasicService.futureReserve5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary futureReserve5
 * @description Alias of {@link BasicService_futureReserve5}.
 * @constant
 * @type {number}
 */
export
const futureReserve5: _enum_for_BasicService.futureReserve5 = BasicService.futureReserve5; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_futureReserve6
 * @description
 *
 * Reserved for a future addition (ECMA-242 §6.3.1). No meaning is assigned.
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 */
export
const BasicService_futureReserve6: _enum_for_BasicService.futureReserve6 = BasicService.futureReserve6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary futureReserve6
 * @description Alias of {@link BasicService_futureReserve6}.
 * @constant
 * @type {number}
 */
export
const futureReserve6: _enum_for_BasicService.futureReserve6 = BasicService.futureReserve6; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_futureReserve7
 * @description
 *
 * Reserved for a future addition (ECMA-242 §6.3.1). No meaning is assigned.
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 */
export
const BasicService_futureReserve7: _enum_for_BasicService.futureReserve7 = BasicService.futureReserve7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary futureReserve7
 * @description Alias of {@link BasicService_futureReserve7}.
 * @constant
 * @type {number}
 */
export
const futureReserve7: _enum_for_BasicService.futureReserve7 = BasicService.futureReserve7; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_futureReserve8
 * @description
 *
 * Reserved for a future addition (ECMA-242 §6.3.1). No meaning is assigned.
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 */
export
const BasicService_futureReserve8: _enum_for_BasicService.futureReserve8 = BasicService.futureReserve8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary futureReserve8
 * @description Alias of {@link BasicService_futureReserve8}.
 * @constant
 * @type {number}
 */
export
const futureReserve8: _enum_for_BasicService.futureReserve8 = BasicService.futureReserve8; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_BasicService: $.ASN1Decoder<BasicService> = $._decodeEnumerated;

export
const _encode_BasicService: $.ASN1Encoder<BasicService> = $._encodeEnumerated;

/* eslint-enable */
