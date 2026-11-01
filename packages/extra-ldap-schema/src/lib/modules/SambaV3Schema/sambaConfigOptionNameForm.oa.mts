/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { type NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";
import { sambaConfigOption } from "../SambaV3Schema/sambaConfigOption.oa.mjs";
import { sambaOptionName } from "../SambaV3Schema/sambaOptionName.oa.mjs";
import { id_nf } from "@wildboar/x500/UsefulDefinitions";

/**
 * @summary sambaConfigOptionNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sambaConfigOptionNameForm NAME-FORM ::= {
 *     NAMES            sambaConfigOption
 *     WITH ATTRIBUTES  {sambaOptionName}
 *     LDAP-NAME        {"sambaConfigOptionNameForm"}
 *     ID               { id-nf 43 }
 * }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export
const sambaConfigOptionNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {
    },
    encoderFor: {
    },
    "&namedObjectClass": sambaConfigOption /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ sambaOptionName, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "sambaConfigOptionNameForm" ] /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([43,], id_nf) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
