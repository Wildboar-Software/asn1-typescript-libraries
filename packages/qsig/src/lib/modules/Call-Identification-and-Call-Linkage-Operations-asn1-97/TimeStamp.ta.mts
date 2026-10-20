/* eslint-disable */
import {
    GeneralizedTime,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TimeStamp
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimeStamp  ::=  GeneralizedTime (SIZE(16..19))
 * ```
 */
export
type TimeStamp = GeneralizedTime; // GeneralizedTime

export
const _decode_TimeStamp = (el: _Element): TimeStamp => {
    if (el.value.length < 16 || el.value.length > 19) {
        throw new ASN1SizeError("TimeStamp violates SIZE constraint");
    }
    return $._decodeGeneralizedTime(el);
};

export
const _encode_TimeStamp: $.ASN1Encoder<TimeStamp> = $._encodeGeneralizedTime;

/* eslint-enable */
