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
    TONotCreated,
    _decode_TONotCreated,
    _encode_TONotCreated,
} from '../Test-ASN1Module/TONotCreated.ta.mjs';
export {
    TONotCreated,
    _decode_TONotCreated,
    _encode_TONotCreated,
} from '../Test-ASN1Module/TONotCreated.ta.mjs';

/* START_OF_SYMBOL_DEFINITION RelatedTOError_Item */
/**
 * @summary RelatedTOError_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RelatedTOError-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type RelatedTOError_Item =
    | { ableToCreateTO: NULL } /* CHOICE_ALT_ROOT */
    | { unableToCreateTO: TONotCreated } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION RelatedTOError_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RelatedTOError_Item */
let _cached_decoder_for_RelatedTOError_Item: $.ASN1Decoder<RelatedTOError_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RelatedTOError_Item */

/* START_OF_SYMBOL_DEFINITION _decode_RelatedTOError_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) RelatedTOError_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RelatedTOError_Item} The decoded data structure.
 */
export function _decode_RelatedTOError_Item(el: _Element) {
    if (!_cached_decoder_for_RelatedTOError_Item) {
        _cached_decoder_for_RelatedTOError_Item = $._decode_inextensible_choice<RelatedTOError_Item>(
            {
                'UNIVERSAL 5': ['ableToCreateTO', $._decodeNull],
                'UNIVERSAL 10': ['unableToCreateTO', _decode_TONotCreated],
                'UNIVERSAL 17': ['unableToCreateTO', _decode_TONotCreated],
            }
        );
    }
    return _cached_decoder_for_RelatedTOError_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RelatedTOError_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RelatedTOError_Item */
let _cached_encoder_for_RelatedTOError_Item: $.ASN1Encoder<RelatedTOError_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RelatedTOError_Item */

/* START_OF_SYMBOL_DEFINITION _encode_RelatedTOError_Item */
/**
 * @summary Encodes a(n) RelatedTOError_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RelatedTOError_Item, encoded as an ASN.1 Element.
 */
export function _encode_RelatedTOError_Item(
    value: RelatedTOError_Item,
    elGetter: $.ASN1Encoder<RelatedTOError_Item>
) {
    if (!_cached_encoder_for_RelatedTOError_Item) {
        _cached_encoder_for_RelatedTOError_Item = $._encode_choice<RelatedTOError_Item>(
            {
                ableToCreateTO: $._encodeNull,
                unableToCreateTO: _encode_TONotCreated,
            },
            $.BER
        );
    }
    return _cached_encoder_for_RelatedTOError_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RelatedTOError_Item */

/* eslint-enable */
