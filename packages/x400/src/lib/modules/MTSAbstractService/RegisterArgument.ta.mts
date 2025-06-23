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
    UserName,
    _decode_UserName,
    _encode_UserName,
} from '../MTSAbstractService/UserName.ta.mjs';
import {
    UserAddress,
    _decode_UserAddress,
    _encode_UserAddress,
} from '../MTSAbstractService/UserAddress.ta.mjs';
import {
    DeliverableClass,
    _decode_DeliverableClass,
    _encode_DeliverableClass,
} from '../MTSAbstractService/DeliverableClass.ta.mjs';
import {
    DefaultDeliveryControls,
    _decode_DefaultDeliveryControls,
    _encode_DefaultDeliveryControls,
} from '../MTSAbstractService/DefaultDeliveryControls.ta.mjs';
import {
    Redirections,
    _decode_Redirections,
    _encode_Redirections,
} from '../MTSAbstractService/Redirections.ta.mjs';
import {
    RestrictedDelivery,
    _decode_RestrictedDelivery,
    _encode_RestrictedDelivery,
} from '../MTSAbstractService/RestrictedDelivery.ta.mjs';
import {
    RegistrationTypes,
    _decode_RegistrationTypes,
    _encode_RegistrationTypes,
} from '../MTSAbstractService/RegistrationTypes.ta.mjs';
import {
    ExtensionField,
    _decode_ExtensionField,
    _encode_ExtensionField,
} from '../MTSAbstractService/ExtensionField.ta.mjs';
/**
 * @summary RegisterArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RegisterArgument ::= SET {
 *   user-name                  UserName OPTIONAL,
 *   user-address               [0]  UserAddress OPTIONAL,
 *   deliverable-class
 *     SET SIZE (1..ub-deliverable-class) OF DeliverableClass OPTIONAL,
 *   default-delivery-controls  [2] EXPLICIT DefaultDeliveryControls OPTIONAL,
 *   redirections               [3]  Redirections OPTIONAL,
 *   restricted-delivery        [4]  RestrictedDelivery OPTIONAL,
 *   retrieve-registrations     [5]  RegistrationTypes OPTIONAL,
 *   extensions
 *     [6]  SET OF ExtensionField{{RegisterExtensions}} DEFAULT {}
 * }
 * ```
 *
 * @class
 */
export class RegisterArgument {
    constructor(
        /**
         * @summary `user_name`.
         * @public
         * @readonly
         */
        readonly user_name: OPTIONAL<UserName>,
        /**
         * @summary `user_address`.
         * @public
         * @readonly
         */
        readonly user_address: OPTIONAL<UserAddress>,
        /**
         * @summary `deliverable_class`.
         * @public
         * @readonly
         */
        readonly deliverable_class: OPTIONAL<DeliverableClass[]>,
        /**
         * @summary `default_delivery_controls`.
         * @public
         * @readonly
         */
        readonly default_delivery_controls: OPTIONAL<DefaultDeliveryControls>,
        /**
         * @summary `redirections`.
         * @public
         * @readonly
         */
        readonly redirections: OPTIONAL<Redirections>,
        /**
         * @summary `restricted_delivery`.
         * @public
         * @readonly
         */
        readonly restricted_delivery: OPTIONAL<RestrictedDelivery>,
        /**
         * @summary `retrieve_registrations`.
         * @public
         * @readonly
         */
        readonly retrieve_registrations: OPTIONAL<RegistrationTypes>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<ExtensionField[]>
    ) {}

    /**
     * @summary Restructures an object into a RegisterArgument
     * @description
     *
     * This takes an `object` and converts it to a `RegisterArgument`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RegisterArgument`.
     * @returns {RegisterArgument}
     */
    public static _from_object(
        _o: { [_K in keyof RegisterArgument]: RegisterArgument[_K] }
    ): RegisterArgument {
        return new RegisterArgument(
            _o.user_name,
            _o.user_address,
            _o.deliverable_class,
            _o.default_delivery_controls,
            _o.redirections,
            _o.restricted_delivery,
            _o.retrieve_registrations,
            _o.extensions
        );
    }

