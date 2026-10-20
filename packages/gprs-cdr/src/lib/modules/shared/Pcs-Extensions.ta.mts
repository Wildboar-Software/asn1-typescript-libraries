/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Pcs_Extensions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Pcs-Extensions ::= SEQUENCE {
 *    ... }
 * ```
 * 
 * @class
 */
export
class Pcs_Extensions {
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
     * @summary Restructures an object into a Pcs_Extensions
     * @description
     * 
     * This takes an `object` and converts it to a `Pcs_Extensions`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Pcs_Extensions`.
     * @returns {Pcs_Extensions}
     */
    public static _from_object (_o: { [_K in keyof (Pcs_Extensions)]: (Pcs_Extensions)[_K] }): Pcs_Extensions {
        return new Pcs_Extensions(_o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of Pcs_Extensions
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Pcs_Extensions: $.ComponentSpec[] = [
    
];

/**
 * @summary The Trailing Root Component Types of Pcs_Extensions
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Pcs_Extensions: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Pcs_Extensions
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Pcs_Extensions: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Pcs_Extensions: $.ASN1Decoder<Pcs_Extensions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Pcs_Extensions
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Pcs_Extensions (el: _Element): Pcs_Extensions {
    if (!_cached_decoder_for_Pcs_Extensions) { _cached_decoder_for_Pcs_Extensions = function (el: _Element): Pcs_Extensions {
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Pcs_Extensions,
        _extension_additions_list_spec_for_Pcs_Extensions,
        _root_component_type_list_2_spec_for_Pcs_Extensions,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Pcs_Extensions(
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Pcs_Extensions(el);
}

let _cached_encoder_for_Pcs_Extensions: $.ASN1Encoder<Pcs_Extensions> | null = null;

/**
 * @summary Encodes a(n) Pcs_Extensions into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Pcs_Extensions, encoded as an ASN.1 Element.
 */
export
function _encode_Pcs_Extensions (value: Pcs_Extensions, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Pcs_Extensions) { _cached_encoder_for_Pcs_Extensions = function (value: Pcs_Extensions, _elGetter: $.ASN1Encoder<Pcs_Extensions>): _Element {
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
    return _cached_encoder_for_Pcs_Extensions(value, elGetter);
}


/* eslint-enable */
