/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    SecurityPolicyName,
    _decode_SecurityPolicyName,
    _encode_SecurityPolicyName,
} from "../SIOsAccessControl-MODULE/SecurityPolicyName.ta.mjs";

/**
 * @summary EquivalentPolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EquivalentPolicy ::= SEQUENCE {
 *   securityPolicyId    OBJECT IDENTIFIER,
 *   securityPolicyName  SecurityPolicyName OPTIONAL
 * }
 * ```
 *
 */
export class EquivalentPolicy {
    constructor(
        /**
         * @summary `securityPolicyId`.
         * @public
         * @readonly
         */
        readonly securityPolicyId: OBJECT_IDENTIFIER,
        /**
         * @summary `securityPolicyName`.
         * @public
         * @readonly
         */
        readonly securityPolicyName: OPTIONAL<SecurityPolicyName>
    ) {}

    /**
     * @summary Restructures an object into a EquivalentPolicy
     * @description
     *
     * This takes an `object` and converts it to a `EquivalentPolicy`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EquivalentPolicy`.
     * @returns {EquivalentPolicy}
     */
    public static _from_object(
        _o: { [_K in keyof EquivalentPolicy]: EquivalentPolicy[_K] }
    ): EquivalentPolicy {
        return new EquivalentPolicy(_o.securityPolicyId, _o.securityPolicyName);
    }
}


/**
 * @summary The Leading Root Component Types of EquivalentPolicy
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EquivalentPolicy: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "securityPolicyId",
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        "securityPolicyName",
        true,
        $.hasAnyTag
    ),
];


/**
 * @summary The Trailing Root Component Types of EquivalentPolicy
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EquivalentPolicy: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of EquivalentPolicy
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EquivalentPolicy: $.ComponentSpec[] = [];


let _cached_decoder_for_EquivalentPolicy: $.ASN1Decoder<EquivalentPolicy> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) EquivalentPolicy
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EquivalentPolicy} The decoded data structure.
 */
export function _decode_EquivalentPolicy(el: _Element): EquivalentPolicy {
    if (!_cached_decoder_for_EquivalentPolicy) {
        _cached_decoder_for_EquivalentPolicy = function (
            el: _Element
        ): EquivalentPolicy {
            let securityPolicyId!: OBJECT_IDENTIFIER;
            let securityPolicyName: OPTIONAL<SecurityPolicyName>;
            const callbacks: $.DecodingMap = {
                securityPolicyId: (_el: _Element): void => {
                    securityPolicyId = $._decodeObjectIdentifier(_el);
                },
                securityPolicyName: (_el: _Element): void => {
                    securityPolicyName = _decode_SecurityPolicyName(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EquivalentPolicy,
                _extension_additions_list_spec_for_EquivalentPolicy,
                _root_component_type_list_2_spec_for_EquivalentPolicy,
                undefined
            );
            return new EquivalentPolicy (
                securityPolicyId,
                securityPolicyName
            );
        };
    }
    return _cached_decoder_for_EquivalentPolicy(el);
}


let _cached_encoder_for_EquivalentPolicy: $.ASN1Encoder<EquivalentPolicy> | null = null;


/**
 * @summary Encodes a(n) EquivalentPolicy into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EquivalentPolicy, encoded as an ASN.1 Element.
 */
export function _encode_EquivalentPolicy(
    value: EquivalentPolicy,
    elGetter: $.ASN1Encoder<EquivalentPolicy>
): _Element {
    if (!_cached_encoder_for_EquivalentPolicy) {
        _cached_encoder_for_EquivalentPolicy = function (
            value: EquivalentPolicy        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.securityPolicyId,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.securityPolicyName === undefined
                            ? undefined
                            : _encode_SecurityPolicyName(
                                  value.securityPolicyName,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_EquivalentPolicy(value, elGetter);
}


/* eslint-enable */
