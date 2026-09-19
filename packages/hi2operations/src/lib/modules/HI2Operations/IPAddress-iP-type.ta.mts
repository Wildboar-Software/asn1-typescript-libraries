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
enum _enum_for_IPAddress_iP_type {
    iPV4 = 0,
    iPV6 = 1,
}

/**
 * @summary IPAddress_iP_type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPAddress-iP-type ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type IPAddress_iP_type = _enum_for_IPAddress_iP_type | ENUMERATED;

/**
 * @summary IPAddress_iP_type_iPV4
 * @constant
 * @type {number}
 */
export
const IPAddress_iP_type_iPV4: IPAddress_iP_type = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iPV4
 * @constant
 * @type {number}
 */
export
const iPV4: IPAddress_iP_type = IPAddress_iP_type_iPV4; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IPAddress_iP_type_iPV6
 * @constant
 * @type {number}
 */
export
const IPAddress_iP_type_iPV6: IPAddress_iP_type = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iPV6
 * @constant
 * @type {number}
 */
export
const iPV6: IPAddress_iP_type = IPAddress_iP_type_iPV6; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_IPAddress_iP_type: $.ASN1Decoder<IPAddress_iP_type> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPAddress_iP_type
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IPAddress_iP_type (el: _Element): IPAddress_iP_type {
    if (!_cached_decoder_for_IPAddress_iP_type) { _cached_decoder_for_IPAddress_iP_type = $._decodeEnumerated; }
    return _cached_decoder_for_IPAddress_iP_type(el);
}

let _cached_encoder_for_IPAddress_iP_type: $.ASN1Encoder<IPAddress_iP_type> | null = null;

/**
 * @summary Encodes a(n) IPAddress_iP_type into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPAddress_iP_type, encoded as an ASN.1 Element.
 */
export
function _encode_IPAddress_iP_type (value: IPAddress_iP_type, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IPAddress_iP_type) { _cached_encoder_for_IPAddress_iP_type = $._encodeEnumerated; }
    return _cached_encoder_for_IPAddress_iP_type(value, elGetter);
}


/* eslint-enable */