    /**
     * @summary Getter that returns the default value for `extensions`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_extensions(): ExtensionField[] {
        return [];
    }
}

/**
 * @summary The Leading Root Component Types of RegisterArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RegisterArgument: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'user-name',
        true,
        $.hasTag(_TagClass.application, 0)
    ),
    new $.ComponentSpec(
        'user-address',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'deliverable-class',
        true,
        $.hasTag(_TagClass.universal, 17)
    ),
    new $.ComponentSpec(
        'default-delivery-controls',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'redirections',
        true,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        'restricted-delivery',
        true,
        $.hasTag(_TagClass.context, 4)
    ),
    new $.ComponentSpec(
        'retrieve-registrations',
        true,
        $.hasTag(_TagClass.context, 5)
    ),
    new $.ComponentSpec(
        'extensions',
        true,
        $.hasTag(_TagClass.context, 6)
    ),
];

/**
 * @summary The Trailing Root Component Types of RegisterArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RegisterArgument: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of RegisterArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RegisterArgument: $.ComponentSpec[] = [];

let _cached_decoder_for_RegisterArgument: $.ASN1Decoder<RegisterArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RegisterArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RegisterArgument} The decoded data structure.
 */
export function _decode_RegisterArgument(el: _Element) {
    if (!_cached_decoder_for_RegisterArgument) {
        _cached_decoder_for_RegisterArgument = function (
            el: _Element
        ): RegisterArgument {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let user_name: OPTIONAL<UserName>;
            let user_address: OPTIONAL<UserAddress>;
            let deliverable_class: OPTIONAL<DeliverableClass[]>;
            let default_delivery_controls: OPTIONAL<DefaultDeliveryControls>;
            let redirections: OPTIONAL<Redirections>;
            let restricted_delivery: OPTIONAL<RestrictedDelivery>;
            let retrieve_registrations: OPTIONAL<RegistrationTypes>;
            let extensions: OPTIONAL<ExtensionField[]> =
                RegisterArgument._default_value_for_extensions;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                'user-name': (_el: _Element): void => {
                    user_name = _decode_UserName(_el);
                },
                'user-address': (_el: _Element): void => {
                    user_address = $._decode_explicit<UserAddress>(
                        () => _decode_UserAddress
                    )(_el);
                },
                'deliverable-class': (_el: _Element): void => {
                    deliverable_class = $._decodeSetOf<DeliverableClass>(
                        () => _decode_DeliverableClass
                    )(_el);
                },
                'default-delivery-controls': (_el: _Element): void => {
                    default_delivery_controls = $._decode_explicit<DefaultDeliveryControls>(
                        () => _decode_DefaultDeliveryControls
                    )(_el);
                },
                redirections: (_el: _Element): void => {
                    redirections = $._decode_implicit<Redirections>(
                        () => _decode_Redirections
                    )(_el);
                },
                'restricted-delivery': (_el: _Element): void => {
                    restricted_delivery = $._decode_implicit<RestrictedDelivery>(
                        () => _decode_RestrictedDelivery
                    )(_el);
                },
                'retrieve-registrations': (_el: _Element): void => {
                    retrieve_registrations = $._decode_implicit<RegistrationTypes>(
                        () => _decode_RegistrationTypes
                    )(_el);
                },
                extensions: (_el: _Element): void => {
                    extensions = $._decode_implicit<ExtensionField[]>(() =>
                        $._decodeSetOf<ExtensionField>(
                            () => _decode_ExtensionField
                        )
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RegisterArgument,
                _extension_additions_list_spec_for_RegisterArgument,
                _root_component_type_list_2_spec_for_RegisterArgument,
                undefined
            );
            return new RegisterArgument /* SET_CONSTRUCTOR_CALL */(
                user_name,
                user_address,
                deliverable_class,
                default_delivery_controls,
                redirections,
                restricted_delivery,
                retrieve_registrations,
                extensions
            );
        };
    }
    return _cached_decoder_for_RegisterArgument(el);
}

let _cached_encoder_for_RegisterArgument: $.ASN1Encoder<RegisterArgument> | null = null;

/**
 * @summary Encodes a(n) RegisterArgument into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RegisterArgument, encoded as an ASN.1 Element.
 */
export function _encode_RegisterArgument(
    value: RegisterArgument,
    elGetter: $.ASN1Encoder<RegisterArgument>
) {
    if (!_cached_encoder_for_RegisterArgument) {
        _cached_encoder_for_RegisterArgument = function (
            value: RegisterArgument        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.user_name === undefined
                            ? undefined
                            : _encode_UserName(value.user_name, $.BER),
                        /* IF_ABSENT  */ value.user_address === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_UserAddress,
                                  $.BER
                              )(value.user_address, $.BER),
                        /* IF_ABSENT  */ value.deliverable_class === undefined
                            ? undefined
                            : $._encodeSetOf<DeliverableClass>(
                                  () => _encode_DeliverableClass,
                                  $.BER
                              )(value.deliverable_class, $.BER),
                        /* IF_ABSENT  */ value.default_delivery_controls ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_DefaultDeliveryControls,
                                  $.BER
                              )(value.default_delivery_controls, $.BER),
                        /* IF_ABSENT  */ value.redirections === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_Redirections,
                                  $.BER
                              )(value.redirections, $.BER),
                        /* IF_ABSENT  */ value.restricted_delivery === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  4,
                                  () => _encode_RestrictedDelivery,
                                  $.BER
                              )(value.restricted_delivery, $.BER),
                        /* IF_ABSENT  */ value.retrieve_registrations ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  5,
                                  () => _encode_RegistrationTypes,
                                  $.BER
                              )(value.retrieve_registrations, $.BER),
                        /* IF_DEFAULT */ value.extensions === undefined ||
                        $.deepEq(
                            value.extensions,
                            RegisterArgument._default_value_for_extensions
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  6,
                                  () =>
                                      $._encodeSetOf<ExtensionField>(
                                          () => _encode_ExtensionField,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.extensions, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_RegisterArgument(value, elGetter);
}


/* eslint-enable */
