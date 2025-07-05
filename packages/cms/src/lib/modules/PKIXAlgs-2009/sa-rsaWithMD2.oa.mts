/* eslint-disable */
import { NULL } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    required /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../AlgorithmInformation-2009/ParamOptions.ta.mjs";
import { type SIGNATURE_ALGORITHM } from "../AlgorithmInformation-2009/SIGNATURE-ALGORITHM.oca.mjs";
import { md2WithRSAEncryption } from "../PKIXAlgs-2009/md2WithRSAEncryption.va.mjs";
import { mda_md2 } from "../PKIXAlgs-2009/mda-md2.oa.mjs";
import { pk_rsa } from "../PKIXAlgs-2009/pk-rsa.oa.mjs";

/**
 * @summary sa_rsaWithMD2
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sa-rsaWithMD2 SIGNATURE-ALGORITHM ::= {
 * IDENTIFIER md2WithRSAEncryption
 * PARAMS TYPE NULL ARE required
 * HASHES { mda-md2 }
 * PUBLIC-KEYS { pk-rsa }
 * SMIME-CAPS { IDENTIFIED BY md2WithRSAEncryption }
 * }
 * ```
 *
 * @constant
 * @type {SIGNATURE_ALGORITHM<NULL>}
 * @implements {SIGNATURE_ALGORITHM<NULL>}
 */
export const sa_rsaWithMD2: SIGNATURE_ALGORITHM<NULL> = {
    class: "SIGNATURE-ALGORITHM",
    decoderFor: {
        "&Value": undefined,
        "&Params": $._decodeNull,
    },
    encoderFor: {
        "&Value": undefined,
        "&Params": $._encodeNull,
    },
    "&id": md2WithRSAEncryption /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&paramPresence": required /* OBJECT_FIELD_SETTING */,
    "&HashSet": [mda_md2] /* OBJECT_FIELD_SETTING */,
    "&PublicKeySet": [pk_rsa] /* OBJECT_FIELD_SETTING */,
    "&Value": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&Params": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
