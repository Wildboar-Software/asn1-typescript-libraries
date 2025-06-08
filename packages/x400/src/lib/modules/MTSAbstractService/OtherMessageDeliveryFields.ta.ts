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
    DeliveredContentType,
    _decode_DeliveredContentType,
    _encode_DeliveredContentType,
} from '../MTSAbstractService/DeliveredContentType.ta';
export {
    DeliveredContentType,
    _decode_DeliveredContentType,
    _encode_DeliveredContentType,
} from '../MTSAbstractService/DeliveredContentType.ta';
import {
    DeliveredOriginatorName,
    _decode_DeliveredOriginatorName,
    _encode_DeliveredOriginatorName,
} from '../MTSAbstractService/DeliveredOriginatorName.ta';
export {
    DeliveredOriginatorName,
    _decode_DeliveredOriginatorName,
    _encode_DeliveredOriginatorName,
} from '../MTSAbstractService/DeliveredOriginatorName.ta';
import {
    OriginalEncodedInformationTypes,
    _decode_OriginalEncodedInformationTypes,
    _encode_OriginalEncodedInformationTypes,
} from '../MTSAbstractService/OriginalEncodedInformationTypes.ta';
export {
    OriginalEncodedInformationTypes,
    _decode_OriginalEncodedInformationTypes,
    _encode_OriginalEncodedInformationTypes,
} from '../MTSAbstractService/OriginalEncodedInformationTypes.ta';
import {
    Priority,
    Priority_normal,
    _decode_Priority,
    _encode_Priority,
} from '../MTSAbstractService/Priority.ta';
import {
    DeliveryFlags,
    DeliveryFlags_implicit_conversion_prohibited /* IMPORTED_LONG_NAMED_BIT */,
    implicit_conversion_prohibited /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_DeliveryFlags,
    _encode_DeliveryFlags,
} from '../MTSAbstractService/DeliveryFlags.ta';
export {
    DeliveryFlags,
    DeliveryFlags_implicit_conversion_prohibited /* IMPORTED_LONG_NAMED_BIT */,
    implicit_conversion_prohibited /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_DeliveryFlags,
    _encode_DeliveryFlags,
} from '../MTSAbstractService/DeliveryFlags.ta';
import {
    OtherRecipientNames,
    _decode_OtherRecipientNames,
    _encode_OtherRecipientNames,
} from '../MTSAbstractService/OtherRecipientNames.ta';
export {
    OtherRecipientNames,
    _decode_OtherRecipientNames,
    _encode_OtherRecipientNames,
} from '../MTSAbstractService/OtherRecipientNames.ta';
import {
    ThisRecipientName,
    _decode_ThisRecipientName,
    _encode_ThisRecipientName,
} from '../MTSAbstractService/ThisRecipientName.ta';
export {
    ThisRecipientName,
    _decode_ThisRecipientName,
    _encode_ThisRecipientName,
} from '../MTSAbstractService/ThisRecipientName.ta';
import {
    OriginallyIntendedRecipientName,
    _decode_OriginallyIntendedRecipientName,
    _encode_OriginallyIntendedRecipientName,
} from '../MTSAbstractService/OriginallyIntendedRecipientName.ta';
export {
    OriginallyIntendedRecipientName,
    _decode_OriginallyIntendedRecipientName,
    _encode_OriginallyIntendedRecipientName,
} from '../MTSAbstractService/OriginallyIntendedRecipientName.ta';
import {
    ConvertedEncodedInformationTypes,
    _decode_ConvertedEncodedInformationTypes,
    _encode_ConvertedEncodedInformationTypes,
} from '../MTSAbstractService/ConvertedEncodedInformationTypes.ta';
export {
    ConvertedEncodedInformationTypes,
    _decode_ConvertedEncodedInformationTypes,
    _encode_ConvertedEncodedInformationTypes,
} from '../MTSAbstractService/ConvertedEncodedInformationTypes.ta';
import {
    MessageSubmissionTime,
    _decode_MessageSubmissionTime,
    _encode_MessageSubmissionTime,
} from '../MTSAbstractService/MessageSubmissionTime.ta';
export {
    MessageSubmissionTime,
    _decode_MessageSubmissionTime,
    _encode_MessageSubmissionTime,
} from '../MTSAbstractService/MessageSubmissionTime.ta';
import {
    ContentIdentifier,
    _decode_ContentIdentifier,
    _encode_ContentIdentifier,
} from '../MTSAbstractService/ContentIdentifier.ta';
export {
    ContentIdentifier,
    _decode_ContentIdentifier,
    _encode_ContentIdentifier,
} from '../MTSAbstractService/ContentIdentifier.ta';
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

