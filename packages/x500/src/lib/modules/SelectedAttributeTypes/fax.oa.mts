/* eslint-disable */
import { NULL } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
import { id_lsx_fax } from "../SelectedAttributeTypes/id-lsx-fax.va.mjs";
/**
 * @summary fax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * fax SYNTAX-NAME ::= {
 *   LDAP-DESC         "Fax"
 *   DIRECTORY SYNTAX  NULL
 *   ID                id-lsx-fax }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<NULL>}
 * @implements {SYNTAX_NAME<NULL>}
 */
export const fax: SYNTAX_NAME<NULL> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&ldapDesc": "Fax" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_fax /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
