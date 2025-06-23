/* eslint-disable */
import {
    OPTIONAL,
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    SequenceNumber,
    _decode_SequenceNumber,
    _encode_SequenceNumber,
} from '../MSAbstractService/SequenceNumber.ta.mjs';
import {
    ModifyProblem,
    _decode_ModifyProblem,
    _encode_ModifyProblem,
} from '../MSAbstractService/ModifyProblem.ta.mjs';
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
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'failing-entry',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'modification-number',
        false,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'problem',
        false,
        $.hasTag(_TagClass.context, 3)
    ),
];

/**
 * @summary The Trailing Root Component Types of ModifyErrorParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ModifyErrorParameter: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ModifyErrorParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ModifyErrorParameter: $.ComponentSpec[] = [];

let _cached_decoder_for_ModifyErrorParameter: $.ASN1Decoder<ModifyErrorParameter> | null = null;

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

let _cached_encoder_for_ModifyErrorParameter: $.ASN1Encoder<ModifyErrorParameter> | null = null;

/**
 * @summary Encodes a(n) ModifyErrorParameter into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyErrorParameter, encoded as an ASN.1 Element.
 */
export function _encode_ModifyErrorParameter(
    value: ModifyErrorParameter,
    elGetter: $.ASN1Encoder<ModifyErrorParameter>
) {
    if (!_cached_encoder_for_ModifyErrorParameter) {
        _cached_encoder_for_ModifyErrorParameter = function (
            value: ModifyErrorParameter        ): _Element {
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


/* eslint-enable */
