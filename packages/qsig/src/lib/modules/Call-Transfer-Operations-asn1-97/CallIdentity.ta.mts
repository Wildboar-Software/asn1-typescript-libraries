/* eslint-disable */
import {
    type NumericString,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CallIdentity
 * @description
 *
 * One to four numeric characters identifying the secondary call at the
 * Secondary PINX during transfer by rerouteing. It need not be
 * significant outside that PINX. The Transferring PINX copies it
 * unchanged into `callTransferInitiate`, and the Primary PINX copies
 * it unchanged into `callTransferSetup`. ECMA-178 §6.5.1.3, §6.5.3.3;
 * ECMA-177 §8.2.1.2.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-178/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-177/
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
