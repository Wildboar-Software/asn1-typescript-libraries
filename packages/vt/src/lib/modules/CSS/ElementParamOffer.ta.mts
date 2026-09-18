/* eslint-disable */
import {
    OPTIONAL,
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_IntegerOffer, _encode_IntegerOffer, type IntegerOffer } from "../G/IntegerOffer.ta.mjs";
// export { IntegerOffer, _decode_IntegerOffer, _encode_IntegerOffer } from "../G/IntegerOffer.ta.mjs";
import { ElementParamOffer_category, _decode_ElementParamOffer_category, _encode_ElementParamOffer_category } from "../CSS/ElementParamOffer-category.ta.mjs";
// export { ElementParamOffer_category, ElementParamOffer_category_character /* IMPORTED_LONG_NAMED_BIT */, character /* IMPORTED_SHORT_NAMED_BIT */, ElementParamOffer_category_boolean /* IMPORTED_LONG_NAMED_BIT */, boolean_ /* IMPORTED_SHORT_NAMED_BIT */, ElementParamOffer_category_symbolic /* IMPORTED_LONG_NAMED_BIT */, symbolic /* IMPORTED_SHORT_NAMED_BIT */, ElementParamOffer_category_integer /* IMPORTED_LONG_NAMED_BIT */, integer /* IMPORTED_SHORT_NAMED_BIT */, ElementParamOffer_category_transparent /* IMPORTED_LONG_NAMED_BIT */, transparent /* IMPORTED_SHORT_NAMED_BIT */, _decode_ElementParamOffer_category, _encode_ElementParamOffer_category } from "../CSS/ElementParamOffer-category.ta.mjs";
import { _decode_RepertoireAssignment, _encode_RepertoireAssignment, RepertoireAssignment } from "../CDS/RepertoireAssignment.ta.mjs";
// export { RepertoireAssignment, _decode_RepertoireAssignment, _encode_RepertoireAssignment } from "../CDS/RepertoireAssignment.ta.mjs";


/**
 * @summary ElementParamOffer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ElementParamOffer ::= SEQUENCE {
 *     elementIdentifier   [0] IMPLICIT INTEGER,
 *     size                [3] IMPLICIT G.IntegerOffer OPTIONAL,
 *     -- Set bits are offered, unset ones are not.
 *     category            [4] IMPLICIT BIT STRING {
 *         character   (0),
 *         boolean     (1),
 *         symbolic    (2),
 *         integer     (3),
 *         transparent (4)
 *     } OPTIONAL,
 *     repertoire          [5] IMPLICIT SEQUENCE OF CDS.RepertoireAssignment OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ElementParamOffer {
    constructor (
        /**
         * @summary `elementIdentifier`.
         * @public
         * @readonly
         */
        readonly elementIdentifier: INTEGER,
        /**
         * @summary `size`.
         * @public
         * @readonly
         */
        readonly size: OPTIONAL<IntegerOffer>,
        /**
         * @summary `category`.
         * @public
         * @readonly
         */
        readonly category: OPTIONAL<ElementParamOffer_category>,
        /**
         * @summary `repertoire`.
         * @public
         * @readonly
         */
        readonly repertoire: OPTIONAL<RepertoireAssignment[]>
    ) {}

    /**
     * @summary Restructures an object into a ElementParamOffer
     * @description
     * 
     * This takes an `object` and converts it to a `ElementParamOffer`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ElementParamOffer`.
     * @returns {ElementParamOffer}
     */
    public static _from_object (_o: { [_K in keyof (ElementParamOffer)]: (ElementParamOffer)[_K] }): ElementParamOffer {
        return new ElementParamOffer(_o.elementIdentifier, _o.size, _o.category, _o.repertoire);
    }


}

/**
 * @summary The Leading Root Component Types of ElementParamOffer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ElementParamOffer: $.ComponentSpec[] = [
    new $.ComponentSpec("elementIdentifier", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("size", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("category", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("repertoire", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of ElementParamOffer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ElementParamOffer: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ElementParamOffer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ElementParamOffer: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ElementParamOffer: $.ASN1Decoder<ElementParamOffer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ElementParamOffer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ElementParamOffer (el: _Element): ElementParamOffer {
    if (!_cached_decoder_for_ElementParamOffer) { _cached_decoder_for_ElementParamOffer = function (el: _Element): ElementParamOffer {
    let elementIdentifier!: INTEGER;
    let size: OPTIONAL<IntegerOffer>;
    let category: OPTIONAL<ElementParamOffer_category>;
    let repertoire: OPTIONAL<RepertoireAssignment[]>;
    const callbacks: $.DecodingMap = {
        "elementIdentifier": (_el: _Element): void => { elementIdentifier = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "size": (_el: _Element): void => { size = $._decode_implicit<IntegerOffer>(() => _decode_IntegerOffer)(_el); },
        "category": (_el: _Element): void => { category = $._decode_implicit<ElementParamOffer_category>(() => _decode_ElementParamOffer_category)(_el); },
        "repertoire": (_el: _Element): void => { repertoire = $._decode_implicit<RepertoireAssignment[]>(() => $._decodeSequenceOf<RepertoireAssignment>(() => _decode_RepertoireAssignment))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ElementParamOffer,
        _extension_additions_list_spec_for_ElementParamOffer,
        _root_component_type_list_2_spec_for_ElementParamOffer,
        undefined,
    );
    return new ElementParamOffer(
        elementIdentifier,
        size,
        category,
        repertoire
    );
}; }
    return _cached_decoder_for_ElementParamOffer(el);
}

let _cached_encoder_for_ElementParamOffer: $.ASN1Encoder<ElementParamOffer> | null = null;

/**
 * @summary Encodes a(n) ElementParamOffer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ElementParamOffer, encoded as an ASN.1 Element.
 */
export
function _encode_ElementParamOffer (value: ElementParamOffer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ElementParamOffer) { _cached_encoder_for_ElementParamOffer = function (value: ElementParamOffer): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.elementIdentifier, $.BER),
            /* IF_ABSENT  */ ((value.size === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_IntegerOffer, $.BER)(value.size, $.BER)),
            /* IF_ABSENT  */ ((value.category === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_ElementParamOffer_category, $.BER)(value.category, $.BER)),
            /* IF_ABSENT  */ ((value.repertoire === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<RepertoireAssignment>(() => _encode_RepertoireAssignment, $.BER), $.BER)(value.repertoire, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ElementParamOffer(value, elGetter);
}


/* eslint-enable */
