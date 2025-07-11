/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta.mjs";
/**
 * @summary NonSpecificHierarchicalAgreement
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NonSpecificHierarchicalAgreement ::= SEQUENCE {
 *   immediateSuperior  [1]  DistinguishedName,
 *   ... }
 * ```
 *
 */
export class NonSpecificHierarchicalAgreement {
    constructor(
        /**
         * @summary `immediateSuperior`.
         * @public
         * @readonly
         */
        readonly immediateSuperior: DistinguishedName,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a NonSpecificHierarchicalAgreement
     * @description
     *
     * This takes an `object` and converts it to a `NonSpecificHierarchicalAgreement`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NonSpecificHierarchicalAgreement`.
     * @returns {NonSpecificHierarchicalAgreement}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof NonSpecificHierarchicalAgreement]: NonSpecificHierarchicalAgreement[_K];
            }
        >
    ): NonSpecificHierarchicalAgreement {
        return new NonSpecificHierarchicalAgreement(
            _o.immediateSuperior,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of NonSpecificHierarchicalAgreement
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NonSpecificHierarchicalAgreement: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "immediateSuperior",
        false,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of NonSpecificHierarchicalAgreement
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NonSpecificHierarchicalAgreement: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of NonSpecificHierarchicalAgreement
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NonSpecificHierarchicalAgreement: $.ComponentSpec[] = [];

let _cached_decoder_for_NonSpecificHierarchicalAgreement: $.ASN1Decoder<NonSpecificHierarchicalAgreement> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NonSpecificHierarchicalAgreement
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NonSpecificHierarchicalAgreement} The decoded data structure.
 */
export function _decode_NonSpecificHierarchicalAgreement(el: _Element): NonSpecificHierarchicalAgreement {
    if (!_cached_decoder_for_NonSpecificHierarchicalAgreement) {
        _cached_decoder_for_NonSpecificHierarchicalAgreement = function (
            el: _Element
        ): NonSpecificHierarchicalAgreement {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "NonSpecificHierarchicalAgreement contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "immediateSuperior";
            let immediateSuperior!: DistinguishedName;
            immediateSuperior = $._decode_explicit<DistinguishedName>(
                () => _decode_DistinguishedName
            )(sequence[0]);
            return new NonSpecificHierarchicalAgreement(
                immediateSuperior,
                sequence.slice(1)
            );
        };
    }
    return _cached_decoder_for_NonSpecificHierarchicalAgreement(el);
}

let _cached_encoder_for_NonSpecificHierarchicalAgreement: $.ASN1Encoder<NonSpecificHierarchicalAgreement> | null = null;

/**
 * @summary Encodes a(n) NonSpecificHierarchicalAgreement into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NonSpecificHierarchicalAgreement, encoded as an ASN.1 Element.
 */
export function _encode_NonSpecificHierarchicalAgreement(
    value: NonSpecificHierarchicalAgreement,
    elGetter: $.ASN1Encoder<NonSpecificHierarchicalAgreement>
): _Element {
    if (!_cached_encoder_for_NonSpecificHierarchicalAgreement) {
        _cached_encoder_for_NonSpecificHierarchicalAgreement = function (
            value: NonSpecificHierarchicalAgreement        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                1,
                                () => _encode_DistinguishedName,
                                $.DER
                            )(value.immediateSuperior, $.DER),
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
    return _cached_encoder_for_NonSpecificHierarchicalAgreement(
        value,
        elGetter
    );
}


/* eslint-enable */
