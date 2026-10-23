/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LegID, _decode_LegID, _encode_LegID } from "../IN-CS2-datatypes/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../IN-CS2-datatypes/LegID.ta.mjs";


/**
 * @summary MoveCallSegmentsArg_legs_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MoveCallSegmentsArg-legs-Item ::=
 * SEQUENCE {
 *   sourceLeg [0] LegID,
 *   newLeg [1] LegID
 * }
 * ```
 * 
 * @class
 */
export
class MoveCallSegmentsArg_legs_Item {
    /**
     * @summary `sourceLeg`.
     * @public
     * @readonly
     */
    readonly sourceLeg: LegID;
    /**
     * @summary `newLeg`.
     * @public
     * @readonly
     */
    readonly newLeg: LegID;

    constructor (
        sourceLeg: LegID,
        newLeg: LegID
    ) {
        this.sourceLeg = sourceLeg;
        this.newLeg = newLeg;
    }

    /**
     * @summary Restructures an object into a MoveCallSegmentsArg_legs_Item
     * @description
     * 
     * This takes an `object` and converts it to a `MoveCallSegmentsArg_legs_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MoveCallSegmentsArg_legs_Item`.
     * @returns {MoveCallSegmentsArg_legs_Item}
     */
    public static _from_object (_o: { [_K in keyof (MoveCallSegmentsArg_legs_Item)]: (MoveCallSegmentsArg_legs_Item)[_K] }): MoveCallSegmentsArg_legs_Item {
        return new MoveCallSegmentsArg_legs_Item(_o.sourceLeg, _o.newLeg);
    }


}

/**
 * @summary The Leading Root Component Types of MoveCallSegmentsArg_legs_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MoveCallSegmentsArg_legs_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("sourceLeg", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("newLeg", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of MoveCallSegmentsArg_legs_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MoveCallSegmentsArg_legs_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MoveCallSegmentsArg_legs_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MoveCallSegmentsArg_legs_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MoveCallSegmentsArg_legs_Item: $.ASN1Decoder<MoveCallSegmentsArg_legs_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MoveCallSegmentsArg_legs_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MoveCallSegmentsArg_legs_Item (el: _Element): MoveCallSegmentsArg_legs_Item {
    if (!_cached_decoder_for_MoveCallSegmentsArg_legs_Item) { _cached_decoder_for_MoveCallSegmentsArg_legs_Item = function (el: _Element): MoveCallSegmentsArg_legs_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("MoveCallSegmentsArg-legs-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "sourceLeg";
    sequence[1].name = "newLeg";
    const sourceLeg: LegID = $._decode_explicit<LegID>(() => _decode_LegID)(sequence[0]);
    const newLeg: LegID = $._decode_explicit<LegID>(() => _decode_LegID)(sequence[1]);
    return new MoveCallSegmentsArg_legs_Item(
        sourceLeg,
        newLeg,

    );
}; }
    return _cached_decoder_for_MoveCallSegmentsArg_legs_Item(el);
}

let _cached_encoder_for_MoveCallSegmentsArg_legs_Item: $.ASN1Encoder<MoveCallSegmentsArg_legs_Item> | null = null;

/**
 * @summary Encodes a(n) MoveCallSegmentsArg_legs_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MoveCallSegmentsArg_legs_Item, encoded as an ASN.1 Element.
 */
export
function _encode_MoveCallSegmentsArg_legs_Item (value: MoveCallSegmentsArg_legs_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MoveCallSegmentsArg_legs_Item) { _cached_encoder_for_MoveCallSegmentsArg_legs_Item = function (value: MoveCallSegmentsArg_legs_Item, elGetter: $.ASN1Encoder<MoveCallSegmentsArg_legs_Item>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_LegID, $.BER)(value.sourceLeg, $.BER),
        /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_LegID, $.BER)(value.newLeg, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_MoveCallSegmentsArg_legs_Item(value, elGetter);
}


/* eslint-enable */
