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
    ProtectionStatusR1,
    _decode_ProtectionStatusR1,
    _encode_ProtectionStatusR1,
} from '../M3100ASN1Module3/ProtectionStatusR1.ta.mjs';

/**
 * @summary ProtectionStatusParameterR1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionStatusParameterR1 ::= SEQUENCE {
 *   oldProtectionStatus  ProtectionStatusR1,
 *   newProtectionStatus  ProtectionStatusR1
 * }
 * ```
 *
 * @class
 */
export class ProtectionStatusParameterR1 {
    constructor(
        /**
         * @summary `oldProtectionStatus`.
         * @public
         * @readonly
         */
        readonly oldProtectionStatus: ProtectionStatusR1,
        /**
         * @summary `newProtectionStatus`.
         * @public
         * @readonly
         */
        readonly newProtectionStatus: ProtectionStatusR1
    ) {}

    /**
     * @summary Restructures an object into a ProtectionStatusParameterR1
     * @description
     *
     * This takes an `object` and converts it to a `ProtectionStatusParameterR1`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProtectionStatusParameterR1`.
     * @returns {ProtectionStatusParameterR1}
     */
    public static _from_object(
        _o: {
            [_K in keyof ProtectionStatusParameterR1]: ProtectionStatusParameterR1[_K];
        }
    ): ProtectionStatusParameterR1 {
        return new ProtectionStatusParameterR1(
            _o.oldProtectionStatus,
            _o.newProtectionStatus
        );
    }
}


/**
 * @summary The Leading Root Component Types of ProtectionStatusParameterR1
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ProtectionStatusParameterR1: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'oldProtectionStatus',
        false,
        $.hasTag(_TagClass.universal, 17)
    ),
    new $.ComponentSpec(
        'newProtectionStatus',
        false,
        $.hasTag(_TagClass.universal, 17)
    ),
];


/**
 * @summary The Trailing Root Component Types of ProtectionStatusParameterR1
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ProtectionStatusParameterR1: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ProtectionStatusParameterR1
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ProtectionStatusParameterR1: $.ComponentSpec[] = [];


let _cached_decoder_for_ProtectionStatusParameterR1: $.ASN1Decoder<ProtectionStatusParameterR1> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ProtectionStatusParameterR1
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProtectionStatusParameterR1} The decoded data structure.
 */
export function _decode_ProtectionStatusParameterR1(el: _Element): ProtectionStatusParameterR1 {
    if (!_cached_decoder_for_ProtectionStatusParameterR1) {
        _cached_decoder_for_ProtectionStatusParameterR1 = function (
            el: _Element
        ): ProtectionStatusParameterR1 {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'ProtectionStatusParameterR1 contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'oldProtectionStatus';
            sequence[1].name = 'newProtectionStatus';
            let oldProtectionStatus!: ProtectionStatusR1;
            let newProtectionStatus!: ProtectionStatusR1;
            oldProtectionStatus = _decode_ProtectionStatusR1(sequence[0]);
            newProtectionStatus = _decode_ProtectionStatusR1(sequence[1]);
            return new ProtectionStatusParameterR1(
                oldProtectionStatus,
                newProtectionStatus
            );
        };
    }
    return _cached_decoder_for_ProtectionStatusParameterR1(el);
}


let _cached_encoder_for_ProtectionStatusParameterR1: $.ASN1Encoder<ProtectionStatusParameterR1> | null = null;


/**
 * @summary Encodes a(n) ProtectionStatusParameterR1 into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtectionStatusParameterR1, encoded as an ASN.1 Element.
 */
export function _encode_ProtectionStatusParameterR1(
    value: ProtectionStatusParameterR1,
    elGetter: $.ASN1Encoder<ProtectionStatusParameterR1>
): _Element {
    if (!_cached_encoder_for_ProtectionStatusParameterR1) {
        _cached_encoder_for_ProtectionStatusParameterR1 = function (
            value: ProtectionStatusParameterR1        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ProtectionStatusR1(
                            value.oldProtectionStatus,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ProtectionStatusR1(
                            value.newProtectionStatus,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ProtectionStatusParameterR1(value, elGetter);
}


/* eslint-enable */
