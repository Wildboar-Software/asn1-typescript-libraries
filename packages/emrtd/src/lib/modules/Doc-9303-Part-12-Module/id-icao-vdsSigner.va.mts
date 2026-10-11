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
