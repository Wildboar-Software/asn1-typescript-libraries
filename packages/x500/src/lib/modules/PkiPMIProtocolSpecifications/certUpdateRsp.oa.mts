/* eslint-disable */
import {
    CertUpdateRsp,
    _decode_CertUpdateRsp,
    _encode_CertUpdateRsp,
} from "../PkiPMIProtocolSpecifications/CertUpdateRsp.ta.mjs";
import { id_certUpdateRsp } from "../PkiPMIProtocolSpecifications/id-certUpdateRsp.va.mjs";
import { type WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca.mjs";
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

/* eslint-enable */
