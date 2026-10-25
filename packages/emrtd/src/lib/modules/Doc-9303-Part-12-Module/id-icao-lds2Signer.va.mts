/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_icao_mrtd_security_lds2 } from "../Doc-9303-Part-12-Module/id-icao-mrtd-security-lds2.va.mjs";
// export { id_icao_mrtd_security_lds2 } from "../Doc-9303-Part-12-Module/id-icao-mrtd-security-lds2.va.mjs";


/**
 * @summary id_icao_lds2Signer
 * @description
 *
 * Parent of the LDS2 extended-key-usage values. `{id-icao-mrtd-security-lds2
 * 8}`.
 *
 * One signer may hold more than one of the child identifiers when it signs
 * more than one kind of LDS2 object.
 *
 * Doc 9303-12, section 7.1.2.
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
