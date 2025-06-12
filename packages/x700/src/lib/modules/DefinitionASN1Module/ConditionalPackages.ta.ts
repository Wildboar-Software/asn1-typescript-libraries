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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    ConditionalPackages_Item,
    _decode_ConditionalPackages_Item,
    _encode_ConditionalPackages_Item,
} from '../DefinitionASN1Module/ConditionalPackages-Item.ta.js';
export {
    ConditionalPackages_Item,
    _decode_ConditionalPackages_Item,
    _encode_ConditionalPackages_Item,
} from '../DefinitionASN1Module/ConditionalPackages-Item.ta.js';

/* START_OF_SYMBOL_DEFINITION ConditionalPackages */
/**
 * @summary ConditionalPackages
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConditionalPackages  ::=
 *   SET OF SEQUENCE {label      TemplateLabel,
 *                    condition  GraphicString}
 * ```
 */
export type ConditionalPackages = ConditionalPackages_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION ConditionalPackages */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ConditionalPackages */
let _cached_decoder_for_ConditionalPackages: $.ASN1Decoder<ConditionalPackages> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ConditionalPackages */

/* START_OF_SYMBOL_DEFINITION _decode_ConditionalPackages */
/**
 * @summary Decodes an ASN.1 element into a(n) ConditionalPackages
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConditionalPackages} The decoded data structure.
 */
export function _decode_ConditionalPackages(el: _Element) {
    if (!_cached_decoder_for_ConditionalPackages) {
        _cached_decoder_for_ConditionalPackages = $._decodeSetOf<ConditionalPackages_Item>(
            () => _decode_ConditionalPackages_Item
        );
    }
    return _cached_decoder_for_ConditionalPackages(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ConditionalPackages */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ConditionalPackages */
let _cached_encoder_for_ConditionalPackages: $.ASN1Encoder<ConditionalPackages> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ConditionalPackages */

/* START_OF_SYMBOL_DEFINITION _encode_ConditionalPackages */
/**
 * @summary Encodes a(n) ConditionalPackages into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConditionalPackages, encoded as an ASN.1 Element.
 */
export function _encode_ConditionalPackages(
    value: ConditionalPackages,
    elGetter: $.ASN1Encoder<ConditionalPackages>
) {
    if (!_cached_encoder_for_ConditionalPackages) {
        _cached_encoder_for_ConditionalPackages = $._encodeSetOf<ConditionalPackages_Item>(
            () => _encode_ConditionalPackages_Item,
            $.BER
        );
    }
    return _cached_encoder_for_ConditionalPackages(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ConditionalPackages */

/* eslint-enable */
