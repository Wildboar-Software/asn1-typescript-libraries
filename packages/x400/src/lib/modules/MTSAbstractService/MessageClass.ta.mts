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
    ContentTypes,
    _decode_ContentTypes,
    _encode_ContentTypes,
} from '../MTSAbstractService/ContentTypes.ta.mjs';
import {
    ContentLength,
    _decode_ContentLength,
    _encode_ContentLength,
} from '../MTSAbstractService/ContentLength.ta.mjs';
import {
    EncodedInformationTypesConstraints,
    _decode_EncodedInformationTypesConstraints,
    _encode_EncodedInformationTypesConstraints,
} from '../MTSAbstractService/EncodedInformationTypesConstraints.ta.mjs';
import {
    SecurityContext,
    _decode_SecurityContext,
    _encode_SecurityContext,
} from '../MTSAbstractService/SecurityContext.ta.mjs';
import {
    Priority,
    _decode_Priority,
    _encode_Priority,
} from '../MTSAbstractService/Priority.ta.mjs';
import {
    MessageClass_objects,
    _enum_for_MessageClass_objects,
    MessageClass_objects_both /* IMPORTED_LONG_ENUMERATION_ITEM */,
    _decode_MessageClass_objects,
    _encode_MessageClass_objects,
} from '../MTSAbstractService/MessageClass-objects.ta.mjs';
import {
    Restriction,
    _decode_Restriction,
    _encode_Restriction,
} from '../MTSAbstractService/Restriction.ta.mjs';
import {
    ExtensionField,
    _decode_ExtensionField,
    _encode_ExtensionField,
} from '../MTSAbstractService/ExtensionField.ta.mjs';
/**
 * @summary MessageClass
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageClass ::= SET {
 *   content-types                          [0]  ContentTypes OPTIONAL,
 *   maximum-content-length                 [1]  ContentLength OPTIONAL,
 *   encoded-information-types-constraints
 *     [2]  EncodedInformationTypesConstraints OPTIONAL,
 *   security-labels                        [3]  SecurityContext OPTIONAL,
 *   priority                               [4]  SET OF Priority OPTIONAL,
 *   objects
 *     [5]  ENUMERATED {messages(0), reports(1), both(2), ...
 *                      } DEFAULT both,
 *   applies-only-to                        [6]  SEQUENCE OF Restriction OPTIONAL, -- Not considered in the case of Reports
 *   extensions
 *     [7]  SET OF ExtensionField{{MessageClassExtensions}} DEFAULT {}
 * }
 * ```
 *
 * @class
 */
export class MessageClass {
    constructor(
        /**
         * @summary `content_types`.
         * @public
         * @readonly
         */
        readonly content_types: OPTIONAL<ContentTypes>,
        /**
         * @summary `maximum_content_length`.
         * @public
         * @readonly
         */
        readonly maximum_content_length: OPTIONAL<ContentLength>,
        /**
         * @summary `encoded_information_types_constraints`.
         * @public
         * @readonly
         */
        readonly encoded_information_types_constraints: OPTIONAL<EncodedInformationTypesConstraints>,
        /**
         * @summary `security_labels`.
         * @public
         * @readonly
         */
        readonly security_labels: OPTIONAL<SecurityContext>,
        /**
         * @summary `priority`.
         * @public
         * @readonly
         */
        readonly priority: OPTIONAL<Priority[]>,
        /**
         * @summary `objects`.
         * @public
         * @readonly
         */
        readonly objects: OPTIONAL<MessageClass_objects>,
        /**
         * @summary `applies_only_to`.
         * @public
         * @readonly
         */
        readonly applies_only_to: OPTIONAL<Restriction[]>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<ExtensionField[]>
    ) {}

    /**
     * @summary Restructures an object into a MessageClass
     * @description
     *
     * This takes an `object` and converts it to a `MessageClass`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MessageClass`.
     * @returns {MessageClass}
     */
    public static _from_object(
        _o: { [_K in keyof MessageClass]: MessageClass[_K] }
    ): MessageClass {
        return new MessageClass(
            _o.content_types,
            _o.maximum_content_length,
            _o.encoded_information_types_constraints,
            _o.security_labels,
            _o.priority,
            _o.objects,
            _o.applies_only_to,
            _o.extensions
        );
    }

    /**
     * @summary Getter that returns the default value for `objects`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_objects() {
        return MessageClass_objects_both;
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
    /**
     * @summary The enum used as the type of the component `objects`
     * @public
     * @static
     */

    public static _enum_for_objects = _enum_for_MessageClass_objects;
}

/**
 * @summary The Leading Root Component Types of MessageClass
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MessageClass: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'content-types',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'maximum-content-length',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'encoded-information-types-constraints',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'security-labels',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'priority',
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'objects',
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'applies-only-to',
        true,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'extensions',
        true,
        $.hasTag(_TagClass.context, 7),
        undefined,
        undefined
    ),
];

/**
 * @summary The Trailing Root Component Types of MessageClass
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MessageClass: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of MessageClass
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MessageClass: $.ComponentSpec[] = [];

let _cached_decoder_for_MessageClass: $.ASN1Decoder<MessageClass> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MessageClass
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageClass} The decoded data structure.
 */
