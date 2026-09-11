/* eslint-disable */
import {
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
import { TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";



/**
 * @summary Generic_sms_PDUs
 * @description
 * 
 * `TCMessage` for smsSSF-to-gsmSCF MO-SMS and MT-SMS dialogues. Invokable and
 * returnable sets are `SmsInvokable` and `SmsReturnable`. Bound set
 * `cAPSpecificBoundSet`. Rel-6 uses version8(7) operation definitions. Used by
 * `sms-AbstractSyntax`. (3GPP TS 29.078 V19.0.0 clause 7.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Generic-sms-PDUs  ::=  TCMessage {{SmsInvokable},
 *                 {SmsReturnable}}
 * ```
 */
export
type Generic_sms_PDUs = TCMessage; // DefinedType

let _cached_decoder_for_Generic_sms_PDUs: $.ASN1Decoder<Generic_sms_PDUs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Generic_sms_PDUs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Generic_sms_PDUs (el: _Element): Generic_sms_PDUs {
    if (!_cached_decoder_for_Generic_sms_PDUs) { _cached_decoder_for_Generic_sms_PDUs = _decode_TCMessage; }
    return _cached_decoder_for_Generic_sms_PDUs(el);
}

let _cached_encoder_for_Generic_sms_PDUs: $.ASN1Encoder<Generic_sms_PDUs> | null = null;

/**
 * @summary Encodes a(n) Generic_sms_PDUs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Generic_sms_PDUs, encoded as an ASN.1 Element.
 */
export
function _encode_Generic_sms_PDUs (value: Generic_sms_PDUs, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Generic_sms_PDUs) { _cached_encoder_for_Generic_sms_PDUs = _encode_TCMessage; }
    return _cached_encoder_for_Generic_sms_PDUs(value, elGetter);
}


/* eslint-enable */
