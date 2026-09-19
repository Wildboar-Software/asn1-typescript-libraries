/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_icao_lds2Signer } from "../Doc-9303-Part-12-Module/id-icao-lds2Signer.va.mjs";
// export { id_icao_lds2Signer } from "../Doc-9303-Part-12-Module/id-icao-lds2Signer.va.mjs";


/**
 * @summary id_icao_tsSigner
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-icao-tsSigner OBJECT IDENTIFIER ::= { id-icao-lds2Signer 1}
 * ```
 * 
 * @constant
 */
export
const id_icao_tsSigner: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], id_icao_lds2Signer);

/* eslint-enable */
