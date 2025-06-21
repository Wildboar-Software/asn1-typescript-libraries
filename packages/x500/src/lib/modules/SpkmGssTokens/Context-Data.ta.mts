/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    ChannelId,
    _decode_ChannelId,
    _encode_ChannelId,
} from "../SpkmGssTokens/ChannelId.ta.mjs";
import {
    Conf_Algs,
    _decode_Conf_Algs,
    _encode_Conf_Algs,
} from "../SpkmGssTokens/Conf-Algs.ta.mjs";
import {
    Intg_Algs,
    _decode_Intg_Algs,
    _encode_Intg_Algs,
} from "../SpkmGssTokens/Intg-Algs.ta.mjs";
import {
    Options,
    _decode_Options,
    _encode_Options,
} from "../SpkmGssTokens/Options.ta.mjs";
import {
    OWF_Algs,
    _decode_OWF_Algs,
    _encode_OWF_Algs,
} from "../SpkmGssTokens/OWF-Algs.ta.mjs";
/**
 * @summary Context_Data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Context-Data ::= SEQUENCE {
 *   channelId   ChannelId OPTIONAL,
 *   seq-number  INTEGER OPTIONAL,
 *   options     Options,
 *   conf-alg    Conf-Algs,
 *   intg-alg    Intg-Algs,
 *   owf-alg     OWF-Algs
 * }
 * ```
 *
 * @class
 */
export class Context_Data {
    constructor(
        /**
         * @summary `channelId`.
         * @public
         * @readonly
         */
        readonly channelId: OPTIONAL<ChannelId>,
        /**
         * @summary `seq_number`.
         * @public
         * @readonly
         */
        readonly seq_number: OPTIONAL<INTEGER>,
        /**
         * @summary `options`.
         * @public
         * @readonly
         */
        readonly options: Options,
        /**
         * @summary `conf_alg`.
         * @public
         * @readonly
         */
        readonly conf_alg: Conf_Algs,
        /**
         * @summary `intg_alg`.
         * @public
         * @readonly
         */
        readonly intg_alg: Intg_Algs,
        /**
         * @summary `owf_alg`.
         * @public
         * @readonly
         */
        readonly owf_alg: OWF_Algs
    ) {}

    /**
     * @summary Restructures an object into a Context_Data
     * @description
     *
     * This takes an `object` and converts it to a `Context_Data`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Context_Data`.
     * @returns {Context_Data}
     */
    public static _from_object(
        _o: { [_K in keyof Context_Data]: Context_Data[_K] }
    ): Context_Data {
        return new Context_Data(
            _o.channelId,
            _o.seq_number,
            _o.options,
            _o.conf_alg,
            _o.intg_alg,
            _o.owf_alg
        );
    }
}

/**
 * @summary The Leading Root Component Types of Context_Data
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Context_Data: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "channelId",
        true,
        $.hasTag(_TagClass.universal, 4)
    ),
    new $.ComponentSpec(
        "seq-number",
        true,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "options",
        false,
        $.hasTag(_TagClass.universal, 3)
    ),
    new $.ComponentSpec("conf-alg", false, $.hasAnyTag),
    new $.ComponentSpec(
        "intg-alg",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "owf-alg",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
];

/**
 * @summary The Trailing Root Component Types of Context_Data
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Context_Data: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of Context_Data
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Context_Data: $.ComponentSpec[] = [];

let _cached_decoder_for_Context_Data: $.ASN1Decoder<Context_Data> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Context_Data
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Context_Data} The decoded data structure.
 */
export function _decode_Context_Data(el: _Element) {
    if (!_cached_decoder_for_Context_Data) {
        _cached_decoder_for_Context_Data = function (
            el: _Element
        ): Context_Data {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let channelId: OPTIONAL<ChannelId>;
            let seq_number: OPTIONAL<INTEGER>;
            let options!: Options;
            let conf_alg!: Conf_Algs;
            let intg_alg!: Intg_Algs;
            let owf_alg!: OWF_Algs;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                channelId: (_el: _Element): void => {
                    channelId = _decode_ChannelId(_el);
                },
                "seq-number": (_el: _Element): void => {
                    seq_number = $._decodeInteger(_el);
                },
                options: (_el: _Element): void => {
                    options = _decode_Options(_el);
                },
                "conf-alg": (_el: _Element): void => {
                    conf_alg = _decode_Conf_Algs(_el);
                },
                "intg-alg": (_el: _Element): void => {
                    intg_alg = _decode_Intg_Algs(_el);
                },
                "owf-alg": (_el: _Element): void => {
                    owf_alg = _decode_OWF_Algs(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Context_Data,
                _extension_additions_list_spec_for_Context_Data,
                _root_component_type_list_2_spec_for_Context_Data,
                undefined
            );
            return new Context_Data(
                /* SEQUENCE_CONSTRUCTOR_CALL */ channelId,
                seq_number,
                options,
                conf_alg,
                intg_alg,
                owf_alg
            );
        };
    }
    return _cached_decoder_for_Context_Data(el);
}

let _cached_encoder_for_Context_Data: $.ASN1Encoder<Context_Data> | null = null;

/**
 * @summary Encodes a(n) Context_Data into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Context_Data, encoded as an ASN.1 Element.
 */
export function _encode_Context_Data(
    value: Context_Data,
    elGetter: $.ASN1Encoder<Context_Data>
) {
    if (!_cached_encoder_for_Context_Data) {
        _cached_encoder_for_Context_Data = function (
            value: Context_Data        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.channelId === undefined
                            ? undefined
                            : _encode_ChannelId(value.channelId, $.DER),
                        /* IF_ABSENT  */ value.seq_number === undefined
                            ? undefined
                            : $._encodeInteger(value.seq_number, $.DER),
                        /* REQUIRED   */ _encode_Options(value.options, $.DER),
                        /* REQUIRED   */ _encode_Conf_Algs(
                            value.conf_alg,
                            $.DER
                        ),
                        /* REQUIRED   */ _encode_Intg_Algs(
                            value.intg_alg,
                            $.DER
                        ),
                        /* REQUIRED   */ _encode_OWF_Algs(value.owf_alg, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_Context_Data(value, elGetter);
}


/* eslint-enable */
