/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_apple_machine } from "../LdapSchema2ldifApple/id-oc-apple-machine.va.mjs";
import { apple_machine_contactperson } from "./apple-machine-contactperson.oa.mjs";
import { apple_machine_hardware } from "./apple-machine-hardware.oa.mjs";
import { apple_machine_serves } from "./apple-machine-serves.oa.mjs";
import { apple_machine_software } from "./apple-machine-software.oa.mjs";
import { apple_machine_suffix } from "./apple-machine-suffix.oa.mjs";

/**
 * @summary apple_machine
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * apple-machine OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { apple-machine-software
 *                               | apple-machine-hardware
 *                               | apple-machine-serves
 *                               | apple-machine-suffix
 *                               | apple-machine-contactperson }
 *   LDAP-NAME                 {"apple-machine"}
 *   ID                        id-oc-apple-machine }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const apple_machine: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [apple_machine_software, apple_machine_hardware, apple_machine_serves, apple_machine_suffix, apple_machine_contactperson] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["apple-machine"],
    "&id": id_oc_apple_machine /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
