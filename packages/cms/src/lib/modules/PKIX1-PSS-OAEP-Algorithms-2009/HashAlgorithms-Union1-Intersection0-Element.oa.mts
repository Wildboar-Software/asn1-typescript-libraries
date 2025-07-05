/* eslint-disable */
import { NULL } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type DIGEST_ALGORITHM } from "../AlgorithmInformation-2009/DIGEST-ALGORITHM.oca.mjs";
import {
    preferredPresent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../AlgorithmInformation-2009/ParamOptions.ta.mjs";
import { id_sha224 } from "../PKIX1-PSS-OAEP-Algorithms-2009/id-sha224.va.mjs";

/**
 * @summary HashAlgorithms_Union1_Intersection0_Element
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HashAlgorithms-Union1-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {DIGEST_ALGORITHM<NULL>}
 * @implements {DIGEST_ALGORITHM<NULL>}
 */
export const HashAlgorithms_Union1_Intersection0_Element: DIGEST_ALGORITHM<NULL> = {
    class: "DIGEST-ALGORITHM",
    decoderFor: {
        "&Params": $._decodeNull,
    },
    encoderFor: {
        "&Params": $._encodeNull,
    },
    "&id": id_sha224 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&paramPresence": preferredPresent /* OBJECT_FIELD_SETTING */,
    "&Params": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
