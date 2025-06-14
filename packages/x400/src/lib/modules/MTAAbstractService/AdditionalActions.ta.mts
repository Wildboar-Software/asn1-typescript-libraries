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
    DeferredTime,
    _decode_DeferredTime,
    _encode_DeferredTime,
} from '../MTAAbstractService/DeferredTime.ta.mjs';
import {
    ConvertedEncodedInformationTypes,
    _decode_ConvertedEncodedInformationTypes,
    _encode_ConvertedEncodedInformationTypes,
} from '../MTSAbstractService/ConvertedEncodedInformationTypes.ta.mjs';
import {
    OtherActions,
    _decode_OtherActions,
    _encode_OtherActions,
} from '../MTAAbstractService/OtherActions.ta.mjs';
/* START_OF_SYMBOL_DEFINITION AdditionalActions */
/**
 * @summary AdditionalActions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdditionalActions ::= SET {
 *   deferred-time                        [1]  DeferredTime OPTIONAL,
 *   converted-encoded-information-types
 *     ConvertedEncodedInformationTypes OPTIONAL,
 *   other-actions                        [3]  OtherActions DEFAULT {}
 * }
 * ```
 *
 * @class
 */
export class AdditionalActions {
    constructor(
        /**
         * @summary `deferred_time`.
         * @public
         * @readonly
         */
        readonly deferred_time: OPTIONAL<DeferredTime>,
        /**
         * @summary `converted_encoded_information_types`.
         * @public
         * @readonly
         */
        readonly converted_encoded_information_types: OPTIONAL<ConvertedEncodedInformationTypes>,
        /**
         * @summary `other_actions`.
         * @public
         * @readonly
         */
        readonly other_actions: OPTIONAL<OtherActions>
    ) {}

    /**
     * @summary Restructures an object into a AdditionalActions
     * @description
     *
     * This takes an `object` and converts it to a `AdditionalActions`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AdditionalActions`.
     * @returns {AdditionalActions}
     */
    public static _from_object(
        _o: { [_K in keyof AdditionalActions]: AdditionalActions[_K] }
    ): AdditionalActions {
        return new AdditionalActions(
            _o.deferred_time,
            _o.converted_encoded_information_types,
            _o.other_actions
        );
    }

    /**
     * @summary Getter that returns the default value for `other_actions`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_other_actions() {
        return new Uint8ClampedArray([]);
    }
}
/* END_OF_SYMBOL_DEFINITION AdditionalActions */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AdditionalActions */
/**
 * @summary The Leading Root Component Types of AdditionalActions
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AdditionalActions: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'deferred-time',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'converted-encoded-information-types',
        true,
        $.hasTag(_TagClass.application, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'other-actions',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AdditionalActions */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AdditionalActions */
/**
 * @summary The Trailing Root Component Types of AdditionalActions
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AdditionalActions: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AdditionalActions */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AdditionalActions */
/**
 * @summary The Extension Addition Component Types of AdditionalActions
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AdditionalActions: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AdditionalActions */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AdditionalActions */
let _cached_decoder_for_AdditionalActions: $.ASN1Decoder<AdditionalActions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AdditionalActions */

/* START_OF_SYMBOL_DEFINITION _decode_AdditionalActions */
/**
 * @summary Decodes an ASN.1 element into a(n) AdditionalActions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AdditionalActions} The decoded data structure.
 */
export function _decode_AdditionalActions(el: _Element) {
    if (!_cached_decoder_for_AdditionalActions) {
        _cached_decoder_for_AdditionalActions = function (
            el: _Element
        ): AdditionalActions {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let deferred_time: OPTIONAL<DeferredTime>;
            let converted_encoded_information_types: OPTIONAL<ConvertedEncodedInformationTypes>;
            let other_actions: OPTIONAL<OtherActions> =
                AdditionalActions._default_value_for_other_actions;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'deferred-time': (_el: _Element): void => {
                    deferred_time = $._decode_implicit<DeferredTime>(
                        () => _decode_DeferredTime
                    )(_el);
                },
                'converted-encoded-information-types': (
                    _el: _Element
                ): void => {
                    converted_encoded_information_types = _decode_ConvertedEncodedInformationTypes(
                        _el
                    );
                },
                'other-actions': (_el: _Element): void => {
                    other_actions = $._decode_implicit<OtherActions>(
                        () => _decode_OtherActions
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AdditionalActions,
                _extension_additions_list_spec_for_AdditionalActions,
                _root_component_type_list_2_spec_for_AdditionalActions,
                undefined
            );
            return new AdditionalActions /* SET_CONSTRUCTOR_CALL */(
                deferred_time,
                converted_encoded_information_types,
                other_actions
            );
        };
    }
    return _cached_decoder_for_AdditionalActions(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AdditionalActions */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AdditionalActions */
let _cached_encoder_for_AdditionalActions: $.ASN1Encoder<AdditionalActions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AdditionalActions */

/* START_OF_SYMBOL_DEFINITION _encode_AdditionalActions */
/**
 * @summary Encodes a(n) AdditionalActions into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdditionalActions, encoded as an ASN.1 Element.
 */
export function _encode_AdditionalActions(
    value: AdditionalActions,
    elGetter: $.ASN1Encoder<AdditionalActions>
) {
    if (!_cached_encoder_for_AdditionalActions) {
        _cached_encoder_for_AdditionalActions = function (
            value: AdditionalActions        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.deferred_time === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_DeferredTime,
                                  $.BER
                              )(value.deferred_time, $.BER),
                        /* IF_ABSENT  */ value.converted_encoded_information_types ===
                        undefined
                            ? undefined
                            : _encode_ConvertedEncodedInformationTypes(
                                  value.converted_encoded_information_types,
                                  $.BER
                              ),
                        /* IF_DEFAULT */ value.other_actions === undefined ||
                        $.deepEq(
                            value.other_actions,
                            AdditionalActions._default_value_for_other_actions
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_OtherActions,
                                  $.BER
                              )(value.other_actions, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AdditionalActions(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AdditionalActions */

/* eslint-enable */
