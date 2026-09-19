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
import { _decode_Block, _encode_Block, Block } from "../G/Block.ta.mjs";
// export { Block, _decode_Block, _encode_Block } from "../G/Block.ta.mjs";
import { _decode_MeasurePair, _encode_MeasurePair, MeasurePair } from "../G/MeasurePair.ta.mjs";
// export { MeasurePair, _decode_MeasurePair, _encode_MeasurePair } from "../G/MeasurePair.ta.mjs";


/**
 * @summary DOupdate_createBlock
 * @description
 *
 * CREATE-BLOCK at (z,b) with origin (x,y) and dimension (Dx,Dy).
 * Replaces any existing block at that (b,z). Requires Blocks FU.
 * ISO/IEC 9040:1997 §19.4.1.5.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DOupdate-createBlock ::= SEQUENCE {
 *     blockPosition [0] IMPLICIT G.Block,
 *     origin        [1] IMPLICIT G.MeasurePair,
 *     dimension     [2] IMPLICIT G.MeasurePair
 * }
 * ```
 * 
 * @class
 */
export
class DOupdate_createBlock {
    constructor (
        /**
         * @summary `blockPosition`.
         * @description
         * Block coordinates (z,b). ISO/IEC 9040:1997 §19.4.1.5.1.
         * @public
         * @readonly
         */
        readonly blockPosition: Block,
        /**
         * @summary `origin`.
         * @description
         * Block origin (x,y) in the Y-array. ISO/IEC 9040:1997 §19.4.1.5.1.
         * @public
         * @readonly
         */
        readonly origin: MeasurePair,
        /**
         * @summary `dimension`.
         * @description
         * Block size (Dx,Dy). ISO/IEC 9040:1997 §19.4.1.5.1.
         * @public
         * @readonly
         */
        readonly dimension: MeasurePair
    ) {}

    /**
     * @summary Restructures an object into a DOupdate_createBlock
     * @description
     * 
     * This takes an `object` and converts it to a `DOupdate_createBlock`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DOupdate_createBlock`.
     * @returns {DOupdate_createBlock}
     */
    public static _from_object (_o: { [_K in keyof (DOupdate_createBlock)]: (DOupdate_createBlock)[_K] }): DOupdate_createBlock {
        return new DOupdate_createBlock(_o.blockPosition, _o.origin, _o.dimension);
    }


}

/**
 * @summary The Leading Root Component Types of DOupdate_createBlock
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DOupdate_createBlock: $.ComponentSpec[] = [
    new $.ComponentSpec("blockPosition", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("origin", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("dimension", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of DOupdate_createBlock
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DOupdate_createBlock: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DOupdate_createBlock
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DOupdate_createBlock: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DOupdate_createBlock: $.ASN1Decoder<DOupdate_createBlock> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DOupdate_createBlock
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DOupdate_createBlock (el: _Element): DOupdate_createBlock {
    if (!_cached_decoder_for_DOupdate_createBlock) { _cached_decoder_for_DOupdate_createBlock = function (el: _Element): DOupdate_createBlock {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("DOupdate-createBlock contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "blockPosition";
    sequence[1].name = "origin";
    sequence[2].name = "dimension";
    const blockPosition: Block = $._decode_implicit<Block>(() => _decode_Block)(sequence[0]);
    const origin: MeasurePair = $._decode_implicit<MeasurePair>(() => _decode_MeasurePair)(sequence[1]);
    const dimension: MeasurePair = $._decode_implicit<MeasurePair>(() => _decode_MeasurePair)(sequence[2]);
    return new DOupdate_createBlock(
        blockPosition,
        origin,
        dimension,

    );
}; }
    return _cached_decoder_for_DOupdate_createBlock(el);
}

let _cached_encoder_for_DOupdate_createBlock: $.ASN1Encoder<DOupdate_createBlock> | null = null;

/**
 * @summary Encodes a(n) DOupdate_createBlock into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DOupdate_createBlock, encoded as an ASN.1 Element.
 */
export
function _encode_DOupdate_createBlock (value: DOupdate_createBlock, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DOupdate_createBlock) { _cached_encoder_for_DOupdate_createBlock = function (value: DOupdate_createBlock): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_Block, $.BER)(value.blockPosition, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MeasurePair, $.BER)(value.origin, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_MeasurePair, $.BER)(value.dimension, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DOupdate_createBlock(value, elGetter);
}


/* eslint-enable */
