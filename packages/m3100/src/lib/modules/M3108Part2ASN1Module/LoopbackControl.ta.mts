/* eslint-disable */
import {
    UTCTime,
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
    LoopbackControl_status,
    _enum_for_LoopbackControl_status,
    _decode_LoopbackControl_status,
    _encode_LoopbackControl_status,
} from '../M3108Part2ASN1Module/LoopbackControl-status.ta.mjs';

/**
 * @summary LoopbackControl
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LoopbackControl ::= SEQUENCE {
 *   status
 *     [0]  ENUMERATED {noLoopback(0), endALoopedBack(1), endBLoopedBack(2)},
 *   terminationTime  [1]  UTCTime,
 *   ...
 * }
 * ```
 *
 * @class
 */
export class LoopbackControl {
    constructor(
        /**
         * @summary `status`.
         * @public
         * @readonly
         */
        readonly status: LoopbackControl_status,
        /**
         * @summary `terminationTime`.
         * @public
         * @readonly
         */
        readonly terminationTime: UTCTime,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a LoopbackControl
     * @description
     *
     * This takes an `object` and converts it to a `LoopbackControl`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LoopbackControl`.
     * @returns {LoopbackControl}
     */
    public static _from_object(
        _o: { [_K in keyof LoopbackControl]: LoopbackControl[_K] }
    ): LoopbackControl {
        return new LoopbackControl(
            _o.status,
            _o.terminationTime,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `status`
     * @public
     * @static
     */

    public static _enum_for_status = _enum_for_LoopbackControl_status;
}


/**
 * @summary The Leading Root Component Types of LoopbackControl
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_LoopbackControl: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'status',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'terminationTime',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];


/**
 * @summary The Trailing Root Component Types of LoopbackControl
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_LoopbackControl: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of LoopbackControl
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_LoopbackControl: $.ComponentSpec[] = [];


let _cached_decoder_for_LoopbackControl: $.ASN1Decoder<LoopbackControl> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) LoopbackControl
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LoopbackControl} The decoded data structure.
 */
export function _decode_LoopbackControl(el: _Element) {
    if (!_cached_decoder_for_LoopbackControl) {
        _cached_decoder_for_LoopbackControl = function (
            el: _Element
        ): LoopbackControl {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'LoopbackControl contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'status';
            sequence[1].name = 'terminationTime';
            let status!: LoopbackControl_status;
            let terminationTime!: UTCTime;
            status = $._decode_implicit<LoopbackControl_status>(
                () => _decode_LoopbackControl_status
            )(sequence[0]);
            terminationTime = $._decode_implicit<UTCTime>(
                () => $._decodeUTCTime
            )(sequence[1]);
            return new LoopbackControl(
                status,
                terminationTime,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_LoopbackControl(el);
}


let _cached_encoder_for_LoopbackControl: $.ASN1Encoder<LoopbackControl> | null = null;


/**
 * @summary Encodes a(n) LoopbackControl into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LoopbackControl, encoded as an ASN.1 Element.
 */
export function _encode_LoopbackControl(
    value: LoopbackControl,
    elGetter: $.ASN1Encoder<LoopbackControl>
) {
    if (!_cached_encoder_for_LoopbackControl) {
        _cached_encoder_for_LoopbackControl = function (
            value: LoopbackControl        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                0,
                                () => _encode_LoopbackControl_status,
                                $.BER
                            )(value.status, $.BER),
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                1,
                                () => $._encodeUTCTime,
                                $.BER
                            )(value.terminationTime, $.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_LoopbackControl(value, elGetter);
}


/* eslint-enable */
