/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_euro_oc_orgPerson } from "../ISSS-Schema/id-euro-oc-orgPerson.va.mjs";
import { givenName } from "../SelectedAttributeTypes/givenName.oa.mjs";
import { initials } from "../SelectedAttributeTypes/initials.oa.mjs";
import { generationQualifier } from "../SelectedAttributeTypes/generationQualifier.oa.mjs";
import { uniqueIdentifier } from "../SelectedAttributeTypes/uniqueIdentifier.oa.mjs";
import { serialNumber } from "../SelectedAttributeTypes/serialNumber.oa.mjs";
import { secretary } from "../Cosine/secretary.oa.mjs";
import { mail } from "../Cosine/mail.oa.mjs";
import { textEncodedORAddress } from "../Cosine/textEncodedORAddress.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { mobileTelephoneNumber } from "../Cosine/mobileTelephoneNumber.oa.mjs";
import { homeTelephoneNumber } from "../Cosine/homeTelephoneNumber.oa.mjs";
import { pagerTelephoneNumber } from "../Cosine/pagerTelephoneNumber.oa.mjs";
import { homePostalAddress } from "../Cosine/homePostalAddress.oa.mjs";
import { roomNumber } from "../Cosine/roomNumber.oa.mjs";
import { buildingName } from "../Cosine/buildingName.oa.mjs";
import { labeledURI } from "../OpenLDAPCoreSchema/labeledURI.oa.mjs";
import { area } from "../ISSS-Schema/area.oa.mjs";
import { floor } from "../ISSS-Schema/floor.oa.mjs";
import { floorEntity } from "../ISSS-Schema/floorEntity.oa.mjs";
import { fax } from "../ISSS-Schema/fax.oa.mjs";
import { telExten } from "../ISSS-Schema/telExten.oa.mjs";


/**
 * @summary euroOrgPerson
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * euroOrgPerson OBJECT-CLASS ::= {
 *     SUBCLASS OF  { top }
 *     KIND         auxiliary
 *     MAY CONTAIN  {
 *         givenName               -- from X.520
 *         | initials              -- from X.520
 *         | generationQualifier   -- from X.520
 *         | uniqueIdentifier      -- from X.520
 *         | serialNumber          -- from X.520
 *         | secretary             -- from RFC-1274
 *         | mail                  -- from RFC-1274
 *         | textEncodedORAddress  -- from RFC-1274
 *         | uid                   -- from RFC-1274
 *         | mobileTelephoneNumber                -- from RFC-1274
 *         | homeTelephoneNumber             -- from RFC-1274
 *         | pagerTelephoneNumber                 -- from RFC-1274
 *         | homePostalAddress     -- from RFC-1274
 *         | roomNumber            -- from RFC-1274
 *         | buildingName          -- from RFC-1274
 *         | labeledURI            -- from RFC-2079
 *         -- | jpegPhoto           from RFC 2798 / Not supported by X.500 directories, though.
 *         | area                  -- defined here
 *         | floor                 -- defined here
 *         | floorEntity           -- defined here
 *         | fax                   -- defined here
 *         | telExten              -- defined here
 *     }
 *     LDAP-NAME    {"euroOrgPerson"}
 *     ID           id-euro-oc-orgPerson }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const euroOrgPerson: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ givenName, initials, generationQualifier, uniqueIdentifier, serialNumber, secretary, mail, textEncodedORAddress, uid, mobileTelephoneNumber, homeTelephoneNumber, pagerTelephoneNumber, homePostalAddress, roomNumber, buildingName, labeledURI, area, floor, floorEntity, fax, telExten, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "euroOrgPerson" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_euro_oc_orgPerson /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

