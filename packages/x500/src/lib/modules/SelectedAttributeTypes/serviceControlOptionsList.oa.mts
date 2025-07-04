/* eslint-disable */
import {
    ServiceControlOptions,
    _decode_ServiceControlOptions,
    _encode_ServiceControlOptions,
} from "../DirectoryAbstractService/ServiceControlOptions.ta.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_not_serviceControlOptionsList } from "../SelectedAttributeTypes/id-not-serviceControlOptionsList.va.mjs";
/**
 * @summary serviceControlOptionsList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * serviceControlOptionsList ATTRIBUTE ::= {
 *   WITH SYNTAX              ServiceControlOptions
 *   SINGLE VALUE             TRUE
 *   ID                       id-not-serviceControlOptionsList }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<ServiceControlOptions>}
 * @implements {ATTRIBUTE<ServiceControlOptions>}
 */
export const serviceControlOptionsList: ATTRIBUTE<ServiceControlOptions> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_ServiceControlOptions,
    },
    encoderFor: {
        "&Type": _encode_ServiceControlOptions,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&id": id_not_serviceControlOptionsList /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
