/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MIMEEntity, _decode_MIMEEntity, _encode_MIMEEntity } from "../TS33128Payloads/MIMEEntity.ta.mjs";
// export { MIMEEntity, _decode_MIMEEntity, _encode_MIMEEntity } from "../TS33128Payloads/MIMEEntity.ta.mjs";


/**
 * @summary RCSSessionContext
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSSessionContext  ::=  CHOICE
 * {
 *     cPMSessionInfo [1] MIMEEntity
 * }
 * ```
 */
export
type RCSSessionContext =
    { cPMSessionInfo: MIMEEntity } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RCSSessionContext: $.ASN1Decoder<RCSSessionContext> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RCSSessionContext
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RCSSessionContext (el: _Element): RCSSessionContext {
    if (!_cached_decoder_for_RCSSessionContext) { _cached_decoder_for_RCSSessionContext = $._decode_inextensible_choice<RCSSessionContext>({
    "CONTEXT 1": [ "cPMSessionInfo", $._decode_implicit<MIMEEntity>(() => _decode_MIMEEntity) ]
}); }
    return _cached_decoder_for_RCSSessionContext(el);
}

let _cached_encoder_for_RCSSessionContext: $.ASN1Encoder<RCSSessionContext> | null = null;

/**
 * @summary Encodes a(n) RCSSessionContext into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RCSSessionContext, encoded as an ASN.1 Element.
 */
export
function _encode_RCSSessionContext (value: RCSSessionContext, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RCSSessionContext) { _cached_encoder_for_RCSSessionContext = $._encode_choice<RCSSessionContext>({
    "cPMSessionInfo": $._encode_implicit(_TagClass.context, 1, () => _encode_MIMEEntity, $.BER),
}, $.BER); }
    return _cached_encoder_for_RCSSessionContext(value, elGetter);
}


/* eslint-enable */
