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
 * @summary ServiceControls_scopeOfReferral
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceControls-scopeOfReferral ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ServiceControls_scopeOfReferral = INTEGER;

/**
 * @summary ServiceControls_scopeOfReferral_dmd
 * @constant
 * @type {number}
 */
export
const ServiceControls_scopeOfReferral_dmd: ServiceControls_scopeOfReferral = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceControls_scopeOfReferral_dmd
 * @constant
 * @type {number}
 */
export
const dmd: ServiceControls_scopeOfReferral = ServiceControls_scopeOfReferral_dmd; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceControls_scopeOfReferral_country
 * @constant
 * @type {number}
 */
export
const ServiceControls_scopeOfReferral_country: ServiceControls_scopeOfReferral = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceControls_scopeOfReferral_country
 * @constant
 * @type {number}
 */
export
const country: ServiceControls_scopeOfReferral = ServiceControls_scopeOfReferral_country; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ServiceControls_scopeOfReferral: $.ASN1Decoder<ServiceControls_scopeOfReferral> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceControls_scopeOfReferral
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceControls_scopeOfReferral (el: _Element): ServiceControls_scopeOfReferral {
    if (!_cached_decoder_for_ServiceControls_scopeOfReferral) { _cached_decoder_for_ServiceControls_scopeOfReferral = $._decodeInteger; }
    return _cached_decoder_for_ServiceControls_scopeOfReferral(el);
}

let _cached_encoder_for_ServiceControls_scopeOfReferral: $.ASN1Encoder<ServiceControls_scopeOfReferral> | null = null;

/**
 * @summary Encodes a(n) ServiceControls_scopeOfReferral into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceControls_scopeOfReferral, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceControls_scopeOfReferral (value: ServiceControls_scopeOfReferral, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceControls_scopeOfReferral) { _cached_encoder_for_ServiceControls_scopeOfReferral = $._encodeInteger; }
    return _cached_encoder_for_ServiceControls_scopeOfReferral(value, elGetter);
}


/* eslint-enable */
