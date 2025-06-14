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
    SequenceNumber,
    _decode_SequenceNumber,
    _encode_SequenceNumber,
} from '../MSAbstractService/SequenceNumber.ta.mjs';
import {
    AutoActionErrorIndication,
    _decode_AutoActionErrorIndication,
    _encode_AutoActionErrorIndication,
} from '../MSAbstractService/AutoActionErrorIndication.ta.mjs';
import {
    MSExtensions,
    _decode_MSExtensions,
    _encode_MSExtensions,
} from '../MSAbstractService/MSExtensions.ta.mjs';
/* START_OF_SYMBOL_DEFINITION CommonSubmissionResults */
/**
 * @summary CommonSubmissionResults
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CommonSubmissionResults ::= SET {
 *   created-entry                    [0]  SequenceNumber OPTIONAL,
 *   auto-action-error-indication     [1]  AutoActionErrorIndication OPTIONAL,
 *   ms-submission-result-extensions  [2]  MSExtensions OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class CommonSubmissionResults {
    constructor(
        /**
         * @summary `created_entry`.
         * @public
         * @readonly
         */
        readonly created_entry: OPTIONAL<SequenceNumber>,
        /**
         * @summary `auto_action_error_indication`.
         * @public
         * @readonly
         */
        readonly auto_action_error_indication: OPTIONAL<AutoActionErrorIndication>,
        /**
         * @summary `ms_submission_result_extensions`.
         * @public
         * @readonly
         */
        readonly ms_submission_result_extensions: OPTIONAL<MSExtensions>
    ) {}

    /**
     * @summary Restructures an object into a CommonSubmissionResults
     * @description
     *
     * This takes an `object` and converts it to a `CommonSubmissionResults`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CommonSubmissionResults`.
     * @returns {CommonSubmissionResults}
     */
    public static _from_object(
        _o: {
            [_K in keyof CommonSubmissionResults]: CommonSubmissionResults[_K];
        }
    ): CommonSubmissionResults {
        return new CommonSubmissionResults(
            _o.created_entry,
            _o.auto_action_error_indication,
            _o.ms_submission_result_extensions
        );
    }
}
/* END_OF_SYMBOL_DEFINITION CommonSubmissionResults */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CommonSubmissionResults */
/**
 * @summary The Leading Root Component Types of CommonSubmissionResults
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CommonSubmissionResults: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'created-entry',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'auto-action-error-indication',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'ms-submission-result-extensions',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CommonSubmissionResults */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CommonSubmissionResults */
/**
 * @summary The Trailing Root Component Types of CommonSubmissionResults
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CommonSubmissionResults: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CommonSubmissionResults */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CommonSubmissionResults */
/**
 * @summary The Extension Addition Component Types of CommonSubmissionResults
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CommonSubmissionResults: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CommonSubmissionResults */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CommonSubmissionResults */
let _cached_decoder_for_CommonSubmissionResults: $.ASN1Decoder<CommonSubmissionResults> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CommonSubmissionResults */

/* START_OF_SYMBOL_DEFINITION _decode_CommonSubmissionResults */
/**
 * @summary Decodes an ASN.1 element into a(n) CommonSubmissionResults
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CommonSubmissionResults} The decoded data structure.
 */
export function _decode_CommonSubmissionResults(el: _Element) {
    if (!_cached_decoder_for_CommonSubmissionResults) {
        _cached_decoder_for_CommonSubmissionResults = function (
            el: _Element
        ): CommonSubmissionResults {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let created_entry: OPTIONAL<SequenceNumber>;
            let auto_action_error_indication: OPTIONAL<AutoActionErrorIndication>;
            let ms_submission_result_extensions: OPTIONAL<MSExtensions>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'created-entry': (_el: _Element): void => {
                    created_entry = $._decode_explicit<SequenceNumber>(
                        () => _decode_SequenceNumber
                    )(_el);
                },
                'auto-action-error-indication': (_el: _Element): void => {
                    auto_action_error_indication = $._decode_explicit<AutoActionErrorIndication>(
                        () => _decode_AutoActionErrorIndication
                    )(_el);
                },
                'ms-submission-result-extensions': (_el: _Element): void => {
                    ms_submission_result_extensions = $._decode_explicit<MSExtensions>(
                        () => _decode_MSExtensions
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CommonSubmissionResults,
                _extension_additions_list_spec_for_CommonSubmissionResults,
                _root_component_type_list_2_spec_for_CommonSubmissionResults,
                undefined
            );
            return new CommonSubmissionResults /* SET_CONSTRUCTOR_CALL */(
                created_entry,
                auto_action_error_indication,
                ms_submission_result_extensions
            );
        };
    }
    return _cached_decoder_for_CommonSubmissionResults(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CommonSubmissionResults */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CommonSubmissionResults */
let _cached_encoder_for_CommonSubmissionResults: $.ASN1Encoder<CommonSubmissionResults> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CommonSubmissionResults */

/* START_OF_SYMBOL_DEFINITION _encode_CommonSubmissionResults */
/**
 * @summary Encodes a(n) CommonSubmissionResults into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommonSubmissionResults, encoded as an ASN.1 Element.
 */
export function _encode_CommonSubmissionResults(
    value: CommonSubmissionResults,
    elGetter: $.ASN1Encoder<CommonSubmissionResults>
) {
    if (!_cached_encoder_for_CommonSubmissionResults) {
        _cached_encoder_for_CommonSubmissionResults = function (
            value: CommonSubmissionResults        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.created_entry === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_SequenceNumber,
                                  $.BER
                              )(value.created_entry, $.BER),
                        /* IF_ABSENT  */ value.auto_action_error_indication ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_AutoActionErrorIndication,
                                  $.BER
                              )(value.auto_action_error_indication, $.BER),
                        /* IF_ABSENT  */ value.ms_submission_result_extensions ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_MSExtensions,
                                  $.BER
                              )(value.ms_submission_result_extensions, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_CommonSubmissionResults(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CommonSubmissionResults */

/* eslint-enable */
