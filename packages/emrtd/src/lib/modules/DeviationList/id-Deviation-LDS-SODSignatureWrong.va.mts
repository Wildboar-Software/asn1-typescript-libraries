/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_Deviation_LDS } from "../DeviationList/id-Deviation-LDS.va.mjs";
// export { id_Deviation_LDS } from "../DeviationList/id-Deviation-LDS.va.mjs";


/**
 * @summary id_Deviation_LDS_SODSignatureWrong
 * @description
 *
 * Document Security Object signature does not verify. `{id-Deviation-LDS
 * 3}`.
 *
 * Section 10.2 assigns no parameter syntax for this object identifier.
 *
 * Doc 9303-12, section 10.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-Deviation-LDS-SODSignatureWrong      OBJECT IDENTIFIER ::= {id-Deviation-LDS 3}
 * ```
 * 
 * @constant
 */
export
const id_Deviation_LDS_SODSignatureWrong: OBJECT_IDENTIFIER = _OID.fromParts([
    3,
], id_Deviation_LDS);

/* eslint-enable */
