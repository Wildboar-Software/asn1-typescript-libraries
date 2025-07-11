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
    SeverityIndicatingThreshold,
    _decode_SeverityIndicatingThreshold,
    _encode_SeverityIndicatingThreshold,
} from '../MetricModule/SeverityIndicatingThreshold.ta.mjs';
/**
 * @summary SeverityIndicatingGaugeThreshold_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SeverityIndicatingGaugeThreshold-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class SeverityIndicatingGaugeThreshold_Item {
    constructor(
        /**
         * @summary `notifyLow`.
         * @public
         * @readonly
         */
        readonly notifyLow: SeverityIndicatingThreshold,
        /**
         * @summary `notifyHigh`.
         * @public
         * @readonly
         */
        readonly notifyHigh: SeverityIndicatingThreshold
    ) {}

    /**
     * @summary Restructures an object into a SeverityIndicatingGaugeThreshold_Item
     * @description
     *
     * This takes an `object` and converts it to a `SeverityIndicatingGaugeThreshold_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SeverityIndicatingGaugeThreshold_Item`.
     * @returns {SeverityIndicatingGaugeThreshold_Item}
     */
    public static _from_object(
        _o: {
            [_K in keyof SeverityIndicatingGaugeThreshold_Item]: SeverityIndicatingGaugeThreshold_Item[_K];
        }
    ): SeverityIndicatingGaugeThreshold_Item {
        return new SeverityIndicatingGaugeThreshold_Item(
            _o.notifyLow,
            _o.notifyHigh
        );
    }
}

/**
 * @summary The Leading Root Component Types of SeverityIndicatingGaugeThreshold_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SeverityIndicatingGaugeThreshold_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'notifyLow',
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        'notifyHigh',
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
];

/**
 * @summary The Trailing Root Component Types of SeverityIndicatingGaugeThreshold_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SeverityIndicatingGaugeThreshold_Item: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of SeverityIndicatingGaugeThreshold_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SeverityIndicatingGaugeThreshold_Item: $.ComponentSpec[] = [];

let _cached_decoder_for_SeverityIndicatingGaugeThreshold_Item: $.ASN1Decoder<SeverityIndicatingGaugeThreshold_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SeverityIndicatingGaugeThreshold_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SeverityIndicatingGaugeThreshold_Item} The decoded data structure.
 */
export function _decode_SeverityIndicatingGaugeThreshold_Item(el: _Element): SeverityIndicatingGaugeThreshold_Item {
    if (!_cached_decoder_for_SeverityIndicatingGaugeThreshold_Item) {
        _cached_decoder_for_SeverityIndicatingGaugeThreshold_Item = function (
            el: _Element
        ): SeverityIndicatingGaugeThreshold_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'SeverityIndicatingGaugeThreshold-Item contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'notifyLow';
            sequence[1].name = 'notifyHigh';
            let notifyLow!: SeverityIndicatingThreshold;
            let notifyHigh!: SeverityIndicatingThreshold;
            notifyLow = _decode_SeverityIndicatingThreshold(sequence[0]);
            notifyHigh = _decode_SeverityIndicatingThreshold(sequence[1]);
            return new SeverityIndicatingGaugeThreshold_Item(
                notifyLow,
                notifyHigh
            );
        };
    }
    return _cached_decoder_for_SeverityIndicatingGaugeThreshold_Item(el);
}

let _cached_encoder_for_SeverityIndicatingGaugeThreshold_Item: $.ASN1Encoder<SeverityIndicatingGaugeThreshold_Item> | null = null;

/**
 * @summary Encodes a(n) SeverityIndicatingGaugeThreshold_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SeverityIndicatingGaugeThreshold_Item, encoded as an ASN.1 Element.
 */
export function _encode_SeverityIndicatingGaugeThreshold_Item(
    value: SeverityIndicatingGaugeThreshold_Item,
    elGetter: $.ASN1Encoder<SeverityIndicatingGaugeThreshold_Item>
): _Element {
    if (!_cached_encoder_for_SeverityIndicatingGaugeThreshold_Item) {
        _cached_encoder_for_SeverityIndicatingGaugeThreshold_Item = function (
            value: SeverityIndicatingGaugeThreshold_Item        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_SeverityIndicatingThreshold(
                            value.notifyLow,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_SeverityIndicatingThreshold(
                            value.notifyHigh,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SeverityIndicatingGaugeThreshold_Item(
        value,
        elGetter
    );
}


/* eslint-enable */
