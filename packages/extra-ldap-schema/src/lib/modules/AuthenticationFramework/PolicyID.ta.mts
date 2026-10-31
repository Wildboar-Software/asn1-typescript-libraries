/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";
import {
    type CertPolicyId,
    _decode_CertPolicyId,
    _encode_CertPolicyId,
} from "@wildboar/x500/CertificateExtensions";



/**
 * @summary PolicyID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PolicyID  ::=  CertPolicyId
 * ```
 */
export
type PolicyID = CertPolicyId; // DefinedType

export
const _decode_PolicyID: $.ASN1Decoder<PolicyID> = _decode_CertPolicyId;

export
const _encode_PolicyID: $.ASN1Encoder<PolicyID> = _encode_CertPolicyId;

/* eslint-enable */
