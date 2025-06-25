/* eslint-disable */
import {
    OPTIONAL,
    GeneralString,
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
    ServiceProblem,
    _decode_ServiceProblem,
    _encode_ServiceProblem,
} from '../MSAbstractService/ServiceProblem.ta.mjs';
/**
 * @summary ServiceErrorParameter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ServiceErrorParameter ::= SET {
 *   problem                    [0]  ServiceProblem,
 *   -- 1994 extension
 *   supplementary-information
 *     [1]  GeneralString(SIZE (1..ub-supplementary-info-length)) OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ServiceErrorParameter {
    constructor(
        /**
         * @summary `problem`.
         * @public
         * @readonly
         */
        readonly problem: ServiceProblem,
        /**
         * @summary `supplementary_information`.
         * @public
         * @readonly
         */
        readonly supplementary_information: OPTIONAL<GeneralString>
    ) {}

    /**
     * @summary Restructures an object into a ServiceErrorParameter
     * @description
     *
     * This takes an `object` and converts it to a `ServiceErrorParameter`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServiceErrorParameter`.
     * @returns {ServiceErrorParameter}
     */
    public static _from_object(
        _o: { [_K in keyof ServiceErrorParameter]: ServiceErrorParameter[_K] }
    ): ServiceErrorParameter {
        return new ServiceErrorParameter(
            _o.problem,
            _o.supplementary_information
        );
    }
}

/**
 * @summary The Leading Root Component Types of ServiceErrorParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ServiceErrorParameter: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'problem',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'supplementary-information',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of ServiceErrorParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ServiceErrorParameter: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ServiceErrorParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ServiceErrorParameter: $.ComponentSpec[] = [];

let _cached_decoder_for_ServiceErrorParameter: $.ASN1Decoder<ServiceErrorParameter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceErrorParameter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ServiceErrorParameter} The decoded data structure.
 */
export function _decode_ServiceErrorParameter(el: _Element): ServiceErrorParameter {
    if (!_cached_decoder_for_ServiceErrorParameter) {
        _cached_decoder_for_ServiceErrorParameter = function (
            el: _Element
        ): ServiceErrorParameter {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let problem!: ServiceProblem;
            let supplementary_information: OPTIONAL<GeneralString>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                problem: (_el: _Element): void => {
                    problem = $._decode_explicit<ServiceProblem>(
                        () => _decode_ServiceProblem
                    )(_el);
                },
                'supplementary-information': (_el: _Element): void => {
                    supplementary_information = $._decode_explicit<GeneralString>(
                        () => $._decodeGeneralString
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ServiceErrorParameter,
                _extension_additions_list_spec_for_ServiceErrorParameter,
                _root_component_type_list_2_spec_for_ServiceErrorParameter,
                undefined
            );
            return new ServiceErrorParameter /* SET_CONSTRUCTOR_CALL */(
                problem,
                supplementary_information
            );
        };
    }
    return _cached_decoder_for_ServiceErrorParameter(el);
}

let _cached_encoder_for_ServiceErrorParameter: $.ASN1Encoder<ServiceErrorParameter> | null = null;

/**
 * @summary Encodes a(n) ServiceErrorParameter into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceErrorParameter, encoded as an ASN.1 Element.
 */
export function _encode_ServiceErrorParameter(
    value: ServiceErrorParameter,
    elGetter: $.ASN1Encoder<ServiceErrorParameter>
): _Element {
    if (!_cached_encoder_for_ServiceErrorParameter) {
        _cached_encoder_for_ServiceErrorParameter = function (
            value: ServiceErrorParameter        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_ServiceProblem,
                            $.BER
                        )(value.problem, $.BER),
                        /* IF_ABSENT  */ value.supplementary_information ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeGeneralString,
                                  $.BER
                              )(value.supplementary_information, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ServiceErrorParameter(value, elGetter);
}


/* eslint-enable */
