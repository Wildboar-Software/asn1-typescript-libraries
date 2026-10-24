/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Cause, _decode_Cause, _encode_Cause } from "../IN-SSF-SCF-datatypes/Cause.ta.mjs";
// export { Cause, _decode_Cause, _encode_Cause } from "../IN-SSF-SCF-datatypes/Cause.ta.mjs";


/**
 * @summary EventSpecificInformationBCSM_terminationAttemptDenied
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventSpecificInformationBCSM-terminationAttemptDenied ::=
 * SEQUENCE {
 *   terminationDeniedCause [0] Cause OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class EventSpecificInformationBCSM_terminationAttemptDenied {
    /**
     * @summary `terminationDeniedCause`.
     * @public
     * @readonly
     */
    readonly terminationDeniedCause: OPTIONAL<Cause>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        terminationDeniedCause?: OPTIONAL<Cause>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.terminationDeniedCause = terminationDeniedCause;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a EventSpecificInformationBCSM_terminationAttemptDenied
     * @description
     * 
     * This takes an `object` and converts it to a `EventSpecificInformationBCSM_terminationAttemptDenied`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EventSpecificInformationBCSM_terminationAttemptDenied`.
     * @returns {EventSpecificInformationBCSM_terminationAttemptDenied}
     */
    public static _from_object (_o: { [_K in keyof (EventSpecificInformationBCSM_terminationAttemptDenied)]: (EventSpecificInformationBCSM_terminationAttemptDenied)[_K] }): EventSpecificInformationBCSM_terminationAttemptDenied {
        return new EventSpecificInformationBCSM_terminationAttemptDenied(_o.terminationDeniedCause, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EventSpecificInformationBCSM_terminationAttemptDenied
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_terminationAttemptDenied: $.ComponentSpec[] = [
    new $.ComponentSpec("terminationDeniedCause", true, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of EventSpecificInformationBCSM_terminationAttemptDenied
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_terminationAttemptDenied: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EventSpecificInformationBCSM_terminationAttemptDenied
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EventSpecificInformationBCSM_terminationAttemptDenied: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EventSpecificInformationBCSM_terminationAttemptDenied: $.ASN1Decoder<EventSpecificInformationBCSM_terminationAttemptDenied> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventSpecificInformationBCSM_terminationAttemptDenied
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventSpecificInformationBCSM_terminationAttemptDenied (el: _Element): EventSpecificInformationBCSM_terminationAttemptDenied {
    if (!_cached_decoder_for_EventSpecificInformationBCSM_terminationAttemptDenied) { _cached_decoder_for_EventSpecificInformationBCSM_terminationAttemptDenied = function (el: _Element): EventSpecificInformationBCSM_terminationAttemptDenied {
    let terminationDeniedCause: OPTIONAL<Cause>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "terminationDeniedCause": (_el: _Element): void => { terminationDeniedCause = $._decode_implicit<Cause>(() => _decode_Cause)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_terminationAttemptDenied,
        _extension_additions_list_spec_for_EventSpecificInformationBCSM_terminationAttemptDenied,
        _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_terminationAttemptDenied,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EventSpecificInformationBCSM_terminationAttemptDenied(
        terminationDeniedCause,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EventSpecificInformationBCSM_terminationAttemptDenied(el);
}

let _cached_encoder_for_EventSpecificInformationBCSM_terminationAttemptDenied: $.ASN1Encoder<EventSpecificInformationBCSM_terminationAttemptDenied> | null = null;

/**
 * @summary Encodes a(n) EventSpecificInformationBCSM_terminationAttemptDenied into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventSpecificInformationBCSM_terminationAttemptDenied, encoded as an ASN.1 Element.
 */
export
function _encode_EventSpecificInformationBCSM_terminationAttemptDenied (value: EventSpecificInformationBCSM_terminationAttemptDenied, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationBCSM_terminationAttemptDenied) { _cached_encoder_for_EventSpecificInformationBCSM_terminationAttemptDenied = function (value: EventSpecificInformationBCSM_terminationAttemptDenied, elGetter: $.ASN1Encoder<EventSpecificInformationBCSM_terminationAttemptDenied>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(1 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.terminationDeniedCause !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_Cause, $.BER)(value.terminationDeniedCause, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EventSpecificInformationBCSM_terminationAttemptDenied(value, elGetter);
}


/* eslint-enable */
