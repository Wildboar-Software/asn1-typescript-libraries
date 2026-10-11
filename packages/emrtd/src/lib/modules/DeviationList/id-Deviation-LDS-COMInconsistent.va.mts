/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_Deviation_LDS } from "../DeviationList/id-Deviation-LDS.va.mjs";
// export { id_Deviation_LDS } from "../DeviationList/id-Deviation-LDS.va.mjs";


/**
 * @summary id_Deviation_LDS_COMInconsistent
 * @description
 *
 * Common Data (COM) file is inconsistent. `{id-Deviation-LDS 4}`.
 *
 * Section 10.2 assigns no parameter syntax for this object identifier.
 *
 * Doc 9303-12, section 10.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-Deviation-LDS-COMInconsistent        OBJECT IDENTIFIER ::= {id-Deviation-LDS 4}
 * ```
 * 
 * @constant
 */
export
const id_Deviation_LDS_COMInconsistent: OBJECT_IDENTIFIER = _OID.fromParts([
    4,
], id_Deviation_LDS);

/* eslint-enable */
