/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DataVolumeGPRS
 * @description
 * 
 * Octet count for packet data service. Uplink and downlink are counted
 * separately and reflect data delivered to and from the user (clause
 * 5.1.1). When the P-GW includes a PCEF, the bearer-level volumes also
 * reflect data delivered to and from the serving node. Traffic offloaded
 * from the operator's network is still counted.
 * 
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DataVolumeGPRS  ::=  INTEGER
 * ```
 */
export
type DataVolumeGPRS = INTEGER;

export
const _decode_DataVolumeGPRS: $.ASN1Decoder<DataVolumeGPRS> = $._decodeInteger;

export
const _encode_DataVolumeGPRS: $.ASN1Encoder<DataVolumeGPRS> = $._encodeInteger;

/* eslint-enable */
