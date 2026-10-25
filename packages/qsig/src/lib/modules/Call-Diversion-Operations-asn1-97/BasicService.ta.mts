/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary BasicService
 * @description
 *
 * Basic service for which diversion applies, or all basic services (ECMA-174
 * §6.3.1). SS-DIV applies to the basic services of ECMA-142 (§6.1). This
 * Standard lists the identifiers and does not define the services further.
 * `allServices` is the default `basicService` of `interrogateDiversionQ`.
 * Activation may be for one subscribed basic service or for all of them
 * (ECMA-173 §6.2.2.1.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-173/
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
 * Basic service for which diversion applies, or all basic services (ECMA-174
 * §6.3.1). SS-DIV applies to the basic services of ECMA-142 (§6.1). This
 * Standard lists the identifiers and does not define the services further.
 * `allServices` is the default `basicService` of `interrogateDiversionQ`.
 * Activation may be for one subscribed basic service or for all of them
 * (ECMA-173 §6.2.2.1.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-173/
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
 * Basic service for which diversion applies, or all basic services (ECMA-174
 * §6.3.1). SS-DIV applies to the basic services of ECMA-142 (§6.1). This
 * Standard lists the identifiers and does not define the services further.
 * `allServices` is the default `basicService` of `interrogateDiversionQ`.
 * Activation may be for one subscribed basic service or for all of them
 * (ECMA-173 §6.2.2.1.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-173/
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
 * @description
 *
 * All basic services for which the supplementary service is subscribed
 * (ECMA-173 §6.2.2.1.1). Default `basicService` on `interrogateDiversionQ`
 * (ECMA-174 §6.3.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-173/
 */
export
const BasicService_allServices = BasicService.allServices; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allServices
 * @description Alias of {@link BasicService_allServices}.
 * @constant
 * @type {number}
 */
export
const allServices = BasicService.allServices; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_speech
 * @description
 *
 * Speech. ECMA-174 §6.3.1 lists the identifier and does not define the basic
 * service further.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 */
export
const BasicService_speech = BasicService.speech; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary speech
 * @description Alias of {@link BasicService_speech}.
 * @constant
 * @type {number}
 */
export
const speech = BasicService.speech; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_unrestrictedDigitalInformation
 * @description
 *
 * Unrestricted digital information. ECMA-174 §6.3.1 lists the identifier and
 * does not define the basic service further.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 */
export
const BasicService_unrestrictedDigitalInformation = BasicService.unrestrictedDigitalInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unrestrictedDigitalInformation
 * @description Alias of {@link BasicService_unrestrictedDigitalInformation}.
 * @constant
 * @type {number}
 */
export
const unrestrictedDigitalInformation = BasicService.unrestrictedDigitalInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_audio3100Hz
 * @description
 *
 * 3.1 kHz audio. ECMA-174 §6.3.1 lists the identifier and does not define the
 * basic service further.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 */
export
const BasicService_audio3100Hz = BasicService.audio3100Hz; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary audio3100Hz
 * @description Alias of {@link BasicService_audio3100Hz}.
 * @constant
 * @type {number}
 */
export
const audio3100Hz = BasicService.audio3100Hz; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_telephony
 * @description
 *
 * Telephony. ECMA-174 §6.3.1 lists the identifier and does not define the basic
 * service further.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 */
export
const BasicService_telephony = BasicService.telephony; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary telephony
 * @description Alias of {@link BasicService_telephony}.
 * @constant
 * @type {number}
 */
export
const telephony = BasicService.telephony; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_teletex
 * @description
 *
 * Teletex. ECMA-174 §6.3.1 lists the identifier and does not define the basic
 * service further.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 */
export
const BasicService_teletex = BasicService.teletex; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary teletex
 * @description Alias of {@link BasicService_teletex}.
 * @constant
 * @type {number}
 */
export
const teletex = BasicService.teletex; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_telefaxGroup4Class1
 * @description
 *
 * Telefax group 4 class 1. ECMA-174 §6.3.1 lists the identifier and does not
 * define the basic service further.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 */
export
const BasicService_telefaxGroup4Class1 = BasicService.telefaxGroup4Class1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary telefaxGroup4Class1
 * @description Alias of {@link BasicService_telefaxGroup4Class1}.
 * @constant
 * @type {number}
 */
export
const telefaxGroup4Class1 = BasicService.telefaxGroup4Class1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_videotexSyntaxBased
 * @description
 *
 * Videotex syntax-based. ECMA-174 §6.3.1 lists the identifier and does not
 * define the basic service further.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 */
export
const BasicService_videotexSyntaxBased = BasicService.videotexSyntaxBased; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary videotexSyntaxBased
 * @description Alias of {@link BasicService_videotexSyntaxBased}.
 * @constant
 * @type {number}
 */
export
const videotexSyntaxBased = BasicService.videotexSyntaxBased; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BasicService_videotelephony
 * @description
 *
 * Videotelephony. ECMA-174 §6.3.1 lists the identifier and does not define the
 * basic service further.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 */
export
const BasicService_videotelephony = BasicService.videotelephony; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary videotelephony
 * @description Alias of {@link BasicService_videotelephony}.
 * @constant
 * @type {number}
 */
export
const videotelephony = BasicService.videotelephony; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_BasicService: $.ASN1Decoder<BasicService> = $._decodeEnumerated;

export
const _encode_BasicService: $.ASN1Encoder<BasicService> = $._encodeEnumerated;

/* eslint-enable */
