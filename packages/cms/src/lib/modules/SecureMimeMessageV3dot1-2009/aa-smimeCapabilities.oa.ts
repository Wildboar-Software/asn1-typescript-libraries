/* eslint-disable */
import {
    SMIMECapabilities,
    _decode_SMIMECapabilities,
    _encode_SMIMECapabilities,
} from "../AlgorithmInformation-2009/SMIMECapabilities.ta.js";
import type { ATTRIBUTE } from "@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.js";
import { smimeCapabilities } from "../SecureMimeMessageV3dot1-2009/smimeCapabilities.va.js";
export {
    SMIMECapabilities,
    _decode_SMIMECapabilities,
    _encode_SMIMECapabilities,
} from "../AlgorithmInformation-2009/SMIMECapabilities.ta.js";
export { smimeCapabilities } from "../SecureMimeMessageV3dot1-2009/smimeCapabilities.va.js";

/* START_OF_SYMBOL_DEFINITION aa_smimeCapabilities */
/**
 * @summary aa_smimeCapabilities
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * aa-smimeCapabilities ATTRIBUTE ::= {
 * TYPE SMIMECapabilities{{SMimeCapsSet}}
 * IDENTIFIED BY smimeCapabilities }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<SMIMECapabilities>}
 * @implements {ATTRIBUTE<SMIMECapabilities>}
 */
export const aa_smimeCapabilities: ATTRIBUTE<SMIMECapabilities> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_SMIMECapabilities,
    },
    encoderFor: {
        "&Type": _encode_SMIMECapabilities,
    },
    "&id": smimeCapabilities /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION aa_smimeCapabilities */

/* eslint-enable */
