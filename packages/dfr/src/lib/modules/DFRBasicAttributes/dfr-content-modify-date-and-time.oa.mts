/* eslint-disable */
import {
    GeneralizedTime,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { _enum_for_AttributeUsage, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_att_dfr_content_modify_date_and_time } from "../DFRObjectIdentifiers/id-att-dfr-content-modify-date-and-time.va.mjs";
// export { id_att_dfr_content_modify_date_and_time } from "../DFRObjectIdentifiers/id-att-dfr-content-modify-date-and-time.va.mjs";
import {
    generalizedTimeMatch,
    generalizedTimeOrderingMatch,
} from "@wildboar/x500/SelectedAttributeTypes";


/**
 * @summary dfr_content_modify_date_and_time
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dfr-content-modify-date-and-time ATTRIBUTE ::= {
 *     WITH SYNTAX             GeneralizedTime
 *     EQUALITY MATCHING RULE  generalizedTimeMatch
 *     ORDERING MATCHING RULE  generalizedTimeOrderingMatch
 *     SINGLE VALUE            TRUE
 *     ID                      id-att-dfr-content-modify-date-and-time
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<GeneralizedTime>}
 * @implements {ATTRIBUTE<GeneralizedTime>}
 */
export
const dfr_content_modify_date_and_time: ATTRIBUTE<GeneralizedTime> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeGeneralizedTime,
    },
    encoderFor: {
        "&Type": $._encodeGeneralizedTime,
    },
    "&equality-match": generalizedTimeMatch /* OBJECT_FIELD_SETTING */,
    "&ordering-match": generalizedTimeOrderingMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&id": id_att_dfr_content_modify_date_and_time /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
