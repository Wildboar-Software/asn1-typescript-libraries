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
import { RulesAuthorisationTable, _decode_RulesAuthorisationTable, _encode_RulesAuthorisationTable } from "../RSPDefinitions/RulesAuthorisationTable.ta.mjs";
// export { RulesAuthorisationTable, _decode_RulesAuthorisationTable, _encode_RulesAuthorisationTable } from "../RSPDefinitions/RulesAuthorisationTable.ta.mjs";


/**
 * @summary GetRatResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetRatResponse ::= [67] SEQUENCE { -- Tag 'BF43'
 *     rat RulesAuthorisationTable 
 * }
 * ```
 * 
 * @class
 */
export
class GetRatResponse {
    constructor (
        /**
         * @summary `rat`.
         * @public
         * @readonly
         */
        readonly rat: RulesAuthorisationTable
    ) {}

    /**
     * @summary Restructures an object into a GetRatResponse
     * @description
     * 
     * This takes an `object` and converts it to a `GetRatResponse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetRatResponse`.
     * @returns {GetRatResponse}
     */
    public static _from_object (_o: { [_K in keyof (GetRatResponse)]: (GetRatResponse)[_K] }): GetRatResponse {
        return new GetRatResponse(_o.rat);
    }


}

/**
 * @summary The Leading Root Component Types of GetRatResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetRatResponse: $.ComponentSpec[] = [
    new $.ComponentSpec("rat", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of GetRatResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetRatResponse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetRatResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetRatResponse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetRatResponse: $.ASN1Decoder<GetRatResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetRatResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetRatResponse (el: _Element): GetRatResponse {
    if (!_cached_decoder_for_GetRatResponse) { _cached_decoder_for_GetRatResponse = $._decode_implicit<GetRatResponse>(() => function (el: _Element): GetRatResponse {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("GetRatResponse contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "rat";
    let rat!: RulesAuthorisationTable;
    rat = _decode_RulesAuthorisationTable(sequence[0]);
    return new GetRatResponse(
        rat,

    );
}); }
    return _cached_decoder_for_GetRatResponse(el);
}

let _cached_encoder_for_GetRatResponse: $.ASN1Encoder<GetRatResponse> | null = null;

/**
 * @summary Encodes a(n) GetRatResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetRatResponse, encoded as an ASN.1 Element.
 */
export
function _encode_GetRatResponse (value: GetRatResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetRatResponse) { _cached_encoder_for_GetRatResponse = $._encode_implicit(_TagClass.context, 67, () => function (value: GetRatResponse, elGetter: $.ASN1Encoder<GetRatResponse>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_RulesAuthorisationTable(value.rat, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_GetRatResponse(value, elGetter);
}


/* eslint-enable */
