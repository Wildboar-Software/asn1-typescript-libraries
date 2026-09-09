/* eslint-disable */
import {
    itu_t,
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



/**
 * @summary tc_NotationExtensions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tc-NotationExtensions                OBJECT IDENTIFIER ::= {itu-t recommendation q 775 modules(2) notation-extension (4) version1(1)}
 * ```
 * 
 * @constant
 */
export
const tc_NotationExtensions: OBJECT_IDENTIFIER = _OID.fromParts([
    0 /* recommendation */,
    17 /* q */,
    775,
    /* modules */ 2,
    /* notation-extension */ 4,
    /* version1 */ 1,
], itu_t);

/* eslint-enable */
