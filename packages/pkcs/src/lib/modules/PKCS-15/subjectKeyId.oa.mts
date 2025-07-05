/* eslint-disable */
import { OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type KEY_IDENTIFIER } from "../PKCS-15/KEY-IDENTIFIER.oca.mjs";

/**
 * @summary subjectKeyId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * subjectKeyId KEY-IDENTIFIER ::= {SYNTAX OCTET STRING IDENTIFIED BY 2}
 * ```
 *
 * @constant
 * @type {KEY_IDENTIFIER<OCTET_STRING>}
 * @implements {KEY_IDENTIFIER<OCTET_STRING>}
 */
export const subjectKeyId: KEY_IDENTIFIER<OCTET_STRING> = {
    class: "KEY-IDENTIFIER",
    decoderFor: {
        "&Value": $._decodeOctetString,
    },
    encoderFor: {
        "&Value": $._encodeOctetString,
    },
    "&id": 2 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Value": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
