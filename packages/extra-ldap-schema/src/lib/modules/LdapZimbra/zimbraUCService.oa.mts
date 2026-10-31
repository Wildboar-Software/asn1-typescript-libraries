/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_zimbraUCService } from "../LdapZimbra/id-oc-zimbraUCService.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { zimbraACE } from "./zimbraACE.oa.mjs";
import { zimbraCreateTimestamp } from "./zimbraCreateTimestamp.oa.mjs";
import { zimbraId } from "./zimbraId.oa.mjs";
import { zimbraUCCallControlURL } from "./zimbraUCCallControlURL.oa.mjs";
import { zimbraUCPresenceSessionId } from "./zimbraUCPresenceSessionId.oa.mjs";
import { zimbraUCPresenceURL } from "./zimbraUCPresenceURL.oa.mjs";
import { zimbraUCProvider } from "./zimbraUCProvider.oa.mjs";
import { zimbraUCUserURL } from "./zimbraUCUserURL.oa.mjs";
import { zimbraUCVoicemailURL } from "./zimbraUCVoicemailURL.oa.mjs";

/**
 * @summary zimbraUCService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraUCService OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | zimbraId
 *                               | zimbraUCProvider }
 *   MAY CONTAIN               { description
 *                               | zimbraACE
 *                               | zimbraCreateTimestamp
 *                               | zimbraUCCallControlURL
 *                               | zimbraUCPresenceSessionId
 *                               | zimbraUCPresenceURL
 *                               | zimbraUCUserURL
 *                               | zimbraUCVoicemailURL }
 *   LDAP-NAME                 {"zimbraUCService"}
 *   LDAP-DESC                 "Unified Communication service in the cluster"
 *   ID                        id-oc-zimbraUCService }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const zimbraUCService: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName, zimbraId, zimbraUCProvider] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [description, zimbraACE, zimbraCreateTimestamp, zimbraUCCallControlURL, zimbraUCPresenceSessionId, zimbraUCPresenceURL, zimbraUCUserURL, zimbraUCVoicemailURL] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["zimbraUCService"],
    "&ldapDesc": "Unified Communication service in the cluster" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_zimbraUCService /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
