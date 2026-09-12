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
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
import { DefineAccessControlList_Request_accessControlListElements, _decode_DefineAccessControlList_Request_accessControlListElements, _encode_DefineAccessControlList_Request_accessControlListElements } from "../ISO-9506-MMS-1/DefineAccessControlList-Request-accessControlListElements.ta.mjs";
// export { DefineAccessControlList_Request_accessControlListElements, _decode_DefineAccessControlList_Request_accessControlListElements, _encode_DefineAccessControlList_Request_accessControlListElements } from "../ISO-9506-MMS-1/DefineAccessControlList-Request-accessControlListElements.ta.mjs";


/**
 * @summary DefineAccessControlList_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DefineAccessControlList-Request ::= SEQUENCE {
 *    accessControlListName         [0] IMPLICIT Identifier,
 *    accessControlListElements     [1] IMPLICIT SEQUENCE {
 *        readAccessCondition           [0] AccessCondition OPTIONAL,
 *        storeAccessCondition          [1] AccessCondition OPTIONAL,
 *        writeAccessCondition          [2] AccessCondition OPTIONAL,
 *        loadAccessCondition           [3] AccessCondition OPTIONAL,
 *        executeAccessCondition        [4] AccessCondition OPTIONAL,
 *        deleteAccessCondition         [5] AccessCondition OPTIONAL,
 *        editAccessCondition           [6] AccessCondition OPTIONAL
 *        }
 *    }
 * ```
 * 
 * @class
 */
export
class DefineAccessControlList_Request {
    constructor (
        /**
         * @summary `accessControlListName`.
         * @public
         * @readonly
         */
        readonly accessControlListName: Identifier,
        /**
         * @summary `accessControlListElements`.
         * @public
         * @readonly
         */
        readonly accessControlListElements: DefineAccessControlList_Request_accessControlListElements
    ) {}

    /**
     * @summary Restructures an object into a DefineAccessControlList_Request
     * @description
     * 
     * This takes an `object` and converts it to a `DefineAccessControlList_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DefineAccessControlList_Request`.
     * @returns {DefineAccessControlList_Request}
     */
    public static _from_object (_o: { [_K in keyof (DefineAccessControlList_Request)]: (DefineAccessControlList_Request)[_K] }): DefineAccessControlList_Request {
        return new DefineAccessControlList_Request(_o.accessControlListName, _o.accessControlListElements);
    }


}

/**
 * @summary The Leading Root Component Types of DefineAccessControlList_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DefineAccessControlList_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("accessControlListName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("accessControlListElements", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of DefineAccessControlList_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DefineAccessControlList_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DefineAccessControlList_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DefineAccessControlList_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DefineAccessControlList_Request: $.ASN1Decoder<DefineAccessControlList_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DefineAccessControlList_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DefineAccessControlList_Request (el: _Element): DefineAccessControlList_Request {
    if (!_cached_decoder_for_DefineAccessControlList_Request) { _cached_decoder_for_DefineAccessControlList_Request = function (el: _Element): DefineAccessControlList_Request {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("DefineAccessControlList-Request contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "accessControlListName";
    sequence[1].name = "accessControlListElements";
    let accessControlListName!: Identifier;
    let accessControlListElements!: DefineAccessControlList_Request_accessControlListElements;
    accessControlListName = $._decode_explicit<Identifier>(() => _decode_Identifier)(sequence[0]);
    accessControlListElements = $._decode_implicit<DefineAccessControlList_Request_accessControlListElements>(() => _decode_DefineAccessControlList_Request_accessControlListElements)(sequence[1]);
    return new DefineAccessControlList_Request(
        accessControlListName,
        accessControlListElements,

    );
}; }
    return _cached_decoder_for_DefineAccessControlList_Request(el);
}

let _cached_encoder_for_DefineAccessControlList_Request: $.ASN1Encoder<DefineAccessControlList_Request> | null = null;

/**
 * @summary Encodes a(n) DefineAccessControlList_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DefineAccessControlList_Request, encoded as an ASN.1 Element.
 */
export
function _encode_DefineAccessControlList_Request (value: DefineAccessControlList_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DefineAccessControlList_Request) { _cached_encoder_for_DefineAccessControlList_Request = function (value: DefineAccessControlList_Request): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Identifier, $.BER)(value.accessControlListName, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_DefineAccessControlList_Request_accessControlListElements, $.BER)(value.accessControlListElements, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DefineAccessControlList_Request(value, elGetter);
}


/* eslint-enable */
