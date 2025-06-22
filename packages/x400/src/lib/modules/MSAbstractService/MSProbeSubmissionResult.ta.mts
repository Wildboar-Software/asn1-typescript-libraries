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
    ProbeSubmissionResult,
    _decode_ProbeSubmissionResult,
    _encode_ProbeSubmissionResult,
} from '../MTSAbstractService/ProbeSubmissionResult.ta.mjs';
import {
    CommonSubmissionResults,
    _decode_CommonSubmissionResults,
    _encode_CommonSubmissionResults,
} from '../MSAbstractService/CommonSubmissionResults.ta.mjs';
import {
    ProbeSubmissionIdentifier,
    _decode_ProbeSubmissionIdentifier,
    _encode_ProbeSubmissionIdentifier,
} from '../MTSAbstractService/ProbeSubmissionIdentifier.ta.mjs';
import {
    ProbeSubmissionTime,
    _decode_ProbeSubmissionTime,
    _encode_ProbeSubmissionTime,
} from '../MTSAbstractService/ProbeSubmissionTime.ta.mjs';
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
    _root_component_type_list_1_spec_for_ProbeSubmissionResult,
    _root_component_type_list_2_spec_for_ProbeSubmissionResult,
    _extension_additions_list_spec_for_ProbeSubmissionResult,
} from '../MTSAbstractService/ProbeSubmissionResult.ta.mjs';

/**
 * @summary MSProbeSubmissionResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MSProbeSubmissionResult ::= SET {
 *   COMPONENTS OF
 *     ProbeSubmissionResult -- This imported type has IMPLICIT tags --,
 *   -- 1994 extension
 *   ms-probe-result  [4]  CommonSubmissionResults OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class MSProbeSubmissionResult implements ProbeSubmissionResult {
    constructor(
        /**
         * @summary `probe_submission_identifier`.
         * @public
         * @readonly
         */
        readonly probe_submission_identifier: ProbeSubmissionIdentifier /* REPLICATED_COMPONENT */,
        /**
         * @summary `probe_submission_time`.
         * @public
         * @readonly
         */
        readonly probe_submission_time: ProbeSubmissionTime /* REPLICATED_COMPONENT */,
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
         * @summary `ms_probe_result`.
         * @public
         * @readonly
         */
        readonly ms_probe_result: OPTIONAL<CommonSubmissionResults>
    ) {}

    /**
     * @summary Restructures an object into a MSProbeSubmissionResult
     * @description
     *
     * This takes an `object` and converts it to a `MSProbeSubmissionResult`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MSProbeSubmissionResult`.
     * @returns {MSProbeSubmissionResult}
     */
    public static _from_object(
        _o: {
            [_K in keyof MSProbeSubmissionResult]: MSProbeSubmissionResult[_K];
        }
    ): MSProbeSubmissionResult {
        return new MSProbeSubmissionResult(
            _o.probe_submission_identifier,
            _o.probe_submission_time,
            _o.content_identifier,
            _o.extensions,
            _o.ms_probe_result
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
 * @summary The Leading Root Component Types of MSProbeSubmissionResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MSProbeSubmissionResult: $.ComponentSpec[] = [
    ..._root_component_type_list_1_spec_for_ProbeSubmissionResult,
    new $.ComponentSpec(
        'ms-probe-result',
        true,
        $.hasTag(_TagClass.context, 4)
    ),
];

/**
 * @summary The Trailing Root Component Types of MSProbeSubmissionResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MSProbeSubmissionResult: $.ComponentSpec[] = [
    ..._root_component_type_list_2_spec_for_ProbeSubmissionResult,
];

/**
 * @summary The Extension Addition Component Types of MSProbeSubmissionResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MSProbeSubmissionResult: $.ComponentSpec[] = [
    ..._extension_additions_list_spec_for_ProbeSubmissionResult,
];

let _cached_decoder_for_MSProbeSubmissionResult: $.ASN1Decoder<MSProbeSubmissionResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MSProbeSubmissionResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MSProbeSubmissionResult} The decoded data structure.
 */
export function _decode_MSProbeSubmissionResult(el: _Element) {
    if (!_cached_decoder_for_MSProbeSubmissionResult) {
        _cached_decoder_for_MSProbeSubmissionResult = function (
            el: _Element
        ): MSProbeSubmissionResult {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let probe_submission_identifier!: ProbeSubmissionIdentifier;
            let probe_submission_time!: ProbeSubmissionTime;
            let content_identifier: OPTIONAL<ContentIdentifier>;
            let extensions: OPTIONAL<ExtensionField[]> =
                MSProbeSubmissionResult._default_value_for_extensions;
            let ms_probe_result: OPTIONAL<CommonSubmissionResults>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'probe-submission-identifier': (_el: _Element): void => {
                    probe_submission_identifier = _decode_ProbeSubmissionIdentifier(
                        _el
                    );
                },
                'probe-submission-time': (_el: _Element): void => {
                    probe_submission_time = $._decode_implicit<ProbeSubmissionTime>(
                        () => _decode_ProbeSubmissionTime
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
                'ms-probe-result': (_el: _Element): void => {
                    ms_probe_result = $._decode_explicit<CommonSubmissionResults>(
                        () => _decode_CommonSubmissionResults
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_MSProbeSubmissionResult,
                _extension_additions_list_spec_for_MSProbeSubmissionResult,
                _root_component_type_list_2_spec_for_MSProbeSubmissionResult,
                undefined
            );
            return new MSProbeSubmissionResult /* SET_CONSTRUCTOR_CALL */(
                probe_submission_identifier,
                probe_submission_time,
                content_identifier,
                extensions,
                ms_probe_result
            );
        };
    }
    return _cached_decoder_for_MSProbeSubmissionResult(el);
}

let _cached_encoder_for_MSProbeSubmissionResult: $.ASN1Encoder<MSProbeSubmissionResult> | null = null;

/**
 * @summary Encodes a(n) MSProbeSubmissionResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MSProbeSubmissionResult, encoded as an ASN.1 Element.
 */
export function _encode_MSProbeSubmissionResult(
    value: MSProbeSubmissionResult,
    elGetter: $.ASN1Encoder<MSProbeSubmissionResult>
) {
    if (!_cached_encoder_for_MSProbeSubmissionResult) {
        _cached_encoder_for_MSProbeSubmissionResult = function (
            value: MSProbeSubmissionResult        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ProbeSubmissionIdentifier(
                            value.probe_submission_identifier,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_ProbeSubmissionTime,
                            $.BER
                        )(value.probe_submission_time, $.BER),
                        /* IF_ABSENT  */ value.content_identifier === undefined
                            ? undefined
                            : _encode_ContentIdentifier(
                                  value.content_identifier,
                                  $.BER
                              ),
                        /* IF_DEFAULT */ value.extensions === undefined ||
                        $.deepEq(
                            value.extensions,
                            MSProbeSubmissionResult._default_value_for_extensions
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
                        /* IF_ABSENT  */ value.ms_probe_result === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  4,
                                  () => _encode_CommonSubmissionResults,
                                  $.BER
                              )(value.ms_probe_result, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_MSProbeSubmissionResult(value, elGetter);
}


/* eslint-enable */
