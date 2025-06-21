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
import {
    PointToMultipoint_toTps_Item,
    _decode_PointToMultipoint_toTps_Item,
    _encode_PointToMultipoint_toTps_Item,
} from '../ASN1DefinedTypesModule/PointToMultipoint-toTps-Item.ta.mjs';

/**
 * @summary PointToMultipoint
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PointToMultipoint ::= SEQUENCE {
 *   fromTp  ObjectInstance,
 *   toTps
 *     SET OF SEQUENCE {tp           ObjectInstance,
 *                      xConnection  ObjectInstance},
 *   mpXCon  ObjectInstance
 * }
 * ```
 *
 * @class
 */
export class PointToMultipoint {
    constructor(
        /**
         * @summary `fromTp`.
         * @public
         * @readonly
         */
        readonly fromTp: ObjectInstance,
        /**
         * @summary `toTps`.
         * @public
         * @readonly
         */
        readonly toTps: PointToMultipoint_toTps_Item[],
        /**
         * @summary `mpXCon`.
         * @public
         * @readonly
         */
        readonly mpXCon: ObjectInstance
    ) {}

    /**
     * @summary Restructures an object into a PointToMultipoint
     * @description
     *
     * This takes an `object` and converts it to a `PointToMultipoint`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PointToMultipoint`.
     * @returns {PointToMultipoint}
     */
    public static _from_object(
        _o: { [_K in keyof PointToMultipoint]: PointToMultipoint[_K] }
    ): PointToMultipoint {
        return new PointToMultipoint(_o.fromTp, _o.toTps, _o.mpXCon);
    }
}


/**
 * @summary The Leading Root Component Types of PointToMultipoint
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PointToMultipoint: $.ComponentSpec[] = [
    new $.ComponentSpec('fromTp', false, $.hasAnyTag),
    new $.ComponentSpec(
        'toTps',
        false,
        $.hasTag(_TagClass.universal, 17)
    ),
    new $.ComponentSpec('mpXCon', false, $.hasAnyTag),
];


/**
 * @summary The Trailing Root Component Types of PointToMultipoint
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PointToMultipoint: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of PointToMultipoint
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PointToMultipoint: $.ComponentSpec[] = [];


let _cached_decoder_for_PointToMultipoint: $.ASN1Decoder<PointToMultipoint> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PointToMultipoint
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PointToMultipoint} The decoded data structure.
 */
export function _decode_PointToMultipoint(el: _Element) {
    if (!_cached_decoder_for_PointToMultipoint) {
        _cached_decoder_for_PointToMultipoint = function (
            el: _Element
        ): PointToMultipoint {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    'PointToMultipoint contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'fromTp';
            sequence[1].name = 'toTps';
            sequence[2].name = 'mpXCon';
            let fromTp!: ObjectInstance;
            let toTps!: PointToMultipoint_toTps_Item[];
            let mpXCon!: ObjectInstance;
            fromTp = _decode_ObjectInstance(sequence[0]);
            toTps = $._decodeSetOf<PointToMultipoint_toTps_Item>(
                () => _decode_PointToMultipoint_toTps_Item
            )(sequence[1]);
            mpXCon = _decode_ObjectInstance(sequence[2]);
            return new PointToMultipoint(fromTp, toTps, mpXCon);
        };
    }
    return _cached_decoder_for_PointToMultipoint(el);
}


let _cached_encoder_for_PointToMultipoint: $.ASN1Encoder<PointToMultipoint> | null = null;


/**
 * @summary Encodes a(n) PointToMultipoint into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PointToMultipoint, encoded as an ASN.1 Element.
 */
export function _encode_PointToMultipoint(
    value: PointToMultipoint,
    elGetter: $.ASN1Encoder<PointToMultipoint>
) {
    if (!_cached_encoder_for_PointToMultipoint) {
        _cached_encoder_for_PointToMultipoint = function (
            value: PointToMultipoint        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.fromTp,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeSetOf<PointToMultipoint_toTps_Item>(
                            () => _encode_PointToMultipoint_toTps_Item,
                            $.BER
                        )(value.toTps, $.BER),
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.mpXCon,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PointToMultipoint(value, elGetter);
}


/* eslint-enable */
