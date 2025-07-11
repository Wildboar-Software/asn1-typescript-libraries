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
import {
    RelativeDistinguishedName,
    _decode_RelativeDistinguishedName,
    _encode_RelativeDistinguishedName,
} from "../InformationFramework/RelativeDistinguishedName.ta.mjs";
/**
 * @summary HierarchicalAgreement
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HierarchicalAgreement ::= SEQUENCE {
 *   rdn                [0]  RelativeDistinguishedName,
 *   immediateSuperior  [1]  DistinguishedName,
 *   ... }
 * ```
 *
 */
export class HierarchicalAgreement {
    constructor(
        /**
         * @summary `rdn`.
         * @public
         * @readonly
         */
        readonly rdn: RelativeDistinguishedName,
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
     * @summary Restructures an object into a HierarchicalAgreement
     * @description
     *
     * This takes an `object` and converts it to a `HierarchicalAgreement`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `HierarchicalAgreement`.
     * @returns {HierarchicalAgreement}
     */
    public static _from_object(
        _o: { [_K in keyof HierarchicalAgreement]: HierarchicalAgreement[_K] }
    ): HierarchicalAgreement {
        return new HierarchicalAgreement(
            _o.rdn,
            _o.immediateSuperior,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of HierarchicalAgreement
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_HierarchicalAgreement: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "rdn",
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "immediateSuperior",
        false,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of HierarchicalAgreement
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_HierarchicalAgreement: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of HierarchicalAgreement
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_HierarchicalAgreement: $.ComponentSpec[] = [];

let _cached_decoder_for_HierarchicalAgreement: $.ASN1Decoder<HierarchicalAgreement> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HierarchicalAgreement
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HierarchicalAgreement} The decoded data structure.
 */
export function _decode_HierarchicalAgreement(el: _Element): HierarchicalAgreement {
    if (!_cached_decoder_for_HierarchicalAgreement) {
        _cached_decoder_for_HierarchicalAgreement = function (
            el: _Element
        ): HierarchicalAgreement {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "HierarchicalAgreement contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "rdn";
            sequence[1].name = "immediateSuperior";
            let rdn!: RelativeDistinguishedName;
            let immediateSuperior!: DistinguishedName;
            rdn = $._decode_explicit<RelativeDistinguishedName>(
                () => _decode_RelativeDistinguishedName
            )(sequence[0]);
            immediateSuperior = $._decode_explicit<DistinguishedName>(
                () => _decode_DistinguishedName
            )(sequence[1]);
            return new HierarchicalAgreement(
                rdn,
                immediateSuperior,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_HierarchicalAgreement(el);
}

let _cached_encoder_for_HierarchicalAgreement: $.ASN1Encoder<HierarchicalAgreement> | null = null;

/**
 * @summary Encodes a(n) HierarchicalAgreement into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HierarchicalAgreement, encoded as an ASN.1 Element.
 */
export function _encode_HierarchicalAgreement(
    value: HierarchicalAgreement,
    elGetter: $.ASN1Encoder<HierarchicalAgreement>
): _Element {
    if (!_cached_encoder_for_HierarchicalAgreement) {
        _cached_encoder_for_HierarchicalAgreement = function (
            value: HierarchicalAgreement        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_RelativeDistinguishedName,
                                $.DER
                            )(value.rdn, $.DER),
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
    return _cached_encoder_for_HierarchicalAgreement(value, elGetter);
}


/* eslint-enable */
