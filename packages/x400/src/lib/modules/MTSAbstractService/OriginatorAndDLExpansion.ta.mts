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
 * @summary OriginatorAndDLExpansion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginatorAndDLExpansion ::= SEQUENCE {
 *   originator-or-dl-name          ORAddressAndOptionalDirectoryName,
 *   origination-or-expansion-time  Time
 * }
 * ```
 *
 * @class
 */
export class OriginatorAndDLExpansion {
    constructor(
        /**
         * @summary `originator_or_dl_name`.
         * @public
         * @readonly
         */
        readonly originator_or_dl_name: ORAddressAndOptionalDirectoryName,
        /**
         * @summary `origination_or_expansion_time`.
         * @public
         * @readonly
         */
        readonly origination_or_expansion_time: Time
    ) {}

    /**
     * @summary Restructures an object into a OriginatorAndDLExpansion
     * @description
     *
     * This takes an `object` and converts it to a `OriginatorAndDLExpansion`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OriginatorAndDLExpansion`.
     * @returns {OriginatorAndDLExpansion}
     */
    public static _from_object(
        _o: {
            [_K in keyof OriginatorAndDLExpansion]: OriginatorAndDLExpansion[_K];
        }
    ): OriginatorAndDLExpansion {
        return new OriginatorAndDLExpansion(
            _o.originator_or_dl_name,
            _o.origination_or_expansion_time
        );
    }
}

/**
 * @summary The Leading Root Component Types of OriginatorAndDLExpansion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OriginatorAndDLExpansion: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'originator-or-dl-name',
        false,
        $.hasTag(_TagClass.application, 0)
    ),
    new $.ComponentSpec(
        'origination-or-expansion-time',
        false,
        $.hasTag(_TagClass.universal, 23)
    ),
];

/**
 * @summary The Trailing Root Component Types of OriginatorAndDLExpansion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OriginatorAndDLExpansion: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of OriginatorAndDLExpansion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OriginatorAndDLExpansion: $.ComponentSpec[] = [];

let _cached_decoder_for_OriginatorAndDLExpansion: $.ASN1Decoder<OriginatorAndDLExpansion> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OriginatorAndDLExpansion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OriginatorAndDLExpansion} The decoded data structure.
 */
export function _decode_OriginatorAndDLExpansion(el: _Element) {
    if (!_cached_decoder_for_OriginatorAndDLExpansion) {
        _cached_decoder_for_OriginatorAndDLExpansion = function (
            el: _Element
        ): OriginatorAndDLExpansion {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'OriginatorAndDLExpansion contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'originator-or-dl-name';
            sequence[1].name = 'origination-or-expansion-time';
            let originator_or_dl_name!: ORAddressAndOptionalDirectoryName;
            let origination_or_expansion_time!: Time;
            originator_or_dl_name = _decode_ORAddressAndOptionalDirectoryName(
                sequence[0]
            );
            origination_or_expansion_time = _decode_Time(sequence[1]);
            return new OriginatorAndDLExpansion(
                originator_or_dl_name,
                origination_or_expansion_time
            );
        };
    }
    return _cached_decoder_for_OriginatorAndDLExpansion(el);
}

let _cached_encoder_for_OriginatorAndDLExpansion: $.ASN1Encoder<OriginatorAndDLExpansion> | null = null;

/**
 * @summary Encodes a(n) OriginatorAndDLExpansion into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginatorAndDLExpansion, encoded as an ASN.1 Element.
 */
export function _encode_OriginatorAndDLExpansion(
    value: OriginatorAndDLExpansion,
    elGetter: $.ASN1Encoder<OriginatorAndDLExpansion>
) {
    if (!_cached_encoder_for_OriginatorAndDLExpansion) {
        _cached_encoder_for_OriginatorAndDLExpansion = function (
            value: OriginatorAndDLExpansion        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ORAddressAndOptionalDirectoryName(
                            value.originator_or_dl_name,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_Time(
                            value.origination_or_expansion_time,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_OriginatorAndDLExpansion(value, elGetter);
}


/* eslint-enable */
