/* eslint-disable */
import { NULL } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    absent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../AlgorithmInformation-2009/ParamOptions.ta.mjs";
import { PUBLIC_KEY } from "../AlgorithmInformation-2009/PUBLIC-KEY.oca.mjs";
import { rsaEncryption } from "../PKIXAlgs-2009/rsaEncryption.va.mjs";
import {
    RSAPublicKey,
    _decode_RSAPublicKey,
    _encode_RSAPublicKey,
} from "../PKIXAlgs-2009/RSAPublicKey.ta.mjs";

/**
 * @summary pk_rsa
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pk-rsa PUBLIC-KEY ::= {
 * IDENTIFIER rsaEncryption
 * KEY RSAPublicKey
 * PARAMS TYPE NULL ARE absent
 * -- Private key format not in this module --
 * CERT-KEY-USAGE {digitalSignature, nonRepudiation,
 *     keyEncipherment, dataEncipherment, keyCertSign, cRLSign}
 * }
 * ```
 *
 * @constant
 * @type {PUBLIC_KEY<RSAPublicKey, NULL>}
 * @implements {PUBLIC_KEY<RSAPublicKey, NULL>}
 */
export const pk_rsa: PUBLIC_KEY<RSAPublicKey, NULL> = {
    class: "PUBLIC-KEY",
    decoderFor: {
        "&KeyValue": _decode_RSAPublicKey,
        "&Params": $._decodeNull,
        "&PrivateKey": undefined,
    },
    encoderFor: {
        "&KeyValue": _encode_RSAPublicKey,
        "&Params": $._encodeNull,
        "&PrivateKey": undefined,
    },
    "&id": rsaEncryption /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&paramPresence": absent /* OBJECT_FIELD_SETTING */,
    "&keyUsage": undefined,
    "&KeyValue": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&Params": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&PrivateKey": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
