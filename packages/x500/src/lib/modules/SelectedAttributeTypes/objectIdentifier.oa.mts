/* eslint-disable */
import { OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { objectIdentifierMatch } from "../InformationFramework/objectIdentifierMatch.oa.mjs";
import { id_at_objectIdentifier } from "../SelectedAttributeTypes/id-at-objectIdentifier.va.mjs";
import { oid } from "../SelectedAttributeTypes/oid.oa.mjs";
/**
 * @summary objectIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * objectIdentifier ATTRIBUTE ::= {
 *   WITH SYNTAX             OBJECT IDENTIFIER
 *   EQUALITY MATCHING RULE  objectIdentifierMatch
 *   SINGLE VALUE            TRUE
 *   LDAP-SYNTAX             oid.&id
 *   LDAP-NAME               {"Object Identifier"}
 *   ID                      id-at-objectIdentifier }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<OBJECT_IDENTIFIER>}
 * @implements {ATTRIBUTE<OBJECT_IDENTIFIER>}
 */
export const objectIdentifier: ATTRIBUTE<OBJECT_IDENTIFIER> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeObjectIdentifier,
    },
    encoderFor: {
        "&Type": $._encodeObjectIdentifier,
    },
    "&equality-match": objectIdentifierMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": oid["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["Object Identifier"],
    "&id": id_at_objectIdentifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
