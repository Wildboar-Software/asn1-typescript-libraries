/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ResultSetId, _decode_ResultSetId, _encode_ResultSetId } from "../Z39-50-APDU-2001/ResultSetId.ta.mjs";
// export { ResultSetId, _decode_ResultSetId, _encode_ResultSetId } from "../Z39-50-APDU-2001/ResultSetId.ta.mjs";
import { AttributeList, _decode_AttributeList, _encode_AttributeList } from "../Z39-50-APDU-2001/AttributeList.ta.mjs";
// export { AttributeList, _decode_AttributeList, _encode_AttributeList } from "../Z39-50-APDU-2001/AttributeList.ta.mjs";


/**
 * @summary ResultSetPlusAttributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResultSetPlusAttributes ::= [214] IMPLICIT SEQUENCE {
 *     resultSet   ResultSetId,
 *     attributes  AttributeList
 * }
 * ```
 * 
 * @class
 */
export
class ResultSetPlusAttributes {
    /**
     * @summary `resultSet`.
     * @public
     * @readonly
     */
    readonly resultSet: ResultSetId;
    /**
     * @summary `attributes`.
     * @public
     * @readonly
     */
    readonly attributes: AttributeList;

    constructor (
        resultSet: ResultSetId,
        attributes: AttributeList
    ) {
        this.resultSet = resultSet;
        this.attributes = attributes;
    }

    /**
     * @summary Restructures an object into a ResultSetPlusAttributes
     * @description
     * 
     * This takes an `object` and converts it to a `ResultSetPlusAttributes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ResultSetPlusAttributes`.
     * @returns {ResultSetPlusAttributes}
     */
    public static _from_object (_o: { [_K in keyof (ResultSetPlusAttributes)]: (ResultSetPlusAttributes)[_K] }): ResultSetPlusAttributes {
        return new ResultSetPlusAttributes(_o.resultSet, _o.attributes);
    }


}

/**
 * @summary The Leading Root Component Types of ResultSetPlusAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ResultSetPlusAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec("resultSet", false, $.hasTag(_TagClass.context, 31)),
    new $.ComponentSpec("attributes", false, $.hasTag(_TagClass.context, 44))
];

/**
 * @summary The Trailing Root Component Types of ResultSetPlusAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ResultSetPlusAttributes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ResultSetPlusAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ResultSetPlusAttributes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ResultSetPlusAttributes: $.ASN1Decoder<ResultSetPlusAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResultSetPlusAttributes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ResultSetPlusAttributes (el: _Element): ResultSetPlusAttributes {
    if (!_cached_decoder_for_ResultSetPlusAttributes) { _cached_decoder_for_ResultSetPlusAttributes = $._decode_implicit<ResultSetPlusAttributes>(() => function (el: _Element): ResultSetPlusAttributes {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ResultSetPlusAttributes contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "resultSet";
    sequence[1].name = "attributes";
    let resultSet!: ResultSetId;
    let attributes!: AttributeList;
    resultSet = _decode_ResultSetId(sequence[0]);
    attributes = _decode_AttributeList(sequence[1]);
    return new ResultSetPlusAttributes(
        resultSet,
        attributes,

    );
}); }
    return _cached_decoder_for_ResultSetPlusAttributes(el);
}

let _cached_encoder_for_ResultSetPlusAttributes: $.ASN1Encoder<ResultSetPlusAttributes> | null = null;

/**
 * @summary Encodes a(n) ResultSetPlusAttributes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResultSetPlusAttributes, encoded as an ASN.1 Element.
 */
export
function _encode_ResultSetPlusAttributes (value: ResultSetPlusAttributes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ResultSetPlusAttributes) { _cached_encoder_for_ResultSetPlusAttributes = $._encode_implicit(_TagClass.context, 214, () => $._encode_implicit(_TagClass.context, 214, () => function (value: ResultSetPlusAttributes, elGetter: $.ASN1Encoder<ResultSetPlusAttributes>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 31, () => _encode_ResultSetId, $.BER)(value.resultSet, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 44, () => _encode_AttributeList, $.BER)(value.attributes, $.BER)
    ], $.BER);
}, $.BER), $.BER); }
    return _cached_encoder_for_ResultSetPlusAttributes(value, elGetter);
}


/* eslint-enable */
