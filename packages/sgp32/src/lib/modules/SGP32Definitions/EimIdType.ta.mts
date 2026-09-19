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
 * @summary EimIdType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EimIdType  ::=  INTEGER {
 *     eimIdTypeOid(1),
 *     eimIdTypeFqdn(2),
 *     eimIdTypeProprietary(3)
 * }
 * ```
 */
export
type EimIdType = INTEGER;

/**
 * @summary EimIdType_eimIdTypeOid
 * @constant
 * @type {number}
 */
export
const EimIdType_eimIdTypeOid: EimIdType = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EimIdType_eimIdTypeOid
 * @constant
 * @type {number}
 */
export
const eimIdTypeOid: EimIdType = EimIdType_eimIdTypeOid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EimIdType_eimIdTypeFqdn
 * @constant
 * @type {number}
 */
export
const EimIdType_eimIdTypeFqdn: EimIdType = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EimIdType_eimIdTypeFqdn
 * @constant
 * @type {number}
 */
export
const eimIdTypeFqdn: EimIdType = EimIdType_eimIdTypeFqdn; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EimIdType_eimIdTypeProprietary
 * @constant
 * @type {number}
 */
export
const EimIdType_eimIdTypeProprietary: EimIdType = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EimIdType_eimIdTypeProprietary
 * @constant
 * @type {number}
 */
export
const eimIdTypeProprietary: EimIdType = EimIdType_eimIdTypeProprietary; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_EimIdType: $.ASN1Decoder<EimIdType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EimIdType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EimIdType (el: _Element): EimIdType {
    if (!_cached_decoder_for_EimIdType) { _cached_decoder_for_EimIdType = $._decodeInteger; }
    return _cached_decoder_for_EimIdType(el);
}

let _cached_encoder_for_EimIdType: $.ASN1Encoder<EimIdType> | null = null;

/**
 * @summary Encodes a(n) EimIdType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EimIdType, encoded as an ASN.1 Element.
 */
export
function _encode_EimIdType (value: EimIdType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EimIdType) { _cached_encoder_for_EimIdType = $._encodeInteger; }
    return _cached_encoder_for_EimIdType(value, elGetter);
}


/* eslint-enable */
