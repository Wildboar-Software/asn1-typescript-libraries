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
import { ChangeAccessControl_Request_scopeOfChange_listOfObjects_objectScope, _decode_ChangeAccessControl_Request_scopeOfChange_listOfObjects_objectScope, _encode_ChangeAccessControl_Request_scopeOfChange_listOfObjects_objectScope } from "../ISO-9506-MMS-1/ChangeAccessControl-Request-scopeOfChange-listOfObjects-objectScope.ta.mjs";
// export { ChangeAccessControl_Request_scopeOfChange_listOfObjects_objectScope, _decode_ChangeAccessControl_Request_scopeOfChange_listOfObjects_objectScope, _encode_ChangeAccessControl_Request_scopeOfChange_listOfObjects_objectScope } from "../ISO-9506-MMS-1/ChangeAccessControl-Request-scopeOfChange-listOfObjects-objectScope.ta.mjs";


/**
 * @summary ChangeAccessControl_Request_scopeOfChange_listOfObjects
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChangeAccessControl-Request-scopeOfChange-listOfObjects ::= SEQUENCE {
 *     objectClass [0] ObjectClass,
 *     objectScope [1] CHOICE {
 *         specific [0] IMPLICIT SEQUENCE OF ObjectName,
 *         -- Names of the objects (of class objectClass)
 *         -- whose access is to be changed
 *         aa-specific [1] IMPLICIT NULL,
 *         domain [2] IMPLICIT Identifier,
 *         -- Name of the Domain whose elements
 *         -- are to be changed
 *         vmd [3] IMPLICIT NULL
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class ChangeAccessControl_Request_scopeOfChange_listOfObjects {
    constructor (
        /**
         * @summary `objectClass`.
         * @public
         * @readonly
         */
        readonly objectClass: ObjectClass,
        /**
         * @summary `objectScope`.
         * @public
         * @readonly
         */
        readonly objectScope: ChangeAccessControl_Request_scopeOfChange_listOfObjects_objectScope
    ) {}

    /**
     * @summary Restructures an object into a ChangeAccessControl_Request_scopeOfChange_listOfObjects
     * @description
     * 
     * This takes an `object` and converts it to a `ChangeAccessControl_Request_scopeOfChange_listOfObjects`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChangeAccessControl_Request_scopeOfChange_listOfObjects`.
     * @returns {ChangeAccessControl_Request_scopeOfChange_listOfObjects}
     */
    public static _from_object (_o: { [_K in keyof (ChangeAccessControl_Request_scopeOfChange_listOfObjects)]: (ChangeAccessControl_Request_scopeOfChange_listOfObjects)[_K] }): ChangeAccessControl_Request_scopeOfChange_listOfObjects {
        return new ChangeAccessControl_Request_scopeOfChange_listOfObjects(_o.objectClass, _o.objectScope);
    }


}

/**
 * @summary The Leading Root Component Types of ChangeAccessControl_Request_scopeOfChange_listOfObjects
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ChangeAccessControl_Request_scopeOfChange_listOfObjects: $.ComponentSpec[] = [
    new $.ComponentSpec("objectClass", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("objectScope", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ChangeAccessControl_Request_scopeOfChange_listOfObjects
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ChangeAccessControl_Request_scopeOfChange_listOfObjects: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ChangeAccessControl_Request_scopeOfChange_listOfObjects
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ChangeAccessControl_Request_scopeOfChange_listOfObjects: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ChangeAccessControl_Request_scopeOfChange_listOfObjects: $.ASN1Decoder<ChangeAccessControl_Request_scopeOfChange_listOfObjects> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChangeAccessControl_Request_scopeOfChange_listOfObjects
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChangeAccessControl_Request_scopeOfChange_listOfObjects (el: _Element): ChangeAccessControl_Request_scopeOfChange_listOfObjects {
    if (!_cached_decoder_for_ChangeAccessControl_Request_scopeOfChange_listOfObjects) { _cached_decoder_for_ChangeAccessControl_Request_scopeOfChange_listOfObjects = function (el: _Element): ChangeAccessControl_Request_scopeOfChange_listOfObjects {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ChangeAccessControl-Request-scopeOfChange-listOfObjects contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "objectClass";
    sequence[1].name = "objectScope";
    let objectClass!: ObjectClass;
    let objectScope!: ChangeAccessControl_Request_scopeOfChange_listOfObjects_objectScope;
    objectClass = $._decode_explicit<ObjectClass>(() => _decode_ObjectClass)(sequence[0]);
    objectScope = $._decode_explicit<ChangeAccessControl_Request_scopeOfChange_listOfObjects_objectScope>(() => _decode_ChangeAccessControl_Request_scopeOfChange_listOfObjects_objectScope)(sequence[1]);
    return new ChangeAccessControl_Request_scopeOfChange_listOfObjects(
        objectClass,
        objectScope,

    );
}; }
    return _cached_decoder_for_ChangeAccessControl_Request_scopeOfChange_listOfObjects(el);
}

let _cached_encoder_for_ChangeAccessControl_Request_scopeOfChange_listOfObjects: $.ASN1Encoder<ChangeAccessControl_Request_scopeOfChange_listOfObjects> | null = null;

/**
 * @summary Encodes a(n) ChangeAccessControl_Request_scopeOfChange_listOfObjects into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChangeAccessControl_Request_scopeOfChange_listOfObjects, encoded as an ASN.1 Element.
 */
export
function _encode_ChangeAccessControl_Request_scopeOfChange_listOfObjects (value: ChangeAccessControl_Request_scopeOfChange_listOfObjects, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChangeAccessControl_Request_scopeOfChange_listOfObjects) { _cached_encoder_for_ChangeAccessControl_Request_scopeOfChange_listOfObjects = function (value: ChangeAccessControl_Request_scopeOfChange_listOfObjects): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_ObjectClass, $.BER)(value.objectClass, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_ChangeAccessControl_Request_scopeOfChange_listOfObjects_objectScope, $.BER)(value.objectScope, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ChangeAccessControl_Request_scopeOfChange_listOfObjects(value, elGetter);
}


/* eslint-enable */
