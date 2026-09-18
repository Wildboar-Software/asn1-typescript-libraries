/* eslint-disable */
import {
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
import { MeasurePair, _decode_MeasurePair, _encode_MeasurePair } from "../G/MeasurePair.ta.mjs";
// export { MeasurePair, _decode_MeasurePair, _encode_MeasurePair } from "../G/MeasurePair.ta.mjs";


/**
 * @summary FDCOupdate_Item_extent_Item
 * @description
 *
 * One field-element of an FDR extent: origin and size. ISO/IEC
 * 9040:1997 §13.1.3; ISO/IEC 9041-1:1997 §12.2.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FDCOupdate-Item-extent-Item ::= SEQUENCE {
 *     position  [0] IMPLICIT MeasurePair,
 *     dimension [1] IMPLICIT MeasurePair
 * }
 * ```
 * 
 * @class
 */
export
class FDCOupdate_Item_extent_Item {
    constructor (
        /**
         * @summary `position`.
         * @description
         * Origin of the field-element. ISO/IEC 9040:1997 §13.1.3.
         * @public
         * @readonly
         */
        readonly position: MeasurePair,
        /**
         * @summary `dimension`.
         * @description
         * Size of the field-element. ISO/IEC 9040:1997 §13.1.3.
         * @public
         * @readonly
         */
        readonly dimension: MeasurePair
    ) {}

    /**
     * @summary Restructures an object into a FDCOupdate_Item_extent_Item
     * @description
     * 
     * This takes an `object` and converts it to a `FDCOupdate_Item_extent_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FDCOupdate_Item_extent_Item`.
     * @returns {FDCOupdate_Item_extent_Item}
     */
    public static _from_object (_o: { [_K in keyof (FDCOupdate_Item_extent_Item)]: (FDCOupdate_Item_extent_Item)[_K] }): FDCOupdate_Item_extent_Item {
        return new FDCOupdate_Item_extent_Item(_o.position, _o.dimension);
    }


}

/**
 * @summary The Leading Root Component Types of FDCOupdate_Item_extent_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FDCOupdate_Item_extent_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("position", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("dimension", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of FDCOupdate_Item_extent_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FDCOupdate_Item_extent_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FDCOupdate_Item_extent_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FDCOupdate_Item_extent_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FDCOupdate_Item_extent_Item: $.ASN1Decoder<FDCOupdate_Item_extent_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FDCOupdate_Item_extent_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FDCOupdate_Item_extent_Item (el: _Element): FDCOupdate_Item_extent_Item {
    if (!_cached_decoder_for_FDCOupdate_Item_extent_Item) { _cached_decoder_for_FDCOupdate_Item_extent_Item = function (el: _Element): FDCOupdate_Item_extent_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("FDCOupdate-Item-extent-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "position";
    sequence[1].name = "dimension";
    const position: MeasurePair = $._decode_implicit<MeasurePair>(() => _decode_MeasurePair)(sequence[0]);
    const dimension: MeasurePair = $._decode_implicit<MeasurePair>(() => _decode_MeasurePair)(sequence[1]);
    return new FDCOupdate_Item_extent_Item(
        position,
        dimension,

    );
}; }
    return _cached_decoder_for_FDCOupdate_Item_extent_Item(el);
}

let _cached_encoder_for_FDCOupdate_Item_extent_Item: $.ASN1Encoder<FDCOupdate_Item_extent_Item> | null = null;

/**
 * @summary Encodes a(n) FDCOupdate_Item_extent_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FDCOupdate_Item_extent_Item, encoded as an ASN.1 Element.
 */
export
function _encode_FDCOupdate_Item_extent_Item (value: FDCOupdate_Item_extent_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FDCOupdate_Item_extent_Item) { _cached_encoder_for_FDCOupdate_Item_extent_Item = function (value: FDCOupdate_Item_extent_Item): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_MeasurePair, $.BER)(value.position, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MeasurePair, $.BER)(value.dimension, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_FDCOupdate_Item_extent_Item(value, elGetter);
}


/* eslint-enable */
