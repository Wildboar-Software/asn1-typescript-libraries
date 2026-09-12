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
import { ChangeAccessControl_Request_scopeOfChange, _decode_ChangeAccessControl_Request_scopeOfChange, _encode_ChangeAccessControl_Request_scopeOfChange } from "../ISO-9506-MMS-1/ChangeAccessControl-Request-scopeOfChange.ta.mjs";
// export { ChangeAccessControl_Request_scopeOfChange, _decode_ChangeAccessControl_Request_scopeOfChange, _encode_ChangeAccessControl_Request_scopeOfChange } from "../ISO-9506-MMS-1/ChangeAccessControl-Request-scopeOfChange.ta.mjs";
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";


/**
 * @summary ChangeAccessControl_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChangeAccessControl-Request ::= SEQUENCE {
 *    scopeOfChange              CHOICE {
 *        vMDOnly                    [0] IMPLICIT NULL,
 *        listOfObjects              [1] IMPLICIT SEQUENCE {
 *           objectClass                [0] ObjectClass,
 *           objectScope                [1] CHOICE {
 *              specific                   [0] IMPLICIT SEQUENCE OF ObjectName,
 *                            -- Names of the objects (of class objectClass)
 *                            -- whose access is to be changed
 *              aa-specific                [1] IMPLICIT NULL,
 *              domain                     [2] IMPLICIT Identifier,
 *                            -- Name of the Domain whose elements
 *                            -- are to be changed
 *              vmd                    [3] IMPLICIT NULL
 *              }
 *           }
 *        },
 *    accessControlListName         [2] IMPLICIT Identifier
 *              -- name of the AccessControlList Object that contains
 *              -- the conditions for access control
 *    }
 * ```
 * 
 * @class
 */
export
class ChangeAccessControl_Request {
    constructor (
        /**
         * @summary `scopeOfChange`.
         * @public
         * @readonly
         */
        readonly scopeOfChange: ChangeAccessControl_Request_scopeOfChange,
        /**
         * @summary `accessControlListName`.
         * @public
         * @readonly
         */
        readonly accessControlListName: Identifier
    ) {}

    /**
     * @summary Restructures an object into a ChangeAccessControl_Request
     * @description
     * 
     * This takes an `object` and converts it to a `ChangeAccessControl_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChangeAccessControl_Request`.
     * @returns {ChangeAccessControl_Request}
     */
    public static _from_object (_o: { [_K in keyof (ChangeAccessControl_Request)]: (ChangeAccessControl_Request)[_K] }): ChangeAccessControl_Request {
        return new ChangeAccessControl_Request(_o.scopeOfChange, _o.accessControlListName);
    }


}

/**
 * @summary The Leading Root Component Types of ChangeAccessControl_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ChangeAccessControl_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("scopeOfChange", false, $.hasAnyTag),
    new $.ComponentSpec("accessControlListName", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ChangeAccessControl_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ChangeAccessControl_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ChangeAccessControl_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ChangeAccessControl_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ChangeAccessControl_Request: $.ASN1Decoder<ChangeAccessControl_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChangeAccessControl_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChangeAccessControl_Request (el: _Element): ChangeAccessControl_Request {
    if (!_cached_decoder_for_ChangeAccessControl_Request) { _cached_decoder_for_ChangeAccessControl_Request = function (el: _Element): ChangeAccessControl_Request {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ChangeAccessControl-Request contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "scopeOfChange";
    sequence[1].name = "accessControlListName";
    let scopeOfChange!: ChangeAccessControl_Request_scopeOfChange;
    let accessControlListName!: Identifier;
    scopeOfChange = _decode_ChangeAccessControl_Request_scopeOfChange(sequence[0]);
    accessControlListName = $._decode_explicit<Identifier>(() => _decode_Identifier)(sequence[1]);
    return new ChangeAccessControl_Request(
        scopeOfChange,
        accessControlListName,

    );
}; }
    return _cached_decoder_for_ChangeAccessControl_Request(el);
}

let _cached_encoder_for_ChangeAccessControl_Request: $.ASN1Encoder<ChangeAccessControl_Request> | null = null;

/**
 * @summary Encodes a(n) ChangeAccessControl_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChangeAccessControl_Request, encoded as an ASN.1 Element.
 */
export
function _encode_ChangeAccessControl_Request (value: ChangeAccessControl_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChangeAccessControl_Request) { _cached_encoder_for_ChangeAccessControl_Request = function (value: ChangeAccessControl_Request): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ChangeAccessControl_Request_scopeOfChange(value.scopeOfChange, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_Identifier, $.BER)(value.accessControlListName, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ChangeAccessControl_Request(value, elGetter);
}


/* eslint-enable */
