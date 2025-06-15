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
    MessageSubmissionResult,
    _decode_MessageSubmissionResult,
    _encode_MessageSubmissionResult,
} from '../MTSAbstractService/MessageSubmissionResult.ta.mjs';
import {
    CommonSubmissionResults,
    _decode_CommonSubmissionResults,
    _encode_CommonSubmissionResults,
} from '../MSAbstractService/CommonSubmissionResults.ta.mjs';
import {
    MessageSubmissionIdentifier,
    _decode_MessageSubmissionIdentifier,
    _encode_MessageSubmissionIdentifier,
} from '../MTSAbstractService/MessageSubmissionIdentifier.ta.mjs';
import {
    MessageSubmissionTime,
    _decode_MessageSubmissionTime,
    _encode_MessageSubmissionTime,
} from '../MTSAbstractService/MessageSubmissionTime.ta.mjs';
import {
    ContentIdentifier,
    _decode_ContentIdentifier,
    _encode_ContentIdentifier,
} from '../MTSAbstractService/ContentIdentifier.ta.mjs';
import {
    ExtensionField,
    _decode_ExtensionField,
    _encode_ExtensionField,
} from '../MTSAbstractService/ExtensionField.ta.mjs';
import {
    _root_component_type_list_1_spec_for_MessageSubmissionResult,
    _root_component_type_list_2_spec_for_MessageSubmissionResult,
    _extension_additions_list_spec_for_MessageSubmissionResult,
} from '../MTSAbstractService/MessageSubmissionResult.ta.mjs';

/**
 * @summary MSMessageSubmissionResult_mts_result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MSMessageSubmissionResult-mts-result ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class MSMessageSubmissionResult_mts_result implements MessageSubmissionResult {
    constructor(
        /**
         * @summary `message_submission_identifier`.
         * @public
         * @readonly
         */
        readonly message_submission_identifier: MessageSubmissionIdentifier /* REPLICATED_COMPONENT */,
        /**
         * @summary `message_submission_time`.
         * @public
         * @readonly
         */
        readonly message_submission_time: MessageSubmissionTime /* REPLICATED_COMPONENT */,
        /**
         * @summary `content_identifier`.
         * @public
         * @readonly
         */
        readonly content_identifier: OPTIONAL<ContentIdentifier> /* REPLICATED_COMPONENT */,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<
            ExtensionField[]
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `ms_message_result`.
         * @public
         * @readonly
         */
        readonly ms_message_result: OPTIONAL<CommonSubmissionResults>
    ) {}

    /**
     * @summary Restructures an object into a MSMessageSubmissionResult_mts_result
     * @description
     *
     * This takes an `object` and converts it to a `MSMessageSubmissionResult_mts_result`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MSMessageSubmissionResult_mts_result`.
     * @returns {MSMessageSubmissionResult_mts_result}
     */
    public static _from_object(
        _o: {
            [_K in keyof MSMessageSubmissionResult_mts_result]: MSMessageSubmissionResult_mts_result[_K];
        }
    ): MSMessageSubmissionResult_mts_result {
        return new MSMessageSubmissionResult_mts_result(
            _o.message_submission_identifier,
            _o.message_submission_time,
            _o.content_identifier,
            _o.extensions,
            _o.ms_message_result
        );
    }

    /**
     * @summary Getter that returns the default value for `extensions`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_extensions(): ExtensionField[] {
        return [];
    }
}

/**
 * @summary The Leading Root Component Types of MSMessageSubmissionResult_mts_result
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MSMessageSubmissionResult_mts_result: $.ComponentSpec[] = [
    ..._root_component_type_list_1_spec_for_MessageSubmissionResult,
    new $.ComponentSpec(
        'ms-message-result',
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
];

/**
 * @summary The Trailing Root Component Types of MSMessageSubmissionResult_mts_result
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MSMessageSubmissionResult_mts_result: $.ComponentSpec[] = [
    ..._root_component_type_list_2_spec_for_MessageSubmissionResult,
];

/**
 * @summary The Extension Addition Component Types of MSMessageSubmissionResult_mts_result
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MSMessageSubmissionResult_mts_result: $.ComponentSpec[] = [
    ..._extension_additions_list_spec_for_MessageSubmissionResult,
];

let _cached_decoder_for_MSMessageSubmissionResult_mts_result: $.ASN1Decoder<MSMessageSubmissionResult_mts_result> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MSMessageSubmissionResult_mts_result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MSMessageSubmissionResult_mts_result} The decoded data structure.
 */
