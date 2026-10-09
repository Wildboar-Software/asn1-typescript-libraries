/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RPNStructure, _decode_RPNStructure, _encode_RPNStructure } from "../ElementSpecification-eSpec-q/RPNStructure.ta.mjs";
// export { RPNStructure, _decode_RPNStructure, _encode_RPNStructure } from "../ElementSpecification-eSpec-q/RPNStructure.ta.mjs";


/**
 * @summary ValueRestrictor
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ValueRestrictor ::= SEQUENCE {
 *     attributeSetId          OBJECT IDENTIFIER,
 *     nodeSelectionCriteria   RPNStructure}
 * ```
 * 
 * @class
 */
export
class ValueRestrictor {
    /**
     * @summary `attributeSetId`.
     * @public
     * @readonly
     */
    readonly attributeSetId: OBJECT_IDENTIFIER;
    /**
     * @summary `nodeSelectionCriteria`.
     * @public
     * @readonly
     */
    readonly nodeSelectionCriteria: RPNStructure;

    constructor (
        attributeSetId: OBJECT_IDENTIFIER,
        nodeSelectionCriteria: RPNStructure
    ) {
        this.attributeSetId = attributeSetId;
        this.nodeSelectionCriteria = nodeSelectionCriteria;
    }

    /**
     * @summary Restructures an object into a ValueRestrictor
     * @description
     * 
     * This takes an `object` and converts it to a `ValueRestrictor`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ValueRestrictor`.
     * @returns {ValueRestrictor}
     */
    public static _from_object (_o: { [_K in keyof (ValueRestrictor)]: (ValueRestrictor)[_K] }): ValueRestrictor {
        return new ValueRestrictor(_o.attributeSetId, _o.nodeSelectionCriteria);
    }


}

/**
 * @summary The Leading Root Component Types of ValueRestrictor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ValueRestrictor: $.ComponentSpec[] = [
    new $.ComponentSpec("attributeSetId", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("nodeSelectionCriteria", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of ValueRestrictor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ValueRestrictor: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ValueRestrictor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ValueRestrictor: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ValueRestrictor: $.ASN1Decoder<ValueRestrictor> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ValueRestrictor
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ValueRestrictor (el: _Element): ValueRestrictor {
    if (!_cached_decoder_for_ValueRestrictor) { _cached_decoder_for_ValueRestrictor = function (el: _Element): ValueRestrictor {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ValueRestrictor contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "attributeSetId";
    sequence[1].name = "nodeSelectionCriteria";
    let attributeSetId!: OBJECT_IDENTIFIER;
    let nodeSelectionCriteria!: RPNStructure;
    attributeSetId = $._decodeObjectIdentifier(sequence[0]);
    nodeSelectionCriteria = _decode_RPNStructure(sequence[1]);
    return new ValueRestrictor(
        attributeSetId,
        nodeSelectionCriteria,

    );
}; }
    return _cached_decoder_for_ValueRestrictor(el);
}

let _cached_encoder_for_ValueRestrictor: $.ASN1Encoder<ValueRestrictor> | null = null;

/**
 * @summary Encodes a(n) ValueRestrictor into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ValueRestrictor, encoded as an ASN.1 Element.
 */
export
function _encode_ValueRestrictor (value: ValueRestrictor, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ValueRestrictor) { _cached_encoder_for_ValueRestrictor = function (value: ValueRestrictor, elGetter: $.ASN1Encoder<ValueRestrictor>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encodeObjectIdentifier(value.attributeSetId, $.BER),
        /* REQUIRED   */ _encode_RPNStructure(value.nodeSelectionCriteria, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_ValueRestrictor(value, elGetter);
}


/* eslint-enable */
