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
import { DiagFormat_tooMany, _decode_DiagFormat_tooMany, _encode_DiagFormat_tooMany } from "../DiagnosticFormatDiag1/DiagFormat-tooMany.ta.mjs";
// export { DiagFormat_tooMany, _decode_DiagFormat_tooMany, _encode_DiagFormat_tooMany } from "../DiagnosticFormatDiag1/DiagFormat-tooMany.ta.mjs";
import { DiagFormat_badSpec, _decode_DiagFormat_badSpec, _encode_DiagFormat_badSpec } from "../DiagnosticFormatDiag1/DiagFormat-badSpec.ta.mjs";
// export { DiagFormat_badSpec, _decode_DiagFormat_badSpec, _encode_DiagFormat_badSpec } from "../DiagnosticFormatDiag1/DiagFormat-badSpec.ta.mjs";
import { DiagFormat_dbUnavail, _decode_DiagFormat_dbUnavail, _encode_DiagFormat_dbUnavail } from "../DiagnosticFormatDiag1/DiagFormat-dbUnavail.ta.mjs";
// export { DiagFormat_dbUnavail, _decode_DiagFormat_dbUnavail, _encode_DiagFormat_dbUnavail } from "../DiagnosticFormatDiag1/DiagFormat-dbUnavail.ta.mjs";
import { DiagFormat_unSupOp, DiagFormat_unSupOp_and /* IMPORTED_LONG_NAMED_INTEGER */, and /* IMPORTED_SHORT_NAMED_INTEGER */, DiagFormat_unSupOp_or /* IMPORTED_LONG_NAMED_INTEGER */, or /* IMPORTED_SHORT_NAMED_INTEGER */, DiagFormat_unSupOp_and_not /* IMPORTED_LONG_NAMED_INTEGER */, and_not /* IMPORTED_SHORT_NAMED_INTEGER */, DiagFormat_unSupOp_prox /* IMPORTED_LONG_NAMED_INTEGER */, prox /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_DiagFormat_unSupOp, _encode_DiagFormat_unSupOp } from "../DiagnosticFormatDiag1/DiagFormat-unSupOp.ta.mjs";
// export { DiagFormat_unSupOp, DiagFormat_unSupOp_and /* IMPORTED_LONG_NAMED_INTEGER */, and /* IMPORTED_SHORT_NAMED_INTEGER */, DiagFormat_unSupOp_or /* IMPORTED_LONG_NAMED_INTEGER */, or /* IMPORTED_SHORT_NAMED_INTEGER */, DiagFormat_unSupOp_and_not /* IMPORTED_LONG_NAMED_INTEGER */, and_not /* IMPORTED_SHORT_NAMED_INTEGER */, DiagFormat_unSupOp_prox /* IMPORTED_LONG_NAMED_INTEGER */, prox /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_DiagFormat_unSupOp, _encode_DiagFormat_unSupOp } from "../DiagnosticFormatDiag1/DiagFormat-unSupOp.ta.mjs";
import { DiagFormat_attribute, _decode_DiagFormat_attribute, _encode_DiagFormat_attribute } from "../DiagnosticFormatDiag1/DiagFormat-attribute.ta.mjs";
// export { DiagFormat_attribute, _decode_DiagFormat_attribute, _encode_DiagFormat_attribute } from "../DiagnosticFormatDiag1/DiagFormat-attribute.ta.mjs";
import { DiagFormat_attCombo, _decode_DiagFormat_attCombo, _encode_DiagFormat_attCombo } from "../DiagnosticFormatDiag1/DiagFormat-attCombo.ta.mjs";
// export { DiagFormat_attCombo, _decode_DiagFormat_attCombo, _encode_DiagFormat_attCombo } from "../DiagnosticFormatDiag1/DiagFormat-attCombo.ta.mjs";
import { DiagFormat_term, _decode_DiagFormat_term, _encode_DiagFormat_term } from "../DiagnosticFormatDiag1/DiagFormat-term.ta.mjs";
// export { DiagFormat_term, _decode_DiagFormat_term, _encode_DiagFormat_term } from "../DiagnosticFormatDiag1/DiagFormat-term.ta.mjs";
import { DiagFormat_proximity, _decode_DiagFormat_proximity, _encode_DiagFormat_proximity } from "../DiagnosticFormatDiag1/DiagFormat-proximity.ta.mjs";
// export { DiagFormat_proximity, _decode_DiagFormat_proximity, _encode_DiagFormat_proximity } from "../DiagnosticFormatDiag1/DiagFormat-proximity.ta.mjs";
import { DiagFormat_scan, _decode_DiagFormat_scan, _encode_DiagFormat_scan } from "../DiagnosticFormatDiag1/DiagFormat-scan.ta.mjs";
// export { DiagFormat_scan, _decode_DiagFormat_scan, _encode_DiagFormat_scan } from "../DiagnosticFormatDiag1/DiagFormat-scan.ta.mjs";
import { DiagFormat_sort, _decode_DiagFormat_sort, _encode_DiagFormat_sort } from "../DiagnosticFormatDiag1/DiagFormat-sort.ta.mjs";
// export { DiagFormat_sort, _decode_DiagFormat_sort, _encode_DiagFormat_sort } from "../DiagnosticFormatDiag1/DiagFormat-sort.ta.mjs";
import { DiagFormat_segmentation, _decode_DiagFormat_segmentation, _encode_DiagFormat_segmentation } from "../DiagnosticFormatDiag1/DiagFormat-segmentation.ta.mjs";
// export { DiagFormat_segmentation, _decode_DiagFormat_segmentation, _encode_DiagFormat_segmentation } from "../DiagnosticFormatDiag1/DiagFormat-segmentation.ta.mjs";
import { DiagFormat_extServices, _decode_DiagFormat_extServices, _encode_DiagFormat_extServices } from "../DiagnosticFormatDiag1/DiagFormat-extServices.ta.mjs";
// export { DiagFormat_extServices, _decode_DiagFormat_extServices, _encode_DiagFormat_extServices } from "../DiagnosticFormatDiag1/DiagFormat-extServices.ta.mjs";
import { DiagFormat_accessCtrl, _decode_DiagFormat_accessCtrl, _encode_DiagFormat_accessCtrl } from "../DiagnosticFormatDiag1/DiagFormat-accessCtrl.ta.mjs";
// export { DiagFormat_accessCtrl, _decode_DiagFormat_accessCtrl, _encode_DiagFormat_accessCtrl } from "../DiagnosticFormatDiag1/DiagFormat-accessCtrl.ta.mjs";
import { DiagFormat_recordSyntax, _decode_DiagFormat_recordSyntax, _encode_DiagFormat_recordSyntax } from "../DiagnosticFormatDiag1/DiagFormat-recordSyntax.ta.mjs";
// export { DiagFormat_recordSyntax, _decode_DiagFormat_recordSyntax, _encode_DiagFormat_recordSyntax } from "../DiagnosticFormatDiag1/DiagFormat-recordSyntax.ta.mjs";


