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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    Presentation_context_identifier_list,
    _decode_Presentation_context_identifier_list,
    _encode_Presentation_context_identifier_list,
} from '../ISO8823-PRESENTATION/Presentation-context-identifier-list.ta.mjs';
import {
    User_data,
    _decode_User_data,
    _encode_User_data,
} from '../ISO8823-PRESENTATION/User-data.ta.mjs';

/**
 * @summary ARU_PPDU_normal_mode_parameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ARU-PPDU-normal-mode-parameters ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class ARU_PPDU_normal_mode_parameters {
    constructor(
        /**
         * @summary `presentation_context_identifier_list`.
         * @public
         * @readonly
         */
        readonly presentation_context_identifier_list: OPTIONAL<Presentation_context_identifier_list>,
        /**
         * @summary `user_data`.
         * @public
         * @readonly
         */
        readonly user_data: OPTIONAL<User_data>
    ) {}

    /**
     * @summary Restructures an object into a ARU_PPDU_normal_mode_parameters
     * @description
     *
     * This takes an `object` and converts it to a `ARU_PPDU_normal_mode_parameters`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ARU_PPDU_normal_mode_parameters`.
     * @returns {ARU_PPDU_normal_mode_parameters}
     */
    public static _from_object(
        _o: {
            [_K in keyof ARU_PPDU_normal_mode_parameters]: ARU_PPDU_normal_mode_parameters[_K];
        }
    ): ARU_PPDU_normal_mode_parameters {
        return new ARU_PPDU_normal_mode_parameters(
            _o.presentation_context_identifier_list,
            _o.user_data
        );
    }
}


/**
 * @summary The Leading Root Component Types of ARU_PPDU_normal_mode_parameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ARU_PPDU_normal_mode_parameters: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'presentation-context-identifier-list',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec('user-data', true, $.hasAnyTag),
];


/**
 * @summary The Trailing Root Component Types of ARU_PPDU_normal_mode_parameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ARU_PPDU_normal_mode_parameters: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ARU_PPDU_normal_mode_parameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ARU_PPDU_normal_mode_parameters: $.ComponentSpec[] = [];


let _cached_decoder_for_ARU_PPDU_normal_mode_parameters: $.ASN1Decoder<ARU_PPDU_normal_mode_parameters> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ARU_PPDU_normal_mode_parameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ARU_PPDU_normal_mode_parameters} The decoded data structure.
 */
export function _decode_ARU_PPDU_normal_mode_parameters(el: _Element): ARU_PPDU_normal_mode_parameters {
    if (!_cached_decoder_for_ARU_PPDU_normal_mode_parameters) {
        _cached_decoder_for_ARU_PPDU_normal_mode_parameters = function (
            el: _Element
        ): ARU_PPDU_normal_mode_parameters {
            let presentation_context_identifier_list: OPTIONAL<Presentation_context_identifier_list>;
            let user_data: OPTIONAL<User_data>;
            const callbacks: $.DecodingMap = {
                'presentation-context-identifier-list': (
                    _el: _Element
                ): void => {
                    presentation_context_identifier_list = $._decode_implicit<Presentation_context_identifier_list>(
                        () => _decode_Presentation_context_identifier_list
                    )(_el);
                },
                'user-data': (_el: _Element): void => {
                    user_data = _decode_User_data(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ARU_PPDU_normal_mode_parameters,
                _extension_additions_list_spec_for_ARU_PPDU_normal_mode_parameters,
                _root_component_type_list_2_spec_for_ARU_PPDU_normal_mode_parameters,
                undefined
            );
            return new ARU_PPDU_normal_mode_parameters (
                presentation_context_identifier_list,
                user_data
            );
        };
    }
    return _cached_decoder_for_ARU_PPDU_normal_mode_parameters(el);
}


let _cached_encoder_for_ARU_PPDU_normal_mode_parameters: $.ASN1Encoder<ARU_PPDU_normal_mode_parameters> | null = null;


/**
 * @summary Encodes a(n) ARU_PPDU_normal_mode_parameters into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ARU_PPDU_normal_mode_parameters, encoded as an ASN.1 Element.
 */
export function _encode_ARU_PPDU_normal_mode_parameters(
    value: ARU_PPDU_normal_mode_parameters,
    elGetter: $.ASN1Encoder<ARU_PPDU_normal_mode_parameters>
): _Element {
    if (!_cached_encoder_for_ARU_PPDU_normal_mode_parameters) {
        _cached_encoder_for_ARU_PPDU_normal_mode_parameters = function (
            value: ARU_PPDU_normal_mode_parameters        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.presentation_context_identifier_list ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () =>
                                      _encode_Presentation_context_identifier_list,
                                  $.BER
                              )(
                                  value.presentation_context_identifier_list,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.user_data === undefined
                            ? undefined
                            : _encode_User_data(value.user_data, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ARU_PPDU_normal_mode_parameters(value, elGetter);
}


/* eslint-enable */
