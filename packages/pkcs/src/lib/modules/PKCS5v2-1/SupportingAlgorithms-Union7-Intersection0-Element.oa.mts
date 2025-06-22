/* eslint-disable */
import { OCTET_STRING } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import { aes256_CBC_PAD } from "../PKCS5v2-1/aes256-CBC-PAD.va.mjs";
import { ALGORITHM_IDENTIFIER } from "../PKCS5v2-1/ALGORITHM-IDENTIFIER.oca.mjs";

/**
 * @summary SupportingAlgorithms_Union7_Intersection0_Element
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportingAlgorithms-Union7-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {ALGORITHM_IDENTIFIER<OCTET_STRING>}
 * @implements {ALGORITHM_IDENTIFIER<OCTET_STRING>}
 */
export const SupportingAlgorithms_Union7_Intersection0_Element: ALGORITHM_IDENTIFIER<OCTET_STRING> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": $._decodeOctetString,
    },
    encoderFor: {
        "&Type": $._encodeOctetString,
    },
    "&id": aes256_CBC_PAD /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
