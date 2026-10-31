/* eslint-disable */
import { dcObject } from "../DNSFramework/dcObject.oa.mjs";
import { id_nf_dcObjectNameForm } from "../DNSFramework/id-nf-dcObjectNameForm.va.mjs";
import { type NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";
import { dc } from "../SelectedAttributeTypes/dc.oa.mjs";

/**
 * @summary dcObjectNameForm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dcObjectNameForm NAME-FORM ::= {
 *     NAMES               dcObject
 *     WITH ATTRIBUTES     {dc}
 *     LDAP-NAME           {"dcObjectNameForm"}
 *     ID                  id-nf-dcObjectNameForm
 * }
 * ```
 * 
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export
const dcObjectNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": dcObject /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [dc] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["dcObjectNameForm"],
    "&id": id_nf_dcObjectNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
