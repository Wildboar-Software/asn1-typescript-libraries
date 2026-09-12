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
import { FileName, _decode_FileName, _encode_FileName } from "../ISO-9506-MMS-1/FileName.ta.mjs";
// export { FileName, _decode_FileName, _encode_FileName } from "../ISO-9506-MMS-1/FileName.ta.mjs";


/**
 * @summary FileDirectory_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FileDirectory-Request ::= SEQUENCE {
 *     fileSpecification      [0] IMPLICIT FileName OPTIONAL,
 *     continueAfter          [1] IMPLICIT FileName OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class FileDirectory_Request {
    constructor (
        /**
         * @summary `fileSpecification`.
         * @public
         * @readonly
         */
        readonly fileSpecification: OPTIONAL<FileName>,
        /**
         * @summary `continueAfter`.
         * @public
         * @readonly
         */
        readonly continueAfter: OPTIONAL<FileName>
    ) {}

    /**
     * @summary Restructures an object into a FileDirectory_Request
     * @description
     * 
     * This takes an `object` and converts it to a `FileDirectory_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FileDirectory_Request`.
     * @returns {FileDirectory_Request}
     */
    public static _from_object (_o: { [_K in keyof (FileDirectory_Request)]: (FileDirectory_Request)[_K] }): FileDirectory_Request {
        return new FileDirectory_Request(_o.fileSpecification, _o.continueAfter);
    }


}

/**
 * @summary The Leading Root Component Types of FileDirectory_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FileDirectory_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("fileSpecification", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("continueAfter", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of FileDirectory_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FileDirectory_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FileDirectory_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FileDirectory_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FileDirectory_Request: $.ASN1Decoder<FileDirectory_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FileDirectory_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FileDirectory_Request (el: _Element): FileDirectory_Request {
    if (!_cached_decoder_for_FileDirectory_Request) { _cached_decoder_for_FileDirectory_Request = function (el: _Element): FileDirectory_Request {
    let fileSpecification: OPTIONAL<FileName>;
    let continueAfter: OPTIONAL<FileName>;
    const callbacks: $.DecodingMap = {
        "fileSpecification": (_el: _Element): void => { fileSpecification = $._decode_implicit<FileName>(() => _decode_FileName)(_el); },
        "continueAfter": (_el: _Element): void => { continueAfter = $._decode_implicit<FileName>(() => _decode_FileName)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_FileDirectory_Request,
        _extension_additions_list_spec_for_FileDirectory_Request,
        _root_component_type_list_2_spec_for_FileDirectory_Request,
        undefined,
    );
    return new FileDirectory_Request(
        fileSpecification,
        continueAfter
    );
}; }
    return _cached_decoder_for_FileDirectory_Request(el);
}

let _cached_encoder_for_FileDirectory_Request: $.ASN1Encoder<FileDirectory_Request> | null = null;

/**
 * @summary Encodes a(n) FileDirectory_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FileDirectory_Request, encoded as an ASN.1 Element.
 */
export
function _encode_FileDirectory_Request (value: FileDirectory_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FileDirectory_Request) { _cached_encoder_for_FileDirectory_Request = function (value: FileDirectory_Request, elGetter: $.ASN1Encoder<FileDirectory_Request>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.fileSpecification === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_FileName, $.BER)(value.fileSpecification, $.BER)),
            /* IF_ABSENT  */ ((value.continueAfter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_FileName, $.BER)(value.continueAfter, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_FileDirectory_Request(value, elGetter);
}


/* eslint-enable */
