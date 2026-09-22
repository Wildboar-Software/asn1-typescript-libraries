/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GetEuiccChallengeRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetEuiccChallengeRequest ::= [46] SEQUENCE { -- Tag 'BF2E'
 * }
 * ```
 * 
 * @class
 */
export
class GetEuiccChallengeRequest {
    constructor (

    ) {}

    /**
     * @summary Restructures an object into a GetEuiccChallengeRequest
     * @description
     * 
     * This takes an `object` and converts it to a `GetEuiccChallengeRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetEuiccChallengeRequest`.
     * @returns {GetEuiccChallengeRequest}
     */
    public static _from_object (_o: { [_K in keyof (GetEuiccChallengeRequest)]: (GetEuiccChallengeRequest)[_K] }): GetEuiccChallengeRequest {
        return new GetEuiccChallengeRequest();
    }


}

/**
 * @summary The Leading Root Component Types of GetEuiccChallengeRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetEuiccChallengeRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Trailing Root Component Types of GetEuiccChallengeRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetEuiccChallengeRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetEuiccChallengeRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetEuiccChallengeRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetEuiccChallengeRequest: $.ASN1Decoder<GetEuiccChallengeRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetEuiccChallengeRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetEuiccChallengeRequest (el: _Element): GetEuiccChallengeRequest {
    if (!_cached_decoder_for_GetEuiccChallengeRequest) { _cached_decoder_for_GetEuiccChallengeRequest = $._decode_implicit<GetEuiccChallengeRequest>(() => function (el: _Element): GetEuiccChallengeRequest {
    
    const callbacks: $.DecodingMap = {
        
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetEuiccChallengeRequest,
        _extension_additions_list_spec_for_GetEuiccChallengeRequest,
        _root_component_type_list_2_spec_for_GetEuiccChallengeRequest,
        undefined,
    );
    return new GetEuiccChallengeRequest(
        
    );
}); }
    return _cached_decoder_for_GetEuiccChallengeRequest(el);
}

let _cached_encoder_for_GetEuiccChallengeRequest: $.ASN1Encoder<GetEuiccChallengeRequest> | null = null;

/**
 * @summary Encodes a(n) GetEuiccChallengeRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetEuiccChallengeRequest, encoded as an ASN.1 Element.
 */
export
function _encode_GetEuiccChallengeRequest (value: GetEuiccChallengeRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetEuiccChallengeRequest) { _cached_encoder_for_GetEuiccChallengeRequest = $._encode_implicit(_TagClass.context, 46, () => function (value: GetEuiccChallengeRequest, elGetter: $.ASN1Encoder<GetEuiccChallengeRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_GetEuiccChallengeRequest(value, elGetter);
}


/* eslint-enable */
