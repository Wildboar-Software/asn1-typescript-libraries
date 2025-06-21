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
    Waiting,
    _decode_Waiting,
    _encode_Waiting,
} from '../MTSAbstractService/Waiting.ta.mjs';
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
    WaitingMessages,
    _decode_WaitingMessages,
    _encode_WaitingMessages,
} from '../MTSAbstractService/WaitingMessages.ta.mjs';
import {
    ContentType,
    _decode_ContentType,
    _encode_ContentType,
} from '../MTSAbstractService/ContentType.ta.mjs';
import {
    EncodedInformationTypes,
    _decode_EncodedInformationTypes,
    _encode_EncodedInformationTypes,
} from '../MTSAbstractService/EncodedInformationTypes.ta.mjs';
import {
    _root_component_type_list_1_spec_for_Waiting,
    _root_component_type_list_2_spec_for_Waiting,
    _extension_additions_list_spec_for_Waiting,
} from '../MTSAbstractService/Waiting.ta.mjs';

/**
 * @summary DeliveryControlResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeliveryControlResult ::= SET {
 *   COMPONENTS OF Waiting,
 *   extensions
 *     [6]  SET OF ExtensionField{{DeliveryControlResultExtensions}} DEFAULT {}
 * }
 * ```
 *
 * @class
 */
export class DeliveryControlResult implements Waiting {
    constructor(
        /**
         * @summary `waiting_operations`.
         * @public
         * @readonly
         */
        readonly waiting_operations: OPTIONAL<Operations> /* REPLICATED_COMPONENT */,
        /**
         * @summary `waiting_messages`.
         * @public
         * @readonly
         */
        readonly waiting_messages: OPTIONAL<WaitingMessages> /* REPLICATED_COMPONENT */,
        /**
         * @summary `waiting_content_types`.
         * @public
         * @readonly
         */
        readonly waiting_content_types: OPTIONAL<
            ContentType[]
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `waiting_encoded_information_types`.
         * @public
         * @readonly
         */
        readonly waiting_encoded_information_types: OPTIONAL<EncodedInformationTypes> /* REPLICATED_COMPONENT */,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<ExtensionField[]>
    ) {}

    /**
     * @summary Restructures an object into a DeliveryControlResult
     * @description
     *
     * This takes an `object` and converts it to a `DeliveryControlResult`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeliveryControlResult`.
     * @returns {DeliveryControlResult}
     */
    public static _from_object(
        _o: { [_K in keyof DeliveryControlResult]: DeliveryControlResult[_K] }
    ): DeliveryControlResult {
        return new DeliveryControlResult(
            _o.waiting_operations,
            _o.waiting_messages,
            _o.waiting_content_types,
            _o.waiting_encoded_information_types,
            _o.extensions
        );
    }

