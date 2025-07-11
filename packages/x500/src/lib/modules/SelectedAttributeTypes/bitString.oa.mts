/* eslint-disable */
import { BIT_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
import { id_lsx_bitString } from "../SelectedAttributeTypes/id-lsx-bitString.va.mjs";
/**
 * @summary bitString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * bitString SYNTAX-NAME ::= {
 *   LDAP-DESC         "Bit String"
 *   DIRECTORY SYNTAX  BIT STRING
 *   ID                id-lsx-bitString }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<BIT_STRING>}
 * @implements {SYNTAX_NAME<BIT_STRING>}
 */
export const bitString: SYNTAX_NAME<BIT_STRING> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": $._decodeBitString,
    },
    encoderFor: {
        "&Type": $._encodeBitString,
    },
    "&ldapDesc": "Bit String" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_bitString /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
