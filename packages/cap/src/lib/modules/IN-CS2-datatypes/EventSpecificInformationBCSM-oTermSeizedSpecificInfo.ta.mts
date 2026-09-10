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
 * @summary EventSpecificInformationBCSM_oTermSeizedSpecificInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventSpecificInformationBCSM-oTermSeizedSpecificInfo {PARAMETERS-BOUND:bound} ::= SEQUENCE {
 *     -- no specific info defined
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class EventSpecificInformationBCSM_oTermSeizedSpecificInfo {
    constructor (
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a EventSpecificInformationBCSM_oTermSeizedSpecificInfo
     * @description
     * 
     * This takes an `object` and converts it to a `EventSpecificInformationBCSM_oTermSeizedSpecificInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EventSpecificInformationBCSM_oTermSeizedSpecificInfo`.
     * @returns {EventSpecificInformationBCSM_oTermSeizedSpecificInfo}
     */
    public static _from_object (_o: { [_K in keyof (EventSpecificInformationBCSM_oTermSeizedSpecificInfo)]: (EventSpecificInformationBCSM_oTermSeizedSpecificInfo)[_K] }): EventSpecificInformationBCSM_oTermSeizedSpecificInfo {
        return new EventSpecificInformationBCSM_oTermSeizedSpecificInfo(_o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EventSpecificInformationBCSM_oTermSeizedSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_oTermSeizedSpecificInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Trailing Root Component Types of EventSpecificInformationBCSM_oTermSeizedSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_oTermSeizedSpecificInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EventSpecificInformationBCSM_oTermSeizedSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EventSpecificInformationBCSM_oTermSeizedSpecificInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EventSpecificInformationBCSM_oTermSeizedSpecificInfo: $.ASN1Decoder<EventSpecificInformationBCSM_oTermSeizedSpecificInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventSpecificInformationBCSM_oTermSeizedSpecificInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventSpecificInformationBCSM_oTermSeizedSpecificInfo (el: _Element): EventSpecificInformationBCSM_oTermSeizedSpecificInfo {
    if (!_cached_decoder_for_EventSpecificInformationBCSM_oTermSeizedSpecificInfo) { _cached_decoder_for_EventSpecificInformationBCSM_oTermSeizedSpecificInfo = function (el: _Element): EventSpecificInformationBCSM_oTermSeizedSpecificInfo {
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_oTermSeizedSpecificInfo,
        _extension_additions_list_spec_for_EventSpecificInformationBCSM_oTermSeizedSpecificInfo,
        _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_oTermSeizedSpecificInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EventSpecificInformationBCSM_oTermSeizedSpecificInfo(
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EventSpecificInformationBCSM_oTermSeizedSpecificInfo(el);
}

let _cached_encoder_for_EventSpecificInformationBCSM_oTermSeizedSpecificInfo: $.ASN1Encoder<EventSpecificInformationBCSM_oTermSeizedSpecificInfo> | null = null;

/**
 * @summary Encodes a(n) EventSpecificInformationBCSM_oTermSeizedSpecificInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventSpecificInformationBCSM_oTermSeizedSpecificInfo, encoded as an ASN.1 Element.
 */
export
function _encode_EventSpecificInformationBCSM_oTermSeizedSpecificInfo (value: EventSpecificInformationBCSM_oTermSeizedSpecificInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationBCSM_oTermSeizedSpecificInfo) { _cached_encoder_for_EventSpecificInformationBCSM_oTermSeizedSpecificInfo = function (value: EventSpecificInformationBCSM_oTermSeizedSpecificInfo): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EventSpecificInformationBCSM_oTermSeizedSpecificInfo(value, elGetter);
}


/* eslint-enable */
