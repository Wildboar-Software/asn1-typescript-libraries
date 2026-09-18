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
 * @summary AttrId_graphicCharacterRepertoire
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttrId-graphicCharacterRepertoire ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type AttrId_graphicCharacterRepertoire = INTEGER;

/**
 * @summary AttrId_graphicCharacterRepertoire_null_
 * @constant
 * @type {number}
 */
export
const AttrId_graphicCharacterRepertoire_null_: AttrId_graphicCharacterRepertoire = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AttrId_graphicCharacterRepertoire_null_
 * @constant
 * @type {number}
 */
export
const null_: AttrId_graphicCharacterRepertoire = AttrId_graphicCharacterRepertoire_null_; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_AttrId_graphicCharacterRepertoire: $.ASN1Decoder<AttrId_graphicCharacterRepertoire> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttrId_graphicCharacterRepertoire
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttrId_graphicCharacterRepertoire (el: _Element): AttrId_graphicCharacterRepertoire {
    if (!_cached_decoder_for_AttrId_graphicCharacterRepertoire) { _cached_decoder_for_AttrId_graphicCharacterRepertoire = $._decodeInteger; }
    return _cached_decoder_for_AttrId_graphicCharacterRepertoire(el);
}

let _cached_encoder_for_AttrId_graphicCharacterRepertoire: $.ASN1Encoder<AttrId_graphicCharacterRepertoire> | null = null;

/**
 * @summary Encodes a(n) AttrId_graphicCharacterRepertoire into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttrId_graphicCharacterRepertoire, encoded as an ASN.1 Element.
 */
export
function _encode_AttrId_graphicCharacterRepertoire (value: AttrId_graphicCharacterRepertoire, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttrId_graphicCharacterRepertoire) { _cached_encoder_for_AttrId_graphicCharacterRepertoire = $._encodeInteger; }
    return _cached_encoder_for_AttrId_graphicCharacterRepertoire(value, elGetter);
}


/* eslint-enable */
