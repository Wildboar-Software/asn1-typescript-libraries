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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
/* START_OF_SYMBOL_DEFINITION PointToPoint */
/**
 * @summary PointToPoint
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PointToPoint ::= SEQUENCE {
 *   fromTp  ObjectInstance,
 *   toTp    ObjectInstance,
 *   xCon    ObjectInstance
 * }
 * ```
 *
 * @class
 */
export class PointToPoint {
    constructor(
        /**
         * @summary `fromTp`.
         * @public
         * @readonly
         */
        readonly fromTp: ObjectInstance,
        /**
         * @summary `toTp`.
         * @public
         * @readonly
         */
        readonly toTp: ObjectInstance,
        /**
         * @summary `xCon`.
         * @public
         * @readonly
         */
        readonly xCon: ObjectInstance
    ) {}

    /**
     * @summary Restructures an object into a PointToPoint
     * @description
     *
     * This takes an `object` and converts it to a `PointToPoint`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PointToPoint`.
     * @returns {PointToPoint}
     */
    public static _from_object(
        _o: { [_K in keyof PointToPoint]: PointToPoint[_K] }
    ): PointToPoint {
        return new PointToPoint(_o.fromTp, _o.toTp, _o.xCon);
    }
}
/* END_OF_SYMBOL_DEFINITION PointToPoint */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PointToPoint */
/**
 * @summary The Leading Root Component Types of PointToPoint
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PointToPoint: $.ComponentSpec[] = [
    new $.ComponentSpec('fromTp', false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec('toTp', false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec('xCon', false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PointToPoint */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PointToPoint */
/**
 * @summary The Trailing Root Component Types of PointToPoint
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PointToPoint: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PointToPoint */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PointToPoint */
/**
 * @summary The Extension Addition Component Types of PointToPoint
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PointToPoint: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PointToPoint */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PointToPoint */
let _cached_decoder_for_PointToPoint: $.ASN1Decoder<PointToPoint> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PointToPoint */

/* START_OF_SYMBOL_DEFINITION _decode_PointToPoint */
/**
 * @summary Decodes an ASN.1 element into a(n) PointToPoint
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PointToPoint} The decoded data structure.
 */
export function _decode_PointToPoint(el: _Element) {
    if (!_cached_decoder_for_PointToPoint) {
        _cached_decoder_for_PointToPoint = function (
            el: _Element
        ): PointToPoint {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    'PointToPoint contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'fromTp';
            sequence[1].name = 'toTp';
            sequence[2].name = 'xCon';
            let fromTp!: ObjectInstance;
            let toTp!: ObjectInstance;
            let xCon!: ObjectInstance;
            fromTp = _decode_ObjectInstance(sequence[0]);
            toTp = _decode_ObjectInstance(sequence[1]);
            xCon = _decode_ObjectInstance(sequence[2]);
            return new PointToPoint(fromTp, toTp, xCon);
        };
    }
    return _cached_decoder_for_PointToPoint(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PointToPoint */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PointToPoint */
let _cached_encoder_for_PointToPoint: $.ASN1Encoder<PointToPoint> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PointToPoint */

/* START_OF_SYMBOL_DEFINITION _encode_PointToPoint */
/**
 * @summary Encodes a(n) PointToPoint into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PointToPoint, encoded as an ASN.1 Element.
 */
export function _encode_PointToPoint(
    value: PointToPoint,
    elGetter: $.ASN1Encoder<PointToPoint>
) {
    if (!_cached_encoder_for_PointToPoint) {
        _cached_encoder_for_PointToPoint = function (
            value: PointToPoint        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.fromTp,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.toTp,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.xCon,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PointToPoint(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PointToPoint */

/* eslint-enable */
