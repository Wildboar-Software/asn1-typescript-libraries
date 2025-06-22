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
} from "jsr:@wildboar/asn1@11";
import { ds } from "../PKI-Stub/ds.va.mjs";

/**
 * @summary algorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * algorithms           OBJECT IDENTIFIER ::= {ds 44}
 * ```
 *
 * @constant
 */
export const algorithms: OBJECT_IDENTIFIER = _OID.fromParts([44], ds);

/* eslint-enable */
