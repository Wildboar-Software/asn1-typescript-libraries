/* eslint-disable */
import {
    GeneralizedTime,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ServiceCentreTimeStamp
 * @description
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
