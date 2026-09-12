/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CS_EventNotification, _decode_CS_EventNotification, _encode_CS_EventNotification } from "../ISO-9506-MMS-1/CS-EventNotification.ta.mjs";
// export { CS_EventNotification, _decode_CS_EventNotification, _encode_CS_EventNotification } from "../ISO-9506-MMS-1/CS-EventNotification.ta.mjs";


/**
 * @summary Unconfirmed_Detail
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Unconfirmed-Detail  ::=  CHOICE {
 *        -- this choice shall be selected if the tag value of the
 *        -- UnconfirmedService does not match any of the tags below
 *    otherRequests          NULL
 * ,  eventNotification
 *        [2] IMPLICIT CS-EventNotification
 *    }
 * ```
 */
export
type Unconfirmed_Detail =
    { otherRequests: NULL } /* CHOICE_ALT_ROOT */
    | { eventNotification: CS_EventNotification } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Unconfirmed_Detail: $.ASN1Decoder<Unconfirmed_Detail> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Unconfirmed_Detail
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Unconfirmed_Detail (el: _Element): Unconfirmed_Detail {
    if (!_cached_decoder_for_Unconfirmed_Detail) { _cached_decoder_for_Unconfirmed_Detail = $._decode_inextensible_choice<Unconfirmed_Detail>({
    "UNIVERSAL 5": [ "otherRequests", $._decodeNull ],
    "CONTEXT 2": [ "eventNotification", $._decode_implicit<CS_EventNotification>(() => _decode_CS_EventNotification) ]
}); }
    return _cached_decoder_for_Unconfirmed_Detail(el);
}

let _cached_encoder_for_Unconfirmed_Detail: $.ASN1Encoder<Unconfirmed_Detail> | null = null;

/**
 * @summary Encodes a(n) Unconfirmed_Detail into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Unconfirmed_Detail, encoded as an ASN.1 Element.
 */
export
function _encode_Unconfirmed_Detail (value: Unconfirmed_Detail, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Unconfirmed_Detail) { _cached_encoder_for_Unconfirmed_Detail = $._encode_choice<Unconfirmed_Detail>({
    "otherRequests": $._encodeNull,
    "eventNotification": $._encode_implicit(_TagClass.context, 2, () => _encode_CS_EventNotification, $.BER),
}, $.BER); }
    return _cached_encoder_for_Unconfirmed_Detail(value, elGetter);
}


/* eslint-enable */
