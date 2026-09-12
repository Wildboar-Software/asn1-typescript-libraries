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
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";


/**
 * @summary GetUnitControlAttributes_Response
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetUnitControlAttributes-Response ::= SEQUENCE {
 *    domains                    [0] IMPLICIT SEQUENCE OF Identifier,
 *    programInvocations         [1] IMPLICIT SEQUENCE OF Identifier }
 * ```
 * 
 * @class
 */
export
class GetUnitControlAttributes_Response {
    constructor (
        /**
         * @summary `domains`.
         * @public
         * @readonly
         */
        readonly domains: Identifier[],
        /**
         * @summary `programInvocations`.
         * @public
         * @readonly
         */
        readonly programInvocations: Identifier[]
    ) {}

    /**
     * @summary Restructures an object into a GetUnitControlAttributes_Response
     * @description
     * 
     * This takes an `object` and converts it to a `GetUnitControlAttributes_Response`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetUnitControlAttributes_Response`.
     * @returns {GetUnitControlAttributes_Response}
     */
    public static _from_object (_o: { [_K in keyof (GetUnitControlAttributes_Response)]: (GetUnitControlAttributes_Response)[_K] }): GetUnitControlAttributes_Response {
        return new GetUnitControlAttributes_Response(_o.domains, _o.programInvocations);
    }


}

/**
 * @summary The Leading Root Component Types of GetUnitControlAttributes_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetUnitControlAttributes_Response: $.ComponentSpec[] = [
    new $.ComponentSpec("domains", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("programInvocations", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of GetUnitControlAttributes_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetUnitControlAttributes_Response: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetUnitControlAttributes_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetUnitControlAttributes_Response: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetUnitControlAttributes_Response: $.ASN1Decoder<GetUnitControlAttributes_Response> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetUnitControlAttributes_Response
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetUnitControlAttributes_Response (el: _Element): GetUnitControlAttributes_Response {
    if (!_cached_decoder_for_GetUnitControlAttributes_Response) { _cached_decoder_for_GetUnitControlAttributes_Response = function (el: _Element): GetUnitControlAttributes_Response {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("GetUnitControlAttributes-Response contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "domains";
    sequence[1].name = "programInvocations";
    let domains!: Identifier[];
    let programInvocations!: Identifier[];
    domains = $._decode_implicit<Identifier[]>(() => $._decodeSequenceOf<Identifier>(() => _decode_Identifier))(sequence[0]);
    programInvocations = $._decode_implicit<Identifier[]>(() => $._decodeSequenceOf<Identifier>(() => _decode_Identifier))(sequence[1]);
    return new GetUnitControlAttributes_Response(
        domains,
        programInvocations,

    );
}; }
    return _cached_decoder_for_GetUnitControlAttributes_Response(el);
}

let _cached_encoder_for_GetUnitControlAttributes_Response: $.ASN1Encoder<GetUnitControlAttributes_Response> | null = null;

/**
 * @summary Encodes a(n) GetUnitControlAttributes_Response into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetUnitControlAttributes_Response, encoded as an ASN.1 Element.
 */
export
function _encode_GetUnitControlAttributes_Response (value: GetUnitControlAttributes_Response, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetUnitControlAttributes_Response) { _cached_encoder_for_GetUnitControlAttributes_Response = function (value: GetUnitControlAttributes_Response, elGetter: $.ASN1Encoder<GetUnitControlAttributes_Response>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<Identifier>(() => _encode_Identifier, $.BER), $.BER)(value.domains, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<Identifier>(() => _encode_Identifier, $.BER), $.BER)(value.programInvocations, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetUnitControlAttributes_Response(value, elGetter);
}


/* eslint-enable */
