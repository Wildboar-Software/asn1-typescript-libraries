/* eslint-disable */
import { type BOOLEAN } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_zimbraCalendarCalDavUseDistinctAppointmentAndToDoCollection } from "../LdapZimbra/id-at-zimbraCalendarCalDavUseDistinctAppointmentAndToDoCollection.va.mjs";
import { boolean_ } from "../SelectedAttributeTypes/boolean.oa.mjs";
import { booleanMatch } from "../SelectedAttributeTypes/booleanMatch.oa.mjs";

/**
 * @summary zimbraCalendarCalDavUseDistinctAppointmentAndToDoCollection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraCalendarCalDavUseDistinctAppointmentAndToDoCollection ATTRIBUTE ::= {
 *   WITH SYNTAX               BOOLEAN
 *   EQUALITY MATCHING RULE    booleanMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               boolean.&id
 *   LDAP-NAME                 {"zimbraCalendarCalDavUseDistinctAppointmentAndToDoCollection"}
 *   LDAP-DESC                 "Deprecated since: 8.0.0. Deprecated per bug 69886.. Orig desc: When set to TRUE, Calendar folders and Todo folders in Zimbra will be advertised as Calendar only and Todo only via CalDAV. When set to FALSE, Calendar folders will be able to store both appointments and tasks, and Todo folders will not be advertised as CalDAV enabled."
 *   ID                        id-at-zimbraCalendarCalDavUseDistinctAppointmentAndToDoCollection }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<BOOLEAN>}
 * @implements {ATTRIBUTE<BOOLEAN>}
 */
export
const zimbraCalendarCalDavUseDistinctAppointmentAndToDoCollection: ATTRIBUTE<BOOLEAN> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeBoolean,
    },
    encoderFor: {
        "&Type": $._encodeBoolean,
    },
    "&equality-match": booleanMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": boolean_["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["zimbraCalendarCalDavUseDistinctAppointmentAndToDoCollection"],
    "&ldapDesc": "Deprecated since: 8.0.0. Deprecated per bug 69886.. Orig desc: When set to TRUE, Calendar folders and Todo folders in Zimbra will be advertised as Calendar only and Todo only via CalDAV. When set to FALSE, Calendar folders will be able to store both appointments and tasks, and Todo folders will not be advertised as CalDAV enabled." /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraCalendarCalDavUseDistinctAppointmentAndToDoCollection /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
