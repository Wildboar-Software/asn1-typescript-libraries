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
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { DfrPathName, _decode_DfrPathName, _encode_DfrPathName } from "../DFRAbstractService/DfrPathName.ta.mjs";
// export { DfrPathName, _decode_DfrPathName, _encode_DfrPathName } from "../DFRAbstractService/DfrPathName.ta.mjs";
import { id_att_dfr_pathname } from "../DFRObjectIdentifiers/id-att-dfr-pathname.va.mjs";
// export { id_att_dfr_pathname } from "../DFRObjectIdentifiers/id-att-dfr-pathname.va.mjs";


/**
 * @summary dfr_pathname
 * @description
 *
 * Titles of the object and its ancestors from the root down (ISO/IEC
 * 10166-1:1991/Cor.1:1994 §9.2.5). Present only if the store enforces title
 * uniqueness. Server-maintained. Not copied by Copy. Cor.3 removed the empty
 * sequence convention for the root group. ISO/IEC 10166-1:1991 §9.2.5; ISO/IEC
 * 10166-1:1991/Cor.3:1994.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dfr-pathname ATTRIBUTE ::= {
 *     WITH SYNTAX             DfrPathName
 *     SINGLE VALUE            TRUE
 *     ID                      id-att-dfr-pathname
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<DfrPathName>}
 * @implements {ATTRIBUTE<DfrPathName>}
 */
export
const dfr_pathname: ATTRIBUTE<DfrPathName> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DfrPathName,
    },
    encoderFor: {
        "&Type": _encode_DfrPathName,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&id": id_att_dfr_pathname /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
