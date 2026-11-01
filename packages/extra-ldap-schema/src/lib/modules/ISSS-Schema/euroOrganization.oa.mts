/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_euro_oc_organization } from "../ISSS-Schema/id-euro-oc-organization.va.mjs";
import { serialNumber } from "../SelectedAttributeTypes/serialNumber.oa.mjs";
import { secretary } from "../Cosine/secretary.oa.mjs";
import { mail } from "../Cosine/mail.oa.mjs";
import { textEncodedORAddress } from "../Cosine/textEncodedORAddress.oa.mjs";
import { mobileTelephoneNumber } from "../Cosine/mobileTelephoneNumber.oa.mjs";
import { pagerTelephoneNumber } from "../Cosine/pagerTelephoneNumber.oa.mjs";
import { labeledURI } from "../OpenLDAPCoreSchema/labeledURI.oa.mjs";
import { area } from "../ISSS-Schema/area.oa.mjs";
import { fax } from "../ISSS-Schema/fax.oa.mjs";
import { vATName } from "../ISSS-Schema/vATName.oa.mjs";


/**
 * @summary euroOrganization
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * euroOrganization OBJECT-CLASS ::= {
 *     SUBCLASS OF     { top }
 *     KIND            auxiliary
 *     MAY CONTAIN     {
 *         serialNumber                -- from X.520
 *         | secretary                 -- from RFC-1274
 *         | mail                      -- from RFC-1274
 *         | textEncodedORAddress      -- from RFC-1274
 *         | mobileTelephoneNumber     -- from RFC-1274
 *         | pagerTelephoneNumber      -- from RFC-1274
 *         | labeledURI                -- from RFC-2079
 *         | area                      -- defined here
 *         | fax                       -- defined here
 *         | vATName }                 -- defined here
 *     LDAP-NAME       {"euroOrganization"}
 *     ID              id-euro-oc-organization }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const euroOrganization: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ serialNumber, secretary, mail, textEncodedORAddress, mobileTelephoneNumber, pagerTelephoneNumber, labeledURI, area, fax, vATName, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "euroOrganization" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_euro_oc_organization /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

