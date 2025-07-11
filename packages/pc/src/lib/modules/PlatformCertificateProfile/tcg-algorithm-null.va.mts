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
import { tcg_algorithm } from "../PlatformCertificateProfile/tcg-algorithm.va.mjs";
/**
 * @summary tcg_algorithm_null
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-algorithm-null OBJECT IDENTIFIER ::= {tcg-algorithm 1}
 * ```
 * 
 * @constant
 */
export
const tcg_algorithm_null: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], tcg_algorithm);

/* eslint-enable */
