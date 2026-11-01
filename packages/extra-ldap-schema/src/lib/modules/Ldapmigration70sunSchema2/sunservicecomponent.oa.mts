/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
// export { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import { id_oc_sunservicecomponent } from "../Ldapmigration70sunSchema2/id-oc-sunservicecomponent.va.mjs";
import { sunserviceid } from "../Ldapmigration70sunSchema2/sunserviceid.oa.mjs";
import { sunsmspriority } from "../Ldapmigration70sunSchema2/sunsmspriority.oa.mjs";
import { sunkeyvalue } from "../Ldapmigration70sunSchema2/sunkeyvalue.oa.mjs";
import { sunxmlkeyvalue } from "../Ldapmigration70sunSchema2/sunxmlkeyvalue.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
// export { id_oc_sunservicecomponent } from "../Ldapmigration70sunSchema2/id-oc-sunservicecomponent.va.mjs";


/**
 * @summary sunservicecomponent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sunservicecomponent OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { organizationalUnitName }
 *   MAY CONTAIN               { sunserviceid
 *                               | sunsmspriority
 *                               | sunkeyvalue
 *                               | sunxmlkeyvalue
 *                               | description }
 *   LDAP-NAME                 {"sunservicecomponent"}
 *   LDAP-DESC                 "Sub-components of the service"
 *   ID                        id-oc-sunservicecomponent }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const sunservicecomponent: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ organizationalUnitName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ sunserviceid, sunsmspriority, sunkeyvalue, sunxmlkeyvalue, description, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "sunservicecomponent" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Sub-components of the service" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_sunservicecomponent /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
