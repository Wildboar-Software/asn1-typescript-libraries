/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CSAID, _decode_CSAID, _encode_CSAID } from "../IN-SSF-SCF-datatypes/CSAID.ta.mjs";
// export { CSAID, _decode_CSAID, _encode_CSAID } from "../IN-SSF-SCF-datatypes/CSAID.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";


/**
 * @summary CreateCallSegmentAssociationResultArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CreateCallSegmentAssociationResultArg ::= SEQUENCE {
 *   newCallSegmentAssociation  [0]  CSAID,
 *   extensions                 [1]  Extensions OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class CreateCallSegmentAssociationResultArg {
    /**
     * @summary `newCallSegmentAssociation`.
     * @public
     * @readonly
     */
    readonly newCallSegmentAssociation: CSAID;
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
        newCallSegmentAssociation: CSAID,
        extensions?: OPTIONAL<Extensions>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.newCallSegmentAssociation = newCallSegmentAssociation;
        this.extensions = extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a CreateCallSegmentAssociationResultArg
     * @description
     * 
     * This takes an `object` and converts it to a `CreateCallSegmentAssociationResultArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CreateCallSegmentAssociationResultArg`.
     * @returns {CreateCallSegmentAssociationResultArg}
     */
    public static _from_object (_o: { [_K in keyof (CreateCallSegmentAssociationResultArg)]: (CreateCallSegmentAssociationResultArg)[_K] }): CreateCallSegmentAssociationResultArg {
        return new CreateCallSegmentAssociationResultArg(_o.newCallSegmentAssociation, _o.extensions, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CreateCallSegmentAssociationResultArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CreateCallSegmentAssociationResultArg: $.ComponentSpec[] = [
    new $.ComponentSpec("newCallSegmentAssociation", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of CreateCallSegmentAssociationResultArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CreateCallSegmentAssociationResultArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CreateCallSegmentAssociationResultArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CreateCallSegmentAssociationResultArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CreateCallSegmentAssociationResultArg: $.ASN1Decoder<CreateCallSegmentAssociationResultArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CreateCallSegmentAssociationResultArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CreateCallSegmentAssociationResultArg (el: _Element): CreateCallSegmentAssociationResultArg {
    if (!_cached_decoder_for_CreateCallSegmentAssociationResultArg) { _cached_decoder_for_CreateCallSegmentAssociationResultArg = function (el: _Element): CreateCallSegmentAssociationResultArg {
    let newCallSegmentAssociation!: CSAID;
    let extensions: OPTIONAL<Extensions>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "newCallSegmentAssociation": (_el: _Element): void => { newCallSegmentAssociation = $._decode_implicit<CSAID>(() => _decode_CSAID)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CreateCallSegmentAssociationResultArg,
        _extension_additions_list_spec_for_CreateCallSegmentAssociationResultArg,
        _root_component_type_list_2_spec_for_CreateCallSegmentAssociationResultArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CreateCallSegmentAssociationResultArg(
        newCallSegmentAssociation,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CreateCallSegmentAssociationResultArg(el);
}

let _cached_encoder_for_CreateCallSegmentAssociationResultArg: $.ASN1Encoder<CreateCallSegmentAssociationResultArg> | null = null;

/**
 * @summary Encodes a(n) CreateCallSegmentAssociationResultArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CreateCallSegmentAssociationResultArg, encoded as an ASN.1 Element.
 */
export
function _encode_CreateCallSegmentAssociationResultArg (value: CreateCallSegmentAssociationResultArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CreateCallSegmentAssociationResultArg) { _cached_encoder_for_CreateCallSegmentAssociationResultArg = function (value: CreateCallSegmentAssociationResultArg, elGetter: $.ASN1Encoder<CreateCallSegmentAssociationResultArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_CSAID, $.BER)(value.newCallSegmentAssociation, $.BER);
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CreateCallSegmentAssociationResultArg(value, elGetter);
}


/* eslint-enable */
