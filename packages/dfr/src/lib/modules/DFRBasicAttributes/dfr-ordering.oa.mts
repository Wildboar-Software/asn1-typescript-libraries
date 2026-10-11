/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { _enum_for_AttributeUsage, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { OrderingRule, _decode_OrderingRule, _encode_OrderingRule } from "../DFRAbstractService/OrderingRule.ta.mjs";
import { id_att_dfr_ordering } from "../DFRObjectIdentifiers/id-att-dfr-ordering.va.mjs";


/**
 * @summary dfr_ordering
 * @description
 *
 * Default List order of group members (`OrderingRule`). Only on groups.
 * User-managed. Copied by Copy. ISO/IEC 10166-1:1991 §9.2.9, §8.1.6.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dfr-ordering ATTRIBUTE ::= {
 *     WITH SYNTAX             OrderingRule
 *     SINGLE VALUE            TRUE
 *     ID                      id-att-dfr-ordering
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<OrderingRule>}
 * @implements {ATTRIBUTE<OrderingRule>}
 */
export
const dfr_ordering: ATTRIBUTE<OrderingRule> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_OrderingRule,
    },
    encoderFor: {
        "&Type": _encode_OrderingRule,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&id": id_att_dfr_ordering /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
