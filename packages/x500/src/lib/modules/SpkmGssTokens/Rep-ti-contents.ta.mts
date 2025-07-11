/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BIT_STRING,
    INTEGER,
    OPTIONAL,
    UTCTime,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import {
    Validity,
    _decode_Validity,
    _encode_Validity,
} from "../AuthenticationFramework/Validity.ta.mjs";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta.mjs";
import {
    Context_Data,
    _decode_Context_Data,
    _encode_Context_Data,
} from "../SpkmGssTokens/Context-Data.ta.mjs";
import {
    Random_Integer,
    _decode_Random_Integer,
    _encode_Random_Integer,
} from "../SpkmGssTokens/Random-Integer.ta.mjs";
/**
 * @summary Rep_ti_contents
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Rep-ti-contents ::= SEQUENCE {
 *   tok-id        INTEGER(512), -- shall contain 0200 (hex)
 *   context-id    Random-Integer,
 *   pvno          [0]  BIT STRING OPTIONAL,
 *   timestamp     UTCTime OPTIONAL, -- mandatory for SPKM-2
 *   randTarg      Random-Integer,
 *   src-name      [1]  Name OPTIONAL,
 *   targ-name     Name,
 *   randSrc       Random-Integer,
 *   rep-data      Context-Data,
 *   validity      [2]  Validity OPTIONAL,
 *   key-estb-id   AlgorithmIdentifier{{SupportedAlgorithms}} OPTIONAL,
 *   key-estb-str  BIT STRING OPTIONAL
 * }
 * ```
 *
 */
export class Rep_ti_contents {
    constructor(
        /**
         * @summary `tok_id`.
         * @public
         * @readonly
         */
        readonly tok_id: INTEGER,
        /**
         * @summary `context_id`.
         * @public
         * @readonly
         */
        readonly context_id: Random_Integer,
        /**
         * @summary `pvno`.
         * @public
         * @readonly
         */
        readonly pvno: OPTIONAL<BIT_STRING>,
        /**
         * @summary `timestamp`.
         * @public
         * @readonly
         */
        readonly timestamp: OPTIONAL<UTCTime>,
        /**
         * @summary `randTarg`.
         * @public
         * @readonly
         */
        readonly randTarg: Random_Integer,
        /**
         * @summary `src_name`.
         * @public
         * @readonly
         */
        readonly src_name: OPTIONAL<Name>,
        /**
         * @summary `targ_name`.
         * @public
         * @readonly
         */
        readonly targ_name: Name,
        /**
         * @summary `randSrc`.
         * @public
         * @readonly
         */
        readonly randSrc: Random_Integer,
        /**
         * @summary `rep_data`.
         * @public
         * @readonly
         */
        readonly rep_data: Context_Data,
        /**
         * @summary `validity`.
         * @public
         * @readonly
         */
        readonly validity: OPTIONAL<Validity>,
        /**
         * @summary `key_estb_id`.
         * @public
         * @readonly
         */
        readonly key_estb_id: OPTIONAL<AlgorithmIdentifier>,
        /**
         * @summary `key_estb_str`.
         * @public
         * @readonly
         */
        readonly key_estb_str: OPTIONAL<BIT_STRING>
    ) {}

    /**
     * @summary Restructures an object into a Rep_ti_contents
     * @description
     *
     * This takes an `object` and converts it to a `Rep_ti_contents`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Rep_ti_contents`.
     * @returns {Rep_ti_contents}
     */
    public static _from_object(
        _o: { [_K in keyof Rep_ti_contents]: Rep_ti_contents[_K] }
    ): Rep_ti_contents {
        return new Rep_ti_contents(
            _o.tok_id,
            _o.context_id,
            _o.pvno,
            _o.timestamp,
            _o.randTarg,
            _o.src_name,
            _o.targ_name,
            _o.randSrc,
            _o.rep_data,
            _o.validity,
            _o.key_estb_id,
            _o.key_estb_str
        );
    }
}

/**
 * @summary The Leading Root Component Types of Rep_ti_contents
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Rep_ti_contents: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "tok-id",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "context-id",
        false,
        $.hasTag(_TagClass.universal, 3)
    ),
    new $.ComponentSpec(
        "pvno",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "timestamp",
        true,
        $.hasTag(_TagClass.universal, 23)
    ),
    new $.ComponentSpec(
        "randTarg",
        false,
        $.hasTag(_TagClass.universal, 3)
    ),
    new $.ComponentSpec(
        "src-name",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec("targ-name", false, $.hasAnyTag),
    new $.ComponentSpec(
        "randSrc",
        false,
        $.hasTag(_TagClass.universal, 3)
    ),
    new $.ComponentSpec(
        "rep-data",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "validity",
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        "key-estb-id",
        true,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "key-estb-str",
        true,
        $.hasTag(_TagClass.universal, 3)
    ),
];

/**
 * @summary The Trailing Root Component Types of Rep_ti_contents
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Rep_ti_contents: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of Rep_ti_contents
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Rep_ti_contents: $.ComponentSpec[] = [];

let _cached_decoder_for_Rep_ti_contents: $.ASN1Decoder<Rep_ti_contents> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Rep_ti_contents
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Rep_ti_contents} The decoded data structure.
 */
