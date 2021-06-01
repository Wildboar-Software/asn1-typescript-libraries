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
    SequenceNumber,
    _decode_SequenceNumber,
    _encode_SequenceNumber,
} from '../MSAbstractService/SequenceNumber.ta';
export {
    SequenceNumber,
    _decode_SequenceNumber,
    _encode_SequenceNumber,
} from '../MSAbstractService/SequenceNumber.ta';
import {
    ModifyProblem,
    ModifyProblem_attribute_not_present /* IMPORTED_LONG_NAMED_INTEGER */,
    attribute_not_present /* IMPORTED_SHORT_NAMED_INTEGER */,
    ModifyProblem_value_not_present /* IMPORTED_LONG_NAMED_INTEGER */,
    value_not_present /* IMPORTED_SHORT_NAMED_INTEGER */,
    ModifyProblem_attribute_or_value_already_exists /* IMPORTED_LONG_NAMED_INTEGER */,
    attribute_or_value_already_exists /* IMPORTED_SHORT_NAMED_INTEGER */,
    ModifyProblem_invalid_position /* IMPORTED_LONG_NAMED_INTEGER */,
    invalid_position /* IMPORTED_SHORT_NAMED_INTEGER */,
    ModifyProblem_modify_restriction_problem /* IMPORTED_LONG_NAMED_INTEGER */,
    modify_restriction_problem /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_ModifyProblem,
    _encode_ModifyProblem,
} from '../MSAbstractService/ModifyProblem.ta';
export {
    ModifyProblem,
    ModifyProblem_attribute_not_present /* IMPORTED_LONG_NAMED_INTEGER */,
    attribute_not_present /* IMPORTED_SHORT_NAMED_INTEGER */,
    ModifyProblem_value_not_present /* IMPORTED_LONG_NAMED_INTEGER */,
    value_not_present /* IMPORTED_SHORT_NAMED_INTEGER */,
    ModifyProblem_attribute_or_value_already_exists /* IMPORTED_LONG_NAMED_INTEGER */,
    attribute_or_value_already_exists /* IMPORTED_SHORT_NAMED_INTEGER */,
    ModifyProblem_invalid_position /* IMPORTED_LONG_NAMED_INTEGER */,
    invalid_position /* IMPORTED_SHORT_NAMED_INTEGER */,
    ModifyProblem_modify_restriction_problem /* IMPORTED_LONG_NAMED_INTEGER */,
    modify_restriction_problem /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_ModifyProblem,
    _encode_ModifyProblem,
} from '../MSAbstractService/ModifyProblem.ta';

/* START_OF_SYMBOL_DEFINITION ModifyErrorParameter */
/**
 * @summary ModifyErrorParameter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifyErrorParameter ::= SET {
 *   entries-modified
 *     [0]  SEQUENCE SIZE (1..ub-messages) OF SequenceNumber OPTIONAL,
 *   failing-entry        [1]  SequenceNumber,
 *   modification-number  [2]  INTEGER,
 *   problem              [3]  ModifyProblem
 * }
 * ```
 *
 * @class
 */
export class ModifyErrorParameter {
    constructor(
        /**
         * @summary `entries_modified`.
         * @public
         * @readonly
         */
        readonly entries_modified: OPTIONAL<SequenceNumber[]>,
        /**
         * @summary `failing_entry`.
         * @public
         * @readonly
         */
        readonly failing_entry: SequenceNumber,
        /**
         * @summary `modification_number`.
         * @public
         * @readonly
         */
        readonly modification_number: INTEGER,
        /**
         * @summary `problem`.
         * @public
         * @readonly
         */
        readonly problem: ModifyProblem
    ) {}

