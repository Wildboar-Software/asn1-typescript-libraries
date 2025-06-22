/* eslint-disable */
import { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
import { id_lsx_oid } from "../SelectedAttributeTypes/id-lsx-oid.va.mjs";
/**
 * @summary oid
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * oid SYNTAX-NAME ::= {
 *   LDAP-DESC         "OID"
 *   DIRECTORY SYNTAX  OBJECT IDENTIFIER
 *   ID                id-lsx-oid }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<OBJECT_IDENTIFIER>}
 * @implements {SYNTAX_NAME<OBJECT_IDENTIFIER>}
 */
export const oid: SYNTAX_NAME<OBJECT_IDENTIFIER> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": $._decodeObjectIdentifier,
    },
    encoderFor: {
        "&Type": $._encodeObjectIdentifier,
    },
    "&ldapDesc": "OID" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_oid /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
