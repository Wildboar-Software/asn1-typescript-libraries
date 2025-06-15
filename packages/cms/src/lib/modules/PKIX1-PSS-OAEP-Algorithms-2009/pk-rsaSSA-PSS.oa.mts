/* eslint-disable */
import {
    optional /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../AlgorithmInformation-2009/ParamOptions.ta.mjs";
import { PUBLIC_KEY } from "../AlgorithmInformation-2009/PUBLIC-KEY.oca.mjs";
import { id_RSASSA_PSS } from "../PKIX1-PSS-OAEP-Algorithms-2009/id-RSASSA-PSS.va.mjs";
import {
    RSASSA_PSS_params,
    _decode_RSASSA_PSS_params,
    _encode_RSASSA_PSS_params,
} from "../PKIX1-PSS-OAEP-Algorithms-2009/RSASSA-PSS-params.ta.mjs";
import {
    RSAPublicKey,
    _decode_RSAPublicKey,
    _encode_RSAPublicKey,
} from "../PKIXAlgs-2009/RSAPublicKey.ta.mjs";

/**
 * @summary pk_rsaSSA_PSS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pk-rsaSSA-PSS PUBLIC-KEY ::= {
 * IDENTIFIER id-RSASSA-PSS
 * KEY RSAPublicKey
 * PARAMS TYPE RSASSA-PSS-params ARE optional
 * -- Private key format not in this module --
 * CERT-KEY-USAGE { nonRepudiation, digitalSignature,
 * keyCertSign, cRLSign }
 * }
 * ```
 *
 * @constant
 * @type {PUBLIC_KEY<RSAPublicKey, RSASSA_PSS_params>}
 * @implements {PUBLIC_KEY<RSAPublicKey, RSASSA_PSS_params>}
 */
export const pk_rsaSSA_PSS: PUBLIC_KEY<RSAPublicKey, RSASSA_PSS_params> = {
    class: "PUBLIC-KEY",
    decoderFor: {
        "&KeyValue": _decode_RSAPublicKey,
        "&Params": _decode_RSASSA_PSS_params,
        "&PrivateKey": undefined,
    },
    encoderFor: {
        "&KeyValue": _encode_RSAPublicKey,
        "&Params": _encode_RSASSA_PSS_params,
        "&PrivateKey": undefined,
    },
    "&id": id_RSASSA_PSS /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&paramPresence": optional /* OBJECT_FIELD_SETTING */,
    "&keyUsage": undefined,
    "&KeyValue": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&Params": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&PrivateKey": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
