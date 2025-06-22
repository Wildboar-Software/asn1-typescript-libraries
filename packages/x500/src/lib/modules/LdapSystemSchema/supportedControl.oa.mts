/* eslint-disable */
import { OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_lat_supportedControl } from "../LdapSystemSchema/id-lat-supportedControl.va.mjs";
import { oid } from "../SelectedAttributeTypes/oid.oa.mjs";
/**
 * @summary supportedControl
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * supportedControl ATTRIBUTE ::= {
 *   WITH SYNTAX              OBJECT IDENTIFIER
 *   USAGE                    dSAOperation
 *   LDAP-SYNTAX              oid.&id
 *   LDAP-NAME                {"supportedControl"}
 *   ID                       id-lat-supportedControl }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<OBJECT_IDENTIFIER>}
 * @implements {ATTRIBUTE<OBJECT_IDENTIFIER>}
 */
export const supportedControl: ATTRIBUTE<OBJECT_IDENTIFIER> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeObjectIdentifier,
    },
    encoderFor: {
        "&Type": $._encodeObjectIdentifier,
    },
    "&usage": dSAOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": oid["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["supportedControl"],
    "&id": id_lat_supportedControl /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
