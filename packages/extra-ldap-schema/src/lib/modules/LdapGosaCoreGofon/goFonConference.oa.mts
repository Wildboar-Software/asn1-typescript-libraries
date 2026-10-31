/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_goFonConference } from "../LdapGosaCoreGofon/id-oc-goFonConference.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { telephoneNumber } from "../SelectedAttributeTypes/telephoneNumber.oa.mjs";
import { goFonConferenceOption } from "./goFonConferenceOption.oa.mjs";
import { goFonConferenceOwner } from "./goFonConferenceOwner.oa.mjs";
import { goFonConferenceTimeOut } from "./goFonConferenceTimeOut.oa.mjs";
import { goFonHomeServer } from "./goFonHomeServer.oa.mjs";
import { goFonPIN } from "./goFonPIN.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [description, goFonConferenceOption, goFonConferenceTimeOut, goFonPIN, goFonConferenceOwner, telephoneNumber, goFonHomeServer] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["goFonConference"],
    "&ldapDesc": "Conference definitions for asterisk machines (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_goFonConference /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
