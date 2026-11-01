/* eslint-disable */
import { dns_zone } from "../DNSFramework/dns-zone.oa.mjs";
// export { dns_zone } from "../DNSFramework/dns-zone.oa.mjs";
import { dc } from "../SelectedAttributeTypes/dc.oa.mjs";
// export { dc } from "../SelectedAttributeTypes/dc.oa.mjs";
import { id_nf_domainNameForm } from "../DNSFramework/id-nf-domainNameForm.va.mjs";
// export { id_nf_domainNameForm } from "../DNSFramework/id-nf-domainNameForm.va.mjs";
import { type NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";


/**
 * @summary dns_zone_nameForm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dns-zone-nameForm NAME-FORM ::= {
 *     NAMES               dns-zone
 *     WITH ATTRIBUTES     {dc}
 *     LDAP-NAME           {"dns-zone-nameForm"}
 *     ID                  id-nf-domainNameForm
 * }
 * ```
 * 
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export
const dns_zone_nameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {
    },
    encoderFor: {
    },
    "&namedObjectClass": dns_zone /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ dc, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "dns-zone-nameForm" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_nf_domainNameForm /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
