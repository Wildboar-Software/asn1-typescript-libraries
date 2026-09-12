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
 * @summary ACSE_requirements
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACSE-requirements  ::=  BIT STRING {
 *   authentication(0), application-context-negotiation(1)}
 * ```
 */
export
type ACSE_requirements = BIT_STRING;

/**
 * @summary ACSE_requirements_authentication
 * @constant
 */
export
const ACSE_requirements_authentication: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary authentication
 * @constant
 */
export
const authentication: number = ACSE_requirements_authentication; /* SHORT_NAMED_BIT */

/**
 * @summary ACSE_requirements_application_context_negotiation
 * @constant
 */
export
const ACSE_requirements_application_context_negotiation: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary application_context_negotiation
 * @constant
 */
export
const application_context_negotiation: number = ACSE_requirements_application_context_negotiation; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ACSE_requirements: $.ASN1Decoder<ACSE_requirements> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ACSE_requirements
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ACSE_requirements (el: _Element): ACSE_requirements {
    if (!_cached_decoder_for_ACSE_requirements) { _cached_decoder_for_ACSE_requirements = $._decodeBitString; }
    return _cached_decoder_for_ACSE_requirements(el);
}

let _cached_encoder_for_ACSE_requirements: $.ASN1Encoder<ACSE_requirements> | null = null;

/**
 * @summary Encodes a(n) ACSE_requirements into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ACSE_requirements, encoded as an ASN.1 Element.
 */
export
function _encode_ACSE_requirements (value: ACSE_requirements, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ACSE_requirements) { _cached_encoder_for_ACSE_requirements = $._encodeBitString; }
    return _cached_encoder_for_ACSE_requirements(value, elGetter);
}


/* eslint-enable */
