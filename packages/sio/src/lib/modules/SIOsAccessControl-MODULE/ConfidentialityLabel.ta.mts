/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    type PrivacyMark,
    _decode_PrivacyMark,
    _encode_PrivacyMark,
} from "../SIOsAccessControl-MODULE/PrivacyMark.ta.mjs";
import {
    type SecurityCategories,
    _decode_SecurityCategories,
    _encode_SecurityCategories,
} from "../SIOsAccessControl-MODULE/SecurityCategories.ta.mjs";
import {
    type SecurityPolicyIdentifier,
    _decode_SecurityPolicyIdentifier,
    _encode_SecurityPolicyIdentifier,
} from "../SIOsAccessControl-MODULE/SecurityPolicyIdentifier.ta.mjs";

/**
 * @summary ConfidentialityLabel
 * @description
 *
 * Security label bound to data to name the compartment and thus how
 * the data is handled. Systems use it for access control and routing
 * without reading the protected information. Integrity of the
 * label and of its binding to the data must be assured. When labels
 * cross domains, the shared-data policy specifies any translation.
 * Labels alone are not sufficient; each organization must enforce the
 * applicable policy.
 *
 * Binding methods (X.841 §6.1.3): (1) store data and label together
 * inside a secure boundary; (2) digital signature over `f(D)` and
 * L; (3) MAC over `f(D)` and L. All four components are OPTIONAL but
 * at least one shall be present. Identified by
 * `id-ConfidentialityLabel`. ITU-T Rec. X.841 (10/2000)
 * [§6.1](https://www.itu.int/rec/T-REC-X.841-200010-I), §7.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConfidentialityLabel ::= SET {
 *   security-policy-identifier  SecurityPolicyIdentifier OPTIONAL,
 *   security-classification     INTEGER(0..MAX) OPTIONAL,
 *   privacy-mark                PrivacyMark OPTIONAL,
 *   security-categories         SecurityCategories OPTIONAL
 * }(ALL EXCEPT ({ -- none; at least one component shall be present --}))
 * ```
 *
 */
export class ConfidentialityLabel {
    constructor(
        /**
         * @summary `security_policy_identifier`.
         * @description
         *
         * Policy that interprets `security-classification` and
         * `security-categories`. Compared with clearance `policyId`
         * and the SPIF `securityPolicyIdData`. X.841 §6.1.2,
         * §7.1.
         *
         * @public
         * @readonly
         */
        readonly security_policy_identifier?: OPTIONAL<SecurityPolicyIdentifier>,
        /**
         * @summary `security_classification`.
         * @description
         *
         * Hierarchical classification of the labelled object.
         * Corresponds to a SPIF `labelAndCertValue` and to a bit
         * in clearance `classList`. X.841 §6.1.2, §7.1.
         *
         * @public
         * @readonly
         */
        readonly security_classification?: OPTIONAL<INTEGER>,
        /**
         * @summary `privacy_mark`.
         * @description
         *
         * Human-readable privacy marking (PrintableString or
         * UTF8String, SIZE 1..128). X.841 §6.1.2.
         *
         * @public
         * @readonly
         */
        readonly privacy_mark?: OPTIONAL<PrivacyMark>,
        /**
         * @summary `security_categories`.
         * @description
         *
         * Non-hierarchical categories (restrictive, permissive,
         * enumerated). SET SIZE (1..MAX) if present. Access: at
         * least one match per permissive tag; all restrictive
         * tags. X.841 §6.1.2, §7.2.
         *
         * @public
         * @readonly
         */
        readonly security_categories?: OPTIONAL<SecurityCategories>
    ) {}

