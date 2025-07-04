/* eslint-disable */
import { deltaCRLIndicator } from "../CertificateExtensions/deltaCRLIndicator.oa.mjs";
import { id_asx_deltaCRLIndicator } from "../ExtensionAttributes/id-asx-deltaCRLIndicator.va.mjs";
import { id_ce_a_deltaCRLIndicator } from "../ExtensionAttributes/id-ce-a-deltaCRLIndicator.va.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/**
 * @summary a_deltaCRLIndicator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-deltaCRLIndicator ATTRIBUTE ::= {
 *   WITH SYNTAX       deltaCRLIndicator.&ExtnType
 *   LDAP-SYNTAX       id-asx-deltaCRLIndicator
 *   LDAP-NAME         {"Delta CRL indicator"}
 *   ID                id-ce-a-deltaCRLIndicator}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<typeof deltaCRLIndicator["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof deltaCRLIndicator["&ExtnType"]>}
 */
export const a_deltaCRLIndicator: ATTRIBUTE<
    typeof deltaCRLIndicator["&ExtnType"]
> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": deltaCRLIndicator.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": deltaCRLIndicator.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_deltaCRLIndicator /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_deltaCRLIndicator /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
