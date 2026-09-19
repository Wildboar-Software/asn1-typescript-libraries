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
import { TargetInfo, _decode_TargetInfo, _encode_TargetInfo } from "../RecordSyntax-explain/TargetInfo.ta.mjs";
// export { TargetInfo, _decode_TargetInfo, _encode_TargetInfo } from "../RecordSyntax-explain/TargetInfo.ta.mjs";
import { DatabaseInfo, _decode_DatabaseInfo, _encode_DatabaseInfo } from "../RecordSyntax-explain/DatabaseInfo.ta.mjs";
// export { DatabaseInfo, _decode_DatabaseInfo, _encode_DatabaseInfo } from "../RecordSyntax-explain/DatabaseInfo.ta.mjs";
import { SchemaInfo, _decode_SchemaInfo, _encode_SchemaInfo } from "../RecordSyntax-explain/SchemaInfo.ta.mjs";
// export { SchemaInfo, _decode_SchemaInfo, _encode_SchemaInfo } from "../RecordSyntax-explain/SchemaInfo.ta.mjs";
import { TagSetInfo, _decode_TagSetInfo, _encode_TagSetInfo } from "../RecordSyntax-explain/TagSetInfo.ta.mjs";
// export { TagSetInfo, _decode_TagSetInfo, _encode_TagSetInfo } from "../RecordSyntax-explain/TagSetInfo.ta.mjs";
import { RecordSyntaxInfo, _decode_RecordSyntaxInfo, _encode_RecordSyntaxInfo } from "../RecordSyntax-explain/RecordSyntaxInfo.ta.mjs";
// export { RecordSyntaxInfo, _decode_RecordSyntaxInfo, _encode_RecordSyntaxInfo } from "../RecordSyntax-explain/RecordSyntaxInfo.ta.mjs";
import { AttributeSetInfo, _decode_AttributeSetInfo, _encode_AttributeSetInfo } from "../RecordSyntax-explain/AttributeSetInfo.ta.mjs";
// export { AttributeSetInfo, _decode_AttributeSetInfo, _encode_AttributeSetInfo } from "../RecordSyntax-explain/AttributeSetInfo.ta.mjs";
import { TermListInfo, _decode_TermListInfo, _encode_TermListInfo } from "../RecordSyntax-explain/TermListInfo.ta.mjs";
// export { TermListInfo, _decode_TermListInfo, _encode_TermListInfo } from "../RecordSyntax-explain/TermListInfo.ta.mjs";
import { ExtendedServicesInfo, _decode_ExtendedServicesInfo, _encode_ExtendedServicesInfo } from "../RecordSyntax-explain/ExtendedServicesInfo.ta.mjs";
// export { ExtendedServicesInfo, _decode_ExtendedServicesInfo, _encode_ExtendedServicesInfo } from "../RecordSyntax-explain/ExtendedServicesInfo.ta.mjs";
import { AttributeDetails, _decode_AttributeDetails, _encode_AttributeDetails } from "../RecordSyntax-explain/AttributeDetails.ta.mjs";
// export { AttributeDetails, _decode_AttributeDetails, _encode_AttributeDetails } from "../RecordSyntax-explain/AttributeDetails.ta.mjs";
import { TermListDetails, _decode_TermListDetails, _encode_TermListDetails } from "../RecordSyntax-explain/TermListDetails.ta.mjs";
// export { TermListDetails, _decode_TermListDetails, _encode_TermListDetails } from "../RecordSyntax-explain/TermListDetails.ta.mjs";
import { ElementSetDetails, _decode_ElementSetDetails, _encode_ElementSetDetails } from "../RecordSyntax-explain/ElementSetDetails.ta.mjs";
// export { ElementSetDetails, _decode_ElementSetDetails, _encode_ElementSetDetails } from "../RecordSyntax-explain/ElementSetDetails.ta.mjs";
import { RetrievalRecordDetails, _decode_RetrievalRecordDetails, _encode_RetrievalRecordDetails } from "../RecordSyntax-explain/RetrievalRecordDetails.ta.mjs";
// export { RetrievalRecordDetails, _decode_RetrievalRecordDetails, _encode_RetrievalRecordDetails } from "../RecordSyntax-explain/RetrievalRecordDetails.ta.mjs";
import { SortDetails, _decode_SortDetails, _encode_SortDetails } from "../RecordSyntax-explain/SortDetails.ta.mjs";
// export { SortDetails, _decode_SortDetails, _encode_SortDetails } from "../RecordSyntax-explain/SortDetails.ta.mjs";
import { ProcessingInformation, _decode_ProcessingInformation, _encode_ProcessingInformation } from "../RecordSyntax-explain/ProcessingInformation.ta.mjs";
// export { ProcessingInformation, _decode_ProcessingInformation, _encode_ProcessingInformation } from "../RecordSyntax-explain/ProcessingInformation.ta.mjs";
import { VariantSetInfo, _decode_VariantSetInfo, _encode_VariantSetInfo } from "../RecordSyntax-explain/VariantSetInfo.ta.mjs";
// export { VariantSetInfo, _decode_VariantSetInfo, _encode_VariantSetInfo } from "../RecordSyntax-explain/VariantSetInfo.ta.mjs";
import { UnitInfo, _decode_UnitInfo, _encode_UnitInfo } from "../RecordSyntax-explain/UnitInfo.ta.mjs";
// export { UnitInfo, _decode_UnitInfo, _encode_UnitInfo } from "../RecordSyntax-explain/UnitInfo.ta.mjs";
import { CategoryList, _decode_CategoryList, _encode_CategoryList } from "../RecordSyntax-explain/CategoryList.ta.mjs";
// export { CategoryList, _decode_CategoryList, _encode_CategoryList } from "../RecordSyntax-explain/CategoryList.ta.mjs";


