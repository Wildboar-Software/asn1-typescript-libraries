/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EventSpecificInformationBCSM_tMidCallSpecificInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventSpecificInformationBCSM-tMidCallSpecificInfo ::= SEQUENCE {
 *     -- no specific info defined --
 *     --...--
 * }
 * ```
 * 
 * @class
 */
export
class EventSpecificInformationBCSM_tMidCallSpecificInfo {
    constructor (

    ) {}

    /**
     * @summary Restructures an object into a EventSpecificInformationBCSM_tMidCallSpecificInfo
     * @description
     * 
     * This takes an `object` and converts it to a `EventSpecificInformationBCSM_tMidCallSpecificInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EventSpecificInformationBCSM_tMidCallSpecificInfo`.
     * @returns {EventSpecificInformationBCSM_tMidCallSpecificInfo}
     */
    public static _from_object (_o: { [_K in keyof (EventSpecificInformationBCSM_tMidCallSpecificInfo)]: (EventSpecificInformationBCSM_tMidCallSpecificInfo)[_K] }): EventSpecificInformationBCSM_tMidCallSpecificInfo {
        return new EventSpecificInformationBCSM_tMidCallSpecificInfo();
    }


}

/**
 * @summary The Leading Root Component Types of EventSpecificInformationBCSM_tMidCallSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_tMidCallSpecificInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Trailing Root Component Types of EventSpecificInformationBCSM_tMidCallSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_tMidCallSpecificInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EventSpecificInformationBCSM_tMidCallSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EventSpecificInformationBCSM_tMidCallSpecificInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EventSpecificInformationBCSM_tMidCallSpecificInfo: $.ASN1Decoder<EventSpecificInformationBCSM_tMidCallSpecificInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventSpecificInformationBCSM_tMidCallSpecificInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventSpecificInformationBCSM_tMidCallSpecificInfo (el: _Element): EventSpecificInformationBCSM_tMidCallSpecificInfo {
    if (!_cached_decoder_for_EventSpecificInformationBCSM_tMidCallSpecificInfo) { _cached_decoder_for_EventSpecificInformationBCSM_tMidCallSpecificInfo = function (el: _Element): EventSpecificInformationBCSM_tMidCallSpecificInfo {
    
    const callbacks: $.DecodingMap = {
        
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_tMidCallSpecificInfo,
        _extension_additions_list_spec_for_EventSpecificInformationBCSM_tMidCallSpecificInfo,
        _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_tMidCallSpecificInfo,
        undefined,
    );
    return new EventSpecificInformationBCSM_tMidCallSpecificInfo(
        
    );
}; }
    return _cached_decoder_for_EventSpecificInformationBCSM_tMidCallSpecificInfo(el);
}

let _cached_encoder_for_EventSpecificInformationBCSM_tMidCallSpecificInfo: $.ASN1Encoder<EventSpecificInformationBCSM_tMidCallSpecificInfo> | null = null;

/**
 * @summary Encodes a(n) EventSpecificInformationBCSM_tMidCallSpecificInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventSpecificInformationBCSM_tMidCallSpecificInfo, encoded as an ASN.1 Element.
 */
export
function _encode_EventSpecificInformationBCSM_tMidCallSpecificInfo (value: EventSpecificInformationBCSM_tMidCallSpecificInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationBCSM_tMidCallSpecificInfo) { _cached_encoder_for_EventSpecificInformationBCSM_tMidCallSpecificInfo = function (): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EventSpecificInformationBCSM_tMidCallSpecificInfo(value, elGetter);
}


/* eslint-enable */
