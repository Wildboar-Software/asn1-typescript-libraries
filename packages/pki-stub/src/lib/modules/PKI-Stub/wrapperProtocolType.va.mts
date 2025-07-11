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
import { ds } from "../PKI-Stub/ds.va.mjs";

/**
 * @summary wrapperProtocolType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * wrapperProtocolType  OBJECT IDENTIFIER ::= {ds 43}
 * ```
 *
 * @constant
 */
export const wrapperProtocolType: OBJECT_IDENTIFIER = _OID.fromParts([43], ds);

/* eslint-enable */
