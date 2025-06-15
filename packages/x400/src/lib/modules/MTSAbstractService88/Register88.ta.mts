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
    EncodedInformationTypes,
    _decode_EncodedInformationTypes,
    _encode_EncodedInformationTypes,
} from '../MTSAbstractService/EncodedInformationTypes.ta.mjs';
import {
    ContentLength,
    _decode_ContentLength,
    _encode_ContentLength,
} from '../MTSAbstractService/ContentLength.ta.mjs';
import {
    DefaultDeliveryControls,
    _decode_DefaultDeliveryControls,
    _encode_DefaultDeliveryControls,
} from '../MTSAbstractService/DefaultDeliveryControls.ta.mjs';
import {
    ContentTypes,
    _decode_ContentTypes,
    _encode_ContentTypes,
} from '../MTSAbstractService/ContentTypes.ta.mjs';
import {
    LabelAndRedirection,
    _decode_LabelAndRedirection,
    _encode_LabelAndRedirection,
} from '../MTSAbstractService88/LabelAndRedirection.ta.mjs';
/**
 * @summary Register88
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Register88 ::= SET {
 *   user-name                              UserName OPTIONAL,
 *   user-address                           [0]  UserAddress OPTIONAL,
 *   deliverable-encoded-information-types  EncodedInformationTypes OPTIONAL,
 *   deliverable-maximum-content-length     [1] EXPLICIT ContentLength OPTIONAL,
 *   default-delivery-controls
 *     [2] EXPLICIT DefaultDeliveryControls OPTIONAL,
 *   deliverable-content-types              [3]  ContentTypes OPTIONAL,
 *   labels-and-redirections
 *     [4]  SET SIZE (1..ub-labels-and-redirections) OF LabelAndRedirection
 *       OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class Register88 {
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
         * @summary `deliverable_encoded_information_types`.
         * @public
         * @readonly
         */
        readonly deliverable_encoded_information_types: OPTIONAL<EncodedInformationTypes>,
        /**
         * @summary `deliverable_maximum_content_length`.
         * @public
         * @readonly
         */
        readonly deliverable_maximum_content_length: OPTIONAL<ContentLength>,
        /**
         * @summary `default_delivery_controls`.
         * @public
         * @readonly
         */
        readonly default_delivery_controls: OPTIONAL<DefaultDeliveryControls>,
        /**
         * @summary `deliverable_content_types`.
         * @public
         * @readonly
         */
        readonly deliverable_content_types: OPTIONAL<ContentTypes>,
        /**
         * @summary `labels_and_redirections`.
         * @public
         * @readonly
         */
        readonly labels_and_redirections: OPTIONAL<LabelAndRedirection[]>
    ) {}

    /**
     * @summary Restructures an object into a Register88
     * @description
     *
     * This takes an `object` and converts it to a `Register88`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Register88`.
     * @returns {Register88}
     */
    public static _from_object(
        _o: { [_K in keyof Register88]: Register88[_K] }
    ): Register88 {
        return new Register88(
            _o.user_name,
            _o.user_address,
            _o.deliverable_encoded_information_types,
            _o.deliverable_maximum_content_length,
            _o.default_delivery_controls,
            _o.deliverable_content_types,
            _o.labels_and_redirections
        );
    }
}

/**
 * @summary The Leading Root Component Types of Register88
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Register88: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'user-name',
        true,
        $.hasTag(_TagClass.application, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'user-address',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'deliverable-encoded-information-types',
        true,
        $.hasTag(_TagClass.application, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'deliverable-maximum-content-length',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'default-delivery-controls',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'deliverable-content-types',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'labels-and-redirections',
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
];

/**
 * @summary The Trailing Root Component Types of Register88
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Register88: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of Register88
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Register88: $.ComponentSpec[] = [];

let _cached_decoder_for_Register88: $.ASN1Decoder<Register88> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Register88
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Register88} The decoded data structure.
 */
