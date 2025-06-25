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
    Controls,
    _decode_Controls,
    _encode_Controls,
} from '../MTSAbstractService/Controls.ta.mjs';
/**
 * @summary SubmissionControls
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubmissionControls  ::=
 *   Controls
 *     (WITH COMPONENTS {
 *        ...,
 *        permissible-content-types              ABSENT,
 *        permissible-encoded-information-types  ABSENT
 *      })
 * ```
 */
export type SubmissionControls = Controls; // DefinedType

let _cached_decoder_for_SubmissionControls: $.ASN1Decoder<SubmissionControls> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubmissionControls
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubmissionControls} The decoded data structure.
 */
export function _decode_SubmissionControls(el: _Element): SubmissionControls {
    if (!_cached_decoder_for_SubmissionControls) {
        _cached_decoder_for_SubmissionControls = _decode_Controls;
    }
    return _cached_decoder_for_SubmissionControls(el);
}

let _cached_encoder_for_SubmissionControls: $.ASN1Encoder<SubmissionControls> | null = null;

/**
 * @summary Encodes a(n) SubmissionControls into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubmissionControls, encoded as an ASN.1 Element.
 */
export function _encode_SubmissionControls(
    value: SubmissionControls,
    elGetter: $.ASN1Encoder<SubmissionControls>
): _Element {
    if (!_cached_encoder_for_SubmissionControls) {
        _cached_encoder_for_SubmissionControls = _encode_Controls;
    }
    return _cached_encoder_for_SubmissionControls(value, elGetter);
}


/* eslint-enable */
