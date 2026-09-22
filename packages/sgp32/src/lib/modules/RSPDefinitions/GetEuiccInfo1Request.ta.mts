/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GetEuiccInfo1Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetEuiccInfo1Request ::= [32] SEQUENCE { -- Tag 'BF20'
 * }
 * ```
 * 
 * @class
 */
export
class GetEuiccInfo1Request {
    constructor (

    ) {}

    /**
     * @summary Restructures an object into a GetEuiccInfo1Request
     * @description
     * 
     * This takes an `object` and converts it to a `GetEuiccInfo1Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetEuiccInfo1Request`.
     * @returns {GetEuiccInfo1Request}
     */
    public static _from_object (_o: { [_K in keyof (GetEuiccInfo1Request)]: (GetEuiccInfo1Request)[_K] }): GetEuiccInfo1Request {
        return new GetEuiccInfo1Request();
    }


}

/**
 * @summary The Leading Root Component Types of GetEuiccInfo1Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetEuiccInfo1Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Trailing Root Component Types of GetEuiccInfo1Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetEuiccInfo1Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetEuiccInfo1Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetEuiccInfo1Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetEuiccInfo1Request: $.ASN1Decoder<GetEuiccInfo1Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetEuiccInfo1Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetEuiccInfo1Request (el: _Element): GetEuiccInfo1Request {
    if (!_cached_decoder_for_GetEuiccInfo1Request) { _cached_decoder_for_GetEuiccInfo1Request = $._decode_implicit<GetEuiccInfo1Request>(() => function (el: _Element): GetEuiccInfo1Request {
    
    const callbacks: $.DecodingMap = {
        
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetEuiccInfo1Request,
        _extension_additions_list_spec_for_GetEuiccInfo1Request,
        _root_component_type_list_2_spec_for_GetEuiccInfo1Request,
        undefined,
    );
    return new GetEuiccInfo1Request(
        
    );
}); }
    return _cached_decoder_for_GetEuiccInfo1Request(el);
}

let _cached_encoder_for_GetEuiccInfo1Request: $.ASN1Encoder<GetEuiccInfo1Request> | null = null;

/**
 * @summary Encodes a(n) GetEuiccInfo1Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetEuiccInfo1Request, encoded as an ASN.1 Element.
 */
export
function _encode_GetEuiccInfo1Request (value: GetEuiccInfo1Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetEuiccInfo1Request) { _cached_encoder_for_GetEuiccInfo1Request = $._encode_implicit(_TagClass.context, 32, () => function (value: GetEuiccInfo1Request, elGetter: $.ASN1Encoder<GetEuiccInfo1Request>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_GetEuiccInfo1Request(value, elGetter);
}


/* eslint-enable */
