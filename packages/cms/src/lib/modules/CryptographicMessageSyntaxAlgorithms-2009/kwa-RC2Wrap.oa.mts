/* eslint-disable */
import { KEY_WRAP } from "../AlgorithmInformation-2009/KEY-WRAP.oca.mjs";
import {
    required /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../AlgorithmInformation-2009/ParamOptions.ta.mjs";
import { id_alg_CMSRC2wrap } from "../CryptographicMessageSyntaxAlgorithms-2009/id-alg-CMSRC2wrap.va.mjs";
import {
    RC2wrapParameter,
    _decode_RC2wrapParameter,
    _encode_RC2wrapParameter,
} from "../CryptographicMessageSyntaxAlgorithms-2009/RC2wrapParameter.ta.mjs";
/* START_OF_SYMBOL_DEFINITION kwa_RC2Wrap */
/**
 * @summary kwa_RC2Wrap
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * kwa-RC2Wrap KEY-WRAP ::= {
 * IDENTIFIER id-alg-CMSRC2wrap
 * PARAMS TYPE RC2wrapParameter ARE required
 * SMIME-CAPS { IDENTIFIED BY id-alg-CMSRC2wrap }
 * }
 * ```
 *
 * @constant
 * @type {KEY_WRAP<RC2wrapParameter>}
 * @implements {KEY_WRAP<RC2wrapParameter>}
 */
export const kwa_RC2Wrap: KEY_WRAP<RC2wrapParameter> = {
    class: "KEY-WRAP",
    decoderFor: {
        "&Params": _decode_RC2wrapParameter,
    },
    encoderFor: {
        "&Params": _encode_RC2wrapParameter,
    },
    "&id": id_alg_CMSRC2wrap /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&paramPresence": required /* OBJECT_FIELD_SETTING */,
    "&Params": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION kwa_RC2Wrap */

/* eslint-enable */
