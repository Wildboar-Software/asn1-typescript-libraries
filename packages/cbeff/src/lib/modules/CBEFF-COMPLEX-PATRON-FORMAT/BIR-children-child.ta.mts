/* eslint-disable */
import {
    type OCTET_STRING,
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { assertOctetSize } from "../../constraints.mjs";
import { BIR_children_child_childBirPatronFormat, _decode_BIR_children_child_childBirPatronFormat, _encode_BIR_children_child_childBirPatronFormat } from "../CBEFF-COMPLEX-PATRON-FORMAT/BIR-children-child-childBirPatronFormat.ta.mjs";


/**
 * @summary BIR_children_child
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BIR-children-child ::= SEQUENCE {
 *     childBirPatronFormat    SEQUENCE {
 *         childBirPatronFormatOwner   INTEGER (0..65535),
 *         childBirPatronFormatType    INTEGER (0..65535)
 *     },
 *     childBir                OCTET STRING (SIZE(0..4294967295))
 * }
 * ```
 * 
 * @class
 */
export
class BIR_children_child {
    /**
     * @summary `childBirPatronFormat`.
     * @public
     * @readonly
     */
    readonly childBirPatronFormat: BIR_children_child_childBirPatronFormat;
    /**
     * @summary `childBir`.
     * @public
     * @readonly
     */
    readonly childBir: OCTET_STRING;

    constructor (
        childBirPatronFormat: BIR_children_child_childBirPatronFormat,
        childBir: OCTET_STRING
    ) {
        assertOctetSize(childBir, 0, 4294967295, "BIR.children.childBir");
        this.childBirPatronFormat = childBirPatronFormat;
        this.childBir = childBir;
    }

    /**
     * @summary Restructures an object into a BIR_children_child
     * @description
     * 
     * This takes an `object` and converts it to a `BIR_children_child`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BIR_children_child`.
     * @returns {BIR_children_child}
     */
    public static _from_object (_o: { [_K in keyof (BIR_children_child)]: (BIR_children_child)[_K] }): BIR_children_child {
        return new BIR_children_child(_o.childBirPatronFormat, _o.childBir);
    }


}

/**
 * @summary The Leading Root Component Types of BIR_children_child
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BIR_children_child: $.ComponentSpec[] = [
    new $.ComponentSpec("childBirPatronFormat", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("childBir", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of BIR_children_child
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BIR_children_child: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BIR_children_child
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BIR_children_child: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BIR_children_child: $.ASN1Decoder<BIR_children_child> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BIR_children_child
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BIR_children_child (el: _Element): BIR_children_child {
    if (!_cached_decoder_for_BIR_children_child) { _cached_decoder_for_BIR_children_child = function (el: _Element): BIR_children_child {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("BIR-children-child contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "childBirPatronFormat";
    sequence[1].name = "childBir";
    const childBirPatronFormat: BIR_children_child_childBirPatronFormat = _decode_BIR_children_child_childBirPatronFormat(sequence[0]);
    const childBir: OCTET_STRING = $._decodeOctetString(sequence[1]);
    return new BIR_children_child(
        childBirPatronFormat,
        childBir,

    );
}; }
    return _cached_decoder_for_BIR_children_child(el);
}

let _cached_encoder_for_BIR_children_child: $.ASN1Encoder<BIR_children_child> | null = null;

/**
 * @summary Encodes a(n) BIR_children_child into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BIR_children_child, encoded as an ASN.1 Element.
 */
export
function _encode_BIR_children_child (value: BIR_children_child, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BIR_children_child) { _cached_encoder_for_BIR_children_child = function (value: BIR_children_child, elGetter: $.ASN1Encoder<BIR_children_child>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_BIR_children_child_childBirPatronFormat, $.BER)(value.childBirPatronFormat, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.childBir, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_BIR_children_child(value, elGetter);
}


/* eslint-enable */
