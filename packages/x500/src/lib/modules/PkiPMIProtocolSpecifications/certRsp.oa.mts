/* eslint-disable */
import {
    CertRsp,
    _decode_CertRsp,
    _encode_CertRsp,
} from "../PkiPMIProtocolSpecifications/CertRsp.ta.mjs";
import { id_certRsp } from "../PkiPMIProtocolSpecifications/id-certRsp.va.mjs";
import { type WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca.mjs";
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

/* eslint-enable */