export function _decode_MSMessageSubmissionResult_mts_result(el: _Element) {
    if (!_cached_decoder_for_MSMessageSubmissionResult_mts_result) {
        _cached_decoder_for_MSMessageSubmissionResult_mts_result = function (
            el: _Element
        ): MSMessageSubmissionResult_mts_result {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let message_submission_identifier!: MessageSubmissionIdentifier;
            let message_submission_time!: MessageSubmissionTime;
            let content_identifier: OPTIONAL<ContentIdentifier>;
            let extensions: OPTIONAL<ExtensionField[]> =
                MSMessageSubmissionResult_mts_result._default_value_for_extensions;
            let ms_message_result: OPTIONAL<CommonSubmissionResults>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'message-submission-identifier': (_el: _Element): void => {
                    message_submission_identifier = _decode_MessageSubmissionIdentifier(
                        _el
                    );
                },
                'message-submission-time': (_el: _Element): void => {
                    message_submission_time = $._decode_implicit<MessageSubmissionTime>(
                        () => _decode_MessageSubmissionTime
                    )(_el);
                },
                'content-identifier': (_el: _Element): void => {
                    content_identifier = _decode_ContentIdentifier(_el);
                },
                extensions: (_el: _Element): void => {
                    extensions = $._decode_implicit<ExtensionField[]>(() =>
                        $._decodeSetOf<ExtensionField>(
                            () => _decode_ExtensionField
                        )
                    )(_el);
                },
                'ms-message-result': (_el: _Element): void => {
                    ms_message_result = $._decode_explicit<CommonSubmissionResults>(
                        () => _decode_CommonSubmissionResults
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_MSMessageSubmissionResult_mts_result,
                _extension_additions_list_spec_for_MSMessageSubmissionResult_mts_result,
                _root_component_type_list_2_spec_for_MSMessageSubmissionResult_mts_result,
                undefined
            );
            return new MSMessageSubmissionResult_mts_result /* SET_CONSTRUCTOR_CALL */(
                message_submission_identifier,
                message_submission_time,
                content_identifier,
                extensions,
                ms_message_result
            );
        };
    }
    return _cached_decoder_for_MSMessageSubmissionResult_mts_result(el);
}

let _cached_encoder_for_MSMessageSubmissionResult_mts_result: $.ASN1Encoder<MSMessageSubmissionResult_mts_result> | null = null;

/**
 * @summary Encodes a(n) MSMessageSubmissionResult_mts_result into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MSMessageSubmissionResult_mts_result, encoded as an ASN.1 Element.
 */
export function _encode_MSMessageSubmissionResult_mts_result(
    value: MSMessageSubmissionResult_mts_result,
    elGetter: $.ASN1Encoder<MSMessageSubmissionResult_mts_result>
) {
    if (!_cached_encoder_for_MSMessageSubmissionResult_mts_result) {
        _cached_encoder_for_MSMessageSubmissionResult_mts_result = function (
            value: MSMessageSubmissionResult_mts_result        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_MessageSubmissionIdentifier(
                            value.message_submission_identifier,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_MessageSubmissionTime,
                            $.BER
                        )(value.message_submission_time, $.BER),
                        /* IF_ABSENT  */ value.content_identifier === undefined
                            ? undefined
                            : _encode_ContentIdentifier(
                                  value.content_identifier,
                                  $.BER
                              ),
                        /* IF_DEFAULT */ value.extensions === undefined ||
                        $.deepEq(
                            value.extensions,
                            MSMessageSubmissionResult_mts_result._default_value_for_extensions
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () =>
                                      $._encodeSetOf<ExtensionField>(
                                          () => _encode_ExtensionField,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.extensions, $.BER),
                        /* IF_ABSENT  */ value.ms_message_result === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  4,
                                  () => _encode_CommonSubmissionResults,
                                  $.BER
                              )(value.ms_message_result, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_MSMessageSubmissionResult_mts_result(
        value,
        elGetter
    );
}


/* eslint-enable */
