/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
/**
 * @summary PolicyQualifierInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PolicyQualifierInfo ::= SEQUENCE {
 *   policyQualifierId  CERT-POLICY-QUALIFIER.&id({SupportedPolicyQualifiers}),
 *   qualifier          CERT-POLICY-QUALIFIER.&Qualifier
 *               ({SupportedPolicyQualifiers}{@policyQualifierId}) OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class PolicyQualifierInfo {
    constructor(
        /**
         * @summary `policyQualifierId`.
         * @public
         * @readonly
         */
        readonly policyQualifierId: OBJECT_IDENTIFIER,
        /**
         * @summary `qualifier`.
         * @public
         * @readonly
         */
        readonly qualifier: OPTIONAL<_Element>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PolicyQualifierInfo
     * @description
     *
     * This takes an `object` and converts it to a `PolicyQualifierInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PolicyQualifierInfo`.
     * @returns {PolicyQualifierInfo}
     */
    public static _from_object(
        _o: { [_K in keyof PolicyQualifierInfo]: PolicyQualifierInfo[_K] }
    ): PolicyQualifierInfo {
        return new PolicyQualifierInfo(
            _o.policyQualifierId,
            _o.qualifier,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of PolicyQualifierInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PolicyQualifierInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "policyQualifierId",
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec("qualifier", true, $.hasAnyTag),
];

/**
 * @summary The Trailing Root Component Types of PolicyQualifierInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PolicyQualifierInfo: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of PolicyQualifierInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PolicyQualifierInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_PolicyQualifierInfo: $.ASN1Decoder<PolicyQualifierInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PolicyQualifierInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PolicyQualifierInfo} The decoded data structure.
 */
export function _decode_PolicyQualifierInfo(el: _Element): PolicyQualifierInfo {
    if (!_cached_decoder_for_PolicyQualifierInfo) {
        _cached_decoder_for_PolicyQualifierInfo = function (
            el: _Element
        ): PolicyQualifierInfo {
            let policyQualifierId!: OBJECT_IDENTIFIER;
            let qualifier: OPTIONAL<_Element>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                policyQualifierId: (_el: _Element): void => {
                    policyQualifierId = $._decodeObjectIdentifier(_el);
                },
                qualifier: (_el: _Element): void => {
                    qualifier = $._decodeAny(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PolicyQualifierInfo,
                _extension_additions_list_spec_for_PolicyQualifierInfo,
                _root_component_type_list_2_spec_for_PolicyQualifierInfo,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new PolicyQualifierInfo(
                policyQualifierId,
                qualifier,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_PolicyQualifierInfo(el);
}

let _cached_encoder_for_PolicyQualifierInfo: $.ASN1Encoder<PolicyQualifierInfo> | null = null;

/**
 * @summary Encodes a(n) PolicyQualifierInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PolicyQualifierInfo, encoded as an ASN.1 Element.
 */
export function _encode_PolicyQualifierInfo(
    value: PolicyQualifierInfo,
    elGetter: $.ASN1Encoder<PolicyQualifierInfo>
): _Element {
    if (!_cached_encoder_for_PolicyQualifierInfo) {
        _cached_encoder_for_PolicyQualifierInfo = function (
            value: PolicyQualifierInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.policyQualifierId,
                                $.DER
                            ),
                            /* IF_ABSENT  */ value.qualifier === undefined
                                ? undefined
                                : $._encodeAny(value.qualifier, $.DER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_PolicyQualifierInfo(value, elGetter);
}


/* eslint-enable */
