/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "@wildboar/pki-stub";
import { AssoID, _decode_AssoID, _encode_AssoID } from "../Wrapper/AssoID.ta.mjs";
import {
    DER_PkiPath,
    _decode_DER_PkiPath,
    _encode_DER_PkiPath,
} from "../Wrapper/DER-PkiPath.ta.mjs";
import {
    SequenceNumber,
    _decode_SequenceNumber,
    _encode_SequenceNumber,
} from "../Wrapper/SequenceNumber.ta.mjs";
import {
    TimeStamp,
    _decode_TimeStamp,
    _encode_TimeStamp,
} from "../Wrapper/TimeStamp.ta.mjs";
import {
    WrpError,
    _decode_WrpError,
    _encode_WrpError,
    _enum_for_WrpError,
} from "../Wrapper/WrpError.ta.mjs";
/**
 * @summary TbsDtSecAbort
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TbsDtSecAbort ::= SEQUENCE {
 *   sigAlg       AlgorithmIdentifier{{SupportedSignatureAlgorithms}},
 *   assoID       AssoID,
 *   time         TimeStamp,
 *   pkiPath      DER-PkiPath,
 *   seq          SequenceNumber,
 *   diag         WrpError OPTIONAL,
 *   ... }
 * ```
 *
 */
export class TbsDtSecAbort {
    constructor(
        /**
         * @summary `sigAlg`.
         * @public
         * @readonly
         */
        readonly sigAlg: AlgorithmIdentifier,
        /**
         * @summary `assoID`.
         * @public
         * @readonly
         */
        readonly assoID: AssoID,
        /**
         * @summary `time`.
         * @public
         * @readonly
         */
        readonly time: TimeStamp,
        /**
         * @summary `pkiPath`.
         * @public
         * @readonly
         */
        readonly pkiPath: DER_PkiPath,
        /**
         * @summary `seq`.
         * @public
         * @readonly
         */
        readonly seq: SequenceNumber,
        /**
         * @summary `diag`.
         * @public
         * @readonly
         */
        readonly diag: OPTIONAL<WrpError>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TbsDtSecAbort
     * @description
     *
     * This takes an `object` and converts it to a `TbsDtSecAbort`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TbsDtSecAbort`.
     * @returns {TbsDtSecAbort}
     */
    public static _from_object(
        _o: { [_K in keyof TbsDtSecAbort]: TbsDtSecAbort[_K] }
    ): TbsDtSecAbort {
        return new TbsDtSecAbort(
            _o.sigAlg,
            _o.assoID,
            _o.time,
            _o.pkiPath,
            _o.seq,
            _o.diag,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `diag`
     * @public
     * @static
     */

    public static _enum_for_diag = _enum_for_WrpError;
}

/**
 * @summary The Leading Root Component Types of TbsDtSecAbort
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TbsDtSecAbort: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "sigAlg",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "assoID",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "time",
        false,
        $.hasTag(_TagClass.universal, 24)
    ),
    new $.ComponentSpec(
        "pkiPath",
        false,
        $.hasTag(_TagClass.universal, 4)
    ),
    new $.ComponentSpec(
        "seq",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "diag",
        true,
        $.hasTag(_TagClass.universal, 10)
    ),
];

/**
 * @summary The Trailing Root Component Types of TbsDtSecAbort
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TbsDtSecAbort: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of TbsDtSecAbort
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TbsDtSecAbort: $.ComponentSpec[] = [];

let _cached_decoder_for_TbsDtSecAbort: $.ASN1Decoder<TbsDtSecAbort> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TbsDtSecAbort
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TbsDtSecAbort} The decoded data structure.
 */
export function _decode_TbsDtSecAbort(el: _Element): TbsDtSecAbort {
    if (!_cached_decoder_for_TbsDtSecAbort) {
        _cached_decoder_for_TbsDtSecAbort = function (
            el: _Element
        ): TbsDtSecAbort {
            let sigAlg!: AlgorithmIdentifier;
            let assoID!: AssoID;
            let time!: TimeStamp;
            let pkiPath!: DER_PkiPath;
            let seq!: SequenceNumber;
            let diag: OPTIONAL<WrpError>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                sigAlg: (_el: _Element): void => {
                    sigAlg = _decode_AlgorithmIdentifier(_el);
                },
                assoID: (_el: _Element): void => {
                    assoID = _decode_AssoID(_el);
                },
                time: (_el: _Element): void => {
                    time = _decode_TimeStamp(_el);
                },
                pkiPath: (_el: _Element): void => {
                    pkiPath = _decode_DER_PkiPath(_el);
                },
                seq: (_el: _Element): void => {
                    seq = _decode_SequenceNumber(_el);
                },
                diag: (_el: _Element): void => {
                    diag = _decode_WrpError(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TbsDtSecAbort,
                _extension_additions_list_spec_for_TbsDtSecAbort,
                _root_component_type_list_2_spec_for_TbsDtSecAbort,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TbsDtSecAbort(
                sigAlg,
                assoID,
                time,
                pkiPath,
                seq,
                diag,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_TbsDtSecAbort(el);
}

let _cached_encoder_for_TbsDtSecAbort: $.ASN1Encoder<TbsDtSecAbort> | null = null;

/**
 * @summary Encodes a(n) TbsDtSecAbort into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TbsDtSecAbort, encoded as an ASN.1 Element.
 */
export function _encode_TbsDtSecAbort(
    value: TbsDtSecAbort,
    elGetter: $.ASN1Encoder<TbsDtSecAbort>
): _Element {
    if (!_cached_encoder_for_TbsDtSecAbort) {
        _cached_encoder_for_TbsDtSecAbort = function (
            value: TbsDtSecAbort        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AlgorithmIdentifier(
                                value.sigAlg,
                                $.DER
                            ),
                            /* REQUIRED   */ _encode_AssoID(
                                value.assoID,
                                $.DER
                            ),
                            /* REQUIRED   */ _encode_TimeStamp(
                                value.time,
                                $.DER
                            ),
                            /* REQUIRED   */ _encode_DER_PkiPath(
                                value.pkiPath,
                                $.DER
                            ),
                            /* REQUIRED   */ _encode_SequenceNumber(
                                value.seq,
                                $.DER
                            ),
                            /* IF_ABSENT  */ value.diag === undefined
                                ? undefined
                                : _encode_WrpError(value.diag, $.DER),
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
    return _cached_encoder_for_TbsDtSecAbort(value, elGetter);
}


/* eslint-enable */
