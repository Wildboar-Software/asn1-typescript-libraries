/* eslint-disable */
import { issuingDistributionPoint } from "../CertificateExtensions/issuingDistributionPoint.oa.mjs";
import { id_asx_issuingDistributionPoint } from "../ExtensionAttributes/id-asx-issuingDistributionPoint.va.mjs";
import { id_ce_a_issuingDistributionPoint } from "../ExtensionAttributes/id-ce-a-issuingDistributionPoint.va.mjs";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/* START_OF_SYMBOL_DEFINITION a_issuingDistributionPoint */
/**
 * @summary a_issuingDistributionPoint
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-issuingDistributionPoint ATTRIBUTE ::= {
 *   WITH SYNTAX       issuingDistributionPoint.&ExtnType
 *   LDAP-SYNTAX       id-asx-issuingDistributionPoint
 *   LDAP-NAME         {"Issuing distribution point"}
 *   ID                id-ce-a-issuingDistributionPoint}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<typeof issuingDistributionPoint["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof issuingDistributionPoint["&ExtnType"]>}
 */
export const a_issuingDistributionPoint: ATTRIBUTE<
    typeof issuingDistributionPoint["&ExtnType"]
> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": issuingDistributionPoint.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": issuingDistributionPoint.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_issuingDistributionPoint /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_issuingDistributionPoint /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_issuingDistributionPoint */

/* eslint-enable */
