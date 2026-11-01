/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import {
    type UUID,
    _decode_UUID,
    _encode_UUID,
} from "../SelectedAttributeTypes/UUID.ta.mjs";
import { uuid } from "../OpenLDAP/uuid.oa.mjs";

/**
 * @summary uuidMatch
 * @description
 *
 * Equality matching rule for the LDAP UUID syntax (RFC 4530). Defined here
 * because the imported Wildboar `UUID` module is not part of this schema.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * uuidMatch MATCHING-RULE ::= {
 *     SYNTAX      UUID
 *     LDAP-SYNTAX uuid.&id
 *     LDAP-NAME   {"uuidMatch"}
 *     ID          { 1 3 6 1 1 16 2 }
 * }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<UUID>}
 * @implements {MATCHING_RULE<UUID>}
 */
export
const uuidMatch: MATCHING_RULE<UUID> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_UUID,
    },
    encoderFor: {
        "&AssertionType": _encode_UUID,
    },
    "&ldapSyntax": uuid["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "uuidMatch" ] /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([1, 3, 6, 1, 1, 16, 2,]) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
