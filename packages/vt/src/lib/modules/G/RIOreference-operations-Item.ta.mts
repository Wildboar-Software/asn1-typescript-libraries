/* eslint-disable */
import {
    PrintableString,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RIOreference_operations_Item_operation, _decode_RIOreference_operations_Item_operation, _encode_RIOreference_operations_Item_operation } from "../G/RIOreference-operations-Item-operation.ta.mjs";
// export { RIOreference_operations_Item_operation, RIOreference_operations_Item_operation_executeRecord /* IMPORTED_LONG_NAMED_INTEGER */, executeRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RIOreference_operations_Item_operation_callRecord /* IMPORTED_LONG_NAMED_INTEGER */, callRecord /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_RIOreference_operations_Item_operation, _encode_RIOreference_operations_Item_operation } from "../G/RIOreference-operations-Item-operation.ta.mjs";


/**
 * @summary RIOreference_operations_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RIOreference-operations-Item ::= SEQUENCE {
 *     recordId    [0] IMPLICIT PrintableString,
 *     operation   [1] IMPLICIT INTEGER {
 *         executeRecord (0),
 *         callRecord    (1)
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class RIOreference_operations_Item {
    constructor (
        /**
         * @summary `recordId`.
         * @public
         * @readonly
         */
        readonly recordId: PrintableString,
        /**
         * @summary `operation`.
         * @public
         * @readonly
         */
        readonly operation: RIOreference_operations_Item_operation
    ) {}

    /**
     * @summary Restructures an object into a RIOreference_operations_Item
     * @description
     * 
     * This takes an `object` and converts it to a `RIOreference_operations_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RIOreference_operations_Item`.
     * @returns {RIOreference_operations_Item}
     */
    public static _from_object (_o: { [_K in keyof (RIOreference_operations_Item)]: (RIOreference_operations_Item)[_K] }): RIOreference_operations_Item {
        return new RIOreference_operations_Item(_o.recordId, _o.operation);
    }


}

/**
 * @summary The Leading Root Component Types of RIOreference_operations_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RIOreference_operations_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("recordId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("operation", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of RIOreference_operations_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RIOreference_operations_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RIOreference_operations_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RIOreference_operations_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RIOreference_operations_Item: $.ASN1Decoder<RIOreference_operations_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RIOreference_operations_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RIOreference_operations_Item (el: _Element): RIOreference_operations_Item {
    if (!_cached_decoder_for_RIOreference_operations_Item) { _cached_decoder_for_RIOreference_operations_Item = function (el: _Element): RIOreference_operations_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RIOreference-operations-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "recordId";
    sequence[1].name = "operation";
    let recordId!: PrintableString;
    let operation!: RIOreference_operations_Item_operation;
    recordId = $._decode_implicit<PrintableString>(() => $._decodePrintableString)(sequence[0]);
    operation = $._decode_implicit<RIOreference_operations_Item_operation>(() => _decode_RIOreference_operations_Item_operation)(sequence[1]);
    return new RIOreference_operations_Item(
        recordId,
        operation,

    );
}; }
    return _cached_decoder_for_RIOreference_operations_Item(el);
}

let _cached_encoder_for_RIOreference_operations_Item: $.ASN1Encoder<RIOreference_operations_Item> | null = null;

/**
 * @summary Encodes a(n) RIOreference_operations_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RIOreference_operations_Item, encoded as an ASN.1 Element.
 */
export
function _encode_RIOreference_operations_Item (value: RIOreference_operations_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RIOreference_operations_Item) { _cached_encoder_for_RIOreference_operations_Item = function (value: RIOreference_operations_Item): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodePrintableString, $.BER)(value.recordId, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_RIOreference_operations_Item_operation, $.BER)(value.operation, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RIOreference_operations_Item(value, elGetter);
}


/* eslint-enable */
