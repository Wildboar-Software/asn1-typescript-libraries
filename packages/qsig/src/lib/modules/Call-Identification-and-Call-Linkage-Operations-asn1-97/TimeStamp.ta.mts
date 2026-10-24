/* eslint-disable */
import {
    GeneralizedTime,
    type ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary TimeStamp
 * @description
 *
 * Time at which this call-identification data was created (ECMA-314 Annex D,
 * requirement 3). When the global or thread data is updated, the timestamp
 * shall be updated too. If two linkage identifiers are equal, the later
 * timestamp wins; a value that has a timestamp beats one that does not
 * (ECMA-314 §6.5.2.2). GeneralizedTime of 16..19 characters. ECMA-314 does
 * not specify the character layout beyond the ASN.1 type.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-314/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
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
