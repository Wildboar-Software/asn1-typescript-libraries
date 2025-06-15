/* eslint-disable */
import { privateKeyUsagePeriod } from "../CertificateExtensions/privateKeyUsagePeriod.oa.mjs";
import { id_asx_privateKeyUsagePeriod } from "../ExtensionAttributes/id-asx-privateKeyUsagePeriod.va.mjs";
import { id_ce_a_privateKeyUsagePeriod } from "../ExtensionAttributes/id-ce-a-privateKeyUsagePeriod.va.mjs";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/**
 * @summary a_privateKeyUsagePeriod
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-privateKeyUsagePeriod ATTRIBUTE ::= {
 *   WITH SYNTAX       privateKeyUsagePeriod.&ExtnType
 *   LDAP-SYNTAX       id-asx-privateKeyUsagePeriod
 *   LDAP-NAME         {"Private Key Usage Period"}
 *   ID                id-ce-a-privateKeyUsagePeriod }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<typeof privateKeyUsagePeriod["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof privateKeyUsagePeriod["&ExtnType"]>}
 */
export const a_privateKeyUsagePeriod: ATTRIBUTE<
    typeof privateKeyUsagePeriod["&ExtnType"]
> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": privateKeyUsagePeriod.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": privateKeyUsagePeriod.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_privateKeyUsagePeriod /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_privateKeyUsagePeriod /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
