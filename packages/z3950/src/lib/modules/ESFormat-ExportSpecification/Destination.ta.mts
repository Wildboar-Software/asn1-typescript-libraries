/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
import { Destination_other, _decode_Destination_other, _encode_Destination_other } from "../ESFormat-ExportSpecification/Destination-other.ta.mjs";


/**
 * @summary Destination
 * @description
 * 
 * Where to deliver exported records, or where to send a Periodic Query
 * alert. The client gives an address or other destination instruction.
 * Forms enumerated by the standard are phone, fax, X.400, e-mail, pager,
 * FTP, FTAM, and printer, plus an `other` vehicle. Service examples are
 * e-mail, a printer, a fax number, and, for alerts, a pager.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.6, EXT.1.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Destination  ::=  CHOICE {
 *     phoneNumber         [1] IMPLICIT InternationalString,
 *     faxNumber           [2] IMPLICIT InternationalString,
 *     x400address         [3] IMPLICIT InternationalString,
 *     emailAddress        [4] IMPLICIT InternationalString,
 *     pagerNumber         [5] IMPLICIT InternationalString,
 *     ftpAddress          [6] IMPLICIT InternationalString,
 *     ftamAddress         [7] IMPLICIT InternationalString,
 *     printerAddress      [8] IMPLICIT InternationalString,
 *     other               [100] IMPLICIT SEQUENCE {
 *         vehicle             [1] IMPLICIT InternationalString OPTIONAL,
 *         destination         [2] IMPLICIT InternationalString
 *     }
 * }
 * ```
 */
export
type Destination =
    { phoneNumber: InternationalString } /* CHOICE_ALT_ROOT */
    | { faxNumber: InternationalString } /* CHOICE_ALT_ROOT */
    | { x400address: InternationalString } /* CHOICE_ALT_ROOT */
    | { emailAddress: InternationalString } /* CHOICE_ALT_ROOT */
    | { pagerNumber: InternationalString } /* CHOICE_ALT_ROOT */
    | { ftpAddress: InternationalString } /* CHOICE_ALT_ROOT */
    | { ftamAddress: InternationalString } /* CHOICE_ALT_ROOT */
    | { printerAddress: InternationalString } /* CHOICE_ALT_ROOT */
    | { other: Destination_other } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Destination: $.ASN1Decoder<Destination> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Destination
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Destination (el: _Element): Destination {
    if (!_cached_decoder_for_Destination) { _cached_decoder_for_Destination = $._decode_inextensible_choice<Destination>({
    "CONTEXT 1": [ "phoneNumber", $._decode_implicit<InternationalString>(() => _decode_InternationalString) ],
    "CONTEXT 2": [ "faxNumber", $._decode_implicit<InternationalString>(() => _decode_InternationalString) ],
    "CONTEXT 3": [ "x400address", $._decode_implicit<InternationalString>(() => _decode_InternationalString) ],
    "CONTEXT 4": [ "emailAddress", $._decode_implicit<InternationalString>(() => _decode_InternationalString) ],
    "CONTEXT 5": [ "pagerNumber", $._decode_implicit<InternationalString>(() => _decode_InternationalString) ],
    "CONTEXT 6": [ "ftpAddress", $._decode_implicit<InternationalString>(() => _decode_InternationalString) ],
    "CONTEXT 7": [ "ftamAddress", $._decode_implicit<InternationalString>(() => _decode_InternationalString) ],
    "CONTEXT 8": [ "printerAddress", $._decode_implicit<InternationalString>(() => _decode_InternationalString) ],
    "CONTEXT 100": [ "other", $._decode_implicit<Destination_other>(() => _decode_Destination_other) ]
}); }
    return _cached_decoder_for_Destination(el);
}

let _cached_encoder_for_Destination: $.ASN1Encoder<Destination> | null = null;

/**
 * @summary Encodes a(n) Destination into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Destination, encoded as an ASN.1 Element.
 */
export
function _encode_Destination (value: Destination, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Destination) { _cached_encoder_for_Destination = $._encode_choice<Destination>({
    "phoneNumber": $._encode_implicit(_TagClass.context, 1, () => _encode_InternationalString, $.BER),
    "faxNumber": $._encode_implicit(_TagClass.context, 2, () => _encode_InternationalString, $.BER),
    "x400address": $._encode_implicit(_TagClass.context, 3, () => _encode_InternationalString, $.BER),
    "emailAddress": $._encode_implicit(_TagClass.context, 4, () => _encode_InternationalString, $.BER),
    "pagerNumber": $._encode_implicit(_TagClass.context, 5, () => _encode_InternationalString, $.BER),
    "ftpAddress": $._encode_implicit(_TagClass.context, 6, () => _encode_InternationalString, $.BER),
    "ftamAddress": $._encode_implicit(_TagClass.context, 7, () => _encode_InternationalString, $.BER),
    "printerAddress": $._encode_implicit(_TagClass.context, 8, () => _encode_InternationalString, $.BER),
    "other": $._encode_implicit(_TagClass.context, 100, () => _encode_Destination_other, $.BER),
}, $.BER); }
    return _cached_encoder_for_Destination(value, elGetter);
}


/* eslint-enable */
