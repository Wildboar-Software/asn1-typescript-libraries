/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ClientPartToKeep, _decode_ClientPartToKeep, _encode_ClientPartToKeep } from "../ESFormat-ItemOrder/ClientPartToKeep.ta.mjs";
// export { ClientPartToKeep, _decode_ClientPartToKeep, _encode_ClientPartToKeep } from "../ESFormat-ItemOrder/ClientPartToKeep.ta.mjs";
import { ServerPart, _decode_ServerPart, _encode_ServerPart } from "../ESFormat-ItemOrder/ServerPart.ta.mjs";
// export { ServerPart, _decode_ServerPart, _encode_ServerPart } from "../ESFormat-ItemOrder/ServerPart.ta.mjs";


/**
 * @summary ItemOrder_taskPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ItemOrder-taskPackage ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class ItemOrder_taskPackage {
    /**
     * @summary `clientPart`.
     * @public
     * @readonly
     */
    readonly clientPart: OPTIONAL<ClientPartToKeep>;
    /**
     * @summary `serverPart`.
     * @public
     * @readonly
     */
    readonly serverPart: ServerPart;

    constructor (
        clientPart: OPTIONAL<ClientPartToKeep>,
        serverPart: ServerPart
    ) {
        this.clientPart = clientPart;
        this.serverPart = serverPart;
    }

    /**
     * @summary Restructures an object into a ItemOrder_taskPackage
     * @description
     * 
     * This takes an `object` and converts it to a `ItemOrder_taskPackage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ItemOrder_taskPackage`.
     * @returns {ItemOrder_taskPackage}
     */
    public static _from_object (_o: { [_K in keyof (ItemOrder_taskPackage)]: (ItemOrder_taskPackage)[_K] }): ItemOrder_taskPackage {
        return new ItemOrder_taskPackage(_o.clientPart, _o.serverPart);
    }


}

/**
 * @summary The Leading Root Component Types of ItemOrder_taskPackage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ItemOrder_taskPackage: $.ComponentSpec[] = [
    new $.ComponentSpec("clientPart", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("serverPart", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ItemOrder_taskPackage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ItemOrder_taskPackage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ItemOrder_taskPackage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ItemOrder_taskPackage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ItemOrder_taskPackage: $.ASN1Decoder<ItemOrder_taskPackage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ItemOrder_taskPackage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ItemOrder_taskPackage (el: _Element): ItemOrder_taskPackage {
    if (!_cached_decoder_for_ItemOrder_taskPackage) { _cached_decoder_for_ItemOrder_taskPackage = function (el: _Element): ItemOrder_taskPackage {
    let clientPart: OPTIONAL<ClientPartToKeep>;
    let serverPart!: ServerPart;
    const callbacks: $.DecodingMap = {
        "clientPart": (_el: _Element): void => { clientPart = $._decode_explicit<ClientPartToKeep>(() => _decode_ClientPartToKeep)(_el); },
        "serverPart": (_el: _Element): void => { serverPart = $._decode_explicit<ServerPart>(() => _decode_ServerPart)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ItemOrder_taskPackage,
        _extension_additions_list_spec_for_ItemOrder_taskPackage,
        _root_component_type_list_2_spec_for_ItemOrder_taskPackage,
        undefined,
    );
    return new ItemOrder_taskPackage(
        clientPart,
        serverPart
    );
}; }
    return _cached_decoder_for_ItemOrder_taskPackage(el);
}

let _cached_encoder_for_ItemOrder_taskPackage: $.ASN1Encoder<ItemOrder_taskPackage> | null = null;

/**
 * @summary Encodes a(n) ItemOrder_taskPackage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ItemOrder_taskPackage, encoded as an ASN.1 Element.
 */
export
function _encode_ItemOrder_taskPackage (value: ItemOrder_taskPackage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ItemOrder_taskPackage) { _cached_encoder_for_ItemOrder_taskPackage = function (value: ItemOrder_taskPackage, elGetter: $.ASN1Encoder<ItemOrder_taskPackage>): _Element {
    const _components: _Element[] = new Array(2);
    let _components_i = 0;
    if (value.clientPart !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_ClientPartToKeep, $.BER)(value.clientPart, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_ServerPart, $.BER)(value.serverPart, $.BER);
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ItemOrder_taskPackage(value, elGetter);
}


/* eslint-enable */
