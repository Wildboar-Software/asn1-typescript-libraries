/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Cause, _decode_Cause, _encode_Cause } from "../IN-CS3-SSF-SCF-datatypes/Cause.ta.mjs";
// export { Cause, _decode_Cause, _encode_Cause } from "../IN-CS3-SSF-SCF-datatypes/Cause.ta.mjs";


/**
 * @summary EventSpecificInformationBCSM_orininationAttemptDenied
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventSpecificInformationBCSM-orininationAttemptDenied ::=
 * SEQUENCE {
 *   originationDeniedCause [0] Cause OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class EventSpecificInformationBCSM_orininationAttemptDenied {
    /**
     * @summary `originationDeniedCause`.
     * @public
     * @readonly
     */
    readonly originationDeniedCause: OPTIONAL<Cause>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        originationDeniedCause?: OPTIONAL<Cause>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.originationDeniedCause = originationDeniedCause;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a EventSpecificInformationBCSM_orininationAttemptDenied
     * @description
     * 
     * This takes an `object` and converts it to a `EventSpecificInformationBCSM_orininationAttemptDenied`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EventSpecificInformationBCSM_orininationAttemptDenied`.
     * @returns {EventSpecificInformationBCSM_orininationAttemptDenied}
     */
    public static _from_object (_o: { [_K in keyof (EventSpecificInformationBCSM_orininationAttemptDenied)]: (EventSpecificInformationBCSM_orininationAttemptDenied)[_K] }): EventSpecificInformationBCSM_orininationAttemptDenied {
        return new EventSpecificInformationBCSM_orininationAttemptDenied(_o.originationDeniedCause, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EventSpecificInformationBCSM_orininationAttemptDenied
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_orininationAttemptDenied: $.ComponentSpec[] = [
    new $.ComponentSpec("originationDeniedCause", true, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of EventSpecificInformationBCSM_orininationAttemptDenied
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_orininationAttemptDenied: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EventSpecificInformationBCSM_orininationAttemptDenied
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EventSpecificInformationBCSM_orininationAttemptDenied: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EventSpecificInformationBCSM_orininationAttemptDenied: $.ASN1Decoder<EventSpecificInformationBCSM_orininationAttemptDenied> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventSpecificInformationBCSM_orininationAttemptDenied
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventSpecificInformationBCSM_orininationAttemptDenied (el: _Element): EventSpecificInformationBCSM_orininationAttemptDenied {
    if (!_cached_decoder_for_EventSpecificInformationBCSM_orininationAttemptDenied) { _cached_decoder_for_EventSpecificInformationBCSM_orininationAttemptDenied = function (el: _Element): EventSpecificInformationBCSM_orininationAttemptDenied {
    let originationDeniedCause: OPTIONAL<Cause>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "originationDeniedCause": (_el: _Element): void => { originationDeniedCause = $._decode_implicit<Cause>(() => _decode_Cause)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_orininationAttemptDenied,
        _extension_additions_list_spec_for_EventSpecificInformationBCSM_orininationAttemptDenied,
        _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_orininationAttemptDenied,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EventSpecificInformationBCSM_orininationAttemptDenied(
        originationDeniedCause,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EventSpecificInformationBCSM_orininationAttemptDenied(el);
}

let _cached_encoder_for_EventSpecificInformationBCSM_orininationAttemptDenied: $.ASN1Encoder<EventSpecificInformationBCSM_orininationAttemptDenied> | null = null;

/**
 * @summary Encodes a(n) EventSpecificInformationBCSM_orininationAttemptDenied into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventSpecificInformationBCSM_orininationAttemptDenied, encoded as an ASN.1 Element.
 */
export
function _encode_EventSpecificInformationBCSM_orininationAttemptDenied (value: EventSpecificInformationBCSM_orininationAttemptDenied, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationBCSM_orininationAttemptDenied) { _cached_encoder_for_EventSpecificInformationBCSM_orininationAttemptDenied = function (value: EventSpecificInformationBCSM_orininationAttemptDenied, elGetter: $.ASN1Encoder<EventSpecificInformationBCSM_orininationAttemptDenied>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(1 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.originationDeniedCause !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_Cause, $.BER)(value.originationDeniedCause, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EventSpecificInformationBCSM_orininationAttemptDenied(value, elGetter);
}


/* eslint-enable */
