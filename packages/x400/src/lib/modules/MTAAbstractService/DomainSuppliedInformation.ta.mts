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
import * as $ from '@wildboar/asn1/functional';
import {
    ArrivalTime,
    _decode_ArrivalTime,
    _encode_ArrivalTime,
} from '../MTAAbstractService/ArrivalTime.ta.mjs';
import {
    RoutingAction,
    _enum_for_RoutingAction,
    _decode_RoutingAction,
    _encode_RoutingAction,
} from '../MTAAbstractService/RoutingAction.ta.mjs';
import {
    GlobalDomainIdentifier,
    _decode_GlobalDomainIdentifier,
    _encode_GlobalDomainIdentifier,
} from '../MTSAbstractService/GlobalDomainIdentifier.ta.mjs';
import {
    AdditionalActions,
    _decode_AdditionalActions,
    _encode_AdditionalActions,
} from '../MTAAbstractService/AdditionalActions.ta.mjs';
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
import {
    _root_component_type_list_1_spec_for_AdditionalActions,
    _root_component_type_list_2_spec_for_AdditionalActions,
    _extension_additions_list_spec_for_AdditionalActions,
} from '../MTAAbstractService/AdditionalActions.ta.mjs';

/**
 * @summary DomainSuppliedInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DomainSuppliedInformation ::= SET {
 *   arrival-time      [0]  ArrivalTime,
 *   routing-action    [2]  RoutingAction,
 *   attempted-domain  GlobalDomainIdentifier OPTIONAL,
 *   COMPONENTS OF AdditionalActions
 * }
 * ```
 *
 * @class
 */
export class DomainSuppliedInformation implements AdditionalActions {
    constructor(
        /**
         * @summary `arrival_time`.
         * @public
         * @readonly
         */
        readonly arrival_time: ArrivalTime,
        /**
         * @summary `routing_action`.
         * @public
         * @readonly
         */
        readonly routing_action: RoutingAction,
        /**
         * @summary `attempted_domain`.
         * @public
         * @readonly
         */
        readonly attempted_domain: OPTIONAL<GlobalDomainIdentifier>,
        /**
         * @summary `deferred_time`.
         * @public
         * @readonly
         */
        readonly deferred_time: OPTIONAL<DeferredTime> /* REPLICATED_COMPONENT */,
        /**
         * @summary `converted_encoded_information_types`.
         * @public
         * @readonly
         */
        readonly converted_encoded_information_types: OPTIONAL<ConvertedEncodedInformationTypes> /* REPLICATED_COMPONENT */,
        /**
         * @summary `other_actions`.
         * @public
         * @readonly
         */
        readonly other_actions: OPTIONAL<OtherActions> /* REPLICATED_COMPONENT */
    ) {}

    /**
     * @summary Restructures an object into a DomainSuppliedInformation
     * @description
     *
     * This takes an `object` and converts it to a `DomainSuppliedInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DomainSuppliedInformation`.
     * @returns {DomainSuppliedInformation}
     */
    public static _from_object(
        _o: {
            [_K in keyof DomainSuppliedInformation]: DomainSuppliedInformation[_K];
        }
    ): DomainSuppliedInformation {
        return new DomainSuppliedInformation(
            _o.arrival_time,
            _o.routing_action,
            _o.attempted_domain,
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
    /**
     * @summary The enum used as the type of the component `routing_action`
     * @public
     * @static
     */

    public static _enum_for_routing_action = _enum_for_RoutingAction;
}

/**
 * @summary The Leading Root Component Types of DomainSuppliedInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DomainSuppliedInformation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'arrival-time',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'routing-action',
        false,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'attempted-domain',
        true,
        $.hasTag(_TagClass.application, 3)
    ),
    ..._root_component_type_list_1_spec_for_AdditionalActions,
];

/**
 * @summary The Trailing Root Component Types of DomainSuppliedInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DomainSuppliedInformation: $.ComponentSpec[] = [
    ..._root_component_type_list_2_spec_for_AdditionalActions,
];

/**
 * @summary The Extension Addition Component Types of DomainSuppliedInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DomainSuppliedInformation: $.ComponentSpec[] = [
    ..._extension_additions_list_spec_for_AdditionalActions,
];

let _cached_decoder_for_DomainSuppliedInformation: $.ASN1Decoder<DomainSuppliedInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DomainSuppliedInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DomainSuppliedInformation} The decoded data structure.
 */
export function _decode_DomainSuppliedInformation(el: _Element) {
    if (!_cached_decoder_for_DomainSuppliedInformation) {
        _cached_decoder_for_DomainSuppliedInformation = function (
            el: _Element
        ): DomainSuppliedInformation {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let arrival_time!: ArrivalTime;
            let routing_action!: RoutingAction;
            let attempted_domain: OPTIONAL<GlobalDomainIdentifier>;
            let deferred_time: OPTIONAL<DeferredTime>;
            let converted_encoded_information_types: OPTIONAL<ConvertedEncodedInformationTypes>;
            let other_actions: OPTIONAL<OtherActions> =
                DomainSuppliedInformation._default_value_for_other_actions;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'arrival-time': (_el: _Element): void => {
                    arrival_time = $._decode_implicit<ArrivalTime>(
                        () => _decode_ArrivalTime
                    )(_el);
                },
                'routing-action': (_el: _Element): void => {
                    routing_action = $._decode_implicit<RoutingAction>(
                        () => _decode_RoutingAction
                    )(_el);
                },
                'attempted-domain': (_el: _Element): void => {
                    attempted_domain = _decode_GlobalDomainIdentifier(_el);
                },
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
                _root_component_type_list_1_spec_for_DomainSuppliedInformation,
                _extension_additions_list_spec_for_DomainSuppliedInformation,
                _root_component_type_list_2_spec_for_DomainSuppliedInformation,
                undefined
            );
            return new DomainSuppliedInformation /* SET_CONSTRUCTOR_CALL */(
                arrival_time,
                routing_action,
                attempted_domain,
                deferred_time,
                converted_encoded_information_types,
                other_actions
            );
        };
    }
    return _cached_decoder_for_DomainSuppliedInformation(el);
}

let _cached_encoder_for_DomainSuppliedInformation: $.ASN1Encoder<DomainSuppliedInformation> | null = null;

/**
 * @summary Encodes a(n) DomainSuppliedInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DomainSuppliedInformation, encoded as an ASN.1 Element.
 */
export function _encode_DomainSuppliedInformation(
    value: DomainSuppliedInformation,
    elGetter: $.ASN1Encoder<DomainSuppliedInformation>
) {
    if (!_cached_encoder_for_DomainSuppliedInformation) {
        _cached_encoder_for_DomainSuppliedInformation = function (
            value: DomainSuppliedInformation        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_ArrivalTime,
                            $.BER
                        )(value.arrival_time, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            2,
                            () => _encode_RoutingAction,
                            $.BER
                        )(value.routing_action, $.BER),
                        /* IF_ABSENT  */ value.attempted_domain === undefined
                            ? undefined
                            : _encode_GlobalDomainIdentifier(
                                  value.attempted_domain,
                                  $.BER
                              ),
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
                            DomainSuppliedInformation._default_value_for_other_actions
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
    return _cached_encoder_for_DomainSuppliedInformation(value, elGetter);
}


/* eslint-enable */
