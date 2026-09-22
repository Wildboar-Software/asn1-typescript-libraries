/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GetEimConfigurationDataRequest_searchCriteria, _decode_GetEimConfigurationDataRequest_searchCriteria, _encode_GetEimConfigurationDataRequest_searchCriteria } from "../SGP32Definitions/GetEimConfigurationDataRequest-searchCriteria.ta.mjs";
// export { GetEimConfigurationDataRequest_searchCriteria, _decode_GetEimConfigurationDataRequest_searchCriteria, _encode_GetEimConfigurationDataRequest_searchCriteria } from "../SGP32Definitions/GetEimConfigurationDataRequest-searchCriteria.ta.mjs";


/**
 * @summary GetEimConfigurationDataRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetEimConfigurationDataRequest ::= [85] SEQUENCE { -- Tag 'BF55'
 *     searchCriteria CHOICE {
 *         eimId [0] UTF8String (SIZE(1..128))
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class GetEimConfigurationDataRequest {
    constructor (
        /**
         * @summary `searchCriteria`.
         * @public
         * @readonly
         */
        readonly searchCriteria: OPTIONAL<GetEimConfigurationDataRequest_searchCriteria>
    ) {}

    /**
     * @summary Restructures an object into a GetEimConfigurationDataRequest
     * @description
     * 
     * This takes an `object` and converts it to a `GetEimConfigurationDataRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetEimConfigurationDataRequest`.
     * @returns {GetEimConfigurationDataRequest}
     */
    public static _from_object (_o: { [_K in keyof (GetEimConfigurationDataRequest)]: (GetEimConfigurationDataRequest)[_K] }): GetEimConfigurationDataRequest {
        return new GetEimConfigurationDataRequest(_o.searchCriteria);
    }


}

/**
 * @summary The Leading Root Component Types of GetEimConfigurationDataRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetEimConfigurationDataRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("searchCriteria", true, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of GetEimConfigurationDataRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetEimConfigurationDataRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetEimConfigurationDataRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetEimConfigurationDataRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetEimConfigurationDataRequest: $.ASN1Decoder<GetEimConfigurationDataRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetEimConfigurationDataRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetEimConfigurationDataRequest (el: _Element): GetEimConfigurationDataRequest {
    if (!_cached_decoder_for_GetEimConfigurationDataRequest) { _cached_decoder_for_GetEimConfigurationDataRequest = $._decode_implicit<GetEimConfigurationDataRequest>(() => function (el: _Element): GetEimConfigurationDataRequest {
    let searchCriteria: OPTIONAL<GetEimConfigurationDataRequest_searchCriteria>;
    const callbacks: $.DecodingMap = {
        "searchCriteria": (_el: _Element): void => { searchCriteria = _decode_GetEimConfigurationDataRequest_searchCriteria(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetEimConfigurationDataRequest,
        _extension_additions_list_spec_for_GetEimConfigurationDataRequest,
        _root_component_type_list_2_spec_for_GetEimConfigurationDataRequest,
        undefined,
    );
    return new GetEimConfigurationDataRequest(
        searchCriteria
    );
}); }
    return _cached_decoder_for_GetEimConfigurationDataRequest(el);
}

let _cached_encoder_for_GetEimConfigurationDataRequest: $.ASN1Encoder<GetEimConfigurationDataRequest> | null = null;

/**
 * @summary Encodes a(n) GetEimConfigurationDataRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetEimConfigurationDataRequest, encoded as an ASN.1 Element.
 */
export
function _encode_GetEimConfigurationDataRequest (value: GetEimConfigurationDataRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetEimConfigurationDataRequest) { _cached_encoder_for_GetEimConfigurationDataRequest = $._encode_implicit(_TagClass.context, 85, () => function (value: GetEimConfigurationDataRequest, elGetter: $.ASN1Encoder<GetEimConfigurationDataRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.searchCriteria === undefined) ? undefined : _encode_GetEimConfigurationDataRequest_searchCriteria(value.searchCriteria, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_GetEimConfigurationDataRequest(value, elGetter);
}


/* eslint-enable */
