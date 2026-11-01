/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { type NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";
import { groupOfURLs } from "../DynGroup/groupOfURLs.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_nf } from "@wildboar/x500/UsefulDefinitions";

/**
 * @summary groupOfURLsNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * groupOfURLsNameForm NAME-FORM ::= {
 *     NAMES            groupOfURLs
 *     WITH ATTRIBUTES  {commonName}
 *     LDAP-NAME        {"groupOfURLsNameForm"}
 *     ID               { id-nf 46 }
 * }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export
const groupOfURLsNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {
    },
    encoderFor: {
    },
    "&namedObjectClass": groupOfURLs /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "groupOfURLsNameForm" ] /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([46,], id_nf) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
