/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary OtherKeyAttribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OtherKeyAttribute ::= SEQUENCE {
 *     keyAttributeIdentifier  OTHER-KEY-ATTRIBUTE.&id({OtherKeyAttributeTable}),
 *     keyAttribute
 *         OTHER-KEY-ATTRIBUTE.&Type
 *         ({OtherKeyAttributeTable}{@keyAttributeIdentifier}) OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class OtherKeyAttribute {
    constructor(
        /**
         * @summary `keyAttributeIdentifier`.
         * @public
         * @readonly
         */
        readonly keyAttributeIdentifier: OBJECT_IDENTIFIER,
        /**
         * @summary `keyAttribute`.
         * @public
         * @readonly
         */
        readonly keyAttribute: OPTIONAL<_Element>
    ) {}

    /**
     * @summary Restructures an object into a OtherKeyAttribute
     * @description
     *
     * This takes an `object` and converts it to a `OtherKeyAttribute`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OtherKeyAttribute`.
     * @returns {OtherKeyAttribute}
     */
    public static _from_object(
        _o: { [_K in keyof OtherKeyAttribute]: OtherKeyAttribute[_K] }
    ): OtherKeyAttribute {
        return new OtherKeyAttribute(
            _o.keyAttributeIdentifier,
            _o.keyAttribute
        );
    }
}


/**
 * @summary The Leading Root Component Types of OtherKeyAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OtherKeyAttribute: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "keyAttributeIdentifier",
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        "keyAttribute",
        true,
        $.hasAnyTag
    ),
];


/**
 * @summary The Trailing Root Component Types of OtherKeyAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OtherKeyAttribute: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of OtherKeyAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OtherKeyAttribute: $.ComponentSpec[] = [];


let _cached_decoder_for_OtherKeyAttribute: $.ASN1Decoder<OtherKeyAttribute> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) OtherKeyAttribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OtherKeyAttribute} The decoded data structure.
 */
export function _decode_OtherKeyAttribute(el: _Element): OtherKeyAttribute {
    if (!_cached_decoder_for_OtherKeyAttribute) {
        _cached_decoder_for_OtherKeyAttribute = function (
            el: _Element
        ): OtherKeyAttribute {
            let keyAttributeIdentifier!: OBJECT_IDENTIFIER;
            let keyAttribute: OPTIONAL<_Element>;
            const callbacks: $.DecodingMap = {
                keyAttributeIdentifier: (_el: _Element): void => {
                    keyAttributeIdentifier = $._decodeObjectIdentifier(_el);
                },
                keyAttribute: (_el: _Element): void => {
                    keyAttribute = $._decodeAny(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_OtherKeyAttribute,
                _extension_additions_list_spec_for_OtherKeyAttribute,
                _root_component_type_list_2_spec_for_OtherKeyAttribute,
                undefined
            );
            return new OtherKeyAttribute(
                keyAttributeIdentifier,
                keyAttribute
            );
        };
    }
    return _cached_decoder_for_OtherKeyAttribute(el);
}


let _cached_encoder_for_OtherKeyAttribute: $.ASN1Encoder<OtherKeyAttribute> | null = null;


/**
 * @summary Encodes a(n) OtherKeyAttribute into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OtherKeyAttribute, encoded as an ASN.1 Element.
 */
export function _encode_OtherKeyAttribute(
    value: OtherKeyAttribute,
    elGetter: $.ASN1Encoder<OtherKeyAttribute>
): _Element {
    if (!_cached_encoder_for_OtherKeyAttribute) {
        _cached_encoder_for_OtherKeyAttribute = function (
            value: OtherKeyAttribute        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.keyAttributeIdentifier,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.keyAttribute === undefined
                            ? undefined
                            : $._encodeAny(value.keyAttribute, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_OtherKeyAttribute(value, elGetter);
}


/* eslint-enable */
