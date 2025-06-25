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
    SupplReceiptInfoField,
    _decode_SupplReceiptInfoField,
    _encode_SupplReceiptInfoField,
} from '../IPMSInformationObjects/SupplReceiptInfoField.ta.mjs';
import {
    MSSubmissionOptions,
    _decode_MSSubmissionOptions,
    _encode_MSSubmissionOptions,
} from '../MSAbstractService/MSSubmissionOptions.ta.mjs';
/**
 * @summary IPMAutoAcknowledgementRegistrationParameter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IPMAutoAcknowledgementRegistrationParameter ::= SET {
 *   auto-acknowledge-suppl-receipt-info  [0]  SupplReceiptInfoField OPTIONAL,
 *   submission-options                   [1]  MSSubmissionOptions OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class IPMAutoAcknowledgementRegistrationParameter {
    constructor(
        /**
         * @summary `auto_acknowledge_suppl_receipt_info`.
         * @public
         * @readonly
         */
        readonly auto_acknowledge_suppl_receipt_info: OPTIONAL<SupplReceiptInfoField>,
        /**
         * @summary `submission_options`.
         * @public
         * @readonly
         */
        readonly submission_options: OPTIONAL<MSSubmissionOptions>
    ) {}

    /**
     * @summary Restructures an object into a IPMAutoAcknowledgementRegistrationParameter
     * @description
     *
     * This takes an `object` and converts it to a `IPMAutoAcknowledgementRegistrationParameter`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IPMAutoAcknowledgementRegistrationParameter`.
     * @returns {IPMAutoAcknowledgementRegistrationParameter}
     */
    public static _from_object(
        _o: {
            [_K in keyof IPMAutoAcknowledgementRegistrationParameter]: IPMAutoAcknowledgementRegistrationParameter[_K];
        }
    ): IPMAutoAcknowledgementRegistrationParameter {
        return new IPMAutoAcknowledgementRegistrationParameter(
            _o.auto_acknowledge_suppl_receipt_info,
            _o.submission_options
        );
    }
}

/**
 * @summary The Leading Root Component Types of IPMAutoAcknowledgementRegistrationParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IPMAutoAcknowledgementRegistrationParameter: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'auto-acknowledge-suppl-receipt-info',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'submission-options',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of IPMAutoAcknowledgementRegistrationParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IPMAutoAcknowledgementRegistrationParameter: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of IPMAutoAcknowledgementRegistrationParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IPMAutoAcknowledgementRegistrationParameter: $.ComponentSpec[] = [];

let _cached_decoder_for_IPMAutoAcknowledgementRegistrationParameter: $.ASN1Decoder<IPMAutoAcknowledgementRegistrationParameter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPMAutoAcknowledgementRegistrationParameter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IPMAutoAcknowledgementRegistrationParameter} The decoded data structure.
 */
export function _decode_IPMAutoAcknowledgementRegistrationParameter(
    el: _Element
): IPMAutoAcknowledgementRegistrationParameter {
    if (!_cached_decoder_for_IPMAutoAcknowledgementRegistrationParameter) {
        _cached_decoder_for_IPMAutoAcknowledgementRegistrationParameter = function (
            el: _Element
        ): IPMAutoAcknowledgementRegistrationParameter {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let auto_acknowledge_suppl_receipt_info: OPTIONAL<SupplReceiptInfoField>;
            let submission_options: OPTIONAL<MSSubmissionOptions>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                'auto-acknowledge-suppl-receipt-info': (
                    _el: _Element
                ): void => {
                    auto_acknowledge_suppl_receipt_info = $._decode_explicit<SupplReceiptInfoField>(
                        () => _decode_SupplReceiptInfoField
                    )(_el);
                },
                'submission-options': (_el: _Element): void => {
                    submission_options = $._decode_explicit<MSSubmissionOptions>(
                        () => _decode_MSSubmissionOptions
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_IPMAutoAcknowledgementRegistrationParameter,
                _extension_additions_list_spec_for_IPMAutoAcknowledgementRegistrationParameter,
                _root_component_type_list_2_spec_for_IPMAutoAcknowledgementRegistrationParameter,
                undefined
            );
            return new IPMAutoAcknowledgementRegistrationParameter /* SET_CONSTRUCTOR_CALL */(
                auto_acknowledge_suppl_receipt_info,
                submission_options
            );
        };
    }
    return _cached_decoder_for_IPMAutoAcknowledgementRegistrationParameter(el);
}

let _cached_encoder_for_IPMAutoAcknowledgementRegistrationParameter: $.ASN1Encoder<IPMAutoAcknowledgementRegistrationParameter> | null = null;

/**
 * @summary Encodes a(n) IPMAutoAcknowledgementRegistrationParameter into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPMAutoAcknowledgementRegistrationParameter, encoded as an ASN.1 Element.
 */
export function _encode_IPMAutoAcknowledgementRegistrationParameter(
    value: IPMAutoAcknowledgementRegistrationParameter,
    elGetter: $.ASN1Encoder<IPMAutoAcknowledgementRegistrationParameter>
): _Element {
    if (!_cached_encoder_for_IPMAutoAcknowledgementRegistrationParameter) {
        _cached_encoder_for_IPMAutoAcknowledgementRegistrationParameter = function (
            value: IPMAutoAcknowledgementRegistrationParameter        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.auto_acknowledge_suppl_receipt_info ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_SupplReceiptInfoField,
                                  $.BER
                              )(
                                  value.auto_acknowledge_suppl_receipt_info,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.submission_options === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_MSSubmissionOptions,
                                  $.BER
                              )(value.submission_options, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_IPMAutoAcknowledgementRegistrationParameter(
        value,
        elGetter
    );
}


/* eslint-enable */
