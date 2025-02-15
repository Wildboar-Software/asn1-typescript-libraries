/* eslint-disable */
import { NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { DIGEST_ALGORITHM } from "../AlgorithmInformation-2009/DIGEST-ALGORITHM.oca";
import {
    preferredAbsent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../AlgorithmInformation-2009/ParamOptions.ta";
import { id_sha512 } from "../PKIX1-PSS-OAEP-Algorithms/id-sha512.va";
export { DIGEST_ALGORITHM } from "../AlgorithmInformation-2009/DIGEST-ALGORITHM.oca";
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
} from "../AlgorithmInformation-2009/ParamOptions.ta";
export { id_sha512 } from "../PKIX1-PSS-OAEP-Algorithms/id-sha512.va";

/* START_OF_SYMBOL_DEFINITION mda_sha512 */
/**
 * @summary mda_sha512
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mda-sha512 DIGEST-ALGORITHM ::= {
 * IDENTIFIER id-sha512
 * PARAMS TYPE NULL ARE preferredAbsent
 * }
 * ```
 *
 * @constant
 * @type {DIGEST_ALGORITHM<NULL>}
 * @implements {DIGEST_ALGORITHM<NULL>}
 */
export const mda_sha512: DIGEST_ALGORITHM<NULL> = {
    class: "DIGEST-ALGORITHM",
    decoderFor: {
        "&Params": $._decodeNull,
    },
    encoderFor: {
        "&Params": $._encodeNull,
    },
    "&id": id_sha512 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&paramPresence": preferredAbsent /* OBJECT_FIELD_SETTING */,
    "&Params": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION mda_sha512 */

/* eslint-enable */
