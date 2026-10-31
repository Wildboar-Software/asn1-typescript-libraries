/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_goFonServer } from "../LdapGosaCoreGoserver/id-oc-goFonServer.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { goFonAdmin } from "./goFonAdmin.oa.mjs";
import { goFonAreaCode } from "./goFonAreaCode.oa.mjs";
import { goFonCountryCode } from "./goFonCountryCode.oa.mjs";
import { goFonPassword } from "./goFonPassword.oa.mjs";
import { goFonServerStatus } from "./goFonServerStatus.oa.mjs";

/**
 * @summary goFonServer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * goFonServer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName
 *                               | goFonAdmin
 *                               | goFonPassword
 *                               | goFonAreaCode
 *                               | goFonCountryCode }
 *   MAY CONTAIN               { description
 *                               | goFonServerStatus }
 *   LDAP-NAME                 {"goFonServer"}
 *   LDAP-DESC                 "Fon server description (v2.7)"
 *   ID                        id-oc-goFonServer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const goFonServer: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName, goFonAdmin, goFonPassword, goFonAreaCode, goFonCountryCode] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [description, goFonServerStatus] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["goFonServer"],
    "&ldapDesc": "Fon server description (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_goFonServer /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
