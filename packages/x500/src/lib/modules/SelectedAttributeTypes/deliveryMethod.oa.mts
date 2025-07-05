/* eslint-disable */
import { type SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
import { id_lsx_deliveryMethod } from "../SelectedAttributeTypes/id-lsx-deliveryMethod.va.mjs";
import {
    PreferredDeliveryMethod,
    _decode_PreferredDeliveryMethod,
    _encode_PreferredDeliveryMethod,
} from "../SelectedAttributeTypes/PreferredDeliveryMethod.ta.mjs";
/**
 * @summary deliveryMethod
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * deliveryMethod SYNTAX-NAME ::= {
 *   LDAP-DESC         "Delevery Method"
 *   DIRECTORY SYNTAX  PreferredDeliveryMethod
 *   ID                id-lsx-deliveryMethod }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<PreferredDeliveryMethod>}
 * @implements {SYNTAX_NAME<PreferredDeliveryMethod>}
 */
export const deliveryMethod: SYNTAX_NAME<PreferredDeliveryMethod> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_PreferredDeliveryMethod,
    },
    encoderFor: {
        "&Type": _encode_PreferredDeliveryMethod,
    },
    "&ldapDesc": "Delevery Method" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_deliveryMethod /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
