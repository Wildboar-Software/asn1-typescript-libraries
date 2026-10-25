/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";


/**
 * @summary ContinueAssociationArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ContinueAssociationArg ::= SEQUENCE {
 *   extensions  [0]  Extensions OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class ContinueAssociationArg {
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<Extensions>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        extensions?: OPTIONAL<Extensions>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.extensions = extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ContinueAssociationArg
     * @description
     * 
     * This takes an `object` and converts it to a `ContinueAssociationArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ContinueAssociationArg`.
     * @returns {ContinueAssociationArg}
     */
    public static _from_object (_o: { [_K in keyof (ContinueAssociationArg)]: (ContinueAssociationArg)[_K] }): ContinueAssociationArg {
        return new ContinueAssociationArg(_o.extensions, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ContinueAssociationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ContinueAssociationArg: $.ComponentSpec[] = [
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of ContinueAssociationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ContinueAssociationArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ContinueAssociationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ContinueAssociationArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ContinueAssociationArg: $.ASN1Decoder<ContinueAssociationArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ContinueAssociationArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ContinueAssociationArg (el: _Element): ContinueAssociationArg {
    if (!_cached_decoder_for_ContinueAssociationArg) { _cached_decoder_for_ContinueAssociationArg = function (el: _Element): ContinueAssociationArg {
    let extensions: OPTIONAL<Extensions>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ContinueAssociationArg,
        _extension_additions_list_spec_for_ContinueAssociationArg,
        _root_component_type_list_2_spec_for_ContinueAssociationArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ContinueAssociationArg(
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ContinueAssociationArg(el);
}

let _cached_encoder_for_ContinueAssociationArg: $.ASN1Encoder<ContinueAssociationArg> | null = null;

/**
 * @summary Encodes a(n) ContinueAssociationArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContinueAssociationArg, encoded as an ASN.1 Element.
 */
export
function _encode_ContinueAssociationArg (value: ContinueAssociationArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ContinueAssociationArg) { _cached_encoder_for_ContinueAssociationArg = function (value: ContinueAssociationArg, elGetter: $.ASN1Encoder<ContinueAssociationArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(1 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ContinueAssociationArg(value, elGetter);
}


/* eslint-enable */
