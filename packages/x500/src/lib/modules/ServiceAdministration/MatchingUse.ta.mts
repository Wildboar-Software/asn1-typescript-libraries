/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
/**
 * @summary MatchingUse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MatchingUse ::= SEQUENCE {
 *   restrictionType    MATCHING-RESTRICTION.&id({SupportedMatchingRestrictions}),
 *   restrictionValue   MATCHING-RESTRICTION.&Restriction
 *                         ({SupportedMatchingRestrictions}{@restrictionType}),
 *   ... }
 * ```
 *
 * @class
 */
export class MatchingUse {
    constructor(
        /**
         * @summary `restrictionType`.
         * @public
         * @readonly
         */
        readonly restrictionType: OBJECT_IDENTIFIER,
        /**
         * @summary `restrictionValue`.
         * @public
         * @readonly
         */
        readonly restrictionValue: _Element,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a MatchingUse
     * @description
     *
     * This takes an `object` and converts it to a `MatchingUse`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MatchingUse`.
     * @returns {MatchingUse}
     */
    public static _from_object(
        _o: { [_K in keyof MatchingUse]: MatchingUse[_K] }
    ): MatchingUse {
        return new MatchingUse(
            _o.restrictionType,
            _o.restrictionValue,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of MatchingUse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MatchingUse: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "restrictionType",
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        "restrictionValue",
        false,
        $.hasAnyTag
    ),
];

/**
 * @summary The Trailing Root Component Types of MatchingUse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MatchingUse: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of MatchingUse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MatchingUse: $.ComponentSpec[] = [];

let _cached_decoder_for_MatchingUse: $.ASN1Decoder<MatchingUse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MatchingUse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MatchingUse} The decoded data structure.
 */
export function _decode_MatchingUse(el: _Element) {
    if (!_cached_decoder_for_MatchingUse) {
        _cached_decoder_for_MatchingUse = function (el: _Element): MatchingUse {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "MatchingUse contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "restrictionType";
            sequence[1].name = "restrictionValue";
            let restrictionType!: OBJECT_IDENTIFIER;
            let restrictionValue!: _Element;
            restrictionType = $._decodeObjectIdentifier(sequence[0]);
            restrictionValue = $._decodeAny(sequence[1]);
            return new MatchingUse(
                restrictionType,
                restrictionValue,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_MatchingUse(el);
}

let _cached_encoder_for_MatchingUse: $.ASN1Encoder<MatchingUse> | null = null;

/**
 * @summary Encodes a(n) MatchingUse into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MatchingUse, encoded as an ASN.1 Element.
 */
export function _encode_MatchingUse(
    value: MatchingUse,
    elGetter: $.ASN1Encoder<MatchingUse>
) {
    if (!_cached_encoder_for_MatchingUse) {
        _cached_encoder_for_MatchingUse = function (
            value: MatchingUse        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.restrictionType,
                                $.DER
                            ),
                            /* REQUIRED   */ $._encodeAny(
                                value.restrictionValue,
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
    return _cached_encoder_for_MatchingUse(value, elGetter);
}


/* eslint-enable */
