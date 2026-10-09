/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CommonFields,
    _root_component_type_list_1_spec_for_CommonFields,
    _root_component_type_list_2_spec_for_CommonFields,
    _extension_additions_list_spec_for_CommonFields,
    SubjectIPMField,
    _decode_SubjectIPMField,
    _encode_SubjectIPMField,
    IPNOriginatorField,
    _decode_IPNOriginatorField,
    _encode_IPNOriginatorField,
    IPMIntendedRecipientField,
    _decode_IPMIntendedRecipientField,
    _encode_IPMIntendedRecipientField,
    ConversionEITsField,
    _decode_ConversionEITsField,
    _encode_ConversionEITsField,
    NotificationExtensionsField,
    _decode_NotificationExtensionsField,
    _encode_NotificationExtensionsField,
} from "@wildboar/x400/IPMSInformationObjects";
import {
    MN_choice,
    _decode_MN_choice,
    _encode_MN_choice,
} from "../MMSInformationObjects/MN-choice.ta.mjs";

/**
 * @summary MN
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MN ::= SET {
 *   COMPONENTS OF CommonFields,
 *   choice
 *     [0]  CHOICE {mn-non-receipt-fields              [0]  NonReceiptFields,
 *                  mn-receipt-fields                  [1]  ReceiptFields,
 *                  mn-other-notification-type-fields
 *                    [2]  OtherNotificationTypeFields}}
 * ```
 * 
 * @class
 */
export
class MN implements CommonFields {
    constructor (
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
        readonly notification_extensions: OPTIONAL<NotificationExtensionsField>,
        /**
         * @summary `choice`.
         * @public
         * @readonly
         */
        readonly choice: MN_choice
    ) {}

    /**
     * @summary Restructures an object into a MN
     * @description
     * 
     * This takes an `object` and converts it to a `MN`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MN`.
     * @returns {MN}
     */
    public static _from_object (_o: { [_K in keyof (MN)]: (MN)[_K] }): MN {
        return new MN(
            _o.subject_ipm,
            _o.ipn_originator,
            _o.ipm_intended_recipient,
            _o.conversion_eits,
            _o.notification_extensions,
            _o.choice
        );
    }

}

/**
 * @summary The Leading Root Component Types of MN
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MN: $.ComponentSpec[] = [
    ..._root_component_type_list_1_spec_for_CommonFields,
    new $.ComponentSpec("choice", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of MN
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MN: $.ComponentSpec[] = [
    ..._root_component_type_list_2_spec_for_CommonFields,
];

/**
 * @summary The Extension Addition Component Types of MN
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MN: $.ComponentSpec[] = [
    ..._extension_additions_list_spec_for_CommonFields,
];

let _cached_decoder_for_MN: $.ASN1Decoder<MN> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MN
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MN (el: _Element): MN {
    if (!_cached_decoder_for_MN) { _cached_decoder_for_MN = function (el: _Element): MN {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let subject_ipm!: SubjectIPMField;
    let ipn_originator: OPTIONAL<IPNOriginatorField>;
    let ipm_intended_recipient: OPTIONAL<IPMIntendedRecipientField>;
    let conversion_eits: OPTIONAL<ConversionEITsField>;
    let notification_extensions: OPTIONAL<NotificationExtensionsField>;
    let choice!: MN_choice;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "subject-ipm": (_el: _Element): void => { subject_ipm = _decode_SubjectIPMField(_el); },
        "ipn-originator": (_el: _Element): void => { ipn_originator = $._decode_implicit<IPNOriginatorField>(() => _decode_IPNOriginatorField)(_el); },
        "ipm-intended-recipient": (_el: _Element): void => { ipm_intended_recipient = $._decode_implicit<IPMIntendedRecipientField>(() => _decode_IPMIntendedRecipientField)(_el); },
        "conversion-eits": (_el: _Element): void => { conversion_eits = _decode_ConversionEITsField(_el); },
        "notification-extensions": (_el: _Element): void => { notification_extensions = $._decode_implicit<NotificationExtensionsField>(() => _decode_NotificationExtensionsField)(_el); },
        "choice": (_el: _Element): void => { choice = $._decode_explicit<MN_choice>(() => _decode_MN_choice)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_MN,
        _extension_additions_list_spec_for_MN,
        _root_component_type_list_2_spec_for_MN,
        undefined,
    );
    return new MN( /* SET_CONSTRUCTOR_CALL */
        subject_ipm,
        ipn_originator,
        ipm_intended_recipient,
        conversion_eits,
        notification_extensions,
        choice
    );
}; }
    return _cached_decoder_for_MN(el);
}

let _cached_encoder_for_MN: $.ASN1Encoder<MN> | null = null;

/**
 * @summary Encodes a(n) MN into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MN, encoded as an ASN.1 Element.
 */
export
function _encode_MN (value: MN, elGetter: $.ASN1Encoder<MN>): _Element {
    if (!_cached_encoder_for_MN) { _cached_encoder_for_MN = function (value: MN, elGetter: $.ASN1Encoder<MN>): _Element {
    return $._encodeSet(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SubjectIPMField(value.subject_ipm, $.BER),
            /* IF_ABSENT  */ ((value.ipn_originator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_IPNOriginatorField, $.BER)(value.ipn_originator, $.BER)),
            /* IF_ABSENT  */ ((value.ipm_intended_recipient === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_IPMIntendedRecipientField, $.BER)(value.ipm_intended_recipient, $.BER)),
            /* IF_ABSENT  */ ((value.conversion_eits === undefined) ? undefined : _encode_ConversionEITsField(value.conversion_eits, $.BER)),
            /* IF_ABSENT  */ ((value.notification_extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_NotificationExtensionsField, $.BER)(value.notification_extensions, $.BER)),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_MN_choice, $.BER)(value.choice, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MN(value, elGetter);
}

/* eslint-enable */
