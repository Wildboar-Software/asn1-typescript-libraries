/* eslint-disable */
import { holderNameConstraints } from "../AttributeCertificateDefinitions/holderNameConstraints.oa.mjs";
import { id_asx_holderNameConstraints } from "../ExtensionAttributes/id-asx-holderNameConstraints.va.mjs";
import { id_ce_a_holderNameConstraints } from "../ExtensionAttributes/id-ce-a-holderNameConstraints.va.mjs";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/**
 * @summary a_holderNameConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-holderNameConstraints ATTRIBUTE ::= {
 *   WITH SYNTAX       holderNameConstraints.&ExtnType
 *   LDAP-SYNTAX       id-asx-holderNameConstraints
 *   LDAP-NAME         {"Holder name constraints"}
 *   ID                id-ce-a-holderNameConstraints}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<typeof holderNameConstraints["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof holderNameConstraints["&ExtnType"]>}
 */
export const a_holderNameConstraints: ATTRIBUTE<
    typeof holderNameConstraints["&ExtnType"]
> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": holderNameConstraints.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": holderNameConstraints.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_holderNameConstraints /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_holderNameConstraints /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
