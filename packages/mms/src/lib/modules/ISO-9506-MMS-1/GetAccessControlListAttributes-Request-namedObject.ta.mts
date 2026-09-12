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
import { ObjectClass, _decode_ObjectClass, _encode_ObjectClass } from "../ISO-9506-MMS-1/ObjectClass.ta.mjs";
// export { ObjectClass, _decode_ObjectClass, _encode_ObjectClass } from "../ISO-9506-MMS-1/ObjectClass.ta.mjs";
import { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
// export { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";


/**
 * @summary GetAccessControlListAttributes_Request_namedObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetAccessControlListAttributes-Request-namedObject ::= SEQUENCE {
 *     objectClass [0] ObjectClass,
 *     objectName [1] ObjectName
 * }
 * ```
 * 
 * @class
 */
export
class GetAccessControlListAttributes_Request_namedObject {
    constructor (
        /**
         * @summary `objectClass`.
         * @public
         * @readonly
         */
        readonly objectClass: ObjectClass,
        /**
         * @summary `objectName`.
         * @public
         * @readonly
         */
        readonly objectName: ObjectName
    ) {}

    /**
     * @summary Restructures an object into a GetAccessControlListAttributes_Request_namedObject
     * @description
     * 
     * This takes an `object` and converts it to a `GetAccessControlListAttributes_Request_namedObject`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetAccessControlListAttributes_Request_namedObject`.
     * @returns {GetAccessControlListAttributes_Request_namedObject}
     */
    public static _from_object (_o: { [_K in keyof (GetAccessControlListAttributes_Request_namedObject)]: (GetAccessControlListAttributes_Request_namedObject)[_K] }): GetAccessControlListAttributes_Request_namedObject {
        return new GetAccessControlListAttributes_Request_namedObject(_o.objectClass, _o.objectName);
    }


}

/**
 * @summary The Leading Root Component Types of GetAccessControlListAttributes_Request_namedObject
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetAccessControlListAttributes_Request_namedObject: $.ComponentSpec[] = [
    new $.ComponentSpec("objectClass", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("objectName", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of GetAccessControlListAttributes_Request_namedObject
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetAccessControlListAttributes_Request_namedObject: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetAccessControlListAttributes_Request_namedObject
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetAccessControlListAttributes_Request_namedObject: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetAccessControlListAttributes_Request_namedObject: $.ASN1Decoder<GetAccessControlListAttributes_Request_namedObject> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetAccessControlListAttributes_Request_namedObject
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetAccessControlListAttributes_Request_namedObject (el: _Element): GetAccessControlListAttributes_Request_namedObject {
    if (!_cached_decoder_for_GetAccessControlListAttributes_Request_namedObject) { _cached_decoder_for_GetAccessControlListAttributes_Request_namedObject = function (el: _Element): GetAccessControlListAttributes_Request_namedObject {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("GetAccessControlListAttributes-Request-namedObject contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "objectClass";
    sequence[1].name = "objectName";
    let objectClass!: ObjectClass;
    let objectName!: ObjectName;
    objectClass = $._decode_explicit<ObjectClass>(() => _decode_ObjectClass)(sequence[0]);
    objectName = $._decode_explicit<ObjectName>(() => _decode_ObjectName)(sequence[1]);
    return new GetAccessControlListAttributes_Request_namedObject(
        objectClass,
        objectName,

    );
}; }
    return _cached_decoder_for_GetAccessControlListAttributes_Request_namedObject(el);
}

let _cached_encoder_for_GetAccessControlListAttributes_Request_namedObject: $.ASN1Encoder<GetAccessControlListAttributes_Request_namedObject> | null = null;

/**
 * @summary Encodes a(n) GetAccessControlListAttributes_Request_namedObject into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetAccessControlListAttributes_Request_namedObject, encoded as an ASN.1 Element.
 */
export
function _encode_GetAccessControlListAttributes_Request_namedObject (value: GetAccessControlListAttributes_Request_namedObject, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetAccessControlListAttributes_Request_namedObject) { _cached_encoder_for_GetAccessControlListAttributes_Request_namedObject = function (value: GetAccessControlListAttributes_Request_namedObject): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_ObjectClass, $.BER)(value.objectClass, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_ObjectName, $.BER)(value.objectName, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetAccessControlListAttributes_Request_namedObject(value, elGetter);
}


/* eslint-enable */
