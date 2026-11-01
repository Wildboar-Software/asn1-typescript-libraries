/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { type DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";
import { dn } from "../SelectedAttributeTypes/dn.oa.mjs";
import { id_at_msTPM_TpmInformationForComputer } from "../MSUser/id-at-msTPM-TpmInformationForComputer.va.mjs";


/**
 * @summary msTPM_TpmInformationForComputer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * msTPM-TpmInformationForComputer ATTRIBUTE ::= {
 *   WITH SYNTAX               DistinguishedName
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               dn.&id
 *   LDAP-NAME                 {"msTPM-TpmInformationForComputer"}
 *   ID                        id-at-msTPM-TpmInformationForComputer }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<DistinguishedName>}
 * @implements {ATTRIBUTE<DistinguishedName>}
 */
export
const msTPM_TpmInformationForComputer: ATTRIBUTE<DistinguishedName> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DistinguishedName,
    },
    encoderFor: {
        "&Type": _encode_DistinguishedName,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": dn["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "msTPM-TpmInformationForComputer" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_at_msTPM_TpmInformationForComputer /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

