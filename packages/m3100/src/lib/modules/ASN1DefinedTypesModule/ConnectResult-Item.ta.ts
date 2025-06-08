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
    Failed,
    _decode_Failed,
    _encode_Failed,
} from '../ASN1DefinedTypesModule/Failed.ta';
export {
    Failed,
    _decode_Failed,
    _encode_Failed,
} from '../ASN1DefinedTypesModule/Failed.ta';
import {
    Connected,
    _decode_Connected,
    _encode_Connected,
} from '../ASN1DefinedTypesModule/Connected.ta';
export {
    Connected,
    _decode_Connected,
    _encode_Connected,
} from '../ASN1DefinedTypesModule/Connected.ta';

/* START_OF_SYMBOL_DEFINITION ConnectResult_Item */
/**
 * @summary ConnectResult_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConnectResult-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ConnectResult_Item =
    | { failed: Failed } /* CHOICE_ALT_ROOT */
    | { connected: Connected } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ConnectResult_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ConnectResult_Item */
let _cached_decoder_for_ConnectResult_Item: $.ASN1Decoder<ConnectResult_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ConnectResult_Item */

/* START_OF_SYMBOL_DEFINITION _decode_ConnectResult_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) ConnectResult_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConnectResult_Item} The decoded data structure.
 */
export function _decode_ConnectResult_Item(el: _Element) {
    if (!_cached_decoder_for_ConnectResult_Item) {
        _cached_decoder_for_ConnectResult_Item = $._decode_inextensible_choice<ConnectResult_Item>(
            {
                'UNIVERSAL 16': ['failed', _decode_Failed],
                'UNIVERSAL 5': ['failed', _decode_Failed],
                'UNIVERSAL 2': ['failed', _decode_Failed],
                'CONTEXT 0': ['connected', _decode_Connected],
                'CONTEXT 1': ['connected', _decode_Connected],
            }
        );
    }
    return _cached_decoder_for_ConnectResult_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ConnectResult_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ConnectResult_Item */
let _cached_encoder_for_ConnectResult_Item: $.ASN1Encoder<ConnectResult_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ConnectResult_Item */

/* START_OF_SYMBOL_DEFINITION _encode_ConnectResult_Item */
/**
 * @summary Encodes a(n) ConnectResult_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectResult_Item, encoded as an ASN.1 Element.
 */
export function _encode_ConnectResult_Item(
    value: ConnectResult_Item,
    elGetter: $.ASN1Encoder<ConnectResult_Item>
) {
    if (!_cached_encoder_for_ConnectResult_Item) {
        _cached_encoder_for_ConnectResult_Item = $._encode_choice<ConnectResult_Item>(
            {
                failed: _encode_Failed,
                connected: _encode_Connected,
            },
            $.BER
        );
    }
    return _cached_encoder_for_ConnectResult_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ConnectResult_Item */

/* eslint-enable */
