/* eslint-disable */
import {
    DSS_Parms,
    _decode_DSS_Parms,
    _encode_DSS_Parms,
} from "../AlgorithmObjectIdentifiers/DSS-Parms.ta.mjs";
import { id_dsa } from "../AlgorithmObjectIdentifiers/id-dsa.va.mjs";
import { type ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca.mjs";
/**
 * @summary dsa
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dsa ALGORITHM ::= { -- IETF RFC 5480
 *   PARMS         DSS-Parms
 *   IDENTIFIED BY id-dsa }
 * ```
 *
 * @constant
 * @type {ALGORITHM<DSS_Parms>}
 * @implements {ALGORITHM<DSS_Parms>}
 */
export const dsa: ALGORITHM<DSS_Parms> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_DSS_Parms,
    },
    encoderFor: {
        "&Type": _encode_DSS_Parms,
    },
    "&id": id_dsa /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