    /**
     * @summary Restructures an object into a ConfidentialityLabel
     * @description
     *
     * This takes an `object` and converts it to a
     * `ConfidentialityLabel`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values
     * of a `ConfidentialityLabel`.
     * @returns {ConfidentialityLabel}
     */
    public static _from_object(
        _o: {
            [_K in keyof ConfidentialityLabel]: ConfidentialityLabel[_K];
        }
    ): ConfidentialityLabel {
        return new ConfidentialityLabel(
            _o.security_policy_identifier,
            _o.security_classification,
            _o.privacy_mark,
            _o.security_categories
        );
    }
}

/**
 * @summary The Leading Root Component Types of ConfidentialityLabel
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode
 * the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ConfidentialityLabel: $.ComponentSpec[] =
    [
        new $.ComponentSpec(
            "security-policy-identifier",
            true,
            $.hasTag(_TagClass.universal, 6)
        ),
        new $.ComponentSpec(
            "security-classification",
            true,
            $.hasTag(_TagClass.universal, 2)
        ),
        new $.ComponentSpec(
            "privacy-mark",
            true,
            $.or(
                $.hasTag(_TagClass.universal, 19),
                $.hasTag(_TagClass.universal, 12)
            )
        ),
        new $.ComponentSpec(
            "security-categories",
            true,
            $.hasTag(_TagClass.universal, 17)
        ),
    ];

/**
 * @summary The Trailing Root Component Types of ConfidentialityLabel
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode
 * the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ConfidentialityLabel: $.ComponentSpec[] =
    [];

/**
 * @summary The Extension Addition Component Types of ConfidentialityLabel
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode
 * the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ConfidentialityLabel: $.ComponentSpec[] =
    [];

let _cached_decoder_for_ConfidentialityLabel: $.ASN1Decoder<ConfidentialityLabel> | null =
    null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConfidentialityLabel
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConfidentialityLabel} The decoded data structure.
 */
export function _decode_ConfidentialityLabel(el: _Element): ConfidentialityLabel {
    if (!_cached_decoder_for_ConfidentialityLabel) {
        _cached_decoder_for_ConfidentialityLabel = function (
            el: _Element
        ): ConfidentialityLabel {
            let security_policy_identifier: OPTIONAL<SecurityPolicyIdentifier>;
            let security_classification: OPTIONAL<INTEGER>;
            let privacy_mark: OPTIONAL<PrivacyMark>;
            let security_categories: OPTIONAL<SecurityCategories>;
            const callbacks: $.DecodingMap = {
                "security-policy-identifier": (_el: _Element): void => {
                    security_policy_identifier =
                        _decode_SecurityPolicyIdentifier(_el);
                },
                "security-classification": (_el: _Element): void => {
                    security_classification = $._decodeInteger(_el);
                },
                "privacy-mark": (_el: _Element): void => {
                    privacy_mark = _decode_PrivacyMark(_el);
                },
                "security-categories": (_el: _Element): void => {
                    security_categories = _decode_SecurityCategories(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ConfidentialityLabel,
                _extension_additions_list_spec_for_ConfidentialityLabel,
                _root_component_type_list_2_spec_for_ConfidentialityLabel,
                undefined
            );
            return new ConfidentialityLabel(
                security_policy_identifier,
                security_classification,
                privacy_mark,
                security_categories
            );
        };
    }
    return _cached_decoder_for_ConfidentialityLabel(el);
}

let _cached_encoder_for_ConfidentialityLabel: $.ASN1Encoder<ConfidentialityLabel> | null =
    null;

/**
 * @summary Encodes a(n) ConfidentialityLabel into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConfidentialityLabel, encoded as an ASN.1 Element.
 */
export function _encode_ConfidentialityLabel(
    value: ConfidentialityLabel,
    elGetter: $.ASN1Encoder<ConfidentialityLabel>
): _Element {
    if (!_cached_encoder_for_ConfidentialityLabel) {
        _cached_encoder_for_ConfidentialityLabel = function (
            value: ConfidentialityLabel
        ): _Element {
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
                            : $._encodeInteger(
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
    return _cached_encoder_for_ConfidentialityLabel(value, elGetter);
}

/* eslint-enable */
