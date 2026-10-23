/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EventSpecificInformationBCSM_tSuspend
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventSpecificInformationBCSM-tSuspend ::=
 * SEQUENCE {
 *   -- no specific info defined
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class EventSpecificInformationBCSM_tSuspend {
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
     * @summary Restructures an object into a EventSpecificInformationBCSM_tSuspend
     * @description
     * 
     * This takes an `object` and converts it to a `EventSpecificInformationBCSM_tSuspend`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EventSpecificInformationBCSM_tSuspend`.
     * @returns {EventSpecificInformationBCSM_tSuspend}
     */
    public static _from_object (_o: { [_K in keyof (EventSpecificInformationBCSM_tSuspend)]: (EventSpecificInformationBCSM_tSuspend)[_K] }): EventSpecificInformationBCSM_tSuspend {
        return new EventSpecificInformationBCSM_tSuspend(_o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EventSpecificInformationBCSM_tSuspend
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_tSuspend: $.ComponentSpec[] = [
    
];

/**
 * @summary The Trailing Root Component Types of EventSpecificInformationBCSM_tSuspend
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_tSuspend: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EventSpecificInformationBCSM_tSuspend
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EventSpecificInformationBCSM_tSuspend: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EventSpecificInformationBCSM_tSuspend: $.ASN1Decoder<EventSpecificInformationBCSM_tSuspend> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventSpecificInformationBCSM_tSuspend
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventSpecificInformationBCSM_tSuspend (el: _Element): EventSpecificInformationBCSM_tSuspend {
    if (!_cached_decoder_for_EventSpecificInformationBCSM_tSuspend) { _cached_decoder_for_EventSpecificInformationBCSM_tSuspend = function (el: _Element): EventSpecificInformationBCSM_tSuspend {
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_tSuspend,
        _extension_additions_list_spec_for_EventSpecificInformationBCSM_tSuspend,
        _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_tSuspend,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EventSpecificInformationBCSM_tSuspend(
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EventSpecificInformationBCSM_tSuspend(el);
}

let _cached_encoder_for_EventSpecificInformationBCSM_tSuspend: $.ASN1Encoder<EventSpecificInformationBCSM_tSuspend> | null = null;

/**
 * @summary Encodes a(n) EventSpecificInformationBCSM_tSuspend into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventSpecificInformationBCSM_tSuspend, encoded as an ASN.1 Element.
 */
export
function _encode_EventSpecificInformationBCSM_tSuspend (value: EventSpecificInformationBCSM_tSuspend, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationBCSM_tSuspend) { _cached_encoder_for_EventSpecificInformationBCSM_tSuspend = function (value: EventSpecificInformationBCSM_tSuspend, elGetter: $.ASN1Encoder<EventSpecificInformationBCSM_tSuspend>): _Element {
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
    return _cached_encoder_for_EventSpecificInformationBCSM_tSuspend(value, elGetter);
}


/* eslint-enable */
