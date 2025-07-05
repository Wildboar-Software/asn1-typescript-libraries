/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
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
    DeliveryControls,
    _decode_DeliveryControls,
    _encode_DeliveryControls,
} from '../MTSAbstractService/DeliveryControls.ta.mjs';
import {
    ExtensionField,
    _decode_ExtensionField,
    _encode_ExtensionField,
} from '../MTSAbstractService/ExtensionField.ta.mjs';
import {
    Operations,
    _decode_Operations,
    _encode_Operations,
} from '../MTSAbstractService/Operations.ta.mjs';
import {
    ContentLength,
    _decode_ContentLength,
    _encode_ContentLength,
} from '../MTSAbstractService/ContentLength.ta.mjs';
import {
    Priority,
    _decode_Priority,
    _encode_Priority,
} from '../MTSAbstractService/Priority.ta.mjs';
import {
    ContentTypes,
    _decode_ContentTypes,
    _encode_ContentTypes,
} from '../MTSAbstractService/ContentTypes.ta.mjs';
import {
    PermissibleEncodedInformationTypes,
    _decode_PermissibleEncodedInformationTypes,
    _encode_PermissibleEncodedInformationTypes,
} from '../MTSAbstractService/PermissibleEncodedInformationTypes.ta.mjs';
import {
    SecurityContext,
    _decode_SecurityContext,
    _encode_SecurityContext,
} from '../MTSAbstractService/SecurityContext.ta.mjs';
import {
    _root_component_type_list_1_spec_for_Controls,
    _root_component_type_list_2_spec_for_Controls,
    _extension_additions_list_spec_for_Controls,
} from '../MTSAbstractService/Controls.ta.mjs';

/**
 * @summary DeliveryControlArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeliveryControlArgument ::= SET {
 *   COMPONENTS OF DeliveryControls,
 *   extensions
 *     [6]  SET OF ExtensionField{{DeliveryControlExtensions}} DEFAULT {}
 * }
 * ```
 *
 */
export class DeliveryControlArgument implements DeliveryControls {
    constructor(
        /**
         * @summary `restrict`.
         * @public
         * @readonly
         */
        readonly restrict: OPTIONAL<BOOLEAN> /* REPLICATED_COMPONENT */,
        /**
         * @summary `permissible_operations`.
         * @public
         * @readonly
         */
        readonly permissible_operations: OPTIONAL<Operations> /* REPLICATED_COMPONENT */,
        /**
         * @summary `permissible_maximum_content_length`.
         * @public
         * @readonly
         */
        readonly permissible_maximum_content_length: OPTIONAL<ContentLength> /* REPLICATED_COMPONENT */,
        /**
         * @summary `permissible_lowest_priority`.
         * @public
         * @readonly
         */
        readonly permissible_lowest_priority: OPTIONAL<Priority> /* REPLICATED_COMPONENT */,
        /**
         * @summary `permissible_content_types`.
         * @public
         * @readonly
         */
        readonly permissible_content_types: OPTIONAL<ContentTypes> /* REPLICATED_COMPONENT */,
        /**
         * @summary `permissible_encoded_information_types`.
         * @public
         * @readonly
         */
        readonly permissible_encoded_information_types: OPTIONAL<PermissibleEncodedInformationTypes> /* REPLICATED_COMPONENT */,
        /**
         * @summary `permissible_security_context`.
         * @public
         * @readonly
         */
        readonly permissible_security_context: OPTIONAL<SecurityContext> /* REPLICATED_COMPONENT */,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<ExtensionField[]>
    ) {}

    /**
     * @summary Restructures an object into a DeliveryControlArgument
     * @description
     *
     * This takes an `object` and converts it to a `DeliveryControlArgument`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeliveryControlArgument`.
     * @returns {DeliveryControlArgument}
     */
    public static _from_object(
        _o: {
            [_K in keyof DeliveryControlArgument]: DeliveryControlArgument[_K];
        }
    ): DeliveryControlArgument {
        return new DeliveryControlArgument(
            _o.restrict,
            _o.permissible_operations,
            _o.permissible_maximum_content_length,
            _o.permissible_lowest_priority,
            _o.permissible_content_types,
            _o.permissible_encoded_information_types,
            _o.permissible_security_context,
            _o.extensions
        );
    }

