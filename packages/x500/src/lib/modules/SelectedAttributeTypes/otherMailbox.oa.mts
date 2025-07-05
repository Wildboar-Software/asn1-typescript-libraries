/* eslint-disable */
import { NULL } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
import { id_lsx_otherMailbox } from "../SelectedAttributeTypes/id-lsx-otherMailbox.va.mjs";
/**
 * @summary otherMailbox
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * otherMailbox SYNTAX-NAME ::= {
 *   LDAP-DESC        "Other Mailbox"
 *   DIRECTORY SYNTAX  NULL
 *   ID                id-lsx-otherMailbox }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<NULL>}
 * @implements {SYNTAX_NAME<NULL>}
 */
export const otherMailbox: SYNTAX_NAME<NULL> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&ldapDesc": "Other Mailbox" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_otherMailbox /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
