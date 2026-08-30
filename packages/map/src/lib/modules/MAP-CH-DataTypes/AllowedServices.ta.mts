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
 * @summary AllowedServices
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AllowedServices  ::=  BIT STRING {
 *     firstServiceAllowed    (0),
 *     secondServiceAllowed    (1) } (SIZE (2..8))
 * ```
 */
export
type AllowedServices = BIT_STRING;

/**
 * @summary AllowedServices_firstServiceAllowed
 * @constant
 */
export
const AllowedServices_firstServiceAllowed: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary firstServiceAllowed
 * @constant
 */
export
const firstServiceAllowed: number = AllowedServices_firstServiceAllowed; /* SHORT_NAMED_BIT */

/**
 * @summary AllowedServices_secondServiceAllowed
 * @constant
 */
export
const AllowedServices_secondServiceAllowed: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary secondServiceAllowed
 * @constant
 */
export
const secondServiceAllowed: number = AllowedServices_secondServiceAllowed; /* SHORT_NAMED_BIT */

let _cached_decoder_for_AllowedServices: $.ASN1Decoder<AllowedServices> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AllowedServices
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AllowedServices (el: _Element): AllowedServices {
    if (!_cached_decoder_for_AllowedServices) { _cached_decoder_for_AllowedServices = $._decodeBitString; }
    return _cached_decoder_for_AllowedServices(el);
}

let _cached_encoder_for_AllowedServices: $.ASN1Encoder<AllowedServices> | null = null;

/**
 * @summary Encodes a(n) AllowedServices into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AllowedServices, encoded as an ASN.1 Element.
 */
export
function _encode_AllowedServices (value: AllowedServices, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AllowedServices) { _cached_encoder_for_AllowedServices = $._encodeBitString; }
    return _cached_encoder_for_AllowedServices(value, elGetter);
}


/* eslint-enable */
