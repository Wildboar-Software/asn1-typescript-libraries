/* eslint-disable */
import {
    OPTIONAL,
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
    RevertInfo,
    _decode_RevertInfo,
    _encode_RevertInfo,
} from '../SWMF/RevertInfo.ta.mjs';
import {
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ManagementExtension.ta.mjs';
/**
 * @summary RevertArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RevertArgument ::= SEQUENCE {
 *   revertInfo      [0]  RevertInfo,
 *   additionalInfo  [1]  SET OF ManagementExtension OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class RevertArgument {
    constructor(
        /**
         * @summary `revertInfo`.
         * @public
         * @readonly
         */
        readonly revertInfo: RevertInfo,
        /**
         * @summary `additionalInfo`.
         * @public
         * @readonly
         */
        readonly additionalInfo: OPTIONAL<ManagementExtension[]>
    ) {}

    /**
     * @summary Restructures an object into a RevertArgument
     * @description
     *
     * This takes an `object` and converts it to a `RevertArgument`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RevertArgument`.
     * @returns {RevertArgument}
     */
    public static _from_object(
        _o: { [_K in keyof RevertArgument]: RevertArgument[_K] }
    ): RevertArgument {
        return new RevertArgument(_o.revertInfo, _o.additionalInfo);
    }
}

/**
 * @summary The Leading Root Component Types of RevertArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RevertArgument: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'revertInfo',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'additionalInfo',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of RevertArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RevertArgument: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of RevertArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RevertArgument: $.ComponentSpec[] = [];

let _cached_decoder_for_RevertArgument: $.ASN1Decoder<RevertArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RevertArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RevertArgument} The decoded data structure.
 */
export function _decode_RevertArgument(el: _Element): RevertArgument {
    if (!_cached_decoder_for_RevertArgument) {
        _cached_decoder_for_RevertArgument = function (
            el: _Element
        ): RevertArgument {
            let revertInfo!: RevertInfo;
            let additionalInfo: OPTIONAL<ManagementExtension[]>;
            const callbacks: $.DecodingMap = {
                revertInfo: (_el: _Element): void => {
                    revertInfo = $._decode_implicit<RevertInfo>(
                        () => _decode_RevertInfo
                    )(_el);
                },
                additionalInfo: (_el: _Element): void => {
                    additionalInfo = $._decode_implicit<ManagementExtension[]>(
                        () =>
                            $._decodeSetOf<ManagementExtension>(
                                () => _decode_ManagementExtension
                            )
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RevertArgument,
                _extension_additions_list_spec_for_RevertArgument,
                _root_component_type_list_2_spec_for_RevertArgument,
                undefined
            );
            return new RevertArgument (
                revertInfo,
                additionalInfo
            );
        };
    }
    return _cached_decoder_for_RevertArgument(el);
}

let _cached_encoder_for_RevertArgument: $.ASN1Encoder<RevertArgument> | null = null;

/**
 * @summary Encodes a(n) RevertArgument into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RevertArgument, encoded as an ASN.1 Element.
 */
export function _encode_RevertArgument(
    value: RevertArgument,
    elGetter: $.ASN1Encoder<RevertArgument>
): _Element {
    if (!_cached_encoder_for_RevertArgument) {
        _cached_encoder_for_RevertArgument = function (
            value: RevertArgument        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_RevertInfo,
                            $.BER
                        )(value.revertInfo, $.BER),
                        /* IF_ABSENT  */ value.additionalInfo === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () =>
                                      $._encodeSetOf<ManagementExtension>(
                                          () => _encode_ManagementExtension,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.additionalInfo, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_RevertArgument(value, elGetter);
}


/* eslint-enable */
