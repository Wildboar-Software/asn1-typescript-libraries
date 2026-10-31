/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_zimbraZimletEntry } from "../LdapZimbra/id-oc-zimbraZimletEntry.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { zimbraACE } from "./zimbraACE.oa.mjs";
import { zimbraAdminExtDisableUIUndeploy } from "./zimbraAdminExtDisableUIUndeploy.oa.mjs";
import { zimbraCreateTimestamp } from "./zimbraCreateTimestamp.oa.mjs";
import { zimbraZimletDescription } from "./zimbraZimletDescription.oa.mjs";
import { zimbraZimletEnabled } from "./zimbraZimletEnabled.oa.mjs";
import { zimbraZimletHandlerClass } from "./zimbraZimletHandlerClass.oa.mjs";
import { zimbraZimletHandlerConfig } from "./zimbraZimletHandlerConfig.oa.mjs";
import { zimbraZimletIndexingEnabled } from "./zimbraZimletIndexingEnabled.oa.mjs";
import { zimbraZimletIsExtension } from "./zimbraZimletIsExtension.oa.mjs";
import { zimbraZimletKeyword } from "./zimbraZimletKeyword.oa.mjs";
import { zimbraZimletPriority } from "./zimbraZimletPriority.oa.mjs";
import { zimbraZimletScript } from "./zimbraZimletScript.oa.mjs";
import { zimbraZimletServerIndexRegex } from "./zimbraZimletServerIndexRegex.oa.mjs";
import { zimbraZimletTarget } from "./zimbraZimletTarget.oa.mjs";
import { zimbraZimletVersion } from "./zimbraZimletVersion.oa.mjs";

/**
 * @summary zimbraZimletEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraZimletEntry OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | zimbraZimletEnabled
 *                               | zimbraZimletVersion }
 *   MAY CONTAIN               { description
 *                               | zimbraACE
 *                               | zimbraAdminExtDisableUIUndeploy
 *                               | zimbraCreateTimestamp
 *                               | zimbraZimletDescription
 *                               | zimbraZimletHandlerClass
 *                               | zimbraZimletHandlerConfig
 *                               | zimbraZimletIndexingEnabled
 *                               | zimbraZimletIsExtension
 *                               | zimbraZimletKeyword
 *                               | zimbraZimletPriority
 *                               | zimbraZimletScript
 *                               | zimbraZimletServerIndexRegex
 *                               | zimbraZimletTarget }
 *   LDAP-NAME                 {"zimbraZimletEntry"}
 *   LDAP-DESC                 "Zimlet info"
 *   ID                        id-oc-zimbraZimletEntry }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const zimbraZimletEntry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName, zimbraZimletEnabled, zimbraZimletVersion] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [description, zimbraACE, zimbraAdminExtDisableUIUndeploy, zimbraCreateTimestamp, zimbraZimletDescription, zimbraZimletHandlerClass, zimbraZimletHandlerConfig, zimbraZimletIndexingEnabled, zimbraZimletIsExtension, zimbraZimletKeyword, zimbraZimletPriority, zimbraZimletScript, zimbraZimletServerIndexRegex, zimbraZimletTarget] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["zimbraZimletEntry"],
    "&ldapDesc": "Zimlet info" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_zimbraZimletEntry /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
