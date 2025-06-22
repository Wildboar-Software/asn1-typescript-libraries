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
    IPMSExtension,
    _decode_IPMSExtension,
    _encode_IPMSExtension,
} from '../IPMSInformationObjects/IPMSExtension.ta.mjs';
import {
    MSSubmissionOptions,
    _decode_MSSubmissionOptions,
    _encode_MSSubmissionOptions,
} from '../MSAbstractService/MSSubmissionOptions.ta.mjs';
/**
 * @summary IPMAutoAdviseRegistrationParameter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IPMAutoAdviseRegistrationParameter ::= SET {
 *   enabled                            [0]  BOOLEAN DEFAULT TRUE,
 *   filter                             [1]  Filter OPTIONAL,
 *   advice-notifications
 *     [2]  SET OF IPMSExtension{{AdviceNotifications}},
 *   suppress-subsequent-notifications  [3]  BOOLEAN DEFAULT TRUE,
 *   use-ipm-if-an-not-supported        [4]  BOOLEAN DEFAULT FALSE,
 *   submission-options                 [5]  MSSubmissionOptions OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class IPMAutoAdviseRegistrationParameter {
    constructor(
        /**
         * @summary `enabled`.
         * @public
         * @readonly
         */
        readonly enabled: OPTIONAL<BOOLEAN>,
        /**
         * @summary `filter`.
         * @public
         * @readonly
         */
        readonly filter: OPTIONAL<Filter>,
        /**
         * @summary `advice_notifications`.
         * @public
         * @readonly
         */
        readonly advice_notifications: IPMSExtension[],
        /**
         * @summary `suppress_subsequent_notifications`.
         * @public
         * @readonly
         */
        readonly suppress_subsequent_notifications: OPTIONAL<BOOLEAN>,
        /**
         * @summary `use_ipm_if_an_not_supported`.
         * @public
         * @readonly
         */
        readonly use_ipm_if_an_not_supported: OPTIONAL<BOOLEAN>,
        /**
         * @summary `submission_options`.
         * @public
         * @readonly
         */
        readonly submission_options: OPTIONAL<MSSubmissionOptions>
    ) {}

    /**
     * @summary Restructures an object into a IPMAutoAdviseRegistrationParameter
     * @description
     *
     * This takes an `object` and converts it to a `IPMAutoAdviseRegistrationParameter`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IPMAutoAdviseRegistrationParameter`.
     * @returns {IPMAutoAdviseRegistrationParameter}
     */
    public static _from_object(
        _o: {
            [_K in keyof IPMAutoAdviseRegistrationParameter]: IPMAutoAdviseRegistrationParameter[_K];
        }
    ): IPMAutoAdviseRegistrationParameter {
        return new IPMAutoAdviseRegistrationParameter(
            _o.enabled,
            _o.filter,
            _o.advice_notifications,
            _o.suppress_subsequent_notifications,
            _o.use_ipm_if_an_not_supported,
            _o.submission_options
        );
    }

    /**
     * @summary Getter that returns the default value for `enabled`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_enabled(): boolean {
        return true;
    }
    /**
     * @summary Getter that returns the default value for `suppress_subsequent_notifications`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_suppress_subsequent_notifications(): boolean {
        return true;
    }
    /**
     * @summary Getter that returns the default value for `use_ipm_if_an_not_supported`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_use_ipm_if_an_not_supported(): boolean {
        return false;
    }
}

/**
 * @summary The Leading Root Component Types of IPMAutoAdviseRegistrationParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IPMAutoAdviseRegistrationParameter: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'enabled',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'filter',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'advice-notifications',
        false,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'suppress-subsequent-notifications',
        true,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        'use-ipm-if-an-not-supported',
        true,
        $.hasTag(_TagClass.context, 4)
    ),
    new $.ComponentSpec(
        'submission-options',
        true,
        $.hasTag(_TagClass.context, 5)
    ),
];

/**
 * @summary The Trailing Root Component Types of IPMAutoAdviseRegistrationParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IPMAutoAdviseRegistrationParameter: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of IPMAutoAdviseRegistrationParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IPMAutoAdviseRegistrationParameter: $.ComponentSpec[] = [];

let _cached_decoder_for_IPMAutoAdviseRegistrationParameter: $.ASN1Decoder<IPMAutoAdviseRegistrationParameter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPMAutoAdviseRegistrationParameter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IPMAutoAdviseRegistrationParameter} The decoded data structure.
 */
