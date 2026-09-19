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
 * @summary ContentType_ShortForm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ContentType-ShortForm  ::=  INTEGER  {
 *     unidentified (0),
 *     external (1),           -- identified by the object-identifier 
 *                             -- of the EXTERNAL content 
 *     p1 (2),
 *     p3 (3),
 *     p7 (4) }
 * ```
 */
export
type ContentType_ShortForm = INTEGER;

/**
 * @summary ContentType_ShortForm_unidentified
 * @constant
 * @type {number}
 */
export
const ContentType_ShortForm_unidentified: ContentType_ShortForm = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ContentType_ShortForm_unidentified
 * @constant
 * @type {number}
 */
export
const unidentified: ContentType_ShortForm = ContentType_ShortForm_unidentified; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ContentType_ShortForm_external
 * @constant
 * @type {number}
 */
export
const ContentType_ShortForm_external: ContentType_ShortForm = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ContentType_ShortForm_external
 * @constant
 * @type {number}
 */
export
const external: ContentType_ShortForm = ContentType_ShortForm_external; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ContentType_ShortForm_p1
 * @constant
 * @type {number}
 */
export
const ContentType_ShortForm_p1: ContentType_ShortForm = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ContentType_ShortForm_p1
 * @constant
 * @type {number}
 */
export
const p1: ContentType_ShortForm = ContentType_ShortForm_p1; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ContentType_ShortForm_p3
 * @constant
 * @type {number}
 */
export
const ContentType_ShortForm_p3: ContentType_ShortForm = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ContentType_ShortForm_p3
 * @constant
 * @type {number}
 */
export
const p3: ContentType_ShortForm = ContentType_ShortForm_p3; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ContentType_ShortForm_p7
 * @constant
 * @type {number}
 */
export
const ContentType_ShortForm_p7: ContentType_ShortForm = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ContentType_ShortForm_p7
 * @constant
 * @type {number}
 */
export
const p7: ContentType_ShortForm = ContentType_ShortForm_p7; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ContentType_ShortForm: $.ASN1Decoder<ContentType_ShortForm> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ContentType_ShortForm
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ContentType_ShortForm (el: _Element): ContentType_ShortForm {
    if (!_cached_decoder_for_ContentType_ShortForm) { _cached_decoder_for_ContentType_ShortForm = $._decodeInteger; }
    return _cached_decoder_for_ContentType_ShortForm(el);
}

let _cached_encoder_for_ContentType_ShortForm: $.ASN1Encoder<ContentType_ShortForm> | null = null;

/**
 * @summary Encodes a(n) ContentType_ShortForm into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContentType_ShortForm, encoded as an ASN.1 Element.
 */
export
function _encode_ContentType_ShortForm (value: ContentType_ShortForm, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ContentType_ShortForm) { _cached_encoder_for_ContentType_ShortForm = $._encodeInteger; }
    return _cached_encoder_for_ContentType_ShortForm(value, elGetter);
}


/* eslint-enable */
