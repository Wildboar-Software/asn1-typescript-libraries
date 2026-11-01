/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";
import { type Extensions, _decode_Extensions, _encode_Extensions } from "../AuthenticationFramework/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../AuthenticationFramework/Extensions.ta.mjs";


/**
 * @summary ExtensionRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtensionRequest  ::=  Extensions
 * ```
 */
export
type ExtensionRequest = Extensions; // DefinedType

export
const _decode_ExtensionRequest: $.ASN1Decoder<ExtensionRequest> = _decode_Extensions;

export
const _encode_ExtensionRequest: $.ASN1Encoder<ExtensionRequest> = _encode_Extensions;

/* eslint-enable */
