/* eslint-disable */
import {
    CertRsp,
    _decode_CertRsp,
    _encode_CertRsp,
} from "../PkiPMIProtocolSpecifications/CertRsp.ta.js";
import { id_certRsp } from "../PkiPMIProtocolSpecifications/id-certRsp.va.js";
import { WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca.js";
export {
    CertRsp,
    _decode_CertRsp,
    _encode_CertRsp,
} from "../PkiPMIProtocolSpecifications/CertRsp.ta.js";
export { id_certRsp } from "../PkiPMIProtocolSpecifications/id-certRsp.va.js";
export { WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca.js";

/* START_OF_SYMBOL_DEFINITION certRsp */
/**
 * @summary certRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certRsp WRAPPED-PDU ::= {
 *                 CertRsp
 *   IDENTIFIED BY id-certRsp }
 * ```
 *
 * @constant
 * @type {WRAPPED_PDU<CertRsp>}
 * @implements {WRAPPED_PDU<CertRsp>}
 */
export const certRsp: WRAPPED_PDU = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_CertRsp,
    },
    encoderFor: {
        "&Type": _encode_CertRsp,
    },
    "&id": id_certRsp /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION certRsp */

/* eslint-enable */
