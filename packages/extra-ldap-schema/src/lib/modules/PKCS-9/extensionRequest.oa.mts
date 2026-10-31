/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import {
    type ExtensionRequest,
    _decode_ExtensionRequest,
    _encode_ExtensionRequest,
} from "../PKCS-9/ExtensionRequest.ta.mjs";
import { pkcs_9_at_extensionRequest } from "../PKCS-9/pkcs-9-at-extensionRequest.va.mjs";

/**
 * @summary extensionRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * extensionRequest ATTRIBUTE ::= {
 *         WITH SYNTAX ExtensionRequest
 *         SINGLE VALUE TRUE
 *         ID pkcs-9-at-extensionRequest
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<ExtensionRequest>}
 * @implements {ATTRIBUTE<ExtensionRequest>}
 */
export
const extensionRequest: ATTRIBUTE<ExtensionRequest> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_ExtensionRequest,
    },
    encoderFor: {
        "&Type": _encode_ExtensionRequest,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&id": pkcs_9_at_extensionRequest /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
