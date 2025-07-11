/* eslint-disable */
import { issuedOnBehalfOf } from "../AttributeCertificateDefinitions/issuedOnBehalfOf.oa.mjs";
import { id_asx_issuedOnBehalfOf } from "../ExtensionAttributes/id-asx-issuedOnBehalfOf.va.mjs";
import { id_ce_a_issuedOnBehalfOf } from "../ExtensionAttributes/id-ce-a-issuedOnBehalfOf.va.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/**
 * @summary a_issuedOnBehalfOf
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-issuedOnBehalfOf ATTRIBUTE ::= {
 *   WITH SYNTAX       issuedOnBehalfOf.&ExtnType
 *   LDAP-SYNTAX       id-asx-issuedOnBehalfOf
 *   LDAP-NAME         {"Issued on behalf of"}
 *   ID                id-ce-a-issuedOnBehalfOf}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<typeof issuedOnBehalfOf["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof issuedOnBehalfOf["&ExtnType"]>}
 */
export const a_issuedOnBehalfOf: ATTRIBUTE<
    typeof issuedOnBehalfOf["&ExtnType"]
> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": issuedOnBehalfOf.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": issuedOnBehalfOf.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_issuedOnBehalfOf /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_issuedOnBehalfOf /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
