/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
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
 * keyAttrId  KEY-ATTRIBUTE.&id({SupportedKeyAttributes}),
 * keyAttr    KEY-ATTRIBUTE.&Type({SupportedKeyAttributes}{@keyAttrId})}
 * ```
 *
 */
export class OtherKeyAttribute {
    constructor(
        /**
         * @summary `keyAttrId`.
         * @public
         * @readonly
         */
        readonly keyAttrId: OBJECT_IDENTIFIER,
        /**
         * @summary `keyAttr`.
         * @public
         * @readonly
         */
        readonly keyAttr: _Element
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
        return new OtherKeyAttribute(_o.keyAttrId, _o.keyAttr);
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
        "keyAttrId",
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec("keyAttr", false, $.hasAnyTag),
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
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "OtherKeyAttribute contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "keyAttrId";
            sequence[1].name = "keyAttr";
            let keyAttrId!: OBJECT_IDENTIFIER;
            let keyAttr!: _Element;
            keyAttrId = $._decodeObjectIdentifier(sequence[0]);
            keyAttr = $._decodeAny(sequence[1]);
            return new OtherKeyAttribute(keyAttrId, keyAttr);
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
                            value.keyAttrId,
                            $.DER
                        ),
                        /* REQUIRED   */ $._encodeAny(value.keyAttr, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_OtherKeyAttribute(value, elGetter);
}


/* eslint-enable */
