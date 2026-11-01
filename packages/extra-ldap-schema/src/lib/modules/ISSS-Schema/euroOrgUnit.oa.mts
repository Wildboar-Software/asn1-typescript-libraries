/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_euro_oc_orgUnit } from "../ISSS-Schema/id-euro-oc-orgUnit.va.mjs";
import { serialNumber } from "../SelectedAttributeTypes/serialNumber.oa.mjs";
import { secretary } from "../Cosine/secretary.oa.mjs";
import { mail } from "../Cosine/mail.oa.mjs";
import { textEncodedORAddress } from "../Cosine/textEncodedORAddress.oa.mjs";
import { mobileTelephoneNumber } from "../Cosine/mobileTelephoneNumber.oa.mjs";
import { pagerTelephoneNumber } from "../Cosine/pagerTelephoneNumber.oa.mjs";
import { labeledURI } from "../OpenLDAPCoreSchema/labeledURI.oa.mjs";
import { area } from "../ISSS-Schema/area.oa.mjs";
import { fax } from "../ISSS-Schema/fax.oa.mjs";
// export { id_euro_oc_orgUnit } from "../ISSS-Schema/id-euro-oc-orgUnit.va.mjs";


/**
 * @summary euroOrgUnit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * euroOrgUnit OBJECT-CLASS ::= {
 *     SUBCLASS OF  { top }
 *     KIND         auxiliary
 *     MAY CONTAIN  {
 *         serialNumber            -- from X.520
 *         | secretary             -- from RFC-1274
 *         | mail                  -- from RFC-1274
 *         | textEncodedORAddress  -- from RFC-1274
 *         | mobileTelephoneNumber -- from RFC-1274
 *         | pagerTelephoneNumber  -- from RFC-1274
 *         | labeledURI            -- from RFC-2079
 *         | area                  -- defined here
 *         | fax }                 -- defined here
 *     LDAP-NAME    {"euroOrgUnit"}
 *     ID           id-euro-oc-orgUnit }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const euroOrgUnit: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ serialNumber, secretary, mail, textEncodedORAddress, mobileTelephoneNumber, pagerTelephoneNumber, labeledURI, area, fax, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "euroOrgUnit" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_euro_oc_orgUnit /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
