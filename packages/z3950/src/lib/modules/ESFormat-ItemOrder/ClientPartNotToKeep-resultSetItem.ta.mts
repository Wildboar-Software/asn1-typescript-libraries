/* eslint-disable */
import {
    INTEGER,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";


/**
 * @summary ClientPartNotToKeep_resultSetItem
 * @description
 * 
 * One entry of a transient result set on this Z-association, identifying
 * the item to order.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClientPartNotToKeep-resultSetItem ::= SEQUENCE {
 *     resultSetId [1] IMPLICIT InternationalString,
 *     item [2] IMPLICIT INTEGER
 * }
 * ```
 * 
 * @class
 */
export
class ClientPartNotToKeep_resultSetItem {
    /**
     * @summary `resultSetId`.
     * @description
     * 
     * Name of a transient result set belonging to the current Z-association.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.4.
     * 
     * @public
     * @readonly
     */
    readonly resultSetId: InternationalString;
    /**
     * @summary `item`.
     * @description
     * 
     * Ordinal number of an entry within that result set.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.4.
     * 
     * @public
     * @readonly
     */
    readonly item: INTEGER;

    constructor (
        resultSetId: InternationalString,
        item: INTEGER
    ) {
        this.resultSetId = resultSetId;
        this.item = item;
    }

    /**
     * @summary Restructures an object into a ClientPartNotToKeep_resultSetItem
     * @description
     * 
     * This takes an `object` and converts it to a `ClientPartNotToKeep_resultSetItem`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ClientPartNotToKeep_resultSetItem`.
     * @returns {ClientPartNotToKeep_resultSetItem}
     */
    public static _from_object (_o: { [_K in keyof (ClientPartNotToKeep_resultSetItem)]: (ClientPartNotToKeep_resultSetItem)[_K] }): ClientPartNotToKeep_resultSetItem {
        return new ClientPartNotToKeep_resultSetItem(_o.resultSetId, _o.item);
    }


}

/**
 * @summary The Leading Root Component Types of ClientPartNotToKeep_resultSetItem
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ClientPartNotToKeep_resultSetItem: $.ComponentSpec[] = [
    new $.ComponentSpec("resultSetId", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("item", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ClientPartNotToKeep_resultSetItem
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ClientPartNotToKeep_resultSetItem: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ClientPartNotToKeep_resultSetItem
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ClientPartNotToKeep_resultSetItem: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ClientPartNotToKeep_resultSetItem: $.ASN1Decoder<ClientPartNotToKeep_resultSetItem> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ClientPartNotToKeep_resultSetItem
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ClientPartNotToKeep_resultSetItem (el: _Element): ClientPartNotToKeep_resultSetItem {
    if (!_cached_decoder_for_ClientPartNotToKeep_resultSetItem) { _cached_decoder_for_ClientPartNotToKeep_resultSetItem = function (el: _Element): ClientPartNotToKeep_resultSetItem {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ClientPartNotToKeep-resultSetItem contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "resultSetId";
    sequence[1].name = "item";
    const resultSetId: InternationalString = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(sequence[0]);
    const item: INTEGER = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[1]);
    return new ClientPartNotToKeep_resultSetItem(
        resultSetId,
        item,

    );
}; }
    return _cached_decoder_for_ClientPartNotToKeep_resultSetItem(el);
}

let _cached_encoder_for_ClientPartNotToKeep_resultSetItem: $.ASN1Encoder<ClientPartNotToKeep_resultSetItem> | null = null;

/**
 * @summary Encodes a(n) ClientPartNotToKeep_resultSetItem into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClientPartNotToKeep_resultSetItem, encoded as an ASN.1 Element.
 */
export
function _encode_ClientPartNotToKeep_resultSetItem (value: ClientPartNotToKeep_resultSetItem, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ClientPartNotToKeep_resultSetItem) { _cached_encoder_for_ClientPartNotToKeep_resultSetItem = function (value: ClientPartNotToKeep_resultSetItem, elGetter: $.ASN1Encoder<ClientPartNotToKeep_resultSetItem>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_InternationalString, $.BER)(value.resultSetId, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.item, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_ClientPartNotToKeep_resultSetItem(value, elGetter);
}


/* eslint-enable */
