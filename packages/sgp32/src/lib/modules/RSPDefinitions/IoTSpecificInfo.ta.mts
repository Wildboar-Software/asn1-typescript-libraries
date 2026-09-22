/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IoTSpecificInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IoTSpecificInfo ::= SEQUENCE {
 * }
 * ```
 * 
 * @class
 */
export
class IoTSpecificInfo {
    constructor (

    ) {}

    /**
     * @summary Restructures an object into a IoTSpecificInfo
     * @description
     * 
     * This takes an `object` and converts it to a `IoTSpecificInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IoTSpecificInfo`.
     * @returns {IoTSpecificInfo}
     */
    public static _from_object (_o: { [_K in keyof (IoTSpecificInfo)]: (IoTSpecificInfo)[_K] }): IoTSpecificInfo {
        return new IoTSpecificInfo();
    }


}

/**
 * @summary The Leading Root Component Types of IoTSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IoTSpecificInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Trailing Root Component Types of IoTSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IoTSpecificInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IoTSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IoTSpecificInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IoTSpecificInfo: $.ASN1Decoder<IoTSpecificInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IoTSpecificInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IoTSpecificInfo (el: _Element): IoTSpecificInfo {
    if (!_cached_decoder_for_IoTSpecificInfo) { _cached_decoder_for_IoTSpecificInfo = function (el: _Element): IoTSpecificInfo {
    
    const callbacks: $.DecodingMap = {
        
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IoTSpecificInfo,
        _extension_additions_list_spec_for_IoTSpecificInfo,
        _root_component_type_list_2_spec_for_IoTSpecificInfo,
        undefined,
    );
    return new IoTSpecificInfo(
        
    );
}; }
    return _cached_decoder_for_IoTSpecificInfo(el);
}

let _cached_encoder_for_IoTSpecificInfo: $.ASN1Encoder<IoTSpecificInfo> | null = null;

/**
 * @summary Encodes a(n) IoTSpecificInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IoTSpecificInfo, encoded as an ASN.1 Element.
 */
export
function _encode_IoTSpecificInfo (value: IoTSpecificInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IoTSpecificInfo) { _cached_encoder_for_IoTSpecificInfo = function (value: IoTSpecificInfo, elGetter: $.ASN1Encoder<IoTSpecificInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IoTSpecificInfo(value, elGetter);
}


/* eslint-enable */