export function _decode_Register88(el: _Element) {
    if (!_cached_decoder_for_Register88) {
        _cached_decoder_for_Register88 = function (el: _Element): Register88 {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let user_name: OPTIONAL<UserName>;
            let user_address: OPTIONAL<UserAddress>;
            let deliverable_encoded_information_types: OPTIONAL<EncodedInformationTypes>;
            let deliverable_maximum_content_length: OPTIONAL<ContentLength>;
            let default_delivery_controls: OPTIONAL<DefaultDeliveryControls>;
            let deliverable_content_types: OPTIONAL<ContentTypes>;
            let labels_and_redirections: OPTIONAL<LabelAndRedirection[]>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'user-name': (_el: _Element): void => {
                    user_name = _decode_UserName(_el);
                },
                'user-address': (_el: _Element): void => {
                    user_address = $._decode_explicit<UserAddress>(
                        () => _decode_UserAddress
                    )(_el);
                },
                'deliverable-encoded-information-types': (
                    _el: _Element
                ): void => {
                    deliverable_encoded_information_types = _decode_EncodedInformationTypes(
                        _el
                    );
                },
                'deliverable-maximum-content-length': (_el: _Element): void => {
                    deliverable_maximum_content_length = $._decode_explicit<ContentLength>(
                        () => _decode_ContentLength
                    )(_el);
                },
                'default-delivery-controls': (_el: _Element): void => {
                    default_delivery_controls = $._decode_explicit<DefaultDeliveryControls>(
                        () => _decode_DefaultDeliveryControls
                    )(_el);
                },
                'deliverable-content-types': (_el: _Element): void => {
                    deliverable_content_types = $._decode_implicit<ContentTypes>(
                        () => _decode_ContentTypes
                    )(_el);
                },
                'labels-and-redirections': (_el: _Element): void => {
                    labels_and_redirections = $._decode_implicit<
                        LabelAndRedirection[]
                    >(() =>
                        $._decodeSetOf<LabelAndRedirection>(
                            () => _decode_LabelAndRedirection
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Register88,
                _extension_additions_list_spec_for_Register88,
                _root_component_type_list_2_spec_for_Register88,
                undefined
            );
            return new Register88 /* SET_CONSTRUCTOR_CALL */(
                user_name,
                user_address,
                deliverable_encoded_information_types,
                deliverable_maximum_content_length,
                default_delivery_controls,
                deliverable_content_types,
                labels_and_redirections
            );
        };
    }
    return _cached_decoder_for_Register88(el);
}

let _cached_encoder_for_Register88: $.ASN1Encoder<Register88> | null = null;

/**
 * @summary Encodes a(n) Register88 into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Register88, encoded as an ASN.1 Element.
 */
export function _encode_Register88(
    value: Register88,
    elGetter: $.ASN1Encoder<Register88>
) {
    if (!_cached_encoder_for_Register88) {
        _cached_encoder_for_Register88 = function (
            value: Register88        ): _Element {
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
                        /* IF_ABSENT  */ value.deliverable_encoded_information_types ===
                        undefined
                            ? undefined
                            : _encode_EncodedInformationTypes(
                                  value.deliverable_encoded_information_types,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.deliverable_maximum_content_length ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_ContentLength,
                                  $.BER
                              )(
                                  value.deliverable_maximum_content_length,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.default_delivery_controls ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_DefaultDeliveryControls,
                                  $.BER
                              )(value.default_delivery_controls, $.BER),
                        /* IF_ABSENT  */ value.deliverable_content_types ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_ContentTypes,
                                  $.BER
                              )(value.deliverable_content_types, $.BER),
                        /* IF_ABSENT  */ value.labels_and_redirections ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  4,
                                  () =>
                                      $._encodeSetOf<LabelAndRedirection>(
                                          () => _encode_LabelAndRedirection,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.labels_and_redirections, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Register88(value, elGetter);
}


/* eslint-enable */
