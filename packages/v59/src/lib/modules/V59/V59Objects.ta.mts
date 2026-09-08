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
import { ModemIdentity, _decode_ModemIdentity, _encode_ModemIdentity } from "../V59/ModemIdentity.ta.mjs";

import { ModeCapability, _decode_ModeCapability, _encode_ModeCapability } from "../V59/ModeCapability.ta.mjs";

import { ModeSelected, _decode_ModeSelected, _encode_ModeSelected } from "../V59/ModeSelected.ta.mjs";

import { V8Diag, _decode_V8Diag, _encode_V8Diag } from "../V59/V8Diag.ta.mjs";

import { V8bisDiag, _decode_V8bisDiag, _encode_V8bisDiag } from "../V59/V8bisDiag.ta.mjs";

import { V90Diag, _decode_V90Diag, _encode_V90Diag } from "../V59/V90Diag.ta.mjs";

import { V91Diag, _decode_V91Diag, _encode_V91Diag } from "../V59/V91Diag.ta.mjs";

import { V92ModDiag, _decode_V92ModDiag, _encode_V92ModDiag } from "../V59/V92ModDiag.ta.mjs";

import { V34Diag, _decode_V34Diag, _encode_V34Diag } from "../V59/V34Diag.ta.mjs";

import { V32Diag, _decode_V32Diag, _encode_V32Diag } from "../V59/V32Diag.ta.mjs";

import { V22Diag, _decode_V22Diag, _encode_V22Diag } from "../V59/V22Diag.ta.mjs";

import { V23Diag, _decode_V23Diag, _encode_V23Diag } from "../V59/V23Diag.ta.mjs";

import { V21Diag, _decode_V21Diag, _encode_V21Diag } from "../V59/V21Diag.ta.mjs";

import { V34HdxDiag, _decode_V34HdxDiag, _encode_V34HdxDiag } from "../V59/V34HdxDiag.ta.mjs";

import { V17Diag, _decode_V17Diag, _encode_V17Diag } from "../V59/V17Diag.ta.mjs";

import { V29faxDiag, _decode_V29faxDiag, _encode_V29faxDiag } from "../V59/V29faxDiag.ta.mjs";

import { V27tfaxDiag, _decode_V27tfaxDiag, _encode_V27tfaxDiag } from "../V59/V27tfaxDiag.ta.mjs";

import { V18Diag, _decode_V18Diag, _encode_V18Diag } from "../V59/V18Diag.ta.mjs";

import { V70Diag, _decode_V70Diag, _encode_V70Diag } from "../V59/V70Diag.ta.mjs";

import { V61Diag, _decode_V61Diag, _encode_V61Diag } from "../V59/V61Diag.ta.mjs";

import { NSMDiag, _decode_NSMDiag, _encode_NSMDiag } from "../V59/NSMDiag.ta.mjs";

import { CnxDiag, _decode_CnxDiag, _encode_CnxDiag } from "../V59/CnxDiag.ta.mjs";

import { LineConDiag, _decode_LineConDiag, _encode_LineConDiag } from "../V59/LineConDiag.ta.mjs";

import { CallProgress, _decode_CallProgress, _encode_CallProgress } from "../V59/CallProgress.ta.mjs";

import { Protocol, _decode_Protocol, _encode_Protocol } from "../V59/Protocol.ta.mjs";

import { ErrorControl, _decode_ErrorControl, _encode_ErrorControl } from "../V59/ErrorControl.ta.mjs";

import { Compression, _decode_Compression, _encode_Compression } from "../V59/Compression.ta.mjs";

import { DTEDCE, _decode_DTEDCE, _encode_DTEDCE } from "../V59/DTEDCE.ta.mjs";

/**
 * @summary V59Objects
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V59Objects  ::=  CHOICE {
 *   modemIdentity   ModemIdentity,
 *   modeCapability  ModeCapability,
 *   modeSelected    ModeSelected,
 *   v8Diag          V8Diag,
 *   v8bisDiag       V8bisDiag,
 *   v90Diag         V90Diag,
 *   v91Diag         V91Diag,
 *   v92ModDiag      V92ModDiag,
 *   v34Diag         V34Diag,
 *   v32Diag         V32Diag,
 *   v22Diag         V22Diag,
 *   v23Diag         V23Diag,
 *   v21Diag         V21Diag,
 *   v34HdxDiag      V34HdxDiag,
 *   v17Diag         V17Diag,
 *   v29faxDiag      V29faxDiag,
 *   v27tfaxDiag     V27tfaxDiag,
 *   v18Diag         V18Diag,
 *   v70Diag         V70Diag,
 *   v61Diag         V61Diag,
 *   nSMDiag         NSMDiag,
 *   cnxDiag         CnxDiag,
 *   lineConDiag     LineConDiag,
 *   callProgress    CallProgress,
 *   protocol        Protocol,
 *   errorControl    ErrorControl,
 *   compression     Compression,
 *   dteDce          DTEDCE,
 *   ...
 * }
 * ```
 */
