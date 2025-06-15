/* eslint-disable */
import { KEY_AGREE } from "../AlgorithmInformation-2009/KEY-AGREE.oca.mjs";
import {
    optional /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    required /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../AlgorithmInformation-2009/ParamOptions.ta.mjs";
import { id_alg_SSDH } from "../CryptographicMessageSyntaxAlgorithms-2009/id-alg-SSDH.va.mjs";
import {
    KeyWrapAlgorithm,
    _decode_KeyWrapAlgorithm,
    _encode_KeyWrapAlgorithm,
} from "../CryptographicMessageSyntaxAlgorithms-2009/KeyWrapAlgorithm.ta.mjs";
import { pk_dh } from "../PKIXAlgs-2009/pk-dh.oa.mjs";

/**
 * @summary kaa_ssdh
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * kaa-ssdh KEY-AGREE ::= {
 * IDENTIFIER id-alg-SSDH
 * PARAMS TYPE KeyWrapAlgorithm ARE required
 * PUBLIC-KEYS {pk-dh}
 * -- UKM is not ASN.1 encoded
 * UKM ARE optional
 * SMIME-CAPS {TYPE KeyWrapAlgorithm IDENTIFIED BY id-alg-SSDH}
 * }
 * ```
 *
 * @constant
 * @type {KEY_AGREE<KeyWrapAlgorithm>}
 * @implements {KEY_AGREE<KeyWrapAlgorithm>}
 */
export const kaa_ssdh: KEY_AGREE<KeyWrapAlgorithm> = {
    class: "KEY-AGREE",
    decoderFor: {
        "&Params": _decode_KeyWrapAlgorithm,
        "&Ukm": undefined,
    },
    encoderFor: {
        "&Params": _encode_KeyWrapAlgorithm,
        "&Ukm": undefined,
    },
    "&id": id_alg_SSDH /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&paramPresence": required /* OBJECT_FIELD_SETTING */,
    "&PublicKeySet": [pk_dh] /* OBJECT_FIELD_SETTING */,
    "&ukmPresence": optional /* OBJECT_FIELD_SETTING */,
    "&Params": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&Ukm": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
