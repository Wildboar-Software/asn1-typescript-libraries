/* eslint-disable */
import { delegatedNameConstraints } from "../AttributeCertificateDefinitions/delegatedNameConstraints.oa.mjs";
import { id_asx_delegatedNameConstraints } from "../ExtensionAttributes/id-asx-delegatedNameConstraints.va.mjs";
import { id_ce_a_delegatedNameConstraints } from "../ExtensionAttributes/id-ce-a-delegatedNameConstraints.va.mjs";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/* START_OF_SYMBOL_DEFINITION a_delegatedNameConstraints */
/**
 * @summary a_delegatedNameConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-delegatedNameConstraints ATTRIBUTE ::= {
 *   WITH SYNTAX       delegatedNameConstraints.&ExtnType
 *   LDAP-SYNTAX       id-asx-delegatedNameConstraints
 *   LDAP-NAME         {"Delegated name constraints"}
 *   ID                id-ce-a-delegatedNameConstraints}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<typeof delegatedNameConstraints["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof delegatedNameConstraints["&ExtnType"]>}
 */
export const a_delegatedNameConstraints: ATTRIBUTE<
    typeof delegatedNameConstraints["&ExtnType"]
> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": delegatedNameConstraints.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": delegatedNameConstraints.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_delegatedNameConstraints /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_delegatedNameConstraints /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_delegatedNameConstraints */

/* eslint-enable */
