/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EnhancedVP, _decode_EnhancedVP, _encode_EnhancedVP } from "../Short-Message-Service-Operations-asn1-97/EnhancedVP.ta.mjs";

/**
 * @summary ValidityPeriodEnh
 * @description
 *
 * Enhanced Validity Period (ECMA-325 §E.1.2.2). `singleShotSM` TRUE means the
 * Service Centre tries delivery only once. `enhancedVP` may give the period in
 * relative units, seconds, or semi-octets. The standard says further formats
 * may be added later.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ValidityPeriodEnh ::= SEQUENCE {
 *     singleShotSM BOOLEAN DEFAULT FALSE,
 *     enhancedVP EnhancedVP OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ValidityPeriodEnh {
    /**
     * @summary `singleShotSM`.
     * @description
     *
     * Default FALSE. TRUE means the Service Centre attempts delivery only once
     * (ECMA-325 §E.1.2.2).
     * @public
     * @readonly
     */
    readonly singleShotSM: OPTIONAL<BOOLEAN>;
    /**
     * @summary `enhancedVP`.
     * @description
     *
     * Optional period: relative (Table E.2), seconds, or semi-octets (ECMA-325
     * §E.1.2.2). The standard gives no separate rule for omitting it.
     * @public
     * @readonly
     */
    readonly enhancedVP: OPTIONAL<EnhancedVP>;

    constructor (
        singleShotSM: OPTIONAL<BOOLEAN>,
        enhancedVP: OPTIONAL<EnhancedVP>
    ) {
        this.singleShotSM = singleShotSM;
        this.enhancedVP = enhancedVP;
    }

    /**
     * @summary Restructures an object into a ValidityPeriodEnh
     * @description
     * 
     * This takes an `object` and converts it to a `ValidityPeriodEnh`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ValidityPeriodEnh`.
     * @returns {ValidityPeriodEnh}
     */
    public static _from_object (_o: { [_K in keyof (ValidityPeriodEnh)]: (ValidityPeriodEnh)[_K] }): ValidityPeriodEnh {
        return new ValidityPeriodEnh(_o.singleShotSM, _o.enhancedVP);
    }

    /**
     * @summary Getter that returns the default value for `singleShotSM`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_singleShotSM () { return false; }
}

/**
 * @summary The Leading Root Component Types of ValidityPeriodEnh
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ValidityPeriodEnh: $.ComponentSpec[] = [
    new $.ComponentSpec("singleShotSM", true, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("enhancedVP", true, $.or($.hasTag(_TagClass.context, 0), $.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of ValidityPeriodEnh
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ValidityPeriodEnh: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ValidityPeriodEnh
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ValidityPeriodEnh: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ValidityPeriodEnh: $.ASN1Decoder<ValidityPeriodEnh> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ValidityPeriodEnh
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ValidityPeriodEnh (el: _Element): ValidityPeriodEnh {
    if (!_cached_decoder_for_ValidityPeriodEnh) { _cached_decoder_for_ValidityPeriodEnh = function (el: _Element): ValidityPeriodEnh {
    let singleShotSM: OPTIONAL<BOOLEAN> = ValidityPeriodEnh._default_value_for_singleShotSM;
    let enhancedVP: OPTIONAL<EnhancedVP>;
    const callbacks: $.DecodingMap = {
        "singleShotSM": (_el: _Element): void => { singleShotSM = $._decodeBoolean(_el); },
        "enhancedVP": (_el: _Element): void => { enhancedVP = _decode_EnhancedVP(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ValidityPeriodEnh,
        _extension_additions_list_spec_for_ValidityPeriodEnh,
        _root_component_type_list_2_spec_for_ValidityPeriodEnh,
        undefined,
    );
    return new ValidityPeriodEnh(
        singleShotSM,
        enhancedVP
    );
}; }
    return _cached_decoder_for_ValidityPeriodEnh(el);
}

let _cached_encoder_for_ValidityPeriodEnh: $.ASN1Encoder<ValidityPeriodEnh> | null = null;

/**
 * @summary Encodes a(n) ValidityPeriodEnh into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ValidityPeriodEnh, encoded as an ASN.1 Element.
 */
export
function _encode_ValidityPeriodEnh (value: ValidityPeriodEnh, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ValidityPeriodEnh) { _cached_encoder_for_ValidityPeriodEnh = function (value: ValidityPeriodEnh, _elGetter: $.ASN1Encoder<ValidityPeriodEnh>): _Element {
    const _components: _Element[] = [];
    if (value.singleShotSM !== undefined && !$.deepEq(value.singleShotSM, ValidityPeriodEnh._default_value_for_singleShotSM)) {
        _components.push(/* IF_DEFAULT */ $._encodeBoolean(value.singleShotSM, $.BER));
    }
    if (value.enhancedVP !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_EnhancedVP(value.enhancedVP, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ValidityPeriodEnh(value, elGetter);
}

/* eslint-enable */
