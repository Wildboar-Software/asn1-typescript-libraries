/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_icao_mrtd_security_vds } from "../Doc-9303-Part-12-Module/id-icao-mrtd-security-vds.va.mjs";
// export { id_icao_mrtd_security_vds } from "../Doc-9303-Part-12-Module/id-icao-mrtd-security-vds.va.mjs";


/**
 * @summary id_icao_vdsSigner
 * @description
 *
 * Extended key usage for a Bar Code Signer certificate.
 * `{id-icao-mrtd-security-vds 1}`. The extension is critical.
 *
 * Section 2 distinguishes Visa Signer certificates and Emergency Travel
 * Document Signer certificates. This edition assigns a single object
 * identifier for the bar-code signer extended key usage.
 *
 * Doc 9303-12, section 7.1.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-icao-vdsSigner OBJECT IDENTIFIER ::= {id-icao-mrtd-security-vds 1}
 * ```
 * 
 * @constant
 */
export
const id_icao_vdsSigner: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], id_icao_mrtd_security_vds);

/* eslint-enable */
