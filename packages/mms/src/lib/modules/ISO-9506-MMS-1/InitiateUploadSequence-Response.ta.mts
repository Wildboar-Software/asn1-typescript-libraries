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
import { Integer32, _decode_Integer32, _encode_Integer32 } from "../ISO-9506-MMS-1/Integer32.ta.mjs";
// export { Integer32, _decode_Integer32, _encode_Integer32 } from "../ISO-9506-MMS-1/Integer32.ta.mjs";
import { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";
// export { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";


/**
 * @summary InitiateUploadSequence_Response
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InitiateUploadSequence-Response ::= SEQUENCE {
 *    ulsmID                     [0] IMPLICIT Integer32,
 *    listOfCapabilities         [1] IMPLICIT SEQUENCE OF MMSString }
 * ```
 * 
 * @class
 */
export
class InitiateUploadSequence_Response {
    constructor (
        /**
         * @summary `ulsmID`.
         * @public
         * @readonly
         */
        readonly ulsmID: Integer32,
        /**
         * @summary `listOfCapabilities`.
         * @public
         * @readonly
         */
        readonly listOfCapabilities: MMSString[]
    ) {}

    /**
     * @summary Restructures an object into a InitiateUploadSequence_Response
     * @description
     * 
     * This takes an `object` and converts it to a `InitiateUploadSequence_Response`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InitiateUploadSequence_Response`.
     * @returns {InitiateUploadSequence_Response}
     */
    public static _from_object (_o: { [_K in keyof (InitiateUploadSequence_Response)]: (InitiateUploadSequence_Response)[_K] }): InitiateUploadSequence_Response {
        return new InitiateUploadSequence_Response(_o.ulsmID, _o.listOfCapabilities);
    }


}

/**
 * @summary The Leading Root Component Types of InitiateUploadSequence_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_InitiateUploadSequence_Response: $.ComponentSpec[] = [
    new $.ComponentSpec("ulsmID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("listOfCapabilities", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of InitiateUploadSequence_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_InitiateUploadSequence_Response: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of InitiateUploadSequence_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_InitiateUploadSequence_Response: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_InitiateUploadSequence_Response: $.ASN1Decoder<InitiateUploadSequence_Response> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InitiateUploadSequence_Response
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InitiateUploadSequence_Response (el: _Element): InitiateUploadSequence_Response {
    if (!_cached_decoder_for_InitiateUploadSequence_Response) { _cached_decoder_for_InitiateUploadSequence_Response = function (el: _Element): InitiateUploadSequence_Response {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("InitiateUploadSequence-Response contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "ulsmID";
    sequence[1].name = "listOfCapabilities";
    let ulsmID!: Integer32;
    let listOfCapabilities!: MMSString[];
    ulsmID = $._decode_implicit<Integer32>(() => _decode_Integer32)(sequence[0]);
    listOfCapabilities = $._decode_implicit<MMSString[]>(() => $._decodeSequenceOf<MMSString>(() => _decode_MMSString))(sequence[1]);
    return new InitiateUploadSequence_Response(
        ulsmID,
        listOfCapabilities,

    );
}; }
    return _cached_decoder_for_InitiateUploadSequence_Response(el);
}

let _cached_encoder_for_InitiateUploadSequence_Response: $.ASN1Encoder<InitiateUploadSequence_Response> | null = null;

/**
 * @summary Encodes a(n) InitiateUploadSequence_Response into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitiateUploadSequence_Response, encoded as an ASN.1 Element.
 */
export
function _encode_InitiateUploadSequence_Response (value: InitiateUploadSequence_Response, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InitiateUploadSequence_Response) { _cached_encoder_for_InitiateUploadSequence_Response = function (value: InitiateUploadSequence_Response, elGetter: $.ASN1Encoder<InitiateUploadSequence_Response>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_Integer32, $.BER)(value.ulsmID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<MMSString>(() => _encode_MMSString, $.BER), $.BER)(value.listOfCapabilities, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_InitiateUploadSequence_Response(value, elGetter);
}


/* eslint-enable */
