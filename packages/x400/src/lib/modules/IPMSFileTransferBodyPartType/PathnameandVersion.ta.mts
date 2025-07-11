/* eslint-disable */
import {
    OPTIONAL,
    GraphicString,
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
    Pathname_Attribute,
    _decode_Pathname_Attribute,
    _encode_Pathname_Attribute,
} from '../IPMSFileTransferBodyPartType/Pathname-Attribute.ta.mjs';
/**
 * @summary PathnameandVersion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PathnameandVersion ::= SEQUENCE {
 *   pathname      [0]  Pathname-Attribute,
 *   file-version  [1]  GraphicString OPTIONAL
 * }
 * ```
 *
 */
export class PathnameandVersion {
    constructor(
        /**
         * @summary `pathname`.
         * @public
         * @readonly
         */
        readonly pathname: Pathname_Attribute,
        /**
         * @summary `file_version`.
         * @public
         * @readonly
         */
        readonly file_version: OPTIONAL<GraphicString>
    ) {}

    /**
     * @summary Restructures an object into a PathnameandVersion
     * @description
     *
     * This takes an `object` and converts it to a `PathnameandVersion`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PathnameandVersion`.
     * @returns {PathnameandVersion}
     */
    public static _from_object(
        _o: { [_K in keyof PathnameandVersion]: PathnameandVersion[_K] }
    ): PathnameandVersion {
        return new PathnameandVersion(_o.pathname, _o.file_version);
    }
}

/**
 * @summary The Leading Root Component Types of PathnameandVersion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PathnameandVersion: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'pathname',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'file-version',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of PathnameandVersion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PathnameandVersion: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of PathnameandVersion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PathnameandVersion: $.ComponentSpec[] = [];

let _cached_decoder_for_PathnameandVersion: $.ASN1Decoder<PathnameandVersion> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PathnameandVersion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PathnameandVersion} The decoded data structure.
 */
export function _decode_PathnameandVersion(el: _Element): PathnameandVersion {
    if (!_cached_decoder_for_PathnameandVersion) {
        _cached_decoder_for_PathnameandVersion = function (
            el: _Element
        ): PathnameandVersion {
            let pathname!: Pathname_Attribute;
            let file_version: OPTIONAL<GraphicString>;
            const callbacks: $.DecodingMap = {
                pathname: (_el: _Element): void => {
                    pathname = $._decode_explicit<Pathname_Attribute>(
                        () => _decode_Pathname_Attribute
                    )(_el);
                },
                'file-version': (_el: _Element): void => {
                    file_version = $._decode_implicit<GraphicString>(
                        () => $._decodeGraphicString
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PathnameandVersion,
                _extension_additions_list_spec_for_PathnameandVersion,
                _root_component_type_list_2_spec_for_PathnameandVersion,
                undefined
            );
            return new PathnameandVersion (
                pathname,
                file_version
            );
        };
    }
    return _cached_decoder_for_PathnameandVersion(el);
}

let _cached_encoder_for_PathnameandVersion: $.ASN1Encoder<PathnameandVersion> | null = null;

/**
 * @summary Encodes a(n) PathnameandVersion into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PathnameandVersion, encoded as an ASN.1 Element.
 */
export function _encode_PathnameandVersion(
    value: PathnameandVersion,
    elGetter: $.ASN1Encoder<PathnameandVersion>
): _Element {
    if (!_cached_encoder_for_PathnameandVersion) {
        _cached_encoder_for_PathnameandVersion = function (
            value: PathnameandVersion        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_Pathname_Attribute,
                            $.BER
                        )(value.pathname, $.BER),
                        /* IF_ABSENT  */ value.file_version === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeGraphicString,
                                  $.BER
                              )(value.file_version, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PathnameandVersion(value, elGetter);
}


/* eslint-enable */
