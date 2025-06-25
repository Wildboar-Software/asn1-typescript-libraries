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
    ORAddressAndOptionalDirectoryName,
    _decode_ORAddressAndOptionalDirectoryName,
    _encode_ORAddressAndOptionalDirectoryName,
} from '../MTSAbstractService/ORAddressAndOptionalDirectoryName.ta.mjs';
import {
    Time,
    _decode_Time,
    _encode_Time,
} from '../MTSAbstractService/Time.ta.mjs';
/**
 * @summary DLExpansion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DLExpansion ::= SEQUENCE {
 *   dl                 ORAddressAndOptionalDirectoryName,
 *   dl-expansion-time  Time
 * }
 * ```
 *
 * @class
 */
export class DLExpansion {
    constructor(
        /**
         * @summary `dl`.
         * @public
         * @readonly
         */
        readonly dl: ORAddressAndOptionalDirectoryName,
        /**
         * @summary `dl_expansion_time`.
         * @public
         * @readonly
         */
        readonly dl_expansion_time: Time
    ) {}

    /**
     * @summary Restructures an object into a DLExpansion
     * @description
     *
     * This takes an `object` and converts it to a `DLExpansion`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DLExpansion`.
     * @returns {DLExpansion}
     */
    public static _from_object(
        _o: { [_K in keyof DLExpansion]: DLExpansion[_K] }
    ): DLExpansion {
        return new DLExpansion(_o.dl, _o.dl_expansion_time);
    }
}

/**
 * @summary The Leading Root Component Types of DLExpansion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DLExpansion: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'dl',
        false,
        $.hasTag(_TagClass.application, 0)
    ),
    new $.ComponentSpec(
        'dl-expansion-time',
        false,
        $.hasTag(_TagClass.universal, 23)
    ),
];

/**
 * @summary The Trailing Root Component Types of DLExpansion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DLExpansion: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of DLExpansion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DLExpansion: $.ComponentSpec[] = [];

let _cached_decoder_for_DLExpansion: $.ASN1Decoder<DLExpansion> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DLExpansion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DLExpansion} The decoded data structure.
 */
export function _decode_DLExpansion(el: _Element): DLExpansion {
    if (!_cached_decoder_for_DLExpansion) {
        _cached_decoder_for_DLExpansion = function (el: _Element): DLExpansion {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'DLExpansion contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'dl';
            sequence[1].name = 'dl-expansion-time';
            let dl!: ORAddressAndOptionalDirectoryName;
            let dl_expansion_time!: Time;
            dl = _decode_ORAddressAndOptionalDirectoryName(sequence[0]);
            dl_expansion_time = _decode_Time(sequence[1]);
            return new DLExpansion(dl, dl_expansion_time);
        };
    }
    return _cached_decoder_for_DLExpansion(el);
}

let _cached_encoder_for_DLExpansion: $.ASN1Encoder<DLExpansion> | null = null;

/**
 * @summary Encodes a(n) DLExpansion into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DLExpansion, encoded as an ASN.1 Element.
 */
export function _encode_DLExpansion(
    value: DLExpansion,
    elGetter: $.ASN1Encoder<DLExpansion>
): _Element {
    if (!_cached_encoder_for_DLExpansion) {
        _cached_encoder_for_DLExpansion = function (
            value: DLExpansion        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ORAddressAndOptionalDirectoryName(
                            value.dl,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_Time(
                            value.dl_expansion_time,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_DLExpansion(value, elGetter);
}


/* eslint-enable */
