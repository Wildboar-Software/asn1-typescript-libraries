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
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { create } from "../DFRAbstractService/create.oa.mjs";
// export { create } from "../DFRAbstractService/create.oa.mjs";
import { delete_ } from "../DFRAbstractService/delete.oa.mjs";
// export { delete_ } from "../DFRAbstractService/delete.oa.mjs";
import { copy } from "../DFRAbstractService/copy.oa.mjs";
// export { copy } from "../DFRAbstractService/copy.oa.mjs";
import { move } from "../DFRAbstractService/move.oa.mjs";
// export { move } from "../DFRAbstractService/move.oa.mjs";
import { read } from "../DFRAbstractService/read.oa.mjs";
// export { read } from "../DFRAbstractService/read.oa.mjs";
import { modify } from "../DFRAbstractService/modify.oa.mjs";
// export { modify } from "../DFRAbstractService/modify.oa.mjs";
import { list } from "../DFRAbstractService/list.oa.mjs";
// export { list } from "../DFRAbstractService/list.oa.mjs";
import { search } from "../DFRAbstractService/search.oa.mjs";
// export { search } from "../DFRAbstractService/search.oa.mjs";
import { reserve } from "../DFRAbstractService/reserve.oa.mjs";
// export { reserve } from "../DFRAbstractService/reserve.oa.mjs";
import { abandon } from "../DFRAbstractService/abandon.oa.mjs";
// export { abandon } from "../DFRAbstractService/abandon.oa.mjs";


/**
 * @summary DFR_Invokable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DFR-Invokable OPERATION ::= {
 *     create
 *     | delete
 *     | copy
 *     | move
 *     | read
 *     | modify
 *     | list
 *     | search
 *     | reserve
 *     | abandon
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const DFR_Invokable: (OPERATION)[] = [ create, delete_, copy, move, read, modify, list, search, reserve, abandon, ];

/* eslint-enable */
