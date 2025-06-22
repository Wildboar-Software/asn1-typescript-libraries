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
import { id_tai_ce } from "../TAI/id-tai-ce.va.mjs";
/**
 * @summary id_tai_ce_bDCCertificate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-tai-ce-bDCCertificate                    OBJECT IDENTIFIER ::= {id-tai-ce  1}
 * ```
 * 
 * @constant
 */
export
const id_tai_ce_bDCCertificate: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], id_tai_ce);

/* eslint-enable */
