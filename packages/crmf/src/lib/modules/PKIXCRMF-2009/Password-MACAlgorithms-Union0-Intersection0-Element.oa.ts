/* eslint-disable */
import { MAC_ALGORITHM } from "@wildboar/cms/src/lib/modules/AlgorithmInformation-2009/MAC-ALGORITHM.oca";
import {
    required /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../AlgorithmInformation-2009/ParamOptions.ta";
import { id_PasswordBasedMac } from "../PKIXCRMF-2009/id-PasswordBasedMac.va";
import {
    PBMParameter,
    _decode_PBMParameter,
    _encode_PBMParameter,
} from "../PKIXCRMF-2009/PBMParameter.ta";

/* START_OF_SYMBOL_DEFINITION Password_MACAlgorithms_Union0_Intersection0_Element */
/**
 * @summary Password_MACAlgorithms_Union0_Intersection0_Element
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Password-MACAlgorithms-Union0-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {MAC_ALGORITHM<PBMParameter>}
 * @implements {MAC_ALGORITHM<PBMParameter>}
 */
export const Password_MACAlgorithms_Union0_Intersection0_Element: MAC_ALGORITHM<PBMParameter> = {
    class: "MAC-ALGORITHM",
    decoderFor: {
        "&Params": _decode_PBMParameter,
    },
    encoderFor: {
        "&Params": _encode_PBMParameter,
    },
    "&id": id_PasswordBasedMac /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&paramPresence": required /* OBJECT_FIELD_SETTING */,
    "&keyed": false /* OBJECT_FIELD_SETTING */,
    "&Params": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION Password_MACAlgorithms_Union0_Intersection0_Element */

/* eslint-enable */
