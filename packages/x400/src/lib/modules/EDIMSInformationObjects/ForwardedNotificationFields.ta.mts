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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    CommonFields,
    _decode_CommonFields,
    _encode_CommonFields,
} from '../EDIMSInformationObjects/CommonFields.ta.mjs';
import {
    ForwardedTo,
    _decode_ForwardedTo,
    _encode_ForwardedTo,
} from '../EDIMSInformationObjects/ForwardedTo.ta.mjs';
import {
    FNReasonCodeField,
    _decode_FNReasonCodeField,
    _encode_FNReasonCodeField,
} from '../EDIMSInformationObjects/FNReasonCodeField.ta.mjs';
import {
    EDISupplementaryInformation,
    _decode_EDISupplementaryInformation,
    _encode_EDISupplementaryInformation,
} from '../EDIMSInformationObjects/EDISupplementaryInformation.ta.mjs';
import {
    FNExtensionsField,
    _decode_FNExtensionsField,
    _encode_FNExtensionsField,
} from '../EDIMSInformationObjects/FNExtensionsField.ta.mjs';
/**
 * @summary ForwardedNotificationFields
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ForwardedNotificationFields ::= SEQUENCE {
 *   fn-common-fields              [0]  CommonFields,
 *   forwarded-to                  [1]  ForwardedTo,
 *   fn-reason-code                [2]  FNReasonCodeField,
 *   fn-supplementary-information  [3]  EDISupplementaryInformation OPTIONAL,
 *   fn-extensions                 [4]  FNExtensionsField OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ForwardedNotificationFields {
    constructor(
        /**
         * @summary `fn_common_fields`.
         * @public
         * @readonly
         */
        readonly fn_common_fields: CommonFields,
        /**
         * @summary `forwarded_to`.
         * @public
         * @readonly
         */
        readonly forwarded_to: ForwardedTo,
        /**
         * @summary `fn_reason_code`.
         * @public
         * @readonly
         */
        readonly fn_reason_code: FNReasonCodeField,
        /**
         * @summary `fn_supplementary_information`.
         * @public
         * @readonly
         */
        readonly fn_supplementary_information: OPTIONAL<EDISupplementaryInformation>,
        /**
         * @summary `fn_extensions`.
         * @public
         * @readonly
         */
        readonly fn_extensions: OPTIONAL<FNExtensionsField>
    ) {}

    /**
     * @summary Restructures an object into a ForwardedNotificationFields
     * @description
     *
     * This takes an `object` and converts it to a `ForwardedNotificationFields`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ForwardedNotificationFields`.
     * @returns {ForwardedNotificationFields}
     */
    public static _from_object(
        _o: {
            [_K in keyof ForwardedNotificationFields]: ForwardedNotificationFields[_K];
        }
    ): ForwardedNotificationFields {
        return new ForwardedNotificationFields(
            _o.fn_common_fields,
            _o.forwarded_to,
            _o.fn_reason_code,
            _o.fn_supplementary_information,
            _o.fn_extensions
        );
    }
}

/**
 * @summary The Leading Root Component Types of ForwardedNotificationFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ForwardedNotificationFields: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'fn-common-fields',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'forwarded-to',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'fn-reason-code',
        false,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'fn-supplementary-information',
        true,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        'fn-extensions',
        true,
        $.hasTag(_TagClass.context, 4)
    ),
];

/**
 * @summary The Trailing Root Component Types of ForwardedNotificationFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ForwardedNotificationFields: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ForwardedNotificationFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ForwardedNotificationFields: $.ComponentSpec[] = [];

let _cached_decoder_for_ForwardedNotificationFields: $.ASN1Decoder<ForwardedNotificationFields> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ForwardedNotificationFields
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ForwardedNotificationFields} The decoded data structure.
 */
export function _decode_ForwardedNotificationFields(el: _Element) {
    if (!_cached_decoder_for_ForwardedNotificationFields) {
        _cached_decoder_for_ForwardedNotificationFields = function (
            el: _Element
        ): ForwardedNotificationFields {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let fn_common_fields!: CommonFields;
            let forwarded_to!: ForwardedTo;
            let fn_reason_code!: FNReasonCodeField;
            let fn_supplementary_information: OPTIONAL<EDISupplementaryInformation>;
            let fn_extensions: OPTIONAL<FNExtensionsField>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'fn-common-fields': (_el: _Element): void => {
                    fn_common_fields = $._decode_implicit<CommonFields>(
                        () => _decode_CommonFields
                    )(_el);
                },
                'forwarded-to': (_el: _Element): void => {
                    forwarded_to = $._decode_implicit<ForwardedTo>(
                        () => _decode_ForwardedTo
                    )(_el);
                },
                'fn-reason-code': (_el: _Element): void => {
                    fn_reason_code = $._decode_explicit<FNReasonCodeField>(
                        () => _decode_FNReasonCodeField
                    )(_el);
                },
                'fn-supplementary-information': (_el: _Element): void => {
                    fn_supplementary_information = $._decode_implicit<EDISupplementaryInformation>(
                        () => _decode_EDISupplementaryInformation
                    )(_el);
                },
                'fn-extensions': (_el: _Element): void => {
                    fn_extensions = $._decode_implicit<FNExtensionsField>(
                        () => _decode_FNExtensionsField
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ForwardedNotificationFields,
                _extension_additions_list_spec_for_ForwardedNotificationFields,
                _root_component_type_list_2_spec_for_ForwardedNotificationFields,
                undefined
            );
            return new ForwardedNotificationFields /* SEQUENCE_CONSTRUCTOR_CALL */(
                fn_common_fields,
                forwarded_to,
                fn_reason_code,
                fn_supplementary_information,
                fn_extensions
            );
        };
    }
    return _cached_decoder_for_ForwardedNotificationFields(el);
}

let _cached_encoder_for_ForwardedNotificationFields: $.ASN1Encoder<ForwardedNotificationFields> | null = null;

/**
 * @summary Encodes a(n) ForwardedNotificationFields into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ForwardedNotificationFields, encoded as an ASN.1 Element.
 */
export function _encode_ForwardedNotificationFields(
    value: ForwardedNotificationFields,
    elGetter: $.ASN1Encoder<ForwardedNotificationFields>
) {
    if (!_cached_encoder_for_ForwardedNotificationFields) {
        _cached_encoder_for_ForwardedNotificationFields = function (
            value: ForwardedNotificationFields        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_CommonFields,
                            $.BER
                        )(value.fn_common_fields, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => _encode_ForwardedTo,
                            $.BER
                        )(value.forwarded_to, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            2,
                            () => _encode_FNReasonCodeField,
                            $.BER
                        )(value.fn_reason_code, $.BER),
                        /* IF_ABSENT  */ value.fn_supplementary_information ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_EDISupplementaryInformation,
                                  $.BER
                              )(value.fn_supplementary_information, $.BER),
                        /* IF_ABSENT  */ value.fn_extensions === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  4,
                                  () => _encode_FNExtensionsField,
                                  $.BER
                              )(value.fn_extensions, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ForwardedNotificationFields(value, elGetter);
}


/* eslint-enable */
