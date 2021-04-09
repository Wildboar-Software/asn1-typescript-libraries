/* eslint-disable */
import { NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { DIGEST_ALGORITHM } from "@wildboar/cms/src/lib/modules/AlgorithmInformation-2009/DIGEST-ALGORITHM.oca";
import {
    preferredAbsent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../AlgorithmInformation-2009/ParamOptions.ta";
import { id_sha1 } from "@wildboar/x500/src/lib/modules/AlgorithmObjectIdentifiers/id-sha1.va";

/* START_OF_SYMBOL_DEFINITION mda_sha1 */
/**
 * @summary mda_sha1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mda-sha1 DIGEST-ALGORITHM ::= {
 * IDENTIFIER id-sha1
 * PARAMS TYPE NULL ARE preferredAbsent
 * }
 * ```
 *
 * @constant
 * @type {DIGEST_ALGORITHM<NULL>}
 * @implements {DIGEST_ALGORITHM<NULL>}
 */
export const mda_sha1: DIGEST_ALGORITHM<NULL> = {
    class: "DIGEST-ALGORITHM",
    decoderFor: {
        "&Params": $._decodeNull,
    },
    encoderFor: {
        "&Params": $._encodeNull,
    },
    "&id": id_sha1 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&paramPresence": preferredAbsent /* OBJECT_FIELD_SETTING */,
    "&Params": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION mda_sha1 */

/* eslint-enable */
