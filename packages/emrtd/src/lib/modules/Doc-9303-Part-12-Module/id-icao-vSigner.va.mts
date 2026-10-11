/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_icao_lds2Signer } from "../Doc-9303-Part-12-Module/id-icao-lds2Signer.va.mjs";
// export { id_icao_lds2Signer } from "../Doc-9303-Part-12-Module/id-icao-lds2Signer.va.mjs";


/**
 * @summary id_icao_vSigner
 * @description
 *
 * Extended key usage for an LDS2 Visa signer. `{id-icao-lds2Signer 2}`. The
 * extension is critical.
 *
 * Doc 9303-12, section 7.1.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-icao-vSigner OBJECT IDENTIFIER ::= { id-icao-lds2Signer 2}
 * ```
 * 
 * @constant
 */
export
const id_icao_vSigner: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], id_icao_lds2Signer);

/* eslint-enable */
