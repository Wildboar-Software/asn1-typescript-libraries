/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OCTET_STRING,
    type OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EventSpecificInformationBCUSM_componentReceivedSpecificInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventSpecificInformationBCUSM-componentReceivedSpecificInfo ::=
 * SEQUENCE {
 *   componentReceivedInfo [0] OCTET STRING OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class EventSpecificInformationBCUSM_componentReceivedSpecificInfo {
    /**
     * @summary `componentReceivedInfo`.
     * @public
     * @readonly
     */
    readonly componentReceivedInfo: OPTIONAL<OCTET_STRING>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        componentReceivedInfo?: OPTIONAL<OCTET_STRING>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.componentReceivedInfo = componentReceivedInfo;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a EventSpecificInformationBCUSM_componentReceivedSpecificInfo
     * @description
     * 
     * This takes an `object` and converts it to a `EventSpecificInformationBCUSM_componentReceivedSpecificInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EventSpecificInformationBCUSM_componentReceivedSpecificInfo`.
     * @returns {EventSpecificInformationBCUSM_componentReceivedSpecificInfo}
     */
    public static _from_object (_o: { [_K in keyof (EventSpecificInformationBCUSM_componentReceivedSpecificInfo)]: (EventSpecificInformationBCUSM_componentReceivedSpecificInfo)[_K] }): EventSpecificInformationBCUSM_componentReceivedSpecificInfo {
        return new EventSpecificInformationBCUSM_componentReceivedSpecificInfo(_o.componentReceivedInfo, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EventSpecificInformationBCUSM_componentReceivedSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EventSpecificInformationBCUSM_componentReceivedSpecificInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("componentReceivedInfo", true, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of EventSpecificInformationBCUSM_componentReceivedSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EventSpecificInformationBCUSM_componentReceivedSpecificInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EventSpecificInformationBCUSM_componentReceivedSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EventSpecificInformationBCUSM_componentReceivedSpecificInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EventSpecificInformationBCUSM_componentReceivedSpecificInfo: $.ASN1Decoder<EventSpecificInformationBCUSM_componentReceivedSpecificInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventSpecificInformationBCUSM_componentReceivedSpecificInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventSpecificInformationBCUSM_componentReceivedSpecificInfo (el: _Element): EventSpecificInformationBCUSM_componentReceivedSpecificInfo {
    if (!_cached_decoder_for_EventSpecificInformationBCUSM_componentReceivedSpecificInfo) { _cached_decoder_for_EventSpecificInformationBCUSM_componentReceivedSpecificInfo = function (el: _Element): EventSpecificInformationBCUSM_componentReceivedSpecificInfo {
    let componentReceivedInfo: OPTIONAL<OCTET_STRING>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "componentReceivedInfo": (_el: _Element): void => { componentReceivedInfo = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventSpecificInformationBCUSM_componentReceivedSpecificInfo,
        _extension_additions_list_spec_for_EventSpecificInformationBCUSM_componentReceivedSpecificInfo,
        _root_component_type_list_2_spec_for_EventSpecificInformationBCUSM_componentReceivedSpecificInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EventSpecificInformationBCUSM_componentReceivedSpecificInfo(
        componentReceivedInfo,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EventSpecificInformationBCUSM_componentReceivedSpecificInfo(el);
}

let _cached_encoder_for_EventSpecificInformationBCUSM_componentReceivedSpecificInfo: $.ASN1Encoder<EventSpecificInformationBCUSM_componentReceivedSpecificInfo> | null = null;

/**
 * @summary Encodes a(n) EventSpecificInformationBCUSM_componentReceivedSpecificInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventSpecificInformationBCUSM_componentReceivedSpecificInfo, encoded as an ASN.1 Element.
 */
export
function _encode_EventSpecificInformationBCUSM_componentReceivedSpecificInfo (value: EventSpecificInformationBCUSM_componentReceivedSpecificInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationBCUSM_componentReceivedSpecificInfo) { _cached_encoder_for_EventSpecificInformationBCUSM_componentReceivedSpecificInfo = function (value: EventSpecificInformationBCUSM_componentReceivedSpecificInfo, elGetter: $.ASN1Encoder<EventSpecificInformationBCUSM_componentReceivedSpecificInfo>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(1 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.componentReceivedInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.componentReceivedInfo, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EventSpecificInformationBCUSM_componentReceivedSpecificInfo(value, elGetter);
}


/* eslint-enable */
