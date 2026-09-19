/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_icao_mrtd_security_lds2 } from "../Doc-9303-Part-12-Module/id-icao-mrtd-security-lds2.va.mjs";
// export { id_icao_mrtd_security_lds2 } from "../Doc-9303-Part-12-Module/id-icao-mrtd-security-lds2.va.mjs";


/**
 * @summary id_icao_lds2Signer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-icao-lds2Signer OBJECT IDENTIFIER ::= {id-icao-mrtd-security-lds2 8}
 * ```
 * 
 * @constant
 */
export
const id_icao_lds2Signer: OBJECT_IDENTIFIER = _OID.fromParts([
    8,
], id_icao_mrtd_security_lds2);

/* eslint-enable */
