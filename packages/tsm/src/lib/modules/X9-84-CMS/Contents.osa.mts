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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { CONTENTS } from "../X9-84-CMS/CONTENTS.oca.mjs";
// export { CONTENTS } from "../X9-84-CMS/CONTENTS.oca.mjs";
import { Contents_Union0_Intersection0_Element } from "../X9-84-CMS/Contents-Union0-Intersection0-Element.oa.mjs";
// export { Contents_Union0_Intersection0_Element } from "../X9-84-CMS/Contents-Union0-Intersection0-Element.oa.mjs";


/**
 * @summary Contents
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Contents CONTENTS ::= {
 *    { Data IDENTIFIED BY id-data }
 * }
 * ```
 * 
 * @constant
 * @type {CONTENTS[]}
 * 
 */
export
const Contents: (CONTENTS)[] = [ ...Contents_Union0_Intersection0_Element, ];

/* eslint-enable */
