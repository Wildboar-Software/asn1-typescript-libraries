/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CurrencyFactor, _decode_CurrencyFactor, _encode_CurrencyFactor } from "../Tariffing-Data-Types/CurrencyFactor.ta.mjs";
// export { CurrencyFactor, _decode_CurrencyFactor, _encode_CurrencyFactor } from "../Tariffing-Data-Types/CurrencyFactor.ta.mjs";
import { noCharge } from "../Tariffing-Data-Types/noCharge.va.mjs";
// export { noCharge } from "../Tariffing-Data-Types/noCharge.va.mjs";
import { CurrencyScale, _decode_CurrencyScale, _encode_CurrencyScale } from "../Tariffing-Data-Types/CurrencyScale.ta.mjs";
// export { CurrencyScale, _decode_CurrencyScale, _encode_CurrencyScale } from "../Tariffing-Data-Types/CurrencyScale.ta.mjs";
import { noScale } from "../Tariffing-Data-Types/noScale.va.mjs";
// export { noScale } from "../Tariffing-Data-Types/noScale.va.mjs";


/**
 * @summary CurrencyFactorScale
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CurrencyFactorScale ::= SEQUENCE {
 *     currencyFactor    [0] CurrencyFactor DEFAULT noCharge ,
 *     currencyScale    [1] CurrencyScale DEFAULT noScale }
 * ```
 * 
 * @class
 */
export
class CurrencyFactorScale {
    constructor (
        /**
         * @summary `currencyFactor`.
         * @public
         * @readonly
         */
        readonly currencyFactor: OPTIONAL<CurrencyFactor>,
        /**
         * @summary `currencyScale`.
         * @public
         * @readonly
         */
        readonly currencyScale: OPTIONAL<CurrencyScale>
    ) {}

    /**
     * @summary Restructures an object into a CurrencyFactorScale
     * @description
     * 
     * This takes an `object` and converts it to a `CurrencyFactorScale`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CurrencyFactorScale`.
     * @returns {CurrencyFactorScale}
     */
    public static _from_object (_o: { [_K in keyof (CurrencyFactorScale)]: (CurrencyFactorScale)[_K] }): CurrencyFactorScale {
        return new CurrencyFactorScale(_o.currencyFactor, _o.currencyScale);
    }

    /**
     * @summary Getter that returns the default value for `currencyFactor`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_currencyFactor () { return noCharge; }
    /**
     * @summary Getter that returns the default value for `currencyScale`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_currencyScale () { return noScale; }
}

/**
 * @summary The Leading Root Component Types of CurrencyFactorScale
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CurrencyFactorScale: $.ComponentSpec[] = [
    new $.ComponentSpec("currencyFactor", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("currencyScale", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of CurrencyFactorScale
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CurrencyFactorScale: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CurrencyFactorScale
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CurrencyFactorScale: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CurrencyFactorScale: $.ASN1Decoder<CurrencyFactorScale> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CurrencyFactorScale
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CurrencyFactorScale (el: _Element): CurrencyFactorScale {
    if (!_cached_decoder_for_CurrencyFactorScale) { _cached_decoder_for_CurrencyFactorScale = function (el: _Element): CurrencyFactorScale {
    let currencyFactor: OPTIONAL<CurrencyFactor> = CurrencyFactorScale._default_value_for_currencyFactor;
    let currencyScale: OPTIONAL<CurrencyScale> = CurrencyFactorScale._default_value_for_currencyScale;
    const callbacks: $.DecodingMap = {
        "currencyFactor": (_el: _Element): void => { currencyFactor = $._decode_implicit<CurrencyFactor>(() => _decode_CurrencyFactor)(_el); },
        "currencyScale": (_el: _Element): void => { currencyScale = $._decode_implicit<CurrencyScale>(() => _decode_CurrencyScale)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CurrencyFactorScale,
        _extension_additions_list_spec_for_CurrencyFactorScale,
        _root_component_type_list_2_spec_for_CurrencyFactorScale,
        undefined,
    );
    return new CurrencyFactorScale(
        currencyFactor,
        currencyScale
    );
}; }
    return _cached_decoder_for_CurrencyFactorScale(el);
}

let _cached_encoder_for_CurrencyFactorScale: $.ASN1Encoder<CurrencyFactorScale> | null = null;

/**
 * @summary Encodes a(n) CurrencyFactorScale into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CurrencyFactorScale, encoded as an ASN.1 Element.
 */
export
function _encode_CurrencyFactorScale (value: CurrencyFactorScale, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CurrencyFactorScale) { _cached_encoder_for_CurrencyFactorScale = function (value: CurrencyFactorScale, elGetter: $.ASN1Encoder<CurrencyFactorScale>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.currencyFactor === undefined || $.deepEq(value.currencyFactor, CurrencyFactorScale._default_value_for_currencyFactor) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CurrencyFactor, $.BER)(value.currencyFactor, $.BER)),
            /* IF_DEFAULT */ (value.currencyScale === undefined || $.deepEq(value.currencyScale, CurrencyFactorScale._default_value_for_currencyScale) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CurrencyScale, $.BER)(value.currencyScale, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CurrencyFactorScale(value, elGetter);
}


/* eslint-enable */
