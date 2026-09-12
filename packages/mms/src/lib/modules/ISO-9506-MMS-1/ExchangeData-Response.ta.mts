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
import { Data, _decode_Data, _encode_Data } from "../ISO-9506-MMS-1/Data.ta.mjs";
// export { Data, _decode_Data, _encode_Data } from "../ISO-9506-MMS-1/Data.ta.mjs";


/**
 * @summary ExchangeData_Response
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExchangeData-Response ::= SEQUENCE {
 *    listOfResponseData         [0] IMPLICIT SEQUENCE OF Data }
 * ```
 * 
 * @class
 */
export
class ExchangeData_Response {
    constructor (
        /**
         * @summary `listOfResponseData`.
         * @public
         * @readonly
         */
        readonly listOfResponseData: Data[]
    ) {}

    /**
     * @summary Restructures an object into a ExchangeData_Response
     * @description
     * 
     * This takes an `object` and converts it to a `ExchangeData_Response`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExchangeData_Response`.
     * @returns {ExchangeData_Response}
     */
    public static _from_object (_o: { [_K in keyof (ExchangeData_Response)]: (ExchangeData_Response)[_K] }): ExchangeData_Response {
        return new ExchangeData_Response(_o.listOfResponseData);
    }


}

/**
 * @summary The Leading Root Component Types of ExchangeData_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ExchangeData_Response: $.ComponentSpec[] = [
    new $.ComponentSpec("listOfResponseData", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of ExchangeData_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ExchangeData_Response: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ExchangeData_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ExchangeData_Response: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ExchangeData_Response: $.ASN1Decoder<ExchangeData_Response> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExchangeData_Response
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExchangeData_Response (el: _Element): ExchangeData_Response {
    if (!_cached_decoder_for_ExchangeData_Response) { _cached_decoder_for_ExchangeData_Response = function (el: _Element): ExchangeData_Response {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("ExchangeData-Response contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "listOfResponseData";
    let listOfResponseData!: Data[];
    listOfResponseData = $._decode_implicit<Data[]>(() => $._decodeSequenceOf<Data>(() => _decode_Data))(sequence[0]);
    return new ExchangeData_Response(
        listOfResponseData,

    );
}; }
    return _cached_decoder_for_ExchangeData_Response(el);
}

let _cached_encoder_for_ExchangeData_Response: $.ASN1Encoder<ExchangeData_Response> | null = null;

/**
 * @summary Encodes a(n) ExchangeData_Response into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExchangeData_Response, encoded as an ASN.1 Element.
 */
export
function _encode_ExchangeData_Response (value: ExchangeData_Response, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExchangeData_Response) { _cached_encoder_for_ExchangeData_Response = function (value: ExchangeData_Response, elGetter: $.ASN1Encoder<ExchangeData_Response>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<Data>(() => _encode_Data, $.BER), $.BER)(value.listOfResponseData, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ExchangeData_Response(value, elGetter);
}


/* eslint-enable */
