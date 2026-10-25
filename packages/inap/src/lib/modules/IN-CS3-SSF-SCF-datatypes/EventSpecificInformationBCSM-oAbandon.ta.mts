/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Cause, _decode_Cause, _encode_Cause } from "../IN-CS3-SSF-SCF-datatypes/Cause.ta.mjs";
// export { Cause, _decode_Cause, _encode_Cause } from "../IN-CS3-SSF-SCF-datatypes/Cause.ta.mjs";


/**
 * @summary EventSpecificInformationBCSM_oAbandon
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventSpecificInformationBCSM-oAbandon ::=
 * SEQUENCE {
 *   abandonCause [0] Cause OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class EventSpecificInformationBCSM_oAbandon {
    /**
     * @summary `abandonCause`.
     * @public
     * @readonly
     */
    readonly abandonCause: OPTIONAL<Cause>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        abandonCause?: OPTIONAL<Cause>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.abandonCause = abandonCause;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a EventSpecificInformationBCSM_oAbandon
     * @description
     * 
     * This takes an `object` and converts it to a `EventSpecificInformationBCSM_oAbandon`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EventSpecificInformationBCSM_oAbandon`.
     * @returns {EventSpecificInformationBCSM_oAbandon}
     */
    public static _from_object (_o: { [_K in keyof (EventSpecificInformationBCSM_oAbandon)]: (EventSpecificInformationBCSM_oAbandon)[_K] }): EventSpecificInformationBCSM_oAbandon {
        return new EventSpecificInformationBCSM_oAbandon(_o.abandonCause, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EventSpecificInformationBCSM_oAbandon
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_oAbandon: $.ComponentSpec[] = [
    new $.ComponentSpec("abandonCause", true, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of EventSpecificInformationBCSM_oAbandon
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_oAbandon: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EventSpecificInformationBCSM_oAbandon
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EventSpecificInformationBCSM_oAbandon: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EventSpecificInformationBCSM_oAbandon: $.ASN1Decoder<EventSpecificInformationBCSM_oAbandon> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventSpecificInformationBCSM_oAbandon
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventSpecificInformationBCSM_oAbandon (el: _Element): EventSpecificInformationBCSM_oAbandon {
    if (!_cached_decoder_for_EventSpecificInformationBCSM_oAbandon) { _cached_decoder_for_EventSpecificInformationBCSM_oAbandon = function (el: _Element): EventSpecificInformationBCSM_oAbandon {
    let abandonCause: OPTIONAL<Cause>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "abandonCause": (_el: _Element): void => { abandonCause = $._decode_implicit<Cause>(() => _decode_Cause)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_oAbandon,
        _extension_additions_list_spec_for_EventSpecificInformationBCSM_oAbandon,
        _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_oAbandon,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EventSpecificInformationBCSM_oAbandon(
        abandonCause,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EventSpecificInformationBCSM_oAbandon(el);
}

let _cached_encoder_for_EventSpecificInformationBCSM_oAbandon: $.ASN1Encoder<EventSpecificInformationBCSM_oAbandon> | null = null;

/**
 * @summary Encodes a(n) EventSpecificInformationBCSM_oAbandon into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventSpecificInformationBCSM_oAbandon, encoded as an ASN.1 Element.
 */
export
function _encode_EventSpecificInformationBCSM_oAbandon (value: EventSpecificInformationBCSM_oAbandon, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationBCSM_oAbandon) { _cached_encoder_for_EventSpecificInformationBCSM_oAbandon = function (value: EventSpecificInformationBCSM_oAbandon, elGetter: $.ASN1Encoder<EventSpecificInformationBCSM_oAbandon>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(1 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.abandonCause !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_Cause, $.BER)(value.abandonCause, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EventSpecificInformationBCSM_oAbandon(value, elGetter);
}


/* eslint-enable */
