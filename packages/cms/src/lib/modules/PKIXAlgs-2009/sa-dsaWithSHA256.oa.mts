/* eslint-disable */
import { NULL } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    absent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../AlgorithmInformation-2009/ParamOptions.ta.mjs";
import { SIGNATURE_ALGORITHM } from "../AlgorithmInformation-2009/SIGNATURE-ALGORITHM.oca.mjs";
import { mda_sha256 } from "../PKIX1-PSS-OAEP-Algorithms-2009/mda-sha256.oa.mjs";
import {
    DSA_Sig_Value,
    _decode_DSA_Sig_Value,
    _encode_DSA_Sig_Value,
} from "../PKIXAlgs-2009/DSA-Sig-Value.ta.mjs";
import { dsa_with_sha256 } from "../PKIXAlgs-2009/dsa-with-sha256.va.mjs";
import { pk_dsa } from "../PKIXAlgs-2009/pk-dsa.oa.mjs";

/**
 * @summary sa_dsaWithSHA256
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sa-dsaWithSHA256 SIGNATURE-ALGORITHM ::= {
 * IDENTIFIER dsa-with-sha256
 * VALUE DSA-Sig-Value
 * PARAMS TYPE NULL ARE absent
 * HASHES { mda-sha256 }
 * PUBLIC-KEYS { pk-dsa }
 * SMIME-CAPS { IDENTIFIED BY dsa-with-sha256 }
 * }
 * ```
 *
 * @constant
 * @type {SIGNATURE_ALGORITHM<DSA_Sig_Value, NULL>}
 * @implements {SIGNATURE_ALGORITHM<DSA_Sig_Value, NULL>}
 */
export const sa_dsaWithSHA256: SIGNATURE_ALGORITHM<DSA_Sig_Value, NULL> = {
    class: "SIGNATURE-ALGORITHM",
    decoderFor: {
        "&Value": _decode_DSA_Sig_Value,
        "&Params": $._decodeNull,
    },
    encoderFor: {
        "&Value": _encode_DSA_Sig_Value,
        "&Params": $._encodeNull,
    },
    "&id": dsa_with_sha256 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&paramPresence": absent /* OBJECT_FIELD_SETTING */,
    "&HashSet": [mda_sha256] /* OBJECT_FIELD_SETTING */,
    "&PublicKeySet": [pk_dsa] /* OBJECT_FIELD_SETTING */,
    "&Value": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&Params": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
