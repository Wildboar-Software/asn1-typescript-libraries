/* eslint-disable */
import {
    GeneralizedTime
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
const _decode_ServiceCentreTimeStamp: $.ASN1Decoder<ServiceCentreTimeStamp> = $._decodeGeneralizedTime;

export
const _encode_ServiceCentreTimeStamp: $.ASN1Encoder<ServiceCentreTimeStamp> = $._encodeGeneralizedTime;

/* eslint-enable */
