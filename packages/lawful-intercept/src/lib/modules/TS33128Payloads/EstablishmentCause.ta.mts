/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EstablishmentCause
 * @description
 * 
 * The EstablishmentCause provides information on reason RRC was established.
 * Derived from the RRC Establishment Cause type defined in TS 38.413 [23]
 * clause 9.3.1.111. and the RRC Establishment Cause type defined in TS 36.413
 * [38] clause 9.2.1.3a.
 *
 * 3GPP TS 33.128, clause 8.5.8.
 * https://www.3gpp.org/DynaReport/33128.htm
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
    /**
     * @description
     *
     * Connection established Emergency connection.
     *
     * 3GPP TS 33.128, clause 8.5.8.
     */
    emergency = 1,
    /**
     * @description
     *
     * Connection established for a High priority access connection.
     *
     * 3GPP TS 33.128, clause 8.5.8.
     */
    highPriorityAccess = 2,
    /**
     * @description
     *
     * Connection established as a result of a page.
     *
     * 3GPP TS 33.128, clause 8.5.8.
     */
    mtAccess = 3,
    /**
     * @description
     *
     * Connection established for mobile originated signalling.
     *
     * 3GPP TS 33.128, clause 8.5.8.
     */
    moSignalling = 4,
    /**
     * @description
     *
     * Connection established for mobile originated data.
     *
     * 3GPP TS 33.128, clause 8.5.8.
     */
    moData = 5,
    /**
     * @description
     *
     * Connection established for mobile originated voice call.
     *
     * 3GPP TS 33.128, clause 8.5.8.
     */
    moVoiceCall = 6,
    /**
     * @description
     *
     * Connection established for mobile originated video call.
     *
     * 3GPP TS 33.128, clause 8.5.8.
     */
    moVideoCall = 7,
    /**
     * @description
     *
     * Connection established for mobile originated SMS.
     *
     * 3GPP TS 33.128, clause 8.5.8.
     */
    moSMS = 8,
    /**
     * @description
     *
     * Connection established for MPS Priority Access.
     *
     * 3GPP TS 33.128, clause 8.5.8.
     */
    mpsPriorityAccess = 9,
    /**
     * @description
     *
     * Connection established for MCS Priority Access.
     *
     * 3GPP TS 33.128, clause 8.5.8.
     */
    mcsPriorityAccess = 10,
    /**
     * @description
     *
     * Not available.
     *
     * 3GPP TS 33.128, clause 8.5.8.
     */
    notAvailable = 11,
    /**
     * @description
     *
     * Exception Data.
     *
     * 3GPP TS 33.128, clause 8.5.8.
     */
    exceptionData = 12,
}

/**
 * @summary EstablishmentCause
 * @description
 * 
 * The EstablishmentCause provides information on reason RRC was established.
 * Derived from the RRC Establishment Cause type defined in TS 38.413 [23]
 * clause 9.3.1.111. and the RRC Establishment Cause type defined in TS 36.413
 * [38] clause 9.2.1.3a.
 *
 * 3GPP TS 33.128, clause 8.5.8.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * The EstablishmentCause provides information on reason RRC was established.
 * Derived from the RRC Establishment Cause type defined in TS 38.413 [23]
 * clause 9.3.1.111. and the RRC Establishment Cause type defined in TS 36.413
 * [38] clause 9.2.1.3a.
 *
 * 3GPP TS 33.128, clause 8.5.8.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * @description
 *
 * Connection established Emergency connection.
 *
 * 3GPP TS 33.128, clause 8.5.8.
 *
 * @constant
 * @type {number}
 */
export
const EstablishmentCause_emergency = EstablishmentCause.emergency; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary emergency
 * @description
 *
 * Connection established Emergency connection.
 *
 * 3GPP TS 33.128, clause 8.5.8.
 *
 * @constant
 * @type {number}
 */
export
const emergency = EstablishmentCause.emergency; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EstablishmentCause_highPriorityAccess
 * @description
 *
 * Connection established for a High priority access connection.
 *
 * 3GPP TS 33.128, clause 8.5.8.
 *
 * @constant
 * @type {number}
 */
export
const EstablishmentCause_highPriorityAccess = EstablishmentCause.highPriorityAccess; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary highPriorityAccess
 * @description
 *
 * Connection established for a High priority access connection.
 *
 * 3GPP TS 33.128, clause 8.5.8.
 *
 * @constant
 * @type {number}
 */
export
const highPriorityAccess = EstablishmentCause.highPriorityAccess; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EstablishmentCause_mtAccess
 * @description
 *
 * Connection established as a result of a page.
 *
 * 3GPP TS 33.128, clause 8.5.8.
 *
 * @constant
 * @type {number}
 */
export
const EstablishmentCause_mtAccess = EstablishmentCause.mtAccess; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mtAccess
 * @description
 *
 * Connection established as a result of a page.
 *
 * 3GPP TS 33.128, clause 8.5.8.
 *
 * @constant
 * @type {number}
 */
export
const mtAccess = EstablishmentCause.mtAccess; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EstablishmentCause_moSignalling
 * @description
 *
 * Connection established for mobile originated signalling.
 *
 * 3GPP TS 33.128, clause 8.5.8.
 *
 * @constant
 * @type {number}
 */
