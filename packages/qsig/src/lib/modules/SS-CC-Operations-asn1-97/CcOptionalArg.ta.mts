/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CcOptionalArg_fullArg, _decode_CcOptionalArg_fullArg, _encode_CcOptionalArg_fullArg } from "../SS-CC-Operations-asn1-97/CcOptionalArg-fullArg.ta.mjs";
import { type CcExtension, _decode_CcExtension, _encode_CcExtension } from "../SS-CC-Operations-asn1-97/CcExtension.ta.mjs";

/**
 * @summary CcOptionalArg
 * @description
 *
 * Argument of `ccCancel`, `ccExecPossible`, `ccSuspend`, and
 * `ccResume` (ECMA-186 §6.3.1).
 *
 * - `fullArg`: basic call information that identifies the CC
 *   Request when no signalling connection is already tied to it.
 *   Used in a new SETUP (§6.5.2.1.10, §6.5.3.1.4, §6.5.3.1.8).
 * - `extArg`: used on an existing connection or reserved path.
 *   Basic call information, if present, is ignored (§6.5.2.1.4,
 *   §6.5.2.1.10). §6.5 does not say which alternative `ccSuspend`
 *   and `ccResume` use.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-186/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CcOptionalArg  ::=  CHOICE {
 *     fullArg [0] IMPLICIT SEQUENCE {
 *         numberA PartyNumber,
 *         numberB PartyNumber,
 *         service PSS1InformationElement,
 *         -- permitted information elements are:
 *         --Bearer capability;
 *         -- Low layer compatibility;
 *         -- High layer compatibility.
 *         subaddrA [10] PartySubaddress OPTIONAL,
 *         subaddrB [11] PartySubaddress OPTIONAL,
 *         extension CcExtension OPTIONAL
 *     },
 *     extArg CcExtension
 * }
 * ```
 */
export
type CcOptionalArg =
    { fullArg: CcOptionalArg_fullArg } /* CHOICE_ALT_ROOT */
    | { extArg: CcExtension } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CcOptionalArg: $.ASN1Decoder<CcOptionalArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CcOptionalArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CcOptionalArg (el: _Element): CcOptionalArg {
    if (!_cached_decoder_for_CcOptionalArg) { _cached_decoder_for_CcOptionalArg = $._decode_inextensible_choice<CcOptionalArg>({
    "CONTEXT 0": [ "fullArg", $._decode_implicit<CcOptionalArg_fullArg>(() => _decode_CcOptionalArg_fullArg) ],
    "UNIVERSAL 5": [ "extArg", _decode_CcExtension ],
    "CONTEXT 14": [ "extArg", _decode_CcExtension ],
    "CONTEXT 15": [ "extArg", _decode_CcExtension ]
}); }
    return _cached_decoder_for_CcOptionalArg(el);
}

let _cached_encoder_for_CcOptionalArg: $.ASN1Encoder<CcOptionalArg> | null = null;

/**
 * @summary Encodes a(n) CcOptionalArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CcOptionalArg, encoded as an ASN.1 Element.
 */
export
function _encode_CcOptionalArg (value: CcOptionalArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CcOptionalArg) { _cached_encoder_for_CcOptionalArg = $._encode_choice<CcOptionalArg>({
    "fullArg": $._encode_implicit(_TagClass.context, 0, () => _encode_CcOptionalArg_fullArg, $.BER),
    "extArg": _encode_CcExtension,
}, $.BER); }
    return _cached_encoder_for_CcOptionalArg(value, elGetter);
}

/* eslint-enable */
