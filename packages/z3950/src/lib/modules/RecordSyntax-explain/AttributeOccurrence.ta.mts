/* eslint-disable */
import {
    INTEGER,
    NULL,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AttributeOccurrence_attributeValues, _decode_AttributeOccurrence_attributeValues, _encode_AttributeOccurrence_attributeValues } from "../RecordSyntax-explain/AttributeOccurrence-attributeValues.ta.mjs";
// export { AttributeOccurrence_attributeValues, _decode_AttributeOccurrence_attributeValues, _encode_AttributeOccurrence_attributeValues } from "../RecordSyntax-explain/AttributeOccurrence-attributeValues.ta.mjs";


/**
 * @summary AttributeOccurrence
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeOccurrence ::= SEQUENCE {   
 *                 -- An AttributeOccurrence lists the legal values for a
 *                 -- specific attribute type in a combination.
 *    attributeSet       [0] IMPLICIT AttributeSetId OPTIONAL,
 *    attributeType      [1] IMPLICIT INTEGER,
 *    mustBeSupplied     [2] IMPLICIT NULL OPTIONAL,
 *    attributeValues    CHOICE {
 *                           any-or-none   [3] IMPLICIT NULL, 
 *                              -- All supported values are OK 
 *                           specific      [4] IMPLICIT SEQUENCE OF
 *                                               StringOrNumeric}}
 * ```
 * 
 * @class
 */
export
class AttributeOccurrence {
    constructor (
        /**
         * @summary `attributeSet`.
         * @public
         * @readonly
         */
        readonly attributeSet: OPTIONAL<AttributeSetId>,
        /**
         * @summary `attributeType`.
         * @public
         * @readonly
         */
        readonly attributeType: INTEGER,
        /**
         * @summary `mustBeSupplied`.
         * @public
         * @readonly
         */
        readonly mustBeSupplied: OPTIONAL<NULL>,
        /**
         * @summary `attributeValues`.
         * @public
         * @readonly
         */
        readonly attributeValues: AttributeOccurrence_attributeValues
    ) {}

    /**
     * @summary Restructures an object into a AttributeOccurrence
     * @description
     * 
     * This takes an `object` and converts it to a `AttributeOccurrence`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeOccurrence`.
     * @returns {AttributeOccurrence}
     */
    public static _from_object (_o: { [_K in keyof (AttributeOccurrence)]: (AttributeOccurrence)[_K] }): AttributeOccurrence {
        return new AttributeOccurrence(_o.attributeSet, _o.attributeType, _o.mustBeSupplied, _o.attributeValues);
    }


}

/**
 * @summary The Leading Root Component Types of AttributeOccurrence
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AttributeOccurrence: $.ComponentSpec[] = [
    /* FIXME: attributeSet COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("attributeType", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mustBeSupplied", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("attributeValues", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of AttributeOccurrence
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AttributeOccurrence: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AttributeOccurrence
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AttributeOccurrence: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AttributeOccurrence: $.ASN1Decoder<AttributeOccurrence> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeOccurrence
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributeOccurrence (el: _Element): AttributeOccurrence {
    if (!_cached_decoder_for_AttributeOccurrence) { _cached_decoder_for_AttributeOccurrence = function (el: _Element): AttributeOccurrence {
    let attributeSet: OPTIONAL<AttributeSetId>;
    let attributeType!: INTEGER;
    let mustBeSupplied: OPTIONAL<NULL>;
    let attributeValues!: AttributeOccurrence_attributeValues;
    const callbacks: $.DecodingMap = {
        "attributeSet": (_el: _Element): void => { attributeSet = $._decode_implicit<AttributeSetId>(() => _decode_AttributeSetId)(_el); },
        "attributeType": (_el: _Element): void => { attributeType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "mustBeSupplied": (_el: _Element): void => { mustBeSupplied = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "attributeValues": (_el: _Element): void => { attributeValues = _decode_AttributeOccurrence_attributeValues(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AttributeOccurrence,
        _extension_additions_list_spec_for_AttributeOccurrence,
        _root_component_type_list_2_spec_for_AttributeOccurrence,
        undefined,
    );
    return new AttributeOccurrence(
        attributeSet,
        attributeType,
        mustBeSupplied,
        attributeValues
    );
}; }
    return _cached_decoder_for_AttributeOccurrence(el);
}

let _cached_encoder_for_AttributeOccurrence: $.ASN1Encoder<AttributeOccurrence> | null = null;

/**
 * @summary Encodes a(n) AttributeOccurrence into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeOccurrence, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeOccurrence (value: AttributeOccurrence, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributeOccurrence) { _cached_encoder_for_AttributeOccurrence = function (value: AttributeOccurrence, elGetter: $.ASN1Encoder<AttributeOccurrence>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.attributeSet === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_AttributeSetId, $.BER)(value.attributeSet, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.attributeType, $.BER),
            /* IF_ABSENT  */ ((value.mustBeSupplied === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER)(value.mustBeSupplied, $.BER)),
            /* REQUIRED   */ _encode_AttributeOccurrence_attributeValues(value.attributeValues, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AttributeOccurrence(value, elGetter);
}


/* eslint-enable */
