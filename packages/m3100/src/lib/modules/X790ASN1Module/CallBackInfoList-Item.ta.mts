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
    PersonReach,
    _decode_PersonReach,
    _encode_PersonReach,
} from '../X790ASN1Module/PersonReach.ta.mjs';
export {
    PersonReach,
    _decode_PersonReach,
    _encode_PersonReach,
} from '../X790ASN1Module/PersonReach.ta.mjs';

/* START_OF_SYMBOL_DEFINITION CallBackInfoList_Item */
/**
 * @summary CallBackInfoList_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CallBackInfoList-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type CallBackInfoList_Item =
    | { escalation: PersonReach } /* CHOICE_ALT_ROOT */
    | { beforeAutoTest: PersonReach } /* CHOICE_ALT_ROOT */
    | { afterCleared: PersonReach } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION CallBackInfoList_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CallBackInfoList_Item */
let _cached_decoder_for_CallBackInfoList_Item: $.ASN1Decoder<CallBackInfoList_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CallBackInfoList_Item */

/* START_OF_SYMBOL_DEFINITION _decode_CallBackInfoList_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) CallBackInfoList_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CallBackInfoList_Item} The decoded data structure.
 */
export function _decode_CallBackInfoList_Item(el: _Element) {
    if (!_cached_decoder_for_CallBackInfoList_Item) {
        _cached_decoder_for_CallBackInfoList_Item = $._decode_extensible_choice<CallBackInfoList_Item>(
            {
                'CONTEXT 0': [
                    'escalation',
                    $._decode_implicit<PersonReach>(() => _decode_PersonReach),
                ],
                'CONTEXT 1': [
                    'beforeAutoTest',
                    $._decode_implicit<PersonReach>(() => _decode_PersonReach),
                ],
                'CONTEXT 2': [
                    'afterCleared',
                    $._decode_implicit<PersonReach>(() => _decode_PersonReach),
                ],
            }
        );
    }
    return _cached_decoder_for_CallBackInfoList_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CallBackInfoList_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CallBackInfoList_Item */
let _cached_encoder_for_CallBackInfoList_Item: $.ASN1Encoder<CallBackInfoList_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CallBackInfoList_Item */

/* START_OF_SYMBOL_DEFINITION _encode_CallBackInfoList_Item */
/**
 * @summary Encodes a(n) CallBackInfoList_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallBackInfoList_Item, encoded as an ASN.1 Element.
 */
export function _encode_CallBackInfoList_Item(
    value: CallBackInfoList_Item,
    elGetter: $.ASN1Encoder<CallBackInfoList_Item>
) {
    if (!_cached_encoder_for_CallBackInfoList_Item) {
        _cached_encoder_for_CallBackInfoList_Item = $._encode_choice<CallBackInfoList_Item>(
            {
                escalation: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_PersonReach,
                    $.BER
                ),
                beforeAutoTest: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_PersonReach,
                    $.BER
                ),
                afterCleared: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_PersonReach,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_CallBackInfoList_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CallBackInfoList_Item */

/* eslint-enable */
