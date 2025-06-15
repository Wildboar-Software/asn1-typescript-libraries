/* eslint-disable */
import { NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { KEY_TRANSPORT } from "../AlgorithmInformation-2009/KEY-TRANSPORT.oca.mjs";
import {
    required /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../AlgorithmInformation-2009/ParamOptions.ta.mjs";
import { pk_rsa } from "../PKIXAlgs-2009/pk-rsa.oa.mjs";
import { rsaEncryption } from "../PKIXAlgs-2009/rsaEncryption.va.mjs";

/**
 * @summary kt_rsa
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * kt-rsa KEY-TRANSPORT ::= {
 * IDENTIFIER rsaEncryption
 * PARAMS TYPE NULL ARE required
 * PUBLIC-KEYS { pk-rsa }
 * SMIME-CAPS {IDENTIFIED BY rsaEncryption}
 * }
 * ```
 *
 * @constant
 * @type {KEY_TRANSPORT<NULL>}
 * @implements {KEY_TRANSPORT<NULL>}
 */
export const kt_rsa: KEY_TRANSPORT<NULL> = {
    class: "KEY-TRANSPORT",
    decoderFor: {
        "&Params": $._decodeNull,
    },
    encoderFor: {
        "&Params": $._encodeNull,
    },
    "&id": rsaEncryption /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&paramPresence": required /* OBJECT_FIELD_SETTING */,
    "&PublicKeySet": [pk_rsa] /* OBJECT_FIELD_SETTING */,
    "&Params": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
