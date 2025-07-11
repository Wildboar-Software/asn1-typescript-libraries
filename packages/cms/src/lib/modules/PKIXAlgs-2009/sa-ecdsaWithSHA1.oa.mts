/* eslint-disable */
import { NULL } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    absent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../AlgorithmInformation-2009/ParamOptions.ta.mjs";
import { type SIGNATURE_ALGORITHM } from "../AlgorithmInformation-2009/SIGNATURE-ALGORITHM.oca.mjs";
import {
    ECDSA_Sig_Value,
    _decode_ECDSA_Sig_Value,
    _encode_ECDSA_Sig_Value,
} from "../PKIXAlgs-2009/ECDSA-Sig-Value.ta.mjs";
import { ecdsa_with_SHA1 } from "../PKIXAlgs-2009/ecdsa-with-SHA1.va.mjs";
import { mda_sha1 } from "../PKIXAlgs-2009/mda-sha1.oa.mjs";
import { pk_ec } from "../PKIXAlgs-2009/pk-ec.oa.mjs";

/**
 * @summary sa_ecdsaWithSHA1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sa-ecdsaWithSHA1 SIGNATURE-ALGORITHM ::= {
 * IDENTIFIER ecdsa-with-SHA1
 * VALUE ECDSA-Sig-Value
 * PARAMS TYPE NULL ARE absent
 * HASHES { mda-sha1 }
 * PUBLIC-KEYS { pk-ec }
 * SMIME-CAPS {IDENTIFIED BY ecdsa-with-SHA1 }
 * }
 * ```
 *
 * @constant
 * @type {SIGNATURE_ALGORITHM<ECDSA_Sig_Value, NULL>}
 * @implements {SIGNATURE_ALGORITHM<ECDSA_Sig_Value, NULL>}
 */
export const sa_ecdsaWithSHA1: SIGNATURE_ALGORITHM<ECDSA_Sig_Value, NULL> = {
    class: "SIGNATURE-ALGORITHM",
    decoderFor: {
        "&Value": _decode_ECDSA_Sig_Value,
        "&Params": $._decodeNull,
    },
    encoderFor: {
        "&Value": _encode_ECDSA_Sig_Value,
        "&Params": $._encodeNull,
    },
    "&id": ecdsa_with_SHA1 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&paramPresence": absent /* OBJECT_FIELD_SETTING */,
    "&HashSet": [mda_sha1] /* OBJECT_FIELD_SETTING */,
    "&PublicKeySet": [pk_ec] /* OBJECT_FIELD_SETTING */,
    "&Value": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&Params": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
