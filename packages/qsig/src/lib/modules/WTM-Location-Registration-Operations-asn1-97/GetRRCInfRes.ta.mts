/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type AlternativeId, _decode_AlternativeId, _encode_AlternativeId } from "../WTM-Location-Registration-Operations-asn1-97/AlternativeId.ta.mjs";
import { type RRClass, _decode_RRClass, _encode_RRClass } from "../WTM-Location-Registration-Operations-asn1-97/RRClass.ta.mjs";
import { type LrExtension, _decode_LrExtension, _encode_LrExtension } from "../WTM-Location-Registration-Operations-asn1-97/LrExtension.ta.mjs";

/**
 * @summary GetRRCInfRes
 * @description
 *
 * Route-restriction information from the HDB (ECMA-302 §7.5.2.1). The Home PINX
 * includes the route restriction class, the alternative identity, or both, if
 * applicable. Both may be absent; §7.5.2.1 does not require either element.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-302/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetRRCInfRes ::= SEQUENCE {
 *     alternativeId AlternativeId OPTIONAL,
 *     rrClass RRClass OPTIONAL,
 *     argExtension LrExtension OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class GetRRCInfRes {
    /**
     * @summary `alternativeId`.
     * @description
     *
     * Alternative identity of the WTM user, included when the Home PINX has one
     * (§7.5.2.1).
     *
     * @public
     * @readonly
     */
    readonly alternativeId: OPTIONAL<AlternativeId>;
    /**
     * @summary `rrClass`.
     * @description
     *
     * Route restriction class, included when applicable (§7.5.2.1). Integer
     * values 0 through 99 are not assigned meanings (§6.3.1). §6.9.19 states no
     * protocol interaction with ANF-RRC.
     *
     * @public
     * @readonly
     */
    readonly rrClass: OPTIONAL<RRClass>;
    /**
     * @summary `argExtension`.
     * @description
     *
     * Manufacturer-specific data. `WTMLRExtSet` assigns no extensions (ECMA-302
     * §6.3.1).
     *
     * @public
     * @readonly
     */
    readonly argExtension: OPTIONAL<LrExtension>;

    constructor (
        alternativeId?: OPTIONAL<AlternativeId>,
        rrClass?: OPTIONAL<RRClass>,
        argExtension?: OPTIONAL<LrExtension>
    ) {
        this.alternativeId = alternativeId;
        this.rrClass = rrClass;
        this.argExtension = argExtension;
    }

    /**
     * @summary Restructures an object into a GetRRCInfRes
     * @description
     * 
     * This takes an `object` and converts it to a `GetRRCInfRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetRRCInfRes`.
     * @returns {GetRRCInfRes}
     */
    public static _from_object (_o: { [_K in keyof (GetRRCInfRes)]: (GetRRCInfRes)[_K] }): GetRRCInfRes {
        return new GetRRCInfRes(_o.alternativeId, _o.rrClass, _o.argExtension);
    }

}

/**
 * @summary The Leading Root Component Types of GetRRCInfRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetRRCInfRes: $.ComponentSpec[] = [
    new $.ComponentSpec("alternativeId", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("rrClass", true, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("argExtension", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of GetRRCInfRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetRRCInfRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetRRCInfRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetRRCInfRes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetRRCInfRes: $.ASN1Decoder<GetRRCInfRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetRRCInfRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetRRCInfRes (el: _Element): GetRRCInfRes {
    if (!_cached_decoder_for_GetRRCInfRes) { _cached_decoder_for_GetRRCInfRes = function (el: _Element): GetRRCInfRes {
    let alternativeId: OPTIONAL<AlternativeId>;
    let rrClass: OPTIONAL<RRClass>;
    let argExtension: OPTIONAL<LrExtension>;
    const callbacks: $.DecodingMap = {
        "alternativeId": (_el: _Element): void => { alternativeId = _decode_AlternativeId(_el); },
        "rrClass": (_el: _Element): void => { rrClass = _decode_RRClass(_el); },
        "argExtension": (_el: _Element): void => { argExtension = _decode_LrExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetRRCInfRes,
        _extension_additions_list_spec_for_GetRRCInfRes,
        _root_component_type_list_2_spec_for_GetRRCInfRes,
        undefined,
    );
    return new GetRRCInfRes(
        alternativeId,
        rrClass,
        argExtension
    );
}; }
    return _cached_decoder_for_GetRRCInfRes(el);
}

let _cached_encoder_for_GetRRCInfRes: $.ASN1Encoder<GetRRCInfRes> | null = null;

/**
 * @summary Encodes a(n) GetRRCInfRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetRRCInfRes, encoded as an ASN.1 Element.
 */
export
function _encode_GetRRCInfRes (value: GetRRCInfRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetRRCInfRes) { _cached_encoder_for_GetRRCInfRes = function (value: GetRRCInfRes, _elGetter: $.ASN1Encoder<GetRRCInfRes>): _Element {
    const _components: _Element[] = [];
    if (value.alternativeId !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_AlternativeId(value.alternativeId, $.BER));
    }
    if (value.rrClass !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_RRClass(value.rrClass, $.BER));
    }
    if (value.argExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_LrExtension(value.argExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_GetRRCInfRes(value, elGetter);
}

/* eslint-enable */