/**
 * @summary DiagFormat
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagFormat  ::=  CHOICE{
 * 
 * tooMany         [1000]    IMPLICIT SEQUENCE{
 *                            tooManyWhat    [1]   IMPLICIT INTEGER{
 *                                                     argumentWords          (1), 
 *                                                     truncatedWords         (2), 
 *                                                     booleanOperators       (3),
 *                                                     incompleteSubfields    (4), 
 *                                                     characters             (5),
 *                                                     recordsRetrieved       (6), 
 *                                                     dataBasesSpecified     (7),
 *                                                     resultSetsCreated      (8), 
 *                                                     indexTermsProcessed    (9)},
 *                            max            [2]   IMPLICIT INTEGER OPTIONAL},
 * 
 * 
 * badSpec         [1001]   IMPLICIT SEQUENCE{  
 *                       -- element set name or specification
 *                         spec       [1] IMPLICIT Specification, 
 *                                           -- esn or element spec not supported
 *                         db         [2] IMPLICIT DatabaseName OPTIONAL,
 *                                           -- if db specified, above spec not
 *                                           -- supported for db; otherwise,
 *                                           -- spec not supported period.
 *                         goodOnes   [3] IMPLICIT SEQUENCE OF Specification
 *                                                                   OPTIONAL  
 *                                           -- target supplies ones that are
 *                                           -- supported
 *                                           },
 * 
 * 
 * dbUnavail       [1002]   IMPLICIT SEQUENCE{ -- database unavailable
 *                           db    [1] IMPLICIT DatabaseName,
 *                           why   [2] IMPLICIT SEQUENCE{
 *                                     reasonCode      [1] IMPLICIT INTEGER{
 *                                                           doesNotExist        (0),
 *                                                           existsButUnavail    (1),
 *                                                           locked              (2),
 *                                                           accessDenied        (3)}
 *                                                               OPTIONAL,
 *                                     message         [2] IMPLICIT
 *                                                 InternationalString OPTIONAL}},
 * 
 * 
 * unSupOp         [1003]   IMPLICIT INTEGER{  -- unsupported operator
 *                           and       (0),
 *                           or        (1),
 *                           and-not   (2),
 *                           prox      (3)},
 * 
 * 
 * attribute       [1004]   IMPLICIT SEQUENCE{
 *                              -- Applies for unsupported attribute set,
 *                              -- attribute type, attribute value, or term (for
 *                              -- a given attribute type or value).
 *                         id         [1]    IMPLICIT OBJECT IDENTIFIER,
 *                                              -- if only "id" occurs, then
 *                                              -- attribute set is not supported
 *                         type       [2]    IMPLICIT INTEGER OPTIONAL,
 *                                              -- must occur if value occurs.
 *                         value      [3]    IMPLICIT INTEGER OPTIONAL,
 *                                              -- if omitted, and Type occurs,
 *                                              -- then Type is what is unsupported
 *                         term       [4]    Term OPTIONAL
 *                                              -- If occurs, term is illegal or
 *                                              -- not supported, for attribute
 *                                              -- value, if value occurs;
 *                                              -- otherwise, for type.
 *                                                 },
 * 
 * 
 * attCombo     [1005]   IMPLICIT SEQUENCE{ 
 *                              -- attribute combination not supported
 *                           unsupportedCombination    [1] IMPLICIT AttributeList, 
 *                           recommendedAlternatives   [2] IMPLICIT SEQUENCE OF
 *                                                      AttributeList OPTIONAL}, 
 * 
 * 
 * term            [1006]   IMPLICIT SEQUENCE{
 *                            problem      [1] IMPLICIT INTEGER{
 *                                                 codedValue   (1),
 *                                                 unparsable   (2),
 *                                                 tooShort     (3),
 *                                                 type         (4)} OPTIONAL,
 *                            term         [2] Term},
 * 
 * 
 * proximity       [1007] CHOICE{            -- proximity diagnostics:
 *                           resultSets   [1] IMPLICIT NULL,             
 *                                              -- proximity between sets not
 *                                              -- supported
 *                           badSet       [2] IMPLICIT InternationalString,   
 *                                              -- bad result set specified
 *                           relation     [3] IMPLICIT INTEGER,         
 *                                              -- 1 to 6 ; relation not supported
 *                           unit         [4] IMPLICIT INTEGER,         
 *                                              -- unsupported unit code
 *                           distance     [5] IMPLICIT INTEGER,         
 *                                              -- unsupported distance
 *                           attributes   [6] AttributeList,                   
 *                                              --   proximity not supported with
 *                                              -- specified attribute combination
 *                           ordered      [7] IMPLICIT NULL,            
 *                                              -- ordered flag not supported
 *                           exclusion    [8] IMPLICIT NULL               
 *                                              -- exclusion flag not supported
 *                               },
 * 
 * 
 * scan            [1008] CHOICE{         -- scan diagnostics:
 *                           nonZeroStepSize    [0] IMPLICIT NULL,   
 *                                                     -- only zero step size    
 *                                                     -- supported
 *                           specifiedStepSize  [1] IMPLICIT NULL,   
 *                                                     -- specified step size not
 *                                                     -- supported
 *                           termList1          [3] IMPLICIT NULL,   
 *                                                     -- term list not supported
 *                                                     -- (no alternative supplied)
 *                           termList2          [4] IMPLICIT SEQUENCE OF
 *                                                            AttributeList,
 *                                                     -- term list not supported
 *                                                     -- (alternatives supplied)
 *                           posInResponse      [5] IMPLICIT INTEGER{   
 *                                                        -- value of positionIn-
 *                                                        -- Response not supported
 *                                                     mustBeOne              (1),
 *                                                     mustBePositive         (2),
 *                                                     mustBeNonNegative      (3),
 *                                                     other                  (4)},
 *                           resources         [6] IMPLICIT NULL,    
 *                                                     -- resources exhausted
 *                                                     -- looking for satisfying
 *                                                     -- terms
 *                           endOfList         [7] IMPLICIT NULL 
 *                                                     -- beginning or end of term
 *                                                     -- list
 *                         },
 * 
 * 
 * sort            [1009] CHOICE{
 *                           sequence           [0] IMPLICIT NULL,            
 *                                                     -- cannot sort according
 *                                                     -- to sequence
 *                           noRsName           [1] IMPLICIT NULL,            
 *                                                     -- no result set name
 *                                                     -- supplied
 *                           tooMany            [2] IMPLICIT INTEGER,         
 *                                                     --  Too many input result
 *                                                     -- sets, maximum supplied.
 *                           incompatible       [3] IMPLICIT NULL,            
 *                                                     -- records with different
 *                                                     -- formats not compatible for
 *                                                     -- sorting
 *                           generic            [4] IMPLICIT NULL,            
 *                                                     -- generic sort not supported
 *                                                     -- (db specific only)
 *                           dbSpecific         [5] IMPLICIT NULL,            
 *                                                     -- db specific sort not
 *                                                     -- supported
 *                           sortElement        [6] SortElement,
 *                           key                [7] IMPLICIT INTEGER{
 *                                                     tooMany      (1),      
 *                                                        -- too many sort keys
 *                                                     duplicate    (2)},      
 *                                                        -- duplicate sort keys
 *                           action             [8] IMPLICIT NULL,   
 *                                                 -- unuspported missing data
 *                                                 -- action
 *                           illegal            [9] IMPLICIT INTEGER{
 *                                                     relation   (1),   
 *                                                        -- illegal sort relation
 *                                                     case      (2),   
 *                                                        -- illegal case value
 *                                                     action   (3),    
 *                                                        -- illegal missing data
 *                                                        -- action
 *                                                     sort      (4)},   
 *                                                        -- illegal sort
 *                           inputTooLarge      [10] IMPLICIT SEQUENCE OF
 *                                                    InternationalString,
 *                                                        -- one or more of the
 *                                                        -- input result sets too
 *                                                        -- large to sort
 *                           aggregateTooLarge  [11] IMPLICIT NULL   
 *                                                        --  aggregate result set
 *                                                        -- too large
 *                                        },
 * segmentation  [1010]  CHOICE{
 *                 segmentCount  [0]    IMPLICIT NULL,
 *                                        -- Cannot guarantee record will fit 
 *                                        -- within max segments. Target
 *                                        -- suggests that origin try again 
 *                                        -- to retrieve record, without
 *                                        -- including max-segment-count.
 *                 segmentSize  [1]    IMPLICIT INTEGER
 *                                        -- record cannot be segmented into 
 *                                        -- fragments such that the largest 
 *                                        -- will fit within max segment 
 *                                        -- size specified. Target supplies (in 
 *                                        -- bytes) the smallest acceptable value.
 *                                        -- of Max-segment-size to retrieve 
 *                                        -- the record.
 *                           },
 * 
 * extServices     [1011] CHOICE{
 *                         req        [1] IMPLICIT INTEGER{    -- bad request
 *                                           nameInUse       (1),   
 *                                              -- package name already in use
 *                                           noSuchName      (2),   
 *                                              -- no such package, on
 *                                              -- modify/delete
 *                                           quota            (3),   
 *                                              -- quota exceeded
 *                                           type            (4)},   
 *                                              -- extended service type not
 *                                              -- supported
 *                       permission   [2] IMPLICIT INTEGER{ 
 *                                        -- permission denied on ES, because: 
 *                                           id             (1),      
 *                                              -- id not authorized, or
 *                                           modifyDelete   (2)},      
 *                                              -- cannot modify or delete
 *                       immediate    [3] IMPLICIT INTEGER{ 
 *                                        -- immediate execution:
 *                                           failed          (1),      
 *                                           service         (2),      
 *                                              -- not supported for this service, 
 *                                          parameters       (3)      
 *                                              -- not supported for these
 *                                              -- parameters.
 *                                                 }},
 * 
 * 
 * accessCtrl      [1012] CHOICE{
 *                           noUser       [1] IMPLICIT NULL,      
 *                                              -- no user to display challenge to
 *                           refused      [2] IMPLICIT NULL,      
 *                                              -- access control information
 *                                              -- refused by user
 *                           simple       [3] IMPLICIT NULL,      
 *                                              -- only simple form supported
 *                                              -- (target used externally defined)
 *                           oid          [4] IMPLICIT SEQUENCE OF OBJECT
 *                                                      IDENTIFIER,
 *                                              -- oid not supported (origin
 *                                              -- supplies alternative suggested
 *                                              -- oids)
 *                         alternative    [5] IMPLICIT SEQUENCE OF OBJECT
 *                                                      IDENTIFIER,
 *                                              -- origin insists that target use
 *                                              -- an alternative challenge for
 *                                              -- this data (e.g. stronger       
 *                                              -- authentication or stronger
 *                                              -- Access control). The origin
 *                                              -- supplies suggested alternative
 *                                              -- oids.
 *                         pwdInv         [6] IMPLICIT NULL,      
 *                                              -- password invalid
 *                         pwdExp         [7] IMPLICIT NULL        
 *                                              -- password expired
 *                               },
 * 
 * 
 * recordSyntax   [1013] IMPLICIT SEQUENCE{ 
 *                    -- record cannot be transferred in requested syntax
 *                           unsupportedSyntax         [1] IMPLICIT OBJECT
 *                                                            IDENTIFIER, 
 *                           suggestedAlternatives     [2] IMPLICIT SEQUENCE OF
 *                                                         OBJECT IDENTIFIER
 *                                                            OPTIONAL}
 * }
 * ```
 */