/**
 * @summary Explain_Record
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Explain-Record  ::=  CHOICE{
 *    -- Each of these may be used as search term  
 *    -- when Use attribute is 'explain-category'.
 *   targetInfo                 [0]   IMPLICIT TargetInfo,
 *   databaseInfo               [1]   IMPLICIT DatabaseInfo,
 *   schemaInfo                 [2]   IMPLICIT SchemaInfo,
 *   tagSetInfo                 [3]   IMPLICIT TagSetInfo,
 *   recordSyntaxInfo           [4]   IMPLICIT RecordSyntaxInfo,
 *   attributeSetInfo           [5]   IMPLICIT AttributeSetInfo,
 *   termListInfo               [6]   IMPLICIT TermListInfo,
 *   extendedServicesInfo       [7]   IMPLICIT ExtendedServicesInfo,
 *   attributeDetails           [8]   IMPLICIT AttributeDetails,
 *   termListDetails            [9]   IMPLICIT TermListDetails,
 *   elementSetDetails          [10]  IMPLICIT ElementSetDetails,
 *   retrievalRecordDetails     [11]  IMPLICIT RetrievalRecordDetails,
 *   sortDetails                [12]  IMPLICIT SortDetails,
 *   processing                 [13]  IMPLICIT ProcessingInformation,
 *   variants                   [14]  IMPLICIT VariantSetInfo,
 *   units                      [15]  IMPLICIT UnitInfo,
 *   categoryList               [100] IMPLICIT CategoryList}
 * ```
 */
export
type Explain_Record =
    { targetInfo: TargetInfo } /* CHOICE_ALT_ROOT */
    | { databaseInfo: DatabaseInfo } /* CHOICE_ALT_ROOT */
    | { schemaInfo: SchemaInfo } /* CHOICE_ALT_ROOT */
    | { tagSetInfo: TagSetInfo } /* CHOICE_ALT_ROOT */
    | { recordSyntaxInfo: RecordSyntaxInfo } /* CHOICE_ALT_ROOT */
    | { attributeSetInfo: AttributeSetInfo } /* CHOICE_ALT_ROOT */
    | { termListInfo: TermListInfo } /* CHOICE_ALT_ROOT */
    | { extendedServicesInfo: ExtendedServicesInfo } /* CHOICE_ALT_ROOT */
    | { attributeDetails: AttributeDetails } /* CHOICE_ALT_ROOT */
    | { termListDetails: TermListDetails } /* CHOICE_ALT_ROOT */
    | { elementSetDetails: ElementSetDetails } /* CHOICE_ALT_ROOT */
    | { retrievalRecordDetails: RetrievalRecordDetails } /* CHOICE_ALT_ROOT */
    | { sortDetails: SortDetails } /* CHOICE_ALT_ROOT */
    | { processing: ProcessingInformation } /* CHOICE_ALT_ROOT */
    | { variants: VariantSetInfo } /* CHOICE_ALT_ROOT */
    | { units: UnitInfo } /* CHOICE_ALT_ROOT */
    | { categoryList: CategoryList } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Explain_Record: $.ASN1Decoder<Explain_Record> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Explain_Record
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Explain_Record (el: _Element): Explain_Record {
    if (!_cached_decoder_for_Explain_Record) { _cached_decoder_for_Explain_Record = $._decode_inextensible_choice<Explain_Record>({
    "CONTEXT 0": [ "targetInfo", $._decode_implicit<TargetInfo>(() => _decode_TargetInfo) ],
    "CONTEXT 1": [ "databaseInfo", $._decode_implicit<DatabaseInfo>(() => _decode_DatabaseInfo) ],
    "CONTEXT 2": [ "schemaInfo", $._decode_implicit<SchemaInfo>(() => _decode_SchemaInfo) ],
    "CONTEXT 3": [ "tagSetInfo", $._decode_implicit<TagSetInfo>(() => _decode_TagSetInfo) ],
    "CONTEXT 4": [ "recordSyntaxInfo", $._decode_implicit<RecordSyntaxInfo>(() => _decode_RecordSyntaxInfo) ],
    "CONTEXT 5": [ "attributeSetInfo", $._decode_implicit<AttributeSetInfo>(() => _decode_AttributeSetInfo) ],
    "CONTEXT 6": [ "termListInfo", $._decode_implicit<TermListInfo>(() => _decode_TermListInfo) ],
    "CONTEXT 7": [ "extendedServicesInfo", $._decode_implicit<ExtendedServicesInfo>(() => _decode_ExtendedServicesInfo) ],
    "CONTEXT 8": [ "attributeDetails", $._decode_implicit<AttributeDetails>(() => _decode_AttributeDetails) ],
    "CONTEXT 9": [ "termListDetails", $._decode_implicit<TermListDetails>(() => _decode_TermListDetails) ],
    "CONTEXT 10": [ "elementSetDetails", $._decode_implicit<ElementSetDetails>(() => _decode_ElementSetDetails) ],
    "CONTEXT 11": [ "retrievalRecordDetails", $._decode_implicit<RetrievalRecordDetails>(() => _decode_RetrievalRecordDetails) ],
    "CONTEXT 12": [ "sortDetails", $._decode_implicit<SortDetails>(() => _decode_SortDetails) ],
    "CONTEXT 13": [ "processing", $._decode_implicit<ProcessingInformation>(() => _decode_ProcessingInformation) ],
    "CONTEXT 14": [ "variants", $._decode_implicit<VariantSetInfo>(() => _decode_VariantSetInfo) ],
    "CONTEXT 15": [ "units", $._decode_implicit<UnitInfo>(() => _decode_UnitInfo) ],
    "CONTEXT 100": [ "categoryList", $._decode_implicit<CategoryList>(() => _decode_CategoryList) ]
}); }
    return _cached_decoder_for_Explain_Record(el);
}

