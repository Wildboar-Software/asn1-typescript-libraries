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
    ConnectionType,
    _decode_ConnectionType,
    _encode_ConnectionType,
} from '../ASN1DefinedTypesModule/ConnectionType.ta.js';
export {
    ConnectionType,
    _decode_ConnectionType,
    _encode_ConnectionType,
} from '../ASN1DefinedTypesModule/ConnectionType.ta.js';
import {
    ConnectionTypeBi,
    _decode_ConnectionTypeBi,
    _encode_ConnectionTypeBi,
} from '../ASN1DefinedTypesModule/ConnectionTypeBi.ta.js';
export {
    ConnectionTypeBi,
    _decode_ConnectionTypeBi,
    _encode_ConnectionTypeBi,
} from '../ASN1DefinedTypesModule/ConnectionTypeBi.ta.js';
import {
    AddLeg,
    _decode_AddLeg,
    _encode_AddLeg,
} from '../ASN1DefinedTypesModule/AddLeg.ta.js';
export {
    AddLeg,
    _decode_AddLeg,
    _encode_AddLeg,
} from '../ASN1DefinedTypesModule/AddLeg.ta.js';

/* START_OF_SYMBOL_DEFINITION ConnectInformation_Item_itemType */
/**
 * @summary ConnectInformation_Item_itemType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConnectInformation-Item-itemType ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ConnectInformation_Item_itemType =
    | { unidirectional: ConnectionType } /* CHOICE_ALT_ROOT */
    | { bidirectional: ConnectionTypeBi } /* CHOICE_ALT_ROOT */
    | { addleg: AddLeg } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ConnectInformation_Item_itemType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ConnectInformation_Item_itemType */
let _cached_decoder_for_ConnectInformation_Item_itemType: $.ASN1Decoder<ConnectInformation_Item_itemType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ConnectInformation_Item_itemType */

/* START_OF_SYMBOL_DEFINITION _decode_ConnectInformation_Item_itemType */
/**
 * @summary Decodes an ASN.1 element into a(n) ConnectInformation_Item_itemType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConnectInformation_Item_itemType} The decoded data structure.
 */
export function _decode_ConnectInformation_Item_itemType(el: _Element) {
    if (!_cached_decoder_for_ConnectInformation_Item_itemType) {
        _cached_decoder_for_ConnectInformation_Item_itemType = $._decode_inextensible_choice<ConnectInformation_Item_itemType>(
            {
                'CONTEXT 0': [
                    'unidirectional',
                    $._decode_explicit<ConnectionType>(
                        () => _decode_ConnectionType
                    ),
                ],
                'CONTEXT 1': [
                    'bidirectional',
                    $._decode_explicit<ConnectionTypeBi>(
                        () => _decode_ConnectionTypeBi
                    ),
                ],
                'CONTEXT 2': [
                    'addleg',
                    $._decode_implicit<AddLeg>(() => _decode_AddLeg),
                ],
            }
        );
    }
    return _cached_decoder_for_ConnectInformation_Item_itemType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ConnectInformation_Item_itemType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ConnectInformation_Item_itemType */
let _cached_encoder_for_ConnectInformation_Item_itemType: $.ASN1Encoder<ConnectInformation_Item_itemType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ConnectInformation_Item_itemType */

/* START_OF_SYMBOL_DEFINITION _encode_ConnectInformation_Item_itemType */
/**
 * @summary Encodes a(n) ConnectInformation_Item_itemType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectInformation_Item_itemType, encoded as an ASN.1 Element.
 */
export function _encode_ConnectInformation_Item_itemType(
    value: ConnectInformation_Item_itemType,
    elGetter: $.ASN1Encoder<ConnectInformation_Item_itemType>
) {
    if (!_cached_encoder_for_ConnectInformation_Item_itemType) {
        _cached_encoder_for_ConnectInformation_Item_itemType = $._encode_choice<ConnectInformation_Item_itemType>(
            {
                unidirectional: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_ConnectionType,
                    $.BER
                ),
                bidirectional: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_ConnectionTypeBi,
                    $.BER
                ),
                addleg: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_AddLeg,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ConnectInformation_Item_itemType(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_ConnectInformation_Item_itemType */

/* eslint-enable */
