/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import {
    DeliveryControls,
    _decode_DeliveryControls,
    _encode_DeliveryControls,
} from '../MTSAbstractService/DeliveryControls.ta';
export {
    DeliveryControls,
    _decode_DeliveryControls,
    _encode_DeliveryControls,
} from '../MTSAbstractService/DeliveryControls.ta';
import {
    ExtensionField,
    _decode_ExtensionField,
    _encode_ExtensionField,
} from '../MTSAbstractService/ExtensionField.ta';
export {
    ExtensionField,
    _decode_ExtensionField,
    _encode_ExtensionField,
} from '../MTSAbstractService/ExtensionField.ta';
import {
    Operations,
    Operations_probe_submission_or_report_delivery /* IMPORTED_LONG_NAMED_BIT */,
    probe_submission_or_report_delivery /* IMPORTED_SHORT_NAMED_BIT */,
    Operations_message_submission_or_message_delivery /* IMPORTED_LONG_NAMED_BIT */,
    message_submission_or_message_delivery /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_Operations,
    _encode_Operations,
} from '../MTSAbstractService/Operations.ta';
export {
    Operations,
    Operations_probe_submission_or_report_delivery /* IMPORTED_LONG_NAMED_BIT */,
    probe_submission_or_report_delivery /* IMPORTED_SHORT_NAMED_BIT */,
    Operations_message_submission_or_message_delivery /* IMPORTED_LONG_NAMED_BIT */,
    message_submission_or_message_delivery /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_Operations,
    _encode_Operations,
} from '../MTSAbstractService/Operations.ta';
import {
    ContentLength,
    _decode_ContentLength,
    _encode_ContentLength,
} from '../MTSAbstractService/ContentLength.ta';
export {
    ContentLength,
    _decode_ContentLength,
    _encode_ContentLength,
} from '../MTSAbstractService/ContentLength.ta';
import {
    Priority,
    _decode_Priority,
    _encode_Priority,
} from '../MTSAbstractService/Priority.ta';
export {
    Priority,
    _decode_Priority,
    _encode_Priority,
} from '../MTSAbstractService/Priority.ta';
import {
    ContentTypes,
    _decode_ContentTypes,
    _encode_ContentTypes,
} from '../MTSAbstractService/ContentTypes.ta';
export {
    ContentTypes,
    _decode_ContentTypes,
    _encode_ContentTypes,
} from '../MTSAbstractService/ContentTypes.ta';
import {
    PermissibleEncodedInformationTypes,
    _decode_PermissibleEncodedInformationTypes,
    _encode_PermissibleEncodedInformationTypes,
} from '../MTSAbstractService/PermissibleEncodedInformationTypes.ta';
export {
    PermissibleEncodedInformationTypes,
    _decode_PermissibleEncodedInformationTypes,
    _encode_PermissibleEncodedInformationTypes,
} from '../MTSAbstractService/PermissibleEncodedInformationTypes.ta';
import {
    SecurityContext,
    _decode_SecurityContext,
    _encode_SecurityContext,
} from '../MTSAbstractService/SecurityContext.ta';
export {
    SecurityContext,
    _decode_SecurityContext,
    _encode_SecurityContext,
} from '../MTSAbstractService/SecurityContext.ta';

/* START_OF_SYMBOL_DEFINITION DeliveryControlArgument */
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
 * @class
 */
export class DeliveryControlArgument {
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
    public static get _default_value_for_restrict() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `extensions`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_extensions() {
        return [];
    }
}
/* END_OF_SYMBOL_DEFINITION DeliveryControlArgument */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DeliveryControlArgument */
/**
 * @summary The Leading Root Component Types of DeliveryControlArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DeliveryControlArgument: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'restrict',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'permissible-operations',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'permissible-maximum-content-length',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'permissible-lowest-priority',
        true,
        $.hasTag(_TagClass.application, 7),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'permissible-content-types',
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'permissible-encoded-information-types',
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'permissible-security-context',
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'extensions',
        true,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DeliveryControlArgument */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DeliveryControlArgument */
/**
 * @summary The Trailing Root Component Types of DeliveryControlArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DeliveryControlArgument: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DeliveryControlArgument */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DeliveryControlArgument */
/**
 * @summary The Extension Addition Component Types of DeliveryControlArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DeliveryControlArgument: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DeliveryControlArgument */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeliveryControlArgument */
let _cached_decoder_for_DeliveryControlArgument: $.ASN1Decoder<DeliveryControlArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeliveryControlArgument */

/* START_OF_SYMBOL_DEFINITION _decode_DeliveryControlArgument */
/**
 * @summary Decodes an ASN.1 element into a(n) DeliveryControlArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeliveryControlArgument} The decoded data structure.
 */
export function _decode_DeliveryControlArgument(el: _Element) {
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
            /* START_OF_CALLBACKS_MAP */
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
            /* END_OF_CALLBACKS_MAP */
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
/* END_OF_SYMBOL_DEFINITION _decode_DeliveryControlArgument */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeliveryControlArgument */
let _cached_encoder_for_DeliveryControlArgument: $.ASN1Encoder<DeliveryControlArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeliveryControlArgument */

/* START_OF_SYMBOL_DEFINITION _encode_DeliveryControlArgument */
/**
 * @summary Encodes a(n) DeliveryControlArgument into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeliveryControlArgument, encoded as an ASN.1 Element.
 */
export function _encode_DeliveryControlArgument(
    value: DeliveryControlArgument,
    elGetter: $.ASN1Encoder<DeliveryControlArgument>
) {
    if (!_cached_encoder_for_DeliveryControlArgument) {
        _cached_encoder_for_DeliveryControlArgument = function (
            value: DeliveryControlArgument,
            elGetter: $.ASN1Encoder<DeliveryControlArgument>
        ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_DeliveryControlArgument */

/* eslint-enable */
