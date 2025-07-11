/* eslint-disable */
import { NumericString } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
import { id_lsx_numericString } from "../SelectedAttributeTypes/id-lsx-numericString.va.mjs";
/**
 * @summary numericString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * numericString SYNTAX-NAME ::= {
 *   LDAP-DESC         "Numeric String"
 *   DIRECTORY SYNTAX  NumericString
 *   ID                id-lsx-numericString }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<NumericString>}
 * @implements {SYNTAX_NAME<NumericString>}
 */
export const numericString: SYNTAX_NAME<NumericString> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": $._decodeNumericString,
    },
    encoderFor: {
        "&Type": $._encodeNumericString,
    },
    "&ldapDesc": "Numeric String" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_numericString /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
