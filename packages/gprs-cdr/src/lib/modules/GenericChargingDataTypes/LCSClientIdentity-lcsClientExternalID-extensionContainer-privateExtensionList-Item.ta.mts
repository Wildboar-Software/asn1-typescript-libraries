/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OBJECT_IDENTIFIER,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LCSClientIdentity-lcsClientExternalID-extensionContainer-privateExtensionList-Item ::= SEQUENCE {
 *    extId      MAP-EXTENSION.&extensionId ({ExtensionSet}) ,
 *    extType    MAP-EXTENSION.&ExtensionType ({ExtensionSet}{@extId})  OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item {
    /**
     * @summary `extId`.
     * @public
     * @readonly
     */
    readonly extId: OBJECT_IDENTIFIER;
    /**
     * @summary `extType`.
     * @public
     * @readonly
     */
    readonly extType: OPTIONAL<_Element>;

    constructor (
        extId: OBJECT_IDENTIFIER,
        extType?: OPTIONAL<_Element>
    ) {
        this.extId = extId;
        this.extType = extType;
    }

    /**
     * @summary Restructures an object into a LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item
     * @description
     * 
     * This takes an `object` and converts it to a `LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item`.
     * @returns {LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item}
     */
    public static _from_object (_o: { [_K in keyof (LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item)]: (LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item)[_K] }): LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item {
        return new LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item(_o.extId, _o.extType);
    }


}

/**
 * @summary The Leading Root Component Types of LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("extId", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("extType", true, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item: $.ASN1Decoder<LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item (el: _Element): LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item {
    if (!_cached_decoder_for_LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item) { _cached_decoder_for_LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item = function (el: _Element): LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item {
    let extId!: OBJECT_IDENTIFIER;
    let extType: OPTIONAL<_Element>;
    const callbacks: $.DecodingMap = {
        "extId": (_el: _Element): void => { extId = $._decodeObjectIdentifier(_el); },
        "extType": (_el: _Element): void => { extType = $._decodeAny(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item,
        _extension_additions_list_spec_for_LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item,
        _root_component_type_list_2_spec_for_LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item,
        undefined,
    );
    return new LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item(
        extId,
        extType
    );
}; }
    return _cached_decoder_for_LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item(el);
}

let _cached_encoder_for_LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item: $.ASN1Encoder<LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item> | null = null;

/**
 * @summary Encodes a(n) LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item, encoded as an ASN.1 Element.
 */
export
function _encode_LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item (value: LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item) { _cached_encoder_for_LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item = function (value: LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item, _elGetter: $.ASN1Encoder<LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encodeObjectIdentifier(value.extId, $.BER));
    if (value.extType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encodeAny(value.extType, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_LCSClientIdentity_lcsClientExternalID_extensionContainer_privateExtensionList_Item(value, elGetter);
}


/* eslint-enable */
