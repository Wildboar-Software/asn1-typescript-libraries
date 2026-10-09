/* eslint-disable */
import {
    EXTERNAL,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ClientPartNotToKeep_resultSetItem, _decode_ClientPartNotToKeep_resultSetItem, _encode_ClientPartNotToKeep_resultSetItem } from "../ESFormat-ItemOrder/ClientPartNotToKeep-resultSetItem.ta.mjs";


/**
 * @summary ClientPartNotToKeep
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClientPartNotToKeep ::= SEQUENCE {
 *     -- Corresponds to 'requestedItem' in service definition
 *     -- Must supply at least one, and may supply both.
 *     resultSetItem   [1] IMPLICIT SEQUENCE {
 *         resultSetId       [1] IMPLICIT InternationalString,
 *         item              [2] IMPLICIT INTEGER
 *     } OPTIONAL,
 *     itemRequest     [2] IMPLICIT EXTERNAL OPTIONAL
 *     -- See comment 1.
 * }
 * ```
 * 
 * @class
 */
export
class ClientPartNotToKeep {
    /**
     * @summary `resultSetItem`.
     * @public
     * @readonly
     */
    readonly resultSetItem: OPTIONAL<ClientPartNotToKeep_resultSetItem>;
    /**
     * @summary `itemRequest`.
     * @public
     * @readonly
     */
    readonly itemRequest: OPTIONAL<EXTERNAL>;

    constructor (
        resultSetItem: OPTIONAL<ClientPartNotToKeep_resultSetItem>,
        itemRequest: OPTIONAL<EXTERNAL>
    ) {
        this.resultSetItem = resultSetItem;
        this.itemRequest = itemRequest;
    }

    /**
     * @summary Restructures an object into a ClientPartNotToKeep
     * @description
     * 
     * This takes an `object` and converts it to a `ClientPartNotToKeep`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ClientPartNotToKeep`.
     * @returns {ClientPartNotToKeep}
     */
    public static _from_object (_o: { [_K in keyof (ClientPartNotToKeep)]: (ClientPartNotToKeep)[_K] }): ClientPartNotToKeep {
        return new ClientPartNotToKeep(_o.resultSetItem, _o.itemRequest);
    }


}

/**
 * @summary The Leading Root Component Types of ClientPartNotToKeep
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ClientPartNotToKeep: $.ComponentSpec[] = [
    new $.ComponentSpec("resultSetItem", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("itemRequest", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ClientPartNotToKeep
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ClientPartNotToKeep: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ClientPartNotToKeep
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ClientPartNotToKeep: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ClientPartNotToKeep: $.ASN1Decoder<ClientPartNotToKeep> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ClientPartNotToKeep
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ClientPartNotToKeep (el: _Element): ClientPartNotToKeep {
    if (!_cached_decoder_for_ClientPartNotToKeep) { _cached_decoder_for_ClientPartNotToKeep = function (el: _Element): ClientPartNotToKeep {
    let resultSetItem: OPTIONAL<ClientPartNotToKeep_resultSetItem>;
    let itemRequest: OPTIONAL<EXTERNAL>;
    const callbacks: $.DecodingMap = {
        "resultSetItem": (_el: _Element): void => { resultSetItem = $._decode_implicit<ClientPartNotToKeep_resultSetItem>(() => _decode_ClientPartNotToKeep_resultSetItem)(_el); },
        "itemRequest": (_el: _Element): void => { itemRequest = $._decode_implicit<EXTERNAL>(() => $._decodeExternal)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ClientPartNotToKeep,
        _extension_additions_list_spec_for_ClientPartNotToKeep,
        _root_component_type_list_2_spec_for_ClientPartNotToKeep,
        undefined,
    );
    return new ClientPartNotToKeep(
        resultSetItem,
        itemRequest
    );
}; }
    return _cached_decoder_for_ClientPartNotToKeep(el);
}

let _cached_encoder_for_ClientPartNotToKeep: $.ASN1Encoder<ClientPartNotToKeep> | null = null;

/**
 * @summary Encodes a(n) ClientPartNotToKeep into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClientPartNotToKeep, encoded as an ASN.1 Element.
 */
export
function _encode_ClientPartNotToKeep (value: ClientPartNotToKeep, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ClientPartNotToKeep) { _cached_encoder_for_ClientPartNotToKeep = function (value: ClientPartNotToKeep, elGetter: $.ASN1Encoder<ClientPartNotToKeep>): _Element {
    const _components: _Element[] = new Array(2);
    let _components_i = 0;
    if (value.resultSetItem !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_ClientPartNotToKeep_resultSetItem, $.BER)(value.resultSetItem, $.BER);
    }
    if (value.itemRequest !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeExternal, $.BER)(value.itemRequest, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ClientPartNotToKeep(value, elGetter);
}


/* eslint-enable */