export
const EstablishmentCause_moSignalling = EstablishmentCause.moSignalling; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary moSignalling
 * @description
 *
 * Connection established for mobile originated signalling.
 *
 * 3GPP TS 33.128, clause 8.5.8.
 *
 * @constant
 * @type {number}
 */
export
const moSignalling = EstablishmentCause.moSignalling; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EstablishmentCause_moData
 * @description
 *
 * Connection established for mobile originated data.
 *
 * 3GPP TS 33.128, clause 8.5.8.
 *
 * @constant
 * @type {number}
 */
export
const EstablishmentCause_moData = EstablishmentCause.moData; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary moData
 * @description
 *
 * Connection established for mobile originated data.
 *
 * 3GPP TS 33.128, clause 8.5.8.
 *
 * @constant
 * @type {number}
 */
export
const moData = EstablishmentCause.moData; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EstablishmentCause_moVoiceCall
 * @description
 *
 * Connection established for mobile originated voice call.
 *
 * 3GPP TS 33.128, clause 8.5.8.
 *
 * @constant
 * @type {number}
 */
export
const EstablishmentCause_moVoiceCall = EstablishmentCause.moVoiceCall; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary moVoiceCall
 * @description
 *
 * Connection established for mobile originated voice call.
 *
 * 3GPP TS 33.128, clause 8.5.8.
 *
 * @constant
 * @type {number}
 */
export
const moVoiceCall = EstablishmentCause.moVoiceCall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EstablishmentCause_moVideoCall
 * @description
 *
 * Connection established for mobile originated video call.
 *
 * 3GPP TS 33.128, clause 8.5.8.
 *
 * @constant
 * @type {number}
 */
export
const EstablishmentCause_moVideoCall = EstablishmentCause.moVideoCall; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary moVideoCall
 * @description
 *
 * Connection established for mobile originated video call.
 *
 * 3GPP TS 33.128, clause 8.5.8.
 *
 * @constant
 * @type {number}
 */
export
const moVideoCall = EstablishmentCause.moVideoCall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EstablishmentCause_moSMS
 * @description
 *
 * Connection established for mobile originated SMS.
 *
 * 3GPP TS 33.128, clause 8.5.8.
 *
 * @constant
 * @type {number}
 */
export
const EstablishmentCause_moSMS = EstablishmentCause.moSMS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary moSMS
 * @description
 *
 * Connection established for mobile originated SMS.
 *
 * 3GPP TS 33.128, clause 8.5.8.
 *
 * @constant
 * @type {number}
 */
export
const moSMS = EstablishmentCause.moSMS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EstablishmentCause_mpsPriorityAccess
 * @description
 *
 * Connection established for MPS Priority Access.
 *
 * 3GPP TS 33.128, clause 8.5.8.
 *
 * @constant
 * @type {number}
 */
export
const EstablishmentCause_mpsPriorityAccess = EstablishmentCause.mpsPriorityAccess; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mpsPriorityAccess
 * @description
 *
 * Connection established for MPS Priority Access.
 *
 * 3GPP TS 33.128, clause 8.5.8.
 *
 * @constant
 * @type {number}
 */
export
const mpsPriorityAccess = EstablishmentCause.mpsPriorityAccess; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EstablishmentCause_mcsPriorityAccess
 * @description
 *
 * Connection established for MCS Priority Access.
 *
 * 3GPP TS 33.128, clause 8.5.8.
 *
 * @constant
 * @type {number}
 */
export
const EstablishmentCause_mcsPriorityAccess = EstablishmentCause.mcsPriorityAccess; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mcsPriorityAccess
 * @description
 *
 * Connection established for MCS Priority Access.
 *
 * 3GPP TS 33.128, clause 8.5.8.
 *
 * @constant
 * @type {number}
 */
export
const mcsPriorityAccess = EstablishmentCause.mcsPriorityAccess; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EstablishmentCause_notAvailable
 * @description
 *
 * Not available.
 *
 * 3GPP TS 33.128, clause 8.5.8.
 *
 * @constant
 * @type {number}
 */
export
const EstablishmentCause_notAvailable = EstablishmentCause.notAvailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notAvailable
 * @description
 *
 * Not available.
 *
 * 3GPP TS 33.128, clause 8.5.8.
 *
 * @constant
 * @type {number}
 */
export
const notAvailable = EstablishmentCause.notAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EstablishmentCause_exceptionData
 * @description
 *
 * Exception Data.
 *
 * 3GPP TS 33.128, clause 8.5.8.
 *
 * @constant
 * @type {number}
 */
export
const EstablishmentCause_exceptionData = EstablishmentCause.exceptionData; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary exceptionData
 * @description
 *
 * Exception Data.
 *
 * 3GPP TS 33.128, clause 8.5.8.
 *
 * @constant
 * @type {number}
 */
export
const exceptionData = EstablishmentCause.exceptionData; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_EstablishmentCause: $.ASN1Decoder<EstablishmentCause> = $._decodeEnumerated;
export const _encode_EstablishmentCause: $.ASN1Encoder<EstablishmentCause> = $._encodeEnumerated;


/* eslint-enable */
