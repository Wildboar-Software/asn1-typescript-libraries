/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BIR_children_child_childBirPatronFormat
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BIR-children-child-childBirPatronFormat ::= SEQUENCE {
 *     childBirPatronFormatOwner   INTEGER (0..65535),
 *     childBirPatronFormatType    INTEGER (0..65535)
 * }
 * ```
 * 
 * @class
 */
export
class BIR_children_child_childBirPatronFormat {
    /**
     * @summary `childBirPatronFormatOwner`.
     * @public
     * @readonly
     */
    readonly childBirPatronFormatOwner: INTEGER;
    /**
     * @summary `childBirPatronFormatType`.
     * @public
     * @readonly
     */
    readonly childBirPatronFormatType: INTEGER;

    constructor (
        childBirPatronFormatOwner: INTEGER,
        childBirPatronFormatType: INTEGER
    ) {
        this.childBirPatronFormatOwner = childBirPatronFormatOwner;
        this.childBirPatronFormatType = childBirPatronFormatType;
    }

    /**
     * @summary Restructures an object into a BIR_children_child_childBirPatronFormat
     * @description
     * 
     * This takes an `object` and converts it to a `BIR_children_child_childBirPatronFormat`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BIR_children_child_childBirPatronFormat`.
     * @returns {BIR_children_child_childBirPatronFormat}
     */
    public static _from_object (_o: { [_K in keyof (BIR_children_child_childBirPatronFormat)]: (BIR_children_child_childBirPatronFormat)[_K] }): BIR_children_child_childBirPatronFormat {
        return new BIR_children_child_childBirPatronFormat(_o.childBirPatronFormatOwner, _o.childBirPatronFormatType);
    }


}

/**
 * @summary The Leading Root Component Types of BIR_children_child_childBirPatronFormat
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BIR_children_child_childBirPatronFormat: $.ComponentSpec[] = [
    new $.ComponentSpec("childBirPatronFormatOwner", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("childBirPatronFormatType", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of BIR_children_child_childBirPatronFormat
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BIR_children_child_childBirPatronFormat: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BIR_children_child_childBirPatronFormat
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BIR_children_child_childBirPatronFormat: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BIR_children_child_childBirPatronFormat: $.ASN1Decoder<BIR_children_child_childBirPatronFormat> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BIR_children_child_childBirPatronFormat
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BIR_children_child_childBirPatronFormat (el: _Element): BIR_children_child_childBirPatronFormat {
    if (!_cached_decoder_for_BIR_children_child_childBirPatronFormat) { _cached_decoder_for_BIR_children_child_childBirPatronFormat = function (el: _Element): BIR_children_child_childBirPatronFormat {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("BIR-children-child-childBirPatronFormat contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "childBirPatronFormatOwner";
    sequence[1].name = "childBirPatronFormatType";
    const childBirPatronFormatOwner: INTEGER = $._decodeInteger(sequence[0]);
    const childBirPatronFormatType: INTEGER = $._decodeInteger(sequence[1]);
    return new BIR_children_child_childBirPatronFormat(
        childBirPatronFormatOwner,
        childBirPatronFormatType,

    );
}; }
    return _cached_decoder_for_BIR_children_child_childBirPatronFormat(el);
}

let _cached_encoder_for_BIR_children_child_childBirPatronFormat: $.ASN1Encoder<BIR_children_child_childBirPatronFormat> | null = null;

/**
 * @summary Encodes a(n) BIR_children_child_childBirPatronFormat into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BIR_children_child_childBirPatronFormat, encoded as an ASN.1 Element.
 */
export
function _encode_BIR_children_child_childBirPatronFormat (value: BIR_children_child_childBirPatronFormat, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BIR_children_child_childBirPatronFormat) { _cached_encoder_for_BIR_children_child_childBirPatronFormat = function (value: BIR_children_child_childBirPatronFormat, elGetter: $.ASN1Encoder<BIR_children_child_childBirPatronFormat>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.childBirPatronFormatOwner, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.childBirPatronFormatType, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_BIR_children_child_childBirPatronFormat(value, elGetter);
}


/* eslint-enable */
