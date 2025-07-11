/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CertPolicyId,
    _decode_CertPolicyId,
    _encode_CertPolicyId,
} from "../CertificateExtensions/CertPolicyId.ta.mjs";
/**
 * @summary PolicyMappingsSyntax_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PolicyMappingsSyntax-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class PolicyMappingsSyntax_Item {
    constructor(
        /**
         * @summary `issuerDomainPolicy`.
         * @public
         * @readonly
         */
        readonly issuerDomainPolicy: CertPolicyId,
        /**
         * @summary `subjectDomainPolicy`.
         * @public
         * @readonly
         */
        readonly subjectDomainPolicy: CertPolicyId,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PolicyMappingsSyntax_Item
     * @description
     *
     * This takes an `object` and converts it to a `PolicyMappingsSyntax_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PolicyMappingsSyntax_Item`.
     * @returns {PolicyMappingsSyntax_Item}
     */
    public static _from_object(
        _o:
            {
                [_K in keyof PolicyMappingsSyntax_Item]: PolicyMappingsSyntax_Item[_K];
            }
    ): PolicyMappingsSyntax_Item {
        return new PolicyMappingsSyntax_Item(
            _o.issuerDomainPolicy,
            _o.subjectDomainPolicy,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of PolicyMappingsSyntax_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PolicyMappingsSyntax_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "issuerDomainPolicy",
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        "subjectDomainPolicy",
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
];

/**
 * @summary The Trailing Root Component Types of PolicyMappingsSyntax_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PolicyMappingsSyntax_Item: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of PolicyMappingsSyntax_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PolicyMappingsSyntax_Item: $.ComponentSpec[] = [];

let _cached_decoder_for_PolicyMappingsSyntax_Item: $.ASN1Decoder<PolicyMappingsSyntax_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PolicyMappingsSyntax_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PolicyMappingsSyntax_Item} The decoded data structure.
 */
export function _decode_PolicyMappingsSyntax_Item(el: _Element): PolicyMappingsSyntax_Item {
    if (!_cached_decoder_for_PolicyMappingsSyntax_Item) {
        _cached_decoder_for_PolicyMappingsSyntax_Item = function (
            el: _Element
        ): PolicyMappingsSyntax_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "PolicyMappingsSyntax-Item contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "issuerDomainPolicy";
            sequence[1].name = "subjectDomainPolicy";
            let issuerDomainPolicy!: CertPolicyId;
            let subjectDomainPolicy!: CertPolicyId;
            issuerDomainPolicy = _decode_CertPolicyId(sequence[0]);
            subjectDomainPolicy = _decode_CertPolicyId(sequence[1]);
            return new PolicyMappingsSyntax_Item(
                issuerDomainPolicy,
                subjectDomainPolicy,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_PolicyMappingsSyntax_Item(el);
}

let _cached_encoder_for_PolicyMappingsSyntax_Item: $.ASN1Encoder<PolicyMappingsSyntax_Item> | null = null;

/**
 * @summary Encodes a(n) PolicyMappingsSyntax_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PolicyMappingsSyntax_Item, encoded as an ASN.1 Element.
 */
export function _encode_PolicyMappingsSyntax_Item(
    value: PolicyMappingsSyntax_Item,
    elGetter: $.ASN1Encoder<PolicyMappingsSyntax_Item>
): _Element {
    if (!_cached_encoder_for_PolicyMappingsSyntax_Item) {
        _cached_encoder_for_PolicyMappingsSyntax_Item = function (
            value: PolicyMappingsSyntax_Item        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CertPolicyId(
                                value.issuerDomainPolicy,
                                $.DER
                            ),
                            /* REQUIRED   */ _encode_CertPolicyId(
                                value.subjectDomainPolicy,
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
    return _cached_encoder_for_PolicyMappingsSyntax_Item(value, elGetter);
}


/* eslint-enable */
