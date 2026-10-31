/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_gosaSnapshotObject } from "../LdapGosaCoreGosaSamba3/id-oc-gosaSnapshotObject.va.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { gosaSnapshotDN } from "./gosaSnapshotDN.oa.mjs";
import { gosaSnapshotData } from "./gosaSnapshotData.oa.mjs";
import { gosaSnapshotTimestamp } from "./gosaSnapshotTimestamp.oa.mjs";
import { gosaSnapshotType } from "./gosaSnapshotType.oa.mjs";

/**
 * @summary gosaSnapshotObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gosaSnapshotObject OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { gosaSnapshotType
 *                               | gosaSnapshotTimestamp
 *                               | gosaSnapshotDN
 *                               | gosaSnapshotData }
 *   MAY CONTAIN               { description }
 *   LDAP-NAME                 {"gosaSnapshotObject"}
 *   LDAP-DESC                 "Container object for undo and snapshot data (v2.7)"
 *   ID                        id-oc-gosaSnapshotObject }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gosaSnapshotObject: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [gosaSnapshotType, gosaSnapshotTimestamp, gosaSnapshotDN, gosaSnapshotData] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [description] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["gosaSnapshotObject"],
    "&ldapDesc": "Container object for undo and snapshot data (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gosaSnapshotObject /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
