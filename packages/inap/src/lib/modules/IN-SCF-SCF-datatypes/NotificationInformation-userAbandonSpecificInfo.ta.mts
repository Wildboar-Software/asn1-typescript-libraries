/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NotificationInformation_userAbandonSpecificInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NotificationInformation-userAbandonSpecificInfo ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class NotificationInformation_userAbandonSpecificInfo {
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a NotificationInformation_userAbandonSpecificInfo
     * @description
     * 
     * This takes an `object` and converts it to a `NotificationInformation_userAbandonSpecificInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NotificationInformation_userAbandonSpecificInfo`.
     * @returns {NotificationInformation_userAbandonSpecificInfo}
     */
    public static _from_object (_o: { [_K in keyof (NotificationInformation_userAbandonSpecificInfo)]: (NotificationInformation_userAbandonSpecificInfo)[_K] }): NotificationInformation_userAbandonSpecificInfo {
        return new NotificationInformation_userAbandonSpecificInfo(_o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of NotificationInformation_userAbandonSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NotificationInformation_userAbandonSpecificInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Trailing Root Component Types of NotificationInformation_userAbandonSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NotificationInformation_userAbandonSpecificInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NotificationInformation_userAbandonSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NotificationInformation_userAbandonSpecificInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NotificationInformation_userAbandonSpecificInfo: $.ASN1Decoder<NotificationInformation_userAbandonSpecificInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NotificationInformation_userAbandonSpecificInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NotificationInformation_userAbandonSpecificInfo (el: _Element): NotificationInformation_userAbandonSpecificInfo {
    if (!_cached_decoder_for_NotificationInformation_userAbandonSpecificInfo) { _cached_decoder_for_NotificationInformation_userAbandonSpecificInfo = function (el: _Element): NotificationInformation_userAbandonSpecificInfo {
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NotificationInformation_userAbandonSpecificInfo,
        _extension_additions_list_spec_for_NotificationInformation_userAbandonSpecificInfo,
        _root_component_type_list_2_spec_for_NotificationInformation_userAbandonSpecificInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new NotificationInformation_userAbandonSpecificInfo(
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_NotificationInformation_userAbandonSpecificInfo(el);
}

let _cached_encoder_for_NotificationInformation_userAbandonSpecificInfo: $.ASN1Encoder<NotificationInformation_userAbandonSpecificInfo> | null = null;

/**
 * @summary Encodes a(n) NotificationInformation_userAbandonSpecificInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotificationInformation_userAbandonSpecificInfo, encoded as an ASN.1 Element.
 */
export
function _encode_NotificationInformation_userAbandonSpecificInfo (value: NotificationInformation_userAbandonSpecificInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NotificationInformation_userAbandonSpecificInfo) { _cached_encoder_for_NotificationInformation_userAbandonSpecificInfo = function (value: NotificationInformation_userAbandonSpecificInfo, elGetter: $.ASN1Encoder<NotificationInformation_userAbandonSpecificInfo>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(_unrecognized ? _unrecognized.length : 0);
    let _components_i = 0;
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_NotificationInformation_userAbandonSpecificInfo(value, elGetter);
}


/* eslint-enable */
