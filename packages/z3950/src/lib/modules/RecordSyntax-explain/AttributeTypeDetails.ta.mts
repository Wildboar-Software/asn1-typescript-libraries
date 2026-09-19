/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OmittedAttributeInterpretation, _decode_OmittedAttributeInterpretation, _encode_OmittedAttributeInterpretation } from "../RecordSyntax-explain/OmittedAttributeInterpretation.ta.mjs";
// export { OmittedAttributeInterpretation, _decode_OmittedAttributeInterpretation, _encode_OmittedAttributeInterpretation } from "../RecordSyntax-explain/OmittedAttributeInterpretation.ta.mjs";
import { AttributeValue, _decode_AttributeValue, _encode_AttributeValue } from "../RecordSyntax-explain/AttributeValue.ta.mjs";
// export { AttributeValue, _decode_AttributeValue, _encode_AttributeValue } from "../RecordSyntax-explain/AttributeValue.ta.mjs";


/**
 * @summary AttributeTypeDetails
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeTypeDetails ::= SEQUENCE {
 *       attributeType       [0] IMPLICIT INTEGER,
 *       defaultIfOmitted    [1] IMPLICIT OmittedAttributeInterpretation OPTIONAL,
 *       attributeValues     [2] IMPLICIT SEQUENCE OF AttributeValue OPTIONAL }
 * ```
 * 
 * @class
 */
export
class AttributeTypeDetails {
    constructor (
        /**
         * @summary `attributeType`.
         * @public
         * @readonly
         */
        readonly attributeType: INTEGER,
        /**
         * @summary `defaultIfOmitted`.
         * @public
         * @readonly
         */
        readonly defaultIfOmitted: OPTIONAL<OmittedAttributeInterpretation>,
        /**
         * @summary `attributeValues`.
         * @public
         * @readonly
         */
        readonly attributeValues: OPTIONAL<AttributeValue[]>
    ) {}

    /**
     * @summary Restructures an object into a AttributeTypeDetails
     * @description
     * 
     * This takes an `object` and converts it to a `AttributeTypeDetails`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeTypeDetails`.
     * @returns {AttributeTypeDetails}
     */
    public static _from_object (_o: { [_K in keyof (AttributeTypeDetails)]: (AttributeTypeDetails)[_K] }): AttributeTypeDetails {
        return new AttributeTypeDetails(_o.attributeType, _o.defaultIfOmitted, _o.attributeValues);
    }


}

/**
 * @summary The Leading Root Component Types of AttributeTypeDetails
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AttributeTypeDetails: $.ComponentSpec[] = [
    new $.ComponentSpec("attributeType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("defaultIfOmitted", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("attributeValues", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of AttributeTypeDetails
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AttributeTypeDetails: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AttributeTypeDetails
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AttributeTypeDetails: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AttributeTypeDetails: $.ASN1Decoder<AttributeTypeDetails> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeTypeDetails
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributeTypeDetails (el: _Element): AttributeTypeDetails {
    if (!_cached_decoder_for_AttributeTypeDetails) { _cached_decoder_for_AttributeTypeDetails = function (el: _Element): AttributeTypeDetails {
    let attributeType!: INTEGER;
    let defaultIfOmitted: OPTIONAL<OmittedAttributeInterpretation>;
    let attributeValues: OPTIONAL<AttributeValue[]>;
    const callbacks: $.DecodingMap = {
        "attributeType": (_el: _Element): void => { attributeType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "defaultIfOmitted": (_el: _Element): void => { defaultIfOmitted = $._decode_implicit<OmittedAttributeInterpretation>(() => _decode_OmittedAttributeInterpretation)(_el); },
        "attributeValues": (_el: _Element): void => { attributeValues = $._decode_implicit<AttributeValue[]>(() => $._decodeSequenceOf<AttributeValue>(() => _decode_AttributeValue))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AttributeTypeDetails,
        _extension_additions_list_spec_for_AttributeTypeDetails,
        _root_component_type_list_2_spec_for_AttributeTypeDetails,
        undefined,
    );
    return new AttributeTypeDetails(
        attributeType,
        defaultIfOmitted,
        attributeValues
    );
}; }
    return _cached_decoder_for_AttributeTypeDetails(el);
}

let _cached_encoder_for_AttributeTypeDetails: $.ASN1Encoder<AttributeTypeDetails> | null = null;

/**
 * @summary Encodes a(n) AttributeTypeDetails into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeTypeDetails, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeTypeDetails (value: AttributeTypeDetails, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributeTypeDetails) { _cached_encoder_for_AttributeTypeDetails = function (value: AttributeTypeDetails, elGetter: $.ASN1Encoder<AttributeTypeDetails>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.attributeType, $.BER),
            /* IF_ABSENT  */ ((value.defaultIfOmitted === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_OmittedAttributeInterpretation, $.BER)(value.defaultIfOmitted, $.BER)),
            /* IF_ABSENT  */ ((value.attributeValues === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<AttributeValue>(() => _encode_AttributeValue, $.BER), $.BER)(value.attributeValues, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AttributeTypeDetails(value, elGetter);
}


/* eslint-enable */
