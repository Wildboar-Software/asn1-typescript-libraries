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
import {
    CoincidentUnidirectionalConnections,
    _decode_CoincidentUnidirectionalConnections,
    _encode_CoincidentUnidirectionalConnections,
} from '../M3100ASN1TypeModule6/CoincidentUnidirectionalConnections.ta';
export {
    CoincidentUnidirectionalConnections,
    _decode_CoincidentUnidirectionalConnections,
    _encode_CoincidentUnidirectionalConnections,
} from '../M3100ASN1TypeModule6/CoincidentUnidirectionalConnections.ta';
import {
    Failed,
    _decode_Failed,
    _encode_Failed,
} from '../ASN1DefinedTypesModule/Failed.ta';

/* START_OF_SYMBOL_DEFINITION SplitXCReply_Item */
/**
 * @summary SplitXCReply_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SplitXCReply-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type SplitXCReply_Item =
    | { failed: Failed } /* CHOICE_ALT_ROOT */
    | { success: CoincidentUnidirectionalConnections } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION SplitXCReply_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SplitXCReply_Item */
let _cached_decoder_for_SplitXCReply_Item: $.ASN1Decoder<SplitXCReply_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SplitXCReply_Item */

/* START_OF_SYMBOL_DEFINITION _decode_SplitXCReply_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) SplitXCReply_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SplitXCReply_Item} The decoded data structure.
 */
export function _decode_SplitXCReply_Item(el: _Element) {
    if (!_cached_decoder_for_SplitXCReply_Item) {
        _cached_decoder_for_SplitXCReply_Item = $._decode_inextensible_choice<SplitXCReply_Item>(
            {
                '*': ['failed', _decode_Failed],
                'CONTEXT 0': [
                    'success',
                    _decode_CoincidentUnidirectionalConnections,
                ],
                'CONTEXT 1': [
                    'success',
                    _decode_CoincidentUnidirectionalConnections,
                ],
            }
        );
    }
    return _cached_decoder_for_SplitXCReply_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SplitXCReply_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SplitXCReply_Item */
let _cached_encoder_for_SplitXCReply_Item: $.ASN1Encoder<SplitXCReply_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SplitXCReply_Item */

/* START_OF_SYMBOL_DEFINITION _encode_SplitXCReply_Item */
/**
 * @summary Encodes a(n) SplitXCReply_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SplitXCReply_Item, encoded as an ASN.1 Element.
 */
export function _encode_SplitXCReply_Item(
    value: SplitXCReply_Item,
    elGetter: $.ASN1Encoder<SplitXCReply_Item>
) {
    if (!_cached_encoder_for_SplitXCReply_Item) {
        _cached_encoder_for_SplitXCReply_Item = $._encode_choice<SplitXCReply_Item>(
            {
                failed: _encode_Failed,
                success: _encode_CoincidentUnidirectionalConnections,
            },
            $.BER
        );
    }
    return _cached_encoder_for_SplitXCReply_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SplitXCReply_Item */

/* eslint-enable */