/* START_OF_SYMBOL_DEFINITION OtherMessageDeliveryFields */
/**
 * @summary OtherMessageDeliveryFields
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OtherMessageDeliveryFields ::= SET {
 *   content-type                         DeliveredContentType,
 *   originator-name                      DeliveredOriginatorName,
 *   original-encoded-information-types
 *     [1]  OriginalEncodedInformationTypes OPTIONAL,
 *   priority                             Priority DEFAULT normal,
 *   delivery-flags                       [2]  DeliveryFlags OPTIONAL,
 *   other-recipient-names                [3]  OtherRecipientNames OPTIONAL,
 *   this-recipient-name                  [4]  ThisRecipientName,
 *   originally-intended-recipient-name
 *     [5]  OriginallyIntendedRecipientName OPTIONAL,
 *   converted-encoded-information-types
 *     [6]  ConvertedEncodedInformationTypes OPTIONAL,
 *   message-submission-time              [7]  MessageSubmissionTime,
 *   content-identifier                   [8]  ContentIdentifier OPTIONAL,
 *   extensions
 *     [9]  SET OF ExtensionField{{MessageDeliveryExtensions}} DEFAULT {}
 * }
 * ```
 *
 * @class
 */
export class OtherMessageDeliveryFields {
    constructor(
        /**
         * @summary `content_type`.
         * @public
         * @readonly
         */
        readonly content_type: DeliveredContentType,
        /**
         * @summary `originator_name`.
         * @public
         * @readonly
         */
        readonly originator_name: DeliveredOriginatorName,
        /**
         * @summary `original_encoded_information_types`.
         * @public
         * @readonly
         */
        readonly original_encoded_information_types: OPTIONAL<OriginalEncodedInformationTypes>,
        /**
         * @summary `priority`.
         * @public
         * @readonly
         */
        readonly priority: OPTIONAL<Priority>,
        /**
         * @summary `delivery_flags`.
         * @public
         * @readonly
         */
        readonly delivery_flags: OPTIONAL<DeliveryFlags>,
        /**
         * @summary `other_recipient_names`.
         * @public
         * @readonly
         */
        readonly other_recipient_names: OPTIONAL<OtherRecipientNames>,
        /**
         * @summary `this_recipient_name`.
         * @public
         * @readonly
         */
        readonly this_recipient_name: ThisRecipientName,
        /**
         * @summary `originally_intended_recipient_name`.
         * @public
         * @readonly
         */
        readonly originally_intended_recipient_name: OPTIONAL<OriginallyIntendedRecipientName>,
        /**
         * @summary `converted_encoded_information_types`.
         * @public
         * @readonly
         */
        readonly converted_encoded_information_types: OPTIONAL<ConvertedEncodedInformationTypes>,
        /**
         * @summary `message_submission_time`.
         * @public
         * @readonly
         */
        readonly message_submission_time: MessageSubmissionTime,
        /**
         * @summary `content_identifier`.
         * @public
         * @readonly
         */
        readonly content_identifier: OPTIONAL<ContentIdentifier>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<ExtensionField[]>
    ) {}

    /**
     * @summary Restructures an object into a OtherMessageDeliveryFields
     * @description
     *
     * This takes an `object` and converts it to a `OtherMessageDeliveryFields`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OtherMessageDeliveryFields`.
     * @returns {OtherMessageDeliveryFields}
     */
    public static _from_object(
        _o: {
            [_K in keyof OtherMessageDeliveryFields]: OtherMessageDeliveryFields[_K];
        }
    ): OtherMessageDeliveryFields {
        return new OtherMessageDeliveryFields(
            _o.content_type,
            _o.originator_name,
            _o.original_encoded_information_types,
            _o.priority,
            _o.delivery_flags,
            _o.other_recipient_names,
            _o.this_recipient_name,
            _o.originally_intended_recipient_name,
            _o.converted_encoded_information_types,
            _o.message_submission_time,
            _o.content_identifier,
            _o.extensions
        );
    }

