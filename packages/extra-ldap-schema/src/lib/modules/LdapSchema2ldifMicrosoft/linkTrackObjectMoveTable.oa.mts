/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { fileLinkTracking } from "../LdapSchema2ldifMicrosoft/fileLinkTracking.oa.mjs";
import { id_oc_linkTrackObjectMoveTable } from "../LdapSchema2ldifMicrosoft/id-oc-linkTrackObjectMoveTable.va.mjs";

/**
 * @summary linkTrackObjectMoveTable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * linkTrackObjectMoveTable OBJECT-CLASS ::= {
 *   SUBCLASS OF               { fileLinkTracking }
 *   LDAP-NAME                 {"linkTrackObjectMoveTable"}
 *   ID                        id-oc-linkTrackObjectMoveTable }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const linkTrackObjectMoveTable: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ fileLinkTracking, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "linkTrackObjectMoveTable" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_linkTrackObjectMoveTable /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
