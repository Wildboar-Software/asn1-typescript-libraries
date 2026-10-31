/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_x_plug_payment } from "../LdapPlugpen/id-oc-x-plug-payment.va.mjs";
import { x_plug_paymentDescription } from "../LdapPlugpen/x-plug-paymentDescription.oa.mjs";
import { x_plug_paymentAmount } from "./x-plug-paymentAmount.oa.mjs";
import { x_plug_paymentDate } from "./x-plug-paymentDate.oa.mjs";
import { x_plug_paymentID } from "./x-plug-paymentID.oa.mjs";
import { x_plug_paymentType } from "./x-plug-paymentType.oa.mjs";
import { x_plug_paymentYears } from "./x-plug-paymentYears.oa.mjs";

/**
 * @summary x_plug_payment
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * x-plug-payment OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { x-plug-paymentDate
 *                               | x-plug-paymentID
 *                               | x-plug-paymentAmount
 *                               | x-plug-paymentType
 *                               | x-plug-paymentYears }
 *   MAY CONTAIN               { x-plug-paymentDescription }
 *   LDAP-NAME                 {"x-plug-payment"}
 *   LDAP-DESC                 "Payment"
 *   ID                        id-oc-x-plug-payment }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const x_plug_payment: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [x_plug_paymentDate, x_plug_paymentID, x_plug_paymentAmount, x_plug_paymentType, x_plug_paymentYears] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [x_plug_paymentDescription] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["x-plug-payment"],
    "&ldapDesc": "Payment" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_x_plug_payment /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
