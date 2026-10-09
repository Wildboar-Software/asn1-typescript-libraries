/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AttributeSetId, _decode_AttributeSetId, _encode_AttributeSetId } from "../Z39-50-APDU-2001/AttributeSetId.ta.mjs";
import { RPNStructure, _decode_RPNStructure, _encode_RPNStructure } from "../Z39-50-APDU-2001/RPNStructure.ta.mjs";


/**
 * @summary RPNQuery
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RPNQuery ::= SEQUENCE {
 *     attributeSet    AttributeSetId,
 *     rpn             RPNStructure
 * }
 * ```
 * 
 * @class
 */
export
class RPNQuery {
    /**
     * @summary `attributeSet`.
     * @public
     * @readonly
     */
    readonly attributeSet: AttributeSetId;
    /**
     * @summary `rpn`.
     * @public
     * @readonly
     */
    readonly rpn: RPNStructure;

    constructor (
        attributeSet: AttributeSetId,
        rpn: RPNStructure
    ) {
        this.attributeSet = attributeSet;
        this.rpn = rpn;
    }

    /**
     * @summary Restructures an object into a RPNQuery
     * @description
     * 
     * This takes an `object` and converts it to a `RPNQuery`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RPNQuery`.
     * @returns {RPNQuery}
     */
    public static _from_object (_o: { [_K in keyof (RPNQuery)]: (RPNQuery)[_K] }): RPNQuery {
        return new RPNQuery(_o.attributeSet, _o.rpn);
    }


}

/**
 * @summary The Leading Root Component Types of RPNQuery
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RPNQuery: $.ComponentSpec[] = [
    new $.ComponentSpec("attributeSet", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("rpn", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of RPNQuery
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RPNQuery: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RPNQuery
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RPNQuery: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RPNQuery: $.ASN1Decoder<RPNQuery> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RPNQuery
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RPNQuery (el: _Element): RPNQuery {
    if (!_cached_decoder_for_RPNQuery) { _cached_decoder_for_RPNQuery = function (el: _Element): RPNQuery {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RPNQuery contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "attributeSet";
    sequence[1].name = "rpn";
    const attributeSet: AttributeSetId = _decode_AttributeSetId(sequence[0]);
    const rpn: RPNStructure = _decode_RPNStructure(sequence[1]);
    return new RPNQuery(
        attributeSet,
        rpn,

    );
}; }
    return _cached_decoder_for_RPNQuery(el);
}

let _cached_encoder_for_RPNQuery: $.ASN1Encoder<RPNQuery> | null = null;

/**
 * @summary Encodes a(n) RPNQuery into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RPNQuery, encoded as an ASN.1 Element.
 */
export
function _encode_RPNQuery (value: RPNQuery, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RPNQuery) { _cached_encoder_for_RPNQuery = function (value: RPNQuery, elGetter: $.ASN1Encoder<RPNQuery>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_AttributeSetId(value.attributeSet, $.BER),
        /* REQUIRED   */ _encode_RPNStructure(value.rpn, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RPNQuery(value, elGetter);
}


/* eslint-enable */
