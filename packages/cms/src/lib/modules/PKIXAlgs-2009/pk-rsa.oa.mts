/* eslint-disable */
import { NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
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
export {
    absent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    inheritable /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    optional /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ParamOptions,
    ParamOptions_absent /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ParamOptions_inheritable /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ParamOptions_optional /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ParamOptions_preferredAbsent /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ParamOptions_preferredPresent /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ParamOptions_required /* IMPORTED_LONG_ENUMERATION_ITEM */,
    preferredAbsent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    preferredPresent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    required /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ParamOptions,
    _encode_ParamOptions,
    _enum_for_ParamOptions,
} from "../AlgorithmInformation-2009/ParamOptions.ta.mjs";
export { PUBLIC_KEY } from "../AlgorithmInformation-2009/PUBLIC-KEY.oca.mjs";
export { rsaEncryption } from "../PKIXAlgs-2009/rsaEncryption.va.mjs";
export {
    RSAPublicKey,
    _decode_RSAPublicKey,
    _encode_RSAPublicKey,
} from "../PKIXAlgs-2009/RSAPublicKey.ta.mjs";

/* START_OF_SYMBOL_DEFINITION pk_rsa */
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
/* END_OF_SYMBOL_DEFINITION pk_rsa */

/* eslint-enable */