    /**
     * @summary Getter that returns the default value for `restrict`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_restrict(): BOOLEAN {
        return false;
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
 * @summary The Leading Root Component Types of DeliveryControlArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DeliveryControlArgument: $.ComponentSpec[] = [
    ..._root_component_type_list_1_spec_for_Controls,
    new $.ComponentSpec(
        'extensions',
        true,
        $.hasTag(_TagClass.context, 6)
    ),
];

/**
 * @summary The Trailing Root Component Types of DeliveryControlArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DeliveryControlArgument: $.ComponentSpec[] = [
    ..._root_component_type_list_2_spec_for_Controls,
];

/**
 * @summary The Extension Addition Component Types of DeliveryControlArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DeliveryControlArgument: $.ComponentSpec[] = [
    ..._extension_additions_list_spec_for_Controls,
];

let _cached_decoder_for_DeliveryControlArgument: $.ASN1Decoder<DeliveryControlArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeliveryControlArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeliveryControlArgument} The decoded data structure.
 */
export function _decode_DeliveryControlArgument(el: _Element): DeliveryControlArgument {
    if (!_cached_decoder_for_DeliveryControlArgument) {
        _cached_decoder_for_DeliveryControlArgument = function (
            el: _Element
        ): DeliveryControlArgument {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let restrict: OPTIONAL<BOOLEAN> =
                DeliveryControlArgument._default_value_for_restrict;
            let permissible_operations: OPTIONAL<Operations>;
            let permissible_maximum_content_length: OPTIONAL<ContentLength>;
            let permissible_lowest_priority: OPTIONAL<Priority>;
            let permissible_content_types: OPTIONAL<ContentTypes>;
            let permissible_encoded_information_types: OPTIONAL<PermissibleEncodedInformationTypes>;
            let permissible_security_context: OPTIONAL<SecurityContext>;
            let extensions: OPTIONAL<ExtensionField[]> =
                DeliveryControlArgument._default_value_for_extensions;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                restrict: (_el: _Element): void => {
                    restrict = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                'permissible-operations': (_el: _Element): void => {
                    permissible_operations = $._decode_implicit<Operations>(
                        () => _decode_Operations
                    )(_el);
                },
                'permissible-maximum-content-length': (_el: _Element): void => {
                    permissible_maximum_content_length = $._decode_implicit<ContentLength>(
                        () => _decode_ContentLength
                    )(_el);
                },
                'permissible-lowest-priority': (_el: _Element): void => {
                    permissible_lowest_priority = _decode_Priority(_el);
                },
                'permissible-content-types': (_el: _Element): void => {
                    permissible_content_types = $._decode_implicit<ContentTypes>(
                        () => _decode_ContentTypes
                    )(_el);
                },
                'permissible-encoded-information-types': (
                    _el: _Element
                ): void => {
                    permissible_encoded_information_types = _decode_PermissibleEncodedInformationTypes(
                        _el
                    );
                },
                'permissible-security-context': (_el: _Element): void => {
                    permissible_security_context = $._decode_implicit<SecurityContext>(
                        () => _decode_SecurityContext
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
                _root_component_type_list_1_spec_for_DeliveryControlArgument,
                _extension_additions_list_spec_for_DeliveryControlArgument,
                _root_component_type_list_2_spec_for_DeliveryControlArgument,
                undefined
            );
            return new DeliveryControlArgument /* SET_CONSTRUCTOR_CALL */(
                restrict,
                permissible_operations,
                permissible_maximum_content_length,
                permissible_lowest_priority,
                permissible_content_types,
                permissible_encoded_information_types,
                permissible_security_context,
                extensions
            );
        };
    }
    return _cached_decoder_for_DeliveryControlArgument(el);
}

let _cached_encoder_for_DeliveryControlArgument: $.ASN1Encoder<DeliveryControlArgument> | null = null;

/**
 * @summary Encodes a(n) DeliveryControlArgument into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeliveryControlArgument, encoded as an ASN.1 Element.
 */
export function _encode_DeliveryControlArgument(
    value: DeliveryControlArgument,
    elGetter: $.ASN1Encoder<DeliveryControlArgument>
): _Element {
    if (!_cached_encoder_for_DeliveryControlArgument) {
        _cached_encoder_for_DeliveryControlArgument = function (
            value: DeliveryControlArgument        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.restrict === undefined ||
                        $.deepEq(
                            value.restrict,
                            DeliveryControlArgument._default_value_for_restrict
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => $._encodeBoolean,
                                  $.BER
                              )(value.restrict, $.BER),
                        /* IF_ABSENT  */ value.permissible_operations ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_Operations,
                                  $.BER
                              )(value.permissible_operations, $.BER),
                        /* IF_ABSENT  */ value.permissible_maximum_content_length ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_ContentLength,
                                  $.BER
                              )(
                                  value.permissible_maximum_content_length,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.permissible_lowest_priority ===
                        undefined
                            ? undefined
                            : _encode_Priority(
                                  value.permissible_lowest_priority,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.permissible_content_types ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  4,
                                  () => _encode_ContentTypes,
                                  $.BER
                              )(value.permissible_content_types, $.BER),
                        /* IF_ABSENT  */ value.permissible_encoded_information_types ===
                        undefined
                            ? undefined
                            : _encode_PermissibleEncodedInformationTypes(
                                  value.permissible_encoded_information_types,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.permissible_security_context ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  5,
                                  () => _encode_SecurityContext,
                                  $.BER
                              )(value.permissible_security_context, $.BER),
                        /* IF_DEFAULT */ value.extensions === undefined ||
                        $.deepEq(
                            value.extensions,
                            DeliveryControlArgument._default_value_for_extensions
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
    return _cached_encoder_for_DeliveryControlArgument(value, elGetter);
}


/* eslint-enable */