export
type V59Objects =
    { modemIdentity: ModemIdentity } /* CHOICE_ALT_ROOT */
    | { modeCapability: ModeCapability } /* CHOICE_ALT_ROOT */
    | { modeSelected: ModeSelected } /* CHOICE_ALT_ROOT */
    | { v8Diag: V8Diag } /* CHOICE_ALT_ROOT */
    | { v8bisDiag: V8bisDiag } /* CHOICE_ALT_ROOT */
    | { v90Diag: V90Diag } /* CHOICE_ALT_ROOT */
    | { v91Diag: V91Diag } /* CHOICE_ALT_ROOT */
    | { v92ModDiag: V92ModDiag } /* CHOICE_ALT_ROOT */
    | { v34Diag: V34Diag } /* CHOICE_ALT_ROOT */
    | { v32Diag: V32Diag } /* CHOICE_ALT_ROOT */
    | { v22Diag: V22Diag } /* CHOICE_ALT_ROOT */
    | { v23Diag: V23Diag } /* CHOICE_ALT_ROOT */
    | { v21Diag: V21Diag } /* CHOICE_ALT_ROOT */
    | { v34HdxDiag: V34HdxDiag } /* CHOICE_ALT_ROOT */
    | { v17Diag: V17Diag } /* CHOICE_ALT_ROOT */
    | { v29faxDiag: V29faxDiag } /* CHOICE_ALT_ROOT */
    | { v27tfaxDiag: V27tfaxDiag } /* CHOICE_ALT_ROOT */
    | { v18Diag: V18Diag } /* CHOICE_ALT_ROOT */
    | { v70Diag: V70Diag } /* CHOICE_ALT_ROOT */
    | { v61Diag: V61Diag } /* CHOICE_ALT_ROOT */
    | { nSMDiag: NSMDiag } /* CHOICE_ALT_ROOT */
    | { cnxDiag: CnxDiag } /* CHOICE_ALT_ROOT */
    | { lineConDiag: LineConDiag } /* CHOICE_ALT_ROOT */
    | { callProgress: CallProgress } /* CHOICE_ALT_ROOT */
    | { protocol: Protocol } /* CHOICE_ALT_ROOT */
    | { errorControl: ErrorControl } /* CHOICE_ALT_ROOT */
    | { compression: Compression } /* CHOICE_ALT_ROOT */
    | { dteDce: DTEDCE } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_V59Objects: $.ASN1Decoder<V59Objects> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) V59Objects
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_V59Objects (el: _Element): V59Objects {
    if (!_cached_decoder_for_V59Objects) { _cached_decoder_for_V59Objects = $._decode_extensible_choice<V59Objects>({
    "CONTEXT 0": [ "modemIdentity", _decode_ModemIdentity ],
    "CONTEXT 1": [ "modeCapability", _decode_ModeCapability ],
    "CONTEXT 2": [ "modeSelected", _decode_ModeSelected ],
    "CONTEXT 3": [ "v8Diag", _decode_V8Diag ],
    "CONTEXT 4": [ "v8bisDiag", _decode_V8bisDiag ],
    "CONTEXT 5": [ "v90Diag", _decode_V90Diag ],
    "CONTEXT 6": [ "v91Diag", _decode_V91Diag ],
    "CONTEXT 7": [ "v92ModDiag", _decode_V92ModDiag ],
    "CONTEXT 8": [ "v34Diag", _decode_V34Diag ],
    "CONTEXT 9": [ "v32Diag", _decode_V32Diag ],
    "CONTEXT 10": [ "v22Diag", _decode_V22Diag ],
    "CONTEXT 11": [ "v23Diag", _decode_V23Diag ],
    "CONTEXT 12": [ "v21Diag", _decode_V21Diag ],
    "CONTEXT 13": [ "v34HdxDiag", _decode_V34HdxDiag ],
    "CONTEXT 14": [ "v17Diag", _decode_V17Diag ],
    "CONTEXT 15": [ "v29faxDiag", _decode_V29faxDiag ],
    "CONTEXT 16": [ "v27tfaxDiag", _decode_V27tfaxDiag ],
    "CONTEXT 17": [ "v18Diag", _decode_V18Diag ],
    "CONTEXT 18": [ "v70Diag", _decode_V70Diag ],
    "CONTEXT 19": [ "v61Diag", _decode_V61Diag ],
    "CONTEXT 20": [ "nSMDiag", _decode_NSMDiag ],
    "CONTEXT 21": [ "cnxDiag", _decode_CnxDiag ],
    "CONTEXT 22": [ "lineConDiag", _decode_LineConDiag ],
    "CONTEXT 23": [ "callProgress", _decode_CallProgress ],
    "CONTEXT 24": [ "protocol", _decode_Protocol ],
    "CONTEXT 25": [ "errorControl", _decode_ErrorControl ],
    "CONTEXT 26": [ "compression", _decode_Compression ],
    "CONTEXT 27": [ "dteDce", _decode_DTEDCE ]
}); }
    return _cached_decoder_for_V59Objects(el);
}

