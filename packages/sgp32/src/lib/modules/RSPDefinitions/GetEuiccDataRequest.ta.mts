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
import { Octet1, _decode_Octet1, _encode_Octet1 } from "../RSPDefinitions/Octet1.ta.mjs";
// export { Octet1, _decode_Octet1, _encode_Octet1 } from "../RSPDefinitions/Octet1.ta.mjs";


/**
 * @summary GetEuiccDataRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetEuiccDataRequest ::= [62] SEQUENCE { -- Tag 'BF3E'
 *     tagList [APPLICATION 28] Octet1  -- tag '5C', the value SHALL be set to '5A'
 * }
 * ```
 * 
 * @class
 */
export
class GetEuiccDataRequest {
    constructor (
        /**
         * @summary `tagList`.
         * @public
         * @readonly
         */
        readonly tagList: Octet1
    ) {}

    /**
     * @summary Restructures an object into a GetEuiccDataRequest
     * @description
     * 
     * This takes an `object` and converts it to a `GetEuiccDataRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetEuiccDataRequest`.
     * @returns {GetEuiccDataRequest}
     */
    public static _from_object (_o: { [_K in keyof (GetEuiccDataRequest)]: (GetEuiccDataRequest)[_K] }): GetEuiccDataRequest {
        return new GetEuiccDataRequest(_o.tagList);
    }


}

/**
 * @summary The Leading Root Component Types of GetEuiccDataRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetEuiccDataRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("tagList", false, $.hasTag(_TagClass.application, 28))
];

/**
 * @summary The Trailing Root Component Types of GetEuiccDataRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetEuiccDataRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetEuiccDataRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetEuiccDataRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetEuiccDataRequest: $.ASN1Decoder<GetEuiccDataRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetEuiccDataRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetEuiccDataRequest (el: _Element): GetEuiccDataRequest {
    if (!_cached_decoder_for_GetEuiccDataRequest) { _cached_decoder_for_GetEuiccDataRequest = $._decode_implicit<GetEuiccDataRequest>(() => function (el: _Element): GetEuiccDataRequest {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("GetEuiccDataRequest contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "tagList";
    let tagList!: Octet1;
    tagList = $._decode_implicit<Octet1>(() => _decode_Octet1)(sequence[0]);
    return new GetEuiccDataRequest(
        tagList,

    );
}); }
    return _cached_decoder_for_GetEuiccDataRequest(el);
}

let _cached_encoder_for_GetEuiccDataRequest: $.ASN1Encoder<GetEuiccDataRequest> | null = null;

/**
 * @summary Encodes a(n) GetEuiccDataRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetEuiccDataRequest, encoded as an ASN.1 Element.
 */
export
function _encode_GetEuiccDataRequest (value: GetEuiccDataRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetEuiccDataRequest) { _cached_encoder_for_GetEuiccDataRequest = $._encode_implicit(_TagClass.context, 62, () => function (value: GetEuiccDataRequest, elGetter: $.ASN1Encoder<GetEuiccDataRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.application, 28, () => _encode_Octet1, $.BER)(value.tagList, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_GetEuiccDataRequest(value, elGetter);
}


/* eslint-enable */
