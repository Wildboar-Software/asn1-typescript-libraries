/* eslint-disable */
import {
    OPTIONAL,
    INTEGER,
    NULL,
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



/**
 * @summary ElementParamIdent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ElementParamIdent ::= SEQUENCE {
 *     elementIdentifier [0] IMPLICIT INTEGER,
 *     size              [3] IMPLICIT NULL OPTIONAL,
 *     category          [4] IMPLICIT NULL OPTIONAL,
 *     repertoire        [5] IMPLICIT NULL OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ElementParamIdent {
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
        readonly size: OPTIONAL<NULL>,
        /**
         * @summary `category`.
         * @public
         * @readonly
         */
        readonly category: OPTIONAL<NULL>,
        /**
         * @summary `repertoire`.
         * @public
         * @readonly
         */
        readonly repertoire: OPTIONAL<NULL>
    ) {}

    /**
     * @summary Restructures an object into a ElementParamIdent
     * @description
     * 
     * This takes an `object` and converts it to a `ElementParamIdent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ElementParamIdent`.
     * @returns {ElementParamIdent}
     */
    public static _from_object (_o: { [_K in keyof (ElementParamIdent)]: (ElementParamIdent)[_K] }): ElementParamIdent {
        return new ElementParamIdent(_o.elementIdentifier, _o.size, _o.category, _o.repertoire);
    }


}

/**
 * @summary The Leading Root Component Types of ElementParamIdent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ElementParamIdent: $.ComponentSpec[] = [
    new $.ComponentSpec("elementIdentifier", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("size", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("category", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("repertoire", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of ElementParamIdent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ElementParamIdent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ElementParamIdent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ElementParamIdent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ElementParamIdent: $.ASN1Decoder<ElementParamIdent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ElementParamIdent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ElementParamIdent (el: _Element): ElementParamIdent {
    if (!_cached_decoder_for_ElementParamIdent) { _cached_decoder_for_ElementParamIdent = function (el: _Element): ElementParamIdent {
    let elementIdentifier!: INTEGER;
    let size: OPTIONAL<NULL>;
    let category: OPTIONAL<NULL>;
    let repertoire: OPTIONAL<NULL>;
    const callbacks: $.DecodingMap = {
        "elementIdentifier": (_el: _Element): void => { elementIdentifier = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "size": (_el: _Element): void => { size = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "category": (_el: _Element): void => { category = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "repertoire": (_el: _Element): void => { repertoire = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ElementParamIdent,
        _extension_additions_list_spec_for_ElementParamIdent,
        _root_component_type_list_2_spec_for_ElementParamIdent,
        undefined,
    );
    return new ElementParamIdent(
        elementIdentifier,
        size,
        category,
        repertoire
    );
}; }
    return _cached_decoder_for_ElementParamIdent(el);
}

let _cached_encoder_for_ElementParamIdent: $.ASN1Encoder<ElementParamIdent> | null = null;

/**
 * @summary Encodes a(n) ElementParamIdent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ElementParamIdent, encoded as an ASN.1 Element.
 */
export
function _encode_ElementParamIdent (value: ElementParamIdent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ElementParamIdent) { _cached_encoder_for_ElementParamIdent = function (value: ElementParamIdent): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.elementIdentifier, $.BER),
            /* IF_ABSENT  */ ((value.size === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER)(value.size, $.BER)),
            /* IF_ABSENT  */ ((value.category === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeNull, $.BER)(value.category, $.BER)),
            /* IF_ABSENT  */ ((value.repertoire === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeNull, $.BER)(value.repertoire, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ElementParamIdent(value, elGetter);
}


/* eslint-enable */
