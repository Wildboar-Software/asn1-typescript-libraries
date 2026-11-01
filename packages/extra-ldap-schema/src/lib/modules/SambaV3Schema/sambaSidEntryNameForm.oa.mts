/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { type NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";
import { sambaSidEntry } from "../SambaV3Schema/sambaSidEntry.oa.mjs";
import { sambaSID } from "../SambaV3Schema/sambaSID.oa.mjs";
import { id_nf } from "@wildboar/x500/UsefulDefinitions";

/**
 * @summary sambaSidEntryNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sambaSidEntryNameForm NAME-FORM ::= {
 *     NAMES            sambaSidEntry
 *     WITH ATTRIBUTES  {sambaSID}
 *     LDAP-NAME        {"sambaSidEntryNameForm"}
 *     ID               { id-nf 45 }
 * }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export
const sambaSidEntryNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {
    },
    encoderFor: {
    },
    "&namedObjectClass": sambaSidEntry /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ sambaSID, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "sambaSidEntryNameForm" ] /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([45,], id_nf) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