export
type DiagFormat =
    { tooMany: DiagFormat_tooMany } /* CHOICE_ALT_ROOT */
    | { badSpec: DiagFormat_badSpec } /* CHOICE_ALT_ROOT */
    | { dbUnavail: DiagFormat_dbUnavail } /* CHOICE_ALT_ROOT */
    | { unSupOp: DiagFormat_unSupOp } /* CHOICE_ALT_ROOT */
    | { attribute: DiagFormat_attribute } /* CHOICE_ALT_ROOT */
    | { attCombo: DiagFormat_attCombo } /* CHOICE_ALT_ROOT */
    | { term: DiagFormat_term } /* CHOICE_ALT_ROOT */
    | { proximity: DiagFormat_proximity } /* CHOICE_ALT_ROOT */
    | { scan: DiagFormat_scan } /* CHOICE_ALT_ROOT */
    | { sort: DiagFormat_sort } /* CHOICE_ALT_ROOT */
    | { segmentation: DiagFormat_segmentation } /* CHOICE_ALT_ROOT */
    | { extServices: DiagFormat_extServices } /* CHOICE_ALT_ROOT */
    | { accessCtrl: DiagFormat_accessCtrl } /* CHOICE_ALT_ROOT */
    | { recordSyntax: DiagFormat_recordSyntax } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DiagFormat: $.ASN1Decoder<DiagFormat> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagFormat
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagFormat (el: _Element): DiagFormat {
    if (!_cached_decoder_for_DiagFormat) { _cached_decoder_for_DiagFormat = $._decode_inextensible_choice<DiagFormat>({
    "CONTEXT 1000": [ "tooMany", $._decode_implicit<DiagFormat_tooMany>(() => _decode_DiagFormat_tooMany) ],
    "CONTEXT 1001": [ "badSpec", $._decode_implicit<DiagFormat_badSpec>(() => _decode_DiagFormat_badSpec) ],
    "CONTEXT 1002": [ "dbUnavail", $._decode_implicit<DiagFormat_dbUnavail>(() => _decode_DiagFormat_dbUnavail) ],
    "CONTEXT 1003": [ "unSupOp", $._decode_implicit<DiagFormat_unSupOp>(() => _decode_DiagFormat_unSupOp) ],
    "CONTEXT 1004": [ "attribute", $._decode_implicit<DiagFormat_attribute>(() => _decode_DiagFormat_attribute) ],
    "CONTEXT 1005": [ "attCombo", $._decode_implicit<DiagFormat_attCombo>(() => _decode_DiagFormat_attCombo) ],
    "CONTEXT 1006": [ "term", $._decode_implicit<DiagFormat_term>(() => _decode_DiagFormat_term) ],
    "CONTEXT 1007": [ "proximity", $._decode_explicit<DiagFormat_proximity>(() => _decode_DiagFormat_proximity) ],
    "CONTEXT 1008": [ "scan", $._decode_explicit<DiagFormat_scan>(() => _decode_DiagFormat_scan) ],
    "CONTEXT 1009": [ "sort", $._decode_explicit<DiagFormat_sort>(() => _decode_DiagFormat_sort) ],
    "CONTEXT 1010": [ "segmentation", $._decode_explicit<DiagFormat_segmentation>(() => _decode_DiagFormat_segmentation) ],
    "CONTEXT 1011": [ "extServices", $._decode_explicit<DiagFormat_extServices>(() => _decode_DiagFormat_extServices) ],
    "CONTEXT 1012": [ "accessCtrl", $._decode_explicit<DiagFormat_accessCtrl>(() => _decode_DiagFormat_accessCtrl) ],
    "CONTEXT 1013": [ "recordSyntax", $._decode_implicit<DiagFormat_recordSyntax>(() => _decode_DiagFormat_recordSyntax) ]
}); }
    return _cached_decoder_for_DiagFormat(el);
}