export function _decode_MessageClass(el: _Element) {
    if (!_cached_decoder_for_MessageClass) {
        _cached_decoder_for_MessageClass = function (
            el: _Element
        ): MessageClass {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let content_types: OPTIONAL<ContentTypes>;
            let maximum_content_length: OPTIONAL<ContentLength>;
            let encoded_information_types_constraints: OPTIONAL<EncodedInformationTypesConstraints>;
            let security_labels: OPTIONAL<SecurityContext>;
            let priority: OPTIONAL<Priority[]>;
            let objects: OPTIONAL<MessageClass_objects> =
                MessageClass._default_value_for_objects;
            let applies_only_to: OPTIONAL<Restriction[]>;
            let extensions: OPTIONAL<ExtensionField[]> =
                MessageClass._default_value_for_extensions;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'content-types': (_el: _Element): void => {
                    content_types = $._decode_implicit<ContentTypes>(
                        () => _decode_ContentTypes
                    )(_el);
                },
                'maximum-content-length': (_el: _Element): void => {
                    maximum_content_length = $._decode_implicit<ContentLength>(
                        () => _decode_ContentLength
                    )(_el);
                },
                'encoded-information-types-constraints': (
                    _el: _Element
                ): void => {
                    encoded_information_types_constraints = $._decode_implicit<EncodedInformationTypesConstraints>(
                        () => _decode_EncodedInformationTypesConstraints
                    )(_el);
                },
                'security-labels': (_el: _Element): void => {
                    security_labels = $._decode_implicit<SecurityContext>(
                        () => _decode_SecurityContext
                    )(_el);
                },
                priority: (_el: _Element): void => {
                    priority = $._decode_implicit<Priority[]>(() =>
                        $._decodeSetOf<Priority>(() => _decode_Priority)
                    )(_el);
                },
                objects: (_el: _Element): void => {
                    objects = $._decode_implicit<MessageClass_objects>(
                        () => _decode_MessageClass_objects
                    )(_el);
                },
                'applies-only-to': (_el: _Element): void => {
                    applies_only_to = $._decode_implicit<Restriction[]>(() =>
                        $._decodeSequenceOf<Restriction>(
                            () => _decode_Restriction
                        )
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
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_MessageClass,
                _extension_additions_list_spec_for_MessageClass,
                _root_component_type_list_2_spec_for_MessageClass,
                undefined
            );
            return new MessageClass /* SET_CONSTRUCTOR_CALL */(
                content_types,
                maximum_content_length,
                encoded_information_types_constraints,
                security_labels,
                priority,
                objects,
                applies_only_to,
                extensions
            );
        };
    }
    return _cached_decoder_for_MessageClass(el);
}

let _cached_encoder_for_MessageClass: $.ASN1Encoder<MessageClass> | null = null;

/**
 * @summary Encodes a(n) MessageClass into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageClass, encoded as an ASN.1 Element.
 */
export function _encode_MessageClass(
    value: MessageClass,
    elGetter: $.ASN1Encoder<MessageClass>
) {
    if (!_cached_encoder_for_MessageClass) {
        _cached_encoder_for_MessageClass = function (
            value: MessageClass        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.content_types === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_ContentTypes,
                                  $.BER
                              )(value.content_types, $.BER),
                        /* IF_ABSENT  */ value.maximum_content_length ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_ContentLength,
                                  $.BER
                              )(value.maximum_content_length, $.BER),
                        /* IF_ABSENT  */ value.encoded_information_types_constraints ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () =>
                                      _encode_EncodedInformationTypesConstraints,
                                  $.BER
                              )(
                                  value.encoded_information_types_constraints,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.security_labels === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_SecurityContext,
                                  $.BER
                              )(value.security_labels, $.BER),
                        /* IF_ABSENT  */ value.priority === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  4,
                                  () =>
                                      $._encodeSetOf<Priority>(
                                          () => _encode_Priority,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.priority, $.BER),
                        /* IF_DEFAULT */ value.objects === undefined ||
                        $.deepEq(
                            value.objects,
                            MessageClass._default_value_for_objects
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  5,
                                  () => _encode_MessageClass_objects,
                                  $.BER
                              )(value.objects, $.BER),
                        /* IF_ABSENT  */ value.applies_only_to === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  6,
                                  () =>
                                      $._encodeSequenceOf<Restriction>(
                                          () => _encode_Restriction,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.applies_only_to, $.BER),
                        /* IF_DEFAULT */ value.extensions === undefined ||
                        $.deepEq(
                            value.extensions,
                            MessageClass._default_value_for_extensions
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  7,
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
    return _cached_encoder_for_MessageClass(value, elGetter);
}


/* eslint-enable */
