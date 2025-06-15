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
    SubjectEDIMField,
    _decode_SubjectEDIMField,
    _encode_SubjectEDIMField,
} from '../EDIMSInformationObjects/SubjectEDIMField.ta.mjs';
import {
    EDINOriginatorField,
    _decode_EDINOriginatorField,
    _encode_EDINOriginatorField,
} from '../EDIMSInformationObjects/EDINOriginatorField.ta.mjs';
import {
    FirstRecipientField,
    _decode_FirstRecipientField,
    _encode_FirstRecipientField,
} from '../EDIMSInformationObjects/FirstRecipientField.ta.mjs';
import {
    NotificationTimeField,
    _decode_NotificationTimeField,
    _encode_NotificationTimeField,
} from '../EDIMSInformationObjects/NotificationTimeField.ta.mjs';
import {
    SecurityElementsField,
    _decode_SecurityElementsField,
    _encode_SecurityElementsField,
} from '../EDIMSInformationObjects/SecurityElementsField.ta.mjs';
import {
    EDINInitiatorField,
    _enum_for_EDINInitiatorField,
    _decode_EDINInitiatorField,
    _encode_EDINInitiatorField,
} from '../EDIMSInformationObjects/EDINInitiatorField.ta.mjs';
import {
    NotificationExtensionsField,
    _decode_NotificationExtensionsField,
    _encode_NotificationExtensionsField,
} from '../EDIMSInformationObjects/NotificationExtensionsField.ta.mjs';
/**
 * @summary CommonFields
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CommonFields ::= SEQUENCE {
 *   subject-edim                    [1]  SubjectEDIMField,
 *   edin-originator                 [2]  EDINOriginatorField,
 *   first-recipient                 [3]  FirstRecipientField OPTIONAL,
 *   notification-time               [4]  NotificationTimeField,
 *   notification-security-elements  [5]  SecurityElementsField OPTIONAL,
 *   edin-initiator                  [6]  EDINInitiatorField,
 *   notifications-extensions        [7]  NotificationExtensionsField OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class CommonFields {
    constructor(
        /**
         * @summary `subject_edim`.
         * @public
         * @readonly
         */
        readonly subject_edim: SubjectEDIMField,
        /**
         * @summary `edin_originator`.
         * @public
         * @readonly
         */
        readonly edin_originator: EDINOriginatorField,
        /**
         * @summary `first_recipient`.
         * @public
         * @readonly
         */
        readonly first_recipient: OPTIONAL<FirstRecipientField>,
        /**
         * @summary `notification_time`.
         * @public
         * @readonly
         */
        readonly notification_time: NotificationTimeField,
        /**
         * @summary `notification_security_elements`.
         * @public
         * @readonly
         */
        readonly notification_security_elements: OPTIONAL<SecurityElementsField>,
        /**
         * @summary `edin_initiator`.
         * @public
         * @readonly
         */
        readonly edin_initiator: EDINInitiatorField,
        /**
         * @summary `notifications_extensions`.
         * @public
         * @readonly
         */
        readonly notifications_extensions: OPTIONAL<NotificationExtensionsField>
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
            _o.subject_edim,
            _o.edin_originator,
            _o.first_recipient,
            _o.notification_time,
            _o.notification_security_elements,
            _o.edin_initiator,
            _o.notifications_extensions
        );
    }

    /**
     * @summary The enum used as the type of the component `edin_initiator`
     * @public
     * @static
     */

    public static _enum_for_edin_initiator = _enum_for_EDINInitiatorField;
}

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
        'subject-edim',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'edin-originator',
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'first-recipient',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'notification-time',
        false,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'notification-security-elements',
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'edin-initiator',
        false,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'notifications-extensions',
        true,
        $.hasTag(_TagClass.context, 7),
        undefined,
        undefined
    ),
];

/**
 * @summary The Trailing Root Component Types of CommonFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CommonFields: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of CommonFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CommonFields: $.ComponentSpec[] = [];

let _cached_decoder_for_CommonFields: $.ASN1Decoder<CommonFields> | null = null;

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
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let subject_edim!: SubjectEDIMField;
            let edin_originator!: EDINOriginatorField;
            let first_recipient: OPTIONAL<FirstRecipientField>;
            let notification_time!: NotificationTimeField;
            let notification_security_elements: OPTIONAL<SecurityElementsField>;
            let edin_initiator!: EDINInitiatorField;
            let notifications_extensions: OPTIONAL<NotificationExtensionsField>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'subject-edim': (_el: _Element): void => {
                    subject_edim = $._decode_implicit<SubjectEDIMField>(
                        () => _decode_SubjectEDIMField
                    )(_el);
                },
                'edin-originator': (_el: _Element): void => {
                    edin_originator = $._decode_implicit<EDINOriginatorField>(
                        () => _decode_EDINOriginatorField
                    )(_el);
                },
                'first-recipient': (_el: _Element): void => {
                    first_recipient = $._decode_implicit<FirstRecipientField>(
                        () => _decode_FirstRecipientField
                    )(_el);
                },
                'notification-time': (_el: _Element): void => {
                    notification_time = $._decode_implicit<NotificationTimeField>(
                        () => _decode_NotificationTimeField
                    )(_el);
                },
                'notification-security-elements': (_el: _Element): void => {
                    notification_security_elements = $._decode_implicit<SecurityElementsField>(
                        () => _decode_SecurityElementsField
                    )(_el);
                },
                'edin-initiator': (_el: _Element): void => {
                    edin_initiator = $._decode_implicit<EDINInitiatorField>(
                        () => _decode_EDINInitiatorField
                    )(_el);
                },
                'notifications-extensions': (_el: _Element): void => {
                    notifications_extensions = $._decode_implicit<NotificationExtensionsField>(
                        () => _decode_NotificationExtensionsField
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CommonFields,
                _extension_additions_list_spec_for_CommonFields,
                _root_component_type_list_2_spec_for_CommonFields,
                undefined
            );
            return new CommonFields /* SEQUENCE_CONSTRUCTOR_CALL */(
                subject_edim,
                edin_originator,
                first_recipient,
                notification_time,
                notification_security_elements,
                edin_initiator,
                notifications_extensions
            );
        };
    }
    return _cached_decoder_for_CommonFields(el);
}

let _cached_encoder_for_CommonFields: $.ASN1Encoder<CommonFields> | null = null;

/**
 * @summary Encodes a(n) CommonFields into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
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
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => _encode_SubjectEDIMField,
                            $.BER
                        )(value.subject_edim, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            2,
                            () => _encode_EDINOriginatorField,
                            $.BER
                        )(value.edin_originator, $.BER),
                        /* IF_ABSENT  */ value.first_recipient === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_FirstRecipientField,
                                  $.BER
                              )(value.first_recipient, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            4,
                            () => _encode_NotificationTimeField,
                            $.BER
                        )(value.notification_time, $.BER),
                        /* IF_ABSENT  */ value.notification_security_elements ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  5,
                                  () => _encode_SecurityElementsField,
                                  $.BER
                              )(value.notification_security_elements, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            6,
                            () => _encode_EDINInitiatorField,
                            $.BER
                        )(value.edin_initiator, $.BER),
                        /* IF_ABSENT  */ value.notifications_extensions ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  7,
                                  () => _encode_NotificationExtensionsField,
                                  $.BER
                              )(value.notifications_extensions, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_CommonFields(value, elGetter);
}


/* eslint-enable */
