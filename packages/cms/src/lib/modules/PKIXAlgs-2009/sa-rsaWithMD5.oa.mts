/* eslint-disable */
import { NULL } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    required /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../AlgorithmInformation-2009/ParamOptions.ta.mjs";
import { type SIGNATURE_ALGORITHM } from "../AlgorithmInformation-2009/SIGNATURE-ALGORITHM.oca.mjs";
import { md5WithRSAEncryption } from "../PKIXAlgs-2009/md5WithRSAEncryption.va.mjs";
import { mda_md5 } from "../PKIXAlgs-2009/mda-md5.oa.mjs";
import { pk_rsa } from "../PKIXAlgs-2009/pk-rsa.oa.mjs";

/**
 * @summary sa_rsaWithMD5
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sa-rsaWithMD5 SIGNATURE-ALGORITHM ::= {
 * IDENTIFIER md5WithRSAEncryption
 * PARAMS TYPE NULL ARE required
 * HASHES { mda-md5 }
 * PUBLIC-KEYS { pk-rsa }
 * SMIME-CAPS { IDENTIFIED BY md5WithRSAEncryption }
 * }
 * ```
 *
 * @constant
 * @type {SIGNATURE_ALGORITHM<NULL>}
 * @implements {SIGNATURE_ALGORITHM<NULL>}
 */
export const sa_rsaWithMD5: SIGNATURE_ALGORITHM<NULL> = {
    class: "SIGNATURE-ALGORITHM",
    decoderFor: {
        "&Value": undefined,
        "&Params": $._decodeNull,
    },
    encoderFor: {
        "&Value": undefined,
        "&Params": $._encodeNull,
    },
    "&id": md5WithRSAEncryption /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&paramPresence": required /* OBJECT_FIELD_SETTING */,
    "&HashSet": [mda_md5] /* OBJECT_FIELD_SETTING */,
    "&PublicKeySet": [pk_rsa] /* OBJECT_FIELD_SETTING */,
    "&Value": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&Params": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
