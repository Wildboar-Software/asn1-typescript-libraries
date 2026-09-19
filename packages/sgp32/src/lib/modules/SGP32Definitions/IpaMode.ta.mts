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
 * @summary IpaMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IpaMode  ::=  INTEGER {
 *     ipad (0), -- IPAd is active
 *     ipae (1) -- IPAe is active
 * }
 * ```
 */
export
type IpaMode = INTEGER;

/**
 * @summary IpaMode_ipad
 * @constant
 * @type {number}
 */
export
const IpaMode_ipad: IpaMode = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IpaMode_ipad
 * @constant
 * @type {number}
 */
export
const ipad: IpaMode = IpaMode_ipad; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IpaMode_ipae
 * @constant
 * @type {number}
 */
export
const IpaMode_ipae: IpaMode = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IpaMode_ipae
 * @constant
 * @type {number}
 */
export
const ipae: IpaMode = IpaMode_ipae; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_IpaMode: $.ASN1Decoder<IpaMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IpaMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IpaMode (el: _Element): IpaMode {
    if (!_cached_decoder_for_IpaMode) { _cached_decoder_for_IpaMode = $._decodeInteger; }
    return _cached_decoder_for_IpaMode(el);
}

let _cached_encoder_for_IpaMode: $.ASN1Encoder<IpaMode> | null = null;

/**
 * @summary Encodes a(n) IpaMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IpaMode, encoded as an ASN.1 Element.
 */
export
function _encode_IpaMode (value: IpaMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IpaMode) { _cached_encoder_for_IpaMode = $._encodeInteger; }
    return _cached_encoder_for_IpaMode(value, elGetter);
}


/* eslint-enable */
