import {
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary BearerCapability
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BearerCapability {PARAMETERS-BOUND : bound} ::= CHOICE {
 bearerCap				[0] OCTET STRING (SIZE(2..bound.&maxBearerCapabilityLength))
 }
 * ```
 *
 */
export type BearerCapability =
{ bearerCap: OCTET_STRING };

let _cached_decoder_for_BearerCapability: $.ASN1Decoder<BearerCapability> | null = null;
export function _decode_BearerCapability (el: _Element): BearerCapability {
    if (!_cached_decoder_for_BearerCapability) {
        _cached_decoder_for_BearerCapability = $._decode_inextensible_choice<BearerCapability>({
    "CONTEXT 0": [ "bearerCap", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ]
        });
    }
    return _cached_decoder_for_BearerCapability(el);
}

let _cached_encoder_for_BearerCapability: $.ASN1Encoder<BearerCapability> | null = null;
export function _encode_BearerCapability (value: BearerCapability, elGetter: $.ASN1Encoder<BearerCapability>): _Element {
    if (!_cached_encoder_for_BearerCapability) {
        _cached_encoder_for_BearerCapability = $._encode_choice<BearerCapability>({
    "bearerCap": $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)
        }, $.BER);
    }
    return _cached_encoder_for_BearerCapability(value, elGetter);
}
