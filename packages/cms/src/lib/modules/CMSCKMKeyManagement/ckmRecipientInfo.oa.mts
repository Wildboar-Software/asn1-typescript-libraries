/* eslint-disable */
import { type EXTENDED_KEY_MGMT_INFO } from "../CMSCKMKeyManagement/EXTENDED-KEY-MGMT-INFO.oca.mjs";
import {
    _decode_KeyConstructRecipientInfo,
    _encode_KeyConstructRecipientInfo,
} from "../CMSCKMKeyManagement/KeyConstructRecipientInfo.ta.mjs";
import { id_ckm_recip_info } from "../CMSObjectIdentifiers/id-ckm-recip-info.va.mjs";

/**
 * @summary ckmRecipientInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ckmRecipientInfo EXTENDED-KEY-MGMT-INFO ::= {
 * KeyConstructRecipientInfo IDENTIFIED BY id-ckm-recip-info
 * }
 * ```
 *
 * @constant
 * @type {EXTENDED_KEY_MGMT_INFO<KeyConstructRecipientInfo>}
 * @implements {EXTENDED_KEY_MGMT_INFO<KeyConstructRecipientInfo>}
 */
export const ckmRecipientInfo: EXTENDED_KEY_MGMT_INFO = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_KeyConstructRecipientInfo,
    },
    encoderFor: {
        "&Type": _encode_KeyConstructRecipientInfo,
    },
    "&id": id_ckm_recip_info /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
