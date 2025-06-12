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
import { DiscriminatorConstruct, _decode_DiscriminatorConstruct, _encode_DiscriminatorConstruct } from "../Attribute-ASN1Module/DiscriminatorConstruct.ta.mjs";
export { DiscriminatorConstruct, _decode_DiscriminatorConstruct, _encode_DiscriminatorConstruct } from "../Attribute-ASN1Module/DiscriminatorConstruct.ta.mjs";
import { FilterItem, _decode_FilterItem, _encode_FilterItem } from "@wildboar/cmip/src/lib/modules/CMIP-1/FilterItem.ta.mjs";
export { FilterItem, _decode_FilterItem, _encode_FilterItem } from "@wildboar/cmip/src/lib/modules/CMIP-1/FilterItem.ta.mjs";
import { CMISFilter, _decode_CMISFilter, _encode_CMISFilter } from "@wildboar/cmip/src/lib/modules/CMIP-1/CMISFilter.ta.mjs";
export { CMISFilter, _decode_CMISFilter, _encode_CMISFilter } from "@wildboar/cmip/src/lib/modules/CMIP-1/CMISFilter.ta.mjs";


/* START_OF_SYMBOL_DEFINITION defaultDiscriminatorConstruct */
/**
 * @summary defaultDiscriminatorConstruct
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * defaultDiscriminatorConstruct DiscriminatorConstruct ::= and:{}
 * ```
 *
 * @constant
 */
export
const defaultDiscriminatorConstruct: DiscriminatorConstruct = { and: [] };
/* END_OF_SYMBOL_DEFINITION defaultDiscriminatorConstruct */

/* eslint-enable */
