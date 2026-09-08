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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



export
enum _enum_for_V92ModDiag_Item_lastMOHaction {
    mohaccepted = 0,
    mohdeclined = 1,
    mohdenied = 2,
    mohclrdn = 3,
}

/**
 * @summary V92ModDiag_Item_lastMOHaction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V92ModDiag-Item-lastMOHaction ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type V92ModDiag_Item_lastMOHaction = _enum_for_V92ModDiag_Item_lastMOHaction | ENUMERATED;

/**
 * @summary V92ModDiag_Item_lastMOHaction_mohaccepted
 * @constant
 * @type {number}
 */
export
const V92ModDiag_Item_lastMOHaction_mohaccepted: V92ModDiag_Item_lastMOHaction = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mohaccepted
 * @constant
 * @type {number}
 */
export
const mohaccepted: V92ModDiag_Item_lastMOHaction = V92ModDiag_Item_lastMOHaction_mohaccepted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary V92ModDiag_Item_lastMOHaction_mohdeclined
 * @constant
 * @type {number}
 */
export
const V92ModDiag_Item_lastMOHaction_mohdeclined: V92ModDiag_Item_lastMOHaction = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mohdeclined
 * @constant
 * @type {number}
 */
export
const mohdeclined: V92ModDiag_Item_lastMOHaction = V92ModDiag_Item_lastMOHaction_mohdeclined; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary V92ModDiag_Item_lastMOHaction_mohdenied
 * @constant
 * @type {number}
 */
export
const V92ModDiag_Item_lastMOHaction_mohdenied: V92ModDiag_Item_lastMOHaction = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mohdenied
 * @constant
 * @type {number}
 */
export
const mohdenied: V92ModDiag_Item_lastMOHaction = V92ModDiag_Item_lastMOHaction_mohdenied; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary V92ModDiag_Item_lastMOHaction_mohclrdn
 * @constant
 * @type {number}
 */
export
const V92ModDiag_Item_lastMOHaction_mohclrdn: V92ModDiag_Item_lastMOHaction = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mohclrdn
 * @constant
 * @type {number}
 */
export
const mohclrdn: V92ModDiag_Item_lastMOHaction = V92ModDiag_Item_lastMOHaction_mohclrdn; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_V92ModDiag_Item_lastMOHaction: $.ASN1Decoder<V92ModDiag_Item_lastMOHaction> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) V92ModDiag_Item_lastMOHaction
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_V92ModDiag_Item_lastMOHaction (el: _Element): V92ModDiag_Item_lastMOHaction {
    if (!_cached_decoder_for_V92ModDiag_Item_lastMOHaction) { _cached_decoder_for_V92ModDiag_Item_lastMOHaction = $._decodeEnumerated; }
    return _cached_decoder_for_V92ModDiag_Item_lastMOHaction(el);
}

let _cached_encoder_for_V92ModDiag_Item_lastMOHaction: $.ASN1Encoder<V92ModDiag_Item_lastMOHaction> | null = null;

/**
 * @summary Encodes a(n) V92ModDiag_Item_lastMOHaction into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The V92ModDiag_Item_lastMOHaction, encoded as an ASN.1 Element.
 */
export
function _encode_V92ModDiag_Item_lastMOHaction (value: V92ModDiag_Item_lastMOHaction, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_V92ModDiag_Item_lastMOHaction) { _cached_encoder_for_V92ModDiag_Item_lastMOHaction = $._encodeEnumerated; }
    return _cached_encoder_for_V92ModDiag_Item_lastMOHaction(value, elGetter);
}


/* eslint-enable */
