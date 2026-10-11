/* eslint-disable */
import {
    BOOLEAN,
    PrintableString,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RIParametersDeprecated_rIType, _decode_RIParametersDeprecated_rIType, _encode_RIParametersDeprecated_rIType, _enum_for_RIParametersDeprecated_rIType } from "../ACP133CommonContent/RIParametersDeprecated-rIType.ta.mjs";
import { Classification, _decode_Classification, _encode_Classification, _enum_for_Classification } from "../ACP133CommonContent/Classification.ta.mjs";


/**
 * @summary RIParametersDeprecated
 * @description
 *
 * Routing-indicator parameters as a SET. ACP 133
 * edition D deprecated this in favour of the
 * dollar-separated `DirectoryString` in
 * {@link RIParameters}. Figure 3-2 of ACP 133
 * (June 1998) is this shape.
 *
 * [draft-dally-acp133-and-ldap-01, section 6.16](https://datatracker.ietf.org/doc/html/draft-dally-acp133-and-ldap-01#section-6.16).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RIParametersDeprecated ::= SET {
 *     rI                 [0] PrintableString,
 *     rIType             [1] ENUMERATED { normal(0), off-line(1), partTimeTerminal(2) },
 *     minimize         [2] BOOLEAN, -- not used any more --
 *     sHD             [3] PrintableString,
 *     classification     [4] Classification
 * }
 * ```
 * 
 * @class
 */
export
class RIParametersDeprecated {
    constructor (
        /**
         * Routing indicator the PLA is delivered to. The
         * `rI` attribute is exactly seven characters.
         * This component has no size constraint.
         * Figure 3-2 uses `RUHPZFF`.
         *
         * [draft-dally-acp133-and-ldap-01, section 3.107](https://datatracker.ietf.org/doc/html/draft-dally-acp133-and-ldap-01#section-3.107).
         * @public
         * @readonly
         */
        readonly rI: PrintableString,
        /**
         * `normal`, `off-line`, or a part-time terminal.
         * @public
         * @readonly
         */
        readonly rIType: RIParametersDeprecated_rIType,
        /**
         * No longer used. The edition D string form
         * fixes this field as `FALSE`. The MINIMIZE
         * condition is the separate `minimize`
         * attribute: when set, originators must not
         * send unnecessary messages to the recipient.
         *
         * [draft-dally-acp133-and-ldap-01, section 3.85](https://datatracker.ietf.org/doc/html/draft-dally-acp133-and-ldap-01#section-3.85).
         * @public
         * @readonly
         */
        readonly minimize: BOOLEAN,
        /**
         * Special handling designator the routing
         * indicator can support.
         *
         * [draft-dally-acp133-and-ldap-01, section 3.118](https://datatracker.ietf.org/doc/html/draft-dally-acp133-and-ldap-01#section-3.118).
         * @public
         * @readonly
         */
        readonly sHD: PrintableString,
        /**
         * Classification carried with this routing
         * indicator. See {@link Classification}.
         * @public
         * @readonly
         */
        readonly classification: Classification
    ) {}

    /**
     * @summary Restructures an object into a RIParametersDeprecated
     * @description
     * 
     * This takes an `object` and converts it to a `RIParametersDeprecated`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RIParametersDeprecated`.
     * @returns {RIParametersDeprecated}
     */
    public static _from_object (_o: { [_K in keyof (RIParametersDeprecated)]: (RIParametersDeprecated)[_K] }): RIParametersDeprecated {
        return new RIParametersDeprecated(_o.rI, _o.rIType, _o.minimize, _o.sHD, _o.classification);
    }

        /**
         * @summary The enum used as the type of the component `rIType`
         * @public
         * @static
         */

    public static _enum_for_rIType = _enum_for_RIParametersDeprecated_rIType;        /**
         * @summary The enum used as the type of the component `classification`
         * @public
         * @static
         */

    public static _enum_for_classification = _enum_for_Classification;
}

/**
 * @summary The Leading Root Component Types of RIParametersDeprecated
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RIParametersDeprecated: $.ComponentSpec[] = [
    new $.ComponentSpec("rI", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("rIType", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("minimize", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("sHD", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("classification", false, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of RIParametersDeprecated
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RIParametersDeprecated: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RIParametersDeprecated
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RIParametersDeprecated: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RIParametersDeprecated: $.ASN1Decoder<RIParametersDeprecated> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RIParametersDeprecated
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RIParametersDeprecated (el: _Element): RIParametersDeprecated {
    if (!_cached_decoder_for_RIParametersDeprecated) { _cached_decoder_for_RIParametersDeprecated = function (el: _Element): RIParametersDeprecated {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let rI!: PrintableString;
    let rIType!: RIParametersDeprecated_rIType;
    let minimize!: BOOLEAN;
    let sHD!: PrintableString;
    let classification!: Classification;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "rI": (_el: _Element): void => { rI = $._decode_explicit<PrintableString>(() => $._decodePrintableString)(_el); },
        "rIType": (_el: _Element): void => { rIType = $._decode_explicit<RIParametersDeprecated_rIType>(() => _decode_RIParametersDeprecated_rIType)(_el); },
        "minimize": (_el: _Element): void => { minimize = $._decode_explicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "sHD": (_el: _Element): void => { sHD = $._decode_explicit<PrintableString>(() => $._decodePrintableString)(_el); },
        "classification": (_el: _Element): void => { classification = $._decode_explicit<Classification>(() => _decode_Classification)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_RIParametersDeprecated,
        _extension_additions_list_spec_for_RIParametersDeprecated,
        _root_component_type_list_2_spec_for_RIParametersDeprecated,
        undefined,
    );
    return new RIParametersDeprecated( /* SET_CONSTRUCTOR_CALL */
        rI,
        rIType,
        minimize,
        sHD,
        classification
    );
}; }
    return _cached_decoder_for_RIParametersDeprecated(el);
}

let _cached_encoder_for_RIParametersDeprecated: $.ASN1Encoder<RIParametersDeprecated> | null = null;

/**
 * @summary Encodes a(n) RIParametersDeprecated into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RIParametersDeprecated, encoded as an ASN.1 Element.
 */
export
function _encode_RIParametersDeprecated (value: RIParametersDeprecated, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RIParametersDeprecated) { _cached_encoder_for_RIParametersDeprecated = function (value: RIParametersDeprecated): _Element {
    return $._encodeSet(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => $._encodePrintableString, $.BER)(value.rI, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_RIParametersDeprecated_rIType, $.BER)(value.rIType, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.minimize, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 3, () => $._encodePrintableString, $.BER)(value.sHD, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 4, () => _encode_Classification, $.BER)(value.classification, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RIParametersDeprecated(value, elGetter);
}


/* eslint-enable */
