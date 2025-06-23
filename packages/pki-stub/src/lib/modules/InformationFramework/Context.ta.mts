/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OBJECT_IDENTIFIER,
    OPTIONAL,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Context
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Context ::= SEQUENCE {
 *   contextType    CONTEXT.&id({SupportedContexts}),
 *   contextValues
 *     SET SIZE (1..MAX) OF CONTEXT.&Type({SupportedContexts}{@contextType}),
 *   fallback       BOOLEAN DEFAULT FALSE,
 *   ... }
 * ```
 *
 * @class
 */
export class Context {
    constructor(
        /**
         * @summary `contextType`.
         * @public
         * @readonly
         */
        readonly contextType: OBJECT_IDENTIFIER,
        /**
         * @summary `contextValues`.
         * @public
         * @readonly
         */
        readonly contextValues: _Element[],
        /**
         * @summary `fallback`.
         * @public
         * @readonly
         */
        readonly fallback?: OPTIONAL<BOOLEAN>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Context
     * @description
     *
     * This takes an `object` and converts it to a `Context`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Context`.
     * @returns {Context}
     */
    public static _from_object(
        _o: { [_K in keyof Context]: Context[_K] }
    ): Context {
        return new Context(
            _o.contextType,
            _o.contextValues,
            _o.fallback,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `fallback`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_fallback(): BOOLEAN {
        return false;
    }
}

/**
 * @summary The Leading Root Component Types of Context
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Context: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "contextType",
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        "contextValues",
        false,
        $.hasTag(_TagClass.universal, 17)
    ),
    new $.ComponentSpec(
        "fallback",
        true,
        $.hasTag(_TagClass.universal, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of Context
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Context: $.ComponentSpec[] =
    [];

/**
 * @summary The Extension Addition Component Types of Context
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Context: $.ComponentSpec[] = [];

/**
 * @summary Decodes an ASN.1 element into a(n) Context
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Context} The decoded data structure.
 */
export function _decode_Context(el: _Element): Context {
    const elements = el.sequence;
    if (elements.length < 2) {
        throw new _ConstructionError("Context contained only " + elements.length.toString() + " element(s).");
    }
    let [ type_el, values_el, fallback_el, ...extensions ] = elements;
    return new Context(
        $._decodeObjectIdentifier(type_el),
        values_el.setOf,
        fallback_el?.boolean ?? Context._default_value_for_fallback,
        extensions,
    );
}

/**
 * @summary Encodes a(n) Context into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Context, encoded as an ASN.1 Element.
 */
export function _encode_Context(value: Context): _Element {
    const components: _Element[] = [
        /* REQUIRED   */ $._encodeObjectIdentifier(
            value.contextType,
            $.BER
        ),
        /* REQUIRED   */ $._encodeSetOf<_Element>(
            () => $._encodeAny,
            $.BER
        )(value.contextValues, $.BER),
    ];
    if (value.fallback) {
        components.push($._encodeBoolean(value.fallback, $.BER));
    }
    components.push(...value._unrecognizedExtensionsList);
    return $._encodeSequence(components, $.BER);
}


/* eslint-enable */
