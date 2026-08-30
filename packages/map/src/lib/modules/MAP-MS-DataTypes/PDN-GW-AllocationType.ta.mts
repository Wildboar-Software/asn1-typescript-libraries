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
 * @summary PDN_GW_AllocationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDN-GW-AllocationType  ::=  ENUMERATED {
 *     static    (0),
 *     dynamic    (1)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PDN_GW_AllocationType {
    static_ = 0,
    dynamic = 1,
}

/**
 * @summary PDN_GW_AllocationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDN-GW-AllocationType  ::=  ENUMERATED {
 *     static    (0),
 *     dynamic    (1)}
 * ```
 * 
 * @enum {number}
 */
export
type PDN_GW_AllocationType = _enum_for_PDN_GW_AllocationType;

/**
 * @summary PDN_GW_AllocationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDN-GW-AllocationType  ::=  ENUMERATED {
 *     static    (0),
 *     dynamic    (1)}
 * ```
 * 
 * @enum {number}
 */
export
const PDN_GW_AllocationType = _enum_for_PDN_GW_AllocationType;

/**
 * @summary PDN_GW_AllocationType_static_
 * @constant
 * @type {number}
 */
export
const PDN_GW_AllocationType_static_: PDN_GW_AllocationType = PDN_GW_AllocationType.static_; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary static_
 * @constant
 * @type {number}
 */
export
const static_: PDN_GW_AllocationType = PDN_GW_AllocationType.static_; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PDN_GW_AllocationType_dynamic
 * @constant
 * @type {number}
 */
export
const PDN_GW_AllocationType_dynamic: PDN_GW_AllocationType = PDN_GW_AllocationType.dynamic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dynamic
 * @constant
 * @type {number}
 */
export
const dynamic: PDN_GW_AllocationType = PDN_GW_AllocationType.dynamic; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_PDN_GW_AllocationType: $.ASN1Decoder<PDN_GW_AllocationType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PDN_GW_AllocationType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PDN_GW_AllocationType (el: _Element): PDN_GW_AllocationType {
    if (!_cached_decoder_for_PDN_GW_AllocationType) { _cached_decoder_for_PDN_GW_AllocationType = $._decodeEnumerated; }
    return _cached_decoder_for_PDN_GW_AllocationType(el);
}

let _cached_encoder_for_PDN_GW_AllocationType: $.ASN1Encoder<PDN_GW_AllocationType> | null = null;

/**
 * @summary Encodes a(n) PDN_GW_AllocationType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDN_GW_AllocationType, encoded as an ASN.1 Element.
 */
export
function _encode_PDN_GW_AllocationType (value: PDN_GW_AllocationType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PDN_GW_AllocationType) { _cached_encoder_for_PDN_GW_AllocationType = $._encodeEnumerated; }
    return _cached_encoder_for_PDN_GW_AllocationType(value, elGetter);
}


/* eslint-enable */
