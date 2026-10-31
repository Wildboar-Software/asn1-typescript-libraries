/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_gluuInvoice } from "../LdapOx/id-oc-gluuInvoice.va.mjs";
import { gluuInvoiceAmount } from "./gluuInvoiceAmount.oa.mjs";
import { gluuInvoiceDate } from "./gluuInvoiceDate.oa.mjs";
import { gluuInvoiceLineItemName } from "./gluuInvoiceLineItemName.oa.mjs";
import { gluuInvoiceNumber } from "./gluuInvoiceNumber.oa.mjs";
import { gluuInvoiceProductNumber } from "./gluuInvoiceProductNumber.oa.mjs";
import { gluuInvoiceQuantity } from "./gluuInvoiceQuantity.oa.mjs";
import { gluuInvoiceStatus } from "./gluuInvoiceStatus.oa.mjs";
import { inum } from "./inum.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [gluuInvoiceAmount, gluuInvoiceDate, gluuInvoiceLineItemName, gluuInvoiceNumber, gluuInvoiceProductNumber, gluuInvoiceQuantity, gluuInvoiceStatus, inum] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["gluuInvoice"],
    "&id": id_oc_gluuInvoice /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
