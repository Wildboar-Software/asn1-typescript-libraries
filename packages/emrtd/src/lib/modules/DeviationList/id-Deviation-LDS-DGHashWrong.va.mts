/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_Deviation_LDS } from "../DeviationList/id-Deviation-LDS.va.mjs";
// export { id_Deviation_LDS } from "../DeviationList/id-Deviation-LDS.va.mjs";


/**
 * @summary id_Deviation_LDS_DGHashWrong
 * @description
 *
 * Data-group hash does not match the security object. `{id-Deviation-LDS
 * 2}`.
 *
 * Section 10.2 assigns no parameter syntax for this object identifier.
 *
 * Doc 9303-12, section 10.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-Deviation-LDS-DGHashWrong            OBJECT IDENTIFIER ::= {id-Deviation-LDS 2}
 * ```
 * 
 * @constant
 */
export
const id_Deviation_LDS_DGHashWrong: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], id_Deviation_LDS);

/* eslint-enable */
