/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { type NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";
import { sambaDomain } from "../SambaV3Schema/sambaDomain.oa.mjs";
import { sambaDomainName } from "../SambaV3Schema/sambaDomainName.oa.mjs";
import { id_nf } from "@wildboar/x500/UsefulDefinitions";

/**
 * @summary sambaDomainNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sambaDomainNameForm NAME-FORM ::= {
 *     NAMES            sambaDomain
 *     WITH ATTRIBUTES  {sambaDomainName}
 *     LDAP-NAME        {"sambaDomainNameForm"}
 *     ID               { id-nf 44 }
 * }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export
const sambaDomainNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {
    },
    encoderFor: {
    },
    "&namedObjectClass": sambaDomain /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ sambaDomainName, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "sambaDomainNameForm" ] /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([44,], id_nf) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
