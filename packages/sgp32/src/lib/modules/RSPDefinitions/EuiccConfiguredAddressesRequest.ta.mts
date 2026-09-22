/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EuiccConfiguredAddressesRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EuiccConfiguredAddressesRequest ::= [60] SEQUENCE { -- Tag 'BF3C'
 * }
 * ```
 * 
 * @class
 */
export
class EuiccConfiguredAddressesRequest {
    constructor (

    ) {}

    /**
     * @summary Restructures an object into a EuiccConfiguredAddressesRequest
     * @description
     * 
     * This takes an `object` and converts it to a `EuiccConfiguredAddressesRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EuiccConfiguredAddressesRequest`.
     * @returns {EuiccConfiguredAddressesRequest}
     */
    public static _from_object (_o: { [_K in keyof (EuiccConfiguredAddressesRequest)]: (EuiccConfiguredAddressesRequest)[_K] }): EuiccConfiguredAddressesRequest {
        return new EuiccConfiguredAddressesRequest();
    }


}

/**
 * @summary The Leading Root Component Types of EuiccConfiguredAddressesRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EuiccConfiguredAddressesRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Trailing Root Component Types of EuiccConfiguredAddressesRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EuiccConfiguredAddressesRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EuiccConfiguredAddressesRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EuiccConfiguredAddressesRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EuiccConfiguredAddressesRequest: $.ASN1Decoder<EuiccConfiguredAddressesRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EuiccConfiguredAddressesRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EuiccConfiguredAddressesRequest (el: _Element): EuiccConfiguredAddressesRequest {
    if (!_cached_decoder_for_EuiccConfiguredAddressesRequest) { _cached_decoder_for_EuiccConfiguredAddressesRequest = $._decode_implicit<EuiccConfiguredAddressesRequest>(() => function (el: _Element): EuiccConfiguredAddressesRequest {
    
    const callbacks: $.DecodingMap = {
        
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EuiccConfiguredAddressesRequest,
        _extension_additions_list_spec_for_EuiccConfiguredAddressesRequest,
        _root_component_type_list_2_spec_for_EuiccConfiguredAddressesRequest,
        undefined,
    );
    return new EuiccConfiguredAddressesRequest(
        
    );
}); }
    return _cached_decoder_for_EuiccConfiguredAddressesRequest(el);
}

let _cached_encoder_for_EuiccConfiguredAddressesRequest: $.ASN1Encoder<EuiccConfiguredAddressesRequest> | null = null;

/**
 * @summary Encodes a(n) EuiccConfiguredAddressesRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EuiccConfiguredAddressesRequest, encoded as an ASN.1 Element.
 */
export
function _encode_EuiccConfiguredAddressesRequest (value: EuiccConfiguredAddressesRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EuiccConfiguredAddressesRequest) { _cached_encoder_for_EuiccConfiguredAddressesRequest = $._encode_implicit(_TagClass.context, 60, () => function (value: EuiccConfiguredAddressesRequest, elGetter: $.ASN1Encoder<EuiccConfiguredAddressesRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_EuiccConfiguredAddressesRequest(value, elGetter);
}


/* eslint-enable */
