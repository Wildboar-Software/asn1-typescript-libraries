/* eslint-disable */
import { cRLStreamIdentifier } from "../CertificateExtensions/cRLStreamIdentifier.oa.mjs";
import { id_asx_cRLStreamIdentifier } from "../ExtensionAttributes/id-asx-cRLStreamIdentifier.va.mjs";
import { id_ce_a_cRLStreamIdentifier } from "../ExtensionAttributes/id-ce-a-cRLStreamIdentifier.va.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/**
 * @summary a_cRLStreamIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-cRLStreamIdentifier ATTRIBUTE ::= {
 *   WITH SYNTAX       cRLStreamIdentifier.&ExtnType
 *   LDAP-SYNTAX       id-asx-cRLStreamIdentifier
 *   LDAP-NAME         {"CRL stream identifier"}
 *   ID                id-ce-a-cRLStreamIdentifier}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<typeof cRLStreamIdentifier["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof cRLStreamIdentifier["&ExtnType"]>}
 */
export const a_cRLStreamIdentifier: ATTRIBUTE<
    typeof cRLStreamIdentifier["&ExtnType"]
> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": cRLStreamIdentifier.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": cRLStreamIdentifier.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_cRLStreamIdentifier /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_cRLStreamIdentifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
