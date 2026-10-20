/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item, _decode_LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item, _encode_LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item } from "../GenericChargingDataTypes/LCSClientIdentity-lcsClientExternalID-extensionContainer-privateExtensionList-Item.ta.mjs";
// export { LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item, _decode_LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item, _encode_LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item } from "../GenericChargingDataTypes/LCSClientIdentity-lcsClientExternalID-extensionContainer-privateExtensionList-Item.ta.mjs";
import { LCSClientIdentity_lcsClientExternalID_extensionContainer_pcs_Extensions, _decode_LCSClientIdentity_lcsClientExternalID_extensionContainer_pcs_Extensions, _encode_LCSClientIdentity_lcsClientExternalID_extensionContainer_pcs_Extensions } from "../GenericChargingDataTypes/LCSClientIdentity-lcsClientExternalID-extensionContainer-pcs-Extensions.ta.mjs";
// export { LCSClientIdentity_lcsClientExternalID_extensionContainer_pcs_Extensions, _decode_LCSClientIdentity_lcsClientExternalID_extensionContainer_pcs_Extensions, _encode_LCSClientIdentity_lcsClientExternalID_extensionContainer_pcs_Extensions } from "../GenericChargingDataTypes/LCSClientIdentity-lcsClientExternalID-extensionContainer-pcs-Extensions.ta.mjs";


/**
 * @summary LCSClientIdentity_lcsClientExternalID_extensionContainer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LCSClientIdentity-lcsClientExternalID-extensionContainer ::= SEQUENCE {
 *    privateExtensionList   [0] IMPLICIT SEQUENCE  ( SIZE( 1 .. 10 ) ) OF
 *       SEQUENCE {
 *          extId      MAP-EXTENSION.&extensionId ({ExtensionSet}) ,
 *          extType    MAP-EXTENSION.&ExtensionType ({ExtensionSet}{@extId})  OPTIONAL} OPTIONAL,
 *    pcs-Extensions         [1] IMPLICIT SEQUENCE {
 *       ... } OPTIONAL,
 *    ...
 * }
 * ```
 * 
 * @class
 */
export
class LCSClientIdentity_lcsClientExternalID_extensionContainer {
    /**
     * @summary `privateExtensionList`.
     * @public
     * @readonly
     */
    readonly privateExtensionList: OPTIONAL<LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item[]>;
    /**
     * @summary `pcs_Extensions`.
     * @public
     * @readonly
     */
    readonly pcs_Extensions: OPTIONAL<LCSClientIdentity_lcsClientExternalID_extensionContainer_pcs_Extensions>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        privateExtensionList: OPTIONAL<LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item[]>,
        pcs_Extensions: OPTIONAL<LCSClientIdentity_lcsClientExternalID_extensionContainer_pcs_Extensions>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.privateExtensionList = privateExtensionList;
        this.pcs_Extensions = pcs_Extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    
        if (this.privateExtensionList !== undefined && (this.privateExtensionList.length < 1 || this.privateExtensionList.length > 10)) {
            throw new ASN1SizeError("LCSClientIdentity_lcsClientExternalID_extensionContainer.privateExtensionList violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a LCSClientIdentity_lcsClientExternalID_extensionContainer
     * @description
     * 
     * This takes an `object` and converts it to a `LCSClientIdentity_lcsClientExternalID_extensionContainer`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LCSClientIdentity_lcsClientExternalID_extensionContainer`.
     * @returns {LCSClientIdentity_lcsClientExternalID_extensionContainer}
     */
    public static _from_object (_o: { [_K in keyof (LCSClientIdentity_lcsClientExternalID_extensionContainer)]: (LCSClientIdentity_lcsClientExternalID_extensionContainer)[_K] }): LCSClientIdentity_lcsClientExternalID_extensionContainer {
        return new LCSClientIdentity_lcsClientExternalID_extensionContainer(_o.privateExtensionList, _o.pcs_Extensions, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of LCSClientIdentity_lcsClientExternalID_extensionContainer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LCSClientIdentity_lcsClientExternalID_extensionContainer: $.ComponentSpec[] = [
    new $.ComponentSpec("privateExtensionList", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("pcs-Extensions", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of LCSClientIdentity_lcsClientExternalID_extensionContainer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LCSClientIdentity_lcsClientExternalID_extensionContainer: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LCSClientIdentity_lcsClientExternalID_extensionContainer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LCSClientIdentity_lcsClientExternalID_extensionContainer: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LCSClientIdentity_lcsClientExternalID_extensionContainer: $.ASN1Decoder<LCSClientIdentity_lcsClientExternalID_extensionContainer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LCSClientIdentity_lcsClientExternalID_extensionContainer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LCSClientIdentity_lcsClientExternalID_extensionContainer (el: _Element): LCSClientIdentity_lcsClientExternalID_extensionContainer {
    if (!_cached_decoder_for_LCSClientIdentity_lcsClientExternalID_extensionContainer) { _cached_decoder_for_LCSClientIdentity_lcsClientExternalID_extensionContainer = function (el: _Element): LCSClientIdentity_lcsClientExternalID_extensionContainer {
    let privateExtensionList: OPTIONAL<LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item[]>;
    let pcs_Extensions: OPTIONAL<LCSClientIdentity_lcsClientExternalID_extensionContainer_pcs_Extensions>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "privateExtensionList": (_el: _Element): void => { privateExtensionList = $._decode_implicit<LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item[]>(() => $._decodeSequenceOf<LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item>(() => _decode_LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item))(_el); },
        "pcs-Extensions": (_el: _Element): void => { pcs_Extensions = $._decode_implicit<LCSClientIdentity_lcsClientExternalID_extensionContainer_pcs_Extensions>(() => _decode_LCSClientIdentity_lcsClientExternalID_extensionContainer_pcs_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LCSClientIdentity_lcsClientExternalID_extensionContainer,
        _extension_additions_list_spec_for_LCSClientIdentity_lcsClientExternalID_extensionContainer,
        _root_component_type_list_2_spec_for_LCSClientIdentity_lcsClientExternalID_extensionContainer,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new LCSClientIdentity_lcsClientExternalID_extensionContainer(
        privateExtensionList,
        pcs_Extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_LCSClientIdentity_lcsClientExternalID_extensionContainer(el);
}

let _cached_encoder_for_LCSClientIdentity_lcsClientExternalID_extensionContainer: $.ASN1Encoder<LCSClientIdentity_lcsClientExternalID_extensionContainer> | null = null;

/**
 * @summary Encodes a(n) LCSClientIdentity_lcsClientExternalID_extensionContainer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LCSClientIdentity_lcsClientExternalID_extensionContainer, encoded as an ASN.1 Element.
 */
export
function _encode_LCSClientIdentity_lcsClientExternalID_extensionContainer (value: LCSClientIdentity_lcsClientExternalID_extensionContainer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LCSClientIdentity_lcsClientExternalID_extensionContainer) { _cached_encoder_for_LCSClientIdentity_lcsClientExternalID_extensionContainer = function (value: LCSClientIdentity_lcsClientExternalID_extensionContainer, _elGetter: $.ASN1Encoder<LCSClientIdentity_lcsClientExternalID_extensionContainer>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.privateExtensionList !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item>(() => _encode_LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item, $.BER), $.BER)(value.privateExtensionList, $.BER);
    }
    if (value.pcs_Extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_LCSClientIdentity_lcsClientExternalID_extensionContainer_pcs_Extensions, $.BER)(value.pcs_Extensions, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_LCSClientIdentity_lcsClientExternalID_extensionContainer(value, elGetter);
}


/* eslint-enable */
