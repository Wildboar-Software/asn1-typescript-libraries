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
    DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection,
    _decode_DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection,
    _encode_DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection,
} from '../SummarizationASN1Productions/DynamicSimpleScanArgument-scopeOrListChoice-scopedSelection.ta.mjs';
export {
    DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection,
    _decode_DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection,
    _encode_DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection,
} from '../SummarizationASN1Productions/DynamicSimpleScanArgument-scopeOrListChoice-scopedSelection.ta.mjs';
import {
    ObjectList,
    _decode_ObjectList,
    _encode_ObjectList,
} from '../SummarizationASN1Productions/ObjectList.ta.mjs';
export {
    ObjectList,
    _decode_ObjectList,
    _encode_ObjectList,
} from '../SummarizationASN1Productions/ObjectList.ta.mjs';

/* START_OF_SYMBOL_DEFINITION DynamicSimpleScanArgument_scopeOrListChoice */
/**
 * @summary DynamicSimpleScanArgument_scopeOrListChoice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DynamicSimpleScanArgument-scopeOrListChoice ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type DynamicSimpleScanArgument_scopeOrListChoice =
    | {
          scopedSelection: DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection;
      } /* CHOICE_ALT_ROOT */
    | { objectList: ObjectList } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION DynamicSimpleScanArgument_scopeOrListChoice */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DynamicSimpleScanArgument_scopeOrListChoice */
let _cached_decoder_for_DynamicSimpleScanArgument_scopeOrListChoice: $.ASN1Decoder<DynamicSimpleScanArgument_scopeOrListChoice> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DynamicSimpleScanArgument_scopeOrListChoice */

/* START_OF_SYMBOL_DEFINITION _decode_DynamicSimpleScanArgument_scopeOrListChoice */
/**
 * @summary Decodes an ASN.1 element into a(n) DynamicSimpleScanArgument_scopeOrListChoice
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DynamicSimpleScanArgument_scopeOrListChoice} The decoded data structure.
 */
export function _decode_DynamicSimpleScanArgument_scopeOrListChoice(
    el: _Element
) {
    if (!_cached_decoder_for_DynamicSimpleScanArgument_scopeOrListChoice) {
        _cached_decoder_for_DynamicSimpleScanArgument_scopeOrListChoice = $._decode_inextensible_choice<DynamicSimpleScanArgument_scopeOrListChoice>(
            {
                'CONTEXT 2': [
                    'scopedSelection',
                    $._decode_implicit<DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection>(
                        () =>
                            _decode_DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection
                    ),
                ],
                'CONTEXT 3': [
                    'objectList',
                    $._decode_implicit<ObjectList>(() => _decode_ObjectList),
                ],
            }
        );
    }
    return _cached_decoder_for_DynamicSimpleScanArgument_scopeOrListChoice(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DynamicSimpleScanArgument_scopeOrListChoice */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DynamicSimpleScanArgument_scopeOrListChoice */
let _cached_encoder_for_DynamicSimpleScanArgument_scopeOrListChoice: $.ASN1Encoder<DynamicSimpleScanArgument_scopeOrListChoice> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DynamicSimpleScanArgument_scopeOrListChoice */

/* START_OF_SYMBOL_DEFINITION _encode_DynamicSimpleScanArgument_scopeOrListChoice */
/**
 * @summary Encodes a(n) DynamicSimpleScanArgument_scopeOrListChoice into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DynamicSimpleScanArgument_scopeOrListChoice, encoded as an ASN.1 Element.
 */
export function _encode_DynamicSimpleScanArgument_scopeOrListChoice(
    value: DynamicSimpleScanArgument_scopeOrListChoice,
    elGetter: $.ASN1Encoder<DynamicSimpleScanArgument_scopeOrListChoice>
) {
    if (!_cached_encoder_for_DynamicSimpleScanArgument_scopeOrListChoice) {
        _cached_encoder_for_DynamicSimpleScanArgument_scopeOrListChoice = $._encode_choice<DynamicSimpleScanArgument_scopeOrListChoice>(
            {
                scopedSelection: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () =>
                        _encode_DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection,
                    $.BER
                ),
                objectList: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => _encode_ObjectList,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_DynamicSimpleScanArgument_scopeOrListChoice(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_DynamicSimpleScanArgument_scopeOrListChoice */

/* eslint-enable */
