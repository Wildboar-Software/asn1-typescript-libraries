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
 * @summary MDTActivation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MDTActivation  ::=  ENUMERATED
 * {
 *     immediateMDTOnly(1),
 *     loggedMDTOnly(2),
 *     immediateMDTandTrace(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MDTActivation {
    immediateMDTOnly = 1,
    loggedMDTOnly = 2,
    immediateMDTandTrace = 3,
}

/**
 * @summary MDTActivation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MDTActivation  ::=  ENUMERATED
 * {
 *     immediateMDTOnly(1),
 *     loggedMDTOnly(2),
 *     immediateMDTandTrace(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MDTActivation = _enum_for_MDTActivation;

/**
 * @summary MDTActivation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MDTActivation  ::=  ENUMERATED
 * {
 *     immediateMDTOnly(1),
 *     loggedMDTOnly(2),
 *     immediateMDTandTrace(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MDTActivation = _enum_for_MDTActivation;

/**
 * @summary MDTActivation_immediateMDTOnly
 * @constant
 * @type {number}
 */
export
const MDTActivation_immediateMDTOnly: MDTActivation = MDTActivation.immediateMDTOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary immediateMDTOnly
 * @constant
 * @type {number}
 */
export
const immediateMDTOnly: MDTActivation = MDTActivation.immediateMDTOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MDTActivation_loggedMDTOnly
 * @constant
 * @type {number}
 */
export
const MDTActivation_loggedMDTOnly: MDTActivation = MDTActivation.loggedMDTOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary loggedMDTOnly
 * @constant
 * @type {number}
 */
export
const loggedMDTOnly: MDTActivation = MDTActivation.loggedMDTOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MDTActivation_immediateMDTandTrace
 * @constant
 * @type {number}
 */
export
const MDTActivation_immediateMDTandTrace: MDTActivation = MDTActivation.immediateMDTandTrace; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary immediateMDTandTrace
 * @constant
 * @type {number}
 */
export
const immediateMDTandTrace: MDTActivation = MDTActivation.immediateMDTandTrace; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MDTActivation: $.ASN1Decoder<MDTActivation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MDTActivation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MDTActivation (el: _Element): MDTActivation {
    if (!_cached_decoder_for_MDTActivation) { _cached_decoder_for_MDTActivation = $._decodeEnumerated; }
    return _cached_decoder_for_MDTActivation(el);
}

let _cached_encoder_for_MDTActivation: $.ASN1Encoder<MDTActivation> | null = null;

/**
 * @summary Encodes a(n) MDTActivation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MDTActivation, encoded as an ASN.1 Element.
 */
export
function _encode_MDTActivation (value: MDTActivation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MDTActivation) { _cached_encoder_for_MDTActivation = $._encodeEnumerated; }
    return _cached_encoder_for_MDTActivation(value, elGetter);
}


/* eslint-enable */
