/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { type NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";
import { sambaShare } from "../SambaV3Schema/sambaShare.oa.mjs";
import { sambaShareName } from "../SambaV3Schema/sambaShareName.oa.mjs";
import { id_nf } from "@wildboar/x500/UsefulDefinitions";

/**
 * @summary sambaShareNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sambaShareNameForm NAME-FORM ::= {
 *     NAMES            sambaShare
 *     WITH ATTRIBUTES  {sambaShareName}
 *     LDAP-NAME        {"sambaShareNameForm"}
 *     ID               { id-nf 42 }
 * }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export
const sambaShareNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {
    },
    encoderFor: {
    },
    "&namedObjectClass": sambaShare /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ sambaShareName, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "sambaShareNameForm" ] /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([42,], id_nf) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
