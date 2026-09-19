/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CancelSessionOk
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CancelSessionOk ::= SEQUENCE { -- This function has no output data
 * }
 * ```
 * 
 * @class
 */
export
class CancelSessionOk {
    constructor (

    ) {}

    /**
     * @summary Restructures an object into a CancelSessionOk
     * @description
     * 
     * This takes an `object` and converts it to a `CancelSessionOk`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CancelSessionOk`.
     * @returns {CancelSessionOk}
     */
    public static _from_object (_o: { [_K in keyof (CancelSessionOk)]: (CancelSessionOk)[_K] }): CancelSessionOk {
        return new CancelSessionOk();
    }


}

/**
 * @summary The Leading Root Component Types of CancelSessionOk
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CancelSessionOk: $.ComponentSpec[] = [
    
];

/**
 * @summary The Trailing Root Component Types of CancelSessionOk
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CancelSessionOk: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CancelSessionOk
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CancelSessionOk: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CancelSessionOk: $.ASN1Decoder<CancelSessionOk> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CancelSessionOk
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CancelSessionOk (el: _Element): CancelSessionOk {
    if (!_cached_decoder_for_CancelSessionOk) { _cached_decoder_for_CancelSessionOk = function (el: _Element): CancelSessionOk {
    
    const callbacks: $.DecodingMap = {
        
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CancelSessionOk,
        _extension_additions_list_spec_for_CancelSessionOk,
        _root_component_type_list_2_spec_for_CancelSessionOk,
        undefined,
    );
    return new CancelSessionOk(
        
    );
}; }
    return _cached_decoder_for_CancelSessionOk(el);
}

let _cached_encoder_for_CancelSessionOk: $.ASN1Encoder<CancelSessionOk> | null = null;

/**
 * @summary Encodes a(n) CancelSessionOk into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CancelSessionOk, encoded as an ASN.1 Element.
 */
export
function _encode_CancelSessionOk (value: CancelSessionOk, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CancelSessionOk) { _cached_encoder_for_CancelSessionOk = function (value: CancelSessionOk, elGetter: $.ASN1Encoder<CancelSessionOk>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CancelSessionOk(value, elGetter);
}


/* eslint-enable */
