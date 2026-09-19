/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_Deviation_CertOrKey } from "../DeviationList/id-Deviation-CertOrKey.va.mjs";
// export { id_Deviation_CertOrKey } from "../DeviationList/id-Deviation-CertOrKey.va.mjs";


/**
 * @summary id_Deviation_CertOrKey_DSEncoding
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-Deviation-CertOrKey-DSEncoding       OBJECT IDENTIFIER ::= {id-Deviation-CertOrKey 2}
 * ```
 * 
 * @constant
 */
export
const id_Deviation_CertOrKey_DSEncoding: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], id_Deviation_CertOrKey);

/* eslint-enable */
