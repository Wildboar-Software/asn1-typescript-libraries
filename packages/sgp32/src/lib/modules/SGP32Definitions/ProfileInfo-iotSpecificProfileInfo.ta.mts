/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProfileInfo_iotSpecificProfileInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProfileInfo-iotSpecificProfileInfo ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class ProfileInfo_iotSpecificProfileInfo {
    constructor (

    ) {}

    /**
     * @summary Restructures an object into a ProfileInfo_iotSpecificProfileInfo
     * @description
     * 
     * This takes an `object` and converts it to a `ProfileInfo_iotSpecificProfileInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProfileInfo_iotSpecificProfileInfo`.
     * @returns {ProfileInfo_iotSpecificProfileInfo}
     */
    public static _from_object (_o: { [_K in keyof (ProfileInfo_iotSpecificProfileInfo)]: (ProfileInfo_iotSpecificProfileInfo)[_K] }): ProfileInfo_iotSpecificProfileInfo {
        return new ProfileInfo_iotSpecificProfileInfo();
    }


}

/**
 * @summary The Leading Root Component Types of ProfileInfo_iotSpecificProfileInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ProfileInfo_iotSpecificProfileInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Trailing Root Component Types of ProfileInfo_iotSpecificProfileInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ProfileInfo_iotSpecificProfileInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ProfileInfo_iotSpecificProfileInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ProfileInfo_iotSpecificProfileInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ProfileInfo_iotSpecificProfileInfo: $.ASN1Decoder<ProfileInfo_iotSpecificProfileInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProfileInfo_iotSpecificProfileInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProfileInfo_iotSpecificProfileInfo (el: _Element): ProfileInfo_iotSpecificProfileInfo {
    if (!_cached_decoder_for_ProfileInfo_iotSpecificProfileInfo) { _cached_decoder_for_ProfileInfo_iotSpecificProfileInfo = function (el: _Element): ProfileInfo_iotSpecificProfileInfo {
    
    const callbacks: $.DecodingMap = {
        
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ProfileInfo_iotSpecificProfileInfo,
        _extension_additions_list_spec_for_ProfileInfo_iotSpecificProfileInfo,
        _root_component_type_list_2_spec_for_ProfileInfo_iotSpecificProfileInfo,
        undefined,
    );
    return new ProfileInfo_iotSpecificProfileInfo(
        
    );
}; }
    return _cached_decoder_for_ProfileInfo_iotSpecificProfileInfo(el);
}

let _cached_encoder_for_ProfileInfo_iotSpecificProfileInfo: $.ASN1Encoder<ProfileInfo_iotSpecificProfileInfo> | null = null;

/**
 * @summary Encodes a(n) ProfileInfo_iotSpecificProfileInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProfileInfo_iotSpecificProfileInfo, encoded as an ASN.1 Element.
 */
export
function _encode_ProfileInfo_iotSpecificProfileInfo (value: ProfileInfo_iotSpecificProfileInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProfileInfo_iotSpecificProfileInfo) { _cached_encoder_for_ProfileInfo_iotSpecificProfileInfo = function (value: ProfileInfo_iotSpecificProfileInfo, elGetter: $.ASN1Encoder<ProfileInfo_iotSpecificProfileInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ProfileInfo_iotSpecificProfileInfo(value, elGetter);
}


/* eslint-enable */
