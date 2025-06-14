/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION Timer */
/**
 * @summary Timer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Timer ::= SEQUENCE {
 *   exponent  [1]  INTEGER(-62..63),
 *   mantissa  [2]  INTEGER(0..65535)
 * }
 * ```
 *
 * @class
 */
export class Timer {
    constructor(
        /**
         * @summary `exponent`.
         * @public
         * @readonly
         */
        readonly exponent: INTEGER,
        /**
         * @summary `mantissa`.
         * @public
         * @readonly
         */
        readonly mantissa: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a Timer
     * @description
     *
     * This takes an `object` and converts it to a `Timer`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Timer`.
     * @returns {Timer}
     */
    public static _from_object(_o: { [_K in keyof Timer]: Timer[_K] }): Timer {
        return new Timer(_o.exponent, _o.mantissa);
    }
}
/* END_OF_SYMBOL_DEFINITION Timer */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Timer */
/**
 * @summary The Leading Root Component Types of Timer
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Timer: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'exponent',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'mantissa',
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Timer */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Timer */
/**
 * @summary The Trailing Root Component Types of Timer
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Timer: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Timer */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Timer */
/**
 * @summary The Extension Addition Component Types of Timer
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Timer: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Timer */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Timer */
let _cached_decoder_for_Timer: $.ASN1Decoder<Timer> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Timer */

/* START_OF_SYMBOL_DEFINITION _decode_Timer */
/**
 * @summary Decodes an ASN.1 element into a(n) Timer
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Timer} The decoded data structure.
 */
export function _decode_Timer(el: _Element) {
    if (!_cached_decoder_for_Timer) {
        _cached_decoder_for_Timer = function (el: _Element): Timer {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'Timer contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'exponent';
            sequence[1].name = 'mantissa';
            let exponent!: INTEGER;
            let mantissa!: INTEGER;
            exponent = $._decode_implicit<INTEGER>(() => $._decodeInteger)(
                sequence[0]
            );
            mantissa = $._decode_implicit<INTEGER>(() => $._decodeInteger)(
                sequence[1]
            );
            return new Timer(exponent, mantissa);
        };
    }
    return _cached_decoder_for_Timer(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Timer */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Timer */
let _cached_encoder_for_Timer: $.ASN1Encoder<Timer> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Timer */

/* START_OF_SYMBOL_DEFINITION _encode_Timer */
/**
 * @summary Encodes a(n) Timer into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Timer, encoded as an ASN.1 Element.
 */
export function _encode_Timer(value: Timer, elGetter: $.ASN1Encoder<Timer>) {
    if (!_cached_encoder_for_Timer) {
        _cached_encoder_for_Timer = function (
            value: Timer        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => $._encodeInteger,
                            $.BER
                        )(value.exponent, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            2,
                            () => $._encodeInteger,
                            $.BER
                        )(value.mantissa, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Timer(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Timer */

/* eslint-enable */
