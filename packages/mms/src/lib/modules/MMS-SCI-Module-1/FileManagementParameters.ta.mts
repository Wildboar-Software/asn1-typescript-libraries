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
import { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";
// export { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";


/**
 * @summary FileManagementParameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FileManagementParameters ::= SEQUENCE {
 *     fileName         [0] MMSString
 * }
 * ```
 * 
 * @class
 */
export
class FileManagementParameters {
    constructor (
        /**
         * @summary `fileName`.
         * @public
         * @readonly
         */
        readonly fileName: MMSString
    ) {}

    /**
     * @summary Restructures an object into a FileManagementParameters
     * @description
     * 
     * This takes an `object` and converts it to a `FileManagementParameters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FileManagementParameters`.
     * @returns {FileManagementParameters}
     */
    public static _from_object (_o: { [_K in keyof (FileManagementParameters)]: (FileManagementParameters)[_K] }): FileManagementParameters {
        return new FileManagementParameters(_o.fileName);
    }


}

/**
 * @summary The Leading Root Component Types of FileManagementParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FileManagementParameters: $.ComponentSpec[] = [
    new $.ComponentSpec("fileName", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of FileManagementParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FileManagementParameters: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FileManagementParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FileManagementParameters: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FileManagementParameters: $.ASN1Decoder<FileManagementParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FileManagementParameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FileManagementParameters (el: _Element): FileManagementParameters {
    if (!_cached_decoder_for_FileManagementParameters) { _cached_decoder_for_FileManagementParameters = function (el: _Element): FileManagementParameters {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("FileManagementParameters contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "fileName";
    let fileName!: MMSString;
    fileName = $._decode_explicit<MMSString>(() => _decode_MMSString)(sequence[0]);
    return new FileManagementParameters(
        fileName,

    );
}; }
    return _cached_decoder_for_FileManagementParameters(el);
}

let _cached_encoder_for_FileManagementParameters: $.ASN1Encoder<FileManagementParameters> | null = null;

/**
 * @summary Encodes a(n) FileManagementParameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FileManagementParameters, encoded as an ASN.1 Element.
 */
export
function _encode_FileManagementParameters (value: FileManagementParameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FileManagementParameters) { _cached_encoder_for_FileManagementParameters = function (value: FileManagementParameters, elGetter: $.ASN1Encoder<FileManagementParameters>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_MMSString, $.BER)(value.fileName, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_FileManagementParameters(value, elGetter);
}


/* eslint-enable */
