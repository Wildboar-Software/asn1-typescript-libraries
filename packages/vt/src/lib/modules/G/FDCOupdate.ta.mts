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
import { FDCOupdate_Item, _decode_FDCOupdate_Item, _encode_FDCOupdate_Item } from "../G/FDCOupdate-Item.ta.mjs";


/**
 * @summary FDCOupdate
 * @description
 *
 * Sequence of Field Definition Record (FDR) updates for a Field
 * Definition Control Object. ISO/IEC 9040:1997 §14.2 a, §20.3.3;
 * ISO/IEC 9041-1:1997 §12.2.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FDCOupdate  ::=  SEQUENCE OF SEQUENCE {
 *     labelFCoordinate    [0] IMPLICIT INTEGER,
 *     labelZCoordinate    [1] IMPLICIT INTEGER OPTIONAL,
 *     status              [2] IMPLICIT INTEGER {
 *         active   (0),
 *         inactive (1),
 *         void     (2)
 *     } OPTIONAL,
 *     extent              [3] IMPLICIT SEQUENCE OF SEQUENCE {
 *         position  [0] IMPLICIT MeasurePair,
 *         dimension [1] IMPLICIT MeasurePair
 *     } OPTIONAL,
 *     attributes          [4] IMPLICIT SEQUENCE {
 *         graphicCharacterRepertoire [0] IMPLICIT INTEGER OPTIONAL,
 *         foregroundColour           [1] IMPLICIT INTEGER OPTIONAL,
 *         backgroundColour           [2] IMPLICIT INTEGER OPTIONAL,
 *         emphasis                   [3] IMPLICIT PrintableString OPTIONAL,
 *         font                       [4] IMPLICIT INTEGER OPTIONAL
 *         -- value of zero for any of the integer items in attributes implies the "null"value,
 *     } OPTIONAL,
 *     nextField           [5] IMPLICIT INTEGER OPTIONAL,
 *     previousField       [6] IMPLICIT INTEGER OPTIONAL,
 *     -- for tags 5 & 6, a zero value implies end of navigation path; a negative value implies "void"
 *     transmissionPolicy  [7] IMPLICIT INTEGER {
 *         all                (0),
 *         modifiedAllContent (1),
 *         modifiedPart       (2),
 *         none               (3),
 *         refTPCO            (4)
 *     } OPTIONAL,
 *     entryControlList    [8] IMPLICIT SEQUENCE OF EntryControl OPTIONAL
 * }
 * ```
 */
export
type FDCOupdate = FDCOupdate_Item[]; // SequenceOfType

let _cached_decoder_for_FDCOupdate: $.ASN1Decoder<FDCOupdate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FDCOupdate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FDCOupdate (el: _Element): FDCOupdate {
    if (!_cached_decoder_for_FDCOupdate) { _cached_decoder_for_FDCOupdate = $._decodeSequenceOf<FDCOupdate_Item>(() => _decode_FDCOupdate_Item); }
    return _cached_decoder_for_FDCOupdate(el);
}

let _cached_encoder_for_FDCOupdate: $.ASN1Encoder<FDCOupdate> | null = null;

/**
 * @summary Encodes a(n) FDCOupdate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FDCOupdate, encoded as an ASN.1 Element.
 */
export
function _encode_FDCOupdate (value: FDCOupdate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FDCOupdate) { _cached_encoder_for_FDCOupdate = $._encodeSequenceOf<FDCOupdate_Item>(() => _encode_FDCOupdate_Item, $.BER); }
    return _cached_encoder_for_FDCOupdate(value, elGetter);
}


/* eslint-enable */