    /**
     * @summary Restructures an object into a ModifyErrorParameter
     * @description
     *
     * This takes an `object` and converts it to a `ModifyErrorParameter`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ModifyErrorParameter`.
     * @returns {ModifyErrorParameter}
     */
    public static _from_object(
        _o: { [_K in keyof ModifyErrorParameter]: ModifyErrorParameter[_K] }
    ): ModifyErrorParameter {
        return new ModifyErrorParameter(
            _o.entries_modified,
            _o.failing_entry,
            _o.modification_number,
            _o.problem
        );
    }
}
/* END_OF_SYMBOL_DEFINITION ModifyErrorParameter */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ModifyErrorParameter */
/**
 * @summary The Leading Root Component Types of ModifyErrorParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ModifyErrorParameter: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'entries-modified',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'failing-entry',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'modification-number',
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'problem',
        false,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ModifyErrorParameter */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ModifyErrorParameter */
/**
 * @summary The Trailing Root Component Types of ModifyErrorParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ModifyErrorParameter: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ModifyErrorParameter */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ModifyErrorParameter */
/**
 * @summary The Extension Addition Component Types of ModifyErrorParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ModifyErrorParameter: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ModifyErrorParameter */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ModifyErrorParameter */
let _cached_decoder_for_ModifyErrorParameter: $.ASN1Decoder<ModifyErrorParameter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ModifyErrorParameter */

/* START_OF_SYMBOL_DEFINITION _decode_ModifyErrorParameter */
/**
 * @summary Decodes an ASN.1 element into a(n) ModifyErrorParameter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifyErrorParameter} The decoded data structure.
 */
export function _decode_ModifyErrorParameter(el: _Element) {
    if (!_cached_decoder_for_ModifyErrorParameter) {
        _cached_decoder_for_ModifyErrorParameter = function (
            el: _Element
        ): ModifyErrorParameter {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let entries_modified: OPTIONAL<SequenceNumber[]>;
            let failing_entry!: SequenceNumber;
            let modification_number!: INTEGER;
            let problem!: ModifyProblem;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'entries-modified': (_el: _Element): void => {
                    entries_modified = $._decode_explicit<SequenceNumber[]>(
                        () =>
                            $._decodeSequenceOf<SequenceNumber>(
                                () => _decode_SequenceNumber
                            )
                    )(_el);
                },
                'failing-entry': (_el: _Element): void => {
                    failing_entry = $._decode_explicit<SequenceNumber>(
                        () => _decode_SequenceNumber
                    )(_el);
                },
                'modification-number': (_el: _Element): void => {
                    modification_number = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                problem: (_el: _Element): void => {
                    problem = $._decode_explicit<ModifyProblem>(
                        () => _decode_ModifyProblem
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ModifyErrorParameter,
                _extension_additions_list_spec_for_ModifyErrorParameter,
                _root_component_type_list_2_spec_for_ModifyErrorParameter,
                undefined
            );
            return new ModifyErrorParameter /* SET_CONSTRUCTOR_CALL */(
                entries_modified,
                failing_entry,
                modification_number,
                problem
            );
        };
    }
    return _cached_decoder_for_ModifyErrorParameter(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ModifyErrorParameter */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ModifyErrorParameter */
let _cached_encoder_for_ModifyErrorParameter: $.ASN1Encoder<ModifyErrorParameter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ModifyErrorParameter */

/* START_OF_SYMBOL_DEFINITION _encode_ModifyErrorParameter */
/**
 * @summary Encodes a(n) ModifyErrorParameter into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyErrorParameter, encoded as an ASN.1 Element.
 */
export function _encode_ModifyErrorParameter(
    value: ModifyErrorParameter,
    elGetter: $.ASN1Encoder<ModifyErrorParameter>
) {
    if (!_cached_encoder_for_ModifyErrorParameter) {
        _cached_encoder_for_ModifyErrorParameter = function (
            value: ModifyErrorParameter,
            elGetter: $.ASN1Encoder<ModifyErrorParameter>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.entries_modified === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () =>
                                      $._encodeSequenceOf<SequenceNumber>(
                                          () => _encode_SequenceNumber,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.entries_modified, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            1,
                            () => _encode_SequenceNumber,
                            $.BER
                        )(value.failing_entry, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            2,
                            () => $._encodeInteger,
                            $.BER
                        )(value.modification_number, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            3,
                            () => _encode_ModifyProblem,
                            $.BER
                        )(value.problem, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ModifyErrorParameter(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ModifyErrorParameter */

/* eslint-enable */
