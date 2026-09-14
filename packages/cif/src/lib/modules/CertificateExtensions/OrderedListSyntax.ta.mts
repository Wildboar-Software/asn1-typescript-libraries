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
enum _enum_for_OrderedListSyntax {
    ascSerialNum = 0,
    ascRevDate = 1,
}

/**
 * @summary OrderedListSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OrderedListSyntax  ::=  ENUMERATED {
 *   ascSerialNum (0),
 *   ascRevDate   (1),
 *   ...}
 * ```
 * 
 * @enum {number}
 */
export
type OrderedListSyntax = _enum_for_OrderedListSyntax | ENUMERATED;

/**
 * @summary OrderedListSyntax_ascSerialNum
 * @constant
 * @type {number}
 */
export
const OrderedListSyntax_ascSerialNum: OrderedListSyntax = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ascSerialNum
 * @constant
 * @type {number}
 */
export
const ascSerialNum: OrderedListSyntax = OrderedListSyntax_ascSerialNum; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OrderedListSyntax_ascRevDate
 * @constant
 * @type {number}
 */
export
const OrderedListSyntax_ascRevDate: OrderedListSyntax = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ascRevDate
 * @constant
 * @type {number}
 */
export
const ascRevDate: OrderedListSyntax = OrderedListSyntax_ascRevDate; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_OrderedListSyntax: $.ASN1Decoder<OrderedListSyntax> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OrderedListSyntax
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OrderedListSyntax (el: _Element): OrderedListSyntax {
    if (!_cached_decoder_for_OrderedListSyntax) { _cached_decoder_for_OrderedListSyntax = $._decodeEnumerated; }
    return _cached_decoder_for_OrderedListSyntax(el);
}

let _cached_encoder_for_OrderedListSyntax: $.ASN1Encoder<OrderedListSyntax> | null = null;

/**
 * @summary Encodes a(n) OrderedListSyntax into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OrderedListSyntax, encoded as an ASN.1 Element.
 */
export
function _encode_OrderedListSyntax (value: OrderedListSyntax, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OrderedListSyntax) { _cached_encoder_for_OrderedListSyntax = $._encodeEnumerated; }
    return _cached_encoder_for_OrderedListSyntax(value, elGetter);
}


/* eslint-enable */
