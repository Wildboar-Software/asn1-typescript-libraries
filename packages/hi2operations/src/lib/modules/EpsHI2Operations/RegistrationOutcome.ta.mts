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



export
enum _enum_for_RegistrationOutcome {
    success = 0,
    failure = 1,
}

/**
 * @summary RegistrationOutcome
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RegistrationOutcome  ::=  ENUMERATED
 * {
 *  success (0),
 *  failure (1),
 * ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type RegistrationOutcome = _enum_for_RegistrationOutcome | ENUMERATED;

/**
 * @summary RegistrationOutcome_success
 * @constant
 * @type {number}
 */
export
const RegistrationOutcome_success: RegistrationOutcome = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary success
 * @constant
 * @type {number}
 */
export
const success: RegistrationOutcome = RegistrationOutcome_success; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RegistrationOutcome_failure
 * @constant
 * @type {number}
 */
export
const RegistrationOutcome_failure: RegistrationOutcome = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary failure
 * @constant
 * @type {number}
 */
export
const failure: RegistrationOutcome = RegistrationOutcome_failure; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_RegistrationOutcome: $.ASN1Decoder<RegistrationOutcome> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RegistrationOutcome
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RegistrationOutcome (el: _Element): RegistrationOutcome {
    if (!_cached_decoder_for_RegistrationOutcome) { _cached_decoder_for_RegistrationOutcome = $._decodeEnumerated; }
    return _cached_decoder_for_RegistrationOutcome(el);
}

let _cached_encoder_for_RegistrationOutcome: $.ASN1Encoder<RegistrationOutcome> | null = null;

/**
 * @summary Encodes a(n) RegistrationOutcome into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RegistrationOutcome, encoded as an ASN.1 Element.
 */
export
function _encode_RegistrationOutcome (value: RegistrationOutcome, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RegistrationOutcome) { _cached_encoder_for_RegistrationOutcome = $._encodeEnumerated; }
    return _cached_encoder_for_RegistrationOutcome(value, elGetter);
}


/* eslint-enable */
