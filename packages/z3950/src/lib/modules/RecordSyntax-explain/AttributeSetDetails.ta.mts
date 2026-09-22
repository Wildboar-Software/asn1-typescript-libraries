/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AttributeTypeDetails, _decode_AttributeTypeDetails, _encode_AttributeTypeDetails } from "../RecordSyntax-explain/AttributeTypeDetails.ta.mjs";
// export { AttributeTypeDetails, _decode_AttributeTypeDetails, _encode_AttributeTypeDetails } from "../RecordSyntax-explain/AttributeTypeDetails.ta.mjs";


/**
 * @summary AttributeSetDetails
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeSetDetails ::= SEQUENCE {
 *          attributeSet        [0] IMPLICIT AttributeSetId,
 *          attributesByType    [1] IMPLICIT SEQUENCE OF AttributeTypeDetails}
 * ```
 * 
 * @class
 */
export
class AttributeSetDetails {
    constructor (
        /**
         * @summary `attributeSet`.
         * @public
         * @readonly
         */
        readonly attributeSet: AttributeSetId,
        /**
         * @summary `attributesByType`.
         * @public
         * @readonly
         */
        readonly attributesByType: AttributeTypeDetails[]
    ) {}

    /**
     * @summary Restructures an object into a AttributeSetDetails
     * @description
     * 
     * This takes an `object` and converts it to a `AttributeSetDetails`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeSetDetails`.
     * @returns {AttributeSetDetails}
     */
    public static _from_object (_o: { [_K in keyof (AttributeSetDetails)]: (AttributeSetDetails)[_K] }): AttributeSetDetails {
        return new AttributeSetDetails(_o.attributeSet, _o.attributesByType);
    }


}

/**
 * @summary The Leading Root Component Types of AttributeSetDetails
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AttributeSetDetails: $.ComponentSpec[] = [
    /* FIXME: attributeSet COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("attributesByType", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of AttributeSetDetails
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AttributeSetDetails: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AttributeSetDetails
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AttributeSetDetails: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AttributeSetDetails: $.ASN1Decoder<AttributeSetDetails> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeSetDetails
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributeSetDetails (el: _Element): AttributeSetDetails {
    if (!_cached_decoder_for_AttributeSetDetails) { _cached_decoder_for_AttributeSetDetails = function (el: _Element): AttributeSetDetails {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("AttributeSetDetails contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "attributeSet";
    sequence[1].name = "attributesByType";
    let attributeSet!: AttributeSetId;
    let attributesByType!: AttributeTypeDetails[];
    attributeSet = $._decode_implicit<AttributeSetId>(() => _decode_AttributeSetId)(sequence[0]);
    attributesByType = $._decode_implicit<AttributeTypeDetails[]>(() => $._decodeSequenceOf<AttributeTypeDetails>(() => _decode_AttributeTypeDetails))(sequence[1]);
    return new AttributeSetDetails(
        attributeSet,
        attributesByType,

    );
}; }
    return _cached_decoder_for_AttributeSetDetails(el);
}

let _cached_encoder_for_AttributeSetDetails: $.ASN1Encoder<AttributeSetDetails> | null = null;

/**
 * @summary Encodes a(n) AttributeSetDetails into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeSetDetails, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeSetDetails (value: AttributeSetDetails, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributeSetDetails) { _cached_encoder_for_AttributeSetDetails = function (value: AttributeSetDetails, elGetter: $.ASN1Encoder<AttributeSetDetails>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_AttributeSetId, $.BER)(value.attributeSet, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<AttributeTypeDetails>(() => _encode_AttributeTypeDetails, $.BER), $.BER)(value.attributesByType, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AttributeSetDetails(value, elGetter);
}


/* eslint-enable */
