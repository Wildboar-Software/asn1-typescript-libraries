/* eslint-disable */
import { type OBJECT_IDENTIFIER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_possibleInferiors } from "../MSUser/id-at-possibleInferiors.va.mjs";
import { oid } from "../SelectedAttributeTypes/oid.oa.mjs";

/**
 * @summary possibleInferiors
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * possibleInferiors ATTRIBUTE ::= {
 *   WITH SYNTAX               OBJECT IDENTIFIER
 *   NO USER MODIFICATION      TRUE
 *   LDAP-SYNTAX               oid.&id
 *   LDAP-NAME                 {"possibleInferiors"}
 *   ID                        id-at-possibleInferiors }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<OBJECT_IDENTIFIER>}
 * @implements {ATTRIBUTE<OBJECT_IDENTIFIER>}
 */
export
const possibleInferiors: ATTRIBUTE<OBJECT_IDENTIFIER> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeObjectIdentifier,
    },
    encoderFor: {
        "&Type": $._encodeObjectIdentifier,
    },
    "&no-user-modification": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": oid["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["possibleInferiors"],
    "&id": id_at_possibleInferiors /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