let _cached_encoder_for_V59Objects: $.ASN1Encoder<V59Objects> | null = null;

/**
 * @summary Encodes a(n) V59Objects into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The V59Objects, encoded as an ASN.1 Element.
 */
export
function _encode_V59Objects (value: V59Objects, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_V59Objects) { _cached_encoder_for_V59Objects = $._encode_choice<V59Objects>({
    "modemIdentity": $._encode_implicit(_TagClass.context, 0, () => _encode_ModemIdentity, $.BER),
    "modeCapability": $._encode_implicit(_TagClass.context, 1, () => _encode_ModeCapability, $.BER),
    "modeSelected": $._encode_implicit(_TagClass.context, 2, () => _encode_ModeSelected, $.BER),
    "v8Diag": $._encode_implicit(_TagClass.context, 3, () => _encode_V8Diag, $.BER),
    "v8bisDiag": $._encode_implicit(_TagClass.context, 4, () => _encode_V8bisDiag, $.BER),
    "v90Diag": $._encode_implicit(_TagClass.context, 5, () => _encode_V90Diag, $.BER),
    "v91Diag": $._encode_implicit(_TagClass.context, 6, () => _encode_V91Diag, $.BER),
    "v92ModDiag": $._encode_implicit(_TagClass.context, 7, () => _encode_V92ModDiag, $.BER),
    "v34Diag": $._encode_implicit(_TagClass.context, 8, () => _encode_V34Diag, $.BER),
    "v32Diag": $._encode_implicit(_TagClass.context, 9, () => _encode_V32Diag, $.BER),
    "v22Diag": $._encode_implicit(_TagClass.context, 10, () => _encode_V22Diag, $.BER),
    "v23Diag": $._encode_implicit(_TagClass.context, 11, () => _encode_V23Diag, $.BER),
    "v21Diag": $._encode_implicit(_TagClass.context, 12, () => _encode_V21Diag, $.BER),
    "v34HdxDiag": $._encode_implicit(_TagClass.context, 13, () => _encode_V34HdxDiag, $.BER),
    "v17Diag": $._encode_implicit(_TagClass.context, 14, () => _encode_V17Diag, $.BER),
    "v29faxDiag": $._encode_implicit(_TagClass.context, 15, () => _encode_V29faxDiag, $.BER),
    "v27tfaxDiag": $._encode_implicit(_TagClass.context, 16, () => _encode_V27tfaxDiag, $.BER),
    "v18Diag": $._encode_implicit(_TagClass.context, 17, () => _encode_V18Diag, $.BER),
    "v70Diag": $._encode_implicit(_TagClass.context, 18, () => _encode_V70Diag, $.BER),
    "v61Diag": $._encode_implicit(_TagClass.context, 19, () => _encode_V61Diag, $.BER),
    "nSMDiag": $._encode_implicit(_TagClass.context, 20, () => _encode_NSMDiag, $.BER),
    "cnxDiag": $._encode_implicit(_TagClass.context, 21, () => _encode_CnxDiag, $.BER),
    "lineConDiag": $._encode_implicit(_TagClass.context, 22, () => _encode_LineConDiag, $.BER),
    "callProgress": $._encode_implicit(_TagClass.context, 23, () => _encode_CallProgress, $.BER),
    "protocol": $._encode_implicit(_TagClass.context, 24, () => _encode_Protocol, $.BER),
    "errorControl": $._encode_implicit(_TagClass.context, 25, () => _encode_ErrorControl, $.BER),
    "compression": $._encode_implicit(_TagClass.context, 26, () => _encode_Compression, $.BER),
    "dteDce": $._encode_implicit(_TagClass.context, 27, () => _encode_DTEDCE, $.BER),
}, $.BER); }
    return _cached_encoder_for_V59Objects(value, elGetter);
}

/* eslint-enable */
