/* eslint-disable */
import { type KEY_TRANSPORT } from "../AlgorithmInformation-2009/KEY-TRANSPORT.oca.mjs";
import {
    required /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../AlgorithmInformation-2009/ParamOptions.ta.mjs";
import { id_RSAES_OAEP } from "../PKIX1-PSS-OAEP-Algorithms-2009/id-RSAES-OAEP.va.mjs";
import { pk_rsaES_OAEP } from "../PKIX1-PSS-OAEP-Algorithms-2009/pk-rsaES-OAEP.oa.mjs";
import {
    RSAES_OAEP_params,
    _decode_RSAES_OAEP_params,
    _encode_RSAES_OAEP_params,
} from "../PKIX1-PSS-OAEP-Algorithms-2009/RSAES-OAEP-params.ta.mjs";
import { pk_rsa } from "../PKIXAlgs-2009/pk-rsa.oa.mjs";

/**
 * @summary kta_rsaES_OAEP
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * kta-rsaES-OAEP KEY-TRANSPORT ::= {
 * IDENTIFIER id-RSAES-OAEP
 * PARAMS TYPE RSAES-OAEP-params ARE required
 * PUBLIC-KEYS { pk-rsa | pk-rsaES-OAEP }
 * SMIME-CAPS { TYPE RSAES-OAEP-params IDENTIFIED BY id-RSAES-OAEP}
 * }
 * ```
 *
 * @constant
 * @type {KEY_TRANSPORT<RSAES_OAEP_params>}
 * @implements {KEY_TRANSPORT<RSAES_OAEP_params>}
 */
export const kta_rsaES_OAEP: KEY_TRANSPORT<RSAES_OAEP_params> = {
    class: "KEY-TRANSPORT",
    decoderFor: {
        "&Params": _decode_RSAES_OAEP_params,
    },
    encoderFor: {
        "&Params": _encode_RSAES_OAEP_params,
    },
    "&id": id_RSAES_OAEP /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&paramPresence": required /* OBJECT_FIELD_SETTING */,
    "&PublicKeySet": [pk_rsa, pk_rsaES_OAEP] /* OBJECT_FIELD_SETTING */,
    "&Params": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
