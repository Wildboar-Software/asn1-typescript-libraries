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
    Presentation_context_addition_result_list,
    _decode_Presentation_context_addition_result_list,
    _encode_Presentation_context_addition_result_list,
} from '../ISO8823-PRESENTATION/Presentation-context-addition-result-list.ta.mjs';
import {
    Presentation_context_deletion_result_list,
    _decode_Presentation_context_deletion_result_list,
    _encode_Presentation_context_deletion_result_list,
} from '../ISO8823-PRESENTATION/Presentation-context-deletion-result-list.ta.mjs';
import {
    User_data,
    _decode_User_data,
    _encode_User_data,
} from '../ISO8823-PRESENTATION/User-data.ta.mjs';

/**
 * @summary ACA_PPDU
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ACA-PPDU ::= SEQUENCE {
 *   presentation-context-addition-result-list
 *     [0] IMPLICIT Presentation-context-addition-result-list OPTIONAL,
 *   presentation-context-deletion-result-list
 *     [1] IMPLICIT Presentation-context-deletion-result-list OPTIONAL,
 *   user-data                                  User-data OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ACA_PPDU {
    constructor(
        /**
         * @summary `presentation_context_addition_result_list`.
         * @public
         * @readonly
         */
        readonly presentation_context_addition_result_list: OPTIONAL<Presentation_context_addition_result_list>,
        /**
         * @summary `presentation_context_deletion_result_list`.
         * @public
         * @readonly
         */
        readonly presentation_context_deletion_result_list: OPTIONAL<Presentation_context_deletion_result_list>,
        /**
         * @summary `user_data`.
         * @public
         * @readonly
         */
        readonly user_data: OPTIONAL<User_data>
    ) {}

    /**
     * @summary Restructures an object into a ACA_PPDU
     * @description
     *
     * This takes an `object` and converts it to a `ACA_PPDU`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ACA_PPDU`.
     * @returns {ACA_PPDU}
     */
    public static _from_object(
        _o: { [_K in keyof ACA_PPDU]: ACA_PPDU[_K] }
    ): ACA_PPDU {
        return new ACA_PPDU(
            _o.presentation_context_addition_result_list,
            _o.presentation_context_deletion_result_list,
            _o.user_data
        );
    }
}


/**
 * @summary The Leading Root Component Types of ACA_PPDU
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ACA_PPDU: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'presentation-context-addition-result-list',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'presentation-context-deletion-result-list',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec('user-data', true, $.hasAnyTag),
];


/**
 * @summary The Trailing Root Component Types of ACA_PPDU
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ACA_PPDU: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ACA_PPDU
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ACA_PPDU: $.ComponentSpec[] = [];


let _cached_decoder_for_ACA_PPDU: $.ASN1Decoder<ACA_PPDU> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ACA_PPDU
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ACA_PPDU} The decoded data structure.
 */
export function _decode_ACA_PPDU(el: _Element) {
    if (!_cached_decoder_for_ACA_PPDU) {
        _cached_decoder_for_ACA_PPDU = function (el: _Element): ACA_PPDU {
            let presentation_context_addition_result_list: OPTIONAL<Presentation_context_addition_result_list>;
            let presentation_context_deletion_result_list: OPTIONAL<Presentation_context_deletion_result_list>;
            let user_data: OPTIONAL<User_data>;
            const callbacks: $.DecodingMap = {
                'presentation-context-addition-result-list': (
                    _el: _Element
                ): void => {
                    presentation_context_addition_result_list = $._decode_implicit<Presentation_context_addition_result_list>(
                        () => _decode_Presentation_context_addition_result_list
                    )(_el);
                },
                'presentation-context-deletion-result-list': (
                    _el: _Element
                ): void => {
                    presentation_context_deletion_result_list = $._decode_implicit<Presentation_context_deletion_result_list>(
                        () => _decode_Presentation_context_deletion_result_list
                    )(_el);
                },
                'user-data': (_el: _Element): void => {
                    user_data = _decode_User_data(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ACA_PPDU,
                _extension_additions_list_spec_for_ACA_PPDU,
                _root_component_type_list_2_spec_for_ACA_PPDU,
                undefined
            );
            return new ACA_PPDU (
                presentation_context_addition_result_list,
                presentation_context_deletion_result_list,
                user_data
            );
        };
    }
    return _cached_decoder_for_ACA_PPDU(el);
}


let _cached_encoder_for_ACA_PPDU: $.ASN1Encoder<ACA_PPDU> | null = null;


/**
 * @summary Encodes a(n) ACA_PPDU into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ACA_PPDU, encoded as an ASN.1 Element.
 */
export function _encode_ACA_PPDU(
    value: ACA_PPDU,
    elGetter: $.ASN1Encoder<ACA_PPDU>
) {
    if (!_cached_encoder_for_ACA_PPDU) {
        _cached_encoder_for_ACA_PPDU = function (
            value: ACA_PPDU        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.presentation_context_addition_result_list ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () =>
                                      _encode_Presentation_context_addition_result_list,
                                  $.BER
                              )(
                                  value.presentation_context_addition_result_list,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.presentation_context_deletion_result_list ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () =>
                                      _encode_Presentation_context_deletion_result_list,
                                  $.BER
                              )(
                                  value.presentation_context_deletion_result_list,
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
    return _cached_encoder_for_ACA_PPDU(value, elGetter);
}


/* eslint-enable */