    /**
     * @summary Getter that returns the default value for `waiting_operations`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_waiting_operations() {
        return new Uint8ClampedArray([]);
    }
    /**
     * @summary Getter that returns the default value for `waiting_messages`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_waiting_messages() {
        return new Uint8ClampedArray([]);
    }
    /**
     * @summary Getter that returns the default value for `waiting_content_types`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_waiting_content_types(): ContentType[] {
        return [];
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
 * @summary The Leading Root Component Types of DeliveryControlResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DeliveryControlResult: $.ComponentSpec[] = [
    ..._root_component_type_list_1_spec_for_Waiting,
    new $.ComponentSpec(
        'extensions',
        true,
        $.hasTag(_TagClass.context, 6)
    ),
];

/**
 * @summary The Trailing Root Component Types of DeliveryControlResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DeliveryControlResult: $.ComponentSpec[] = [
    ..._root_component_type_list_2_spec_for_Waiting,
];

/**
 * @summary The Extension Addition Component Types of DeliveryControlResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DeliveryControlResult: $.ComponentSpec[] = [
    ..._extension_additions_list_spec_for_Waiting,
];

let _cached_decoder_for_DeliveryControlResult: $.ASN1Decoder<DeliveryControlResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeliveryControlResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeliveryControlResult} The decoded data structure.
 */
export function _decode_DeliveryControlResult(el: _Element) {
    if (!_cached_decoder_for_DeliveryControlResult) {
        _cached_decoder_for_DeliveryControlResult = function (
            el: _Element
        ): DeliveryControlResult {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let waiting_operations: OPTIONAL<Operations> =
                DeliveryControlResult._default_value_for_waiting_operations;
            let waiting_messages: OPTIONAL<WaitingMessages> =
                DeliveryControlResult._default_value_for_waiting_messages;
            let waiting_content_types: OPTIONAL<ContentType[]> =
                DeliveryControlResult._default_value_for_waiting_content_types;
            let waiting_encoded_information_types: OPTIONAL<EncodedInformationTypes>;
            let extensions: OPTIONAL<ExtensionField[]> =
                DeliveryControlResult._default_value_for_extensions;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'waiting-operations': (_el: _Element): void => {
                    waiting_operations = $._decode_implicit<Operations>(
                        () => _decode_Operations
                    )(_el);
                },
                'waiting-messages': (_el: _Element): void => {
                    waiting_messages = $._decode_implicit<WaitingMessages>(
                        () => _decode_WaitingMessages
                    )(_el);
                },
                'waiting-content-types': (_el: _Element): void => {
                    waiting_content_types = $._decode_implicit<ContentType[]>(
                        () =>
                            $._decodeSetOf<ContentType>(
                                () => _decode_ContentType
                            )
                    )(_el);
                },
                'waiting-encoded-information-types': (_el: _Element): void => {
                    waiting_encoded_information_types = _decode_EncodedInformationTypes(
                        _el
                    );
                },
                extensions: (_el: _Element): void => {
                    extensions = $._decode_implicit<ExtensionField[]>(() =>
                        $._decodeSetOf<ExtensionField>(
                            () => _decode_ExtensionField
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DeliveryControlResult,
                _extension_additions_list_spec_for_DeliveryControlResult,
                _root_component_type_list_2_spec_for_DeliveryControlResult,
                undefined
            );
            return new DeliveryControlResult /* SET_CONSTRUCTOR_CALL */(
                waiting_operations,
                waiting_messages,
                waiting_content_types,
                waiting_encoded_information_types,
                extensions
            );
        };
    }
    return _cached_decoder_for_DeliveryControlResult(el);
}

let _cached_encoder_for_DeliveryControlResult: $.ASN1Encoder<DeliveryControlResult> | null = null;

/**
 * @summary Encodes a(n) DeliveryControlResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeliveryControlResult, encoded as an ASN.1 Element.
 */
export function _encode_DeliveryControlResult(
    value: DeliveryControlResult,
    elGetter: $.ASN1Encoder<DeliveryControlResult>
) {
    if (!_cached_encoder_for_DeliveryControlResult) {
        _cached_encoder_for_DeliveryControlResult = function (
            value: DeliveryControlResult        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.waiting_operations ===
                            undefined ||
                        $.deepEq(
                            value.waiting_operations,
                            DeliveryControlResult._default_value_for_waiting_operations
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_Operations,
                                  $.BER
                              )(value.waiting_operations, $.BER),
                        /* IF_DEFAULT */ value.waiting_messages === undefined ||
                        $.deepEq(
                            value.waiting_messages,
                            DeliveryControlResult._default_value_for_waiting_messages
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_WaitingMessages,
                                  $.BER
                              )(value.waiting_messages, $.BER),
                        /* IF_DEFAULT */ value.waiting_content_types ===
                            undefined ||
                        $.deepEq(
                            value.waiting_content_types,
                            DeliveryControlResult._default_value_for_waiting_content_types
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () =>
                                      $._encodeSetOf<ContentType>(
                                          () => _encode_ContentType,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.waiting_content_types, $.BER),
                        /* IF_ABSENT  */ value.waiting_encoded_information_types ===
                        undefined
                            ? undefined
                            : _encode_EncodedInformationTypes(
                                  value.waiting_encoded_information_types,
                                  $.BER
                              ),
                        /* IF_DEFAULT */ value.extensions === undefined ||
                        $.deepEq(
                            value.extensions,
                            DeliveryControlResult._default_value_for_extensions
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
    return _cached_encoder_for_DeliveryControlResult(value, elGetter);
}


/* eslint-enable */
