/* eslint-disable */
import { KEY_DERIVATION } from "../AlgorithmInformation-2009/KEY-DERIVATION.oca.js";
import {
    required /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../AlgorithmInformation-2009/ParamOptions.ta.js";
import { id_PBKDF2 } from "../CryptographicMessageSyntaxAlgorithms-2009/id-PBKDF2.va.js";
import {
    PBKDF2_params,
    _decode_PBKDF2_params,
    _encode_PBKDF2_params,
} from "../CryptographicMessageSyntaxAlgorithms-2009/PBKDF2-params.ta.js";
export { KEY_DERIVATION } from "../AlgorithmInformation-2009/KEY-DERIVATION.oca.js";
export {
    absent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    inheritable /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    optional /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ParamOptions,
    ParamOptions_absent /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ParamOptions_inheritable /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ParamOptions_optional /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ParamOptions_preferredAbsent /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ParamOptions_preferredPresent /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ParamOptions_required /* IMPORTED_LONG_ENUMERATION_ITEM */,
    preferredAbsent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    preferredPresent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    required /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ParamOptions,
    _encode_ParamOptions,
    _enum_for_ParamOptions,
} from "../AlgorithmInformation-2009/ParamOptions.ta.js";
export { SMIME_CAPS } from "../AlgorithmInformation-2009/SMIME-CAPS.oca.js";
export { id_PBKDF2 } from "../CryptographicMessageSyntaxAlgorithms-2009/id-PBKDF2.va.js";
export {
    PBKDF2_params,
    _decode_PBKDF2_params,
    _encode_PBKDF2_params,
} from "../CryptographicMessageSyntaxAlgorithms-2009/PBKDF2-params.ta.js";

/* START_OF_SYMBOL_DEFINITION kda_PBKDF2 */
/**
 * @summary kda_PBKDF2
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * kda-PBKDF2 KEY-DERIVATION ::= {
 * IDENTIFIER id-PBKDF2
 * PARAMS TYPE PBKDF2-params ARE required
 * -- No S/MIME caps defined
 * }
 * ```
 *
 * @constant
 * @type {KEY_DERIVATION<PBKDF2_params>}
 * @implements {KEY_DERIVATION<PBKDF2_params>}
 */
export const kda_PBKDF2: KEY_DERIVATION<PBKDF2_params> = {
    class: "KEY-DERIVATION",
    decoderFor: {
        "&Params": _decode_PBKDF2_params,
    },
    encoderFor: {
        "&Params": _encode_PBKDF2_params,
    },
    "&id": id_PBKDF2 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&paramPresence": required /* OBJECT_FIELD_SETTING */,
    "&Params": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION kda_PBKDF2 */

/* eslint-enable */
