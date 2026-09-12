/* eslint-disable */
import {
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
import { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
// export { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
import { DefineNamedVariableList_Request_listOfVariable_Item, _decode_DefineNamedVariableList_Request_listOfVariable_Item, _encode_DefineNamedVariableList_Request_listOfVariable_Item } from "../ISO-9506-MMS-1/DefineNamedVariableList-Request-listOfVariable-Item.ta.mjs";
// export { DefineNamedVariableList_Request_listOfVariable_Item, _decode_DefineNamedVariableList_Request_listOfVariable_Item, _encode_DefineNamedVariableList_Request_listOfVariable_Item } from "../ISO-9506-MMS-1/DefineNamedVariableList-Request-listOfVariable-Item.ta.mjs";


/**
 * @summary DefineNamedVariableList_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DefineNamedVariableList-Request ::= SEQUENCE {
 *    variableListName           ObjectName,
 *    listOfVariable             [0] IMPLICIT SEQUENCE OF SEQUENCE {
 *        variableSpecification      VariableSpecification
 * ,      alternateAccess            [5] IMPLICIT AlternateAccess OPTIONAL
 *        }  }
 * ```
 * 
 * @class
 */
export
class DefineNamedVariableList_Request {
    constructor (
        /**
         * @summary `variableListName`.
         * @public
         * @readonly
         */
        readonly variableListName: ObjectName,
        /**
         * @summary `listOfVariable`.
         * @public
         * @readonly
         */
        readonly listOfVariable: DefineNamedVariableList_Request_listOfVariable_Item[]
    ) {}

    /**
     * @summary Restructures an object into a DefineNamedVariableList_Request
     * @description
     * 
     * This takes an `object` and converts it to a `DefineNamedVariableList_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DefineNamedVariableList_Request`.
     * @returns {DefineNamedVariableList_Request}
     */
    public static _from_object (_o: { [_K in keyof (DefineNamedVariableList_Request)]: (DefineNamedVariableList_Request)[_K] }): DefineNamedVariableList_Request {
        return new DefineNamedVariableList_Request(_o.variableListName, _o.listOfVariable);
    }


}

/**
 * @summary The Leading Root Component Types of DefineNamedVariableList_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DefineNamedVariableList_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("variableListName", false, $.hasAnyTag),
    new $.ComponentSpec("listOfVariable", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of DefineNamedVariableList_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DefineNamedVariableList_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DefineNamedVariableList_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DefineNamedVariableList_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DefineNamedVariableList_Request: $.ASN1Decoder<DefineNamedVariableList_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DefineNamedVariableList_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DefineNamedVariableList_Request (el: _Element): DefineNamedVariableList_Request {
    if (!_cached_decoder_for_DefineNamedVariableList_Request) { _cached_decoder_for_DefineNamedVariableList_Request = function (el: _Element): DefineNamedVariableList_Request {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("DefineNamedVariableList-Request contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "variableListName";
    sequence[1].name = "listOfVariable";
    let variableListName!: ObjectName;
    let listOfVariable!: DefineNamedVariableList_Request_listOfVariable_Item[];
    variableListName = _decode_ObjectName(sequence[0]);
    listOfVariable = $._decode_implicit<DefineNamedVariableList_Request_listOfVariable_Item[]>(() => $._decodeSequenceOf<DefineNamedVariableList_Request_listOfVariable_Item>(() => _decode_DefineNamedVariableList_Request_listOfVariable_Item))(sequence[1]);
    return new DefineNamedVariableList_Request(
        variableListName,
        listOfVariable,

    );
}; }
    return _cached_decoder_for_DefineNamedVariableList_Request(el);
}

let _cached_encoder_for_DefineNamedVariableList_Request: $.ASN1Encoder<DefineNamedVariableList_Request> | null = null;

/**
 * @summary Encodes a(n) DefineNamedVariableList_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DefineNamedVariableList_Request, encoded as an ASN.1 Element.
 */
export
function _encode_DefineNamedVariableList_Request (value: DefineNamedVariableList_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DefineNamedVariableList_Request) { _cached_encoder_for_DefineNamedVariableList_Request = function (value: DefineNamedVariableList_Request): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ObjectName(value.variableListName, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<DefineNamedVariableList_Request_listOfVariable_Item>(() => _encode_DefineNamedVariableList_Request_listOfVariable_Item, $.BER), $.BER)(value.listOfVariable, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DefineNamedVariableList_Request(value, elGetter);
}


/* eslint-enable */
