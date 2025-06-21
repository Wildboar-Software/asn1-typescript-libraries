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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    AutoDiscardProblem,
    _decode_AutoDiscardProblem,
    _encode_AutoDiscardProblem,
} from '../IPMSAutoActionTypes/AutoDiscardProblem.ta.mjs';
/**
 * @summary ipm_auto_discard_error_ParameterType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ipm-auto-discard-error-ParameterType ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class ipm_auto_discard_error_ParameterType {
    constructor(
        /**
         * @summary `problem`.
         * @public
         * @readonly
         */
        readonly problem: AutoDiscardProblem
    ) {}

    /**
     * @summary Restructures an object into a ipm_auto_discard_error_ParameterType
     * @description
     *
     * This takes an `object` and converts it to a `ipm_auto_discard_error_ParameterType`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ipm_auto_discard_error_ParameterType`.
     * @returns {ipm_auto_discard_error_ParameterType}
     */
    public static _from_object(
        _o: {
            [_K in keyof ipm_auto_discard_error_ParameterType]: ipm_auto_discard_error_ParameterType[_K];
        }
    ): ipm_auto_discard_error_ParameterType {
        return new ipm_auto_discard_error_ParameterType(_o.problem);
    }
}

/**
 * @summary The Leading Root Component Types of ipm_auto_discard_error_ParameterType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ipm_auto_discard_error_ParameterType: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'problem',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
];

/**
 * @summary The Trailing Root Component Types of ipm_auto_discard_error_ParameterType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ipm_auto_discard_error_ParameterType: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ipm_auto_discard_error_ParameterType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ipm_auto_discard_error_ParameterType: $.ComponentSpec[] = [];

let _cached_decoder_for_ipm_auto_discard_error_ParameterType: $.ASN1Decoder<ipm_auto_discard_error_ParameterType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ipm_auto_discard_error_ParameterType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ipm_auto_discard_error_ParameterType} The decoded data structure.
 */
export function _decode_ipm_auto_discard_error_ParameterType(el: _Element) {
    if (!_cached_decoder_for_ipm_auto_discard_error_ParameterType) {
        _cached_decoder_for_ipm_auto_discard_error_ParameterType = function (
            el: _Element
        ): ipm_auto_discard_error_ParameterType {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let problem!: AutoDiscardProblem;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                problem: (_el: _Element): void => {
                    problem = $._decode_explicit<AutoDiscardProblem>(
                        () => _decode_AutoDiscardProblem
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ipm_auto_discard_error_ParameterType,
                _extension_additions_list_spec_for_ipm_auto_discard_error_ParameterType,
                _root_component_type_list_2_spec_for_ipm_auto_discard_error_ParameterType,
                undefined
            );
            return new ipm_auto_discard_error_ParameterType /* SET_CONSTRUCTOR_CALL */(
                problem
            );
        };
    }
    return _cached_decoder_for_ipm_auto_discard_error_ParameterType(el);
}

let _cached_encoder_for_ipm_auto_discard_error_ParameterType: $.ASN1Encoder<ipm_auto_discard_error_ParameterType> | null = null;

/**
 * @summary Encodes a(n) ipm_auto_discard_error_ParameterType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ipm_auto_discard_error_ParameterType, encoded as an ASN.1 Element.
 */
export function _encode_ipm_auto_discard_error_ParameterType(
    value: ipm_auto_discard_error_ParameterType,
    elGetter: $.ASN1Encoder<ipm_auto_discard_error_ParameterType>
) {
    if (!_cached_encoder_for_ipm_auto_discard_error_ParameterType) {
        _cached_encoder_for_ipm_auto_discard_error_ParameterType = function (
            value: ipm_auto_discard_error_ParameterType        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_AutoDiscardProblem,
                            $.BER
                        )(value.problem, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ipm_auto_discard_error_ParameterType(
        value,
        elGetter
    );
}


/* eslint-enable */
