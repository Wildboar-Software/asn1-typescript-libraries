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
import { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";
// export { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";


/**
 * @summary InitiateDownloadSequence_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InitiateDownloadSequence-Request ::= SEQUENCE {
 *    domainName                 [0] IMPLICIT Identifier,
 *    listOfCapabilities         [1] IMPLICIT SEQUENCE OF MMSString,
 *    sharable                   [2] IMPLICIT BOOLEAN }
 * ```
 * 
 * @class
 */
export
class InitiateDownloadSequence_Request {
    constructor (
        /**
         * @summary `domainName`.
         * @public
         * @readonly
         */
        readonly domainName: Identifier,
        /**
         * @summary `listOfCapabilities`.
         * @public
         * @readonly
         */
        readonly listOfCapabilities: MMSString[],
        /**
         * @summary `sharable`.
         * @public
         * @readonly
         */
        readonly sharable: BOOLEAN
    ) {}

    /**
     * @summary Restructures an object into a InitiateDownloadSequence_Request
     * @description
     * 
     * This takes an `object` and converts it to a `InitiateDownloadSequence_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InitiateDownloadSequence_Request`.
     * @returns {InitiateDownloadSequence_Request}
     */
    public static _from_object (_o: { [_K in keyof (InitiateDownloadSequence_Request)]: (InitiateDownloadSequence_Request)[_K] }): InitiateDownloadSequence_Request {
        return new InitiateDownloadSequence_Request(_o.domainName, _o.listOfCapabilities, _o.sharable);
    }


}

/**
 * @summary The Leading Root Component Types of InitiateDownloadSequence_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_InitiateDownloadSequence_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("domainName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("listOfCapabilities", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sharable", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of InitiateDownloadSequence_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_InitiateDownloadSequence_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of InitiateDownloadSequence_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_InitiateDownloadSequence_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_InitiateDownloadSequence_Request: $.ASN1Decoder<InitiateDownloadSequence_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InitiateDownloadSequence_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InitiateDownloadSequence_Request (el: _Element): InitiateDownloadSequence_Request {
    if (!_cached_decoder_for_InitiateDownloadSequence_Request) { _cached_decoder_for_InitiateDownloadSequence_Request = function (el: _Element): InitiateDownloadSequence_Request {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("InitiateDownloadSequence-Request contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "domainName";
    sequence[1].name = "listOfCapabilities";
    sequence[2].name = "sharable";
    let domainName!: Identifier;
    let listOfCapabilities!: MMSString[];
    let sharable!: BOOLEAN;
    domainName = $._decode_explicit<Identifier>(() => _decode_Identifier)(sequence[0]);
    listOfCapabilities = $._decode_implicit<MMSString[]>(() => $._decodeSequenceOf<MMSString>(() => _decode_MMSString))(sequence[1]);
    sharable = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(sequence[2]);
    return new InitiateDownloadSequence_Request(
        domainName,
        listOfCapabilities,
        sharable,

    );
}; }
    return _cached_decoder_for_InitiateDownloadSequence_Request(el);
}

let _cached_encoder_for_InitiateDownloadSequence_Request: $.ASN1Encoder<InitiateDownloadSequence_Request> | null = null;

/**
 * @summary Encodes a(n) InitiateDownloadSequence_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitiateDownloadSequence_Request, encoded as an ASN.1 Element.
 */
export
function _encode_InitiateDownloadSequence_Request (value: InitiateDownloadSequence_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InitiateDownloadSequence_Request) { _cached_encoder_for_InitiateDownloadSequence_Request = function (value: InitiateDownloadSequence_Request, elGetter: $.ASN1Encoder<InitiateDownloadSequence_Request>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Identifier, $.BER)(value.domainName, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<MMSString>(() => _encode_MMSString, $.BER), $.BER)(value.listOfCapabilities, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.sharable, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_InitiateDownloadSequence_Request(value, elGetter);
}


/* eslint-enable */
