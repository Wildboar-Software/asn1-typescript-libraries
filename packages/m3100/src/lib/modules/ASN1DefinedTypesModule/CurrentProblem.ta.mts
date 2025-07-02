/* eslint-disable */
import {
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
    ProbableCause,
    _decode_ProbableCause,
    _encode_ProbableCause,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ProbableCause.ta.mjs';
import {
    AlarmStatus,
    _enum_for_AlarmStatus,
    _decode_AlarmStatus,
    _encode_AlarmStatus,
} from '../ASN1DefinedTypesModule/AlarmStatus.ta.mjs';

/**
 * @summary CurrentProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CurrentProblem ::= SEQUENCE {
 *   problem      [0]  ProbableCause,
 *   alarmStatus  [1]  AlarmStatus
 * }
 * ```
 *
 */
export class CurrentProblem {
    constructor(
        /**
         * @summary `problem`.
         * @public
         * @readonly
         */
        readonly problem: ProbableCause,
        /**
         * @summary `alarmStatus`.
         * @public
         * @readonly
         */
        readonly alarmStatus: AlarmStatus
    ) {}

    /**
     * @summary Restructures an object into a CurrentProblem
     * @description
     *
     * This takes an `object` and converts it to a `CurrentProblem`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CurrentProblem`.
     * @returns {CurrentProblem}
     */
    public static _from_object(
        _o: { [_K in keyof CurrentProblem]: CurrentProblem[_K] }
    ): CurrentProblem {
        return new CurrentProblem(_o.problem, _o.alarmStatus);
    }

    /**
     * @summary The enum used as the type of the component `alarmStatus`
     * @public
     * @static
     */

    public static _enum_for_alarmStatus = _enum_for_AlarmStatus;
}


/**
 * @summary The Leading Root Component Types of CurrentProblem
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CurrentProblem: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'problem',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'alarmStatus',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
];


/**
 * @summary The Trailing Root Component Types of CurrentProblem
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CurrentProblem: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of CurrentProblem
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CurrentProblem: $.ComponentSpec[] = [];


let _cached_decoder_for_CurrentProblem: $.ASN1Decoder<CurrentProblem> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CurrentProblem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CurrentProblem} The decoded data structure.
 */
export function _decode_CurrentProblem(el: _Element): CurrentProblem {
    if (!_cached_decoder_for_CurrentProblem) {
        _cached_decoder_for_CurrentProblem = function (
            el: _Element
        ): CurrentProblem {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'CurrentProblem contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'problem';
            sequence[1].name = 'alarmStatus';
            let problem!: ProbableCause;
            let alarmStatus!: AlarmStatus;
            problem = $._decode_explicit<ProbableCause>(
                () => _decode_ProbableCause
            )(sequence[0]);
            alarmStatus = $._decode_implicit<AlarmStatus>(
                () => _decode_AlarmStatus
            )(sequence[1]);
            return new CurrentProblem(problem, alarmStatus);
        };
    }
    return _cached_decoder_for_CurrentProblem(el);
}


let _cached_encoder_for_CurrentProblem: $.ASN1Encoder<CurrentProblem> | null = null;


/**
 * @summary Encodes a(n) CurrentProblem into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CurrentProblem, encoded as an ASN.1 Element.
 */
export function _encode_CurrentProblem(
    value: CurrentProblem,
    elGetter: $.ASN1Encoder<CurrentProblem>
): _Element {
    if (!_cached_encoder_for_CurrentProblem) {
        _cached_encoder_for_CurrentProblem = function (
            value: CurrentProblem        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_ProbableCause,
                            $.BER
                        )(value.problem, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => _encode_AlarmStatus,
                            $.BER
                        )(value.alarmStatus, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_CurrentProblem(value, elGetter);
}


/* eslint-enable */