let _cached_encoder_for_DiagFormat: $.ASN1Encoder<DiagFormat> | null = null;

/**
 * @summary Encodes a(n) DiagFormat into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagFormat, encoded as an ASN.1 Element.
 */
export
function _encode_DiagFormat (value: DiagFormat, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagFormat) { _cached_encoder_for_DiagFormat = $._encode_choice<DiagFormat>({
    "tooMany": $._encode_implicit(_TagClass.context, 1000, () => _encode_DiagFormat_tooMany, $.BER),
    "badSpec": $._encode_implicit(_TagClass.context, 1001, () => _encode_DiagFormat_badSpec, $.BER),
    "dbUnavail": $._encode_implicit(_TagClass.context, 1002, () => _encode_DiagFormat_dbUnavail, $.BER),
    "unSupOp": $._encode_implicit(_TagClass.context, 1003, () => _encode_DiagFormat_unSupOp, $.BER),
    "attribute": $._encode_implicit(_TagClass.context, 1004, () => _encode_DiagFormat_attribute, $.BER),
    "attCombo": $._encode_implicit(_TagClass.context, 1005, () => _encode_DiagFormat_attCombo, $.BER),
    "term": $._encode_implicit(_TagClass.context, 1006, () => _encode_DiagFormat_term, $.BER),
    "proximity": $._encode_explicit(_TagClass.context, 1007, () => _encode_DiagFormat_proximity, $.BER),
    "scan": $._encode_explicit(_TagClass.context, 1008, () => _encode_DiagFormat_scan, $.BER),
    "sort": $._encode_explicit(_TagClass.context, 1009, () => _encode_DiagFormat_sort, $.BER),
    "segmentation": $._encode_explicit(_TagClass.context, 1010, () => _encode_DiagFormat_segmentation, $.BER),
    "extServices": $._encode_explicit(_TagClass.context, 1011, () => _encode_DiagFormat_extServices, $.BER),
    "accessCtrl": $._encode_explicit(_TagClass.context, 1012, () => _encode_DiagFormat_accessCtrl, $.BER),
    "recordSyntax": $._encode_implicit(_TagClass.context, 1013, () => _encode_DiagFormat_recordSyntax, $.BER),
}, $.BER); }
    return _cached_encoder_for_DiagFormat(value, elGetter);
}


/* eslint-enable */
