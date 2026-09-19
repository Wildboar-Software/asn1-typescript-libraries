/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SBIReference, _decode_SBIReference, _encode_SBIReference } from "../TS33128Payloads/SBIReference.ta.mjs";
// export { SBIReference, _decode_SBIReference, _encode_SBIReference } from "../TS33128Payloads/SBIReference.ta.mjs";
import { SBIValue, _decode_SBIValue, _encode_SBIValue } from "../TS33128Payloads/SBIValue.ta.mjs";
// export { SBIValue, _decode_SBIValue, _encode_SBIValue } from "../TS33128Payloads/SBIValue.ta.mjs";


/**
 * @summary SBIType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SBIType ::= SEQUENCE
 * {
 *     sBIReference         [1] SBIReference,
 *     sBIValue             [2] SBIValue
 * }
 * ```
 * 
 * @class
 */
export
class SBIType {
    constructor (
        /**
         * @summary `sBIReference`.
         * @public
         * @readonly
         */
        readonly sBIReference: SBIReference,
        /**
         * @summary `sBIValue`.
         * @public
         * @readonly
         */
        readonly sBIValue: SBIValue
    ) {}

    /**
     * @summary Restructures an object into a SBIType
     * @description
     * 
     * This takes an `object` and converts it to a `SBIType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SBIType`.
     * @returns {SBIType}
     */
    public static _from_object (_o: { [_K in keyof (SBIType)]: (SBIType)[_K] }): SBIType {
        return new SBIType(_o.sBIReference, _o.sBIValue);
    }


}

/**
 * @summary The Leading Root Component Types of SBIType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SBIType: $.ComponentSpec[] = [
    new $.ComponentSpec("sBIReference", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sBIValue", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of SBIType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SBIType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SBIType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SBIType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SBIType: $.ASN1Decoder<SBIType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SBIType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SBIType (el: _Element): SBIType {
    if (!_cached_decoder_for_SBIType) { _cached_decoder_for_SBIType = function (el: _Element): SBIType {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("SBIType contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "sBIReference";
    sequence[1].name = "sBIValue";
    let sBIReference!: SBIReference;
    let sBIValue!: SBIValue;
    sBIReference = $._decode_implicit<SBIReference>(() => _decode_SBIReference)(sequence[0]);
    sBIValue = $._decode_implicit<SBIValue>(() => _decode_SBIValue)(sequence[1]);
    return new SBIType(
        sBIReference,
        sBIValue,

    );
}; }
    return _cached_decoder_for_SBIType(el);
}

let _cached_encoder_for_SBIType: $.ASN1Encoder<SBIType> | null = null;

/**
 * @summary Encodes a(n) SBIType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SBIType, encoded as an ASN.1 Element.
 */
export
function _encode_SBIType (value: SBIType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SBIType) { _cached_encoder_for_SBIType = function (value: SBIType, elGetter: $.ASN1Encoder<SBIType>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_SBIReference, $.BER)(value.sBIReference, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_SBIValue, $.BER)(value.sBIValue, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SBIType(value, elGetter);
}


/* eslint-enable */
