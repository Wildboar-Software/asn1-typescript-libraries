/* eslint-disable */
import {
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
import { FEI, _decode_FEI, _encode_FEI } from "../G/FEI.ta.mjs";


/**
 * @summary FEICOupdate_Item
 * @description
 *
 * One FEIR: index plus a set of Field Entry Instructions. ISO/IEC
 * 9040:1997 §3.3.62; ISO/IEC 9041-1:1997 §12.2.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FEICOupdate-Item ::= SEQUENCE {
 *     index   [0] IMPLICIT INTEGER,
 *     content [1] IMPLICIT SET OF FEI
 * }
 * ```
 * 
 * @class
 */
export
class FEICOupdate_Item {
    constructor (
        /**
         * @summary `index`.
         * @description
         * FEIR index within the FEICO. ISO/IEC 9041-1:1997 §12.2.3.
         * @public
         * @readonly
         */
        readonly index: INTEGER,
        /**
         * @summary `content`.
         * @description
         * Set of Field Entry Instructions; syntax from the FEICO register
         * entry. ISO/IEC 9040:1997 §3.3.64; ISO/IEC 9041-1:1997 §12.2.3.
         * @public
         * @readonly
         */
        readonly content: FEI[]
    ) {}

    /**
     * @summary Restructures an object into a FEICOupdate_Item
     * @description
     * 
     * This takes an `object` and converts it to a `FEICOupdate_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FEICOupdate_Item`.
     * @returns {FEICOupdate_Item}
     */
    public static _from_object (_o: { [_K in keyof (FEICOupdate_Item)]: (FEICOupdate_Item)[_K] }): FEICOupdate_Item {
        return new FEICOupdate_Item(_o.index, _o.content);
    }


}

/**
 * @summary The Leading Root Component Types of FEICOupdate_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FEICOupdate_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("index", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("content", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of FEICOupdate_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FEICOupdate_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FEICOupdate_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FEICOupdate_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FEICOupdate_Item: $.ASN1Decoder<FEICOupdate_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FEICOupdate_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FEICOupdate_Item (el: _Element): FEICOupdate_Item {
    if (!_cached_decoder_for_FEICOupdate_Item) { _cached_decoder_for_FEICOupdate_Item = function (el: _Element): FEICOupdate_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("FEICOupdate-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "index";
    sequence[1].name = "content";
    const index: INTEGER = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[0]);
    const content: FEI[] = $._decode_implicit<FEI[]>(() => $._decodeSetOf<FEI>(() => _decode_FEI))(sequence[1]);
    return new FEICOupdate_Item(
        index,
        content,

    );
}; }
    return _cached_decoder_for_FEICOupdate_Item(el);
}

let _cached_encoder_for_FEICOupdate_Item: $.ASN1Encoder<FEICOupdate_Item> | null = null;

/**
 * @summary Encodes a(n) FEICOupdate_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FEICOupdate_Item, encoded as an ASN.1 Element.
 */
export
function _encode_FEICOupdate_Item (value: FEICOupdate_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FEICOupdate_Item) { _cached_encoder_for_FEICOupdate_Item = function (value: FEICOupdate_Item): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.index, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSetOf<FEI>(() => _encode_FEI, $.BER), $.BER)(value.content, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_FEICOupdate_Item(value, elGetter);
}


/* eslint-enable */
