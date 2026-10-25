/* eslint-disable */
import {
    type NumericString,
    type ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CallIdentity
 * @description
 *
 * One to four numeric characters which, together with
 * `rerouteingNumber`, identify the ANF-PR entity at the Requesting
 * PINX and therefore the call being replaced. It need not be
 * significant outside that PINX, and it should distinguish that call
 * from any other call for which the PINX is currently Requesting.
 * Copied unchanged into `pathReplaceSetup` and `pathReplaceRetain`.
 * When the other network is a non-ISDN with an equivalent feature, the
 * Requesting PINX limits the length to what that network can carry.
 * ECMA-176 §6.5.1.3, §6.8.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-176/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallIdentity  ::=  NumericString (SIZE(1..4))
 * ```
 */
export
type CallIdentity = NumericString; // NumericString

export
const _decode_CallIdentity = (el: _Element): CallIdentity => {
    const value = $._decodeNumericString(el);
    if (value.length < 1 || value.length > 4) {
        throw new ASN1SizeError("CallIdentity violates SIZE constraint");
    }
    return value;
};

export
const _encode_CallIdentity: $.ASN1Encoder<CallIdentity> = $._encodeNumericString;

/* eslint-enable */
