/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ACRScenario
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACRScenario  ::=  ENUMERATED
 * {
 *     eECInitiated(1),
 *     eECExecutedViaSourceEES(2),
 *     eECExecutedViaTargetEES(3),
 *     sourceEASDecided(4),
 *     sourceEESExecuted(5),
 *     eELManagedACR(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ACRScenario {
    eECInitiated = 1,
    eECExecutedViaSourceEES = 2,
    eECExecutedViaTargetEES = 3,
    sourceEASDecided = 4,
    sourceEESExecuted = 5,
    eELManagedACR = 6,
}

/**
 * @summary ACRScenario
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACRScenario  ::=  ENUMERATED
 * {
 *     eECInitiated(1),
 *     eECExecutedViaSourceEES(2),
 *     eECExecutedViaTargetEES(3),
 *     sourceEASDecided(4),
 *     sourceEESExecuted(5),
 *     eELManagedACR(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ACRScenario = _enum_for_ACRScenario;

/**
 * @summary ACRScenario
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACRScenario  ::=  ENUMERATED
 * {
 *     eECInitiated(1),
 *     eECExecutedViaSourceEES(2),
 *     eECExecutedViaTargetEES(3),
 *     sourceEASDecided(4),
 *     sourceEESExecuted(5),
 *     eELManagedACR(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const ACRScenario = _enum_for_ACRScenario;

/**
 * @summary ACRScenario_eECInitiated
 * @constant
 * @type {number}
 */
export
const ACRScenario_eECInitiated: ACRScenario = ACRScenario.eECInitiated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eECInitiated
 * @constant
 * @type {number}
 */
export
const eECInitiated: ACRScenario = ACRScenario.eECInitiated; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ACRScenario_eECExecutedViaSourceEES
 * @constant
 * @type {number}
 */
export
const ACRScenario_eECExecutedViaSourceEES: ACRScenario = ACRScenario.eECExecutedViaSourceEES; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eECExecutedViaSourceEES
 * @constant
 * @type {number}
 */
export
const eECExecutedViaSourceEES: ACRScenario = ACRScenario.eECExecutedViaSourceEES; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ACRScenario_eECExecutedViaTargetEES
 * @constant
 * @type {number}
 */
export
const ACRScenario_eECExecutedViaTargetEES: ACRScenario = ACRScenario.eECExecutedViaTargetEES; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eECExecutedViaTargetEES
 * @constant
 * @type {number}
 */
export
const eECExecutedViaTargetEES: ACRScenario = ACRScenario.eECExecutedViaTargetEES; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ACRScenario_sourceEASDecided
 * @constant
 * @type {number}
 */
export
const ACRScenario_sourceEASDecided: ACRScenario = ACRScenario.sourceEASDecided; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sourceEASDecided
 * @constant
 * @type {number}
 */
export
const sourceEASDecided: ACRScenario = ACRScenario.sourceEASDecided; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ACRScenario_sourceEESExecuted
 * @constant
 * @type {number}
 */
export
const ACRScenario_sourceEESExecuted: ACRScenario = ACRScenario.sourceEESExecuted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sourceEESExecuted
 * @constant
 * @type {number}
 */
export
const sourceEESExecuted: ACRScenario = ACRScenario.sourceEESExecuted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ACRScenario_eELManagedACR
 * @constant
 * @type {number}
 */
export
const ACRScenario_eELManagedACR: ACRScenario = ACRScenario.eELManagedACR; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eELManagedACR
 * @constant
 * @type {number}
 */
export
const eELManagedACR: ACRScenario = ACRScenario.eELManagedACR; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ACRScenario: $.ASN1Decoder<ACRScenario> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ACRScenario
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ACRScenario (el: _Element): ACRScenario {
    if (!_cached_decoder_for_ACRScenario) { _cached_decoder_for_ACRScenario = $._decodeEnumerated; }
    return _cached_decoder_for_ACRScenario(el);
}

let _cached_encoder_for_ACRScenario: $.ASN1Encoder<ACRScenario> | null = null;

/**
 * @summary Encodes a(n) ACRScenario into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ACRScenario, encoded as an ASN.1 Element.
 */
export
function _encode_ACRScenario (value: ACRScenario, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ACRScenario) { _cached_encoder_for_ACRScenario = $._encodeEnumerated; }
    return _cached_encoder_for_ACRScenario(value, elGetter);
}


/* eslint-enable */
