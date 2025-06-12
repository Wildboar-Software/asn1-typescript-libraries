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
    AttributeGroups_Item,
    _decode_AttributeGroups_Item,
    _encode_AttributeGroups_Item,
} from '../DefinitionASN1Module/AttributeGroups-Item.ta.js';
export {
    AttributeGroups_Item,
    _decode_AttributeGroups_Item,
    _encode_AttributeGroups_Item,
} from '../DefinitionASN1Module/AttributeGroups-Item.ta.js';

/* START_OF_SYMBOL_DEFINITION AttributeGroups */
/**
 * @summary AttributeGroups
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeGroups  ::=
 *   SET OF SEQUENCE {group       TemplateLabel,
 *                    attributes  TemplateList OPTIONAL}
 * ```
 */
export type AttributeGroups = AttributeGroups_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION AttributeGroups */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeGroups */
let _cached_decoder_for_AttributeGroups: $.ASN1Decoder<AttributeGroups> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeGroups */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeGroups */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeGroups
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeGroups} The decoded data structure.
 */
export function _decode_AttributeGroups(el: _Element) {
    if (!_cached_decoder_for_AttributeGroups) {
        _cached_decoder_for_AttributeGroups = $._decodeSetOf<AttributeGroups_Item>(
            () => _decode_AttributeGroups_Item
        );
    }
    return _cached_decoder_for_AttributeGroups(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeGroups */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeGroups */
let _cached_encoder_for_AttributeGroups: $.ASN1Encoder<AttributeGroups> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeGroups */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeGroups */
/**
 * @summary Encodes a(n) AttributeGroups into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeGroups, encoded as an ASN.1 Element.
 */
export function _encode_AttributeGroups(
    value: AttributeGroups,
    elGetter: $.ASN1Encoder<AttributeGroups>
) {
    if (!_cached_encoder_for_AttributeGroups) {
        _cached_encoder_for_AttributeGroups = $._encodeSetOf<AttributeGroups_Item>(
            () => _encode_AttributeGroups_Item,
            $.BER
        );
    }
    return _cached_encoder_for_AttributeGroups(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeGroups */

/* eslint-enable */
