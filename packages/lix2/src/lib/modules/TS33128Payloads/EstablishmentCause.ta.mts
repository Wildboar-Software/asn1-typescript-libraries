/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
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

let _cached_decoder_for_EstablishmentCause: $.ASN1Decoder<EstablishmentCause> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EstablishmentCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EstablishmentCause (el: _Element): EstablishmentCause {
    if (!_cached_decoder_for_EstablishmentCause) { _cached_decoder_for_EstablishmentCause = $._decodeEnumerated; }
    return _cached_decoder_for_EstablishmentCause(el);
}

let _cached_encoder_for_EstablishmentCause: $.ASN1Encoder<EstablishmentCause> | null = null;

/**
 * @summary Encodes a(n) EstablishmentCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EstablishmentCause, encoded as an ASN.1 Element.
 */
export
function _encode_EstablishmentCause (value: EstablishmentCause, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EstablishmentCause) { _cached_encoder_for_EstablishmentCause = $._encodeEnumerated; }
    return _cached_encoder_for_EstablishmentCause(value, elGetter);
}


/* eslint-enable */
