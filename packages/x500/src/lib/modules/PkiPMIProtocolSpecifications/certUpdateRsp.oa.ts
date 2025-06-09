/* eslint-disable */
import {
    CertUpdateRsp,
    _decode_CertUpdateRsp,
    _encode_CertUpdateRsp,
} from "../PkiPMIProtocolSpecifications/CertUpdateRsp.ta.js";
import { id_certUpdateRsp } from "../PkiPMIProtocolSpecifications/id-certUpdateRsp.va.js";
import { WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca.js";
export {
    CertUpdateRsp,
    _decode_CertUpdateRsp,
    _encode_CertUpdateRsp,
} from "../PkiPMIProtocolSpecifications/CertUpdateRsp.ta.js";
export { id_certUpdateRsp } from "../PkiPMIProtocolSpecifications/id-certUpdateRsp.va.js";
export { WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca.js";

/* START_OF_SYMBOL_DEFINITION certUpdateRsp */
/**
 * @summary certUpdateRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certUpdateRsp WRAPPED-PDU ::= {
 *                  CertUpdateRsp
 *   IDENTIFIED BY  id-certUpdateRsp }
 * ```
 *
 * @constant
 * @type {WRAPPED_PDU<CertUpdateRsp>}
 * @implements {WRAPPED_PDU<CertUpdateRsp>}
 */
export const certUpdateRsp: WRAPPED_PDU = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_CertUpdateRsp,
    },
    encoderFor: {
        "&Type": _encode_CertUpdateRsp,
    },
    "&id": id_certUpdateRsp /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION certUpdateRsp */

/* eslint-enable */
