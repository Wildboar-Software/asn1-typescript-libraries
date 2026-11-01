/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { type SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
import {
    type UUID,
    _decode_UUID,
    _encode_UUID,
} from "../SelectedAttributeTypes/UUID.ta.mjs";

/**
 * @summary uuid
 * @description
 *
 * LDAP UUID syntax from RFC 4530. The Wildboar `UUID` module that this
 * schema imported was not part of the LDAP schema, so the syntax object is
 * defined here from that RFC.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * uuid SYNTAX-NAME ::= {
 *     LDAP-DESC        "UUID"
 *     DIRECTORY SYNTAX UUID
 *     ID               { 1 3 6 1 1 16 1 }
 * }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<UUID>}
 * @implements {SYNTAX_NAME<UUID>}
 */
export
const uuid: SYNTAX_NAME<UUID> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_UUID,
    },
    encoderFor: {
        "&Type": _encode_UUID,
    },
    "&ldapDesc": "UUID" /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([1, 3, 6, 1, 1, 16, 1,]) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
