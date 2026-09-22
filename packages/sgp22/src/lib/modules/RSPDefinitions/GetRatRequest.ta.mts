/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GetRatRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetRatRequest ::= [67] SEQUENCE { -- Tag ' BF43'
 *     -- No input data
 * }
 * ```
 * 
 * @class
 */
export
class GetRatRequest {
    constructor (

    ) {}

    /**
     * @summary Restructures an object into a GetRatRequest
     * @description
     * 
     * This takes an `object` and converts it to a `GetRatRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetRatRequest`.
     * @returns {GetRatRequest}
     */
    public static _from_object (_o: { [_K in keyof (GetRatRequest)]: (GetRatRequest)[_K] }): GetRatRequest {
        return new GetRatRequest();
    }


}

/**
 * @summary The Leading Root Component Types of GetRatRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetRatRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Trailing Root Component Types of GetRatRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetRatRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetRatRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetRatRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetRatRequest: $.ASN1Decoder<GetRatRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetRatRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetRatRequest (el: _Element): GetRatRequest {
    if (!_cached_decoder_for_GetRatRequest) { _cached_decoder_for_GetRatRequest = $._decode_implicit<GetRatRequest>(() => function (el: _Element): GetRatRequest {
    
    const callbacks: $.DecodingMap = {
        
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetRatRequest,
        _extension_additions_list_spec_for_GetRatRequest,
        _root_component_type_list_2_spec_for_GetRatRequest,
        undefined,
    );
    return new GetRatRequest(
        
    );
}); }
    return _cached_decoder_for_GetRatRequest(el);
}

let _cached_encoder_for_GetRatRequest: $.ASN1Encoder<GetRatRequest> | null = null;

/**
 * @summary Encodes a(n) GetRatRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetRatRequest, encoded as an ASN.1 Element.
 */
export
function _encode_GetRatRequest (value: GetRatRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetRatRequest) { _cached_encoder_for_GetRatRequest = $._encode_implicit(_TagClass.context, 67, () => function (value: GetRatRequest, elGetter: $.ASN1Encoder<GetRatRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_GetRatRequest(value, elGetter);
}


/* eslint-enable */
