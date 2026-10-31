/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_apple_printer } from "../LdapSchema2ldifApple/id-oc-apple-printer.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { apple_printer_attributes } from "./apple-printer-attributes.oa.mjs";
import { apple_printer_lprhost } from "./apple-printer-lprhost.oa.mjs";
import { apple_printer_lprqueue } from "./apple-printer-lprqueue.oa.mjs";
import { apple_printer_note } from "./apple-printer-note.oa.mjs";
import { apple_printer_type } from "./apple-printer-type.oa.mjs";

/**
 * @summary apple_printer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * apple-printer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { apple-printer-attributes
 *                               | apple-printer-lprhost
 *                               | apple-printer-lprqueue
 *                               | apple-printer-type
 *                               | apple-printer-note }
 *   LDAP-NAME                 {"apple-printer"}
 *   ID                        id-oc-apple-printer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const apple_printer: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [apple_printer_attributes, apple_printer_lprhost, apple_printer_lprqueue, apple_printer_type, apple_printer_note] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["apple-printer"],
    "&id": id_oc_apple_printer /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
