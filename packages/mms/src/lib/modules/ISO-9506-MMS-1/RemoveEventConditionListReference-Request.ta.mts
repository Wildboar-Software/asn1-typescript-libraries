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
import { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
// export { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";


/**
 * @summary RemoveEventConditionListReference_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RemoveEventConditionListReference-Request ::= SEQUENCE {
 *    eventConditionListName           [0] ObjectName,
 *    listOfEventConditionName         [1] IMPLICIT SEQUENCE OF ObjectName
 * ,  listOfEventConditionListName     [2] IMPLICIT SEQUENCE OF ObjectName
 *        -- shall appear if an only if recl has been negotiated.
 *    }
 * ```
 * 
 * @class
 */
export
class RemoveEventConditionListReference_Request {
    constructor (
        /**
         * @summary `eventConditionListName`.
         * @public
         * @readonly
         */
        readonly eventConditionListName: ObjectName,
        /**
         * @summary `listOfEventConditionName`.
         * @public
         * @readonly
         */
        readonly listOfEventConditionName: ObjectName[],
        /**
         * @summary `listOfEventConditionListName`.
         * @public
         * @readonly
         */
        readonly listOfEventConditionListName: ObjectName[]
    ) {}

    /**
     * @summary Restructures an object into a RemoveEventConditionListReference_Request
     * @description
     * 
     * This takes an `object` and converts it to a `RemoveEventConditionListReference_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RemoveEventConditionListReference_Request`.
     * @returns {RemoveEventConditionListReference_Request}
     */
    public static _from_object (_o: { [_K in keyof (RemoveEventConditionListReference_Request)]: (RemoveEventConditionListReference_Request)[_K] }): RemoveEventConditionListReference_Request {
        return new RemoveEventConditionListReference_Request(_o.eventConditionListName, _o.listOfEventConditionName, _o.listOfEventConditionListName);
    }


}

/**
 * @summary The Leading Root Component Types of RemoveEventConditionListReference_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RemoveEventConditionListReference_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("eventConditionListName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("listOfEventConditionName", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("listOfEventConditionListName", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of RemoveEventConditionListReference_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RemoveEventConditionListReference_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RemoveEventConditionListReference_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RemoveEventConditionListReference_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RemoveEventConditionListReference_Request: $.ASN1Decoder<RemoveEventConditionListReference_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RemoveEventConditionListReference_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RemoveEventConditionListReference_Request (el: _Element): RemoveEventConditionListReference_Request {
    if (!_cached_decoder_for_RemoveEventConditionListReference_Request) { _cached_decoder_for_RemoveEventConditionListReference_Request = function (el: _Element): RemoveEventConditionListReference_Request {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("RemoveEventConditionListReference-Request contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "eventConditionListName";
    sequence[1].name = "listOfEventConditionName";
    sequence[2].name = "listOfEventConditionListName";
    let eventConditionListName!: ObjectName;
    let listOfEventConditionName!: ObjectName[];
    let listOfEventConditionListName!: ObjectName[];
    eventConditionListName = $._decode_explicit<ObjectName>(() => _decode_ObjectName)(sequence[0]);
    listOfEventConditionName = $._decode_implicit<ObjectName[]>(() => $._decodeSequenceOf<ObjectName>(() => _decode_ObjectName))(sequence[1]);
    listOfEventConditionListName = $._decode_implicit<ObjectName[]>(() => $._decodeSequenceOf<ObjectName>(() => _decode_ObjectName))(sequence[2]);
    return new RemoveEventConditionListReference_Request(
        eventConditionListName,
        listOfEventConditionName,
        listOfEventConditionListName,

    );
}; }
    return _cached_decoder_for_RemoveEventConditionListReference_Request(el);
}

let _cached_encoder_for_RemoveEventConditionListReference_Request: $.ASN1Encoder<RemoveEventConditionListReference_Request> | null = null;

/**
 * @summary Encodes a(n) RemoveEventConditionListReference_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RemoveEventConditionListReference_Request, encoded as an ASN.1 Element.
 */
export
function _encode_RemoveEventConditionListReference_Request (value: RemoveEventConditionListReference_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RemoveEventConditionListReference_Request) { _cached_encoder_for_RemoveEventConditionListReference_Request = function (value: RemoveEventConditionListReference_Request, elGetter: $.ASN1Encoder<RemoveEventConditionListReference_Request>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_ObjectName, $.BER)(value.eventConditionListName, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<ObjectName>(() => _encode_ObjectName, $.BER), $.BER)(value.listOfEventConditionName, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<ObjectName>(() => _encode_ObjectName, $.BER), $.BER)(value.listOfEventConditionListName, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RemoveEventConditionListReference_Request(value, elGetter);
}


/* eslint-enable */
