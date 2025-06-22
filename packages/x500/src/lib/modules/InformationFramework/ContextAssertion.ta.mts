/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
/**
 * @summary ContextAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContextAssertion ::= SEQUENCE {
 *   contextType    CONTEXT.&id({SupportedContexts}),
 *   contextValues  SET SIZE (1..MAX) OF
 *       CONTEXT.&Assertion({SupportedContexts}{@contextType}),
 *   ... }
 * ```
 *
 * @class
 */
export class ContextAssertion {
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
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ContextAssertion
     * @description
     *
     * This takes an `object` and converts it to a `ContextAssertion`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ContextAssertion`.
     * @returns {ContextAssertion}
     */
    public static _from_object(
        _o: { [_K in keyof ContextAssertion]: ContextAssertion[_K] }
    ): ContextAssertion {
        return new ContextAssertion(
            _o.contextType,
            _o.contextValues,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of ContextAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ContextAssertion: $.ComponentSpec[] = [
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
];

/**
 * @summary The Trailing Root Component Types of ContextAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ContextAssertion: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ContextAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ContextAssertion: $.ComponentSpec[] = [];

let _cached_decoder_for_ContextAssertion: $.ASN1Decoder<ContextAssertion> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ContextAssertion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContextAssertion} The decoded data structure.
 */
export function _decode_ContextAssertion(el: _Element) {
    if (!_cached_decoder_for_ContextAssertion) {
        _cached_decoder_for_ContextAssertion = function (
            el: _Element
        ): ContextAssertion {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "ContextAssertion contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "contextType";
            sequence[1].name = "contextValues";
            let contextType!: OBJECT_IDENTIFIER;
            let contextValues!: _Element[];
            contextType = $._decodeObjectIdentifier(sequence[0]);
            contextValues = $._decodeSetOf<_Element>(() => $._decodeAny)(
                sequence[1]
            );
            return new ContextAssertion(
                contextType,
                contextValues,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_ContextAssertion(el);
}

let _cached_encoder_for_ContextAssertion: $.ASN1Encoder<ContextAssertion> | null = null;

/**
 * @summary Encodes a(n) ContextAssertion into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContextAssertion, encoded as an ASN.1 Element.
 */
export function _encode_ContextAssertion(
    value: ContextAssertion,
    elGetter: $.ASN1Encoder<ContextAssertion>
) {
    if (!_cached_encoder_for_ContextAssertion) {
        _cached_encoder_for_ContextAssertion = function (
            value: ContextAssertion        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.contextType,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeSetOf<_Element>(
                                () => $._encodeAny,
                                $.BER
                            )(value.contextValues, $.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ContextAssertion(value, elGetter);
}


/* eslint-enable */
