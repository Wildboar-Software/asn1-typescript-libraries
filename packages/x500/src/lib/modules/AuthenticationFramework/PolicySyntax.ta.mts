/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    InfoSyntax,
    _decode_InfoSyntax,
    _encode_InfoSyntax,
} from "../AuthenticationFramework/InfoSyntax.ta.mjs";
import {
    PolicyID,
    _decode_PolicyID,
    _encode_PolicyID,
} from "../AuthenticationFramework/PolicyID.ta.mjs";
/**
 * @summary PolicySyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PolicySyntax ::= SEQUENCE {
 *   policyIdentifier  PolicyID,
 *   policySyntax      InfoSyntax,
 *   ... }
 * ```
 *
 */
export class PolicySyntax {
    constructor(
        /**
         * @summary `policyIdentifier`.
         * @public
         * @readonly
         */
        readonly policyIdentifier: PolicyID,
        /**
         * @summary `policySyntax`.
         * @public
         * @readonly
         */
        readonly policySyntax: InfoSyntax,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PolicySyntax
     * @description
     *
     * This takes an `object` and converts it to a `PolicySyntax`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PolicySyntax`.
     * @returns {PolicySyntax}
     */
    public static _from_object(
        _o: { [_K in keyof PolicySyntax]: PolicySyntax[_K] }
    ): PolicySyntax {
        return new PolicySyntax(
            _o.policyIdentifier,
            _o.policySyntax,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of PolicySyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PolicySyntax: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "policyIdentifier",
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        "policySyntax",
        false,
        $.hasAnyTag
    ),
];

/**
 * @summary The Trailing Root Component Types of PolicySyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PolicySyntax: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of PolicySyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PolicySyntax: $.ComponentSpec[] = [];

let _cached_decoder_for_PolicySyntax: $.ASN1Decoder<PolicySyntax> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PolicySyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PolicySyntax} The decoded data structure.
 */
export function _decode_PolicySyntax(el: _Element): PolicySyntax {
    if (!_cached_decoder_for_PolicySyntax) {
        _cached_decoder_for_PolicySyntax = function (
            el: _Element
        ): PolicySyntax {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "PolicySyntax contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "policyIdentifier";
            sequence[1].name = "policySyntax";
            let policyIdentifier!: PolicyID;
            let policySyntax!: InfoSyntax;
            policyIdentifier = _decode_PolicyID(sequence[0]);
            policySyntax = _decode_InfoSyntax(sequence[1]);
            return new PolicySyntax(
                policyIdentifier,
                policySyntax,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_PolicySyntax(el);
}

let _cached_encoder_for_PolicySyntax: $.ASN1Encoder<PolicySyntax> | null = null;

/**
 * @summary Encodes a(n) PolicySyntax into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PolicySyntax, encoded as an ASN.1 Element.
 */
export function _encode_PolicySyntax(
    value: PolicySyntax,
    elGetter: $.ASN1Encoder<PolicySyntax>
): _Element {
    if (!_cached_encoder_for_PolicySyntax) {
        _cached_encoder_for_PolicySyntax = function (
            value: PolicySyntax        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_PolicyID(
                                value.policyIdentifier,
                                $.DER
                            ),
                            /* REQUIRED   */ _encode_InfoSyntax(
                                value.policySyntax,
                                $.DER
                            ),
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
    return _cached_encoder_for_PolicySyntax(value, elGetter);
}


/* eslint-enable */
