/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GetConnectivityParametersRequest
 * @description
 * 
 * ES10b.GetConnectivityParameters command. The IPA reads the HTTP and CoAP
 * connectivity parameters of the currently enabled Profile, when the eUICC has
 * them. The command carries no parameters. HTTP parameters SHOULD be supplied
 * in the Profile Package as described in the TCA eUICC Profile Package
 * Interoperability Technical Specification, and the operator can update them
 * over ES6 as described in SGP.02 section 3.13. If they are not available, the
 * response is `parametersNotAvailable`. SGP.32 v1.2, section 5.9.24.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetConnectivityParametersRequest ::= [95] SEQUENCE { -- Tag 'BF5F'
 * }
 * ```
 * 
 * @class
 */
export
class GetConnectivityParametersRequest {
    constructor (

    ) {}

    /**
     * @summary Restructures an object into a GetConnectivityParametersRequest
     * @description
     * 
     * This takes an `object` and converts it to a `GetConnectivityParametersRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetConnectivityParametersRequest`.
     * @returns {GetConnectivityParametersRequest}
     */
    public static _from_object (_o: { [_K in keyof (GetConnectivityParametersRequest)]: (GetConnectivityParametersRequest)[_K] }): GetConnectivityParametersRequest {
        return new GetConnectivityParametersRequest();
    }


}

/**
 * @summary The Leading Root Component Types of GetConnectivityParametersRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetConnectivityParametersRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Trailing Root Component Types of GetConnectivityParametersRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetConnectivityParametersRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetConnectivityParametersRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetConnectivityParametersRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetConnectivityParametersRequest: $.ASN1Decoder<GetConnectivityParametersRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetConnectivityParametersRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetConnectivityParametersRequest (el: _Element): GetConnectivityParametersRequest {
    if (!_cached_decoder_for_GetConnectivityParametersRequest) { _cached_decoder_for_GetConnectivityParametersRequest = $._decode_implicit<GetConnectivityParametersRequest>(() => function (el: _Element): GetConnectivityParametersRequest {
    
    const callbacks: $.DecodingMap = {
        
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetConnectivityParametersRequest,
        _extension_additions_list_spec_for_GetConnectivityParametersRequest,
        _root_component_type_list_2_spec_for_GetConnectivityParametersRequest,
        undefined,
    );
    return new GetConnectivityParametersRequest(
        
    );
}); }
    return _cached_decoder_for_GetConnectivityParametersRequest(el);
}

let _cached_encoder_for_GetConnectivityParametersRequest: $.ASN1Encoder<GetConnectivityParametersRequest> | null = null;

/**
 * @summary Encodes a(n) GetConnectivityParametersRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetConnectivityParametersRequest, encoded as an ASN.1 Element.
 */
export
function _encode_GetConnectivityParametersRequest (value: GetConnectivityParametersRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetConnectivityParametersRequest) { _cached_encoder_for_GetConnectivityParametersRequest = $._encode_implicit(_TagClass.context, 95, () => function (): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_GetConnectivityParametersRequest(value, elGetter);
}


/* eslint-enable */
