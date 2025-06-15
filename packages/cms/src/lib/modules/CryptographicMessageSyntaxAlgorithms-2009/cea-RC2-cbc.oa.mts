/* eslint-disable */
import { CONTENT_ENCRYPTION } from "../AlgorithmInformation-2009/CONTENT-ENCRYPTION.oca.mjs";
import {
    required /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../AlgorithmInformation-2009/ParamOptions.ta.mjs";
import { rc2_cbc } from "../CryptographicMessageSyntaxAlgorithms-2009/rc2-cbc.va.mjs";
import {
    RC2CBCParameter,
    _decode_RC2CBCParameter,
    _encode_RC2CBCParameter,
} from "../CryptographicMessageSyntaxAlgorithms-2009/RC2CBCParameter.ta.mjs";

/**
 * @summary cea_RC2_cbc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cea-RC2-cbc CONTENT-ENCRYPTION ::= {
 * IDENTIFIER rc2-cbc
 * PARAMS TYPE RC2CBCParameter ARE required
 * SMIME-CAPS cap-RC2CBC
 * }
 * ```
 *
 * @constant
 * @type {CONTENT_ENCRYPTION<RC2CBCParameter>}
 * @implements {CONTENT_ENCRYPTION<RC2CBCParameter>}
 */
export const cea_RC2_cbc: CONTENT_ENCRYPTION<RC2CBCParameter> = {
    class: "CONTENT-ENCRYPTION",
    decoderFor: {
        "&Params": _decode_RC2CBCParameter,
    },
    encoderFor: {
        "&Params": _encode_RC2CBCParameter,
    },
    "&id": rc2_cbc /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&paramPresence": required /* OBJECT_FIELD_SETTING */,
    "&Params": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
