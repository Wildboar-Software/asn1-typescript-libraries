/* eslint-disable */
import { OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
import { id_lsx_octetString } from "../SelectedAttributeTypes/id-lsx-octetString.va.mjs";
/**
 * @summary octetString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * octetString SYNTAX-NAME ::= {
 *   LDAP-DESC         "Octet String"
 *   DIRECTORY SYNTAX  OCTET STRING
 *   ID                id-lsx-octetString }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<OCTET_STRING>}
 * @implements {SYNTAX_NAME<OCTET_STRING>}
 */
export const octetString: SYNTAX_NAME<OCTET_STRING> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": $._decodeOctetString,
    },
    encoderFor: {
        "&Type": $._encodeOctetString,
    },
    "&ldapDesc": "Octet String" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_octetString /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