let _cached_encoder_for_Explain_Record: $.ASN1Encoder<Explain_Record> | null = null;

/**
 * @summary Encodes a(n) Explain_Record into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Explain_Record, encoded as an ASN.1 Element.
 */
export
function _encode_Explain_Record (value: Explain_Record, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Explain_Record) { _cached_encoder_for_Explain_Record = $._encode_choice<Explain_Record>({
    "targetInfo": $._encode_implicit(_TagClass.context, 0, () => _encode_TargetInfo, $.BER),
    "databaseInfo": $._encode_implicit(_TagClass.context, 1, () => _encode_DatabaseInfo, $.BER),
    "schemaInfo": $._encode_implicit(_TagClass.context, 2, () => _encode_SchemaInfo, $.BER),
    "tagSetInfo": $._encode_implicit(_TagClass.context, 3, () => _encode_TagSetInfo, $.BER),
    "recordSyntaxInfo": $._encode_implicit(_TagClass.context, 4, () => _encode_RecordSyntaxInfo, $.BER),
    "attributeSetInfo": $._encode_implicit(_TagClass.context, 5, () => _encode_AttributeSetInfo, $.BER),
    "termListInfo": $._encode_implicit(_TagClass.context, 6, () => _encode_TermListInfo, $.BER),
    "extendedServicesInfo": $._encode_implicit(_TagClass.context, 7, () => _encode_ExtendedServicesInfo, $.BER),
    "attributeDetails": $._encode_implicit(_TagClass.context, 8, () => _encode_AttributeDetails, $.BER),
    "termListDetails": $._encode_implicit(_TagClass.context, 9, () => _encode_TermListDetails, $.BER),
    "elementSetDetails": $._encode_implicit(_TagClass.context, 10, () => _encode_ElementSetDetails, $.BER),
    "retrievalRecordDetails": $._encode_implicit(_TagClass.context, 11, () => _encode_RetrievalRecordDetails, $.BER),
    "sortDetails": $._encode_implicit(_TagClass.context, 12, () => _encode_SortDetails, $.BER),
    "processing": $._encode_implicit(_TagClass.context, 13, () => _encode_ProcessingInformation, $.BER),
    "variants": $._encode_implicit(_TagClass.context, 14, () => _encode_VariantSetInfo, $.BER),
    "units": $._encode_implicit(_TagClass.context, 15, () => _encode_UnitInfo, $.BER),
    "categoryList": $._encode_implicit(_TagClass.context, 100, () => _encode_CategoryList, $.BER),
}, $.BER); }
    return _cached_encoder_for_Explain_Record(value, elGetter);
}


/* eslint-enable */
