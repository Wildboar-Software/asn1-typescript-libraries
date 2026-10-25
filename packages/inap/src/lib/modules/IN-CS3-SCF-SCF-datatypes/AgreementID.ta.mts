/* eslint-disable */
import {
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AgreementID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AgreementID  ::=  OBJECT IDENTIFIER
 * ```
 */
export
type AgreementID = OBJECT_IDENTIFIER; // ObjectIdentifierType

export
const _decode_AgreementID: $.ASN1Decoder<AgreementID> = $._decodeObjectIdentifier;

export
const _encode_AgreementID: $.ASN1Encoder<AgreementID> = $._encodeObjectIdentifier;

/* eslint-enable */
