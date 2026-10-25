/* eslint-disable */
import {
    type GeneralizedTime,
    type ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ServiceCentreTimeStamp
 * @description
 *
 * Time local to the entity that sends the APDU, to one-second accuracy, as ISO
 * 8601 GeneralizedTime of size 12..19 (ECMA-325 §6.3.1, §E.2.1). When the
 * Service Centre assigns it, simultaneous arrivals for one Receiving User get
 * distinct stamps with the smallest modification.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceCentreTimeStamp  ::=  GeneralizedTime (SIZE(12..19))
 * ```
 */
export
type ServiceCentreTimeStamp = GeneralizedTime; // GeneralizedTime

export
const _decode_ServiceCentreTimeStamp = (el: _Element): ServiceCentreTimeStamp => {
    if (el.value.length < 12 || el.value.length > 19) {
        throw new ASN1SizeError("ServiceCentreTimeStamp violates SIZE constraint");
    }
    return $._decodeGeneralizedTime(el);
};

export
const _encode_ServiceCentreTimeStamp: $.ASN1Encoder<ServiceCentreTimeStamp> = $._encodeGeneralizedTime;

/* eslint-enable */
