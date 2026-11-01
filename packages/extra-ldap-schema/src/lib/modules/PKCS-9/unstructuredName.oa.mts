/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import { pkcs_9_ub_unstructuredName } from "../PKCS-9/pkcs-9-ub-unstructuredName.va.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { type PKCS9String, _decode_PKCS9String, _encode_PKCS9String } from "../PKCS-9/PKCS9String.ta.mjs";
import { pkcs9CaseIgnoreMatch } from "../PKCS-9/pkcs9CaseIgnoreMatch.oa.mjs";
import { pkcs_9_at_unstructuredName } from "../PKCS-9/pkcs-9-at-unstructuredName.va.mjs";


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
    let length: number;
    if ("ia5String" in value) {
        length = value.ia5String.length;
    } else if ("teletexString" in value.directoryString) {
        length = value.directoryString.teletexString.length;
    } else if ("printableString" in value.directoryString) {
        length = value.directoryString.printableString.length;
    } else if ("bmpString" in value.directoryString) {
        length = value.directoryString.bmpString.length;
    } else if ("universalString" in value.directoryString) {
        length = value.directoryString.universalString.length;
    } else {
        length = value.directoryString.uTF8String.length;
    }
    if (length < 1 || (typeof pkcs_9_ub_unstructuredName === "bigint" ? BigInt(length) > pkcs_9_ub_unstructuredName : length > pkcs_9_ub_unstructuredName)) {
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

