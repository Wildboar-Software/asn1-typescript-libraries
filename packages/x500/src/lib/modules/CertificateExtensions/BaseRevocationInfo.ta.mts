/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    GeneralizedTime,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CRLNumber,
    _decode_CRLNumber,
    _encode_CRLNumber,
} from "../CertificateExtensions/CRLNumber.ta.mjs";
import {
    CRLStreamIdentifier,
    _decode_CRLStreamIdentifier,
    _encode_CRLStreamIdentifier,
} from "../CertificateExtensions/CRLStreamIdentifier.ta.mjs";
/**
 * @summary BaseRevocationInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BaseRevocationInfo ::= SEQUENCE {
 *   cRLStreamIdentifier  [0]  CRLStreamIdentifier OPTIONAL,
 *   cRLNumber            [1]  CRLNumber,
 *   baseThisUpdate       [2]  GeneralizedTime,
 *   ... }
 * ```
 *
 */
export class BaseRevocationInfo {
    constructor(
        /**
         * @summary `cRLStreamIdentifier`.
         * @public
         * @readonly
         */
        readonly cRLStreamIdentifier: OPTIONAL<CRLStreamIdentifier>,
        /**
         * @summary `cRLNumber`.
         * @public
         * @readonly
         */
        readonly cRLNumber: CRLNumber,
        /**
         * @summary `baseThisUpdate`.
         * @public
         * @readonly
         */
        readonly baseThisUpdate: GeneralizedTime,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a BaseRevocationInfo
     * @description
     *
     * This takes an `object` and converts it to a `BaseRevocationInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BaseRevocationInfo`.
     * @returns {BaseRevocationInfo}
     */
    public static _from_object(
        _o: { [_K in keyof BaseRevocationInfo]: BaseRevocationInfo[_K] }
    ): BaseRevocationInfo {
        return new BaseRevocationInfo(
            _o.cRLStreamIdentifier,
            _o.cRLNumber,
            _o.baseThisUpdate,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of BaseRevocationInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BaseRevocationInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "cRLStreamIdentifier",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "cRLNumber",
        false,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "baseThisUpdate",
        false,
        $.hasTag(_TagClass.context, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of BaseRevocationInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BaseRevocationInfo: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of BaseRevocationInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BaseRevocationInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_BaseRevocationInfo: $.ASN1Decoder<BaseRevocationInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BaseRevocationInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BaseRevocationInfo} The decoded data structure.
 */
export function _decode_BaseRevocationInfo(el: _Element): BaseRevocationInfo {
    if (!_cached_decoder_for_BaseRevocationInfo) {
        _cached_decoder_for_BaseRevocationInfo = function (
            el: _Element
        ): BaseRevocationInfo {
            let cRLStreamIdentifier: OPTIONAL<CRLStreamIdentifier>;
            let cRLNumber!: CRLNumber;
            let baseThisUpdate!: GeneralizedTime;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                cRLStreamIdentifier: (_el: _Element): void => {
                    cRLStreamIdentifier = $._decode_implicit<CRLStreamIdentifier>(
                        () => _decode_CRLStreamIdentifier
                    )(_el);
                },
                cRLNumber: (_el: _Element): void => {
                    cRLNumber = $._decode_implicit<CRLNumber>(
                        () => _decode_CRLNumber
                    )(_el);
                },
                baseThisUpdate: (_el: _Element): void => {
                    baseThisUpdate = $._decode_implicit<GeneralizedTime>(
                        () => $._decodeGeneralizedTime
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_BaseRevocationInfo,
                _extension_additions_list_spec_for_BaseRevocationInfo,
                _root_component_type_list_2_spec_for_BaseRevocationInfo,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new BaseRevocationInfo(
                cRLStreamIdentifier,
                cRLNumber,
                baseThisUpdate,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_BaseRevocationInfo(el);
}

let _cached_encoder_for_BaseRevocationInfo: $.ASN1Encoder<BaseRevocationInfo> | null = null;

/**
 * @summary Encodes a(n) BaseRevocationInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BaseRevocationInfo, encoded as an ASN.1 Element.
 */
export function _encode_BaseRevocationInfo(
    value: BaseRevocationInfo,
    elGetter: $.ASN1Encoder<BaseRevocationInfo>
): _Element {
    if (!_cached_encoder_for_BaseRevocationInfo) {
        _cached_encoder_for_BaseRevocationInfo = function (
            value: BaseRevocationInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.cRLStreamIdentifier ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_CRLStreamIdentifier,
                                      $.DER
                                  )(value.cRLStreamIdentifier, $.DER),
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                1,
                                () => _encode_CRLNumber,
                                $.DER
                            )(value.cRLNumber, $.DER),
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                2,
                                () => $._encodeGeneralizedTime,
                                $.DER
                            )(value.baseThisUpdate, $.DER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_BaseRevocationInfo(value, elGetter);
}


/* eslint-enable */
