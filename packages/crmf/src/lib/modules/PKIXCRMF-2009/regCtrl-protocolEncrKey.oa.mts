/* eslint-disable */
import type { ATTRIBUTE } from "@wildboar/x500/InformationFramework";
import { id_regCtrl_protocolEncrKey } from "../PKIXCRMF-2009/id-regCtrl-protocolEncrKey.va.mjs";
import {
    ProtocolEncrKey,
    _decode_ProtocolEncrKey,
    _encode_ProtocolEncrKey,
} from "../PKIXCRMF-2009/ProtocolEncrKey.ta.mjs";


/**
 * @summary regCtrl_protocolEncrKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * regCtrl-protocolEncrKey ATTRIBUTE ::= { TYPE ProtocolEncrKey IDENTIFIED BY id-regCtrl-protocolEncrKey }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<ProtocolEncrKey>}
 * @implements {ATTRIBUTE<ProtocolEncrKey>}
 */
export const regCtrl_protocolEncrKey: ATTRIBUTE<ProtocolEncrKey> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_ProtocolEncrKey,
    },
    encoderFor: {
        "&Type": _encode_ProtocolEncrKey,
    },
    "&id": id_regCtrl_protocolEncrKey /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
