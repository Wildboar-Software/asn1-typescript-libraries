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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';

/* START_OF_SYMBOL_DEFINITION ScriptContent */
/**
 * @summary ScriptContent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ScriptContent  ::=  GeneralString
 * ```
 */
export type ScriptContent = GeneralString; // GeneralString
/* END_OF_SYMBOL_DEFINITION ScriptContent */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ScriptContent */
let _cached_decoder_for_ScriptContent: $.ASN1Decoder<ScriptContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ScriptContent */

/* START_OF_SYMBOL_DEFINITION _decode_ScriptContent */
/**
 * @summary Decodes an ASN.1 element into a(n) ScriptContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ScriptContent} The decoded data structure.
 */
export function _decode_ScriptContent(el: _Element) {
    if (!_cached_decoder_for_ScriptContent) {
        _cached_decoder_for_ScriptContent = $._decodeGeneralString;
    }
    return _cached_decoder_for_ScriptContent(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ScriptContent */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ScriptContent */
let _cached_encoder_for_ScriptContent: $.ASN1Encoder<ScriptContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ScriptContent */

/* START_OF_SYMBOL_DEFINITION _encode_ScriptContent */
/**
 * @summary Encodes a(n) ScriptContent into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ScriptContent, encoded as an ASN.1 Element.
 */
export function _encode_ScriptContent(
    value: ScriptContent,
    elGetter: $.ASN1Encoder<ScriptContent>
) {
    if (!_cached_encoder_for_ScriptContent) {
        _cached_encoder_for_ScriptContent = $._encodeGeneralString;
    }
    return _cached_encoder_for_ScriptContent(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ScriptContent */

/* eslint-enable */
