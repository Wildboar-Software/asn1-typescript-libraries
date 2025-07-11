/* eslint-disable */
import {
    optional /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../AlgorithmInformation-2009/ParamOptions.ta.mjs";
import { type PUBLIC_KEY } from "../AlgorithmInformation-2009/PUBLIC-KEY.oca.mjs";
import { id_RSAES_OAEP } from "../PKIX1-PSS-OAEP-Algorithms-2009/id-RSAES-OAEP.va.mjs";
import {
    RSAES_OAEP_params,
    _decode_RSAES_OAEP_params,
    _encode_RSAES_OAEP_params,
} from "../PKIX1-PSS-OAEP-Algorithms-2009/RSAES-OAEP-params.ta.mjs";
import {
    RSAPublicKey,
    _decode_RSAPublicKey,
    _encode_RSAPublicKey,
} from "../PKIXAlgs-2009/RSAPublicKey.ta.mjs";

/**
 * @summary pk_rsaES_OAEP
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pk-rsaES-OAEP PUBLIC-KEY ::= {
 * IDENTIFIER id-RSAES-OAEP
 * KEY RSAPublicKey
 * PARAMS TYPE RSAES-OAEP-params ARE optional
 * -- Private key format not in this module --
 * CERT-KEY-USAGE {keyEncipherment, dataEncipherment}
 * }
 * ```
 *
 * @constant
 * @type {PUBLIC_KEY<RSAPublicKey, RSAES_OAEP_params>}
 * @implements {PUBLIC_KEY<RSAPublicKey, RSAES_OAEP_params>}
 */
export const pk_rsaES_OAEP: PUBLIC_KEY<RSAPublicKey, RSAES_OAEP_params> = {
    class: "PUBLIC-KEY",
    decoderFor: {
        "&KeyValue": _decode_RSAPublicKey,
        "&Params": _decode_RSAES_OAEP_params,
        "&PrivateKey": undefined,
    },
    encoderFor: {
        "&KeyValue": _encode_RSAPublicKey,
        "&Params": _encode_RSAES_OAEP_params,
        "&PrivateKey": undefined,
    },
    "&id": id_RSAES_OAEP /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&paramPresence": optional /* OBJECT_FIELD_SETTING */,
    "&keyUsage": undefined,
    "&KeyValue": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&Params": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&PrivateKey": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
