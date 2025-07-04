/* eslint-disable */
import type { ATTRIBUTE } from "@wildboar/x500/InformationFramework";
import {
    Authenticator,
    _decode_Authenticator,
    _encode_Authenticator,
} from "../PKIXCRMF-2009/Authenticator.ta.mjs";
import { id_regCtrl_authenticator } from "../PKIXCRMF-2009/id-regCtrl-authenticator.va.mjs";


/**
 * @summary regCtrl_authenticator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * regCtrl-authenticator ATTRIBUTE ::= { TYPE Authenticator IDENTIFIED BY id-regCtrl-authenticator }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<Authenticator>}
 * @implements {ATTRIBUTE<Authenticator>}
 */
export const regCtrl_authenticator: ATTRIBUTE<Authenticator> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_Authenticator,
    },
    encoderFor: {
        "&Type": _encode_Authenticator,
    },
    "&id": id_regCtrl_authenticator /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
