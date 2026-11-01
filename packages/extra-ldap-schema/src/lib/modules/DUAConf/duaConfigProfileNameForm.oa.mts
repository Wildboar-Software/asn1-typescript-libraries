/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { id_nf } from "@wildboar/x500/UsefulDefinitions";
import { duaConfigProfile } from "../DUAConf/duaConfigProfile.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { type NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";


/**
 * @summary duaConfigProfileNameForm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * duaConfigProfileNameForm NAME-FORM ::= {
 *     NAMES                duaConfigProfile
 *     WITH ATTRIBUTES        {commonName}
 *     LDAP-NAME            {"duaConfigProfileNameForm"}
 *     ID                    { id-nf 3 }
 * }
 * ```
 * 
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export
const duaConfigProfileNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {
    },
    encoderFor: {
    },
    "&namedObjectClass": duaConfigProfile /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "duaConfigProfileNameForm" ] /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([3,], id_nf) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

