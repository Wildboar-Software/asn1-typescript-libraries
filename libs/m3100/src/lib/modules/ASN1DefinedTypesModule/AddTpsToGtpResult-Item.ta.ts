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
    AddedTps,
    _decode_AddedTps,
    _encode_AddedTps,
} from '../ASN1DefinedTypesModule/AddedTps.ta';
export {
    AddedTps,
    _decode_AddedTps,
    _encode_AddedTps,
} from '../ASN1DefinedTypesModule/AddedTps.ta';

/* START_OF_SYMBOL_DEFINITION AddTpsToGtpResult_Item */
/**
 * @summary AddTpsToGtpResult_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddTpsToGtpResult-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type AddTpsToGtpResult_Item =
    | { failed: Failed } /* CHOICE_ALT_ROOT */
    | { addedTps: AddedTps } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION AddTpsToGtpResult_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AddTpsToGtpResult_Item */
let _cached_decoder_for_AddTpsToGtpResult_Item: $.ASN1Decoder<AddTpsToGtpResult_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AddTpsToGtpResult_Item */

/* START_OF_SYMBOL_DEFINITION _decode_AddTpsToGtpResult_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) AddTpsToGtpResult_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddTpsToGtpResult_Item} The decoded data structure.
 */
export function _decode_AddTpsToGtpResult_Item(el: _Element) {
    if (!_cached_decoder_for_AddTpsToGtpResult_Item) {
        _cached_decoder_for_AddTpsToGtpResult_Item = $._decode_inextensible_choice<AddTpsToGtpResult_Item>(
            {
                'CONTEXT 0': [
                    'failed',
                    $._decode_explicit<Failed>(() => _decode_Failed),
                ],
                'CONTEXT 1': [
                    'addedTps',
                    $._decode_implicit<AddedTps>(() => _decode_AddedTps),
                ],
            }
        );
    }
    return _cached_decoder_for_AddTpsToGtpResult_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AddTpsToGtpResult_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AddTpsToGtpResult_Item */
let _cached_encoder_for_AddTpsToGtpResult_Item: $.ASN1Encoder<AddTpsToGtpResult_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AddTpsToGtpResult_Item */

/* START_OF_SYMBOL_DEFINITION _encode_AddTpsToGtpResult_Item */
/**
 * @summary Encodes a(n) AddTpsToGtpResult_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddTpsToGtpResult_Item, encoded as an ASN.1 Element.
 */
export function _encode_AddTpsToGtpResult_Item(
    value: AddTpsToGtpResult_Item,
    elGetter: $.ASN1Encoder<AddTpsToGtpResult_Item>
) {
    if (!_cached_encoder_for_AddTpsToGtpResult_Item) {
        _cached_encoder_for_AddTpsToGtpResult_Item = $._encode_choice<AddTpsToGtpResult_Item>(
            {
                failed: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_Failed,
                    $.BER
                ),
                addedTps: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_AddedTps,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_AddTpsToGtpResult_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AddTpsToGtpResult_Item */

/* eslint-enable */
