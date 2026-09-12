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
import { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";
// export { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";


/**
 * @summary FileAttributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FileAttributes ::= SEQUENCE {
 *     sizeOfFile       [0] IMPLICIT Unsigned32, -- in octets
 *     lastModified     [1] IMPLICIT GeneralizedTime OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class FileAttributes {
    constructor (
        /**
         * @summary `sizeOfFile`.
         * @public
         * @readonly
         */
        readonly sizeOfFile: Unsigned32,
        /**
         * @summary `lastModified`.
         * @public
         * @readonly
         */
        readonly lastModified: OPTIONAL<GeneralizedTime>
    ) {}

    /**
     * @summary Restructures an object into a FileAttributes
     * @description
     * 
     * This takes an `object` and converts it to a `FileAttributes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FileAttributes`.
     * @returns {FileAttributes}
     */
    public static _from_object (_o: { [_K in keyof (FileAttributes)]: (FileAttributes)[_K] }): FileAttributes {
        return new FileAttributes(_o.sizeOfFile, _o.lastModified);
    }


}

/**
 * @summary The Leading Root Component Types of FileAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FileAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec("sizeOfFile", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("lastModified", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of FileAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FileAttributes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FileAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FileAttributes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FileAttributes: $.ASN1Decoder<FileAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FileAttributes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FileAttributes (el: _Element): FileAttributes {
    if (!_cached_decoder_for_FileAttributes) { _cached_decoder_for_FileAttributes = function (el: _Element): FileAttributes {
    let sizeOfFile!: Unsigned32;
    let lastModified: OPTIONAL<GeneralizedTime>;
    const callbacks: $.DecodingMap = {
        "sizeOfFile": (_el: _Element): void => { sizeOfFile = $._decode_implicit<Unsigned32>(() => _decode_Unsigned32)(_el); },
        "lastModified": (_el: _Element): void => { lastModified = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_FileAttributes,
        _extension_additions_list_spec_for_FileAttributes,
        _root_component_type_list_2_spec_for_FileAttributes,
        undefined,
    );
    return new FileAttributes(
        sizeOfFile,
        lastModified
    );
}; }
    return _cached_decoder_for_FileAttributes(el);
}

let _cached_encoder_for_FileAttributes: $.ASN1Encoder<FileAttributes> | null = null;

/**
 * @summary Encodes a(n) FileAttributes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FileAttributes, encoded as an ASN.1 Element.
 */
export
function _encode_FileAttributes (value: FileAttributes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FileAttributes) { _cached_encoder_for_FileAttributes = function (value: FileAttributes, elGetter: $.ASN1Encoder<FileAttributes>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_Unsigned32, $.BER)(value.sizeOfFile, $.BER),
            /* IF_ABSENT  */ ((value.lastModified === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeGeneralizedTime, $.BER)(value.lastModified, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_FileAttributes(value, elGetter);
}


/* eslint-enable */
