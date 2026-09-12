/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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


/**
 * @summary GetAccessControlListAttributes_Response_references_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetAccessControlListAttributes-Response-references-Item ::= SEQUENCE {
 *     objectClass [0] ObjectClass,
 *     objectCount [1] IMPLICIT INTEGER
 * }
 * ```
 * 
 * @class
 */
export
class GetAccessControlListAttributes_Response_references_Item {
    constructor (
        /**
         * @summary `objectClass`.
         * @public
         * @readonly
         */
        readonly objectClass: ObjectClass,
        /**
         * @summary `objectCount`.
         * @public
         * @readonly
         */
        readonly objectCount: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a GetAccessControlListAttributes_Response_references_Item
     * @description
     * 
     * This takes an `object` and converts it to a `GetAccessControlListAttributes_Response_references_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetAccessControlListAttributes_Response_references_Item`.
     * @returns {GetAccessControlListAttributes_Response_references_Item}
     */
    public static _from_object (_o: { [_K in keyof (GetAccessControlListAttributes_Response_references_Item)]: (GetAccessControlListAttributes_Response_references_Item)[_K] }): GetAccessControlListAttributes_Response_references_Item {
        return new GetAccessControlListAttributes_Response_references_Item(_o.objectClass, _o.objectCount);
    }


}

/**
 * @summary The Leading Root Component Types of GetAccessControlListAttributes_Response_references_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetAccessControlListAttributes_Response_references_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("objectClass", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("objectCount", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of GetAccessControlListAttributes_Response_references_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetAccessControlListAttributes_Response_references_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetAccessControlListAttributes_Response_references_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetAccessControlListAttributes_Response_references_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetAccessControlListAttributes_Response_references_Item: $.ASN1Decoder<GetAccessControlListAttributes_Response_references_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetAccessControlListAttributes_Response_references_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetAccessControlListAttributes_Response_references_Item (el: _Element): GetAccessControlListAttributes_Response_references_Item {
    if (!_cached_decoder_for_GetAccessControlListAttributes_Response_references_Item) { _cached_decoder_for_GetAccessControlListAttributes_Response_references_Item = function (el: _Element): GetAccessControlListAttributes_Response_references_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("GetAccessControlListAttributes-Response-references-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "objectClass";
    sequence[1].name = "objectCount";
    let objectClass!: ObjectClass;
    let objectCount!: INTEGER;
    objectClass = $._decode_explicit<ObjectClass>(() => _decode_ObjectClass)(sequence[0]);
    objectCount = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[1]);
    return new GetAccessControlListAttributes_Response_references_Item(
        objectClass,
        objectCount,

    );
}; }
    return _cached_decoder_for_GetAccessControlListAttributes_Response_references_Item(el);
}

let _cached_encoder_for_GetAccessControlListAttributes_Response_references_Item: $.ASN1Encoder<GetAccessControlListAttributes_Response_references_Item> | null = null;

/**
 * @summary Encodes a(n) GetAccessControlListAttributes_Response_references_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetAccessControlListAttributes_Response_references_Item, encoded as an ASN.1 Element.
 */
export
function _encode_GetAccessControlListAttributes_Response_references_Item (value: GetAccessControlListAttributes_Response_references_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetAccessControlListAttributes_Response_references_Item) { _cached_encoder_for_GetAccessControlListAttributes_Response_references_Item = function (value: GetAccessControlListAttributes_Response_references_Item, elGetter: $.ASN1Encoder<GetAccessControlListAttributes_Response_references_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_ObjectClass, $.BER)(value.objectClass, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.objectCount, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetAccessControlListAttributes_Response_references_Item(value, elGetter);
}


/* eslint-enable */
