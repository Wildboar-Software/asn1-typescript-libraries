/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary ScopeRestriction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ScopeRestriction ::= SEQUENCE {
 *   id            SCOPE-RESTRICTION.&id,
 *   restriction   SCOPE-RESTRICTION.&Type,
 *   ... }
 * ```
 *
 * @class
 */
export class ScopeRestriction {
    constructor(
        /**
         * @summary `id`.
         * @public
         * @readonly
         */
        readonly id: OBJECT_IDENTIFIER,
        /**
         * @summary `restriction`.
         * @public
         * @readonly
         */
        readonly restriction: _Element,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ScopeRestriction
     * @description
     *
     * This takes an `object` and converts it to a `ScopeRestriction`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ScopeRestriction`.
     * @returns {ScopeRestriction}
     */
    public static _from_object(
        _o: { [_K in keyof ScopeRestriction]: ScopeRestriction[_K] }
    ): ScopeRestriction {
        return new ScopeRestriction(
            _o.id,
            _o.restriction,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of ScopeRestriction
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ScopeRestriction: $.ComponentSpec[] =
    [
        new $.ComponentSpec(
            "id",
            false,
            $.hasTag(_TagClass.universal, 6)
        ),
        new $.ComponentSpec(
            "restriction",
            false,
            $.hasAnyTag
        ),
    ];

/**
 * @summary The Trailing Root Component Types of ScopeRestriction
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ScopeRestriction: $.ComponentSpec[] =
    [];

/**
 * @summary The Extension Addition Component Types of ScopeRestriction
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ScopeRestriction: $.ComponentSpec[] =
    [];

/**
 * @summary Decodes an ASN.1 element into a(n) ScopeRestriction
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ScopeRestriction} The decoded data structure.
 */
export function _decode_ScopeRestriction(el: _Element) {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError(
            "ScopeRestriction contained only " +
                sequence.length.toString() +
                " elements."
        );
    }
    sequence[0].name = "id";
    sequence[1].name = "restriction";
    let id!: OBJECT_IDENTIFIER;
    let restriction!: _Element;
    id = $._decodeObjectIdentifier(sequence[0]);
    restriction = $._decodeAny(sequence[1]);
    return new ScopeRestriction(id, restriction, sequence.slice(2));
}

/**
 * @summary Encodes a(n) ScopeRestriction into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ScopeRestriction, encoded as an ASN.1 Element.
 */
export function _encode_ScopeRestriction(
    value: ScopeRestriction) {
    const components: _Element[] = [
        $._encodeObjectIdentifier(value.id, $.BER),
        $._encodeAny(value.restriction, $.BER),
        ...value._unrecognizedExtensionsList ?? [],
    ];
    return $._encodeSequence(components, $.BER);
}


/* eslint-enable */
