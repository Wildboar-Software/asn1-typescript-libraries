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
import { URI, _decode_URI, _encode_URI } from "../MachineReadableBiometricTestingAndReportingTestReport/URI.ta.mjs";
// export { URI, _decode_URI, _encode_URI } from "../MachineReadableBiometricTestingAndReportingTestReport/URI.ta.mjs";
import { TypeDocument, _enum_for_TypeDocument, TypeDocument_article /* IMPORTED_LONG_ENUMERATION_ITEM */, article /* IMPORTED_SHORT_ENUMERATION_ITEM */, TypeDocument_technical_report /* IMPORTED_LONG_ENUMERATION_ITEM */, technical_report /* IMPORTED_SHORT_ENUMERATION_ITEM */, TypeDocument_in_proceedings /* IMPORTED_LONG_ENUMERATION_ITEM */, in_proceedings /* IMPORTED_SHORT_ENUMERATION_ITEM */, TypeDocument_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, TypeDocument_book /* IMPORTED_LONG_ENUMERATION_ITEM */, book /* IMPORTED_SHORT_ENUMERATION_ITEM */, TypeDocument_in_book /* IMPORTED_LONG_ENUMERATION_ITEM */, in_book /* IMPORTED_SHORT_ENUMERATION_ITEM */, TypeDocument_collection /* IMPORTED_LONG_ENUMERATION_ITEM */, collection /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TypeDocument, _encode_TypeDocument } from "../MachineReadableBiometricTestingAndReportingTestReport/TypeDocument.ta.mjs";
// export { TypeDocument, _enum_for_TypeDocument, TypeDocument_article /* IMPORTED_LONG_ENUMERATION_ITEM */, article /* IMPORTED_SHORT_ENUMERATION_ITEM */, TypeDocument_technical_report /* IMPORTED_LONG_ENUMERATION_ITEM */, technical_report /* IMPORTED_SHORT_ENUMERATION_ITEM */, TypeDocument_in_proceedings /* IMPORTED_LONG_ENUMERATION_ITEM */, in_proceedings /* IMPORTED_SHORT_ENUMERATION_ITEM */, TypeDocument_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, TypeDocument_book /* IMPORTED_LONG_ENUMERATION_ITEM */, book /* IMPORTED_SHORT_ENUMERATION_ITEM */, TypeDocument_in_book /* IMPORTED_LONG_ENUMERATION_ITEM */, in_book /* IMPORTED_SHORT_ENUMERATION_ITEM */, TypeDocument_collection /* IMPORTED_LONG_ENUMERATION_ITEM */, collection /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TypeDocument, _encode_TypeDocument } from "../MachineReadableBiometricTestingAndReportingTestReport/TypeDocument.ta.mjs";
import { Date, _decode_Date, _encode_Date } from "../MachineReadableBiometricTestingAndReportingTestReport/Date.ta.mjs";
// export { Date, _decode_Date, _encode_Date } from "../MachineReadableBiometricTestingAndReportingTestReport/Date.ta.mjs";
import { Availability, _enum_for_Availability, Availability_public /* IMPORTED_LONG_ENUMERATION_ITEM */, public_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, Availability_restricted /* IMPORTED_LONG_ENUMERATION_ITEM */, restricted /* IMPORTED_SHORT_ENUMERATION_ITEM */, Availability_unavailable /* IMPORTED_LONG_ENUMERATION_ITEM */, unavailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, Availability_superseded /* IMPORTED_LONG_ENUMERATION_ITEM */, superseded /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Availability, _encode_Availability } from "../MachineReadableBiometricTestingAndReportingTestReport/Availability.ta.mjs";
// export { Availability, _enum_for_Availability, Availability_public /* IMPORTED_LONG_ENUMERATION_ITEM */, public_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, Availability_restricted /* IMPORTED_LONG_ENUMERATION_ITEM */, restricted /* IMPORTED_SHORT_ENUMERATION_ITEM */, Availability_unavailable /* IMPORTED_LONG_ENUMERATION_ITEM */, unavailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, Availability_superseded /* IMPORTED_LONG_ENUMERATION_ITEM */, superseded /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Availability, _encode_Availability } from "../MachineReadableBiometricTestingAndReportingTestReport/Availability.ta.mjs";


/**
 * @summary ExternalDocument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExternalDocument ::= SEQUENCE {
 *     link            URI,
 *     title           VisibleString,
 *     authors         SEQUENCE OF VisibleString OPTIONAL,
 *     publisher       VisibleString OPTIONAL,
 *     editor          VisibleString OPTIONAL,
 *     typeDocument    TypeDocument OPTIONAL,
 *     publicationDate Date OPTIONAL,
 *     availability    Availability
 * }
 * ```
 * 
 * @class
 */
