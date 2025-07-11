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
    SecurityPolicyIdentifier,
    _decode_SecurityPolicyIdentifier,
    _encode_SecurityPolicyIdentifier,
} from '../MTSAbstractService/SecurityPolicyIdentifier.ta.mjs';
import {
    SecurityClassification,
    _decode_SecurityClassification,
    _encode_SecurityClassification,
} from '../MTSAbstractService/SecurityClassification.ta.mjs';
import {
    PrivacyMark,
    _decode_PrivacyMark,
    _encode_PrivacyMark,
} from '../MTSAbstractService/PrivacyMark.ta.mjs';
import {
    SecurityCategories,
    _decode_SecurityCategories,
    _encode_SecurityCategories,
} from '../MTSAbstractService/SecurityCategories.ta.mjs';
/**
 * @summary SecurityLabel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityLabel ::= SET {
 *   security-policy-identifier  SecurityPolicyIdentifier OPTIONAL,
 *   security-classification     SecurityClassification OPTIONAL,
 *   privacy-mark                PrivacyMark OPTIONAL,
 *   security-categories         SecurityCategories OPTIONAL
 * }
 * ```
 *
 */
export class SecurityLabel {
    constructor(
        /**
         * @summary `security_policy_identifier`.
         * @public
         * @readonly
         */
        readonly security_policy_identifier: OPTIONAL<SecurityPolicyIdentifier>,
        /**
         * @summary `security_classification`.
         * @public
         * @readonly
         */
        readonly security_classification: OPTIONAL<SecurityClassification>,
        /**
         * @summary `privacy_mark`.
         * @public
         * @readonly
         */
        readonly privacy_mark: OPTIONAL<PrivacyMark>,
        /**
         * @summary `security_categories`.
         * @public
         * @readonly
         */
        readonly security_categories: OPTIONAL<SecurityCategories>
    ) {}

    /**
     * @summary Restructures an object into a SecurityLabel
     * @description
     *
     * This takes an `object` and converts it to a `SecurityLabel`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SecurityLabel`.
     * @returns {SecurityLabel}
     */
    public static _from_object(
        _o: { [_K in keyof SecurityLabel]: SecurityLabel[_K] }
    ): SecurityLabel {
        return new SecurityLabel(
            _o.security_policy_identifier,
            _o.security_classification,
            _o.privacy_mark,
            _o.security_categories
        );
    }
}

/**
 * @summary The Leading Root Component Types of SecurityLabel
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SecurityLabel: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'security-policy-identifier',
        true,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        'security-classification',
        true,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        'privacy-mark',
        true,
        $.hasTag(_TagClass.universal, 19)
    ),
    new $.ComponentSpec(
        'security-categories',
        true,
        $.hasTag(_TagClass.universal, 17)
    ),
];

/**
 * @summary The Trailing Root Component Types of SecurityLabel
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SecurityLabel: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of SecurityLabel
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SecurityLabel: $.ComponentSpec[] = [];

let _cached_decoder_for_SecurityLabel: $.ASN1Decoder<SecurityLabel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SecurityLabel
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityLabel} The decoded data structure.
 */
export function _decode_SecurityLabel(el: _Element): SecurityLabel {
    if (!_cached_decoder_for_SecurityLabel) {
        _cached_decoder_for_SecurityLabel = function (
            el: _Element
        ): SecurityLabel {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let security_policy_identifier: OPTIONAL<SecurityPolicyIdentifier>;
            let security_classification: OPTIONAL<SecurityClassification>;
            let privacy_mark: OPTIONAL<PrivacyMark>;
            let security_categories: OPTIONAL<SecurityCategories>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                'security-policy-identifier': (_el: _Element): void => {
                    security_policy_identifier = _decode_SecurityPolicyIdentifier(
                        _el
                    );
                },
                'security-classification': (_el: _Element): void => {
                    security_classification = _decode_SecurityClassification(
                        _el
                    );
                },
                'privacy-mark': (_el: _Element): void => {
                    privacy_mark = _decode_PrivacyMark(_el);
                },
                'security-categories': (_el: _Element): void => {
                    security_categories = _decode_SecurityCategories(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SecurityLabel,
                _extension_additions_list_spec_for_SecurityLabel,
                _root_component_type_list_2_spec_for_SecurityLabel,
                undefined
            );
            return new SecurityLabel /* SET_CONSTRUCTOR_CALL */(
                security_policy_identifier,
                security_classification,
                privacy_mark,
                security_categories
            );
        };
    }
    return _cached_decoder_for_SecurityLabel(el);
}

let _cached_encoder_for_SecurityLabel: $.ASN1Encoder<SecurityLabel> | null = null;

/**
 * @summary Encodes a(n) SecurityLabel into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityLabel, encoded as an ASN.1 Element.
 */
export function _encode_SecurityLabel(
    value: SecurityLabel,
    elGetter: $.ASN1Encoder<SecurityLabel>
): _Element {
    if (!_cached_encoder_for_SecurityLabel) {
        _cached_encoder_for_SecurityLabel = function (
            value: SecurityLabel        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.security_policy_identifier ===
                        undefined
                            ? undefined
                            : _encode_SecurityPolicyIdentifier(
                                  value.security_policy_identifier,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.security_classification ===
                        undefined
                            ? undefined
                            : _encode_SecurityClassification(
                                  value.security_classification,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.privacy_mark === undefined
                            ? undefined
                            : _encode_PrivacyMark(value.privacy_mark, $.BER),
                        /* IF_ABSENT  */ value.security_categories === undefined
                            ? undefined
                            : _encode_SecurityCategories(
                                  value.security_categories,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SecurityLabel(value, elGetter);
}


/* eslint-enable */