export function _decode_Rep_ti_contents(el: _Element): Rep_ti_contents {
    if (!_cached_decoder_for_Rep_ti_contents) {
        _cached_decoder_for_Rep_ti_contents = function (
            el: _Element
        ): Rep_ti_contents {
            let tok_id!: INTEGER;
            let context_id!: Random_Integer;
            let pvno: OPTIONAL<BIT_STRING>;
            let timestamp: OPTIONAL<UTCTime>;
            let randTarg!: Random_Integer;
            let src_name: OPTIONAL<Name>;
            let targ_name!: Name;
            let randSrc!: Random_Integer;
            let rep_data!: Context_Data;
            let validity: OPTIONAL<Validity>;
            let key_estb_id: OPTIONAL<AlgorithmIdentifier>;
            let key_estb_str: OPTIONAL<BIT_STRING>;
            const callbacks: $.DecodingMap = {
                "tok-id": (_el: _Element): void => {
                    tok_id = $._decodeInteger(_el);
                },
                "context-id": (_el: _Element): void => {
                    context_id = _decode_Random_Integer(_el);
                },
                pvno: (_el: _Element): void => {
                    pvno = $._decode_implicit<BIT_STRING>(
                        () => $._decodeBitString
                    )(_el);
                },
                timestamp: (_el: _Element): void => {
                    timestamp = $._decodeUTCTime(_el);
                },
                randTarg: (_el: _Element): void => {
                    randTarg = _decode_Random_Integer(_el);
                },
                "src-name": (_el: _Element): void => {
                    src_name = $._decode_explicit<Name>(() => _decode_Name)(
                        _el
                    );
                },
                "targ-name": (_el: _Element): void => {
                    targ_name = _decode_Name(_el);
                },
                randSrc: (_el: _Element): void => {
                    randSrc = _decode_Random_Integer(_el);
                },
                "rep-data": (_el: _Element): void => {
                    rep_data = _decode_Context_Data(_el);
                },
                validity: (_el: _Element): void => {
                    validity = $._decode_implicit<Validity>(
                        () => _decode_Validity
                    )(_el);
                },
                "key-estb-id": (_el: _Element): void => {
                    key_estb_id = _decode_AlgorithmIdentifier(_el);
                },
                "key-estb-str": (_el: _Element): void => {
                    key_estb_str = $._decodeBitString(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Rep_ti_contents,
                _extension_additions_list_spec_for_Rep_ti_contents,
                _root_component_type_list_2_spec_for_Rep_ti_contents,
                undefined
            );
            return new Rep_ti_contents(
                tok_id,
                context_id,
                pvno,
                timestamp,
                randTarg,
                src_name,
                targ_name,
                randSrc,
                rep_data,
                validity,
                key_estb_id,
                key_estb_str
            );
        };
    }
    return _cached_decoder_for_Rep_ti_contents(el);
}

let _cached_encoder_for_Rep_ti_contents: $.ASN1Encoder<Rep_ti_contents> | null = null;

/**
 * @summary Encodes a(n) Rep_ti_contents into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Rep_ti_contents, encoded as an ASN.1 Element.
 */
export function _encode_Rep_ti_contents(
    value: Rep_ti_contents,
    elGetter: $.ASN1Encoder<Rep_ti_contents>
): _Element {
    if (!_cached_encoder_for_Rep_ti_contents) {
        _cached_encoder_for_Rep_ti_contents = function (
            value: Rep_ti_contents        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeInteger(value.tok_id, $.DER),
                        /* REQUIRED   */ _encode_Random_Integer(
                            value.context_id,
                            $.DER
                        ),
                        /* IF_ABSENT  */ value.pvno === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => $._encodeBitString,
                                  $.DER
                              )(value.pvno, $.DER),
                        /* IF_ABSENT  */ value.timestamp === undefined
                            ? undefined
                            : $._encodeUTCTime(value.timestamp, $.DER),
                        /* REQUIRED   */ _encode_Random_Integer(
                            value.randTarg,
                            $.DER
                        ),
                        /* IF_ABSENT  */ value.src_name === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_Name,
                                  $.DER
                              )(value.src_name, $.DER),
                        /* REQUIRED   */ _encode_Name(value.targ_name, $.DER),
                        /* REQUIRED   */ _encode_Random_Integer(
                            value.randSrc,
                            $.DER
                        ),
                        /* REQUIRED   */ _encode_Context_Data(
                            value.rep_data,
                            $.DER
                        ),
                        /* IF_ABSENT  */ value.validity === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_Validity,
                                  $.DER
                              )(value.validity, $.DER),
                        /* IF_ABSENT  */ value.key_estb_id === undefined
                            ? undefined
                            : _encode_AlgorithmIdentifier(
                                  value.key_estb_id,
                                  $.DER
                              ),
                        /* IF_ABSENT  */ value.key_estb_str === undefined
                            ? undefined
                            : $._encodeBitString(value.key_estb_str, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_Rep_ti_contents(value, elGetter);
}


/* eslint-enable */
