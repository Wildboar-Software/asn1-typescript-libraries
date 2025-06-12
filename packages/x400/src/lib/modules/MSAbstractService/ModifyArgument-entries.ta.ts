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

/* START_OF_SYMBOL_DEFINITION ModifyArgument_entries */
/**
 * @summary ModifyArgument_entries
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifyArgument-entries ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ModifyArgument_entries =
    | { selector: Selector } /* CHOICE_ALT_ROOT */
    | { specific_entries: SequenceNumber[] } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ModifyArgument_entries */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ModifyArgument_entries */
let _cached_decoder_for_ModifyArgument_entries: $.ASN1Decoder<ModifyArgument_entries> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ModifyArgument_entries */

/* START_OF_SYMBOL_DEFINITION _decode_ModifyArgument_entries */
/**
 * @summary Decodes an ASN.1 element into a(n) ModifyArgument_entries
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifyArgument_entries} The decoded data structure.
 */
export function _decode_ModifyArgument_entries(el: _Element) {
    if (!_cached_decoder_for_ModifyArgument_entries) {
        _cached_decoder_for_ModifyArgument_entries = $._decode_inextensible_choice<ModifyArgument_entries>(
            {
                'CONTEXT 1': [
                    'selector',
                    $._decode_implicit<Selector>(() => _decode_Selector),
                ],
                'CONTEXT 2': [
                    'specific_entries',
                    $._decode_implicit<SequenceNumber[]>(() =>
                        $._decodeSequenceOf<SequenceNumber>(
                            () => _decode_SequenceNumber
                        )
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_ModifyArgument_entries(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ModifyArgument_entries */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ModifyArgument_entries */
let _cached_encoder_for_ModifyArgument_entries: $.ASN1Encoder<ModifyArgument_entries> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ModifyArgument_entries */

/* START_OF_SYMBOL_DEFINITION _encode_ModifyArgument_entries */
/**
 * @summary Encodes a(n) ModifyArgument_entries into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyArgument_entries, encoded as an ASN.1 Element.
 */
export function _encode_ModifyArgument_entries(
    value: ModifyArgument_entries,
    elGetter: $.ASN1Encoder<ModifyArgument_entries>
) {
    if (!_cached_encoder_for_ModifyArgument_entries) {
        _cached_encoder_for_ModifyArgument_entries = $._encode_choice<ModifyArgument_entries>(
            {
                selector: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_Selector,
                    $.BER
                ),
                specific_entries: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () =>
                        $._encodeSequenceOf<SequenceNumber>(
                            () => _encode_SequenceNumber,
                            $.BER
                        ),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ModifyArgument_entries(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ModifyArgument_entries */

/* eslint-enable */
