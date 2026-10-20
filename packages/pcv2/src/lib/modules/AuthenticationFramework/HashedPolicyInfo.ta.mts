/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
// export { POLICY } from "../AuthenticationFramework/POLICY.oca.mjs";
// export { Policies } from "../AuthenticationFramework/Policies.osa.mjs";


/**
 * @summary HashedPolicyInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HashedPolicyInfo  ::=  POLICY.&Type({Policies})
 * ```
 */
export
type HashedPolicyInfo = _Element; // ObjectClassFieldType

export
const _decode_HashedPolicyInfo: $.ASN1Decoder<HashedPolicyInfo> = $._decodeAny;

export
const _encode_HashedPolicyInfo: $.ASN1Encoder<HashedPolicyInfo> = $._encodeAny;

/* eslint-enable */
