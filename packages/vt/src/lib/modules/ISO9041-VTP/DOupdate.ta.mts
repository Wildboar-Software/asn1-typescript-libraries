/* eslint-disable */
import {
    INTEGER,
    OCTET_STRING,
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
import { _decode_ExplicitPointer, _encode_ExplicitPointer, ExplicitPointer } from "../G/ExplicitPointer.ta.mjs";
// export { ExplicitPointer, _decode_ExplicitPointer, _encode_ExplicitPointer } from "../G/ExplicitPointer.ta.mjs";
import { Pointer, _decode_Pointer, _encode_Pointer } from "../ISO9041-VTP/Pointer.ta.mjs";
// export { Pointer, _decode_Pointer, _encode_Pointer } from "../ISO9041-VTP/Pointer.ta.mjs";
import { DOupdate_repeatText, _decode_DOupdate_repeatText, _encode_DOupdate_repeatText } from "../ISO9041-VTP/DOupdate-repeatText.ta.mjs";
// export { DOupdate_repeatText, _decode_DOupdate_repeatText, _encode_DOupdate_repeatText } from "../ISO9041-VTP/DOupdate-repeatText.ta.mjs";
import { DOupdate_writeAttr, _decode_DOupdate_writeAttr, _encode_DOupdate_writeAttr } from "../ISO9041-VTP/DOupdate-writeAttr.ta.mjs";
// export { DOupdate_writeAttr, _decode_DOupdate_writeAttr, _encode_DOupdate_writeAttr } from "../ISO9041-VTP/DOupdate-writeAttr.ta.mjs";
import { DOupdate_erase, _decode_DOupdate_erase, _encode_DOupdate_erase } from "../ISO9041-VTP/DOupdate-erase.ta.mjs";
// export { DOupdate_erase, _decode_DOupdate_erase, _encode_DOupdate_erase } from "../ISO9041-VTP/DOupdate-erase.ta.mjs";
import { _decode_LogExpPointer, _encode_LogExpPointer, LogExpPointer } from "../G/LogExpPointer.ta.mjs";
// export { LogExpPointer, _decode_LogExpPointer, _encode_LogExpPointer } from "../G/LogExpPointer.ta.mjs";
import { LogPointer, _decode_LogPointer, _encode_LogPointer } from "../ISO9041-VTP/LogPointer.ta.mjs";
// export { LogPointer, _decode_LogPointer, _encode_LogPointer } from "../ISO9041-VTP/LogPointer.ta.mjs";
import { DOupdate_logText, _decode_DOupdate_logText, _encode_DOupdate_logText } from "../ISO9041-VTP/DOupdate-logText.ta.mjs";
// export { DOupdate_logText, _decode_DOupdate_logText, _encode_DOupdate_logText } from "../ISO9041-VTP/DOupdate-logText.ta.mjs";
import { DOupdate_repeatLogText, _decode_DOupdate_repeatLogText, _encode_DOupdate_repeatLogText } from "../ISO9041-VTP/DOupdate-repeatLogText.ta.mjs";
// export { DOupdate_repeatLogText, _decode_DOupdate_repeatLogText, _encode_DOupdate_repeatLogText } from "../ISO9041-VTP/DOupdate-repeatLogText.ta.mjs";
import { DOupdate_writeLogAttr, _decode_DOupdate_writeLogAttr, _encode_DOupdate_writeLogAttr } from "../ISO9041-VTP/DOupdate-writeLogAttr.ta.mjs";
// export { DOupdate_writeLogAttr, _decode_DOupdate_writeLogAttr, _encode_DOupdate_writeLogAttr } from "../ISO9041-VTP/DOupdate-writeLogAttr.ta.mjs";
import { DOupdate_logErase, _decode_DOupdate_logErase, _encode_DOupdate_logErase } from "../ISO9041-VTP/DOupdate-logErase.ta.mjs";
// export { DOupdate_logErase, _decode_DOupdate_logErase, _encode_DOupdate_logErase } from "../ISO9041-VTP/DOupdate-logErase.ta.mjs";
import { DOupdate_createBlock, _decode_DOupdate_createBlock, _encode_DOupdate_createBlock } from "../ISO9041-VTP/DOupdate-createBlock.ta.mjs";
// export { DOupdate_createBlock, _decode_DOupdate_createBlock, _encode_DOupdate_createBlock } from "../ISO9041-VTP/DOupdate-createBlock.ta.mjs";
import { _decode_Block, _encode_Block, Block } from "../G/Block.ta.mjs";
// export { Block, _decode_Block, _encode_Block } from "../G/Block.ta.mjs";
import { DOupdate_copyToBuffer, _decode_DOupdate_copyToBuffer, _encode_DOupdate_copyToBuffer } from "../ISO9041-VTP/DOupdate-copyToBuffer.ta.mjs";
// export { DOupdate_copyToBuffer, _decode_DOupdate_copyToBuffer, _encode_DOupdate_copyToBuffer } from "../ISO9041-VTP/DOupdate-copyToBuffer.ta.mjs";
import { DOupdate_copyFromBuffer, _decode_DOupdate_copyFromBuffer, _encode_DOupdate_copyFromBuffer } from "../ISO9041-VTP/DOupdate-copyFromBuffer.ta.mjs";
// export { DOupdate_copyFromBuffer, _decode_DOupdate_copyFromBuffer, _encode_DOupdate_copyFromBuffer } from "../ISO9041-VTP/DOupdate-copyFromBuffer.ta.mjs";
import { DOupdate_copyLogToBuffer, _decode_DOupdate_copyLogToBuffer, _encode_DOupdate_copyLogToBuffer } from "../ISO9041-VTP/DOupdate-copyLogToBuffer.ta.mjs";
// export { DOupdate_copyLogToBuffer, _decode_DOupdate_copyLogToBuffer, _encode_DOupdate_copyLogToBuffer } from "../ISO9041-VTP/DOupdate-copyLogToBuffer.ta.mjs";
import { DOupdate_copyLogFromBuffer, _decode_DOupdate_copyLogFromBuffer, _encode_DOupdate_copyLogFromBuffer } from "../ISO9041-VTP/DOupdate-copyLogFromBuffer.ta.mjs";
// export { DOupdate_copyLogFromBuffer, _decode_DOupdate_copyLogFromBuffer, _encode_DOupdate_copyLogFromBuffer } from "../ISO9041-VTP/DOupdate-copyLogFromBuffer.ta.mjs";


/**
 * @summary DOupdate
 * @description
 *
 * One display-object update from ISO/IEC 9040:1997 clause 19.
 * Carried in an NDQ `ObjectUpdate` display item. Subject to the DO
 * access-rule (ISO/IEC 9040:1997 §19.5). TEXT, REPEAT-TEXT,
 * ATTRIBUTE and ERASE are also constrained by the update-window and
 * access-outside-fields. ISO/IEC 9041-1:1997 §12.1.
 *
 * - `nextXarray` / `previousXarray`: NEXT/PREVIOUS X-ARRAY macros.
 *   y±1, then x:=Xmin (lower update-window bound of the destination
 *   X-array). ISO/IEC 9040:1997 §19.1.1.2.2.
 * - `nextYarray` / `previousYarray`: z±1; y:=Ymin; x:=Xmin.
 *   ISO/IEC 9040:1997 §19.1.1.2.2.
 * - `ptr_relative`: POINTER-RELATIVE. Service args p,q,r map to
 *   x,y,z. Each optional (default 0). Invalid if it violates
 *   d-bound, d-addressing or d-absolute.
 *   ISO/IEC 9040:1997 §19.1.1.2.
 * - `ptr_absolute`: POINTER-ABSOLUTE to a `Pointer` special value
 *   or coords. ISO/IEC 9040:1997 §19.1.1.2.1.
 * - `text`: TEXT. Writes primary-attribute octets at the display
 *   pointer then implicit addressing (x++ unless ripple). Repertoire
 *   defines octet encoding. Invalid if the pointer does not identify
 *   an array element or is below the update-window. If ripple is
 *   enabled, a 1-unit forward x-ripple runs first.
 *   ISO/IEC 9040:1997 §19.4.1.1.
 * - `repeatText`: REPEAT-TEXT from current to `finishAddress`
 *   (must be ≥ current). Cycles the octet string across the
 *   repeat-extent. Pointer left immediately after the last updated
 *   element. ISO/IEC 9040:1997 §19.4.1.2.
 * - `writeAttr`: ATTRIBUTE. `AttrId` encodes both attribute-id and
 *   attribute-value. Extent is global, address or modal.
 *   character-repertoire may only be set with modal extent.
 *   ISO/IEC 9040:1997 §19.4.1.3.
 * - `erase`: ERASE from `startErase` to `endErase`. `EraseAttr`
 *   TRUE also resets secondary attributes to explicit modal
 *   defaults. Does not move the display pointer. If ripple is
 *   enabled, replaced by backward x-ripple. Requires
 *   erasure-capability `"yes"`. ISO/IEC 9040:1997 §19.4.1.4, §18.1.
 * - `nextBlock` / `previousBlock`: block addressing macros.
 *   Requires Blocks FU and block-definition-capability.
 *   ISO/IEC 9040:1997 §19.1.2.2.
 * - `nextField` / `previousField`: field navigation. Requires
 *   Fields FU. ISO/IEC 9040:1997 §19.1.3.
 * - `log_relative` / `log_absolute`: logical POINTER-RELATIVE /
 *   POINTER-ABSOLUTE (k,f,z). ISO/IEC 9040:1997 §19.1.3.
 * - `logText`: LOGICAL-TEXT. `fdrAttr` TRUE applies FDR attributes.
 *   `prAttrVal` is the primary-attribute octet string.
 *   ISO/IEC 9040:1997 §19.4.2.1.
 * - `repeatLogText` / `writeLogAttr` / `logErase`: logical
 *   counterparts of REPEAT-TEXT, ATTRIBUTE and ERASE.
 *   ISO/IEC 9040:1997 §19.4.2.
 * - `createBlock`: CREATE-BLOCK at (z,b) with origin (x,y) and
 *   dimension (Dx,Dy). Replaces any existing block at that (b,z).
 *   Requires Blocks FU. ISO/IEC 9040:1997 §19.4.1.5.1.
 * - `deleteBlock`: DELETE-BLOCK. ISO/IEC 9040:1997 §19.4.1.5.2.
 * - `insertXarray` / `deleteXarray` / `insertYarray` /
 *   `deleteYarray`: ripple INSERT/DELETE of N arrays. INTEGER is
 *   the unit count. Requires Ripple FU (and Structured COs for
 *   RMCO). ISO/IEC 9040:1997 §19.2, §19.4.1.6–§19.4.1.9, §10.10.
 * - `copyToBuffer` / `copyFromBuffer`: COPY-TO/FROM-BUFFER.
 *   Temporary buffer: `rioName` and `recordId` SHALL be absent.
 *   Single RIO in VTE: `rioName` optional, `recordId` present.
 *   `rendition` present ⇒ copy attributes; absent ⇒ no attribute
 *   copy. `structure` absent ⇒ none. `ripple` present ⇒ on.
 *   Requires Ripple FU. ISO/IEC 9040:1997 §19.4.1.10.2–3.
 * - `copyLogToBuffer` / `copyLogFromBuffer`: logical copies.
 *   `structure` present ⇒ `"x"`, absent ⇒ `"none"`.
 *   ISO/IEC 9040:1997 §19.4.2.5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DOupdate  ::=  CHOICE {
 *     nextXarray      [0]  IMPLICIT NULL,
 *     nextYarray      [1]  IMPLICIT NULL,
 *     ptr-relative    [2]  IMPLICIT G.ExplicitPointer,
 *     -- the values of service arguments p,q,r correspond to x,y,z respectively
 *     ptr-absolute    [3]  Pointer,
 *     text            [4]  IMPLICIT OCTET STRING,
 *     -- text may incorporate a number of encoded characters; the repertoire
 *     -- defines the encoding of characters into octets.
 *     repeatText      [5]  IMPLICIT SEQUENCE {
 *         finishAddress   Pointer,
 *         text            OCTET STRING
 *     },
 *     writeAttr       [6]  IMPLICIT SEQUENCE {
 *         attributeId     AttrId,
 *         attributeExtent AttrExtent
 *     },
 *     -- AttrId encodes both service arguments attribute-id and attribute-value
 *     erase           [7]  IMPLICIT SEQUENCE {
 *         startErase  Pointer,
 *         endErase    Pointer,
 *         attribute   EraseAttr
 *     },
 *     previousXarray  [8]  IMPLICIT NULL,
 *     previousYarray  [9]  IMPLICIT NULL,
 *     nextBlock       [10] IMPLICIT NULL,
 *     previousBlock   [11] IMPLICIT NULL,
 *     nextField       [12] IMPLICIT NULL,
 *     previousField   [13] IMPLICIT NULL,
 *     log-relative    [14] IMPLICIT G.LogExpPointer,
 *     log-absolute    [15] LogPointer,
 *     logText         [16] IMPLICIT SEQUENCE {
 *         fdrAttr   [0] IMPLICIT BOOLEAN,
 *         -- TRUE = "yes", FALSE = "no"
 *         prAttrVal [1] IMPLICIT OCTET STRING
 *         -- see comment under text in DOupdate
 *     },
 *     repeatLogText   [17] IMPLICIT SEQUENCE {
 *         finishAddress LogPointer,
 *         fdrAttr      [8] IMPLICIT BOOLEAN,
 *         prAttrValStr [9] IMPLICIT OCTET STRING
 *     },
 *     -- AttrId encodes both the service arguments attribute-id and attribute-value
 *     -- TRUE = "yes", FALSE = "no"
 *     writeLogAttr    [18] IMPLICIT SEQUENCE {
 *         attributeId     AttrId,
 *         logAttrExtent   LogAttrExtent
 *     },
 *     logErase        [19] IMPLICIT SEQUENCE {
 *         logStartErase   LogPointer,
 *         logEndErase     LogPointer,
 *         attribute       EraseAttr
 *     },
 *     createBlock     [20] IMPLICIT SEQUENCE {
 *         blockPosition [0] IMPLICIT G.Block,
 *         origin        [1] IMPLICIT G.MeasurePair,
 *         dimension     [2] IMPLICIT G.MeasurePair
 *     },
 *     deleteBlock     [21] IMPLICIT G.Block,
 *     insertXarray    [22] IMPLICIT INTEGER,
 *     deleteXarray    [23] IMPLICIT INTEGER,
 *     insertYarray    [24] IMPLICIT INTEGER,
 *     deleteYarray    [25] IMPLICIT INTEGER,
 *     copyToBuffer    [26] SEQUENCE {
 *         address Pointer,
 *         rioName  [10] IMPLICIT PrintableString OPTIONAL,
 *         recordId [11] IMPLICIT PrintableString OPTIONAL,
 *         -- when buffer-name is "temporary", rioName and recordId shall be absent;
 *         -- when there is only one RIO present in the VTE, rioName is optional,
 *         -- but recordId shall be present
 *         rendition [12] IMPLICIT NULL OPTIONAL,
 *         -- presence implies "copy attributes", absence implies "no attribute copy"
 *         structure [13] IMPLICIT INTEGER { none (0), x (1), xAndy (2) } OPTIONAL,
 *         -- absence implies "none"
 *         ripple [14] IMPLICIT NULL OPTIONAL
 *         -- presence implies "on", absence implies "off"
 *     },
 *     copyFromBuffer  [27] SEQUENCE {
 *         address Pointer,
 *         rioName  [10] IMPLICIT PrintableString OPTIONAL,
 *         recordId [11] IMPLICIT PrintableString OPTIONAL,
 *         -- when buffer-name is "temporary", rioName and recordId shall be absent;
 *         -- when there is only one RIO present in the VTE, rioName is optional,
 *         -- but recordId shall be present
 *         rendition [12] IMPLICIT NULL OPTIONAL,
 *         -- presence implies "copy attributes", absence implies "no attribute copy"
 *         structure [13] IMPLICIT INTEGER { none (0), x (1), xAndy (2) } OPTIONAL,
 *         -- absence implies "none"
 *         ripple [14] IMPLICIT NULL OPTIONAL
 *         -- presence implies "on", absence implies "off"
 *     },
 *     copyLogToBuffer [28] SEQUENCE {
 *         address LogPointer,
 *         rioName  [8] IMPLICIT PrintableString OPTIONAL,
 *         recordId [9] IMPLICIT PrintableString OPTIONAL,
 *         -- when buffer-name is "temporary", rioName and recordId shall be absent;
 *         -- when there is only one RIO present in the VTE, rioName is optional,
 *         -- but recordId shall be present
 *         rendition [10] IMPLICIT NULL OPTIONAL,
 *         -- presence implies "copy attributes", absence implies "no attribute copy"
 *         structure [11] IMPLICIT NULL OPTIONAL
 *         -- presence implies "x", absence implies "none"
 *     },
 *     copyLogFromBuffer [29] SEQUENCE {
 *         address LogPointer,
 *         rioName  [8] IMPLICIT PrintableString OPTIONAL,
 *         recordId [9] IMPLICIT PrintableString OPTIONAL,
 *         -- when buffer-name is "temporary", rioName and recordId shall be absent;
 *         -- when there is only one RIO present in the VTE, rioName is optional,
 *         -- but recordId shall be present
 *         rendition [10] IMPLICIT NULL OPTIONAL,
 *         -- presence implies "copy attributes", absence implies "no attribute copy"
 *         structure [11] IMPLICIT NULL OPTIONAL,
 *         -- presence implies "x", absence implies "none"
 *         ripple [12] IMPLICIT NULL OPTIONAL
 *         -- presence implies "on", absence implies "off"
 *     }
 * }
 * ```
 */
export
type DOupdate =
    { nextXarray: NULL } /* CHOICE_ALT_ROOT */
    | { nextYarray: NULL } /* CHOICE_ALT_ROOT */
    | { ptr_relative: ExplicitPointer } /* CHOICE_ALT_ROOT */
    | { ptr_absolute: Pointer } /* CHOICE_ALT_ROOT */
    | { text: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { repeatText: DOupdate_repeatText } /* CHOICE_ALT_ROOT */
    | { writeAttr: DOupdate_writeAttr } /* CHOICE_ALT_ROOT */
    | { erase: DOupdate_erase } /* CHOICE_ALT_ROOT */
    | { previousXarray: NULL } /* CHOICE_ALT_ROOT */
    | { previousYarray: NULL } /* CHOICE_ALT_ROOT */
    | { nextBlock: NULL } /* CHOICE_ALT_ROOT */
    | { previousBlock: NULL } /* CHOICE_ALT_ROOT */
    | { nextField: NULL } /* CHOICE_ALT_ROOT */
    | { previousField: NULL } /* CHOICE_ALT_ROOT */
    | { log_relative: LogExpPointer } /* CHOICE_ALT_ROOT */
    | { log_absolute: LogPointer } /* CHOICE_ALT_ROOT */
    | { logText: DOupdate_logText } /* CHOICE_ALT_ROOT */
    | { repeatLogText: DOupdate_repeatLogText } /* CHOICE_ALT_ROOT */
    | { writeLogAttr: DOupdate_writeLogAttr } /* CHOICE_ALT_ROOT */
    | { logErase: DOupdate_logErase } /* CHOICE_ALT_ROOT */
    | { createBlock: DOupdate_createBlock } /* CHOICE_ALT_ROOT */
    | { deleteBlock: Block } /* CHOICE_ALT_ROOT */
    | { insertXarray: INTEGER } /* CHOICE_ALT_ROOT */
    | { deleteXarray: INTEGER } /* CHOICE_ALT_ROOT */
    | { insertYarray: INTEGER } /* CHOICE_ALT_ROOT */
    | { deleteYarray: INTEGER } /* CHOICE_ALT_ROOT */
    | { copyToBuffer: DOupdate_copyToBuffer } /* CHOICE_ALT_ROOT */
    | { copyFromBuffer: DOupdate_copyFromBuffer } /* CHOICE_ALT_ROOT */
    | { copyLogToBuffer: DOupdate_copyLogToBuffer } /* CHOICE_ALT_ROOT */
    | { copyLogFromBuffer: DOupdate_copyLogFromBuffer } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DOupdate: $.ASN1Decoder<DOupdate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DOupdate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DOupdate (el: _Element): DOupdate {
    if (!_cached_decoder_for_DOupdate) { _cached_decoder_for_DOupdate = $._decode_inextensible_choice<DOupdate>({
    "CONTEXT 0": [ "nextXarray", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "nextYarray", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 2": [ "ptr_relative", $._decode_implicit<ExplicitPointer>(() => _decode_ExplicitPointer) ],
    "CONTEXT 3": [ "ptr_absolute", $._decode_explicit<Pointer>(() => _decode_Pointer) ],
    "CONTEXT 4": [ "text", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 5": [ "repeatText", $._decode_implicit<DOupdate_repeatText>(() => _decode_DOupdate_repeatText) ],
    "CONTEXT 6": [ "writeAttr", $._decode_implicit<DOupdate_writeAttr>(() => _decode_DOupdate_writeAttr) ],
    "CONTEXT 7": [ "erase", $._decode_implicit<DOupdate_erase>(() => _decode_DOupdate_erase) ],
    "CONTEXT 8": [ "previousXarray", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 9": [ "previousYarray", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 10": [ "nextBlock", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 11": [ "previousBlock", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 12": [ "nextField", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 13": [ "previousField", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 14": [ "log_relative", $._decode_implicit<LogExpPointer>(() => _decode_LogExpPointer) ],
    "CONTEXT 15": [ "log_absolute", $._decode_explicit<LogPointer>(() => _decode_LogPointer) ],
    "CONTEXT 16": [ "logText", $._decode_implicit<DOupdate_logText>(() => _decode_DOupdate_logText) ],
    "CONTEXT 17": [ "repeatLogText", $._decode_implicit<DOupdate_repeatLogText>(() => _decode_DOupdate_repeatLogText) ],
    "CONTEXT 18": [ "writeLogAttr", $._decode_implicit<DOupdate_writeLogAttr>(() => _decode_DOupdate_writeLogAttr) ],
    "CONTEXT 19": [ "logErase", $._decode_implicit<DOupdate_logErase>(() => _decode_DOupdate_logErase) ],
    "CONTEXT 20": [ "createBlock", $._decode_implicit<DOupdate_createBlock>(() => _decode_DOupdate_createBlock) ],
    "CONTEXT 21": [ "deleteBlock", $._decode_implicit<Block>(() => _decode_Block) ],
    "CONTEXT 22": [ "insertXarray", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 23": [ "deleteXarray", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 24": [ "insertYarray", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 25": [ "deleteYarray", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 26": [ "copyToBuffer", $._decode_implicit<DOupdate_copyToBuffer>(() => _decode_DOupdate_copyToBuffer) ],
    "CONTEXT 27": [ "copyFromBuffer", $._decode_implicit<DOupdate_copyFromBuffer>(() => _decode_DOupdate_copyFromBuffer) ],
    "CONTEXT 28": [ "copyLogToBuffer", $._decode_implicit<DOupdate_copyLogToBuffer>(() => _decode_DOupdate_copyLogToBuffer) ],
    "CONTEXT 29": [ "copyLogFromBuffer", $._decode_implicit<DOupdate_copyLogFromBuffer>(() => _decode_DOupdate_copyLogFromBuffer) ]
}); }
    return _cached_decoder_for_DOupdate(el);
}

let _cached_encoder_for_DOupdate: $.ASN1Encoder<DOupdate> | null = null;

/**
 * @summary Encodes a(n) DOupdate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DOupdate, encoded as an ASN.1 Element.
 */
export
function _encode_DOupdate (value: DOupdate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DOupdate) { _cached_encoder_for_DOupdate = $._encode_choice<DOupdate>({
    "nextXarray": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "nextYarray": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
    "ptr_relative": $._encode_implicit(_TagClass.context, 2, () => _encode_ExplicitPointer, $.BER),
    "ptr_absolute": $._encode_explicit(_TagClass.context, 3, () => _encode_Pointer, $.BER),
    "text": $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER),
    "repeatText": $._encode_implicit(_TagClass.context, 5, () => _encode_DOupdate_repeatText, $.BER),
    "writeAttr": $._encode_implicit(_TagClass.context, 6, () => _encode_DOupdate_writeAttr, $.BER),
    "erase": $._encode_implicit(_TagClass.context, 7, () => _encode_DOupdate_erase, $.BER),
    "previousXarray": $._encode_implicit(_TagClass.context, 8, () => $._encodeNull, $.BER),
    "previousYarray": $._encode_implicit(_TagClass.context, 9, () => $._encodeNull, $.BER),
    "nextBlock": $._encode_implicit(_TagClass.context, 10, () => $._encodeNull, $.BER),
    "previousBlock": $._encode_implicit(_TagClass.context, 11, () => $._encodeNull, $.BER),
    "nextField": $._encode_implicit(_TagClass.context, 12, () => $._encodeNull, $.BER),
    "previousField": $._encode_implicit(_TagClass.context, 13, () => $._encodeNull, $.BER),
    "log_relative": $._encode_implicit(_TagClass.context, 14, () => _encode_LogExpPointer, $.BER),
    "log_absolute": $._encode_explicit(_TagClass.context, 15, () => _encode_LogPointer, $.BER),
    "logText": $._encode_implicit(_TagClass.context, 16, () => _encode_DOupdate_logText, $.BER),
    "repeatLogText": $._encode_implicit(_TagClass.context, 17, () => _encode_DOupdate_repeatLogText, $.BER),
    "writeLogAttr": $._encode_implicit(_TagClass.context, 18, () => _encode_DOupdate_writeLogAttr, $.BER),
    "logErase": $._encode_implicit(_TagClass.context, 19, () => _encode_DOupdate_logErase, $.BER),
    "createBlock": $._encode_implicit(_TagClass.context, 20, () => _encode_DOupdate_createBlock, $.BER),
    "deleteBlock": $._encode_implicit(_TagClass.context, 21, () => _encode_Block, $.BER),
    "insertXarray": $._encode_implicit(_TagClass.context, 22, () => $._encodeInteger, $.BER),
    "deleteXarray": $._encode_implicit(_TagClass.context, 23, () => $._encodeInteger, $.BER),
    "insertYarray": $._encode_implicit(_TagClass.context, 24, () => $._encodeInteger, $.BER),
    "deleteYarray": $._encode_implicit(_TagClass.context, 25, () => $._encodeInteger, $.BER),
    "copyToBuffer": $._encode_implicit(_TagClass.context, 26, () => _encode_DOupdate_copyToBuffer, $.BER),
    "copyFromBuffer": $._encode_implicit(_TagClass.context, 27, () => _encode_DOupdate_copyFromBuffer, $.BER),
    "copyLogToBuffer": $._encode_implicit(_TagClass.context, 28, () => _encode_DOupdate_copyLogToBuffer, $.BER),
    "copyLogFromBuffer": $._encode_implicit(_TagClass.context, 29, () => _encode_DOupdate_copyLogFromBuffer, $.BER),
}, $.BER); }
    return _cached_encoder_for_DOupdate(value, elGetter);
}


/* eslint-enable */
