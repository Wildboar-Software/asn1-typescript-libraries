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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary RxTxAPS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RxTxAPS ::= SEQUENCE {rxAPSvalue  [0]  INTEGER,
 *                       txAPSvalue  [1]  INTEGER
 * }
 * ```
 *
 * @class
 */
export class RxTxAPS {
    constructor(
        /**
         * @summary `rxAPSvalue`.
         * @public
         * @readonly
         */
        readonly rxAPSvalue: INTEGER,
        /**
         * @summary `txAPSvalue`.
         * @public
         * @readonly
         */
        readonly txAPSvalue: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a RxTxAPS
     * @description
     *
     * This takes an `object` and converts it to a `RxTxAPS`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RxTxAPS`.
     * @returns {RxTxAPS}
     */
    public static _from_object(
        _o: { [_K in keyof RxTxAPS]: RxTxAPS[_K] }
    ): RxTxAPS {
        return new RxTxAPS(_o.rxAPSvalue, _o.txAPSvalue);
    }
}


/**
 * @summary The Leading Root Component Types of RxTxAPS
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RxTxAPS: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'rxAPSvalue',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'txAPSvalue',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
];


/**
 * @summary The Trailing Root Component Types of RxTxAPS
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RxTxAPS: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of RxTxAPS
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RxTxAPS: $.ComponentSpec[] = [];


let _cached_decoder_for_RxTxAPS: $.ASN1Decoder<RxTxAPS> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) RxTxAPS
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RxTxAPS} The decoded data structure.
 */
export function _decode_RxTxAPS(el: _Element): RxTxAPS {
    if (!_cached_decoder_for_RxTxAPS) {
        _cached_decoder_for_RxTxAPS = function (el: _Element): RxTxAPS {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'RxTxAPS contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'rxAPSvalue';
            sequence[1].name = 'txAPSvalue';
            let rxAPSvalue!: INTEGER;
            let txAPSvalue!: INTEGER;
            rxAPSvalue = $._decode_implicit<INTEGER>(() => $._decodeInteger)(
                sequence[0]
            );
            txAPSvalue = $._decode_implicit<INTEGER>(() => $._decodeInteger)(
                sequence[1]
            );
            return new RxTxAPS(rxAPSvalue, txAPSvalue);
        };
    }
    return _cached_decoder_for_RxTxAPS(el);
}


let _cached_encoder_for_RxTxAPS: $.ASN1Encoder<RxTxAPS> | null = null;


/**
 * @summary Encodes a(n) RxTxAPS into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RxTxAPS, encoded as an ASN.1 Element.
 */
export function _encode_RxTxAPS(
    value: RxTxAPS,
    elGetter: $.ASN1Encoder<RxTxAPS>
): _Element {
    if (!_cached_encoder_for_RxTxAPS) {
        _cached_encoder_for_RxTxAPS = function (
            value: RxTxAPS        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => $._encodeInteger,
                            $.BER
                        )(value.rxAPSvalue, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => $._encodeInteger,
                            $.BER
                        )(value.txAPSvalue, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_RxTxAPS(value, elGetter);
}


/* eslint-enable */
