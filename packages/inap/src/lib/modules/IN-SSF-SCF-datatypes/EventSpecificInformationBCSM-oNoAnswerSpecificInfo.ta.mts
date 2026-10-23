/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Cause, _decode_Cause, _encode_Cause } from "../IN-SSF-SCF-datatypes/Cause.ta.mjs";
// export { Cause, _decode_Cause, _encode_Cause } from "../IN-SSF-SCF-datatypes/Cause.ta.mjs";


/**
 * @summary EventSpecificInformationBCSM_oNoAnswerSpecificInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventSpecificInformationBCSM-oNoAnswerSpecificInfo ::=
 * SEQUENCE {
 *   ...,
 *   cause [0] Cause OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EventSpecificInformationBCSM_oNoAnswerSpecificInfo {
    /**
     * @summary `cause`.
     * @public
     * @readonly
     */
    readonly cause: OPTIONAL<Cause>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        cause: OPTIONAL<Cause>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.cause = cause;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a EventSpecificInformationBCSM_oNoAnswerSpecificInfo
     * @description
     * 
     * This takes an `object` and converts it to a `EventSpecificInformationBCSM_oNoAnswerSpecificInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EventSpecificInformationBCSM_oNoAnswerSpecificInfo`.
     * @returns {EventSpecificInformationBCSM_oNoAnswerSpecificInfo}
     */
    public static _from_object (_o: { [_K in keyof (EventSpecificInformationBCSM_oNoAnswerSpecificInfo)]: (EventSpecificInformationBCSM_oNoAnswerSpecificInfo)[_K] }): EventSpecificInformationBCSM_oNoAnswerSpecificInfo {
        return new EventSpecificInformationBCSM_oNoAnswerSpecificInfo(_o.cause, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EventSpecificInformationBCSM_oNoAnswerSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_oNoAnswerSpecificInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Trailing Root Component Types of EventSpecificInformationBCSM_oNoAnswerSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_oNoAnswerSpecificInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EventSpecificInformationBCSM_oNoAnswerSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EventSpecificInformationBCSM_oNoAnswerSpecificInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("cause", true, $.hasTag(_TagClass.context, 0))
];

let _cached_decoder_for_EventSpecificInformationBCSM_oNoAnswerSpecificInfo: $.ASN1Decoder<EventSpecificInformationBCSM_oNoAnswerSpecificInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventSpecificInformationBCSM_oNoAnswerSpecificInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventSpecificInformationBCSM_oNoAnswerSpecificInfo (el: _Element): EventSpecificInformationBCSM_oNoAnswerSpecificInfo {
    if (!_cached_decoder_for_EventSpecificInformationBCSM_oNoAnswerSpecificInfo) { _cached_decoder_for_EventSpecificInformationBCSM_oNoAnswerSpecificInfo = function (el: _Element): EventSpecificInformationBCSM_oNoAnswerSpecificInfo {
    let cause: OPTIONAL<Cause>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "cause": (_el: _Element): void => { cause = $._decode_implicit<Cause>(() => _decode_Cause)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_oNoAnswerSpecificInfo,
        _extension_additions_list_spec_for_EventSpecificInformationBCSM_oNoAnswerSpecificInfo,
        _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_oNoAnswerSpecificInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EventSpecificInformationBCSM_oNoAnswerSpecificInfo(
        cause,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EventSpecificInformationBCSM_oNoAnswerSpecificInfo(el);
}

let _cached_encoder_for_EventSpecificInformationBCSM_oNoAnswerSpecificInfo: $.ASN1Encoder<EventSpecificInformationBCSM_oNoAnswerSpecificInfo> | null = null;

/**
 * @summary Encodes a(n) EventSpecificInformationBCSM_oNoAnswerSpecificInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventSpecificInformationBCSM_oNoAnswerSpecificInfo, encoded as an ASN.1 Element.
 */
export
function _encode_EventSpecificInformationBCSM_oNoAnswerSpecificInfo (value: EventSpecificInformationBCSM_oNoAnswerSpecificInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationBCSM_oNoAnswerSpecificInfo) { _cached_encoder_for_EventSpecificInformationBCSM_oNoAnswerSpecificInfo = function (value: EventSpecificInformationBCSM_oNoAnswerSpecificInfo, elGetter: $.ASN1Encoder<EventSpecificInformationBCSM_oNoAnswerSpecificInfo>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(1 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.cause !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_Cause, $.BER)(value.cause, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EventSpecificInformationBCSM_oNoAnswerSpecificInfo(value, elGetter);
}


/* eslint-enable */
