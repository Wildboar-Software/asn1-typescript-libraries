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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    CommonFields,
    _decode_CommonFields,
    _encode_CommonFields,
} from '../IPMSInformationObjects/CommonFields.ta.mjs';
export {
    CommonFields,
    _decode_CommonFields,
    _encode_CommonFields,
} from '../IPMSInformationObjects/CommonFields.ta.mjs';
import {
    IPN_choice,
    _decode_IPN_choice,
    _encode_IPN_choice,
} from '../IPMSInformationObjects/IPN-choice.ta.mjs';
export {
    IPN_choice,
    _decode_IPN_choice,
    _encode_IPN_choice,
} from '../IPMSInformationObjects/IPN-choice.ta.mjs';
import {
    SubjectIPMField,
    _decode_SubjectIPMField,
    _encode_SubjectIPMField,
} from '../IPMSInformationObjects/SubjectIPMField.ta.mjs';
export {
    SubjectIPMField,
    _decode_SubjectIPMField,
    _encode_SubjectIPMField,
} from '../IPMSInformationObjects/SubjectIPMField.ta.mjs';
import {
    IPNOriginatorField,
    _decode_IPNOriginatorField,
    _encode_IPNOriginatorField,
} from '../IPMSInformationObjects/IPNOriginatorField.ta.mjs';
export {
    IPNOriginatorField,
    _decode_IPNOriginatorField,
    _encode_IPNOriginatorField,
} from '../IPMSInformationObjects/IPNOriginatorField.ta.mjs';
import {
    IPMIntendedRecipientField,
    _decode_IPMIntendedRecipientField,
    _encode_IPMIntendedRecipientField,
} from '../IPMSInformationObjects/IPMIntendedRecipientField.ta.mjs';
export {
    IPMIntendedRecipientField,
    _decode_IPMIntendedRecipientField,
    _encode_IPMIntendedRecipientField,
} from '../IPMSInformationObjects/IPMIntendedRecipientField.ta.mjs';
import {
    ConversionEITsField,
    _decode_ConversionEITsField,
    _encode_ConversionEITsField,
} from '../IPMSInformationObjects/ConversionEITsField.ta.mjs';
export {
    ConversionEITsField,
    _decode_ConversionEITsField,
    _encode_ConversionEITsField,
} from '../IPMSInformationObjects/ConversionEITsField.ta.mjs';
import {
    NotificationExtensionsField,
    _decode_NotificationExtensionsField,
    _encode_NotificationExtensionsField,
} from '../IPMSInformationObjects/NotificationExtensionsField.ta.mjs';
export {
    NotificationExtensionsField,
    _decode_NotificationExtensionsField,
    _encode_NotificationExtensionsField,
} from '../IPMSInformationObjects/NotificationExtensionsField.ta.mjs';

/* START_OF_SYMBOL_DEFINITION IPN */
/**
 * @summary IPN
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IPN ::= SET {
 *   -- common-fields --COMPONENTS OF CommonFields,
 *   choice
 *     [0]  CHOICE {non-receipt-fields              [0]  NonReceiptFields,
 *                  receipt-fields                  [1]  ReceiptFields,
 *                  other-notification-type-fields
 *                    [2]  OtherNotificationTypeFields}
 * }
 * ```
 *
 * @class
 */
export class IPN {
    constructor(
        /**
         * @summary `subject_ipm`.
         * @public
         * @readonly
         */
        readonly subject_ipm: SubjectIPMField /* REPLICATED_COMPONENT */,
        /**
         * @summary `ipn_originator`.
         * @public
         * @readonly
         */
        readonly ipn_originator: OPTIONAL<IPNOriginatorField> /* REPLICATED_COMPONENT */,
        /**
         * @summary `ipm_intended_recipient`.
         * @public
         * @readonly
         */
        readonly ipm_intended_recipient: OPTIONAL<IPMIntendedRecipientField> /* REPLICATED_COMPONENT */,
        /**
         * @summary `conversion_eits`.
         * @public
         * @readonly
         */
        readonly conversion_eits: OPTIONAL<ConversionEITsField> /* REPLICATED_COMPONENT */,
        /**
         * @summary `notification_extensions`.
         * @public
         * @readonly
         */
        readonly notification_extensions: OPTIONAL<NotificationExtensionsField> /* REPLICATED_COMPONENT */,
        /**
         * @summary `choice`.
         * @public
         * @readonly
         */
        readonly choice: IPN_choice
    ) {}

