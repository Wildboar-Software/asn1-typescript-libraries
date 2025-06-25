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
    EDISupplementaryInformation,
    _decode_EDISupplementaryInformation,
    _encode_EDISupplementaryInformation,
} from '../EDIMSInformationObjects/EDISupplementaryInformation.ta.mjs';
import {
    MSSubmissionOptions,
    _decode_MSSubmissionOptions,
    _encode_MSSubmissionOptions,
} from '../MSAbstractService/MSSubmissionOptions.ta.mjs';
/**
 * @summary EDIAutoAcknowledgementRegistrationParameter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDIAutoAcknowledgementRegistrationParameter ::= SET {
 *   auto-acknowledge-suppl-receipt-info
 *     [0]  EDISupplementaryInformation OPTIONAL,
 *   submission-options                   [1]  MSSubmissionOptions OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class EDIAutoAcknowledgementRegistrationParameter {
    constructor(
        /**
         * @summary `auto_acknowledge_suppl_receipt_info`.
         * @public
         * @readonly
         */
        readonly auto_acknowledge_suppl_receipt_info: OPTIONAL<EDISupplementaryInformation>,
        /**
         * @summary `submission_options`.
         * @public
         * @readonly
         */
        readonly submission_options: OPTIONAL<MSSubmissionOptions>
    ) {}

    /**
     * @summary Restructures an object into a EDIAutoAcknowledgementRegistrationParameter
     * @description
     *
     * This takes an `object` and converts it to a `EDIAutoAcknowledgementRegistrationParameter`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EDIAutoAcknowledgementRegistrationParameter`.
     * @returns {EDIAutoAcknowledgementRegistrationParameter}
     */
    public static _from_object(
        _o: {
            [_K in keyof EDIAutoAcknowledgementRegistrationParameter]: EDIAutoAcknowledgementRegistrationParameter[_K];
        }
    ): EDIAutoAcknowledgementRegistrationParameter {
        return new EDIAutoAcknowledgementRegistrationParameter(
            _o.auto_acknowledge_suppl_receipt_info,
            _o.submission_options
        );
    }
}

/**
 * @summary The Leading Root Component Types of EDIAutoAcknowledgementRegistrationParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EDIAutoAcknowledgementRegistrationParameter: $.ComponentSpec[] = [
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
 * @summary The Trailing Root Component Types of EDIAutoAcknowledgementRegistrationParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EDIAutoAcknowledgementRegistrationParameter: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of EDIAutoAcknowledgementRegistrationParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EDIAutoAcknowledgementRegistrationParameter: $.ComponentSpec[] = [];

let _cached_decoder_for_EDIAutoAcknowledgementRegistrationParameter: $.ASN1Decoder<EDIAutoAcknowledgementRegistrationParameter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EDIAutoAcknowledgementRegistrationParameter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EDIAutoAcknowledgementRegistrationParameter} The decoded data structure.
 */
export function _decode_EDIAutoAcknowledgementRegistrationParameter(
    el: _Element
): EDIAutoAcknowledgementRegistrationParameter {
    if (!_cached_decoder_for_EDIAutoAcknowledgementRegistrationParameter) {
        _cached_decoder_for_EDIAutoAcknowledgementRegistrationParameter = function (
            el: _Element
        ): EDIAutoAcknowledgementRegistrationParameter {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let auto_acknowledge_suppl_receipt_info: OPTIONAL<EDISupplementaryInformation>;
            let submission_options: OPTIONAL<MSSubmissionOptions>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                'auto-acknowledge-suppl-receipt-info': (
                    _el: _Element
                ): void => {
                    auto_acknowledge_suppl_receipt_info = $._decode_explicit<EDISupplementaryInformation>(
                        () => _decode_EDISupplementaryInformation
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
                _root_component_type_list_1_spec_for_EDIAutoAcknowledgementRegistrationParameter,
                _extension_additions_list_spec_for_EDIAutoAcknowledgementRegistrationParameter,
                _root_component_type_list_2_spec_for_EDIAutoAcknowledgementRegistrationParameter,
                undefined
            );
            return new EDIAutoAcknowledgementRegistrationParameter /* SET_CONSTRUCTOR_CALL */(
                auto_acknowledge_suppl_receipt_info,
                submission_options
            );
        };
    }
    return _cached_decoder_for_EDIAutoAcknowledgementRegistrationParameter(el);
}

let _cached_encoder_for_EDIAutoAcknowledgementRegistrationParameter: $.ASN1Encoder<EDIAutoAcknowledgementRegistrationParameter> | null = null;

/**
 * @summary Encodes a(n) EDIAutoAcknowledgementRegistrationParameter into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EDIAutoAcknowledgementRegistrationParameter, encoded as an ASN.1 Element.
 */
export function _encode_EDIAutoAcknowledgementRegistrationParameter(
    value: EDIAutoAcknowledgementRegistrationParameter,
    elGetter: $.ASN1Encoder<EDIAutoAcknowledgementRegistrationParameter>
): _Element {
    if (!_cached_encoder_for_EDIAutoAcknowledgementRegistrationParameter) {
        _cached_encoder_for_EDIAutoAcknowledgementRegistrationParameter = function (
            value: EDIAutoAcknowledgementRegistrationParameter        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.auto_acknowledge_suppl_receipt_info ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_EDISupplementaryInformation,
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
    return _cached_encoder_for_EDIAutoAcknowledgementRegistrationParameter(
        value,
        elGetter
    );
}


/* eslint-enable */
