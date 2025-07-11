/* eslint-disable */
import { PrintableString } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
import { id_lsx_printableString } from "../SelectedAttributeTypes/id-lsx-printableString.va.mjs";
/**
 * @summary printableString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * printableString SYNTAX-NAME ::= {
 *   LDAP-DESC         "Printable String"
 *   DIRECTORY SYNTAX  PrintableString
 *   ID                id-lsx-printableString }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<PrintableString>}
 * @implements {SYNTAX_NAME<PrintableString>}
 */
export const printableString: SYNTAX_NAME<PrintableString> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": $._decodePrintableString,
    },
    encoderFor: {
        "&Type": $._encodePrintableString,
    },
    "&ldapDesc": "Printable String" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_printableString /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
