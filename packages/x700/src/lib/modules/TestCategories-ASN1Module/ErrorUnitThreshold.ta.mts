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
    UnitsType,
    _decode_UnitsType,
    _encode_UnitsType,
} from '../TestCategories-ASN1Module/UnitsType.ta.mjs';
import {
    UnitsTotal,
    _decode_UnitsTotal,
    _encode_UnitsTotal,
} from '../TestCategories-ASN1Module/UnitsTotal.ta.mjs';
/**
 * @summary ErrorUnitThreshold
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ErrorUnitThreshold ::= SEQUENCE {
 *   unitType    [0]  UnitsType,
 *   unitsTotal  [1]  UnitsTotal
 * }
 * ```
 *
 * @class
 */
export class ErrorUnitThreshold {
    constructor(
        /**
         * @summary `unitType`.
         * @public
         * @readonly
         */
        readonly unitType: UnitsType,
        /**
         * @summary `unitsTotal`.
         * @public
         * @readonly
         */
        readonly unitsTotal: UnitsTotal
    ) {}

    /**
     * @summary Restructures an object into a ErrorUnitThreshold
     * @description
     *
     * This takes an `object` and converts it to a `ErrorUnitThreshold`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ErrorUnitThreshold`.
     * @returns {ErrorUnitThreshold}
     */
    public static _from_object(
        _o: { [_K in keyof ErrorUnitThreshold]: ErrorUnitThreshold[_K] }
    ): ErrorUnitThreshold {
        return new ErrorUnitThreshold(_o.unitType, _o.unitsTotal);
    }
}

/**
 * @summary The Leading Root Component Types of ErrorUnitThreshold
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ErrorUnitThreshold: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'unitType',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'unitsTotal',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of ErrorUnitThreshold
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ErrorUnitThreshold: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ErrorUnitThreshold
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ErrorUnitThreshold: $.ComponentSpec[] = [];

let _cached_decoder_for_ErrorUnitThreshold: $.ASN1Decoder<ErrorUnitThreshold> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ErrorUnitThreshold
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ErrorUnitThreshold} The decoded data structure.
 */
export function _decode_ErrorUnitThreshold(el: _Element) {
    if (!_cached_decoder_for_ErrorUnitThreshold) {
        _cached_decoder_for_ErrorUnitThreshold = function (
            el: _Element
        ): ErrorUnitThreshold {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'ErrorUnitThreshold contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'unitType';
            sequence[1].name = 'unitsTotal';
            let unitType!: UnitsType;
            let unitsTotal!: UnitsTotal;
            unitType = $._decode_implicit<UnitsType>(() => _decode_UnitsType)(
                sequence[0]
            );
            unitsTotal = $._decode_implicit<UnitsTotal>(
                () => _decode_UnitsTotal
            )(sequence[1]);
            return new ErrorUnitThreshold(unitType, unitsTotal);
        };
    }
    return _cached_decoder_for_ErrorUnitThreshold(el);
}

let _cached_encoder_for_ErrorUnitThreshold: $.ASN1Encoder<ErrorUnitThreshold> | null = null;

/**
 * @summary Encodes a(n) ErrorUnitThreshold into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ErrorUnitThreshold, encoded as an ASN.1 Element.
 */
export function _encode_ErrorUnitThreshold(
    value: ErrorUnitThreshold,
    elGetter: $.ASN1Encoder<ErrorUnitThreshold>
) {
    if (!_cached_encoder_for_ErrorUnitThreshold) {
        _cached_encoder_for_ErrorUnitThreshold = function (
            value: ErrorUnitThreshold        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_UnitsType,
                            $.BER
                        )(value.unitType, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => _encode_UnitsTotal,
                            $.BER
                        )(value.unitsTotal, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ErrorUnitThreshold(value, elGetter);
}


/* eslint-enable */
