/* eslint-disable */
import { NULL } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
import { id_lsx_jpeg } from "../SelectedAttributeTypes/id-lsx-jpeg.va.mjs";
/**
 * @summary jpeg
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * jpeg SYNTAX-NAME ::= {
 *   LDAP-DESC         "JPEG"
 *   DIRECTORY SYNTAX  NULL
 *   ID                id-lsx-jpeg }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<NULL>}
 * @implements {SYNTAX_NAME<NULL>}
 */
export const jpeg: SYNTAX_NAME<NULL> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&ldapDesc": "JPEG" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_jpeg /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
