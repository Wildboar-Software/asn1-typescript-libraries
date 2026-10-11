/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_Deviation_CertOrKey } from "../DeviationList/id-Deviation-CertOrKey.va.mjs";
// export { id_Deviation_CertOrKey } from "../DeviationList/id-Deviation-CertOrKey.va.mjs";


/**
 * @summary id_Deviation_CertOrKey_DSSignature
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-Deviation-CertOrKey-DSSignature      OBJECT IDENTIFIER ::= {id-Deviation-CertOrKey 1}
 * ```
 * 
 * @constant
 */
export
const id_Deviation_CertOrKey_DSSignature: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], id_Deviation_CertOrKey);

/* eslint-enable */