export function _decode_IPMAutoAdviseRegistrationParameter(el: _Element) {
    if (!_cached_decoder_for_IPMAutoAdviseRegistrationParameter) {
        _cached_decoder_for_IPMAutoAdviseRegistrationParameter = function (
            el: _Element
        ): IPMAutoAdviseRegistrationParameter {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let enabled: OPTIONAL<BOOLEAN> =
                IPMAutoAdviseRegistrationParameter._default_value_for_enabled;
            let filter: OPTIONAL<Filter>;
            let advice_notifications!: IPMSExtension[];
            let suppress_subsequent_notifications: OPTIONAL<BOOLEAN> =
                IPMAutoAdviseRegistrationParameter._default_value_for_suppress_subsequent_notifications;
            let use_ipm_if_an_not_supported: OPTIONAL<BOOLEAN> =
                IPMAutoAdviseRegistrationParameter._default_value_for_use_ipm_if_an_not_supported;
            let submission_options: OPTIONAL<MSSubmissionOptions>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                enabled: (_el: _Element): void => {
                    enabled = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                filter: (_el: _Element): void => {
                    filter = $._decode_explicit<Filter>(() => _decode_Filter)(
                        _el
                    );
                },
                'advice-notifications': (_el: _Element): void => {
                    advice_notifications = $._decode_explicit<IPMSExtension[]>(
                        () =>
                            $._decodeSetOf<IPMSExtension>(
                                () => _decode_IPMSExtension
                            )
                    )(_el);
                },
                'suppress-subsequent-notifications': (_el: _Element): void => {
                    suppress_subsequent_notifications = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                'use-ipm-if-an-not-supported': (_el: _Element): void => {
                    use_ipm_if_an_not_supported = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                'submission-options': (_el: _Element): void => {
                    submission_options = $._decode_explicit<MSSubmissionOptions>(
                        () => _decode_MSSubmissionOptions
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_IPMAutoAdviseRegistrationParameter,
                _extension_additions_list_spec_for_IPMAutoAdviseRegistrationParameter,
                _root_component_type_list_2_spec_for_IPMAutoAdviseRegistrationParameter,
                undefined
            );
            return new IPMAutoAdviseRegistrationParameter /* SET_CONSTRUCTOR_CALL */(
                enabled,
                filter,
                advice_notifications,
                suppress_subsequent_notifications,
                use_ipm_if_an_not_supported,
                submission_options
            );
        };
    }
    return _cached_decoder_for_IPMAutoAdviseRegistrationParameter(el);
}

let _cached_encoder_for_IPMAutoAdviseRegistrationParameter: $.ASN1Encoder<IPMAutoAdviseRegistrationParameter> | null = null;

/**
 * @summary Encodes a(n) IPMAutoAdviseRegistrationParameter into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPMAutoAdviseRegistrationParameter, encoded as an ASN.1 Element.
 */
export function _encode_IPMAutoAdviseRegistrationParameter(
    value: IPMAutoAdviseRegistrationParameter,
    elGetter: $.ASN1Encoder<IPMAutoAdviseRegistrationParameter>
) {
    if (!_cached_encoder_for_IPMAutoAdviseRegistrationParameter) {
        _cached_encoder_for_IPMAutoAdviseRegistrationParameter = function (
            value: IPMAutoAdviseRegistrationParameter        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.enabled === undefined ||
                        $.deepEq(
                            value.enabled,
                            IPMAutoAdviseRegistrationParameter._default_value_for_enabled
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => $._encodeBoolean,
                                  $.BER
                              )(value.enabled, $.BER),
                        /* IF_ABSENT  */ value.filter === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_Filter,
                                  $.BER
                              )(value.filter, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            2,
                            () =>
                                $._encodeSetOf<IPMSExtension>(
                                    () => _encode_IPMSExtension,
                                    $.BER
                                ),
                            $.BER
                        )(value.advice_notifications, $.BER),
                        /* IF_DEFAULT */ value.suppress_subsequent_notifications ===
                            undefined ||
                        $.deepEq(
                            value.suppress_subsequent_notifications,
                            IPMAutoAdviseRegistrationParameter._default_value_for_suppress_subsequent_notifications
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  3,
                                  () => $._encodeBoolean,
                                  $.BER
                              )(value.suppress_subsequent_notifications, $.BER),
                        /* IF_DEFAULT */ value.use_ipm_if_an_not_supported ===
                            undefined ||
                        $.deepEq(
                            value.use_ipm_if_an_not_supported,
                            IPMAutoAdviseRegistrationParameter._default_value_for_use_ipm_if_an_not_supported
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  4,
                                  () => $._encodeBoolean,
                                  $.BER
                              )(value.use_ipm_if_an_not_supported, $.BER),
                        /* IF_ABSENT  */ value.submission_options === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  5,
                                  () => _encode_MSSubmissionOptions,
                                  $.BER
                              )(value.submission_options, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_IPMAutoAdviseRegistrationParameter(
        value,
        elGetter
    );
}


/* eslint-enable */
