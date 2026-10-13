/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EstablishmentCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EstablishmentCause  ::=  ENUMERATED
 * {
 *     emergency(1),
 *     highPriorityAccess(2),
 *     mtAccess(3),
 *     moSignalling(4),
 *     moData(5),
 *     moVoiceCall(6),
 *     moVideoCall(7),
 *     moSMS(8),
 *     mpsPriorityAccess(9),
 *     mcsPriorityAccess(10),
 *     notAvailable(11),
 *     exceptionData(12)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_EstablishmentCause {
    emergency = 1,
    highPriorityAccess = 2,
    mtAccess = 3,
    moSignalling = 4,
    moData = 5,
    moVoiceCall = 6,
    moVideoCall = 7,
    moSMS = 8,
    mpsPriorityAccess = 9,
    mcsPriorityAccess = 10,
    notAvailable = 11,
    exceptionData = 12,
}

/**
 * @summary EstablishmentCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EstablishmentCause  ::=  ENUMERATED
 * {
 *     emergency(1),
 *     highPriorityAccess(2),
 *     mtAccess(3),
 *     moSignalling(4),
 *     moData(5),
 *     moVoiceCall(6),
 *     moVideoCall(7),
 *     moSMS(8),
 *     mpsPriorityAccess(9),
 *     mcsPriorityAccess(10),
 *     notAvailable(11),
 *     exceptionData(12)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type EstablishmentCause = _enum_for_EstablishmentCause;

/**
 * @summary EstablishmentCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EstablishmentCause  ::=  ENUMERATED
 * {
 *     emergency(1),
 *     highPriorityAccess(2),
 *     mtAccess(3),
 *     moSignalling(4),
 *     moData(5),
 *     moVoiceCall(6),
 *     moVideoCall(7),
 *     moSMS(8),
 *     mpsPriorityAccess(9),
 *     mcsPriorityAccess(10),
 *     notAvailable(11),
 *     exceptionData(12)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const EstablishmentCause = _enum_for_EstablishmentCause;

/**
 * @summary EstablishmentCause_emergency
 * @constant
 * @type {number}
 */
export
const EstablishmentCause_emergency: EstablishmentCause = EstablishmentCause.emergency; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary emergency
 * @constant
 * @type {number}
 */
export
const emergency: EstablishmentCause = EstablishmentCause.emergency; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EstablishmentCause_highPriorityAccess
 * @constant
 * @type {number}
 */
export
const EstablishmentCause_highPriorityAccess: EstablishmentCause = EstablishmentCause.highPriorityAccess; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary highPriorityAccess
 * @constant
 * @type {number}
 */
export
const highPriorityAccess: EstablishmentCause = EstablishmentCause.highPriorityAccess; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EstablishmentCause_mtAccess
 * @constant
 * @type {number}
 */
export
const EstablishmentCause_mtAccess: EstablishmentCause = EstablishmentCause.mtAccess; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mtAccess
 * @constant
 * @type {number}
 */
export
const mtAccess: EstablishmentCause = EstablishmentCause.mtAccess; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EstablishmentCause_moSignalling
 * @constant
 * @type {number}
 */
export
const EstablishmentCause_moSignalling: EstablishmentCause = EstablishmentCause.moSignalling; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary moSignalling
 * @constant
 * @type {number}
 */
export
const moSignalling: EstablishmentCause = EstablishmentCause.moSignalling; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EstablishmentCause_moData
 * @constant
 * @type {number}
 */
export
const EstablishmentCause_moData: EstablishmentCause = EstablishmentCause.moData; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary moData
 * @constant
 * @type {number}
 */
export
const moData: EstablishmentCause = EstablishmentCause.moData; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EstablishmentCause_moVoiceCall
 * @constant
 * @type {number}
 */
export
const EstablishmentCause_moVoiceCall: EstablishmentCause = EstablishmentCause.moVoiceCall; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary moVoiceCall
 * @constant
 * @type {number}
 */
export
const moVoiceCall: EstablishmentCause = EstablishmentCause.moVoiceCall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EstablishmentCause_moVideoCall
 * @constant
 * @type {number}
 */
export
const EstablishmentCause_moVideoCall: EstablishmentCause = EstablishmentCause.moVideoCall; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary moVideoCall
 * @constant
 * @type {number}
 */
export
const moVideoCall: EstablishmentCause = EstablishmentCause.moVideoCall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EstablishmentCause_moSMS
 * @constant
 * @type {number}
 */
export
const EstablishmentCause_moSMS: EstablishmentCause = EstablishmentCause.moSMS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary moSMS
 * @constant
 * @type {number}
 */
export
const moSMS: EstablishmentCause = EstablishmentCause.moSMS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EstablishmentCause_mpsPriorityAccess
 * @constant
 * @type {number}
 */
export
const EstablishmentCause_mpsPriorityAccess: EstablishmentCause = EstablishmentCause.mpsPriorityAccess; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mpsPriorityAccess
 * @constant
 * @type {number}
 */
export
const mpsPriorityAccess: EstablishmentCause = EstablishmentCause.mpsPriorityAccess; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EstablishmentCause_mcsPriorityAccess
 * @constant
 * @type {number}
 */
export
const EstablishmentCause_mcsPriorityAccess: EstablishmentCause = EstablishmentCause.mcsPriorityAccess; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mcsPriorityAccess
 * @constant
 * @type {number}
 */
export
const mcsPriorityAccess: EstablishmentCause = EstablishmentCause.mcsPriorityAccess; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EstablishmentCause_notAvailable
 * @constant
 * @type {number}
 */
export
const EstablishmentCause_notAvailable: EstablishmentCause = EstablishmentCause.notAvailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notAvailable
 * @constant
 * @type {number}
 */
export
const notAvailable: EstablishmentCause = EstablishmentCause.notAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EstablishmentCause_exceptionData
 * @constant
 * @type {number}
 */
export
const EstablishmentCause_exceptionData: EstablishmentCause = EstablishmentCause.exceptionData; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary exceptionData
 * @constant
 * @type {number}
 */
export
const exceptionData: EstablishmentCause = EstablishmentCause.exceptionData; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_EstablishmentCause: $.ASN1Decoder<EstablishmentCause> = $._decodeEnumerated;
export const _encode_EstablishmentCause: $.ASN1Encoder<EstablishmentCause> = $._encodeEnumerated;


/* eslint-enable */
