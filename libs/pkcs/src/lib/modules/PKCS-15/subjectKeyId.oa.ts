/* eslint-disable */
import { OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { KEY_IDENTIFIER } from "../PKCS-15/KEY-IDENTIFIER.oca";
export { KEY_IDENTIFIER } from "../PKCS-15/KEY-IDENTIFIER.oca";

/* START_OF_SYMBOL_DEFINITION subjectKeyId */
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
/* END_OF_SYMBOL_DEFINITION subjectKeyId */

/* eslint-enable */
