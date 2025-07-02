/* eslint-disable */
import {
    GraphicString,
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
    BackupResult_offLine_result,
    _decode_BackupResult_offLine_result,
    _encode_BackupResult_offLine_result,
} from '../SWMF/BackupResult-offLine-result.ta.mjs';
/**
 * @summary BackupResult_offLine
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BackupResult-offLine ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class BackupResult_offLine {
    constructor(
        /**
         * @summary `destination`.
         * @public
         * @readonly
         */
        readonly destination: GraphicString,
        /**
         * @summary `result`.
         * @public
         * @readonly
         */
        readonly result: BackupResult_offLine_result
    ) {}

    /**
     * @summary Restructures an object into a BackupResult_offLine
     * @description
     *
     * This takes an `object` and converts it to a `BackupResult_offLine`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BackupResult_offLine`.
     * @returns {BackupResult_offLine}
     */
    public static _from_object(
        _o: { [_K in keyof BackupResult_offLine]: BackupResult_offLine[_K] }
    ): BackupResult_offLine {
        return new BackupResult_offLine(_o.destination, _o.result);
    }
}

/**
 * @summary The Leading Root Component Types of BackupResult_offLine
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BackupResult_offLine: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'destination',
        false,
        $.hasTag(_TagClass.universal, 25)
    ),
    new $.ComponentSpec('result', false, $.hasAnyTag),
];

/**
 * @summary The Trailing Root Component Types of BackupResult_offLine
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BackupResult_offLine: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of BackupResult_offLine
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BackupResult_offLine: $.ComponentSpec[] = [];

let _cached_decoder_for_BackupResult_offLine: $.ASN1Decoder<BackupResult_offLine> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BackupResult_offLine
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BackupResult_offLine} The decoded data structure.
 */
export function _decode_BackupResult_offLine(el: _Element): BackupResult_offLine {
    if (!_cached_decoder_for_BackupResult_offLine) {
        _cached_decoder_for_BackupResult_offLine = function (
            el: _Element
        ): BackupResult_offLine {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'BackupResult-offLine contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'destination';
            sequence[1].name = 'result';
            let destination!: GraphicString;
            let result!: BackupResult_offLine_result;
            destination = $._decodeGraphicString(sequence[0]);
            result = _decode_BackupResult_offLine_result(sequence[1]);
            return new BackupResult_offLine(destination, result);
        };
    }
    return _cached_decoder_for_BackupResult_offLine(el);
}

let _cached_encoder_for_BackupResult_offLine: $.ASN1Encoder<BackupResult_offLine> | null = null;

/**
 * @summary Encodes a(n) BackupResult_offLine into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BackupResult_offLine, encoded as an ASN.1 Element.
 */
export function _encode_BackupResult_offLine(
    value: BackupResult_offLine,
    elGetter: $.ASN1Encoder<BackupResult_offLine>
): _Element {
    if (!_cached_encoder_for_BackupResult_offLine) {
        _cached_encoder_for_BackupResult_offLine = function (
            value: BackupResult_offLine        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeGraphicString(
                            value.destination,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_BackupResult_offLine_result(
                            value.result,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_BackupResult_offLine(value, elGetter);
}


/* eslint-enable */
