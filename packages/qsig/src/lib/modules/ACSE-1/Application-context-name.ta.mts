/* eslint-disable */
import {
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Application_context_name
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Application-context-name  ::=  OBJECT IDENTIFIER
 * ```
 */
export
type Application_context_name = OBJECT_IDENTIFIER; // ObjectIdentifierType

export
const _decode_Application_context_name: $.ASN1Decoder<Application_context_name> = $._decodeObjectIdentifier;

export
const _encode_Application_context_name: $.ASN1Encoder<Application_context_name> = $._encodeObjectIdentifier;

/* eslint-enable */
