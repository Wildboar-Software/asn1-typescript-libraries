/* eslint-disable */
import {
    type UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TariffInformation, _decode_TariffInformation, _encode_TariffInformation } from "../IMSChargingDataTypes/TariffInformation.ta.mjs";


/**
 * @summary RealTimeTariffInformation
 * @description
 *
 * Tariff or add-on charge received in SIP, from the real-time transfer of
 * tariff information in TS 29.658 (clause 5.1.5). It may be carried in a
 * 1xx or 200 OK at setup, or in a mid-dialog request or response, and is
 * recorded by the IBCF, MGCF, S-CSCF, and AS. The IBCF accepts it only
 * from a trusted IMS network. Receipt of a SIP INFO that embeds the tariff
 * causes a Charging Data Request [Interim] (clause 5.2.2.1.18). The XML
 * body may be kept, or mapped to Tariff Information as specified in TS
 * 32.280.
 *
 * 3GPP TS 32.260 V20.1.0 clause 5.1.5.
 *
 * This is a field containing the real time tariff information that may be
 * exchanged in the SIP transaction, encoded in a XML body as described in
 * the TS 29.658 [225]. The RTTI information may be captured in the charging
 * information and it is operator configurable as whether it is used in its
 * original XML format or mapped on a detailed structure of parameters. The
 * RTTI information XML schema in XML format is given in the TS 29.658 [225].
 * The Tariff Information structure of parameters is provided in the TS
 * 32.280 [40]. The Real Time Tariff Information contains one of the
 * following elements: Tariff XML; Tariff Information. These field elements
 * are described in the appropriate subclause.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.37.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RealTimeTariffInformation  ::=  CHOICE {
 *    tariffInformation     [0] IMPLICIT TariffInformation,
 *    tariffXml             [1] IMPLICIT UTF8String}
 * ```
 */
export
type RealTimeTariffInformation =
    { tariffInformation: TariffInformation } /* CHOICE_ALT_ROOT */
    | { tariffXml: UTF8String } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RealTimeTariffInformation: $.ASN1Decoder<RealTimeTariffInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RealTimeTariffInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RealTimeTariffInformation (el: _Element): RealTimeTariffInformation {
    if (!_cached_decoder_for_RealTimeTariffInformation) { _cached_decoder_for_RealTimeTariffInformation = $._decode_inextensible_choice<RealTimeTariffInformation>({
    "CONTEXT 0": [ "tariffInformation", $._decode_implicit<TariffInformation>(() => _decode_TariffInformation) ],
    "CONTEXT 1": [ "tariffXml", $._decode_implicit<UTF8String>(() => $._decodeUTF8String) ]
}); }
    return _cached_decoder_for_RealTimeTariffInformation(el);
}

let _cached_encoder_for_RealTimeTariffInformation: $.ASN1Encoder<RealTimeTariffInformation> | null = null;

/**
 * @summary Encodes a(n) RealTimeTariffInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RealTimeTariffInformation, encoded as an ASN.1 Element.
 */
export
function _encode_RealTimeTariffInformation (value: RealTimeTariffInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RealTimeTariffInformation) { _cached_encoder_for_RealTimeTariffInformation = $._encode_choice<RealTimeTariffInformation>({
    "tariffInformation": $._encode_implicit(_TagClass.context, 0, () => _encode_TariffInformation, $.BER),
    "tariffXml": $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER),
}, $.BER); }
    return _cached_encoder_for_RealTimeTariffInformation(value, elGetter);
}


/* eslint-enable */
