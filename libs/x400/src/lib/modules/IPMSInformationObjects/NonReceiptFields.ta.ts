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
    NonReceiptReasonField,
    _enum_for_NonReceiptReasonField,
    NonReceiptReasonField_ipm_discarded /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ipm_discarded /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    NonReceiptReasonField_ipm_auto_forwarded /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ipm_auto_forwarded /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_NonReceiptReasonField,
    _encode_NonReceiptReasonField,
} from '../IPMSInformationObjects/NonReceiptReasonField.ta';
export {
    NonReceiptReasonField,
    _enum_for_NonReceiptReasonField,
    NonReceiptReasonField_ipm_discarded /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ipm_discarded /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    NonReceiptReasonField_ipm_auto_forwarded /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ipm_auto_forwarded /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_NonReceiptReasonField,
    _encode_NonReceiptReasonField,
} from '../IPMSInformationObjects/NonReceiptReasonField.ta';
import {
    DiscardReasonField,
    _enum_for_DiscardReasonField,
    DiscardReasonField_ipm_expired /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ipm_expired /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    DiscardReasonField_ipm_obsoleted /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ipm_obsoleted /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    DiscardReasonField_user_subscription_terminated /* IMPORTED_LONG_ENUMERATION_ITEM */,
    user_subscription_terminated /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    DiscardReasonField_not_used /* IMPORTED_LONG_ENUMERATION_ITEM */,
    not_used /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_DiscardReasonField,
    _encode_DiscardReasonField,
} from '../IPMSInformationObjects/DiscardReasonField.ta';
export {
    DiscardReasonField,
    _enum_for_DiscardReasonField,
    DiscardReasonField_ipm_expired /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ipm_expired /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    DiscardReasonField_ipm_obsoleted /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ipm_obsoleted /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    DiscardReasonField_user_subscription_terminated /* IMPORTED_LONG_ENUMERATION_ITEM */,
    user_subscription_terminated /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    DiscardReasonField_not_used /* IMPORTED_LONG_ENUMERATION_ITEM */,
    not_used /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_DiscardReasonField,
    _encode_DiscardReasonField,
} from '../IPMSInformationObjects/DiscardReasonField.ta';
import {
    AutoForwardCommentField,
    _decode_AutoForwardCommentField,
    _encode_AutoForwardCommentField,
} from '../IPMSInformationObjects/AutoForwardCommentField.ta';
export {
    AutoForwardCommentField,
    _decode_AutoForwardCommentField,
    _encode_AutoForwardCommentField,
} from '../IPMSInformationObjects/AutoForwardCommentField.ta';
import {
    ReturnedIPMField,
    _decode_ReturnedIPMField,
    _encode_ReturnedIPMField,
} from '../IPMSInformationObjects/ReturnedIPMField.ta';
export {
    ReturnedIPMField,
    _decode_ReturnedIPMField,
    _encode_ReturnedIPMField,
} from '../IPMSInformationObjects/ReturnedIPMField.ta';
import {
    NRNExtensionsField,
    _decode_NRNExtensionsField,
    _encode_NRNExtensionsField,
} from '../IPMSInformationObjects/NRNExtensionsField.ta';
export {
    NRNExtensionsField,
    _decode_NRNExtensionsField,
    _encode_NRNExtensionsField,
} from '../IPMSInformationObjects/NRNExtensionsField.ta';

/* START_OF_SYMBOL_DEFINITION NonReceiptFields */
/**
 * @summary NonReceiptFields
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NonReceiptFields ::= SET {
 *   non-receipt-reason    [0]  NonReceiptReasonField,
 *   discard-reason        [1]  DiscardReasonField OPTIONAL,
 *   auto-forward-comment  [2]  AutoForwardCommentField OPTIONAL,
 *   returned-ipm          [3]  ReturnedIPMField OPTIONAL,
 *   nrn-extensions        [4]  NRNExtensionsField OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class NonReceiptFields {
    constructor(
        /**
         * @summary `non_receipt_reason`.
         * @public
         * @readonly
         */
        readonly non_receipt_reason: NonReceiptReasonField,
        /**
         * @summary `discard_reason`.
         * @public
         * @readonly
         */
        readonly discard_reason: OPTIONAL<DiscardReasonField>,
        /**
         * @summary `auto_forward_comment`.
         * @public
         * @readonly
         */
        readonly auto_forward_comment: OPTIONAL<AutoForwardCommentField>,
        /**
         * @summary `returned_ipm`.
         * @public
         * @readonly
         */
        readonly returned_ipm: OPTIONAL<ReturnedIPMField>,
        /**
         * @summary `nrn_extensions`.
         * @public
         * @readonly
         */
        readonly nrn_extensions: OPTIONAL<NRNExtensionsField>
    ) {}

    /**
     * @summary Restructures an object into a NonReceiptFields
     * @description
     *
     * This takes an `object` and converts it to a `NonReceiptFields`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NonReceiptFields`.
     * @returns {NonReceiptFields}
     */
    public static _from_object(
        _o: { [_K in keyof NonReceiptFields]: NonReceiptFields[_K] }
    ): NonReceiptFields {
        return new NonReceiptFields(
            _o.non_receipt_reason,
            _o.discard_reason,
            _o.auto_forward_comment,
            _o.returned_ipm,
            _o.nrn_extensions
        );
    }

    /**
     * @summary The enum used as the type of the component `non_receipt_reason`
     * @public
     * @static
     */

    public static _enum_for_non_receipt_reason = _enum_for_NonReceiptReasonField;
    /**
     * @summary The enum used as the type of the component `discard_reason`
     * @public
     * @static
     */

    public static _enum_for_discard_reason = _enum_for_DiscardReasonField;
}
/* END_OF_SYMBOL_DEFINITION NonReceiptFields */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NonReceiptFields */
/**
 * @summary The Leading Root Component Types of NonReceiptFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NonReceiptFields: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'non-receipt-reason',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'discard-reason',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'auto-forward-comment',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'returned-ipm',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'nrn-extensions',
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NonReceiptFields */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NonReceiptFields */
/**
 * @summary The Trailing Root Component Types of NonReceiptFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NonReceiptFields: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NonReceiptFields */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NonReceiptFields */
