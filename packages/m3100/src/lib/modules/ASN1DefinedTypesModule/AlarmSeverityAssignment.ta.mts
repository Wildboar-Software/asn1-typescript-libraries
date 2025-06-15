/* eslint-disable */
import {
    OPTIONAL,
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
    ProbableCause,
    _decode_ProbableCause,
    _encode_ProbableCause,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ProbableCause.ta.mjs';
import {
    AlarmSeverityCode,
    _enum_for_AlarmSeverityCode,
    _decode_AlarmSeverityCode,
    _encode_AlarmSeverityCode,
} from '../ASN1DefinedTypesModule/AlarmSeverityCode.ta.mjs';

/**
 * @summary AlarmSeverityAssignment
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlarmSeverityAssignment ::= SEQUENCE {
 *   problem                              ProbableCause,
 *   severityAssignedServiceAffecting     [0]  AlarmSeverityCode OPTIONAL,
 *   severityAssignedNonServiceAffecting  [1]  AlarmSeverityCode OPTIONAL,
 *   severityAssignedServiceIndependent   [2]  AlarmSeverityCode OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class AlarmSeverityAssignment {
    constructor(
        /**
         * @summary `problem`.
         * @public
         * @readonly
         */
        readonly problem: ProbableCause,
        /**
         * @summary `severityAssignedServiceAffecting`.
         * @public
         * @readonly
         */
        readonly severityAssignedServiceAffecting: OPTIONAL<AlarmSeverityCode>,
        /**
         * @summary `severityAssignedNonServiceAffecting`.
         * @public
         * @readonly
         */
        readonly severityAssignedNonServiceAffecting: OPTIONAL<AlarmSeverityCode>,
        /**
         * @summary `severityAssignedServiceIndependent`.
         * @public
         * @readonly
         */
        readonly severityAssignedServiceIndependent: OPTIONAL<AlarmSeverityCode>
    ) {}

    /**
     * @summary Restructures an object into a AlarmSeverityAssignment
     * @description
     *
     * This takes an `object` and converts it to a `AlarmSeverityAssignment`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AlarmSeverityAssignment`.
     * @returns {AlarmSeverityAssignment}
     */
    public static _from_object(
        _o: {
            [_K in keyof AlarmSeverityAssignment]: AlarmSeverityAssignment[_K];
        }
    ): AlarmSeverityAssignment {
        return new AlarmSeverityAssignment(
            _o.problem,
            _o.severityAssignedServiceAffecting,
            _o.severityAssignedNonServiceAffecting,
            _o.severityAssignedServiceIndependent
        );
    }

    /**
     * @summary The enum used as the type of the component `severityAssignedServiceAffecting`
     * @public
     * @static
     */

    public static _enum_for_severityAssignedServiceAffecting = _enum_for_AlarmSeverityCode;
    /**
     * @summary The enum used as the type of the component `severityAssignedNonServiceAffecting`
     * @public
     * @static
     */

    public static _enum_for_severityAssignedNonServiceAffecting = _enum_for_AlarmSeverityCode;
    /**
     * @summary The enum used as the type of the component `severityAssignedServiceIndependent`
     * @public
     * @static
     */

    public static _enum_for_severityAssignedServiceIndependent = _enum_for_AlarmSeverityCode;
}


/**
 * @summary The Leading Root Component Types of AlarmSeverityAssignment
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AlarmSeverityAssignment: $.ComponentSpec[] = [
    new $.ComponentSpec('problem', false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        'severityAssignedServiceAffecting',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'severityAssignedNonServiceAffecting',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'severityAssignedServiceIndependent',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];


/**
 * @summary The Trailing Root Component Types of AlarmSeverityAssignment
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AlarmSeverityAssignment: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of AlarmSeverityAssignment
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AlarmSeverityAssignment: $.ComponentSpec[] = [];


let _cached_decoder_for_AlarmSeverityAssignment: $.ASN1Decoder<AlarmSeverityAssignment> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AlarmSeverityAssignment
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AlarmSeverityAssignment} The decoded data structure.
 */
export function _decode_AlarmSeverityAssignment(el: _Element) {
    if (!_cached_decoder_for_AlarmSeverityAssignment) {
        _cached_decoder_for_AlarmSeverityAssignment = function (
            el: _Element
        ): AlarmSeverityAssignment {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let problem!: ProbableCause;
            let severityAssignedServiceAffecting: OPTIONAL<AlarmSeverityCode>;
            let severityAssignedNonServiceAffecting: OPTIONAL<AlarmSeverityCode>;
            let severityAssignedServiceIndependent: OPTIONAL<AlarmSeverityCode>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                problem: (_el: _Element): void => {
                    problem = _decode_ProbableCause(_el);
                },
                severityAssignedServiceAffecting: (_el: _Element): void => {
                    severityAssignedServiceAffecting = $._decode_implicit<AlarmSeverityCode>(
                        () => _decode_AlarmSeverityCode
                    )(_el);
                },
                severityAssignedNonServiceAffecting: (_el: _Element): void => {
                    severityAssignedNonServiceAffecting = $._decode_implicit<AlarmSeverityCode>(
                        () => _decode_AlarmSeverityCode
                    )(_el);
                },
                severityAssignedServiceIndependent: (_el: _Element): void => {
                    severityAssignedServiceIndependent = $._decode_implicit<AlarmSeverityCode>(
                        () => _decode_AlarmSeverityCode
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AlarmSeverityAssignment,
                _extension_additions_list_spec_for_AlarmSeverityAssignment,
                _root_component_type_list_2_spec_for_AlarmSeverityAssignment,
                undefined
            );
            return new AlarmSeverityAssignment /* SEQUENCE_CONSTRUCTOR_CALL */(
                problem,
                severityAssignedServiceAffecting,
                severityAssignedNonServiceAffecting,
                severityAssignedServiceIndependent
            );
        };
    }
    return _cached_decoder_for_AlarmSeverityAssignment(el);
}


let _cached_encoder_for_AlarmSeverityAssignment: $.ASN1Encoder<AlarmSeverityAssignment> | null = null;


/**
 * @summary Encodes a(n) AlarmSeverityAssignment into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlarmSeverityAssignment, encoded as an ASN.1 Element.
 */
export function _encode_AlarmSeverityAssignment(
    value: AlarmSeverityAssignment,
    elGetter: $.ASN1Encoder<AlarmSeverityAssignment>
) {
    if (!_cached_encoder_for_AlarmSeverityAssignment) {
        _cached_encoder_for_AlarmSeverityAssignment = function (
            value: AlarmSeverityAssignment        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ProbableCause(
                            value.problem,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.severityAssignedServiceAffecting ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_AlarmSeverityCode,
                                  $.BER
                              )(value.severityAssignedServiceAffecting, $.BER),
                        /* IF_ABSENT  */ value.severityAssignedNonServiceAffecting ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_AlarmSeverityCode,
                                  $.BER
                              )(
                                  value.severityAssignedNonServiceAffecting,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.severityAssignedServiceIndependent ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_AlarmSeverityCode,
                                  $.BER
                              )(
                                  value.severityAssignedServiceIndependent,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AlarmSeverityAssignment(value, elGetter);
}


/* eslint-enable */
