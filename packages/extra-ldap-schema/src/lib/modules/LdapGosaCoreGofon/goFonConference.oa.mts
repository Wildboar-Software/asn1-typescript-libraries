/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_goFonConference } from "../LdapGosaCoreGofon/id-oc-goFonConference.va.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { goFonConferenceOption } from "../LdapGosaCoreGofon/goFonConferenceOption.oa.mjs";
import { goFonConferenceTimeOut } from "../LdapGosaCoreGofon/goFonConferenceTimeOut.oa.mjs";
import { goFonPIN } from "../LdapGosaCoreGofon/goFonPIN.oa.mjs";
import { goFonConferenceOwner } from "../LdapGosaCoreGofon/goFonConferenceOwner.oa.mjs";
import { telephoneNumber } from "../SelectedAttributeTypes/telephoneNumber.oa.mjs";
import { goFonHomeServer } from "../LdapGosaCoreGofon/goFonHomeServer.oa.mjs";
// export { id_oc_goFonConference } from "../LdapGosaCoreGofon/id-oc-goFonConference.va.mjs";


/**
 * @summary goFonConference
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * goFonConference OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { description
 *                               | goFonConferenceOption
 *                               | goFonConferenceTimeOut
 *                               | goFonPIN
 *                               | goFonConferenceOwner
 *                               | telephoneNumber
 *                               | goFonHomeServer }
 *   LDAP-NAME                 {"goFonConference"}
 *   LDAP-DESC                 "Conference definitions for asterisk machines (v2.7)"
 *   ID                        id-oc-goFonConference }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const goFonConference: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ description, goFonConferenceOption, goFonConferenceTimeOut, goFonPIN, goFonConferenceOwner, telephoneNumber, goFonHomeServer, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "goFonConference" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Conference definitions for asterisk machines (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_goFonConference /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
