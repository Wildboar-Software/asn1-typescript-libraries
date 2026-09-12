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
import { FileName, _decode_FileName, _encode_FileName } from "../ISO-9506-MMS-1/FileName.ta.mjs";
// export { FileName, _decode_FileName, _encode_FileName } from "../ISO-9506-MMS-1/FileName.ta.mjs";


/**
 * @summary RequestDomainUpload_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestDomainUpload-Request ::= SEQUENCE {
 *    domainName                 [0] IMPLICIT Identifier,
 *    fileName                   [1] IMPLICIT FileName }
 * ```
 * 
 * @class
 */
export
class RequestDomainUpload_Request {
    constructor (
        /**
         * @summary `domainName`.
         * @public
         * @readonly
         */
        readonly domainName: Identifier,
        /**
         * @summary `fileName`.
         * @public
         * @readonly
         */
        readonly fileName: FileName
    ) {}

    /**
     * @summary Restructures an object into a RequestDomainUpload_Request
     * @description
     * 
     * This takes an `object` and converts it to a `RequestDomainUpload_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RequestDomainUpload_Request`.
     * @returns {RequestDomainUpload_Request}
     */
    public static _from_object (_o: { [_K in keyof (RequestDomainUpload_Request)]: (RequestDomainUpload_Request)[_K] }): RequestDomainUpload_Request {
        return new RequestDomainUpload_Request(_o.domainName, _o.fileName);
    }


}

/**
 * @summary The Leading Root Component Types of RequestDomainUpload_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RequestDomainUpload_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("domainName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("fileName", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of RequestDomainUpload_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RequestDomainUpload_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RequestDomainUpload_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RequestDomainUpload_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RequestDomainUpload_Request: $.ASN1Decoder<RequestDomainUpload_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestDomainUpload_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestDomainUpload_Request (el: _Element): RequestDomainUpload_Request {
    if (!_cached_decoder_for_RequestDomainUpload_Request) { _cached_decoder_for_RequestDomainUpload_Request = function (el: _Element): RequestDomainUpload_Request {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RequestDomainUpload-Request contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "domainName";
    sequence[1].name = "fileName";
    let domainName!: Identifier;
    let fileName!: FileName;
    domainName = $._decode_explicit<Identifier>(() => _decode_Identifier)(sequence[0]);
    fileName = $._decode_implicit<FileName>(() => _decode_FileName)(sequence[1]);
    return new RequestDomainUpload_Request(
        domainName,
        fileName,

    );
}; }
    return _cached_decoder_for_RequestDomainUpload_Request(el);
}

let _cached_encoder_for_RequestDomainUpload_Request: $.ASN1Encoder<RequestDomainUpload_Request> | null = null;

/**
 * @summary Encodes a(n) RequestDomainUpload_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestDomainUpload_Request, encoded as an ASN.1 Element.
 */
export
function _encode_RequestDomainUpload_Request (value: RequestDomainUpload_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestDomainUpload_Request) { _cached_encoder_for_RequestDomainUpload_Request = function (value: RequestDomainUpload_Request, elGetter: $.ASN1Encoder<RequestDomainUpload_Request>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Identifier, $.BER)(value.domainName, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_FileName, $.BER)(value.fileName, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RequestDomainUpload_Request(value, elGetter);
}


/* eslint-enable */
