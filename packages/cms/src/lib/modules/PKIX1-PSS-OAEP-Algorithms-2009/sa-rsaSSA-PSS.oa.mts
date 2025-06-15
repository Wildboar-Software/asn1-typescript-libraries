/* eslint-disable */
import {
    required /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../AlgorithmInformation-2009/ParamOptions.ta.mjs";
import { SIGNATURE_ALGORITHM } from "../AlgorithmInformation-2009/SIGNATURE-ALGORITHM.oca.mjs";
import { id_RSASSA_PSS } from "../PKIX1-PSS-OAEP-Algorithms-2009/id-RSASSA-PSS.va.mjs";
import { mda_sha224 } from "../PKIX1-PSS-OAEP-Algorithms-2009/mda-sha224.oa.mjs";
import { mda_sha256 } from "../PKIX1-PSS-OAEP-Algorithms-2009/mda-sha256.oa.mjs";
import { mda_sha384 } from "../PKIX1-PSS-OAEP-Algorithms-2009/mda-sha384.oa.mjs";
import { mda_sha512 } from "../PKIX1-PSS-OAEP-Algorithms-2009/mda-sha512.oa.mjs";
import { pk_rsaSSA_PSS } from "../PKIX1-PSS-OAEP-Algorithms-2009/pk-rsaSSA-PSS.oa.mjs";
import {
    RSASSA_PSS_params,
    _decode_RSASSA_PSS_params,
    _encode_RSASSA_PSS_params,
} from "../PKIX1-PSS-OAEP-Algorithms-2009/RSASSA-PSS-params.ta.mjs";
import { mda_sha1 } from "../PKIXAlgs-2009/mda-sha1.oa.mjs";
import { pk_rsa } from "../PKIXAlgs-2009/pk-rsa.oa.mjs";

/**
 * @summary sa_rsaSSA_PSS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sa-rsaSSA-PSS SIGNATURE-ALGORITHM ::= {
 * IDENTIFIER id-RSASSA-PSS
 * PARAMS TYPE RSASSA-PSS-params ARE required
 * HASHES { mda-sha1 | mda-sha224 | mda-sha256 | mda-sha384
 * | mda-sha512 }
 * PUBLIC-KEYS { pk-rsa | pk-rsaSSA-PSS }
 * SMIME-CAPS { IDENTIFIED BY id-RSASSA-PSS }
 * }
 * ```
 *
 * @constant
 * @type {SIGNATURE_ALGORITHM<RSASSA_PSS_params>}
 * @implements {SIGNATURE_ALGORITHM<RSASSA_PSS_params>}
 */
export const sa_rsaSSA_PSS: SIGNATURE_ALGORITHM<RSASSA_PSS_params> = {
    class: "SIGNATURE-ALGORITHM",
    decoderFor: {
        "&Value": undefined,
        "&Params": _decode_RSASSA_PSS_params,
    },
    encoderFor: {
        "&Value": undefined,
        "&Params": _encode_RSASSA_PSS_params,
    },
    "&id": id_RSASSA_PSS /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&paramPresence": required /* OBJECT_FIELD_SETTING */,
    "&HashSet": [
        mda_sha1,
        mda_sha224,
        mda_sha256,
        mda_sha384,
        mda_sha512,
    ] /* OBJECT_FIELD_SETTING */,
    "&PublicKeySet": [pk_rsa, pk_rsaSSA_PSS] /* OBJECT_FIELD_SETTING */,
    "&Value": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&Params": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
