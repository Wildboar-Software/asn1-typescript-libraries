/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { id_oc_gluuInvoice } from "../LdapOx/id-oc-gluuInvoice.va.mjs";

import { gluuInvoiceAmount } from "../LdapOx/gluuInvoiceAmount.oa.mjs";
import { gluuInvoiceDate } from "../LdapOx/gluuInvoiceDate.oa.mjs";
import { gluuInvoiceLineItemName } from "../LdapOx/gluuInvoiceLineItemName.oa.mjs";
import { gluuInvoiceNumber } from "../LdapOx/gluuInvoiceNumber.oa.mjs";
import { gluuInvoiceProductNumber } from "../LdapOx/gluuInvoiceProductNumber.oa.mjs";
import { gluuInvoiceQuantity } from "../LdapOx/gluuInvoiceQuantity.oa.mjs";
import { gluuInvoiceStatus } from "../LdapOx/gluuInvoiceStatus.oa.mjs";
import { inum } from "../LdapOx/inum.oa.mjs";
/**
 * @summary gluuInvoice
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gluuInvoice OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { gluuInvoiceAmount
 *                               | gluuInvoiceDate
 *                               | gluuInvoiceLineItemName
 *                               | gluuInvoiceNumber
 *                               | gluuInvoiceProductNumber
 *                               | gluuInvoiceQuantity
 *                               | gluuInvoiceStatus
 *                               | inum }
 *   LDAP-NAME                 {"gluuInvoice"}
 *   ID                        id-oc-gluuInvoice }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gluuInvoice: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ gluuInvoiceAmount, gluuInvoiceDate, gluuInvoiceLineItemName, gluuInvoiceNumber, gluuInvoiceProductNumber, gluuInvoiceQuantity, gluuInvoiceStatus, inum, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "gluuInvoice" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gluuInvoice /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