export
class ExternalDocument {
    constructor (
        /**
         * @summary `link`.
         * @public
         * @readonly
         */
        readonly link: URI,
        /**
         * @summary `title`.
         * @public
         * @readonly
         */
        readonly title: VisibleString,
        /**
         * @summary `authors`.
         * @public
         * @readonly
         */
        readonly authors: OPTIONAL<VisibleString[]>,
        /**
         * @summary `publisher`.
         * @public
         * @readonly
         */
        readonly publisher: OPTIONAL<VisibleString>,
        /**
         * @summary `editor`.
         * @public
         * @readonly
         */
        readonly editor: OPTIONAL<VisibleString>,
        /**
         * @summary `typeDocument`.
         * @public
         * @readonly
         */
        readonly typeDocument: OPTIONAL<TypeDocument>,
        /**
         * @summary `publicationDate`.
         * @public
         * @readonly
         */
        readonly publicationDate: OPTIONAL<Date>,
        /**
         * @summary `availability`.
         * @public
         * @readonly
         */
        readonly availability: Availability
    ) {}

    /**
     * @summary Restructures an object into a ExternalDocument
     * @description
     * 
     * This takes an `object` and converts it to a `ExternalDocument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExternalDocument`.
     * @returns {ExternalDocument}
     */
    public static _from_object (_o: { [_K in keyof (ExternalDocument)]: (ExternalDocument)[_K] }): ExternalDocument {
        return new ExternalDocument(_o.link, _o.title, _o.authors, _o.publisher, _o.editor, _o.typeDocument, _o.publicationDate, _o.availability);
    }

        /**
         * @summary The enum used as the type of the component `typeDocument`
         * @public
         * @static
         */

    public static _enum_for_typeDocument = _enum_for_TypeDocument;        /**
         * @summary The enum used as the type of the component `availability`
         * @public
         * @static
         */

    public static _enum_for_availability = _enum_for_Availability;
}

/**
 * @summary The Leading Root Component Types of ExternalDocument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ExternalDocument: $.ComponentSpec[] = [
    new $.ComponentSpec("link", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("title", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("authors", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("publisher", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("editor", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("typeDocument", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("publicationDate", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("availability", false, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of ExternalDocument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ExternalDocument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ExternalDocument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ExternalDocument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ExternalDocument: $.ASN1Decoder<ExternalDocument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExternalDocument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExternalDocument (el: _Element): ExternalDocument {
    if (!_cached_decoder_for_ExternalDocument) { _cached_decoder_for_ExternalDocument = function (el: _Element): ExternalDocument {
    let link!: URI;
    let title!: VisibleString;
    let authors: OPTIONAL<VisibleString[]>;
    let publisher: OPTIONAL<VisibleString>;
    let editor: OPTIONAL<VisibleString>;
    let typeDocument: OPTIONAL<TypeDocument>;
    let publicationDate: OPTIONAL<Date>;
    let availability!: Availability;
    const callbacks: $.DecodingMap = {
        "link": (_el: _Element): void => { link = _decode_URI(_el); },
        "title": (_el: _Element): void => { title = $._decodeVisibleString(_el); },
        "authors": (_el: _Element): void => { authors = $._decodeSequenceOf<VisibleString>(() => $._decodeVisibleString)(_el); },
        "publisher": (_el: _Element): void => { publisher = $._decodeVisibleString(_el); },
        "editor": (_el: _Element): void => { editor = $._decodeVisibleString(_el); },
        "typeDocument": (_el: _Element): void => { typeDocument = _decode_TypeDocument(_el); },
        "publicationDate": (_el: _Element): void => { publicationDate = _decode_Date(_el); },
        "availability": (_el: _Element): void => { availability = _decode_Availability(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ExternalDocument,
        _extension_additions_list_spec_for_ExternalDocument,
        _root_component_type_list_2_spec_for_ExternalDocument,
        undefined,
    );
    return new ExternalDocument(
        link,
        title,
        authors,
        publisher,
        editor,
        typeDocument,
        publicationDate,
        availability
    );
}; }
    return _cached_decoder_for_ExternalDocument(el);
}

let _cached_encoder_for_ExternalDocument: $.ASN1Encoder<ExternalDocument> | null = null;

/**
 * @summary Encodes a(n) ExternalDocument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExternalDocument, encoded as an ASN.1 Element.
 */
export
function _encode_ExternalDocument (value: ExternalDocument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExternalDocument) { _cached_encoder_for_ExternalDocument = function (value: ExternalDocument, elGetter: $.ASN1Encoder<ExternalDocument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 0, () => _encode_URI, $.BER)(value.link, $.BER),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeVisibleString, $.BER)(value.title, $.BER),
            /* IF_ABSENT */ ((value.authors === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<VisibleString>(() => $._encodeVisibleString, $.BER), $.BER)(value.authors, $.BER)),
            /* IF_ABSENT */ ((value.publisher === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeVisibleString, $.BER)(value.publisher, $.BER)),
            /* IF_ABSENT */ ((value.editor === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeVisibleString, $.BER)(value.editor, $.BER)),
            /* IF_ABSENT */ ((value.typeDocument === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_TypeDocument, $.BER)(value.typeDocument, $.BER)),
            /* IF_ABSENT */ ((value.publicationDate === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_Date, $.BER)(value.publicationDate, $.BER)),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 7, () => _encode_Availability, $.BER)(value.availability, $.BER),
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ExternalDocument(value, elGetter);
}


/* eslint-enable */
