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
    CommonFields,
    _decode_CommonFields,
    _encode_CommonFields,
} from '../EDIMSInformationObjects/CommonFields.ta.mjs';
import {
    NNReasonCodeField,
    _decode_NNReasonCodeField,
    _encode_NNReasonCodeField,
} from '../EDIMSInformationObjects/NNReasonCodeField.ta.mjs';
import {
    EDISupplementaryInformation,
    _decode_EDISupplementaryInformation,
    _encode_EDISupplementaryInformation,
} from '../EDIMSInformationObjects/EDISupplementaryInformation.ta.mjs';
import {
    NNExtensionsField,
    _decode_NNExtensionsField,
    _encode_NNExtensionsField,
} from '../EDIMSInformationObjects/NNExtensionsField.ta.mjs';
/* START_OF_SYMBOL_DEFINITION NegativeNotificationFields */
/**
 * @summary NegativeNotificationFields
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NegativeNotificationFields ::= SEQUENCE {
 *   nn-common-fields              [0]  CommonFields,
 *   nn-reason-code                [1]  NNReasonCodeField,
 *   nn-supplementary-information  [2]  EDISupplementaryInformation OPTIONAL,
 *   nn-extensions                 [3]  NNExtensionsField OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class NegativeNotificationFields {
    constructor(
        /**
         * @summary `nn_common_fields`.
         * @public
         * @readonly
         */
        readonly nn_common_fields: CommonFields,
        /**
         * @summary `nn_reason_code`.
         * @public
         * @readonly
         */
        readonly nn_reason_code: NNReasonCodeField,
        /**
         * @summary `nn_supplementary_information`.
         * @public
         * @readonly
         */
        readonly nn_supplementary_information: OPTIONAL<EDISupplementaryInformation>,
        /**
         * @summary `nn_extensions`.
         * @public
         * @readonly
         */
        readonly nn_extensions: OPTIONAL<NNExtensionsField>
    ) {}

    /**
     * @summary Restructures an object into a NegativeNotificationFields
     * @description
     *
     * This takes an `object` and converts it to a `NegativeNotificationFields`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NegativeNotificationFields`.
     * @returns {NegativeNotificationFields}
     */
    public static _from_object(
        _o: {
            [_K in keyof NegativeNotificationFields]: NegativeNotificationFields[_K];
        }
    ): NegativeNotificationFields {
        return new NegativeNotificationFields(
            _o.nn_common_fields,
            _o.nn_reason_code,
            _o.nn_supplementary_information,
            _o.nn_extensions
        );
    }
}
/* END_OF_SYMBOL_DEFINITION NegativeNotificationFields */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NegativeNotificationFields */
/**
 * @summary The Leading Root Component Types of NegativeNotificationFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NegativeNotificationFields: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'nn-common-fields',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'nn-reason-code',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'nn-supplementary-information',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'nn-extensions',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NegativeNotificationFields */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NegativeNotificationFields */
/**
 * @summary The Trailing Root Component Types of NegativeNotificationFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NegativeNotificationFields: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NegativeNotificationFields */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NegativeNotificationFields */
/**
 * @summary The Extension Addition Component Types of NegativeNotificationFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NegativeNotificationFields: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NegativeNotificationFields */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NegativeNotificationFields */
let _cached_decoder_for_NegativeNotificationFields: $.ASN1Decoder<NegativeNotificationFields> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NegativeNotificationFields */

/* START_OF_SYMBOL_DEFINITION _decode_NegativeNotificationFields */
/**
 * @summary Decodes an ASN.1 element into a(n) NegativeNotificationFields
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NegativeNotificationFields} The decoded data structure.
 */
export function _decode_NegativeNotificationFields(el: _Element) {
    if (!_cached_decoder_for_NegativeNotificationFields) {
        _cached_decoder_for_NegativeNotificationFields = function (
            el: _Element
        ): NegativeNotificationFields {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let nn_common_fields!: CommonFields;
            let nn_reason_code!: NNReasonCodeField;
            let nn_supplementary_information: OPTIONAL<EDISupplementaryInformation>;
            let nn_extensions: OPTIONAL<NNExtensionsField>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'nn-common-fields': (_el: _Element): void => {
                    nn_common_fields = $._decode_implicit<CommonFields>(
                        () => _decode_CommonFields
                    )(_el);
                },
                'nn-reason-code': (_el: _Element): void => {
                    nn_reason_code = $._decode_explicit<NNReasonCodeField>(
                        () => _decode_NNReasonCodeField
                    )(_el);
                },
                'nn-supplementary-information': (_el: _Element): void => {
                    nn_supplementary_information = $._decode_implicit<EDISupplementaryInformation>(
                        () => _decode_EDISupplementaryInformation
                    )(_el);
                },
                'nn-extensions': (_el: _Element): void => {
                    nn_extensions = $._decode_implicit<NNExtensionsField>(
                        () => _decode_NNExtensionsField
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_NegativeNotificationFields,
                _extension_additions_list_spec_for_NegativeNotificationFields,
                _root_component_type_list_2_spec_for_NegativeNotificationFields,
                undefined
            );
            return new NegativeNotificationFields /* SEQUENCE_CONSTRUCTOR_CALL */(
                nn_common_fields,
                nn_reason_code,
                nn_supplementary_information,
                nn_extensions
            );
        };
    }
    return _cached_decoder_for_NegativeNotificationFields(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NegativeNotificationFields */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NegativeNotificationFields */
let _cached_encoder_for_NegativeNotificationFields: $.ASN1Encoder<NegativeNotificationFields> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NegativeNotificationFields */

/* START_OF_SYMBOL_DEFINITION _encode_NegativeNotificationFields */
/**
 * @summary Encodes a(n) NegativeNotificationFields into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NegativeNotificationFields, encoded as an ASN.1 Element.
 */
export function _encode_NegativeNotificationFields(
    value: NegativeNotificationFields,
    elGetter: $.ASN1Encoder<NegativeNotificationFields>
) {
    if (!_cached_encoder_for_NegativeNotificationFields) {
        _cached_encoder_for_NegativeNotificationFields = function (
            value: NegativeNotificationFields        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_CommonFields,
                            $.BER
                        )(value.nn_common_fields, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            1,
                            () => _encode_NNReasonCodeField,
                            $.BER
                        )(value.nn_reason_code, $.BER),
                        /* IF_ABSENT  */ value.nn_supplementary_information ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_EDISupplementaryInformation,
                                  $.BER
                              )(value.nn_supplementary_information, $.BER),
                        /* IF_ABSENT  */ value.nn_extensions === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_NNExtensionsField,
                                  $.BER
                              )(value.nn_extensions, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_NegativeNotificationFields(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NegativeNotificationFields */

/* eslint-enable */
