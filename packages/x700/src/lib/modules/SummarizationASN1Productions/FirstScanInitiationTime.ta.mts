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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    GlobalTime,
    _decode_GlobalTime,
    _encode_GlobalTime,
} from '../SummarizationASN1Productions/GlobalTime.ta.mjs';
/**
 * @summary FirstScanInitiationTime
 * @description
 *
 * Start time of the first scan retained in a buffered
 * scanner’s report (`{summarizationAttribute 8}`).
 * Required in `BufferedScanReportInformation` when
 * `timeStampReportMode` is present and non-zero.
 * ITU-T Rec. X.738 (11/93)
 * [§8.2.2.3.2](https://www.itu.int/rec/T-REC-X.738-199311-I),
 * A.4, A.9.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FirstScanInitiationTime  ::=  GlobalTime
 * ```
 */
export type FirstScanInitiationTime = GlobalTime; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) FirstScanInitiationTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FirstScanInitiationTime} The decoded data structure.
 */
export const _decode_FirstScanInitiationTime: $.ASN1Decoder<FirstScanInitiationTime> = _decode_GlobalTime;

/**
 * @summary Encodes a(n) FirstScanInitiationTime into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FirstScanInitiationTime, encoded as an ASN.1 Element.
 */
export const _encode_FirstScanInitiationTime: $.ASN1Encoder<FirstScanInitiationTime> = _encode_GlobalTime;


/* eslint-enable */
