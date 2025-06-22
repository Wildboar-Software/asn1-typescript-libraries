/* eslint-disable */
import { OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_oa_administrativeRole } from "../InformationFramework/id-oa-administrativeRole.va.mjs";
import { objectIdentifierMatch } from "../InformationFramework/objectIdentifierMatch.oa.mjs";
import { oid } from "../SelectedAttributeTypes/oid.oa.mjs";
/**
 * @summary administrativeRole
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * administrativeRole ATTRIBUTE ::= {
 *   WITH SYNTAX             OBJECT-CLASS.&id
 *   EQUALITY MATCHING RULE  objectIdentifierMatch
 *   USAGE                   directoryOperation
 *   LDAP-SYNTAX             oid.&id
 *   LDAP-NAME               {"administrativeRole"}
 *   ID                      id-oa-administrativeRole }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<OBJECT_IDENTIFIER>}
 * @implements {ATTRIBUTE<OBJECT_IDENTIFIER>}
 */
export const administrativeRole: ATTRIBUTE<OBJECT_IDENTIFIER> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeObjectIdentifier,
    },
    encoderFor: {
        "&Type": $._encodeObjectIdentifier,
    },
    "&equality-match": objectIdentifierMatch /* OBJECT_FIELD_SETTING */,
    "&usage": directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": oid["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["administrativeRole"],
    "&id": id_oa_administrativeRole /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
