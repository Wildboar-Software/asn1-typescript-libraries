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
    Selector,
    _decode_Selector,
    _encode_Selector,
} from '../MSAbstractService/Selector.ta.mjs';
export {
    Selector,
    _decode_Selector,
    _encode_Selector,
} from '../MSAbstractService/Selector.ta.mjs';
import {
    SequenceNumber,
    _decode_SequenceNumber,
    _encode_SequenceNumber,
} from '../MSAbstractService/SequenceNumber.ta.mjs';
export {
    SequenceNumber,
    _decode_SequenceNumber,
    _encode_SequenceNumber,
} from '../MSAbstractService/SequenceNumber.ta.mjs';

/* START_OF_SYMBOL_DEFINITION FetchArgument_item */
/**
 * @summary FetchArgument_item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FetchArgument-item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type FetchArgument_item =
    | { search: Selector } /* CHOICE_ALT_ROOT */
    | { precise: SequenceNumber } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION FetchArgument_item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FetchArgument_item */
let _cached_decoder_for_FetchArgument_item: $.ASN1Decoder<FetchArgument_item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FetchArgument_item */

/* START_OF_SYMBOL_DEFINITION _decode_FetchArgument_item */
/**
 * @summary Decodes an ASN.1 element into a(n) FetchArgument_item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FetchArgument_item} The decoded data structure.
 */
export function _decode_FetchArgument_item(el: _Element) {
    if (!_cached_decoder_for_FetchArgument_item) {
        _cached_decoder_for_FetchArgument_item = $._decode_inextensible_choice<FetchArgument_item>(
            {
                'CONTEXT 1': [
                    'search',
                    $._decode_implicit<Selector>(() => _decode_Selector),
                ],
                'CONTEXT 2': [
                    'precise',
                    $._decode_implicit<SequenceNumber>(
                        () => _decode_SequenceNumber
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_FetchArgument_item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FetchArgument_item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FetchArgument_item */
let _cached_encoder_for_FetchArgument_item: $.ASN1Encoder<FetchArgument_item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FetchArgument_item */

/* START_OF_SYMBOL_DEFINITION _encode_FetchArgument_item */
/**
 * @summary Encodes a(n) FetchArgument_item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FetchArgument_item, encoded as an ASN.1 Element.
 */
export function _encode_FetchArgument_item(
    value: FetchArgument_item,
    elGetter: $.ASN1Encoder<FetchArgument_item>
) {
    if (!_cached_encoder_for_FetchArgument_item) {
        _cached_encoder_for_FetchArgument_item = $._encode_choice<FetchArgument_item>(
            {
                search: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_Selector,
                    $.BER
                ),
                precise: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_SequenceNumber,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_FetchArgument_item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_FetchArgument_item */

/* eslint-enable */
