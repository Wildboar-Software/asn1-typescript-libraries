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
    SubjectIPMField,
    _decode_SubjectIPMField,
    _encode_SubjectIPMField,
} from '../IPMSInformationObjects/SubjectIPMField.ta.mjs';
import {
    IPNOriginatorField,
    _decode_IPNOriginatorField,
    _encode_IPNOriginatorField,
} from '../IPMSInformationObjects/IPNOriginatorField.ta.mjs';
import {
    IPMIntendedRecipientField,
    _decode_IPMIntendedRecipientField,
    _encode_IPMIntendedRecipientField,
} from '../IPMSInformationObjects/IPMIntendedRecipientField.ta.mjs';
import {
    ConversionEITsField,
    _decode_ConversionEITsField,
    _encode_ConversionEITsField,
} from '../IPMSInformationObjects/ConversionEITsField.ta.mjs';
import {
    NotificationExtensionsField,
    _decode_NotificationExtensionsField,
    _encode_NotificationExtensionsField,
} from '../IPMSInformationObjects/NotificationExtensionsField.ta.mjs';
/* START_OF_SYMBOL_DEFINITION CommonFields */
/**
 * @summary CommonFields
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CommonFields ::= SET {
 *   subject-ipm              SubjectIPMField,
 *   ipn-originator           [1]  IPNOriginatorField OPTIONAL,
 *   ipm-intended-recipient   [2]  IPMIntendedRecipientField OPTIONAL,
 *   conversion-eits          ConversionEITsField OPTIONAL,
 *   notification-extensions  [3]  NotificationExtensionsField OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class CommonFields {
    constructor(
        /**
         * @summary `subject_ipm`.
         * @public
         * @readonly
         */
        readonly subject_ipm: SubjectIPMField,
        /**
         * @summary `ipn_originator`.
         * @public
         * @readonly
         */
        readonly ipn_originator: OPTIONAL<IPNOriginatorField>,
        /**
         * @summary `ipm_intended_recipient`.
         * @public
         * @readonly
         */
        readonly ipm_intended_recipient: OPTIONAL<IPMIntendedRecipientField>,
        /**
         * @summary `conversion_eits`.
         * @public
         * @readonly
         */
        readonly conversion_eits: OPTIONAL<ConversionEITsField>,
        /**
         * @summary `notification_extensions`.
         * @public
         * @readonly
         */
        readonly notification_extensions: OPTIONAL<NotificationExtensionsField>
    ) {}

    /**
     * @summary Restructures an object into a CommonFields
     * @description
     *
     * This takes an `object` and converts it to a `CommonFields`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CommonFields`.
     * @returns {CommonFields}
     */
    public static _from_object(
        _o: { [_K in keyof CommonFields]: CommonFields[_K] }
    ): CommonFields {
        return new CommonFields(
            _o.subject_ipm,
            _o.ipn_originator,
            _o.ipm_intended_recipient,
            _o.conversion_eits,
            _o.notification_extensions
        );
    }
}
/* END_OF_SYMBOL_DEFINITION CommonFields */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CommonFields */
/**
 * @summary The Leading Root Component Types of CommonFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CommonFields: $.ComponentSpec[] = [
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
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CommonFields */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CommonFields */
/**
 * @summary The Trailing Root Component Types of CommonFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CommonFields: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CommonFields */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CommonFields */
/**
 * @summary The Extension Addition Component Types of CommonFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CommonFields: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CommonFields */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CommonFields */
let _cached_decoder_for_CommonFields: $.ASN1Decoder<CommonFields> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CommonFields */

/* START_OF_SYMBOL_DEFINITION _decode_CommonFields */
/**
 * @summary Decodes an ASN.1 element into a(n) CommonFields
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CommonFields} The decoded data structure.
 */
export function _decode_CommonFields(el: _Element) {
    if (!_cached_decoder_for_CommonFields) {
        _cached_decoder_for_CommonFields = function (
            el: _Element
        ): CommonFields {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let subject_ipm!: SubjectIPMField;
            let ipn_originator: OPTIONAL<IPNOriginatorField>;
            let ipm_intended_recipient: OPTIONAL<IPMIntendedRecipientField>;
            let conversion_eits: OPTIONAL<ConversionEITsField>;
            let notification_extensions: OPTIONAL<NotificationExtensionsField>;
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
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CommonFields,
                _extension_additions_list_spec_for_CommonFields,
                _root_component_type_list_2_spec_for_CommonFields,
                undefined
            );
            return new CommonFields /* SET_CONSTRUCTOR_CALL */(
                subject_ipm,
                ipn_originator,
                ipm_intended_recipient,
                conversion_eits,
                notification_extensions
            );
        };
    }
    return _cached_decoder_for_CommonFields(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CommonFields */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CommonFields */
let _cached_encoder_for_CommonFields: $.ASN1Encoder<CommonFields> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CommonFields */

/* START_OF_SYMBOL_DEFINITION _encode_CommonFields */
/**
 * @summary Encodes a(n) CommonFields into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommonFields, encoded as an ASN.1 Element.
 */
export function _encode_CommonFields(
    value: CommonFields,
    elGetter: $.ASN1Encoder<CommonFields>
) {
    if (!_cached_encoder_for_CommonFields) {
        _cached_encoder_for_CommonFields = function (
            value: CommonFields        ): _Element {
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
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_CommonFields(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CommonFields */

/* eslint-enable */
