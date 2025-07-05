/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import { type FIELD_ID } from "../SEC1-v1-9/FIELD-ID.oca.mjs";
import { FieldTypes_Union0_Intersection0_Element } from "../SEC1-v1-9/FieldTypes-Union0-Intersection0-Element.oa.mjs";
import { FieldTypes_Union1_Intersection0_Element } from "../SEC1-v1-9/FieldTypes-Union1-Intersection0-Element.oa.mjs";
/**
 * @summary FieldTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FieldTypes FIELD-ID ::= {
 *     { Prime-p IDENTIFIED BY prime-field } |
 *     { Characteristic-two IDENTIFIED BY characteristic-two-field }
 * }
 * ```
 *
 * @constant
 * @type {FIELD_ID[]}
 *
 */
export
const FieldTypes: (FIELD_ID<any>)[] = [ FieldTypes_Union0_Intersection0_Element, FieldTypes_Union1_Intersection0_Element, ];

/* eslint-enable */
