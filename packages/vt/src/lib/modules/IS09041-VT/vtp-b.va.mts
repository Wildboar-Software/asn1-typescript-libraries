/* eslint-disable */
import {
    iso,
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
 * @summary vtp_b
 * @description
 *
 * Arc `{ iso standard 9041 }` for all ISO/IEC 9041-assigned names.
 * ISO/IEC 9041-1:1997 Annex B.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * vtp-b OBJECT IDENTIFIER ::= { iso standard 9041 }
 * ```
 * 
 * @constant
 */
export
const vtp_b: OBJECT_IDENTIFIER = _OID.fromParts([
    0 /* standard */,
    9041,
], iso);

/* eslint-enable */
