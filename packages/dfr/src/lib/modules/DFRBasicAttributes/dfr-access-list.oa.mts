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
import { DfrAccessListElement, _decode_DfrAccessListElement, _encode_DfrAccessListElement } from "../DFRBasicAttributes/DfrAccessListElement.ta.mjs";
import { id_att_dfr_access_list } from "../DFRObjectIdentifiers/id-att-dfr-access-list.va.mjs";


/**
 * @summary dfr_access_list
 * @description
 *
 * Security subjects and their AccessRights (the CAP). Full value visible with
 * extended-read; only the caller's own element with read. Only an owner may
 * modify it. Multi-valued. ISO/IEC 10166-1:1991 §9.2.30, §6.3.8.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dfr-access-list ATTRIBUTE ::= {
 *     WITH SYNTAX             DfrAccessListElement
 *     ID                      id-att-dfr-access-list
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<DfrAccessListElement>}
 * @implements {ATTRIBUTE<DfrAccessListElement>}
 */
export
const dfr_access_list: ATTRIBUTE<DfrAccessListElement> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DfrAccessListElement,
    },
    encoderFor: {
        "&Type": _encode_DfrAccessListElement,
    },
    "&id": id_att_dfr_access_list /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
