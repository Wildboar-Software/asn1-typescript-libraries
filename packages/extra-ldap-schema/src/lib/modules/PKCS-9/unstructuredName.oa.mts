/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import { pkcs_9_ub_unstructuredName } from "../PKCS-9/pkcs-9-ub-unstructuredName.va.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { PKCS9String, _decode_PKCS9String, _encode_PKCS9String } from "../PKCS-9/PKCS9String.ta.mjs";
// export { PKCS9String, _decode_PKCS9String, _encode_PKCS9String } from "../PKCS-9/PKCS9String.ta.mjs";
// export { pkcs_9_ub_unstructuredName } from "../PKCS-9/pkcs-9-ub-unstructuredName.va.mjs";
import { pkcs9CaseIgnoreMatch } from "../PKCS-9/pkcs9CaseIgnoreMatch.oa.mjs";
// export { pkcs9CaseIgnoreMatch } from "../PKCS-9/pkcs9CaseIgnoreMatch.oa.mjs";
import { pkcs_9_at_unstructuredName } from "../PKCS-9/pkcs-9-at-unstructuredName.va.mjs";
// export { pkcs_9_at_unstructuredName } from "../PKCS-9/pkcs-9-at-unstructuredName.va.mjs";


/**
 * @summary unstructuredName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * unstructuredName ATTRIBUTE ::= {
 *         WITH SYNTAX PKCS9String {pkcs-9-ub-unstructuredName}
 *         EQUALITY MATCHING RULE pkcs9CaseIgnoreMatch
 *         ID pkcs-9-at-unstructuredName
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<PKCS9String>}
 * @implements {ATTRIBUTE<PKCS9String>}
 */
const _decode_unstructuredName_Type = (el: _Element): PKCS9String => {
    const value = _decode_PKCS9String(el);
    let text: string;
    if ("ia5String" in value) {
        text = value.ia5String;
    } else {
        if ("teletexString" in value.directoryString) {
            text = value.directoryString.teletexString;
        } else if ("printableString" in value.directoryString) {
            text = value.directoryString.printableString;
        } else if ("bmpString" in value.directoryString) {
            text = value.directoryString.bmpString;
        } else if ("universalString" in value.directoryString) {
            text = value.directoryString.universalString;
        } else {
            text = value.directoryString.uTF8String;
        }
    }
    if (text.length < 1 || (typeof pkcs_9_ub_unstructuredName === "bigint" ? BigInt(text.length) > pkcs_9_ub_unstructuredName : text.length > pkcs_9_ub_unstructuredName)) {
        throw new ASN1SizeError("unstructuredName violates SIZE constraint");
    }
    return value;
};

export
const unstructuredName: ATTRIBUTE<PKCS9String> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_unstructuredName_Type,
    },
    encoderFor: {
        "&Type": _encode_PKCS9String,
    },
    "&equality-match": pkcs9CaseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&id": pkcs_9_at_unstructuredName /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
