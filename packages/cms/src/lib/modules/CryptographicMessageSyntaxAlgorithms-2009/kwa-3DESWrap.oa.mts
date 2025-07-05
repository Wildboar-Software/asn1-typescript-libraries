/* eslint-disable */
import { NULL } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type KEY_WRAP } from "../AlgorithmInformation-2009/KEY-WRAP.oca.mjs";
import {
    required /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../AlgorithmInformation-2009/ParamOptions.ta.mjs";
import { id_alg_CMS3DESwrap } from "../CryptographicMessageSyntaxAlgorithms-2009/id-alg-CMS3DESwrap.va.mjs";

/**
 * @summary kwa_3DESWrap
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * kwa-3DESWrap KEY-WRAP ::= {
 * IDENTIFIER id-alg-CMS3DESwrap
 * PARAMS TYPE NULL ARE required
 * SMIME-CAPS {IDENTIFIED BY id-alg-CMS3DESwrap}
 * }
 * ```
 *
 * @constant
 * @type {KEY_WRAP<NULL>}
 * @implements {KEY_WRAP<NULL>}
 */
export const kwa_3DESWrap: KEY_WRAP<NULL> = {
    class: "KEY-WRAP",
    decoderFor: {
        "&Params": $._decodeNull,
    },
    encoderFor: {
        "&Params": $._encodeNull,
    },
    "&id": id_alg_CMS3DESwrap /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&paramPresence": required /* OBJECT_FIELD_SETTING */,
    "&Params": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
