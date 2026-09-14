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
import { ALGORITHM_ID } from "../ANSI-X9-42/ALGORITHM-ID.oca.mjs";
// export { ALGORITHM_ID } from "../ANSI-X9-42/ALGORITHM-ID.oca.mjs";
import { KeyDerivationAlgorithm_Union0_Intersection0_Element } from "../ANSI-X9-42/KeyDerivationAlgorithm-Union0-Intersection0-Element.oa.mjs";
// export { KeyDerivationAlgorithm_Union0_Intersection0_Element } from "../ANSI-X9-42/KeyDerivationAlgorithm-Union0-Intersection0-Element.oa.mjs";


/**
 * @summary KeyDerivationAlgorithm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KeyDerivationAlgorithm ALGORITHM-ID ::= {
 * { OID  id-sha1  PARMS NULL },    -- From ANS X9.30
 * ...
 * }
 * ```
 * 
 * @constant
 * @type {ALGORITHM_ID[]}
 * 
 */
export
const KeyDerivationAlgorithm: (ALGORITHM_ID)[] = [ ...KeyDerivationAlgorithm_Union0_Intersection0_Element, ];

/* eslint-enable */
