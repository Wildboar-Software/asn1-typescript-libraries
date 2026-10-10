/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ClientPartToKeep, _decode_ClientPartToKeep, _encode_ClientPartToKeep } from "../ESFormat-ItemOrder/ClientPartToKeep.ta.mjs";
import { ClientPartNotToKeep, _decode_ClientPartNotToKeep, _encode_ClientPartNotToKeep } from "../ESFormat-ItemOrder/ClientPartNotToKeep.ta.mjs";


/**
 * @summary ItemOrder_esRequest
 * @description
 * 
 * Client parameters of an Item Order request. The requested item is not
 * retained as submitted; description, contact, and billing are.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.4, EXT.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ItemOrder-esRequest ::= SEQUENCE {
 *     toKeep [1] ClientPartToKeep OPTIONAL,
 *     notToKeep [2] ClientPartNotToKeep
 * }
 * ```
 * 
 * @class
 */
export
class ItemOrder_esRequest {
    /**
     * @summary `toKeep`.
     * @description
     * 
     * Optional supplemental description, contact person, and billing. Retained
     * in the task package. Omitted when the client supplies none of them.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.4.
     * 
     * @public
     * @readonly
     */
    readonly toKeep: OPTIONAL<ClientPartToKeep>;
    /**
     * @summary `notToKeep`.
     * @description
     * 
     * The requested item. At least one of a result-set entry and an external
     * item request must be supplied, and both may be. Not retained as the
     * client sent it; see the server part for what the package stores.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.4.
     * 
     * @public
     * @readonly
     */
    readonly notToKeep: ClientPartNotToKeep;

    constructor (
        toKeep: OPTIONAL<ClientPartToKeep>,
        notToKeep: ClientPartNotToKeep
    ) {
        this.toKeep = toKeep;
        this.notToKeep = notToKeep;
    }

    /**
     * @summary Restructures an object into a ItemOrder_esRequest
     * @description
     * 
     * This takes an `object` and converts it to a `ItemOrder_esRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ItemOrder_esRequest`.
     * @returns {ItemOrder_esRequest}
     */
    public static _from_object (_o: { [_K in keyof (ItemOrder_esRequest)]: (ItemOrder_esRequest)[_K] }): ItemOrder_esRequest {
        return new ItemOrder_esRequest(_o.toKeep, _o.notToKeep);
    }


}

/**
 * @summary The Leading Root Component Types of ItemOrder_esRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ItemOrder_esRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("toKeep", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("notToKeep", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ItemOrder_esRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ItemOrder_esRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ItemOrder_esRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ItemOrder_esRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ItemOrder_esRequest: $.ASN1Decoder<ItemOrder_esRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ItemOrder_esRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ItemOrder_esRequest (el: _Element): ItemOrder_esRequest {
    if (!_cached_decoder_for_ItemOrder_esRequest) { _cached_decoder_for_ItemOrder_esRequest = function (el: _Element): ItemOrder_esRequest {
    let toKeep: OPTIONAL<ClientPartToKeep>;
    let notToKeep!: ClientPartNotToKeep;
    const callbacks: $.DecodingMap = {
        "toKeep": (_el: _Element): void => { toKeep = $._decode_explicit<ClientPartToKeep>(() => _decode_ClientPartToKeep)(_el); },
        "notToKeep": (_el: _Element): void => { notToKeep = $._decode_explicit<ClientPartNotToKeep>(() => _decode_ClientPartNotToKeep)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ItemOrder_esRequest,
        _extension_additions_list_spec_for_ItemOrder_esRequest,
        _root_component_type_list_2_spec_for_ItemOrder_esRequest,
        undefined,
    );
    return new ItemOrder_esRequest(
        toKeep,
        notToKeep
    );
}; }
    return _cached_decoder_for_ItemOrder_esRequest(el);
}

let _cached_encoder_for_ItemOrder_esRequest: $.ASN1Encoder<ItemOrder_esRequest> | null = null;

/**
 * @summary Encodes a(n) ItemOrder_esRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ItemOrder_esRequest, encoded as an ASN.1 Element.
 */
export
function _encode_ItemOrder_esRequest (value: ItemOrder_esRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ItemOrder_esRequest) { _cached_encoder_for_ItemOrder_esRequest = function (value: ItemOrder_esRequest, elGetter: $.ASN1Encoder<ItemOrder_esRequest>): _Element {
    const _components: _Element[] = new Array(2);
    let _components_i = 0;
    if (value.toKeep !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_ClientPartToKeep, $.BER)(value.toKeep, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_ClientPartNotToKeep, $.BER)(value.notToKeep, $.BER);
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ItemOrder_esRequest(value, elGetter);
}


/* eslint-enable */
