/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_goFaxDivertNumber } from "../LdapGosaCoreGofax/id-at-goFaxDivertNumber.va.mjs";
import {
    _decode_FacsimileTelephoneNumber,
    _encode_FacsimileTelephoneNumber,
    FacsimileTelephoneNumber,
} from "../SelectedAttributeTypes/FacsimileTelephoneNumber.ta.mjs";
import { facsimileTelephoneNr } from "../SelectedAttributeTypes/facsimileTelephoneNr.oa.mjs";

/**
 * @summary goFaxDivertNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * goFaxDivertNumber ATTRIBUTE ::= {
 *   WITH SYNTAX               FacsimileTelephoneNumber
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               facsimileTelephoneNr.&id
 *   LDAP-NAME                 {"goFaxDivertNumber"}
 *   LDAP-DESC                 "for fax diversion services"
 *   ID                        id-at-goFaxDivertNumber }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<FacsimileTelephoneNumber>}
 * @implements {ATTRIBUTE<FacsimileTelephoneNumber>}
 */
export
const goFaxDivertNumber: ATTRIBUTE<FacsimileTelephoneNumber> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_FacsimileTelephoneNumber,
    },
    encoderFor: {
        "&Type": _encode_FacsimileTelephoneNumber,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": facsimileTelephoneNr["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["goFaxDivertNumber"],
    "&ldapDesc": "for fax diversion services" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_goFaxDivertNumber /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
