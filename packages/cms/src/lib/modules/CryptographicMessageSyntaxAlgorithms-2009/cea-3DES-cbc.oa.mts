/* eslint-disable */
import { type CONTENT_ENCRYPTION } from "../AlgorithmInformation-2009/CONTENT-ENCRYPTION.oca.mjs";
import {
    required /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../AlgorithmInformation-2009/ParamOptions.ta.mjs";
import { des_ede3_cbc } from "../CryptographicMessageSyntaxAlgorithms-2009/des-ede3-cbc.va.mjs";
import {
    IV,
    _decode_IV,
    _encode_IV,
} from "../CryptographicMessageSyntaxAlgorithms-2009/IV.ta.mjs";

/**
 * @summary cea_3DES_cbc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cea-3DES-cbc CONTENT-ENCRYPTION ::= {
 * IDENTIFIER des-ede3-cbc
 * PARAMS TYPE IV ARE required
 * SMIME-CAPS { IDENTIFIED BY des-ede3-cbc }
 * }
 * ```
 *
 * @constant
 * @type {CONTENT_ENCRYPTION<IV>}
 * @implements {CONTENT_ENCRYPTION<IV>}
 */
export const cea_3DES_cbc: CONTENT_ENCRYPTION<IV> = {
    class: "CONTENT-ENCRYPTION",
    decoderFor: {
        "&Params": _decode_IV,
    },
    encoderFor: {
        "&Params": _encode_IV,
    },
    "&id": des_ede3_cbc /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&paramPresence": required /* OBJECT_FIELD_SETTING */,
    "&Params": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
