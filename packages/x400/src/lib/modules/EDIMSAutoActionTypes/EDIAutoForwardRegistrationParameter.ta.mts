/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
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
    Filter,
    _decode_Filter,
    _encode_Filter,
} from '../MSAbstractService/Filter.ta.mjs';
import {
    EDISupplementaryInformation,
    _decode_EDISupplementaryInformation,
    _encode_EDISupplementaryInformation,
} from '../EDIMSInformationObjects/EDISupplementaryInformation.ta.mjs';
import {
    EDIAutoForwardRegistrationParameter_edi_forwarding_mode,
    _decode_EDIAutoForwardRegistrationParameter_edi_forwarding_mode,
    _encode_EDIAutoForwardRegistrationParameter_edi_forwarding_mode,
} from '../EDIMSAutoActionTypes/EDIAutoForwardRegistrationParameter-edi-forwarding-mode.ta.mjs';
import {
    MessageSubmissionEnvelope,
    _decode_MessageSubmissionEnvelope,
    _encode_MessageSubmissionEnvelope,
} from '../MTSAbstractService/MessageSubmissionEnvelope.ta.mjs';
import {
    MSSubmissionOptions,
    _decode_MSSubmissionOptions,
    _encode_MSSubmissionOptions,
} from '../MSAbstractService/MSSubmissionOptions.ta.mjs';
/**
 * @summary EDIAutoForwardRegistrationParameter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDIAutoForwardRegistrationParameter ::= SEQUENCE {
 *   filter                   [0]  Filter OPTIONAL,
 *   edi-supplementary-info   [1]  EDISupplementaryInformation OPTIONAL,
 *   delete-after-forwarding  [2]  BOOLEAN DEFAULT FALSE,
 *   edi-forwarding-mode
 *     CHOICE {forwarding-with-responsibility-not-accepted  [3]  NewRecipient,
 *             forwarding-with-responsibility-accepted
 *               [4]  ForwardWithRespAccepted},
 *   forwarding-envelope      [5]  MessageSubmissionEnvelope,
 *   submission-options       [6]  MSSubmissionOptions OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class EDIAutoForwardRegistrationParameter {
    constructor(
        /**
         * @summary `filter`.
         * @public
         * @readonly
         */
        readonly filter: OPTIONAL<Filter>,
        /**
         * @summary `edi_supplementary_info`.
         * @public
         * @readonly
         */
        readonly edi_supplementary_info: OPTIONAL<EDISupplementaryInformation>,
        /**
         * @summary `delete_after_forwarding`.
         * @public
         * @readonly
         */
        readonly delete_after_forwarding: OPTIONAL<BOOLEAN>,
        /**
         * @summary `edi_forwarding_mode`.
         * @public
         * @readonly
         */
        readonly edi_forwarding_mode: EDIAutoForwardRegistrationParameter_edi_forwarding_mode,
        /**
         * @summary `forwarding_envelope`.
         * @public
         * @readonly
         */
        readonly forwarding_envelope: MessageSubmissionEnvelope,
        /**
         * @summary `submission_options`.
         * @public
         * @readonly
         */
        readonly submission_options: OPTIONAL<MSSubmissionOptions>
    ) {}

    /**
     * @summary Restructures an object into a EDIAutoForwardRegistrationParameter
     * @description
     *
     * This takes an `object` and converts it to a `EDIAutoForwardRegistrationParameter`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EDIAutoForwardRegistrationParameter`.
     * @returns {EDIAutoForwardRegistrationParameter}
     */
    public static _from_object(
        _o: {
            [_K in keyof EDIAutoForwardRegistrationParameter]: EDIAutoForwardRegistrationParameter[_K];
        }
    ): EDIAutoForwardRegistrationParameter {
        return new EDIAutoForwardRegistrationParameter(
            _o.filter,
            _o.edi_supplementary_info,
            _o.delete_after_forwarding,
            _o.edi_forwarding_mode,
            _o.forwarding_envelope,
            _o.submission_options
        );
    }

    /**
     * @summary Getter that returns the default value for `delete_after_forwarding`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_delete_after_forwarding() {
        return false;
    }
}

/**
 * @summary The Leading Root Component Types of EDIAutoForwardRegistrationParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EDIAutoForwardRegistrationParameter: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'filter',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'edi-supplementary-info',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'delete-after-forwarding',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'edi-forwarding-mode',
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        'forwarding-envelope',
        false,
        $.hasTag(_TagClass.context, 5)
    ),
    new $.ComponentSpec(
        'submission-options',
        true,
        $.hasTag(_TagClass.context, 6)
    ),
];

/**
 * @summary The Trailing Root Component Types of EDIAutoForwardRegistrationParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EDIAutoForwardRegistrationParameter: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of EDIAutoForwardRegistrationParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EDIAutoForwardRegistrationParameter: $.ComponentSpec[] = [];

let _cached_decoder_for_EDIAutoForwardRegistrationParameter: $.ASN1Decoder<EDIAutoForwardRegistrationParameter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EDIAutoForwardRegistrationParameter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EDIAutoForwardRegistrationParameter} The decoded data structure.
 */
