/* eslint-disable */
import {
    CertSubscribeRsp,
    _decode_CertSubscribeRsp,
    _encode_CertSubscribeRsp,
} from "../PkiPMIProtocolSpecifications/CertSubscribeRsp.ta.mjs";
import { id_certSubscribeRsp } from "../PkiPMIProtocolSpecifications/id-certSubscribeRsp.va.mjs";
import { type WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca.mjs";
/**
 * @summary certSubscribeRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certSubscribeRsp WRAPPED-PDU ::= {
 *                  CertSubscribeRsp
 *   IDENTIFIED BY  id-certSubscribeRsp }
 * ```
 *
 * @constant
 * @type {WRAPPED_PDU<CertSubscribeRsp>}
 * @implements {WRAPPED_PDU<CertSubscribeRsp>}
 */
export const certSubscribeRsp: WRAPPED_PDU = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_CertSubscribeRsp,
    },
    encoderFor: {
        "&Type": _encode_CertSubscribeRsp,
    },
    "&id": id_certSubscribeRsp /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