    /**
     * @summary Restructures an object into a IPN
     * @description
     *
     * This takes an `object` and converts it to a `IPN`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IPN`.
     * @returns {IPN}
     */
    public static _from_object(_o: { [_K in keyof IPN]: IPN[_K] }): IPN {
        return new IPN(
            _o.subject_ipm,
            _o.ipn_originator,
            _o.ipm_intended_recipient,
            _o.conversion_eits,
            _o.notification_extensions,
            _o.choice
        );
    }
}
/* END_OF_SYMBOL_DEFINITION IPN */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_IPN */
/**
 * @summary The Leading Root Component Types of IPN
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IPN: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'subject-ipm',
        false,
        $.hasTag(_TagClass.application, 11),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'ipn-originator',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'ipm-intended-recipient',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'conversion-eits',
        true,
        $.hasTag(_TagClass.application, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'notification-extensions',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'choice',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_IPN */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_IPN */
/**
 * @summary The Trailing Root Component Types of IPN
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IPN: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_IPN */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_IPN */
/**
 * @summary The Extension Addition Component Types of IPN
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IPN: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_IPN */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IPN */
let _cached_decoder_for_IPN: $.ASN1Decoder<IPN> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IPN */

/* START_OF_SYMBOL_DEFINITION _decode_IPN */
/**
 * @summary Decodes an ASN.1 element into a(n) IPN
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IPN} The decoded data structure.
 */
export function _decode_IPN(el: _Element) {
    if (!_cached_decoder_for_IPN) {
        _cached_decoder_for_IPN = function (el: _Element): IPN {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let subject_ipm!: SubjectIPMField;
            let ipn_originator: OPTIONAL<IPNOriginatorField>;
            let ipm_intended_recipient: OPTIONAL<IPMIntendedRecipientField>;
            let conversion_eits: OPTIONAL<ConversionEITsField>;
            let notification_extensions: OPTIONAL<NotificationExtensionsField>;
            let choice!: IPN_choice;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'subject-ipm': (_el: _Element): void => {
                    subject_ipm = _decode_SubjectIPMField(_el);
                },
                'ipn-originator': (_el: _Element): void => {
                    ipn_originator = $._decode_implicit<IPNOriginatorField>(
                        () => _decode_IPNOriginatorField
                    )(_el);
                },
                'ipm-intended-recipient': (_el: _Element): void => {
                    ipm_intended_recipient = $._decode_implicit<IPMIntendedRecipientField>(
                        () => _decode_IPMIntendedRecipientField
                    )(_el);
                },
                'conversion-eits': (_el: _Element): void => {
                    conversion_eits = _decode_ConversionEITsField(_el);
                },
                'notification-extensions': (_el: _Element): void => {
                    notification_extensions = $._decode_implicit<NotificationExtensionsField>(
                        () => _decode_NotificationExtensionsField
                    )(_el);
                },
                choice: (_el: _Element): void => {
                    choice = $._decode_explicit<IPN_choice>(
                        () => _decode_IPN_choice
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_IPN,
                _extension_additions_list_spec_for_IPN,
                _root_component_type_list_2_spec_for_IPN,
                undefined
            );
            return new IPN /* SET_CONSTRUCTOR_CALL */(
                subject_ipm,
                ipn_originator,
                ipm_intended_recipient,
                conversion_eits,
                notification_extensions,
                choice
            );
        };
    }
    return _cached_decoder_for_IPN(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IPN */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IPN */
let _cached_encoder_for_IPN: $.ASN1Encoder<IPN> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IPN */

/* START_OF_SYMBOL_DEFINITION _encode_IPN */
/**
 * @summary Encodes a(n) IPN into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPN, encoded as an ASN.1 Element.
 */
export function _encode_IPN(value: IPN, elGetter: $.ASN1Encoder<IPN>) {
    if (!_cached_encoder_for_IPN) {
        _cached_encoder_for_IPN = function (
            value: IPN,
            elGetter: $.ASN1Encoder<IPN>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_SubjectIPMField(
                            value.subject_ipm,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.ipn_originator === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_IPNOriginatorField,
                                  $.BER
                              )(value.ipn_originator, $.BER),
                        /* IF_ABSENT  */ value.ipm_intended_recipient ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_IPMIntendedRecipientField,
                                  $.BER
                              )(value.ipm_intended_recipient, $.BER),
                        /* IF_ABSENT  */ value.conversion_eits === undefined
                            ? undefined
                            : _encode_ConversionEITsField(
                                  value.conversion_eits,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.notification_extensions ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_NotificationExtensionsField,
                                  $.BER
                              )(value.notification_extensions, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_IPN_choice,
                            $.BER
                        )(value.choice, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_IPN(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_IPN */

/* eslint-enable */
