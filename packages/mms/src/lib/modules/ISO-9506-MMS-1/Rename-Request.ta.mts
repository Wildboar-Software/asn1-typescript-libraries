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
import { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
// export { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";


/**
 * @summary Rename_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Rename-Request ::= SEQUENCE {
 *    objectClass            [0] ObjectClass,
 *    currentName            [1] ObjectName,
 *    newIdentifier          [2] IMPLICIT Identifier }
 * ```
 * 
 * @class
 */
export
class Rename_Request {
    constructor (
        /**
         * @summary `objectClass`.
         * @public
         * @readonly
         */
        readonly objectClass: ObjectClass,
        /**
         * @summary `currentName`.
         * @public
         * @readonly
         */
        readonly currentName: ObjectName,
        /**
         * @summary `newIdentifier`.
         * @public
         * @readonly
         */
        readonly newIdentifier: Identifier
    ) {}

    /**
     * @summary Restructures an object into a Rename_Request
     * @description
     * 
     * This takes an `object` and converts it to a `Rename_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Rename_Request`.
     * @returns {Rename_Request}
     */
    public static _from_object (_o: { [_K in keyof (Rename_Request)]: (Rename_Request)[_K] }): Rename_Request {
        return new Rename_Request(_o.objectClass, _o.currentName, _o.newIdentifier);
    }


}

/**
 * @summary The Leading Root Component Types of Rename_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Rename_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("objectClass", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("currentName", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("newIdentifier", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of Rename_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Rename_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Rename_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Rename_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Rename_Request: $.ASN1Decoder<Rename_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Rename_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Rename_Request (el: _Element): Rename_Request {
    if (!_cached_decoder_for_Rename_Request) { _cached_decoder_for_Rename_Request = function (el: _Element): Rename_Request {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("Rename-Request contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "objectClass";
    sequence[1].name = "currentName";
    sequence[2].name = "newIdentifier";
    let objectClass!: ObjectClass;
    let currentName!: ObjectName;
    let newIdentifier!: Identifier;
    objectClass = $._decode_explicit<ObjectClass>(() => _decode_ObjectClass)(sequence[0]);
    currentName = $._decode_explicit<ObjectName>(() => _decode_ObjectName)(sequence[1]);
    newIdentifier = $._decode_explicit<Identifier>(() => _decode_Identifier)(sequence[2]);
    return new Rename_Request(
        objectClass,
        currentName,
        newIdentifier,

    );
}; }
    return _cached_decoder_for_Rename_Request(el);
}

let _cached_encoder_for_Rename_Request: $.ASN1Encoder<Rename_Request> | null = null;

/**
 * @summary Encodes a(n) Rename_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Rename_Request, encoded as an ASN.1 Element.
 */
export
function _encode_Rename_Request (value: Rename_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Rename_Request) { _cached_encoder_for_Rename_Request = function (value: Rename_Request, elGetter: $.ASN1Encoder<Rename_Request>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_ObjectClass, $.BER)(value.objectClass, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_ObjectName, $.BER)(value.currentName, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_Identifier, $.BER)(value.newIdentifier, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Rename_Request(value, elGetter);
}


/* eslint-enable */
