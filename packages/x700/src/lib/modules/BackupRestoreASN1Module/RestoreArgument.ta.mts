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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    RestoreSource,
    _decode_RestoreSource,
    _encode_RestoreSource,
} from '../BackupRestoreASN1Module/RestoreSource.ta.mjs';
import {
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ManagementExtension.ta.mjs';
/**
 * @summary RestoreArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RestoreArgument ::= SEQUENCE {
 *   restoreSource   [0]  RestoreSource,
 *   additionalInfo  [1]  SET OF ManagementExtension OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class RestoreArgument {
    constructor(
        /**
         * @summary `restoreSource`.
         * @public
         * @readonly
         */
        readonly restoreSource: RestoreSource,
        /**
         * @summary `additionalInfo`.
         * @public
         * @readonly
         */
        readonly additionalInfo: OPTIONAL<ManagementExtension[]>
    ) {}

    /**
     * @summary Restructures an object into a RestoreArgument
     * @description
     *
     * This takes an `object` and converts it to a `RestoreArgument`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RestoreArgument`.
     * @returns {RestoreArgument}
     */
    public static _from_object(
        _o: { [_K in keyof RestoreArgument]: RestoreArgument[_K] }
    ): RestoreArgument {
        return new RestoreArgument(_o.restoreSource, _o.additionalInfo);
    }
}

/**
 * @summary The Leading Root Component Types of RestoreArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RestoreArgument: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'restoreSource',
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
 * @summary The Trailing Root Component Types of RestoreArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RestoreArgument: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of RestoreArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RestoreArgument: $.ComponentSpec[] = [];

let _cached_decoder_for_RestoreArgument: $.ASN1Decoder<RestoreArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RestoreArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RestoreArgument} The decoded data structure.
 */
export function _decode_RestoreArgument(el: _Element) {
    if (!_cached_decoder_for_RestoreArgument) {
        _cached_decoder_for_RestoreArgument = function (
            el: _Element
        ): RestoreArgument {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let restoreSource!: RestoreSource;
            let additionalInfo: OPTIONAL<ManagementExtension[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                restoreSource: (_el: _Element): void => {
                    restoreSource = $._decode_explicit<RestoreSource>(
                        () => _decode_RestoreSource
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
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RestoreArgument,
                _extension_additions_list_spec_for_RestoreArgument,
                _root_component_type_list_2_spec_for_RestoreArgument,
                undefined
            );
            return new RestoreArgument /* SEQUENCE_CONSTRUCTOR_CALL */(
                restoreSource,
                additionalInfo
            );
        };
    }
    return _cached_decoder_for_RestoreArgument(el);
}

let _cached_encoder_for_RestoreArgument: $.ASN1Encoder<RestoreArgument> | null = null;

/**
 * @summary Encodes a(n) RestoreArgument into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RestoreArgument, encoded as an ASN.1 Element.
 */
export function _encode_RestoreArgument(
    value: RestoreArgument,
    elGetter: $.ASN1Encoder<RestoreArgument>
) {
    if (!_cached_encoder_for_RestoreArgument) {
        _cached_encoder_for_RestoreArgument = function (
            value: RestoreArgument        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_RestoreSource,
                            $.BER
                        )(value.restoreSource, $.BER),
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
    return _cached_encoder_for_RestoreArgument(value, elGetter);
}


/* eslint-enable */
