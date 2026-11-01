/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { name } from "../SelectedAttributeTypes/name.oa.mjs";
// export { name } from "../SelectedAttributeTypes/name.oa.mjs";
import { at_associated_internet_gateway } from "../MIXERAddressMapping/at-associated-internet-gateway.va.mjs";
// export { at_associated_internet_gateway } from "../MIXERAddressMapping/at-associated-internet-gateway.va.mjs";


/**
 * @summary associatedInternetGateway
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * associatedInternetGateway ATTRIBUTE ::= {
 *     SUBTYPE OF          name
 *     ID                  at-associated-internet-gateway }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const associatedInternetGateway: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": name /* OBJECT_FIELD_SETTING */,
    "&id": at_associated_internet_gateway /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
