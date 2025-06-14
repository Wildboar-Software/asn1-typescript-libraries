/* eslint-disable */
import { NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    absent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../AlgorithmInformation-2009/ParamOptions.ta.mjs";
import { SIGNATURE_ALGORITHM } from "../AlgorithmInformation-2009/SIGNATURE-ALGORITHM.oca.mjs";
import { mda_sha256 } from "../PKIX1-PSS-OAEP-Algorithms-2009/mda-sha256.oa.mjs";
import {
    ECDSA_Sig_Value,
    _decode_ECDSA_Sig_Value,
    _encode_ECDSA_Sig_Value,
} from "../PKIXAlgs-2009/ECDSA-Sig-Value.ta.mjs";
import { ecdsa_with_SHA256 } from "../PKIXAlgs-2009/ecdsa-with-SHA256.va.mjs";
import { pk_ec } from "../PKIXAlgs-2009/pk-ec.oa.mjs";
/* START_OF_SYMBOL_DEFINITION sa_ecdsaWithSHA256 */
/**
 * @summary sa_ecdsaWithSHA256
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sa-ecdsaWithSHA256 SIGNATURE-ALGORITHM ::= {
 * IDENTIFIER ecdsa-with-SHA256
 * VALUE ECDSA-Sig-Value
 * PARAMS TYPE NULL ARE absent
 * HASHES { mda-sha256 }
 * PUBLIC-KEYS { pk-ec }
 * SMIME-CAPS { IDENTIFIED BY ecdsa-with-SHA256 }
 * }
 * ```
 *
 * @constant
 * @type {SIGNATURE_ALGORITHM<ECDSA_Sig_Value, NULL>}
 * @implements {SIGNATURE_ALGORITHM<ECDSA_Sig_Value, NULL>}
 */
export const sa_ecdsaWithSHA256: SIGNATURE_ALGORITHM<ECDSA_Sig_Value, NULL> = {
    class: "SIGNATURE-ALGORITHM",
    decoderFor: {
        "&Value": _decode_ECDSA_Sig_Value,
        "&Params": $._decodeNull,
    },
    encoderFor: {
        "&Value": _encode_ECDSA_Sig_Value,
        "&Params": $._encodeNull,
    },
    "&id": ecdsa_with_SHA256 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&paramPresence": absent /* OBJECT_FIELD_SETTING */,
    "&HashSet": [mda_sha256] /* OBJECT_FIELD_SETTING */,
    "&PublicKeySet": [pk_ec] /* OBJECT_FIELD_SETTING */,
    "&Value": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&Params": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION sa_ecdsaWithSHA256 */

/* eslint-enable */