    /**
     * @summary Getter that returns the default value for `priority`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_priority() {
        return Priority_normal;
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
/* END_OF_SYMBOL_DEFINITION OtherMessageDeliveryFields */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OtherMessageDeliveryFields */
/**
 * @summary The Leading Root Component Types of OtherMessageDeliveryFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OtherMessageDeliveryFields: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'content-type',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'originator-name',
        false,
        $.hasTag(_TagClass.application, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'original-encoded-information-types',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'priority',
        true,
        $.hasTag(_TagClass.application, 7),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'delivery-flags',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'other-recipient-names',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'this-recipient-name',
        false,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'originally-intended-recipient-name',
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'converted-encoded-information-types',
        true,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'message-submission-time',
        false,
        $.hasTag(_TagClass.context, 7),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'content-identifier',
        true,
        $.hasTag(_TagClass.context, 8),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'extensions',
        true,
        $.hasTag(_TagClass.context, 9),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OtherMessageDeliveryFields */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OtherMessageDeliveryFields */
/**
 * @summary The Trailing Root Component Types of OtherMessageDeliveryFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OtherMessageDeliveryFields: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OtherMessageDeliveryFields */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OtherMessageDeliveryFields */
/**
 * @summary The Extension Addition Component Types of OtherMessageDeliveryFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OtherMessageDeliveryFields: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OtherMessageDeliveryFields */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OtherMessageDeliveryFields */
let _cached_decoder_for_OtherMessageDeliveryFields: $.ASN1Decoder<OtherMessageDeliveryFields> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OtherMessageDeliveryFields */

/* START_OF_SYMBOL_DEFINITION _decode_OtherMessageDeliveryFields */
/**
 * @summary Decodes an ASN.1 element into a(n) OtherMessageDeliveryFields
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OtherMessageDeliveryFields} The decoded data structure.
 */
export function _decode_OtherMessageDeliveryFields(el: _Element) {
    if (!_cached_decoder_for_OtherMessageDeliveryFields) {
        _cached_decoder_for_OtherMessageDeliveryFields = function (
            el: _Element
        ): OtherMessageDeliveryFields {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let content_type!: DeliveredContentType;
            let originator_name!: DeliveredOriginatorName;
            let original_encoded_information_types: OPTIONAL<OriginalEncodedInformationTypes>;
            let priority: OPTIONAL<Priority> =
                OtherMessageDeliveryFields._default_value_for_priority;
            let delivery_flags: OPTIONAL<DeliveryFlags>;
            let other_recipient_names: OPTIONAL<OtherRecipientNames>;
            let this_recipient_name!: ThisRecipientName;
            let originally_intended_recipient_name: OPTIONAL<OriginallyIntendedRecipientName>;
            let converted_encoded_information_types: OPTIONAL<ConvertedEncodedInformationTypes>;
            let message_submission_time!: MessageSubmissionTime;
            let content_identifier: OPTIONAL<ContentIdentifier>;
            let extensions: OPTIONAL<ExtensionField[]> =
                OtherMessageDeliveryFields._default_value_for_extensions;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'content-type': (_el: _Element): void => {
                    content_type = _decode_DeliveredContentType(_el);
                },
                'originator-name': (_el: _Element): void => {
                    originator_name = _decode_DeliveredOriginatorName(_el);
                },
                'original-encoded-information-types': (_el: _Element): void => {
                    original_encoded_information_types = $._decode_implicit<OriginalEncodedInformationTypes>(
                        () => _decode_OriginalEncodedInformationTypes
                    )(_el);
                },
                priority: (_el: _Element): void => {
                    priority = _decode_Priority(_el);
                },
                'delivery-flags': (_el: _Element): void => {
                    delivery_flags = $._decode_implicit<DeliveryFlags>(
                        () => _decode_DeliveryFlags
                    )(_el);
                },
                'other-recipient-names': (_el: _Element): void => {
                    other_recipient_names = $._decode_implicit<OtherRecipientNames>(
                        () => _decode_OtherRecipientNames
                    )(_el);
                },
                'this-recipient-name': (_el: _Element): void => {
                    this_recipient_name = $._decode_implicit<ThisRecipientName>(
                        () => _decode_ThisRecipientName
                    )(_el);
                },
                'originally-intended-recipient-name': (_el: _Element): void => {
                    originally_intended_recipient_name = $._decode_implicit<OriginallyIntendedRecipientName>(
                        () => _decode_OriginallyIntendedRecipientName
                    )(_el);
                },
                'converted-encoded-information-types': (
                    _el: _Element
                ): void => {
                    converted_encoded_information_types = $._decode_implicit<ConvertedEncodedInformationTypes>(
                        () => _decode_ConvertedEncodedInformationTypes
                    )(_el);
                },
                'message-submission-time': (_el: _Element): void => {
                    message_submission_time = $._decode_implicit<MessageSubmissionTime>(
                        () => _decode_MessageSubmissionTime
                    )(_el);
                },
                'content-identifier': (_el: _Element): void => {
                    content_identifier = $._decode_implicit<ContentIdentifier>(
                        () => _decode_ContentIdentifier
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
                _root_component_type_list_1_spec_for_OtherMessageDeliveryFields,
                _extension_additions_list_spec_for_OtherMessageDeliveryFields,
                _root_component_type_list_2_spec_for_OtherMessageDeliveryFields,
                undefined
            );
            return new OtherMessageDeliveryFields /* SET_CONSTRUCTOR_CALL */(
                content_type,
                originator_name,
                original_encoded_information_types,
                priority,
                delivery_flags,
                other_recipient_names,
                this_recipient_name,
                originally_intended_recipient_name,
                converted_encoded_information_types,
                message_submission_time,
                content_identifier,
                extensions
            );
        };
    }
    return _cached_decoder_for_OtherMessageDeliveryFields(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OtherMessageDeliveryFields */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OtherMessageDeliveryFields */
let _cached_encoder_for_OtherMessageDeliveryFields: $.ASN1Encoder<OtherMessageDeliveryFields> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OtherMessageDeliveryFields */

/* START_OF_SYMBOL_DEFINITION _encode_OtherMessageDeliveryFields */
/**
 * @summary Encodes a(n) OtherMessageDeliveryFields into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OtherMessageDeliveryFields, encoded as an ASN.1 Element.
 */
export function _encode_OtherMessageDeliveryFields(
    value: OtherMessageDeliveryFields,
    elGetter: $.ASN1Encoder<OtherMessageDeliveryFields>
) {
    if (!_cached_encoder_for_OtherMessageDeliveryFields) {
        _cached_encoder_for_OtherMessageDeliveryFields = function (
            value: OtherMessageDeliveryFields,
            elGetter: $.ASN1Encoder<OtherMessageDeliveryFields>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_DeliveredContentType(
                            value.content_type,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_DeliveredOriginatorName(
                            value.originator_name,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.original_encoded_information_types ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_OriginalEncodedInformationTypes,
                                  $.BER
                              )(
                                  value.original_encoded_information_types,
                                  $.BER
                              ),
                        /* IF_DEFAULT */ value.priority === undefined ||
                        $.deepEq(
                            value.priority,
                            OtherMessageDeliveryFields._default_value_for_priority
                        )
                            ? undefined
                            : _encode_Priority(value.priority, $.BER),
                        /* IF_ABSENT  */ value.delivery_flags === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_DeliveryFlags,
                                  $.BER
                              )(value.delivery_flags, $.BER),
                        /* IF_ABSENT  */ value.other_recipient_names ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_OtherRecipientNames,
                                  $.BER
                              )(value.other_recipient_names, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            4,
                            () => _encode_ThisRecipientName,
                            $.BER
                        )(value.this_recipient_name, $.BER),
                        /* IF_ABSENT  */ value.originally_intended_recipient_name ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  5,
                                  () => _encode_OriginallyIntendedRecipientName,
                                  $.BER
                              )(
                                  value.originally_intended_recipient_name,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.converted_encoded_information_types ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  6,
                                  () =>
                                      _encode_ConvertedEncodedInformationTypes,
                                  $.BER
                              )(
                                  value.converted_encoded_information_types,
                                  $.BER
                              ),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            7,
                            () => _encode_MessageSubmissionTime,
                            $.BER
                        )(value.message_submission_time, $.BER),
                        /* IF_ABSENT  */ value.content_identifier === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  8,
                                  () => _encode_ContentIdentifier,
                                  $.BER
                              )(value.content_identifier, $.BER),
                        /* IF_DEFAULT */ value.extensions === undefined ||
                        $.deepEq(
                            value.extensions,
                            OtherMessageDeliveryFields._default_value_for_extensions
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  9,
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
    return _cached_encoder_for_OtherMessageDeliveryFields(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OtherMessageDeliveryFields */

/* eslint-enable */
