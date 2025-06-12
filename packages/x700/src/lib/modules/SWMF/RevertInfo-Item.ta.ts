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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.js';
export {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.js';

/* START_OF_SYMBOL_DEFINITION RevertInfo_Item */
/**
 * @summary RevertInfo_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RevertInfo-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type RevertInfo_Item =
    | { patchId: GraphicString } /* CHOICE_ALT_ROOT */
    | { patchPointer: ObjectInstance } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION RevertInfo_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RevertInfo_Item */
let _cached_decoder_for_RevertInfo_Item: $.ASN1Decoder<RevertInfo_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RevertInfo_Item */

/* START_OF_SYMBOL_DEFINITION _decode_RevertInfo_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) RevertInfo_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RevertInfo_Item} The decoded data structure.
 */
export function _decode_RevertInfo_Item(el: _Element) {
    if (!_cached_decoder_for_RevertInfo_Item) {
        _cached_decoder_for_RevertInfo_Item = $._decode_inextensible_choice<RevertInfo_Item>(
            {
                'UNIVERSAL 25': ['patchId', $._decodeGraphicString],
                'CONTEXT 2': ['patchPointer', _decode_ObjectInstance],
                'CONTEXT 3': ['patchPointer', _decode_ObjectInstance],
                'CONTEXT 4': ['patchPointer', _decode_ObjectInstance],
            }
        );
    }
    return _cached_decoder_for_RevertInfo_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RevertInfo_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RevertInfo_Item */
let _cached_encoder_for_RevertInfo_Item: $.ASN1Encoder<RevertInfo_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RevertInfo_Item */

/* START_OF_SYMBOL_DEFINITION _encode_RevertInfo_Item */
/**
 * @summary Encodes a(n) RevertInfo_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RevertInfo_Item, encoded as an ASN.1 Element.
 */
export function _encode_RevertInfo_Item(
    value: RevertInfo_Item,
    elGetter: $.ASN1Encoder<RevertInfo_Item>
) {
    if (!_cached_encoder_for_RevertInfo_Item) {
        _cached_encoder_for_RevertInfo_Item = $._encode_choice<RevertInfo_Item>(
            {
                patchId: $._encodeGraphicString,
                patchPointer: _encode_ObjectInstance,
            },
            $.BER
        );
    }
    return _cached_encoder_for_RevertInfo_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RevertInfo_Item */

/* eslint-enable */
