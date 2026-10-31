/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_icsCalendarDWPHost } from "../Ldapmigration60iplanetCalendar/id-oc-icsCalendarDWPHost.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { icsDWPHost } from "./icsDWPHost.oa.mjs";
import { icsDomainNames } from "./icsDomainNames.oa.mjs";
import { icsExtended } from "./icsExtended.oa.mjs";
import { icsRegularExpressions } from "./icsRegularExpressions.oa.mjs";
import { icsStatus } from "./icsStatus.oa.mjs";

/**
 * @summary icsCalendarDWPHost
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * icsCalendarDWPHost OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { commonName
 *                               | description
 *                               | icsDWPHost
 *                               | icsRegularExpressions
 *                               | icsExtended
 *                               | icsDomainNames
 *                               | icsStatus }
 *   LDAP-NAME                 {"icsCalendarDWPHost"}
 *   LDAP-DESC                 "Standard Object Class"
 *   ID                        id-oc-icsCalendarDWPHost }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const icsCalendarDWPHost: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [commonName, description, icsDWPHost, icsRegularExpressions, icsExtended, icsDomainNames, icsStatus] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["icsCalendarDWPHost"],
    "&ldapDesc": "Standard Object Class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_icsCalendarDWPHost /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
