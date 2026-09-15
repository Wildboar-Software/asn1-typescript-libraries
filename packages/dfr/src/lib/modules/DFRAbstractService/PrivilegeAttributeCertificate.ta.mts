/* eslint-disable */
import {
    EXTERNAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PrivilegeAttributeCertificate
 * @description
 *
 * Certified attributes of the user (name, job title, clearance, …) used for
 * access decisions. Syntax is EXTERNAL; details were under study when DFR was
 * published. ISO/IEC 10166-1:1991 §3.2.38, §7.1.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrivilegeAttributeCertificate  ::=  EXTERNAL
 * ```
 */
export
type PrivilegeAttributeCertificate = EXTERNAL; // ExternalType
export const _decode_PrivilegeAttributeCertificate = $._decodeExternal;
export const _encode_PrivilegeAttributeCertificate = $._encodeExternal;


/* eslint-enable */
