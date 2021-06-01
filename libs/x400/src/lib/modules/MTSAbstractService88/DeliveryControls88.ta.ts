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
    Controls,
    _decode_Controls,
    _encode_Controls,
} from '../MTSAbstractService/Controls.ta';
export {
    Controls,
    _decode_Controls,
    _encode_Controls,
} from '../MTSAbstractService/Controls.ta';
import {
    EncodedInformationTypes,
    _decode_EncodedInformationTypes,
    _encode_EncodedInformationTypes,
} from '../MTSAbstractService/EncodedInformationTypes.ta';
export {
    EncodedInformationTypes,
    _decode_EncodedInformationTypes,
    _encode_EncodedInformationTypes,
} from '../MTSAbstractService/EncodedInformationTypes.ta';
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

/* START_OF_SYMBOL_DEFINITION DeliveryControls88 */
/**
 * @summary DeliveryControls88
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeliveryControls88 ::= SET {
 *   COMPONENTS OF
 *     Controls
 *       (WITH COMPONENTS {
 *          ...,
 *          permissible-encoded-information-types  ABSENT
 *        }),
 *   permissible-encoded-information-types-88  EncodedInformationTypes OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class DeliveryControls88 {
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
         * @summary `permissible_encoded_information_types_88`.
         * @public
         * @readonly
         */
        readonly permissible_encoded_information_types_88: OPTIONAL<EncodedInformationTypes>
    ) {}

    /**
     * @summary Restructures an object into a DeliveryControls88
     * @description
     *
     * This takes an `object` and converts it to a `DeliveryControls88`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeliveryControls88`.
     * @returns {DeliveryControls88}
     */
    public static _from_object(
        _o: { [_K in keyof DeliveryControls88]: DeliveryControls88[_K] }
    ): DeliveryControls88 {
        return new DeliveryControls88(
            _o.restrict,
            _o.permissible_operations,
            _o.permissible_maximum_content_length,
            _o.permissible_lowest_priority,
            _o.permissible_content_types,
            _o.permissible_encoded_information_types,
            _o.permissible_security_context,
            _o.permissible_encoded_information_types_88
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
}
/* END_OF_SYMBOL_DEFINITION DeliveryControls88 */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DeliveryControls88 */
/**
 * @summary The Leading Root Component Types of DeliveryControls88
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DeliveryControls88: $.ComponentSpec[] = [
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
        'permissible-encoded-information-types-88',
        true,
        $.hasTag(_TagClass.application, 5),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DeliveryControls88 */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DeliveryControls88 */
/**
 * @summary The Trailing Root Component Types of DeliveryControls88
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DeliveryControls88: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DeliveryControls88 */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DeliveryControls88 */
/**
 * @summary The Extension Addition Component Types of DeliveryControls88
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DeliveryControls88: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DeliveryControls88 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeliveryControls88 */
let _cached_decoder_for_DeliveryControls88: $.ASN1Decoder<DeliveryControls88> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeliveryControls88 */

/* START_OF_SYMBOL_DEFINITION _decode_DeliveryControls88 */
/**
 * @summary Decodes an ASN.1 element into a(n) DeliveryControls88
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeliveryControls88} The decoded data structure.
 */
export function _decode_DeliveryControls88(el: _Element) {
    if (!_cached_decoder_for_DeliveryControls88) {
        _cached_decoder_for_DeliveryControls88 = function (
            el: _Element
        ): DeliveryControls88 {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let restrict: OPTIONAL<BOOLEAN> =
                DeliveryControls88._default_value_for_restrict;
            let permissible_operations: OPTIONAL<Operations>;
            let permissible_maximum_content_length: OPTIONAL<ContentLength>;
            let permissible_lowest_priority: OPTIONAL<Priority>;
            let permissible_content_types: OPTIONAL<ContentTypes>;
            let permissible_encoded_information_types: OPTIONAL<PermissibleEncodedInformationTypes>;
            let permissible_security_context: OPTIONAL<SecurityContext>;
            let permissible_encoded_information_types_88: OPTIONAL<EncodedInformationTypes>;
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
                'permissible-encoded-information-types-88': (
                    _el: _Element
                ): void => {
                    permissible_encoded_information_types_88 = _decode_EncodedInformationTypes(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DeliveryControls88,
                _extension_additions_list_spec_for_DeliveryControls88,
                _root_component_type_list_2_spec_for_DeliveryControls88,
                undefined
            );
            return new DeliveryControls88 /* SET_CONSTRUCTOR_CALL */(
                restrict,
                permissible_operations,
                permissible_maximum_content_length,
                permissible_lowest_priority,
                permissible_content_types,
                permissible_encoded_information_types,
                permissible_security_context,
                permissible_encoded_information_types_88
            );
        };
    }
    return _cached_decoder_for_DeliveryControls88(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DeliveryControls88 */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeliveryControls88 */
let _cached_encoder_for_DeliveryControls88: $.ASN1Encoder<DeliveryControls88> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeliveryControls88 */

/* START_OF_SYMBOL_DEFINITION _encode_DeliveryControls88 */
/**
 * @summary Encodes a(n) DeliveryControls88 into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeliveryControls88, encoded as an ASN.1 Element.
 */
export function _encode_DeliveryControls88(
    value: DeliveryControls88,
    elGetter: $.ASN1Encoder<DeliveryControls88>
) {
    if (!_cached_encoder_for_DeliveryControls88) {
        _cached_encoder_for_DeliveryControls88 = function (
            value: DeliveryControls88,
            elGetter: $.ASN1Encoder<DeliveryControls88>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.restrict === undefined ||
                        $.deepEq(
                            value.restrict,
                            DeliveryControls88._default_value_for_restrict
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
                        /* IF_ABSENT  */ value.permissible_encoded_information_types_88 ===
                        undefined
                            ? undefined
                            : _encode_EncodedInformationTypes(
                                  value.permissible_encoded_information_types_88,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_DeliveryControls88(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DeliveryControls88 */

/* eslint-enable */
