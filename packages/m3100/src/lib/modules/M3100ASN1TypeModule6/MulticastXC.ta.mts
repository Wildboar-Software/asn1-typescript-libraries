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

/**
 * @summary MulticastXC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MulticastXC ::= SEQUENCE {
 *   mpXC  ObjectInstance,
 *   xcA   ObjectInstance,
 *   xcB   ObjectInstance
 * }
 * ```
 *
 * @class
 */
export class MulticastXC {
    constructor(
        /**
         * @summary `mpXC`.
         * @public
         * @readonly
         */
        readonly mpXC: ObjectInstance,
        /**
         * @summary `xcA`.
         * @public
         * @readonly
         */
        readonly xcA: ObjectInstance,
        /**
         * @summary `xcB`.
         * @public
         * @readonly
         */
        readonly xcB: ObjectInstance
    ) {}

    /**
     * @summary Restructures an object into a MulticastXC
     * @description
     *
     * This takes an `object` and converts it to a `MulticastXC`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MulticastXC`.
     * @returns {MulticastXC}
     */
    public static _from_object(
        _o: { [_K in keyof MulticastXC]: MulticastXC[_K] }
    ): MulticastXC {
        return new MulticastXC(_o.mpXC, _o.xcA, _o.xcB);
    }
}


/**
 * @summary The Leading Root Component Types of MulticastXC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MulticastXC: $.ComponentSpec[] = [
    new $.ComponentSpec('mpXC', false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec('xcA', false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec('xcB', false, $.hasAnyTag, undefined, undefined),
];


/**
 * @summary The Trailing Root Component Types of MulticastXC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MulticastXC: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of MulticastXC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MulticastXC: $.ComponentSpec[] = [];


let _cached_decoder_for_MulticastXC: $.ASN1Decoder<MulticastXC> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) MulticastXC
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MulticastXC} The decoded data structure.
 */
export function _decode_MulticastXC(el: _Element) {
    if (!_cached_decoder_for_MulticastXC) {
        _cached_decoder_for_MulticastXC = function (el: _Element): MulticastXC {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    'MulticastXC contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'mpXC';
            sequence[1].name = 'xcA';
            sequence[2].name = 'xcB';
            let mpXC!: ObjectInstance;
            let xcA!: ObjectInstance;
            let xcB!: ObjectInstance;
            mpXC = _decode_ObjectInstance(sequence[0]);
            xcA = _decode_ObjectInstance(sequence[1]);
            xcB = _decode_ObjectInstance(sequence[2]);
            return new MulticastXC(mpXC, xcA, xcB);
        };
    }
    return _cached_decoder_for_MulticastXC(el);
}


let _cached_encoder_for_MulticastXC: $.ASN1Encoder<MulticastXC> | null = null;


/**
 * @summary Encodes a(n) MulticastXC into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MulticastXC, encoded as an ASN.1 Element.
 */
export function _encode_MulticastXC(
    value: MulticastXC,
    elGetter: $.ASN1Encoder<MulticastXC>
) {
    if (!_cached_encoder_for_MulticastXC) {
        _cached_encoder_for_MulticastXC = function (
            value: MulticastXC        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.mpXC,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.xcA,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.xcB,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_MulticastXC(value, elGetter);
}


/* eslint-enable */
