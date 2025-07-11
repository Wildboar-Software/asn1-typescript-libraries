/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Path, _decode_Path, _encode_Path } from "../PKCS-15/Path.ta.mjs";

/**
 * @summary DDO
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DDO ::= SEQUENCE {
 *     oid    OBJECT IDENTIFIER,
 *     odfPath    Path OPTIONAL,
 *     tokenInfoPath [0] Path OPTIONAL,
 *     unusedPath [1] Path OPTIONAL,
 *     ... -- For future extensions
 * }
 * ```
 *
 */
export class DDO {
    constructor(
        /**
         * @summary `oid`.
         * @public
         * @readonly
         */
        readonly oid: OBJECT_IDENTIFIER,
        /**
         * @summary `odfPath`.
         * @public
         * @readonly
         */
        readonly odfPath: OPTIONAL<Path>,
        /**
         * @summary `tokenInfoPath`.
         * @public
         * @readonly
         */
        readonly tokenInfoPath: OPTIONAL<Path>,
        /**
         * @summary `unusedPath`.
         * @public
         * @readonly
         */
        readonly unusedPath: OPTIONAL<Path>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DDO
     * @description
     *
     * This takes an `object` and converts it to a `DDO`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DDO`.
     * @returns {DDO}
     */
    public static _from_object(_o: { [_K in keyof DDO]: DDO[_K] }): DDO {
        return new DDO(
            _o.oid,
            _o.odfPath,
            _o.tokenInfoPath,
            _o.unusedPath,
            _o._unrecognizedExtensionsList
        );
    }
}


/**
 * @summary The Leading Root Component Types of DDO
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DDO: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "oid",
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        "odfPath",
        true,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "tokenInfoPath",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "unusedPath",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];


/**
 * @summary The Trailing Root Component Types of DDO
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DDO: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of DDO
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DDO: $.ComponentSpec[] = [];


let _cached_decoder_for_DDO: $.ASN1Decoder<DDO> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) DDO
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DDO} The decoded data structure.
 */
export function _decode_DDO(el: _Element): DDO {
    if (!_cached_decoder_for_DDO) {
        _cached_decoder_for_DDO = function (el: _Element): DDO {
            let oid!: OBJECT_IDENTIFIER;
            let odfPath: OPTIONAL<Path>;
            let tokenInfoPath: OPTIONAL<Path>;
            let unusedPath: OPTIONAL<Path>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                oid: (_el: _Element): void => {
                    oid = $._decodeObjectIdentifier(_el);
                },
                odfPath: (_el: _Element): void => {
                    odfPath = _decode_Path(_el);
                },
                tokenInfoPath: (_el: _Element): void => {
                    tokenInfoPath = $._decode_implicit<Path>(
                        () => _decode_Path
                    )(_el);
                },
                unusedPath: (_el: _Element): void => {
                    unusedPath = $._decode_implicit<Path>(() => _decode_Path)(
                        _el
                    );
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DDO,
                _extension_additions_list_spec_for_DDO,
                _root_component_type_list_2_spec_for_DDO,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DDO(
                oid,
                odfPath,
                tokenInfoPath,
                unusedPath,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DDO(el);
}


let _cached_encoder_for_DDO: $.ASN1Encoder<DDO> | null = null;


/**
 * @summary Encodes a(n) DDO into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DDO, encoded as an ASN.1 Element.
 */
export function _encode_DDO(value: DDO, elGetter: $.ASN1Encoder<DDO>): _Element {
    if (!_cached_encoder_for_DDO) {
        _cached_encoder_for_DDO = function (
            value: DDO        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.oid,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.odfPath === undefined
                                ? undefined
                                : _encode_Path(value.odfPath, $.BER),
                            /* IF_ABSENT  */ value.tokenInfoPath === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_Path,
                                      $.BER
                                  )(value.tokenInfoPath, $.BER),
                            /* IF_ABSENT  */ value.unusedPath === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_Path,
                                      $.BER
                                  )(value.unusedPath, $.BER),
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
    return _cached_encoder_for_DDO(value, elGetter);
}


/* eslint-enable */
