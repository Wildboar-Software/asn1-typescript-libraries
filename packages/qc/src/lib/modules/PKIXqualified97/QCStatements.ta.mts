/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    QCStatement,
    _decode_QCStatement,
    _encode_QCStatement,
} from "../PKIXqualified97/QCStatement.ta.mjs";

/**
 * @summary QCStatements
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * QCStatements  ::=  SEQUENCE OF QCStatement
 * ```
 */
export type QCStatements = QCStatement[]; // SequenceOfType


let _cached_decoder_for_QCStatements: $.ASN1Decoder<QCStatements> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) QCStatements
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {QCStatements} The decoded data structure.
 */
export function _decode_QCStatements(el: _Element): QCStatements {
    if (!_cached_decoder_for_QCStatements) {
        _cached_decoder_for_QCStatements = $._decodeSequenceOf<QCStatement>(
            () => _decode_QCStatement
        );
    }
    return _cached_decoder_for_QCStatements(el);
}


let _cached_encoder_for_QCStatements: $.ASN1Encoder<QCStatements> | null = null;


/**
 * @summary Encodes a(n) QCStatements into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The QCStatements, encoded as an ASN.1 Element.
 */
export function _encode_QCStatements(
    value: QCStatements,
    elGetter: $.ASN1Encoder<QCStatements>
): _Element {
    if (!_cached_encoder_for_QCStatements) {
        _cached_encoder_for_QCStatements = $._encodeSequenceOf<QCStatement>(
            () => _encode_QCStatement,
            $.BER
        );
    }
    return _cached_encoder_for_QCStatements(value, elGetter);
}


/* eslint-enable */
