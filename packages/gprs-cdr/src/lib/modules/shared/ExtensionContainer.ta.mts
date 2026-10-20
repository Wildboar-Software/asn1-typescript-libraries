/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PrivateExtension, _decode_PrivateExtension, _encode_PrivateExtension } from "./PrivateExtension.ta.mjs";
// export { PrivateExtension, _decode_PrivateExtension, _encode_PrivateExtension } from "./PrivateExtension.ta.mjs";
import { Pcs_Extensions, _decode_Pcs_Extensions, _encode_Pcs_Extensions } from "./Pcs-Extensions.ta.mjs";
// export { Pcs_Extensions, _decode_Pcs_Extensions, _encode_Pcs_Extensions } from "./Pcs-Extensions.ta.mjs";


/**
 * @summary ExtensionContainer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtensionContainer ::= SEQUENCE {
 *    privateExtensionList   [0] IMPLICIT SEQUENCE  ( SIZE( 1 .. 10 ) ) OF
 *       PrivateExtension OPTIONAL,
 *    pcs-Extensions         [1] IMPLICIT Pcs-Extensions OPTIONAL,
 *    ... }
 * ```
 * 
 * @class
 */
export
class ExtensionContainer {
    /**
     * @summary `privateExtensionList`.
     * @public
     * @readonly
     */
    readonly privateExtensionList: OPTIONAL<PrivateExtension[]>;
    /**
     * @summary `pcs_Extensions`.
     * @public
     * @readonly
     */
    readonly pcs_Extensions: OPTIONAL<Pcs_Extensions>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        privateExtensionList: OPTIONAL<PrivateExtension[]>,
        pcs_Extensions: OPTIONAL<Pcs_Extensions>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.privateExtensionList = privateExtensionList;
        this.pcs_Extensions = pcs_Extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    
        if (this.privateExtensionList !== undefined && (this.privateExtensionList.length < 1 || this.privateExtensionList.length > 10)) {
            throw new ASN1SizeError("ExtensionContainer.privateExtensionList violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a ExtensionContainer
     * @description
     * 
     * This takes an `object` and converts it to a `ExtensionContainer`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExtensionContainer`.
     * @returns {ExtensionContainer}
     */
    public static _from_object (_o: { [_K in keyof (ExtensionContainer)]: (ExtensionContainer)[_K] }): ExtensionContainer {
        return new ExtensionContainer(_o.privateExtensionList, _o.pcs_Extensions, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ExtensionContainer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ExtensionContainer: $.ComponentSpec[] = [
    new $.ComponentSpec("privateExtensionList", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("pcs-Extensions", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ExtensionContainer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ExtensionContainer: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ExtensionContainer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ExtensionContainer: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ExtensionContainer: $.ASN1Decoder<ExtensionContainer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExtensionContainer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExtensionContainer (el: _Element): ExtensionContainer {
    if (!_cached_decoder_for_ExtensionContainer) { _cached_decoder_for_ExtensionContainer = function (el: _Element): ExtensionContainer {
    let privateExtensionList: OPTIONAL<PrivateExtension[]>;
    let pcs_Extensions: OPTIONAL<Pcs_Extensions>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "privateExtensionList": (_el: _Element): void => { privateExtensionList = $._decode_implicit<PrivateExtension[]>(() => $._decodeSequenceOf<PrivateExtension>(() => _decode_PrivateExtension))(_el); },
        "pcs-Extensions": (_el: _Element): void => { pcs_Extensions = $._decode_implicit<Pcs_Extensions>(() => _decode_Pcs_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ExtensionContainer,
        _extension_additions_list_spec_for_ExtensionContainer,
        _root_component_type_list_2_spec_for_ExtensionContainer,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ExtensionContainer(
        privateExtensionList,
        pcs_Extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ExtensionContainer(el);
}

let _cached_encoder_for_ExtensionContainer: $.ASN1Encoder<ExtensionContainer> | null = null;

/**
 * @summary Encodes a(n) ExtensionContainer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtensionContainer, encoded as an ASN.1 Element.
 */
export
function _encode_ExtensionContainer (value: ExtensionContainer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExtensionContainer) { _cached_encoder_for_ExtensionContainer = function (value: ExtensionContainer, _elGetter: $.ASN1Encoder<ExtensionContainer>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.privateExtensionList !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<PrivateExtension>(() => _encode_PrivateExtension, $.BER), $.BER)(value.privateExtensionList, $.BER);
    }
    if (value.pcs_Extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_Pcs_Extensions, $.BER)(value.pcs_Extensions, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ExtensionContainer(value, elGetter);
}


/* eslint-enable */
