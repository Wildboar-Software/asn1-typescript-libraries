/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_euro_oc_resPerson } from "../ISSS-Schema/id-euro-oc-resPerson.va.mjs";
import { givenName } from "../SelectedAttributeTypes/givenName.oa.mjs";
import { initials } from "../SelectedAttributeTypes/initials.oa.mjs";
import { generationQualifier } from "../SelectedAttributeTypes/generationQualifier.oa.mjs";
import { title } from "../SelectedAttributeTypes/title.oa.mjs";
import { uniqueIdentifier } from "../SelectedAttributeTypes/uniqueIdentifier.oa.mjs";
import { serialNumber } from "../SelectedAttributeTypes/serialNumber.oa.mjs";
import { houseIdentifier } from "../SelectedAttributeTypes/houseIdentifier.oa.mjs";
import { mail } from "../Cosine/mail.oa.mjs";
import { textEncodedORAddress } from "../Cosine/textEncodedORAddress.oa.mjs";
import { mobileTelephoneNumber } from "../Cosine/mobileTelephoneNumber.oa.mjs";
import { pagerTelephoneNumber } from "../Cosine/pagerTelephoneNumber.oa.mjs";
import { buildingName } from "../Cosine/buildingName.oa.mjs";
import { labeledURI } from "../OpenLDAPCoreSchema/labeledURI.oa.mjs";
import { fax } from "../ISSS-Schema/fax.oa.mjs";
import { area } from "../ISSS-Schema/area.oa.mjs";
import { floor } from "../ISSS-Schema/floor.oa.mjs";
import { floorEntity } from "../ISSS-Schema/floorEntity.oa.mjs";


/**
 * @summary euroResPerson
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * euroResPerson OBJECT-CLASS ::= {
 *     SUBCLASS OF  { top }
 *     KIND         auxiliary
 *     MAY CONTAIN  {
 *         givenName               -- from X.520
 *         | initials              -- from X.520
 *         | generationQualifier   -- from X.520
 *         | title                 -- from X.520
 *         | uniqueIdentifier      -- from X.520
 *         | serialNumber          -- from X.520
 *         | houseIdentifier       -- from X.520
 *         | mail                  -- from RFC-1274
 *         | textEncodedORAddress  -- from RFC-1274
 *         | mobileTelephoneNumber -- from RFC-1274
 *         | pagerTelephoneNumber  -- from RFC-1274
 *         | buildingName          -- from RFC-1274
 *         | labeledURI            -- from RFC-2079
 *         | fax                   -- defined here
 *         | area                  -- defined here
 *         | floor                 -- defined here
 *         | floorEntity }         -- defined here
 *     LDAP-NAME    {"euroResPerson"}
 *     ID           id-euro-oc-resPerson }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const euroResPerson: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ givenName, initials, generationQualifier, title, uniqueIdentifier, serialNumber, houseIdentifier, mail, textEncodedORAddress, mobileTelephoneNumber, pagerTelephoneNumber, buildingName, labeledURI, fax, area, floor, floorEntity, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "euroResPerson" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_euro_oc_resPerson /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

