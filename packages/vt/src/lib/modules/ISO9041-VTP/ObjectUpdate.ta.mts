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
import { ObjectUpdate_display, _decode_ObjectUpdate_display, _encode_ObjectUpdate_display } from "../ISO9041-VTP/ObjectUpdate-display.ta.mjs";
// export { ObjectUpdate_display, _decode_ObjectUpdate_display, _encode_ObjectUpdate_display } from "../ISO9041-VTP/ObjectUpdate-display.ta.mjs";
import { _decode_COupdate, _encode_COupdate, COupdate } from "../G/COupdate.ta.mjs";
// export { COupdate, _decode_COupdate, _encode_COupdate } from "../G/COupdate.ta.mjs";
import { _decode_RIOreference, _encode_RIOreference, RIOreference } from "../G/RIOreference.ta.mjs";
// export { RIOreference, _decode_RIOreference, _encode_RIOreference } from "../G/RIOreference.ta.mjs";


/**
 * @summary ObjectUpdate
 * @description
 *
 * One NDQ object-update item. Identifies a Display Object, Control
 * Object or RIO and the permitted updates for that object.
 * ISO/IEC 9041-1:1997 §6.14, §12.1.
 *
 * - `display`: named DO plus `SEQUENCE OF DOupdate`. `doName` is
 *   optional when the VTE has a single DO.
 * - `control`: `G.COupdate`.
 * - `rioref`: execute/call a RIO record
 *   (ISO/IEC 9040:1997 §3.3.70, §15).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ObjectUpdate  ::=  CHOICE {
 *     display [0] IMPLICIT SEQUENCE {
 *         doName PrintableString OPTIONAL,
 *         updates SEQUENCE OF DOupdate
 *     },
 *     control [1] IMPLICIT G.COupdate,
 *     rioref  [2] IMPLICIT G.RIOreference
 * }
 * ```
 */
export
type ObjectUpdate =
    { display: ObjectUpdate_display } /* CHOICE_ALT_ROOT */
    | { control: COupdate } /* CHOICE_ALT_ROOT */
    | { rioref: RIOreference } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ObjectUpdate: $.ASN1Decoder<ObjectUpdate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ObjectUpdate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ObjectUpdate (el: _Element): ObjectUpdate {
    if (!_cached_decoder_for_ObjectUpdate) { _cached_decoder_for_ObjectUpdate = $._decode_inextensible_choice<ObjectUpdate>({
    "CONTEXT 0": [ "display", $._decode_implicit<ObjectUpdate_display>(() => _decode_ObjectUpdate_display) ],
    "CONTEXT 1": [ "control", $._decode_implicit<COupdate>(() => _decode_COupdate) ],
    "CONTEXT 2": [ "rioref", $._decode_implicit<RIOreference>(() => _decode_RIOreference) ]
}); }
    return _cached_decoder_for_ObjectUpdate(el);
}

let _cached_encoder_for_ObjectUpdate: $.ASN1Encoder<ObjectUpdate> | null = null;

/**
 * @summary Encodes a(n) ObjectUpdate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObjectUpdate, encoded as an ASN.1 Element.
 */
export
function _encode_ObjectUpdate (value: ObjectUpdate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ObjectUpdate) { _cached_encoder_for_ObjectUpdate = $._encode_choice<ObjectUpdate>({
    "display": $._encode_implicit(_TagClass.context, 0, () => _encode_ObjectUpdate_display, $.BER),
    "control": $._encode_implicit(_TagClass.context, 1, () => _encode_COupdate, $.BER),
    "rioref": $._encode_implicit(_TagClass.context, 2, () => _encode_RIOreference, $.BER),
}, $.BER); }
    return _cached_encoder_for_ObjectUpdate(value, elGetter);
}


/* eslint-enable */
