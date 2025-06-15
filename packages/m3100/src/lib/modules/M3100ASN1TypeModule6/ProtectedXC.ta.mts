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
 * @summary ProtectedXC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectedXC ::= SEQUENCE {
 *   conProtGroup  ObjectInstance,
 *   conProtA      ObjectInstance,
 *   conProtB      ObjectInstance
 * }
 * ```
 *
 * @class
 */
export class ProtectedXC {
    constructor(
        /**
         * @summary `conProtGroup`.
         * @public
         * @readonly
         */
        readonly conProtGroup: ObjectInstance,
        /**
         * @summary `conProtA`.
         * @public
         * @readonly
         */
        readonly conProtA: ObjectInstance,
        /**
         * @summary `conProtB`.
         * @public
         * @readonly
         */
        readonly conProtB: ObjectInstance
    ) {}

    /**
     * @summary Restructures an object into a ProtectedXC
     * @description
     *
     * This takes an `object` and converts it to a `ProtectedXC`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProtectedXC`.
     * @returns {ProtectedXC}
     */
    public static _from_object(
        _o: { [_K in keyof ProtectedXC]: ProtectedXC[_K] }
    ): ProtectedXC {
        return new ProtectedXC(_o.conProtGroup, _o.conProtA, _o.conProtB);
    }
}


/**
 * @summary The Leading Root Component Types of ProtectedXC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ProtectedXC: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'conProtGroup',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec('conProtA', false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec('conProtB', false, $.hasAnyTag, undefined, undefined),
];


/**
 * @summary The Trailing Root Component Types of ProtectedXC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ProtectedXC: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ProtectedXC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ProtectedXC: $.ComponentSpec[] = [];


let _cached_decoder_for_ProtectedXC: $.ASN1Decoder<ProtectedXC> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ProtectedXC
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProtectedXC} The decoded data structure.
 */
export function _decode_ProtectedXC(el: _Element) {
    if (!_cached_decoder_for_ProtectedXC) {
        _cached_decoder_for_ProtectedXC = function (el: _Element): ProtectedXC {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    'ProtectedXC contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'conProtGroup';
            sequence[1].name = 'conProtA';
            sequence[2].name = 'conProtB';
            let conProtGroup!: ObjectInstance;
            let conProtA!: ObjectInstance;
            let conProtB!: ObjectInstance;
            conProtGroup = _decode_ObjectInstance(sequence[0]);
            conProtA = _decode_ObjectInstance(sequence[1]);
            conProtB = _decode_ObjectInstance(sequence[2]);
            return new ProtectedXC(conProtGroup, conProtA, conProtB);
        };
    }
    return _cached_decoder_for_ProtectedXC(el);
}


let _cached_encoder_for_ProtectedXC: $.ASN1Encoder<ProtectedXC> | null = null;


/**
 * @summary Encodes a(n) ProtectedXC into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtectedXC, encoded as an ASN.1 Element.
 */
export function _encode_ProtectedXC(
    value: ProtectedXC,
    elGetter: $.ASN1Encoder<ProtectedXC>
) {
    if (!_cached_encoder_for_ProtectedXC) {
        _cached_encoder_for_ProtectedXC = function (
            value: ProtectedXC        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.conProtGroup,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.conProtA,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.conProtB,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ProtectedXC(value, elGetter);
}


/* eslint-enable */