/**
 * @summary The Extension Addition Component Types of NonReceiptFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NonReceiptFields: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NonReceiptFields */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NonReceiptFields */
let _cached_decoder_for_NonReceiptFields: $.ASN1Decoder<NonReceiptFields> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NonReceiptFields */

/* START_OF_SYMBOL_DEFINITION _decode_NonReceiptFields */
/**
 * @summary Decodes an ASN.1 element into a(n) NonReceiptFields
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NonReceiptFields} The decoded data structure.
 */
export function _decode_NonReceiptFields(el: _Element) {
    if (!_cached_decoder_for_NonReceiptFields) {
        _cached_decoder_for_NonReceiptFields = function (
            el: _Element
        ): NonReceiptFields {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let non_receipt_reason!: NonReceiptReasonField;
            let discard_reason: OPTIONAL<DiscardReasonField>;
            let auto_forward_comment: OPTIONAL<AutoForwardCommentField>;
            let returned_ipm: OPTIONAL<ReturnedIPMField>;
            let nrn_extensions: OPTIONAL<NRNExtensionsField>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'non-receipt-reason': (_el: _Element): void => {
                    non_receipt_reason = $._decode_implicit<NonReceiptReasonField>(
                        () => _decode_NonReceiptReasonField
                    )(_el);
                },
                'discard-reason': (_el: _Element): void => {
                    discard_reason = $._decode_implicit<DiscardReasonField>(
                        () => _decode_DiscardReasonField
                    )(_el);
                },
                'auto-forward-comment': (_el: _Element): void => {
                    auto_forward_comment = $._decode_implicit<AutoForwardCommentField>(
                        () => _decode_AutoForwardCommentField
                    )(_el);
                },
                'returned-ipm': (_el: _Element): void => {
                    returned_ipm = $._decode_implicit<ReturnedIPMField>(
                        () => _decode_ReturnedIPMField
                    )(_el);
                },
                'nrn-extensions': (_el: _Element): void => {
                    nrn_extensions = $._decode_implicit<NRNExtensionsField>(
                        () => _decode_NRNExtensionsField
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_NonReceiptFields,
                _extension_additions_list_spec_for_NonReceiptFields,
                _root_component_type_list_2_spec_for_NonReceiptFields,
                undefined
            );
            return new NonReceiptFields /* SET_CONSTRUCTOR_CALL */(
                non_receipt_reason,
                discard_reason,
                auto_forward_comment,
                returned_ipm,
                nrn_extensions
            );
        };
    }
    return _cached_decoder_for_NonReceiptFields(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NonReceiptFields */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NonReceiptFields */
let _cached_encoder_for_NonReceiptFields: $.ASN1Encoder<NonReceiptFields> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NonReceiptFields */

/* START_OF_SYMBOL_DEFINITION _encode_NonReceiptFields */
/**
 * @summary Encodes a(n) NonReceiptFields into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NonReceiptFields, encoded as an ASN.1 Element.
 */
export function _encode_NonReceiptFields(
    value: NonReceiptFields,
    elGetter: $.ASN1Encoder<NonReceiptFields>
) {
    if (!_cached_encoder_for_NonReceiptFields) {
        _cached_encoder_for_NonReceiptFields = function (
            value: NonReceiptFields,
            elGetter: $.ASN1Encoder<NonReceiptFields>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_NonReceiptReasonField,
                            $.BER
                        )(value.non_receipt_reason, $.BER),
                        /* IF_ABSENT  */ value.discard_reason === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_DiscardReasonField,
                                  $.BER
                              )(value.discard_reason, $.BER),
                        /* IF_ABSENT  */ value.auto_forward_comment ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_AutoForwardCommentField,
                                  $.BER
                              )(value.auto_forward_comment, $.BER),
                        /* IF_ABSENT  */ value.returned_ipm === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_ReturnedIPMField,
                                  $.BER
                              )(value.returned_ipm, $.BER),
                        /* IF_ABSENT  */ value.nrn_extensions === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  4,
                                  () => _encode_NRNExtensionsField,
                                  $.BER
                              )(value.nrn_extensions, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_NonReceiptFields(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NonReceiptFields */

/* eslint-enable */
