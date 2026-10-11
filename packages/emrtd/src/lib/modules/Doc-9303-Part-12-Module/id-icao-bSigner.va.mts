/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_icao_lds2Signer } from "../Doc-9303-Part-12-Module/id-icao-lds2Signer.va.mjs";
// export { id_icao_lds2Signer } from "../Doc-9303-Part-12-Module/id-icao-lds2Signer.va.mjs";


/**
 * @summary id_icao_bSigner
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-icao-bSigner OBJECT IDENTIFIER ::= { id-icao-lds2Signer 3}
 * ```
 * 
 * @constant
 */
export
const id_icao_bSigner: OBJECT_IDENTIFIER = _OID.fromParts([
    3,
], id_icao_lds2Signer);

/* eslint-enable */