export function _decode_EDIAutoForwardRegistrationParameter(el: _Element) {
    if (!_cached_decoder_for_EDIAutoForwardRegistrationParameter) {
        _cached_decoder_for_EDIAutoForwardRegistrationParameter = function (
            el: _Element
        ): EDIAutoForwardRegistrationParameter {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let filter: OPTIONAL<Filter>;
            let edi_supplementary_info: OPTIONAL<EDISupplementaryInformation>;
            let delete_after_forwarding: OPTIONAL<BOOLEAN> =
                EDIAutoForwardRegistrationParameter._default_value_for_delete_after_forwarding;
            let edi_forwarding_mode!: EDIAutoForwardRegistrationParameter_edi_forwarding_mode;
            let forwarding_envelope!: MessageSubmissionEnvelope;
            let submission_options: OPTIONAL<MSSubmissionOptions>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                filter: (_el: _Element): void => {
                    filter = $._decode_explicit<Filter>(() => _decode_Filter)(
                        _el
                    );
                },
                'edi-supplementary-info': (_el: _Element): void => {
                    edi_supplementary_info = $._decode_explicit<EDISupplementaryInformation>(
                        () => _decode_EDISupplementaryInformation
                    )(_el);
                },
                'delete-after-forwarding': (_el: _Element): void => {
                    delete_after_forwarding = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                'edi-forwarding-mode': (_el: _Element): void => {
                    edi_forwarding_mode = _decode_EDIAutoForwardRegistrationParameter_edi_forwarding_mode(
                        _el
                    );
                },
                'forwarding-envelope': (_el: _Element): void => {
                    forwarding_envelope = $._decode_explicit<MessageSubmissionEnvelope>(
                        () => _decode_MessageSubmissionEnvelope
                    )(_el);
                },
                'submission-options': (_el: _Element): void => {
                    submission_options = $._decode_explicit<MSSubmissionOptions>(
                        () => _decode_MSSubmissionOptions
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EDIAutoForwardRegistrationParameter,
                _extension_additions_list_spec_for_EDIAutoForwardRegistrationParameter,
                _root_component_type_list_2_spec_for_EDIAutoForwardRegistrationParameter,
                undefined
            );
            return new EDIAutoForwardRegistrationParameter /* SEQUENCE_CONSTRUCTOR_CALL */(
                filter,
                edi_supplementary_info,
                delete_after_forwarding,
                edi_forwarding_mode,
                forwarding_envelope,
                submission_options
            );
        };
    }
    return _cached_decoder_for_EDIAutoForwardRegistrationParameter(el);
}

let _cached_encoder_for_EDIAutoForwardRegistrationParameter: $.ASN1Encoder<EDIAutoForwardRegistrationParameter> | null = null;

/**
 * @summary Encodes a(n) EDIAutoForwardRegistrationParameter into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EDIAutoForwardRegistrationParameter, encoded as an ASN.1 Element.
 */
export function _encode_EDIAutoForwardRegistrationParameter(
    value: EDIAutoForwardRegistrationParameter,
    elGetter: $.ASN1Encoder<EDIAutoForwardRegistrationParameter>
) {
    if (!_cached_encoder_for_EDIAutoForwardRegistrationParameter) {
        _cached_encoder_for_EDIAutoForwardRegistrationParameter = function (
            value: EDIAutoForwardRegistrationParameter        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.filter === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_Filter,
                                  $.BER
                              )(value.filter, $.BER),
                        /* IF_ABSENT  */ value.edi_supplementary_info ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_EDISupplementaryInformation,
                                  $.BER
                              )(value.edi_supplementary_info, $.BER),
                        /* IF_DEFAULT */ value.delete_after_forwarding ===
                            undefined ||
                        $.deepEq(
                            value.delete_after_forwarding,
                            EDIAutoForwardRegistrationParameter._default_value_for_delete_after_forwarding
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => $._encodeBoolean,
                                  $.BER
                              )(value.delete_after_forwarding, $.BER),
                        /* REQUIRED   */ _encode_EDIAutoForwardRegistrationParameter_edi_forwarding_mode(
                            value.edi_forwarding_mode,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            5,
                            () => _encode_MessageSubmissionEnvelope,
                            $.BER
                        )(value.forwarding_envelope, $.BER),
                        /* IF_ABSENT  */ value.submission_options === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  6,
                                  () => _encode_MSSubmissionOptions,
                                  $.BER
                              )(value.submission_options, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_EDIAutoForwardRegistrationParameter(
        value,
        elGetter
    );
}


/* eslint-enable */
