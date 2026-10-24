/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type BackwardGVNS, _decode_BackwardGVNS, _encode_BackwardGVNS } from "../IN-SSF-SCF-datatypes/BackwardGVNS.ta.mjs";
// export { BackwardGVNS, _decode_BackwardGVNS, _encode_BackwardGVNS } from "../IN-SSF-SCF-datatypes/BackwardGVNS.ta.mjs";


/**
 * @summary EventSpecificInformationBCSM_oAnswerSpecificInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventSpecificInformationBCSM-oAnswerSpecificInfo ::=
 * SEQUENCE {
 *   backwardGVNS [0] BackwardGVNS OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class EventSpecificInformationBCSM_oAnswerSpecificInfo {
    /**
     * @summary `backwardGVNS`.
     * @public
     * @readonly
     */
    readonly backwardGVNS: OPTIONAL<BackwardGVNS>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        backwardGVNS?: OPTIONAL<BackwardGVNS>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.backwardGVNS = backwardGVNS;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a EventSpecificInformationBCSM_oAnswerSpecificInfo
     * @description
     * 
     * This takes an `object` and converts it to a `EventSpecificInformationBCSM_oAnswerSpecificInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EventSpecificInformationBCSM_oAnswerSpecificInfo`.
     * @returns {EventSpecificInformationBCSM_oAnswerSpecificInfo}
     */
    public static _from_object (_o: { [_K in keyof (EventSpecificInformationBCSM_oAnswerSpecificInfo)]: (EventSpecificInformationBCSM_oAnswerSpecificInfo)[_K] }): EventSpecificInformationBCSM_oAnswerSpecificInfo {
        return new EventSpecificInformationBCSM_oAnswerSpecificInfo(_o.backwardGVNS, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EventSpecificInformationBCSM_oAnswerSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_oAnswerSpecificInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("backwardGVNS", true, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of EventSpecificInformationBCSM_oAnswerSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_oAnswerSpecificInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EventSpecificInformationBCSM_oAnswerSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EventSpecificInformationBCSM_oAnswerSpecificInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EventSpecificInformationBCSM_oAnswerSpecificInfo: $.ASN1Decoder<EventSpecificInformationBCSM_oAnswerSpecificInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventSpecificInformationBCSM_oAnswerSpecificInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventSpecificInformationBCSM_oAnswerSpecificInfo (el: _Element): EventSpecificInformationBCSM_oAnswerSpecificInfo {
    if (!_cached_decoder_for_EventSpecificInformationBCSM_oAnswerSpecificInfo) { _cached_decoder_for_EventSpecificInformationBCSM_oAnswerSpecificInfo = function (el: _Element): EventSpecificInformationBCSM_oAnswerSpecificInfo {
    let backwardGVNS: OPTIONAL<BackwardGVNS>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "backwardGVNS": (_el: _Element): void => { backwardGVNS = $._decode_implicit<BackwardGVNS>(() => _decode_BackwardGVNS)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_oAnswerSpecificInfo,
        _extension_additions_list_spec_for_EventSpecificInformationBCSM_oAnswerSpecificInfo,
        _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_oAnswerSpecificInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EventSpecificInformationBCSM_oAnswerSpecificInfo(
        backwardGVNS,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EventSpecificInformationBCSM_oAnswerSpecificInfo(el);
}

let _cached_encoder_for_EventSpecificInformationBCSM_oAnswerSpecificInfo: $.ASN1Encoder<EventSpecificInformationBCSM_oAnswerSpecificInfo> | null = null;

/**
 * @summary Encodes a(n) EventSpecificInformationBCSM_oAnswerSpecificInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventSpecificInformationBCSM_oAnswerSpecificInfo, encoded as an ASN.1 Element.
 */
export
function _encode_EventSpecificInformationBCSM_oAnswerSpecificInfo (value: EventSpecificInformationBCSM_oAnswerSpecificInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationBCSM_oAnswerSpecificInfo) { _cached_encoder_for_EventSpecificInformationBCSM_oAnswerSpecificInfo = function (value: EventSpecificInformationBCSM_oAnswerSpecificInfo, elGetter: $.ASN1Encoder<EventSpecificInformationBCSM_oAnswerSpecificInfo>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(1 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.backwardGVNS !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_BackwardGVNS, $.BER)(value.backwardGVNS, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EventSpecificInformationBCSM_oAnswerSpecificInfo(value, elGetter);
}


/* eslint-enable */
