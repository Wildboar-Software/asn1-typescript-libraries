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
    RegistrationIdentifier,
    _decode_RegistrationIdentifier,
    _encode_RegistrationIdentifier,
} from '../MSAbstractService/RegistrationIdentifier.ta.mjs';
import {
    MSSubmissionOptions,
    _decode_MSSubmissionOptions,
    _encode_MSSubmissionOptions,
} from '../MSAbstractService/MSSubmissionOptions.ta.mjs';
import {
    MSExtensions,
    _decode_MSExtensions,
    _encode_MSExtensions,
} from '../MSAbstractService/MSExtensions.ta.mjs';
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "./AttributeType.ta.mjs";

/**
 * @summary UARegistration
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UARegistration ::= SET {
 *   ua-registration-identifier   [0]  RegistrationIdentifier,
 *   ua-list-attribute-defaults
 *     [1]  SET SIZE (0..ub-default-registrations) OF
 *            X413ATTRIBUTE.&id({AttributeTable}) OPTIONAL,
 *   ua-fetch-attribute-defaults
 *     [2]  SET SIZE (0..ub-default-registrations) OF
 *            X413ATTRIBUTE.&id({AttributeTable}) OPTIONAL,
 *   ua-submission-defaults       [3]  MSSubmissionOptions OPTIONAL,
 *   content-specific-defaults    [4]  MSExtensions OPTIONAL
 * }
 * ```
 *
 */
export class UARegistration {
    constructor(
        /**
         * @summary `ua_registration_identifier`.
         * @public
         * @readonly
         */
        readonly ua_registration_identifier: RegistrationIdentifier,
        /**
         * @summary `ua_list_attribute_defaults`.
         * @public
         * @readonly
         */
        readonly ua_list_attribute_defaults: OPTIONAL<AttributeType[]>,
        /**
         * @summary `ua_fetch_attribute_defaults`.
         * @public
         * @readonly
         */
        readonly ua_fetch_attribute_defaults: OPTIONAL<AttributeType[]>,
        /**
         * @summary `ua_submission_defaults`.
         * @public
         * @readonly
         */
        readonly ua_submission_defaults: OPTIONAL<MSSubmissionOptions>,
        /**
         * @summary `content_specific_defaults`.
         * @public
         * @readonly
         */
        readonly content_specific_defaults: OPTIONAL<MSExtensions>
    ) {}

    /**
     * @summary Restructures an object into a UARegistration
     * @description
     *
     * This takes an `object` and converts it to a `UARegistration`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UARegistration`.
     * @returns {UARegistration}
     */
    public static _from_object(
        _o: { [_K in keyof UARegistration]: UARegistration[_K] }
    ): UARegistration {
        return new UARegistration(
            _o.ua_registration_identifier,
            _o.ua_list_attribute_defaults,
            _o.ua_fetch_attribute_defaults,
            _o.ua_submission_defaults,
            _o.content_specific_defaults
        );
    }
}

/**
 * @summary The Leading Root Component Types of UARegistration
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UARegistration: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'ua-registration-identifier',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'ua-list-attribute-defaults',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'ua-fetch-attribute-defaults',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'ua-submission-defaults',
        true,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        'content-specific-defaults',
        true,
        $.hasTag(_TagClass.context, 4)
    ),
];

/**
 * @summary The Trailing Root Component Types of UARegistration
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UARegistration: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of UARegistration
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UARegistration: $.ComponentSpec[] = [];

let _cached_decoder_for_UARegistration: $.ASN1Decoder<UARegistration> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UARegistration
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UARegistration} The decoded data structure.
 */
export function _decode_UARegistration(el: _Element): UARegistration {
    if (!_cached_decoder_for_UARegistration) {
        _cached_decoder_for_UARegistration = function (
            el: _Element
        ): UARegistration {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let ua_registration_identifier!: RegistrationIdentifier;
            let ua_list_attribute_defaults: OPTIONAL<AttributeType[]>;
            let ua_fetch_attribute_defaults: OPTIONAL<AttributeType[]>;
            let ua_submission_defaults: OPTIONAL<MSSubmissionOptions>;
            let content_specific_defaults: OPTIONAL<MSExtensions>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                'ua-registration-identifier': (_el: _Element): void => {
                    ua_registration_identifier = $._decode_explicit<RegistrationIdentifier>(
                        () => _decode_RegistrationIdentifier
                    )(_el);
                },
                'ua-list-attribute-defaults': (_el: _Element): void => {
                    ua_list_attribute_defaults = $._decode_explicit<
                        AttributeType[]
                    >(() =>
                        $._decodeSetOf<AttributeType>(
                            () => _decode_AttributeType
                        )
                    )(_el);
                },
                'ua-fetch-attribute-defaults': (_el: _Element): void => {
                    ua_fetch_attribute_defaults = $._decode_explicit<
                        AttributeType[]
                    >(() =>
                        $._decodeSetOf<AttributeType>(
                            () => _decode_AttributeType
                        )
                    )(_el);
                },
                'ua-submission-defaults': (_el: _Element): void => {
                    ua_submission_defaults = $._decode_explicit<MSSubmissionOptions>(
                        () => _decode_MSSubmissionOptions
                    )(_el);
                },
                'content-specific-defaults': (_el: _Element): void => {
                    content_specific_defaults = $._decode_explicit<MSExtensions>(
                        () => _decode_MSExtensions
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_UARegistration,
                _extension_additions_list_spec_for_UARegistration,
                _root_component_type_list_2_spec_for_UARegistration,
                undefined
            );
            return new UARegistration /* SET_CONSTRUCTOR_CALL */(
                ua_registration_identifier,
                ua_list_attribute_defaults,
                ua_fetch_attribute_defaults,
                ua_submission_defaults,
                content_specific_defaults
            );
        };
    }
    return _cached_decoder_for_UARegistration(el);
}

let _cached_encoder_for_UARegistration: $.ASN1Encoder<UARegistration> | null = null;

/**
 * @summary Encodes a(n) UARegistration into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UARegistration, encoded as an ASN.1 Element.
 */
export function _encode_UARegistration(
    value: UARegistration,
    elGetter: $.ASN1Encoder<UARegistration>
): _Element {
    if (!_cached_encoder_for_UARegistration) {
        _cached_encoder_for_UARegistration = function (
            value: UARegistration        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_RegistrationIdentifier,
                            $.BER
                        )(value.ua_registration_identifier, $.BER),
                        /* IF_ABSENT  */ value.ua_list_attribute_defaults ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () =>
                                      $._encodeSetOf<AttributeType>(
                                          () => _encode_AttributeType,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.ua_list_attribute_defaults, $.BER),
                        /* IF_ABSENT  */ value.ua_fetch_attribute_defaults ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () =>
                                      $._encodeSetOf<AttributeType>(
                                          () => _encode_AttributeType,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.ua_fetch_attribute_defaults, $.BER),
                        /* IF_ABSENT  */ value.ua_submission_defaults ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_MSSubmissionOptions,
                                  $.BER
                              )(value.ua_submission_defaults, $.BER),
                        /* IF_ABSENT  */ value.content_specific_defaults ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  4,
                                  () => _encode_MSExtensions,
                                  $.BER
                              )(value.content_specific_defaults, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_UARegistration(value, elGetter);
}


/* eslint-enable */
