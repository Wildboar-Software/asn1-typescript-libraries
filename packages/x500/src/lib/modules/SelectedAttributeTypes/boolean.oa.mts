/* eslint-disable */
import { BOOLEAN } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
import { id_lsx_boolean } from "../SelectedAttributeTypes/id-lsx-boolean.va.mjs";
/**
 * @summary boolean_
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * boolean SYNTAX-NAME ::= {
 *   LDAP-DESC         "Boolean"
 *   DIRECTORY SYNTAX  BOOLEAN
 *   ID                id-lsx-boolean }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<BOOLEAN>}
 * @implements {SYNTAX_NAME<BOOLEAN>}
 */
export const boolean_: SYNTAX_NAME<BOOLEAN> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": $._decodeBoolean,
    },
    encoderFor: {
        "&Type": $._encodeBoolean,
    },
    "&ldapDesc": "Boolean" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_boolean /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
