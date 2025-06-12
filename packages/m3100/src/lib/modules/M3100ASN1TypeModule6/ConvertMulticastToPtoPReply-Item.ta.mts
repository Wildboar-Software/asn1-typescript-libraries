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
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
export {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
import {
    Failed,
    _decode_Failed,
    _encode_Failed,
} from '../ASN1DefinedTypesModule/Failed.ta.mjs';

/* START_OF_SYMBOL_DEFINITION ConvertMulticastToPtoPReply_Item */
/**
 * @summary ConvertMulticastToPtoPReply_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConvertMulticastToPtoPReply-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ConvertMulticastToPtoPReply_Item =
    | { failed: Failed } /* CHOICE_ALT_ROOT */
    | { success: ObjectInstance } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ConvertMulticastToPtoPReply_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ConvertMulticastToPtoPReply_Item */
let _cached_decoder_for_ConvertMulticastToPtoPReply_Item: $.ASN1Decoder<ConvertMulticastToPtoPReply_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ConvertMulticastToPtoPReply_Item */

/* START_OF_SYMBOL_DEFINITION _decode_ConvertMulticastToPtoPReply_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) ConvertMulticastToPtoPReply_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConvertMulticastToPtoPReply_Item} The decoded data structure.
 */
export function _decode_ConvertMulticastToPtoPReply_Item(el: _Element) {
    if (!_cached_decoder_for_ConvertMulticastToPtoPReply_Item) {
        _cached_decoder_for_ConvertMulticastToPtoPReply_Item = $._decode_inextensible_choice<ConvertMulticastToPtoPReply_Item>(
            {
                '*': ['failed', _decode_Failed],
                'CONTEXT 2': ['success', _decode_ObjectInstance],
                'CONTEXT 3': ['success', _decode_ObjectInstance],
                'CONTEXT 4': ['success', _decode_ObjectInstance],
            }
        );
    }
    return _cached_decoder_for_ConvertMulticastToPtoPReply_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ConvertMulticastToPtoPReply_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ConvertMulticastToPtoPReply_Item */
let _cached_encoder_for_ConvertMulticastToPtoPReply_Item: $.ASN1Encoder<ConvertMulticastToPtoPReply_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ConvertMulticastToPtoPReply_Item */

/* START_OF_SYMBOL_DEFINITION _encode_ConvertMulticastToPtoPReply_Item */
/**
 * @summary Encodes a(n) ConvertMulticastToPtoPReply_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConvertMulticastToPtoPReply_Item, encoded as an ASN.1 Element.
 */
export function _encode_ConvertMulticastToPtoPReply_Item(
    value: ConvertMulticastToPtoPReply_Item,
    elGetter: $.ASN1Encoder<ConvertMulticastToPtoPReply_Item>
) {
    if (!_cached_encoder_for_ConvertMulticastToPtoPReply_Item) {
        _cached_encoder_for_ConvertMulticastToPtoPReply_Item = $._encode_choice<ConvertMulticastToPtoPReply_Item>(
            {
                failed: _encode_Failed,
                success: _encode_ObjectInstance,
            },
            $.BER
        );
    }
    return _cached_encoder_for_ConvertMulticastToPtoPReply_Item(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_ConvertMulticastToPtoPReply_Item */

/* eslint-enable */
