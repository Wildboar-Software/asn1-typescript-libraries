/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { GpLocationInfoList, _decode_GpLocationInfoList, _encode_GpLocationInfoList } from "../CSTA-call-control/GpLocationInfoList.ta.mjs";

import { UsageRules, _decode_UsageRules, _encode_UsageRules } from "../CSTA-call-control/UsageRules.ta.mjs";

import {
    Method,
    _enum_for_Method,
    ta /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_Method,
    _encode_Method
} from "../CSTA-call-control/Method.ta.mjs";

import { ProvidedBy, _decode_ProvidedBy, _encode_ProvidedBy } from "../CSTA-call-control/ProvidedBy.ta.mjs";



/**
 * @summary GeoPriv
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GeoPriv ::= SEQUENCE                                    -- Conforming RFC 4119
 * {    gpLocationInfo            GpLocationInfoList,
 *     usageRules            [0] IMPLICIT UsageRules                OPTIONAL,
 *     method                [1] IMPLICIT Method                OPTIONAL,
 *     providedBy            [2] IMPLICIT ProvidedBy             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GeoPriv {
    constructor (
        /**
         * @summary `gpLocationInfo`.
         * @public
         * @readonly
         */
        readonly gpLocationInfo: GpLocationInfoList,
        /**
         * @summary `usageRules`.
         * @public
         * @readonly
         */
        readonly usageRules: OPTIONAL<UsageRules>,
        /**
         * @summary `method`.
         * @public
         * @readonly
         */
        readonly method: OPTIONAL<Method>,
        /**
         * @summary `providedBy`.
         * @public
         * @readonly
         */
        readonly providedBy: OPTIONAL<ProvidedBy>
    ) {}

    /**
     * @summary Restructures an object into a GeoPriv
     * @description
     * 
     * This takes an `object` and converts it to a `GeoPriv`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GeoPriv`.
     * @returns {GeoPriv}
     */
    public static _from_object (_o: { [_K in keyof (GeoPriv)]: (GeoPriv)[_K] }): GeoPriv {
        return new GeoPriv(_o.gpLocationInfo, _o.usageRules, _o.method, _o.providedBy);
    }

        /**
         * @summary The enum used as the type of the component `method`
         * @public
         * @static
         */

    public static _enum_for_method = _enum_for_Method;
}

/**
 * @summary The Leading Root Component Types of GeoPriv
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GeoPriv: $.ComponentSpec[] = [
    new $.ComponentSpec("gpLocationInfo", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("usageRules", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("method", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("providedBy", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of GeoPriv
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GeoPriv: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GeoPriv
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GeoPriv: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GeoPriv: $.ASN1Decoder<GeoPriv> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GeoPriv
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GeoPriv (el: _Element): GeoPriv {
    if (!_cached_decoder_for_GeoPriv) { _cached_decoder_for_GeoPriv = function (el: _Element): GeoPriv {
    let gpLocationInfo!: GpLocationInfoList;
    let usageRules: OPTIONAL<UsageRules>;
    let method: OPTIONAL<Method>;
    let providedBy: OPTIONAL<ProvidedBy>;
    const callbacks: $.DecodingMap = {
        "gpLocationInfo": (_el: _Element): void => { gpLocationInfo = _decode_GpLocationInfoList(_el); },
        "usageRules": (_el: _Element): void => { usageRules = $._decode_implicit<UsageRules>(() => _decode_UsageRules)(_el); },
        "method": (_el: _Element): void => { method = $._decode_implicit<Method>(() => _decode_Method)(_el); },
        "providedBy": (_el: _Element): void => { providedBy = $._decode_implicit<ProvidedBy>(() => _decode_ProvidedBy)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GeoPriv,
        _extension_additions_list_spec_for_GeoPriv,
        _root_component_type_list_2_spec_for_GeoPriv,
        undefined,
    );
    return new GeoPriv(
        gpLocationInfo,
        usageRules,
        method,
        providedBy
    );
}; }
    return _cached_decoder_for_GeoPriv(el);
}

let _cached_encoder_for_GeoPriv: $.ASN1Encoder<GeoPriv> | null = null;

/**
 * @summary Encodes a(n) GeoPriv into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GeoPriv, encoded as an ASN.1 Element.
 */
export
function _encode_GeoPriv (value: GeoPriv, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GeoPriv) { _cached_encoder_for_GeoPriv = function (value: GeoPriv, elGetter: $.ASN1Encoder<GeoPriv>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_GpLocationInfoList(value.gpLocationInfo, $.BER),
            /* IF_ABSENT  */ ((value.usageRules === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_UsageRules, $.BER)(value.usageRules, $.BER)),
            /* IF_ABSENT  */ ((value.method === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_Method, $.BER)(value.method, $.BER)),
            /* IF_ABSENT  */ ((value.providedBy === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ProvidedBy, $.BER)(value.providedBy, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GeoPriv(value, elGetter);
}


/* eslint-enable */
