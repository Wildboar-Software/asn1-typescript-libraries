/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";


/**
 * @summary CreateCallSegmentAssociationArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CreateCallSegmentAssociationArg ::= SEQUENCE {
 *   extensions  [0]  Extensions OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class CreateCallSegmentAssociationArg {
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
        extensions: OPTIONAL<Extensions>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.extensions = extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a CreateCallSegmentAssociationArg
     * @description
     * 
     * This takes an `object` and converts it to a `CreateCallSegmentAssociationArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CreateCallSegmentAssociationArg`.
     * @returns {CreateCallSegmentAssociationArg}
     */
    public static _from_object (_o: { [_K in keyof (CreateCallSegmentAssociationArg)]: (CreateCallSegmentAssociationArg)[_K] }): CreateCallSegmentAssociationArg {
        return new CreateCallSegmentAssociationArg(_o.extensions, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CreateCallSegmentAssociationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CreateCallSegmentAssociationArg: $.ComponentSpec[] = [
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of CreateCallSegmentAssociationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CreateCallSegmentAssociationArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CreateCallSegmentAssociationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CreateCallSegmentAssociationArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CreateCallSegmentAssociationArg: $.ASN1Decoder<CreateCallSegmentAssociationArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CreateCallSegmentAssociationArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CreateCallSegmentAssociationArg (el: _Element): CreateCallSegmentAssociationArg {
    if (!_cached_decoder_for_CreateCallSegmentAssociationArg) { _cached_decoder_for_CreateCallSegmentAssociationArg = function (el: _Element): CreateCallSegmentAssociationArg {
    let extensions: OPTIONAL<Extensions>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CreateCallSegmentAssociationArg,
        _extension_additions_list_spec_for_CreateCallSegmentAssociationArg,
        _root_component_type_list_2_spec_for_CreateCallSegmentAssociationArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CreateCallSegmentAssociationArg(
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CreateCallSegmentAssociationArg(el);
}

let _cached_encoder_for_CreateCallSegmentAssociationArg: $.ASN1Encoder<CreateCallSegmentAssociationArg> | null = null;

/**
 * @summary Encodes a(n) CreateCallSegmentAssociationArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CreateCallSegmentAssociationArg, encoded as an ASN.1 Element.
 */
export
function _encode_CreateCallSegmentAssociationArg (value: CreateCallSegmentAssociationArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CreateCallSegmentAssociationArg) { _cached_encoder_for_CreateCallSegmentAssociationArg = function (value: CreateCallSegmentAssociationArg, elGetter: $.ASN1Encoder<CreateCallSegmentAssociationArg>): _Element {
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
    return _cached_encoder_for_CreateCallSegmentAssociationArg(value, elGetter);
}


/* eslint-enable */
