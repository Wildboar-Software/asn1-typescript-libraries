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
} from '../MSAbstractService/Selector.ta.js';
export {
    Selector,
    _decode_Selector,
    _encode_Selector,
} from '../MSAbstractService/Selector.ta.js';
import {
    SequenceNumber,
    _decode_SequenceNumber,
    _encode_SequenceNumber,
} from '../MSAbstractService/SequenceNumber.ta.js';
export {
    SequenceNumber,
    _decode_SequenceNumber,
    _encode_SequenceNumber,
} from '../MSAbstractService/SequenceNumber.ta.js';

/* START_OF_SYMBOL_DEFINITION DeleteArgument_items */
/**
 * @summary DeleteArgument_items
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeleteArgument-items ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type DeleteArgument_items =
    | { selector: Selector } /* CHOICE_ALT_ROOT */
    | { sequence_numbers: SequenceNumber[] } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION DeleteArgument_items */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeleteArgument_items */
let _cached_decoder_for_DeleteArgument_items: $.ASN1Decoder<DeleteArgument_items> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeleteArgument_items */

/* START_OF_SYMBOL_DEFINITION _decode_DeleteArgument_items */
/**
 * @summary Decodes an ASN.1 element into a(n) DeleteArgument_items
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeleteArgument_items} The decoded data structure.
 */
export function _decode_DeleteArgument_items(el: _Element) {
    if (!_cached_decoder_for_DeleteArgument_items) {
        _cached_decoder_for_DeleteArgument_items = $._decode_inextensible_choice<DeleteArgument_items>(
            {
                'CONTEXT 1': [
                    'selector',
                    $._decode_implicit<Selector>(() => _decode_Selector),
                ],
                'CONTEXT 2': [
                    'sequence_numbers',
                    $._decode_implicit<SequenceNumber[]>(() =>
                        $._decodeSetOf<SequenceNumber>(
                            () => _decode_SequenceNumber
                        )
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_DeleteArgument_items(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DeleteArgument_items */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeleteArgument_items */
let _cached_encoder_for_DeleteArgument_items: $.ASN1Encoder<DeleteArgument_items> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeleteArgument_items */

/* START_OF_SYMBOL_DEFINITION _encode_DeleteArgument_items */
/**
 * @summary Encodes a(n) DeleteArgument_items into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteArgument_items, encoded as an ASN.1 Element.
 */
export function _encode_DeleteArgument_items(
    value: DeleteArgument_items,
    elGetter: $.ASN1Encoder<DeleteArgument_items>
) {
    if (!_cached_encoder_for_DeleteArgument_items) {
        _cached_encoder_for_DeleteArgument_items = $._encode_choice<DeleteArgument_items>(
            {
                selector: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_Selector,
                    $.BER
                ),
                sequence_numbers: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () =>
                        $._encodeSetOf<SequenceNumber>(
                            () => _encode_SequenceNumber,
                            $.BER
                        ),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_DeleteArgument_items(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DeleteArgument_items */

/* eslint-enable */
