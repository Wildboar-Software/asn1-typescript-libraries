/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_zimbraMimeEntry } from "../LdapZimbra/id-oc-zimbraMimeEntry.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { zimbraMimeFileExtension } from "./zimbraMimeFileExtension.oa.mjs";
import { zimbraMimeHandlerClass } from "./zimbraMimeHandlerClass.oa.mjs";
import { zimbraMimeHandlerExtension } from "./zimbraMimeHandlerExtension.oa.mjs";
import { zimbraMimeIndexingEnabled } from "./zimbraMimeIndexingEnabled.oa.mjs";
import { zimbraMimePriority } from "./zimbraMimePriority.oa.mjs";
import { zimbraMimeType } from "./zimbraMimeType.oa.mjs";

/**
 * @summary zimbraMimeEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraMimeEntry OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | zimbraMimeIndexingEnabled }
 *   MAY CONTAIN               { description
 *                               | zimbraMimeFileExtension
 *                               | zimbraMimeHandlerClass
 *                               | zimbraMimeHandlerExtension
 *                               | zimbraMimePriority
 *                               | zimbraMimeType }
 *   LDAP-NAME                 {"zimbraMimeEntry"}
 *   LDAP-DESC                 "MIME type info"
 *   ID                        id-oc-zimbraMimeEntry }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const zimbraMimeEntry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName, zimbraMimeIndexingEnabled] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [description, zimbraMimeFileExtension, zimbraMimeHandlerClass, zimbraMimeHandlerExtension, zimbraMimePriority, zimbraMimeType] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["zimbraMimeEntry"],
    "&ldapDesc": "MIME type info" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_zimbraMimeEntry /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
