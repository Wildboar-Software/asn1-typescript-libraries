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
 * @summary ConnectivityThreshold_time
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConnectivityThreshold-time ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class ConnectivityThreshold_time {
    constructor(
        /**
         * @summary `unitsType`.
         * @public
         * @readonly
         */
        readonly unitsType: UnitsType,
        /**
         * @summary `unitsTotal`.
         * @public
         * @readonly
         */
        readonly unitsTotal: UnitsTotal
    ) {}

    /**
     * @summary Restructures an object into a ConnectivityThreshold_time
     * @description
     *
     * This takes an `object` and converts it to a `ConnectivityThreshold_time`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConnectivityThreshold_time`.
     * @returns {ConnectivityThreshold_time}
     */
    public static _from_object(
        _o: {
            [_K in keyof ConnectivityThreshold_time]: ConnectivityThreshold_time[_K];
        }
    ): ConnectivityThreshold_time {
        return new ConnectivityThreshold_time(_o.unitsType, _o.unitsTotal);
    }
}

/**
 * @summary The Leading Root Component Types of ConnectivityThreshold_time
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ConnectivityThreshold_time: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'unitsType',
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        'unitsTotal',
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of ConnectivityThreshold_time
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ConnectivityThreshold_time: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ConnectivityThreshold_time
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ConnectivityThreshold_time: $.ComponentSpec[] = [];

let _cached_decoder_for_ConnectivityThreshold_time: $.ASN1Decoder<ConnectivityThreshold_time> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectivityThreshold_time
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConnectivityThreshold_time} The decoded data structure.
 */
export function _decode_ConnectivityThreshold_time(el: _Element): ConnectivityThreshold_time {
    if (!_cached_decoder_for_ConnectivityThreshold_time) {
        _cached_decoder_for_ConnectivityThreshold_time = function (
            el: _Element
        ): ConnectivityThreshold_time {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'ConnectivityThreshold-time contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'unitsType';
            sequence[1].name = 'unitsTotal';
            let unitsType!: UnitsType;
            let unitsTotal!: UnitsTotal;
            unitsType = _decode_UnitsType(sequence[0]);
            unitsTotal = _decode_UnitsTotal(sequence[1]);
            return new ConnectivityThreshold_time(unitsType, unitsTotal);
        };
    }
    return _cached_decoder_for_ConnectivityThreshold_time(el);
}

let _cached_encoder_for_ConnectivityThreshold_time: $.ASN1Encoder<ConnectivityThreshold_time> | null = null;

/**
 * @summary Encodes a(n) ConnectivityThreshold_time into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectivityThreshold_time, encoded as an ASN.1 Element.
 */
export function _encode_ConnectivityThreshold_time(
    value: ConnectivityThreshold_time,
    elGetter: $.ASN1Encoder<ConnectivityThreshold_time>
): _Element {
    if (!_cached_encoder_for_ConnectivityThreshold_time) {
        _cached_encoder_for_ConnectivityThreshold_time = function (
            value: ConnectivityThreshold_time        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_UnitsType(
                            value.unitsType,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_UnitsTotal(
                            value.unitsTotal,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ConnectivityThreshold_time(value, elGetter);
}


/* eslint-enable */
