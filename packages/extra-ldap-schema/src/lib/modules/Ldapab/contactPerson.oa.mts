/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_contactPerson } from "../Ldapab/id-oc-contactPerson.va.mjs";
import { countryName } from "../SelectedAttributeTypes/countryName.oa.mjs";
import { anniversary } from "./anniversary.oa.mjs";
import { birthday } from "./birthday.oa.mjs";
import { custom1 } from "./custom1.oa.mjs";
import { custom2 } from "./custom2.oa.mjs";
import { custom3 } from "./custom3.oa.mjs";
import { custom4 } from "./custom4.oa.mjs";
import { marker } from "./marker.oa.mjs";

/**
 * @summary contactPerson
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * contactPerson OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { anniversary
 *                               | marker
 *                               | birthday
 *                               | custom1
 *                               | custom2
 *                               | custom3
 *                               | custom4
 *                               | countryName }
 *   LDAP-NAME                 {"contactPerson"}
 *   LDAP-DESC                 "Contact - Addressbook entry"
 *   ID                        id-oc-contactPerson }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const contactPerson: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [anniversary, marker, birthday, custom1, custom2, custom3, custom4, countryName] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["contactPerson"],
    "&ldapDesc": "Contact - Addressbook entry" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_contactPerson /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
