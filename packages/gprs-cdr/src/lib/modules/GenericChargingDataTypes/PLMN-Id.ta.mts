/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PLMN_Id
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PLMN-Id     ::=  OCTET STRING ( SIZE( 3 ) )
 * ```
 */
export
type PLMN_Id = OCTET_STRING; // OctetStringType

export
const _decode_PLMN_Id: $.ASN1Decoder<PLMN_Id> = $._decodeOctetString;

export
const _encode_PLMN_Id: $.ASN1Encoder<PLMN_Id> = $._encodeOctetString;

/* eslint-enable */
