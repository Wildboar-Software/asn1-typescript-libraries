/* eslint-disable */
import {
    INTEGER,
    OBJECT_IDENTIFIER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Variant_triples_Item_value, _decode_Variant_triples_Item_value, _encode_Variant_triples_Item_value } from "../RecordSyntax-generic/Variant-triples-Item-value.ta.mjs";


/**
 * @summary Variant_triples_Item
 * @description
 * 
 * One variant specifier (ANSI/NISO Z39.50-2003, Appendix VAR, RET.2.3, ASN1.6).
 * Class and type are integers from the variant set. The value's datatype is the
 * one that set defines for that type.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Variant-triples-Item ::= SEQUENCE {
 *     variantSetId [0] IMPLICIT OBJECT IDENTIFIER OPTIONAL,
 *     -- If omitted, globalVariantSetId (above) applies,
 *     -- unless that too is omitted, in which case, default used.
 *     class [1] IMPLICIT INTEGER,
 *     type [2] IMPLICIT INTEGER,
 *     value [3] CHOICE {
 *         integer INTEGER,
 *         string InternationalString,
 *         octets OCTET STRING,
 *         oid OBJECT IDENTIFIER,
 *         bool BOOLEAN,
 *         null NULL,
 *         -- Following need context tags:
 *         unit [1] IMPLICIT Unit,
 *         valueAndUnit [2] IMPLICIT IntUnit
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class Variant_triples_Item {
    /**
     * @summary `variantSetId`.
     * @description
     * 
     * Variant set that interprets this triple. If omitted, the set on the
     * enclosing variant applies. If that is omitted too, the default is used
     * (ASN1.6).
     * @public
     * @readonly
     */
    readonly variantSetId: OPTIONAL<OBJECT_IDENTIFIER>;
    /**
     * @summary `class_`.
     * @description
     * 
     * Class in the variant set. Variant-1 (RET.3.3.1): 1 variant id; 2
     * body-part type; 3 formatting; 4 language and character set; 5 piece; 6
     * metadata requested (request only); 7 metadata returned (applied or
     * supported variant); 8 highlighting; 9 miscellaneous.
     * @public
     * @readonly
     */
    readonly class_: INTEGER;
    /**
     * @summary `type_`.
     * @description
     * 
     * Type within the class. Appendix VAR gives the integer, the meaning, and
     * the datatype for variant-1. Some types are legal only on a request, or
     * only on an applied variant.
     * @public
     * @readonly
     */
    readonly type_: INTEGER;
    /**
     * @summary `value`.
     * @description
     * 
     * Value for this class and type. Use the alternative whose datatype
     * Appendix VAR assigns. `unit` and `valueAndUnit` are context-tagged; the
     * other alternatives are not (ASN1.6).
     * @public
     * @readonly
     */
    readonly value: Variant_triples_Item_value;

    constructor (
        variantSetId: OPTIONAL<OBJECT_IDENTIFIER>,
        class_: INTEGER,
        type_: INTEGER,
        value: Variant_triples_Item_value
    ) {
        this.variantSetId = variantSetId;
        this.class_ = class_;
        this.type_ = type_;
        this.value = value;
    }

    /**
     * @summary Restructures an object into a Variant_triples_Item
     * @description
     * 
     * This takes an `object` and converts it to a `Variant_triples_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Variant_triples_Item`.
     * @returns {Variant_triples_Item}
     */
    public static _from_object (_o: { [_K in keyof (Variant_triples_Item)]: (Variant_triples_Item)[_K] }): Variant_triples_Item {
        return new Variant_triples_Item(_o.variantSetId, _o.class_, _o.type_, _o.value);
    }


}

/**
 * @summary The Leading Root Component Types of Variant_triples_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Variant_triples_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("variantSetId", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("class", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("type", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("value", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of Variant_triples_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Variant_triples_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Variant_triples_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Variant_triples_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Variant_triples_Item: $.ASN1Decoder<Variant_triples_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Variant_triples_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Variant_triples_Item (el: _Element): Variant_triples_Item {
    if (!_cached_decoder_for_Variant_triples_Item) { _cached_decoder_for_Variant_triples_Item = function (el: _Element): Variant_triples_Item {
    let variantSetId: OPTIONAL<OBJECT_IDENTIFIER>;
    let class_!: INTEGER;
    let type_!: INTEGER;
    let value!: Variant_triples_Item_value;
    const callbacks: $.DecodingMap = {
        "variantSetId": (_el: _Element): void => { variantSetId = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "class": (_el: _Element): void => { class_ = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "type": (_el: _Element): void => { type_ = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "value": (_el: _Element): void => { value = $._decode_explicit<Variant_triples_Item_value>(() => _decode_Variant_triples_Item_value)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Variant_triples_Item,
        _extension_additions_list_spec_for_Variant_triples_Item,
        _root_component_type_list_2_spec_for_Variant_triples_Item,
        undefined,
    );
    return new Variant_triples_Item(
        variantSetId,
        class_,
        type_,
        value
    );
}; }
    return _cached_decoder_for_Variant_triples_Item(el);
}

let _cached_encoder_for_Variant_triples_Item: $.ASN1Encoder<Variant_triples_Item> | null = null;

/**
 * @summary Encodes a(n) Variant_triples_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Variant_triples_Item, encoded as an ASN.1 Element.
 */
export
function _encode_Variant_triples_Item (value: Variant_triples_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Variant_triples_Item) { _cached_encoder_for_Variant_triples_Item = function (value: Variant_triples_Item, elGetter: $.ASN1Encoder<Variant_triples_Item>): _Element {
    const _components: _Element[] = new Array(4);
    let _components_i = 0;
    if (value.variantSetId !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER)(value.variantSetId, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.class_, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.type_, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 3, () => _encode_Variant_triples_Item_value, $.BER)(value.value, $.BER);
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Variant_triples_Item(value, elGetter);
}


/* eslint-enable */
