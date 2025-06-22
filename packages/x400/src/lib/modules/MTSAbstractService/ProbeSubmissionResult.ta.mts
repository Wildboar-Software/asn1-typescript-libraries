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
import * as $ from '@wildboar/asn1/functional';
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
/**
 * @summary ProbeSubmissionResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProbeSubmissionResult ::= SET {
 *   probe-submission-identifier  ProbeSubmissionIdentifier,
 *   probe-submission-time        [0]  ProbeSubmissionTime,
 *   content-identifier           ContentIdentifier OPTIONAL,
 *   extensions
 *     [1]  SET OF ExtensionField{{ProbeResultExtensions}} DEFAULT {}
 * }
 * ```
 *
 * @class
 */
export class ProbeSubmissionResult {
    constructor(
        /**
         * @summary `probe_submission_identifier`.
         * @public
         * @readonly
         */
        readonly probe_submission_identifier: ProbeSubmissionIdentifier,
        /**
         * @summary `probe_submission_time`.
         * @public
         * @readonly
         */
        readonly probe_submission_time: ProbeSubmissionTime,
        /**
         * @summary `content_identifier`.
         * @public
         * @readonly
         */
        readonly content_identifier: OPTIONAL<ContentIdentifier>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<ExtensionField[]>
    ) {}

    /**
     * @summary Restructures an object into a ProbeSubmissionResult
     * @description
     *
     * This takes an `object` and converts it to a `ProbeSubmissionResult`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProbeSubmissionResult`.
     * @returns {ProbeSubmissionResult}
     */
    public static _from_object(
        _o: { [_K in keyof ProbeSubmissionResult]: ProbeSubmissionResult[_K] }
    ): ProbeSubmissionResult {
        return new ProbeSubmissionResult(
            _o.probe_submission_identifier,
            _o.probe_submission_time,
            _o.content_identifier,
            _o.extensions
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
 * @summary The Leading Root Component Types of ProbeSubmissionResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ProbeSubmissionResult: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'probe-submission-identifier',
        false,
        $.hasTag(_TagClass.application, 4)
    ),
    new $.ComponentSpec(
        'probe-submission-time',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'content-identifier',
        true,
        $.hasTag(_TagClass.application, 10)
    ),
    new $.ComponentSpec(
        'extensions',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of ProbeSubmissionResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ProbeSubmissionResult: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ProbeSubmissionResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ProbeSubmissionResult: $.ComponentSpec[] = [];

let _cached_decoder_for_ProbeSubmissionResult: $.ASN1Decoder<ProbeSubmissionResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProbeSubmissionResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProbeSubmissionResult} The decoded data structure.
 */
export function _decode_ProbeSubmissionResult(el: _Element) {
    if (!_cached_decoder_for_ProbeSubmissionResult) {
        _cached_decoder_for_ProbeSubmissionResult = function (
            el: _Element
        ): ProbeSubmissionResult {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let probe_submission_identifier!: ProbeSubmissionIdentifier;
            let probe_submission_time!: ProbeSubmissionTime;
            let content_identifier: OPTIONAL<ContentIdentifier>;
            let extensions: OPTIONAL<ExtensionField[]> =
                ProbeSubmissionResult._default_value_for_extensions;
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
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ProbeSubmissionResult,
                _extension_additions_list_spec_for_ProbeSubmissionResult,
                _root_component_type_list_2_spec_for_ProbeSubmissionResult,
                undefined
            );
            return new ProbeSubmissionResult /* SET_CONSTRUCTOR_CALL */(
                probe_submission_identifier,
                probe_submission_time,
                content_identifier,
                extensions
            );
        };
    }
    return _cached_decoder_for_ProbeSubmissionResult(el);
}

let _cached_encoder_for_ProbeSubmissionResult: $.ASN1Encoder<ProbeSubmissionResult> | null = null;

/**
 * @summary Encodes a(n) ProbeSubmissionResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProbeSubmissionResult, encoded as an ASN.1 Element.
 */
export function _encode_ProbeSubmissionResult(
    value: ProbeSubmissionResult,
    elGetter: $.ASN1Encoder<ProbeSubmissionResult>
) {
    if (!_cached_encoder_for_ProbeSubmissionResult) {
        _cached_encoder_for_ProbeSubmissionResult = function (
            value: ProbeSubmissionResult        ): _Element {
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
                            ProbeSubmissionResult._default_value_for_extensions
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
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ProbeSubmissionResult(value, elGetter);
}


/* eslint-enable */
