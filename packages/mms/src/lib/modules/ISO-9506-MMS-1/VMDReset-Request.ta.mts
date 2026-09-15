/* eslint-disable */
import {
    BOOLEAN,
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
 * @summary VMDReset_Request
 * @description
 * 
 * Confirmed VMDReset request: Extended Derivation. True means perform
 * self-diagnostics as part of initializing the VMD. Conformance `csr`.
 * Association should be maintained if possible. ISO 9506-1:2003 §10.10;
 * ISO 9506-2:2003 §10.10.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VMDReset-Request  ::=  BOOLEAN
 * ```
 */
export
type VMDReset_Request = BOOLEAN; // BooleanType
export const _decode_VMDReset_Request = $._decodeBoolean;
export const _encode_VMDReset_Request = $._encodeBoolean;


/* eslint-enable */
