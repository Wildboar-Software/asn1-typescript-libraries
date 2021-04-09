/* eslint-disable */
import { ATTRIBUTE } from "@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca";
import { id_regCtrl_regToken } from "../PKIXCRMF-2009/id-regCtrl-regToken.va";
import {
    RegToken,
    _decode_RegToken,
    _encode_RegToken,
} from "../PKIXCRMF-2009/RegToken.ta";

/* START_OF_SYMBOL_DEFINITION regCtrl_regToken */
/**
 * @summary regCtrl_regToken
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * regCtrl-regToken ATTRIBUTE ::= { TYPE RegToken IDENTIFIED BY id-regCtrl-regToken }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<RegToken>}
 * @implements {ATTRIBUTE<RegToken>}
 */
export const regCtrl_regToken: ATTRIBUTE<RegToken> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_RegToken,
    },
    encoderFor: {
        "&Type": _encode_RegToken,
    },
    "&id": id_regCtrl_regToken /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION regCtrl_regToken */

/* eslint-enable */
