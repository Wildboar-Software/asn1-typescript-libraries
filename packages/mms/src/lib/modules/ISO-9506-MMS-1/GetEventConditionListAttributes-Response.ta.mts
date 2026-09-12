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
 * @summary GetEventConditionListAttributes_Response
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetEventConditionListAttributes-Response ::= SEQUENCE {
 *    listOfEventConditionName         [1] IMPLICIT SEQUENCE OF ObjectName
 * ,  listOfEventConditionListName     [2] IMPLICIT SEQUENCE OF ObjectName OPTIONAL
 *        -- shall appear if an only if recl has been negotiated.
 *    }
 * ```
 * 
 * @class
 */
export
class GetEventConditionListAttributes_Response {
    constructor (
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
        readonly listOfEventConditionListName: OPTIONAL<ObjectName[]>
    ) {}

    /**
     * @summary Restructures an object into a GetEventConditionListAttributes_Response
     * @description
     * 
     * This takes an `object` and converts it to a `GetEventConditionListAttributes_Response`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetEventConditionListAttributes_Response`.
     * @returns {GetEventConditionListAttributes_Response}
     */
    public static _from_object (_o: { [_K in keyof (GetEventConditionListAttributes_Response)]: (GetEventConditionListAttributes_Response)[_K] }): GetEventConditionListAttributes_Response {
        return new GetEventConditionListAttributes_Response(_o.listOfEventConditionName, _o.listOfEventConditionListName);
    }


}

/**
 * @summary The Leading Root Component Types of GetEventConditionListAttributes_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetEventConditionListAttributes_Response: $.ComponentSpec[] = [
    new $.ComponentSpec("listOfEventConditionName", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("listOfEventConditionListName", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of GetEventConditionListAttributes_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetEventConditionListAttributes_Response: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetEventConditionListAttributes_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetEventConditionListAttributes_Response: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetEventConditionListAttributes_Response: $.ASN1Decoder<GetEventConditionListAttributes_Response> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetEventConditionListAttributes_Response
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetEventConditionListAttributes_Response (el: _Element): GetEventConditionListAttributes_Response {
    if (!_cached_decoder_for_GetEventConditionListAttributes_Response) { _cached_decoder_for_GetEventConditionListAttributes_Response = function (el: _Element): GetEventConditionListAttributes_Response {
    let listOfEventConditionName!: ObjectName[];
    let listOfEventConditionListName: OPTIONAL<ObjectName[]>;
    const callbacks: $.DecodingMap = {
        "listOfEventConditionName": (_el: _Element): void => { listOfEventConditionName = $._decode_implicit<ObjectName[]>(() => $._decodeSequenceOf<ObjectName>(() => _decode_ObjectName))(_el); },
        "listOfEventConditionListName": (_el: _Element): void => { listOfEventConditionListName = $._decode_implicit<ObjectName[]>(() => $._decodeSequenceOf<ObjectName>(() => _decode_ObjectName))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetEventConditionListAttributes_Response,
        _extension_additions_list_spec_for_GetEventConditionListAttributes_Response,
        _root_component_type_list_2_spec_for_GetEventConditionListAttributes_Response,
        undefined,
    );
    return new GetEventConditionListAttributes_Response(
        listOfEventConditionName,
        listOfEventConditionListName
    );
}; }
    return _cached_decoder_for_GetEventConditionListAttributes_Response(el);
}

let _cached_encoder_for_GetEventConditionListAttributes_Response: $.ASN1Encoder<GetEventConditionListAttributes_Response> | null = null;

/**
 * @summary Encodes a(n) GetEventConditionListAttributes_Response into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetEventConditionListAttributes_Response, encoded as an ASN.1 Element.
 */
export
function _encode_GetEventConditionListAttributes_Response (value: GetEventConditionListAttributes_Response, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetEventConditionListAttributes_Response) { _cached_encoder_for_GetEventConditionListAttributes_Response = function (value: GetEventConditionListAttributes_Response, elGetter: $.ASN1Encoder<GetEventConditionListAttributes_Response>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<ObjectName>(() => _encode_ObjectName, $.BER), $.BER)(value.listOfEventConditionName, $.BER),
            /* IF_ABSENT  */ ((value.listOfEventConditionListName === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<ObjectName>(() => _encode_ObjectName, $.BER), $.BER)(value.listOfEventConditionListName, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetEventConditionListAttributes_Response(value, elGetter);
}


/* eslint-enable */
