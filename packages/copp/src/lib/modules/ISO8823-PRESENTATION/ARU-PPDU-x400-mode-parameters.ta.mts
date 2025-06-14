/* eslint-disable */
import {
    OPTIONAL,
    BIT_STRING,
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
    _decode_RTABapdu,
    _encode_RTABapdu,
} from '@wildboar/rtse/src/lib/modules/Reliable-Transfer-APDU/RTABapdu.ta.mjs';
import {
    AbortReason,
    _decode_AbortReason,
    _encode_AbortReason,
} from '@wildboar/rtse/src/lib/modules/Reliable-Transfer-APDU/AbortReason.ta.mjs';
/* START_OF_SYMBOL_DEFINITION ARU_PPDU_x400_mode_parameters */
/**
 * @summary ARU_PPDU_x400_mode_parameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ARU-PPDU-x400-mode-parameters ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class ARU_PPDU_x400_mode_parameters {
    constructor(
        /**
         * @summary `abortReason`.
         * @public
         * @readonly
         */
        readonly abortReason: OPTIONAL<AbortReason> /* REPLICATED_COMPONENT */,
        /**
         * @summary `reflectedParameter`.
         * @public
         * @readonly
         */
        readonly reflectedParameter: OPTIONAL<BIT_STRING> /* REPLICATED_COMPONENT */,
        /**
         * @summary `userdataAB`.
         * @public
         * @readonly
         */
        readonly userdataAB: OPTIONAL<_Element> /* REPLICATED_COMPONENT */
    ) {}

    /**
     * @summary Restructures an object into a ARU_PPDU_x400_mode_parameters
     * @description
     *
     * This takes an `object` and converts it to a `ARU_PPDU_x400_mode_parameters`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ARU_PPDU_x400_mode_parameters`.
     * @returns {ARU_PPDU_x400_mode_parameters}
     */
    public static _from_object(
        _o: {
            [_K in keyof ARU_PPDU_x400_mode_parameters]: ARU_PPDU_x400_mode_parameters[_K];
        }
    ): ARU_PPDU_x400_mode_parameters {
        return new ARU_PPDU_x400_mode_parameters(
            _o.abortReason,
            _o.reflectedParameter,
            _o.userdataAB
        );
    }
}
/* END_OF_SYMBOL_DEFINITION ARU_PPDU_x400_mode_parameters */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ARU_PPDU_x400_mode_parameters */
/**
 * @summary The Leading Root Component Types of ARU_PPDU_x400_mode_parameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ARU_PPDU_x400_mode_parameters: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'abortReason',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'reflectedParameter',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'userdataAB',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ARU_PPDU_x400_mode_parameters */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ARU_PPDU_x400_mode_parameters */
/**
 * @summary The Trailing Root Component Types of ARU_PPDU_x400_mode_parameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ARU_PPDU_x400_mode_parameters: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ARU_PPDU_x400_mode_parameters */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ARU_PPDU_x400_mode_parameters */
/**
 * @summary The Extension Addition Component Types of ARU_PPDU_x400_mode_parameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ARU_PPDU_x400_mode_parameters: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ARU_PPDU_x400_mode_parameters */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ARU_PPDU_x400_mode_parameters */
let _cached_decoder_for_ARU_PPDU_x400_mode_parameters: $.ASN1Decoder<ARU_PPDU_x400_mode_parameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ARU_PPDU_x400_mode_parameters */

/* START_OF_SYMBOL_DEFINITION _decode_ARU_PPDU_x400_mode_parameters */
/**
 * @summary Decodes an ASN.1 element into a(n) ARU_PPDU_x400_mode_parameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ARU_PPDU_x400_mode_parameters} The decoded data structure.
 */
export function _decode_ARU_PPDU_x400_mode_parameters(el: _Element) {
    if (!_cached_decoder_for_ARU_PPDU_x400_mode_parameters) {
        _cached_decoder_for_ARU_PPDU_x400_mode_parameters = function (
            el: _Element
        ): ARU_PPDU_x400_mode_parameters {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let abortReason: OPTIONAL<AbortReason>;
            let reflectedParameter: OPTIONAL<BIT_STRING>;
            let userdataAB: OPTIONAL<_Element>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                abortReason: (_el: _Element): void => {
                    abortReason = $._decode_implicit<AbortReason>(
                        () => _decode_AbortReason
                    )(_el);
                },
                reflectedParameter: (_el: _Element): void => {
                    reflectedParameter = $._decode_implicit<BIT_STRING>(
                        () => $._decodeBitString
                    )(_el);
                },
                userdataAB: (_el: _Element): void => {
                    userdataAB = $._decode_explicit<_Element>(
                        () => $._decodeAny
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ARU_PPDU_x400_mode_parameters,
                _extension_additions_list_spec_for_ARU_PPDU_x400_mode_parameters,
                _root_component_type_list_2_spec_for_ARU_PPDU_x400_mode_parameters,
                undefined
            );
            return new ARU_PPDU_x400_mode_parameters /* SET_CONSTRUCTOR_CALL */(
                abortReason,
                reflectedParameter,
                userdataAB
            );
        };
    }
    return _cached_decoder_for_ARU_PPDU_x400_mode_parameters(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ARU_PPDU_x400_mode_parameters */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ARU_PPDU_x400_mode_parameters */
let _cached_encoder_for_ARU_PPDU_x400_mode_parameters: $.ASN1Encoder<ARU_PPDU_x400_mode_parameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ARU_PPDU_x400_mode_parameters */

/* START_OF_SYMBOL_DEFINITION _encode_ARU_PPDU_x400_mode_parameters */
/**
 * @summary Encodes a(n) ARU_PPDU_x400_mode_parameters into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ARU_PPDU_x400_mode_parameters, encoded as an ASN.1 Element.
 */
export function _encode_ARU_PPDU_x400_mode_parameters(
    value: ARU_PPDU_x400_mode_parameters,
    elGetter: $.ASN1Encoder<ARU_PPDU_x400_mode_parameters>
) {
    if (!_cached_encoder_for_ARU_PPDU_x400_mode_parameters) {
        _cached_encoder_for_ARU_PPDU_x400_mode_parameters = function (
            value: ARU_PPDU_x400_mode_parameters        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.abortReason === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_AbortReason,
                                  $.BER
                              )(value.abortReason, $.BER),
                        /* IF_ABSENT  */ value.reflectedParameter === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeBitString,
                                  $.BER
                              )(value.reflectedParameter, $.BER),
                        /* IF_ABSENT  */ value.userdataAB === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => $._encodeAny,
                                  $.BER
                              )(value.userdataAB, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ARU_PPDU_x400_mode_parameters(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ARU_PPDU_x400_mode_parameters */

/* eslint-enable */
