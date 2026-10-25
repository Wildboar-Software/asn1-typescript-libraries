/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-CS-1-Datatypes/CalledPartyNumber.ta.mjs";
// export { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-CS-1-Datatypes/CalledPartyNumber.ta.mjs";


/**
 * @summary EventSpecificInformationBCSM_analyzedInfoSpecificInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventSpecificInformationBCSM-analyzedInfoSpecificInfo ::=
 * SEQUENCE {
 *   calledPartynumber [0] CalledPartyNumber,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class EventSpecificInformationBCSM_analyzedInfoSpecificInfo {
    /**
     * @summary `calledPartynumber`.
     * @public
     * @readonly
     */
    readonly calledPartynumber: CalledPartyNumber;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        calledPartynumber: CalledPartyNumber,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.calledPartynumber = calledPartynumber;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a EventSpecificInformationBCSM_analyzedInfoSpecificInfo
     * @description
     * 
     * This takes an `object` and converts it to a `EventSpecificInformationBCSM_analyzedInfoSpecificInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EventSpecificInformationBCSM_analyzedInfoSpecificInfo`.
     * @returns {EventSpecificInformationBCSM_analyzedInfoSpecificInfo}
     */
    public static _from_object (_o: { [_K in keyof (EventSpecificInformationBCSM_analyzedInfoSpecificInfo)]: (EventSpecificInformationBCSM_analyzedInfoSpecificInfo)[_K] }): EventSpecificInformationBCSM_analyzedInfoSpecificInfo {
        return new EventSpecificInformationBCSM_analyzedInfoSpecificInfo(_o.calledPartynumber, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EventSpecificInformationBCSM_analyzedInfoSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_analyzedInfoSpecificInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("calledPartynumber", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of EventSpecificInformationBCSM_analyzedInfoSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_analyzedInfoSpecificInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EventSpecificInformationBCSM_analyzedInfoSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EventSpecificInformationBCSM_analyzedInfoSpecificInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EventSpecificInformationBCSM_analyzedInfoSpecificInfo: $.ASN1Decoder<EventSpecificInformationBCSM_analyzedInfoSpecificInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventSpecificInformationBCSM_analyzedInfoSpecificInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventSpecificInformationBCSM_analyzedInfoSpecificInfo (el: _Element): EventSpecificInformationBCSM_analyzedInfoSpecificInfo {
    if (!_cached_decoder_for_EventSpecificInformationBCSM_analyzedInfoSpecificInfo) { _cached_decoder_for_EventSpecificInformationBCSM_analyzedInfoSpecificInfo = function (el: _Element): EventSpecificInformationBCSM_analyzedInfoSpecificInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("EventSpecificInformationBCSM-analyzedInfoSpecificInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "calledPartynumber";
    const calledPartynumber: CalledPartyNumber = $._decode_implicit<CalledPartyNumber>(() => _decode_CalledPartyNumber)(sequence[0]);
    return new EventSpecificInformationBCSM_analyzedInfoSpecificInfo(
        calledPartynumber,
        sequence.slice(1),
    );
}; }
    return _cached_decoder_for_EventSpecificInformationBCSM_analyzedInfoSpecificInfo(el);
}

let _cached_encoder_for_EventSpecificInformationBCSM_analyzedInfoSpecificInfo: $.ASN1Encoder<EventSpecificInformationBCSM_analyzedInfoSpecificInfo> | null = null;

/**
 * @summary Encodes a(n) EventSpecificInformationBCSM_analyzedInfoSpecificInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventSpecificInformationBCSM_analyzedInfoSpecificInfo, encoded as an ASN.1 Element.
 */
export
function _encode_EventSpecificInformationBCSM_analyzedInfoSpecificInfo (value: EventSpecificInformationBCSM_analyzedInfoSpecificInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationBCSM_analyzedInfoSpecificInfo) { _cached_encoder_for_EventSpecificInformationBCSM_analyzedInfoSpecificInfo = function (value: EventSpecificInformationBCSM_analyzedInfoSpecificInfo, elGetter: $.ASN1Encoder<EventSpecificInformationBCSM_analyzedInfoSpecificInfo>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(1 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_CalledPartyNumber, $.BER)(value.calledPartynumber, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EventSpecificInformationBCSM_analyzedInfoSpecificInfo(value, elGetter);
}


/* eslint-enable */
