/* eslint-disable */
import { IA5String } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
import { id_lsx_ia5String } from "../SelectedAttributeTypes/id-lsx-ia5String.va.mjs";
/**
 * @summary ia5String
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ia5String SYNTAX-NAME ::= {
 *   LDAP-DESC         "IA5 String"
 *   DIRECTORY SYNTAX  IA5String
 *   ID                id-lsx-ia5String }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<IA5String>}
 * @implements {SYNTAX_NAME<IA5String>}
 */
export const ia5String: SYNTAX_NAME<IA5String> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": $._decodeIA5String,
    },
    encoderFor: {
        "&Type": $._encodeIA5String,
    },
    "&ldapDesc": "IA5 String" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_ia5String /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
