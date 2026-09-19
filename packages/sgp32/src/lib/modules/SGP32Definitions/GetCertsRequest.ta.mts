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
import { SubjectKeyIdentifier, _decode_SubjectKeyIdentifier, _encode_SubjectKeyIdentifier } from "../PKIX1Implicit88/SubjectKeyIdentifier.ta.mjs";
// export { SubjectKeyIdentifier, _decode_SubjectKeyIdentifier, _encode_SubjectKeyIdentifier } from "../PKIX1Implicit88/SubjectKeyIdentifier.ta.mjs";


/**
 * @summary GetCertsRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetCertsRequest ::= [86] SEQUENCE { -- Tag 'BF56'
 *     euiccCiPKId SubjectKeyIdentifier OPTIONAL -- CI Public Key Identifier supported on the eUICC for signature creation
 * }
 * ```
 * 
 * @class
 */
export
class GetCertsRequest {
    constructor (
        /**
         * @summary `euiccCiPKId`.
         * @public
         * @readonly
         */
        readonly euiccCiPKId: OPTIONAL<SubjectKeyIdentifier>
    ) {}

    /**
     * @summary Restructures an object into a GetCertsRequest
     * @description
     * 
     * This takes an `object` and converts it to a `GetCertsRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetCertsRequest`.
     * @returns {GetCertsRequest}
     */
    public static _from_object (_o: { [_K in keyof (GetCertsRequest)]: (GetCertsRequest)[_K] }): GetCertsRequest {
        return new GetCertsRequest(_o.euiccCiPKId);
    }


}

/**
 * @summary The Leading Root Component Types of GetCertsRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetCertsRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("euiccCiPKId", true, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of GetCertsRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetCertsRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetCertsRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetCertsRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetCertsRequest: $.ASN1Decoder<GetCertsRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetCertsRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetCertsRequest (el: _Element): GetCertsRequest {
    if (!_cached_decoder_for_GetCertsRequest) { _cached_decoder_for_GetCertsRequest = $._decode_implicit<GetCertsRequest>(() => function (el: _Element): GetCertsRequest {
    let euiccCiPKId: OPTIONAL<SubjectKeyIdentifier>;
    const callbacks: $.DecodingMap = {
        "euiccCiPKId": (_el: _Element): void => { euiccCiPKId = _decode_SubjectKeyIdentifier(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetCertsRequest,
        _extension_additions_list_spec_for_GetCertsRequest,
        _root_component_type_list_2_spec_for_GetCertsRequest,
        undefined,
    );
    return new GetCertsRequest(
        euiccCiPKId
    );
}); }
    return _cached_decoder_for_GetCertsRequest(el);
}

let _cached_encoder_for_GetCertsRequest: $.ASN1Encoder<GetCertsRequest> | null = null;

/**
 * @summary Encodes a(n) GetCertsRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetCertsRequest, encoded as an ASN.1 Element.
 */
export
function _encode_GetCertsRequest (value: GetCertsRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetCertsRequest) { _cached_encoder_for_GetCertsRequest = $._encode_implicit(_TagClass.context, 86, () => function (value: GetCertsRequest, elGetter: $.ASN1Encoder<GetCertsRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.euiccCiPKId === undefined) ? undefined : _encode_SubjectKeyIdentifier(value.euiccCiPKId, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_GetCertsRequest(value, elGetter);
}


/* eslint-enable */
