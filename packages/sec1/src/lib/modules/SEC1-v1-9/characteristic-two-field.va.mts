/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import { id_fieldType } from "../SEC1-v1-9/id-fieldType.va.mjs";
/**
 * @summary characteristic_two_field
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * characteristic-two-field OBJECT IDENTIFIER ::= { id-fieldType 2 }
 * ```
 * 
 * @constant
 */
export
const characteristic_two_field: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], id_fieldType);

/* eslint-enable */
