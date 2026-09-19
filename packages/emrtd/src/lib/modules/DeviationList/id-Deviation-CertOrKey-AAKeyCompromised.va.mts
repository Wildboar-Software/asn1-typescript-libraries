/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_Deviation_CertOrKey } from "../DeviationList/id-Deviation-CertOrKey.va.mjs";
// export { id_Deviation_CertOrKey } from "../DeviationList/id-Deviation-CertOrKey.va.mjs";


/**
 * @summary id_Deviation_CertOrKey_AAKeyCompromised
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-Deviation-CertOrKey-AAKeyCompromised OBJECT IDENTIFIER ::= {id-Deviation-CertOrKey 4}
 * ```
 * 
 * @constant
 */
export
const id_Deviation_CertOrKey_AAKeyCompromised: OBJECT_IDENTIFIER = _OID.fromParts([
    4,
], id_Deviation_CertOrKey);

/* eslint-enable */
