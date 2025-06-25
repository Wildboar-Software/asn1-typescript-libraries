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
    ConnectivityEndPoint,
    _decode_ConnectivityEndPoint,
    _encode_ConnectivityEndPoint,
} from '../M3100ASN1TypeModule2/ConnectivityEndPoint.ta.mjs';

/**
 * @summary PtoPoint
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PtoPoint ::= SEQUENCE {aEnd  ConnectivityEndPoint,
 *                        zEnd  ConnectivityEndPoint
 * }
 * ```
 *
 * @class
 */
export class PtoPoint {
    constructor(
        /**
         * @summary `aEnd`.
         * @public
         * @readonly
         */
        readonly aEnd: ConnectivityEndPoint,
        /**
         * @summary `zEnd`.
         * @public
         * @readonly
         */
        readonly zEnd: ConnectivityEndPoint
    ) {}

    /**
     * @summary Restructures an object into a PtoPoint
     * @description
     *
     * This takes an `object` and converts it to a `PtoPoint`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PtoPoint`.
     * @returns {PtoPoint}
     */
    public static _from_object(
        _o: { [_K in keyof PtoPoint]: PtoPoint[_K] }
    ): PtoPoint {
        return new PtoPoint(_o.aEnd, _o.zEnd);
    }
}


/**
 * @summary The Leading Root Component Types of PtoPoint
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PtoPoint: $.ComponentSpec[] = [
    new $.ComponentSpec('aEnd', false, $.hasAnyTag),
    new $.ComponentSpec('zEnd', false, $.hasAnyTag),
];


/**
 * @summary The Trailing Root Component Types of PtoPoint
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PtoPoint: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of PtoPoint
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PtoPoint: $.ComponentSpec[] = [];


let _cached_decoder_for_PtoPoint: $.ASN1Decoder<PtoPoint> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PtoPoint
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PtoPoint} The decoded data structure.
 */
export function _decode_PtoPoint(el: _Element): PtoPoint {
    if (!_cached_decoder_for_PtoPoint) {
        _cached_decoder_for_PtoPoint = function (el: _Element): PtoPoint {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'PtoPoint contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'aEnd';
            sequence[1].name = 'zEnd';
            let aEnd!: ConnectivityEndPoint;
            let zEnd!: ConnectivityEndPoint;
            aEnd = _decode_ConnectivityEndPoint(sequence[0]);
            zEnd = _decode_ConnectivityEndPoint(sequence[1]);
            return new PtoPoint(aEnd, zEnd);
        };
    }
    return _cached_decoder_for_PtoPoint(el);
}


let _cached_encoder_for_PtoPoint: $.ASN1Encoder<PtoPoint> | null = null;


/**
 * @summary Encodes a(n) PtoPoint into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PtoPoint, encoded as an ASN.1 Element.
 */
export function _encode_PtoPoint(
    value: PtoPoint,
    elGetter: $.ASN1Encoder<PtoPoint>
): _Element {
    if (!_cached_encoder_for_PtoPoint) {
        _cached_encoder_for_PtoPoint = function (
            value: PtoPoint        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ConnectivityEndPoint(
                            value.aEnd,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ConnectivityEndPoint(
                            value.zEnd,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PtoPoint(value, elGetter);
}


/* eslint-enable */
