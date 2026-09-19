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
import { DocumentTypeListVersion, DocumentTypeListVersion_v0 /* IMPORTED_LONG_NAMED_INTEGER */, v0 /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_DocumentTypeListVersion, _encode_DocumentTypeListVersion } from "../Doc-9303-Part-12-Module/DocumentTypeListVersion.ta.mjs";
// export { DocumentTypeListVersion, DocumentTypeListVersion_v0 /* IMPORTED_LONG_NAMED_INTEGER */, v0 /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_DocumentTypeListVersion, _encode_DocumentTypeListVersion } from "../Doc-9303-Part-12-Module/DocumentTypeListVersion.ta.mjs";
import { DocumentType, _decode_DocumentType, _encode_DocumentType } from "../Doc-9303-Part-12-Module/DocumentType.ta.mjs";
// export { DocumentType, _decode_DocumentType, _encode_DocumentType } from "../Doc-9303-Part-12-Module/DocumentType.ta.mjs";


/**
 * @summary DocumentTypeListSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DocumentTypeListSyntax ::= SEQUENCE {
 *     version     DocumentTypeListVersion,
 *     docTypeList SET OF DocumentType
 * }
 * ```
 * 
 * @class
 */
export
class DocumentTypeListSyntax {
    constructor (
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: DocumentTypeListVersion,
        /**
         * @summary `docTypeList`.
         * @public
         * @readonly
         */
        readonly docTypeList: DocumentType[]
    ) {}

    /**
     * @summary Restructures an object into a DocumentTypeListSyntax
     * @description
     * 
     * This takes an `object` and converts it to a `DocumentTypeListSyntax`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DocumentTypeListSyntax`.
     * @returns {DocumentTypeListSyntax}
     */
    public static _from_object (_o: { [_K in keyof (DocumentTypeListSyntax)]: (DocumentTypeListSyntax)[_K] }): DocumentTypeListSyntax {
        return new DocumentTypeListSyntax(_o.version, _o.docTypeList);
    }


}

/**
 * @summary The Leading Root Component Types of DocumentTypeListSyntax
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DocumentTypeListSyntax: $.ComponentSpec[] = [
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("docTypeList", false, $.hasTag(_TagClass.universal, 17))
];

/**
 * @summary The Trailing Root Component Types of DocumentTypeListSyntax
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DocumentTypeListSyntax: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DocumentTypeListSyntax
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DocumentTypeListSyntax: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DocumentTypeListSyntax: $.ASN1Decoder<DocumentTypeListSyntax> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DocumentTypeListSyntax
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DocumentTypeListSyntax (el: _Element): DocumentTypeListSyntax {
    if (!_cached_decoder_for_DocumentTypeListSyntax) { _cached_decoder_for_DocumentTypeListSyntax = function (el: _Element): DocumentTypeListSyntax {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("DocumentTypeListSyntax contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "version";
    sequence[1].name = "docTypeList";
    let version!: DocumentTypeListVersion;
    let docTypeList!: DocumentType[];
    version = _decode_DocumentTypeListVersion(sequence[0]);
    docTypeList = $._decodeSetOf<DocumentType>(() => _decode_DocumentType)(sequence[1]);
    return new DocumentTypeListSyntax(
        version,
        docTypeList,

    );
}; }
    return _cached_decoder_for_DocumentTypeListSyntax(el);
}

let _cached_encoder_for_DocumentTypeListSyntax: $.ASN1Encoder<DocumentTypeListSyntax> | null = null;

/**
 * @summary Encodes a(n) DocumentTypeListSyntax into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DocumentTypeListSyntax, encoded as an ASN.1 Element.
 */
export
function _encode_DocumentTypeListSyntax (value: DocumentTypeListSyntax, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DocumentTypeListSyntax) { _cached_encoder_for_DocumentTypeListSyntax = function (value: DocumentTypeListSyntax, elGetter: $.ASN1Encoder<DocumentTypeListSyntax>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DocumentTypeListVersion(value.version, $.BER),
            /* REQUIRED   */ $._encodeSetOf<DocumentType>(() => _encode_DocumentType, $.BER)(value.docTypeList, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DocumentTypeListSyntax(value, elGetter);
}


/* eslint-enable */
