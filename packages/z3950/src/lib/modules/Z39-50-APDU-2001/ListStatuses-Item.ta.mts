/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ResultSetId, _decode_ResultSetId, _encode_ResultSetId } from "../Z39-50-APDU-2001/ResultSetId.ta.mjs";
import { DeleteSetStatus, _decode_DeleteSetStatus, _encode_DeleteSetStatus } from "../Z39-50-APDU-2001/DeleteSetStatus.ta.mjs";


/**
 * @summary ListStatuses_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ListStatuses-Item ::= SEQUENCE {
 *     id ResultSetId,
 *     status DeleteSetStatus
 * }
 * ```
 * 
 * @class
 */
export
class ListStatuses_Item {
    /**
     * @summary `id`.
     * @public
     * @readonly
     */
    readonly id: ResultSetId;
    /**
     * @summary `status`.
     * @public
     * @readonly
     */
    readonly status: DeleteSetStatus;

    constructor (
        id: ResultSetId,
        status: DeleteSetStatus
    ) {
        this.id = id;
        this.status = status;
    }

    /**
     * @summary Restructures an object into a ListStatuses_Item
     * @description
     * 
     * This takes an `object` and converts it to a `ListStatuses_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ListStatuses_Item`.
     * @returns {ListStatuses_Item}
     */
    public static _from_object (_o: { [_K in keyof (ListStatuses_Item)]: (ListStatuses_Item)[_K] }): ListStatuses_Item {
        return new ListStatuses_Item(_o.id, _o.status);
    }


}

/**
 * @summary The Leading Root Component Types of ListStatuses_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ListStatuses_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("id", false, $.hasTag(_TagClass.context, 31)),
    new $.ComponentSpec("status", false, $.hasTag(_TagClass.context, 33))
];

/**
 * @summary The Trailing Root Component Types of ListStatuses_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ListStatuses_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ListStatuses_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ListStatuses_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ListStatuses_Item: $.ASN1Decoder<ListStatuses_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ListStatuses_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ListStatuses_Item (el: _Element): ListStatuses_Item {
    if (!_cached_decoder_for_ListStatuses_Item) { _cached_decoder_for_ListStatuses_Item = function (el: _Element): ListStatuses_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ListStatuses-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "id";
    sequence[1].name = "status";
    let id!: ResultSetId;
    let status!: DeleteSetStatus;
    id = _decode_ResultSetId(sequence[0]);
    status = _decode_DeleteSetStatus(sequence[1]);
    return new ListStatuses_Item(
        id,
        status,

    );
}; }
    return _cached_decoder_for_ListStatuses_Item(el);
}

let _cached_encoder_for_ListStatuses_Item: $.ASN1Encoder<ListStatuses_Item> | null = null;

/**
 * @summary Encodes a(n) ListStatuses_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ListStatuses_Item, encoded as an ASN.1 Element.
 */
export
function _encode_ListStatuses_Item (value: ListStatuses_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ListStatuses_Item) { _cached_encoder_for_ListStatuses_Item = function (value: ListStatuses_Item, elGetter: $.ASN1Encoder<ListStatuses_Item>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 31, () => _encode_ResultSetId, $.BER)(value.id, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 33, () => _encode_DeleteSetStatus, $.BER)(value.status, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_ListStatuses_Item(value, elGetter);
}


/* eslint-enable */
