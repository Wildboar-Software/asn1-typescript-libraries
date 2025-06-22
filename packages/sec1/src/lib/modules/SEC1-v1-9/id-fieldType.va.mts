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
} from "asn1-ts";
import { ansi_X9_62 } from "../SEC1-v1-9/ansi-X9-62.va.mjs";
/**
 * @summary id_fieldType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-fieldType OBJECT IDENTIFIER ::= { ansi-X9-62 fieldType(1) }
 * ```
 * 
 * @constant
 */
export
const id_fieldType: OBJECT_IDENTIFIER = _OID.fromParts([
    /* fieldType */ 1,
], ansi_X9_62);

/* eslint-enable */
