/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_accountable } from "../LdapIspenv/id-oc-accountable.va.mjs";
import { billPaid } from "./billPaid.oa.mjs";
import { currency } from "./currency.oa.mjs";
import { dunningCounter } from "./dunningCounter.oa.mjs";
import { payday } from "./payday.oa.mjs";
import { payperiod } from "./payperiod.oa.mjs";
import { price } from "./price.oa.mjs";
import { productcode } from "./productcode.oa.mjs";

/**
 * @summary accountable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * accountable OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { billPaid
 *                               | price
 *                               | currency
 *                               | payperiod
 *                               | payday
 *                               | dunningCounter
 *                               | productcode }
 *   LDAP-NAME                 {"accountable"}
 *   LDAP-DESC                 "Marks a resource (an entry) as being subject to payment"
 *   ID                        id-oc-accountable }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const accountable: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [billPaid, price, currency, payperiod, payday, dunningCounter, productcode] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["accountable"],
    "&ldapDesc": "Marks a resource (an entry) as being subject to payment" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_accountable /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
