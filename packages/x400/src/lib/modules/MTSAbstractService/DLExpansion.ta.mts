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
    ORAddressAndOptionalDirectoryName,
    _decode_ORAddressAndOptionalDirectoryName,
    _encode_ORAddressAndOptionalDirectoryName,
} from '../MTSAbstractService/ORAddressAndOptionalDirectoryName.ta.mjs';
import {
    Time,
    _decode_Time,
    _encode_Time,
} from '../MTSAbstractService/Time.ta.mjs';
/* START_OF_SYMBOL_DEFINITION DLExpansion */
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
/* END_OF_SYMBOL_DEFINITION DLExpansion */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DLExpansion */
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
        $.hasTag(_TagClass.application, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'dl-expansion-time',
        false,
        $.hasTag(_TagClass.universal, 23),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DLExpansion */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DLExpansion */
/**
 * @summary The Trailing Root Component Types of DLExpansion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DLExpansion: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DLExpansion */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DLExpansion */
/**
 * @summary The Extension Addition Component Types of DLExpansion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DLExpansion: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DLExpansion */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DLExpansion */
let _cached_decoder_for_DLExpansion: $.ASN1Decoder<DLExpansion> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DLExpansion */

/* START_OF_SYMBOL_DEFINITION _decode_DLExpansion */
/**
 * @summary Decodes an ASN.1 element into a(n) DLExpansion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DLExpansion} The decoded data structure.
 */
export function _decode_DLExpansion(el: _Element) {
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
/* END_OF_SYMBOL_DEFINITION _decode_DLExpansion */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DLExpansion */
let _cached_encoder_for_DLExpansion: $.ASN1Encoder<DLExpansion> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DLExpansion */

/* START_OF_SYMBOL_DEFINITION _encode_DLExpansion */
/**
 * @summary Encodes a(n) DLExpansion into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DLExpansion, encoded as an ASN.1 Element.
 */
export function _encode_DLExpansion(
    value: DLExpansion,
    elGetter: $.ASN1Encoder<DLExpansion>
) {
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

/* END_OF_SYMBOL_DEFINITION _encode_DLExpansion */

/* eslint-enable */
