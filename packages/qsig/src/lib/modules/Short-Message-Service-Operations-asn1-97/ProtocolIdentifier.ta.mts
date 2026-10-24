/* eslint-disable */
import {
    type INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ProtocolIdentifier
 * @description
 *
 * Higher-layer protocol or telematic interworking for a Short Message
 * (ECMA-325 §E.1.2.1, Table E.1). The values match ETSI TS 100 901. Integer
 * 0..127. The ASN.1 comment mentions a default; the type has no DEFAULT.
 * Simple transfer uses 0 (`noIw`).
 *
 * 1 to 31 is the protocol between the Sending and Receiving Short Message
 * entities. 32 to 63 asks the Service Centre to convert the Short Message for
 * a telematic device and, on ISDN, to select that device's service indicators.
 * If the Service Centre cannot, `smsSubmit` fails with
 * `telematicInterworkingNotSupported` (§6.5.3.2.1).
 *
 * 65 to 71 (`replaceShortMessageType1` through `replaceShortMessageType7`):
 * the Service Centre replaces a stored Short Message with the same code and
 * the same `originatingAddress`, or stores this one if there is nothing to
 * replace (§6.5.3.1.1, §E.1.2.1). `shortMessageType0` (64): the receiver
 * returns an `smsDeliver` result and may discard the contents (§6.5.4.2,
 * §6.5.5.2). Names below are the table's, including its spelling
 * `internetElectonicMail`.
 *
 * - 0 `noIw`. 1 `telex`. 2 `group3Telefax`. 3 `group4Telefax`. 4
 *   `voiceTelephone`. 5 `eRMES`. 6 `nationalPagingSystem`. 7 `videotex`.
 * - 8 `teletexUnspecifiedCarrier`. 9 `teletexPSPDN`. 10 `teletexCSPDN`. 11
 *   `teletexAnalogPSTN`. 12 `teletexDigitalISDN`. 13 `uci`. 14-15 reserved.
 * - 16 `messageHandlingFacility`. 17 `x400MessageHandlingSystem`. 18
 *   `internetElectonicMail`. 19-23 reserved. 24-30 are specific to each
 *   Service Centre, by agreement with the Short Message entity. 31
 *   `gsmMobileStation`.
 * - 32 `iwImplicit`. 33 `iwTelex`. 34 `iwTelefaxGroup3`. 35 `iwTelefaxGroup4`.
 *   36 `iwVoiceTelephone`. 37 `iwERMES`. 38 `iwNationalPagingSystem`. 39
 *   `iwVideotex`.
 * - 40 `iwTeletexCarrierUnspecified`. 41 `iwTeletexPSPDN`. 42
 *   `iwTeletexCSPDN`. 43 `iwTeletexAnaloguePSTN`. 44 `iwTeletexDigitalISDN`.
 *   45 `iwUCI`. 46-47 reserved.
 * - 48 `iwMessageHandlingFacility`. 49 `iwX400MessageHandlingSystem`. 50
 *   `iwInternetElectronicMail`. 51-55 reserved. 56-62 Service Centre specific.
 *   63 `iwGSMMobileStation`.
 * - 64 `shortMessageType0`. 65-71 `replaceShortMessageType1` through
 *   `replaceShortMessageType7`. 72-94 reserved. 95 `returnCallMessage`. 96-124
 *   reserved.
 * - 125 `meDataDownload`. 126 `meDePersonalizationShortMessage`. 127
 *   `simDataDownload`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProtocolIdentifier  ::=  INTEGER (0..127)
 * ```
 */
export
type ProtocolIdentifier = INTEGER;

export
const _decode_ProtocolIdentifier = (el: _Element): ProtocolIdentifier => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? (value < 0n || value > 127n) : (value < 0 || value > 127))) {
        throw new ASN1OverflowError("ProtocolIdentifier violates INTEGER constraint");
    }
    return value;
};

export
const _encode_ProtocolIdentifier: $.ASN1Encoder<ProtocolIdentifier> = $._encodeInteger;

/* eslint-enable */
