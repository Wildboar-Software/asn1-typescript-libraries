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
import { id_sha } from "../SEC1-v1-9/id-sha.va.mjs";
/**
 * @summary id_sha256
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-sha256 OBJECT IDENTIFIER ::= { id-sha 1 }
 * ```
 * 
 * @constant
 */
export
const id_sha256: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], id_sha);

/* eslint-enable */
