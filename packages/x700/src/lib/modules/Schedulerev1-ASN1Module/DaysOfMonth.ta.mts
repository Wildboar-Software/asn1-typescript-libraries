/* eslint-disable */
import {
    BIT_STRING,
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

/**
 * @summary DaysOfMonth
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DaysOfMonth ::= SEQUENCE {
 *   daysFromFirst  [0]  BIT STRING(SIZE (31)),
 *   daysFromLast   [1]  BIT STRING(SIZE (31))
 * }
 * ```
 *
 * @class
 */
export class DaysOfMonth {
    constructor(
        /**
         * @summary `daysFromFirst`.
         * @public
         * @readonly
         */
        readonly daysFromFirst: BIT_STRING,
        /**
         * @summary `daysFromLast`.
         * @public
         * @readonly
         */
        readonly daysFromLast: BIT_STRING
    ) {}

    /**
     * @summary Restructures an object into a DaysOfMonth
     * @description
     *
     * This takes an `object` and converts it to a `DaysOfMonth`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DaysOfMonth`.
     * @returns {DaysOfMonth}
     */
    public static _from_object(
        _o: { [_K in keyof DaysOfMonth]: DaysOfMonth[_K] }
    ): DaysOfMonth {
        return new DaysOfMonth(_o.daysFromFirst, _o.daysFromLast);
    }
}

/**
 * @summary The Leading Root Component Types of DaysOfMonth
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DaysOfMonth: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'daysFromFirst',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'daysFromLast',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of DaysOfMonth
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DaysOfMonth: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of DaysOfMonth
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DaysOfMonth: $.ComponentSpec[] = [];

let _cached_decoder_for_DaysOfMonth: $.ASN1Decoder<DaysOfMonth> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DaysOfMonth
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DaysOfMonth} The decoded data structure.
 */
export function _decode_DaysOfMonth(el: _Element): DaysOfMonth {
    if (!_cached_decoder_for_DaysOfMonth) {
        _cached_decoder_for_DaysOfMonth = function (el: _Element): DaysOfMonth {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'DaysOfMonth contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'daysFromFirst';
            sequence[1].name = 'daysFromLast';
            let daysFromFirst!: BIT_STRING;
            let daysFromLast!: BIT_STRING;
            daysFromFirst = $._decode_implicit<BIT_STRING>(
                () => $._decodeBitString
            )(sequence[0]);
            daysFromLast = $._decode_implicit<BIT_STRING>(
                () => $._decodeBitString
            )(sequence[1]);
            return new DaysOfMonth(daysFromFirst, daysFromLast);
        };
    }
    return _cached_decoder_for_DaysOfMonth(el);
}

let _cached_encoder_for_DaysOfMonth: $.ASN1Encoder<DaysOfMonth> | null = null;

/**
 * @summary Encodes a(n) DaysOfMonth into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DaysOfMonth, encoded as an ASN.1 Element.
 */
export function _encode_DaysOfMonth(
    value: DaysOfMonth,
    elGetter: $.ASN1Encoder<DaysOfMonth>
): _Element {
    if (!_cached_encoder_for_DaysOfMonth) {
        _cached_encoder_for_DaysOfMonth = function (
            value: DaysOfMonth        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => $._encodeBitString,
                            $.BER
                        )(value.daysFromFirst, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => $._encodeBitString,
                            $.BER
                        )(value.daysFromLast, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_DaysOfMonth(value, elGetter);
}


/* eslint-enable */
