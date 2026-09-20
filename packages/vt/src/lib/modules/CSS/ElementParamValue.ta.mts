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
import { ElementParamValue_category, _decode_ElementParamValue_category, _encode_ElementParamValue_category } from "../CSS/ElementParamValue-category.ta.mjs";
import { _decode_RepertoireAssignment, _encode_RepertoireAssignment, RepertoireAssignment } from "../CDS/RepertoireAssignment.ta.mjs";


/**
 * @summary ElementParamValue
 * @description
 *
 * Selected data-element VTE-parameters for one element of a
 * parametric structured CO. Must be consistent with the
 * matching offer. ISO/IEC 9040:1997 §20.2.1;
 * ISO/IEC 9041-1:1997 §12.4.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ElementParamValue ::= SEQUENCE {
 *     elementIdentifier   [0] IMPLICIT INTEGER,
 *     size                [3] IMPLICIT INTEGER OPTIONAL,
 *     category            [4] IMPLICIT INTEGER {
 *         character   (0),
 *         boolean     (1),
 *         symbolic    (2),
 *         integer     (3),
 *         transparent (4)
 *     } OPTIONAL,
 *     repertoire          [5] IMPLICIT CDS.RepertoireAssignment OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ElementParamValue {
    constructor (
        /**
         * @summary `elementIdentifier`.
         * @description
         * `CO-element-id`: 1-based in structure order, 1..N.
         * ISO/IEC 9040:1997 §20.2.1.
         * @public
         * @readonly
         */
        readonly elementIdentifier: INTEGER,
        /**
         * @summary `size`.
         * @description
         * Selected `CO-size` for this element. Meaning depends
         * on category (see `CO-size` defaults).
         * ISO/IEC 9040:1997 §20.2.2.
         * @public
         * @readonly
         */
        readonly size: OPTIONAL<INTEGER>,
        /**
         * @summary `category`.
         * @description
         * Selected `CO-category`. Default `"boolean"`.
         * ISO/IEC 9040:1997 table 9, §20.2.3–§20.2.6.
         * @public
         * @readonly
         */
        readonly category: OPTIONAL<ElementParamValue_category>,
        /**
         * @summary `repertoire`.
         * @description
         * Selected `CO-repertoire-assignment` (character
         * category). ISO/IEC 9040:1997 §20.2.5.
         * @public
         * @readonly
         */
        readonly repertoire: OPTIONAL<RepertoireAssignment>
    ) {}

    /**
     * @summary Restructures an object into a ElementParamValue
     * @description
     * 
     * This takes an `object` and converts it to a `ElementParamValue`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ElementParamValue`.
     * @returns {ElementParamValue}
     */
    public static _from_object (_o: { [_K in keyof (ElementParamValue)]: (ElementParamValue)[_K] }): ElementParamValue {
        return new ElementParamValue(_o.elementIdentifier, _o.size, _o.category, _o.repertoire);
    }


}

/**
 * @summary The Leading Root Component Types of ElementParamValue
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ElementParamValue: $.ComponentSpec[] = [
    new $.ComponentSpec("elementIdentifier", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("size", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("category", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("repertoire", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of ElementParamValue
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ElementParamValue: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ElementParamValue
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ElementParamValue: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ElementParamValue: $.ASN1Decoder<ElementParamValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ElementParamValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ElementParamValue (el: _Element): ElementParamValue {
    if (!_cached_decoder_for_ElementParamValue) { _cached_decoder_for_ElementParamValue = function (el: _Element): ElementParamValue {
    let elementIdentifier!: INTEGER;
    let size: OPTIONAL<INTEGER>;
    let category: OPTIONAL<ElementParamValue_category>;
    let repertoire: OPTIONAL<RepertoireAssignment>;
    const callbacks: $.DecodingMap = {
        "elementIdentifier": (_el: _Element): void => { elementIdentifier = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "size": (_el: _Element): void => { size = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "category": (_el: _Element): void => { category = $._decode_implicit<ElementParamValue_category>(() => _decode_ElementParamValue_category)(_el); },
        "repertoire": (_el: _Element): void => { repertoire = $._decode_implicit<RepertoireAssignment>(() => _decode_RepertoireAssignment)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ElementParamValue,
        _extension_additions_list_spec_for_ElementParamValue,
        _root_component_type_list_2_spec_for_ElementParamValue,
        undefined,
    );
    return new ElementParamValue(
        elementIdentifier,
        size,
        category,
        repertoire
    );
}; }
    return _cached_decoder_for_ElementParamValue(el);
}

let _cached_encoder_for_ElementParamValue: $.ASN1Encoder<ElementParamValue> | null = null;

/**
 * @summary Encodes a(n) ElementParamValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ElementParamValue, encoded as an ASN.1 Element.
 */
export
function _encode_ElementParamValue (value: ElementParamValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ElementParamValue) { _cached_encoder_for_ElementParamValue = function (value: ElementParamValue): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.elementIdentifier, $.BER),
            /* IF_ABSENT  */ ((value.size === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.size, $.BER)),
            /* IF_ABSENT  */ ((value.category === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_ElementParamValue_category, $.BER)(value.category, $.BER)),
            /* IF_ABSENT  */ ((value.repertoire === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_RepertoireAssignment, $.BER)(value.repertoire, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ElementParamValue(value, elGetter);
}


/* eslint-enable */
