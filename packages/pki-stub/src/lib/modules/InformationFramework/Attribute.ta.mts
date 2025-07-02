/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Attribute_valuesWithContext_Item as VWC,
    _decode_Attribute_valuesWithContext_Item as _decode_VWC,
    _encode_Attribute_valuesWithContext_Item as _encode_VWC,
} from "../InformationFramework/Attribute-valuesWithContext-Item.ta.mjs";

/**
 * @summary Attribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Attribute {ATTRIBUTE:SupportedAttributes} ::= SEQUENCE {
 *   type                ATTRIBUTE.&id({SupportedAttributes}),
 *   values              SET SIZE (0..MAX) OF ATTRIBUTE.&Type({SupportedAttributes}{@type}),
 *   valuesWithContext   SET SIZE (1..MAX) OF SEQUENCE {
 *     value               ATTRIBUTE.&Type({SupportedAttributes}{@type}),
 *     contextList         SET SIZE (1..MAX) OF Context,
 *     ...} OPTIONAL,
 *   ... }
 * ```
 *
 */
export class Attribute {
    constructor(
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: OBJECT_IDENTIFIER,
        /**
         * @summary `values`.
         * @public
         * @readonly
         */
        readonly values: _Element[],
        /**
         * @summary `valuesWithContext`.
         * @public
         * @readonly
         */
        readonly valuesWithContext?: OPTIONAL<VWC[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Attribute
     * @description
     *
     * This takes an `object` and converts it to a `Attribute`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Attribute`.
     * @returns {Attribute}
     */
    public static _from_object(
        _o: { [_K in keyof Attribute]: Attribute[_K] }
    ): Attribute {
        return new Attribute(
            _o.type_,
            _o.values,
            _o.valuesWithContext,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of Attribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Attribute: $.ComponentSpec[] =
    [
        new $.ComponentSpec(
            "type",
            false,
            $.hasTag(_TagClass.universal, 6)
        ),
        new $.ComponentSpec(
            "values",
            false,
            $.hasTag(_TagClass.universal, 17)
        ),
        new $.ComponentSpec(
            "valuesWithContext",
            true,
            $.hasTag(_TagClass.universal, 17)
        ),
    ];

/**
 * @summary The Trailing Root Component Types of Attribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Attribute: $.ComponentSpec[] =
    [];

/**
 * @summary The Extension Addition Component Types of Attribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Attribute: $.ComponentSpec[] =
    [];

/**
 * @summary Decodes an ASN.1 element into a(n) Attribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Attribute} The decoded data structure.
 */
export function _decode_Attribute(el: _Element): Attribute {
    const elements = el.sequence;
    if (elements.length < 2) {
        throw new _ConstructionError("Attribute contained only " + elements.length.toString() + " elements.");
    }
    let [ type_el, values_el, vwcs_el, ...extensions ] = elements;
    const vwcs: VWC[] = [];
    for (const vwc_el of vwcs_el?.setOf ?? []) {
        vwcs.push(_decode_VWC(vwc_el));
    }
    return new Attribute(
        $._decodeObjectIdentifier(type_el),
        values_el.setOf,
        vwcs.length === 0 ? undefined : vwcs,
        extensions,
    );
}

/**
 * @summary Encodes a(n) Attribute into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Attribute, encoded as an ASN.1 Element.
 */
export function _encode_Attribute(value: Attribute): _Element {
    const components: _Element[] = [
        /* REQUIRED */ $._encodeObjectIdentifier(
            value.type_,
            $.BER
        ),
        /* REQUIRED */ $._encodeSetOf<_Element>(
            () => $._encodeAny,
            $.BER
        )(value.values, $.BER),
    ];
    if (value.valuesWithContext?.length) {
        const c = $._encodeSetOf<VWC>(() => _encode_VWC, $.BER)(value.valuesWithContext, $.BER);
        components.push(c);
    }
    components.push(...value._unrecognizedExtensionsList);
    return $._encodeSequence(components, $.BER);
}


/* eslint-enable */
